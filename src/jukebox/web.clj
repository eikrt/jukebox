(ns jukebox.web
  (:require [compojure.core :refer [defroutes]]
            [ring.adapter.jetty :as ring]
            [compojure.route :as route]
            [hiccup.page :as page]
            [ring.util.anti-forgery :as anti-forgery]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [jukebox.controllers.routing :as posts]
            [jukebox.views.layout :as layout]
            [jukebox.models.migration :as schema])
  (:gen-class))

(defroutes routes
  posts/routes
  (route/resources "/")
  (route/not-found (layout/not-found)))
(def application (wrap-defaults routes site-defaults))
(defn server [port]
  (def server (ring/run-jetty application {:port port :join? false})))
(defn start-server []
  (schema/migrate)
  (let [port (Integer. (or (System/getenv "PORT") "8222"))]
    (server port)))
(defn crud
  []
  
  (schema/migrate)
  (pr "title")
  (def title (read-line))
  (pr "artist")
  (def artist (read-line))
  (pr "album")
  (def album (read-line))
  (pr "tags")
  (def tags (read-line))
  (pr "genre")
  (def genre (read-line))
  (pr "filepath")
  (def filepath (read-line))
  (pr "release_year")
  (def release_year (Integer/parseInt(read-line)))
  (pr "length")
  (def length (Integer/parseInt(read-line)))
  (posts/create [title artist album tags genre filepath release_year length])
  )
(defn -main [& args]
  (start-server))

