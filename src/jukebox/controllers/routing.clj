(ns jukebox.controllers.routing
  (:require [compojure.core :refer [defroutes GET POST]]
            [clojure.string :as str]
            [ring.util.response :as ring]
            [jukebox.views.display :as view]
            [jukebox.models.query :as model]
            [ring.util.response :refer [response redirect]]))

(defn create
  [post]
  (when-not (str/blank? (first post))
    (model/create post))
  (ring/redirect "/"))
(defn index []
  (view/index  (model/all)))

(defroutes routes
  (GET "/" [] (index))

  )
