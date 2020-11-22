(ns jukebox.views.api
  (:require [jukebox.views.layout :as layout]
            [hiccup.core :refer [h]]
            [hiccup.form :as form]
            [ring.util.anti-forgery :as anti-forgery]
            [clojure.string :as str]
            
           
            ))
(defn api-content []
  [:div {:class "pumpetti"}
   [:p "pumpetti"]])
  
(defn api []
  (layout/common "api"
                 [:div {:class "clear"}]
                 (api-content)))
