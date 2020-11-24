(ns jukebox.web
  (:require [compojure.core :refer [defroutes]]
            [ring.adapter.jetty :as ring]
            [compojure.route :as route]
            [compojure.core :refer [routes wrap-routes]]
            [hiccup.page :as page]
            [ring.util.anti-forgery :as anti-forgery]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults api-defaults]]
            [jukebox.controllers.routing :as posts]
            [jukebox.views.layout :as layout]
            [jukebox.models.migration :as schema]
            [jukebox.views.api :as api]
            [ring.util.response :refer [response]]
            [ring.middleware.json :refer [wrap-json-response]]
            [ring.middleware.json :refer [wrap-json-body]]
            [ring.middleware.json :refer [wrap-json-params]]
            [compojure.handler :as handler]
            )
  (:gen-class))


(defroutes api-routes
  posts/api-routes
  (route/resources "/")
                                        ;(route/not-found (layout/not-found)))
  )

(defroutes app-routes
  posts/app-routes
  (route/resources "/")
                                        ;(route/not-found (layout/not-found))
  )
(defn wrap-app-middleware
  [handler]
  (fn [req]
    (println "app Middleware")
    (handler req)))

(defn wrap-api-middleware
  [handler]
  (fn [req]
    (println "api Middleware")
    (handler req)))
(def application
 (routes
  (-> api-routes) 
  (-> app-routes)
  ))                                      ;
;(def application (wrap-defaults api-routes site-defaults))
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

