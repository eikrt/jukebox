(ns jukebox.controllers.routing
  (:require [compojure.core :refer [defroutes GET POST]]
            [clojure.string :as str]
            [ring.util.response :as ring]
            [jukebox.views.display :as view]
            [jukebox.models.query :as model]
            [jukebox.views.api :as api]
            [ring.util.response :refer [response redirect]]))

(defn create
  [post]
  (when-not (str/blank? (first post))
    (model/create post))
  (ring/redirect "/"))
(defn index []
  (view/index  (model/all)))
(defn api []
  (api/api (model/all))
  )

(defroutes api-routes
  
  (GET "/api" [] (api))

  )
(defroutes app-routes
  
  (GET "/" [] (index))

  )
