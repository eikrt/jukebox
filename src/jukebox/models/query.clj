(ns jukebox.models.query
  (:require [clojure.java.jdbc :as sql])
  (:require [clojure.string :as str]))

(def spec (or (System/getenv "DATABASE_URL")
              "postgresql://localhost:5432/tracks?user=postgres&password=postgres"))


(defn query-by [query by]
  (def statement (str/join "select * from tracks where" query "=" by "order by id desc"))
  (into [] (sql/query spec [statement])))
(defn all []
  (into [] (sql/query spec ["select * from tracks order by id desc"])))

(defn create [post]
  (sql/insert-multi! spec :posts [{:body (first post) :category (second post) :title (nth post 2)}]))
