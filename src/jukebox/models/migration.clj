(ns jukebox.models.migration
  (:require [clojure.java.jdbc :as sql]
            [jukebox.models.query :as post]))

(defn migrated? []
  (-> (sql/query post/spec
                 [(str "select count(*) from information_schema.tables "
                       "where table_name='tracks'")])
      first :count pos?))

(defn migrate []
  (when (not (migrated?))
    (print "Creating database structure") (flush)
    (sql/db-do-commands post/spec
                        (sql/create-table-ddl
                         :tracks
                         [[:id :serial "PRIMARY KEY"]
                          [:title :varchar "NOT NULL"]
                          [:artist :varchar "NOT NULL"]
                          [:album :varchar "NOT NULL"]
                          [:tags :varchar "NOT NULL"]
                          [:genre :varchar "NOT NULL"]
                          
                          [:filepath :varchar "NOT NULL"]
                          [:release_year :integer]
                          [:length :integer]
                          
                          [:created_at :timestamp
                           "NOT NULL" "DEFAULT CURRENT_TIMESTAMP"]]))
    (println "done")))
