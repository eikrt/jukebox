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
  (sql/insert-multi! spec :tracks [{:title (first post) :artist (second post) :album (nth post 2) :tags (nth post 3) :genre (nth post 4) :filepath (nth post 5) :release_year (nth post 6) :length (nth post 7) }]))
