(ns jukebox.views.api
  (:require [jukebox.views.layout :as layout]
            [hiccup.core :refer [h]]
            [hiccup.form :as form]
            [ring.util.anti-forgery :as anti-forgery]
            [clojure.string :as str]
            [ring.util.response :refer [response]]
           
            ))
(defn api-content [request]
  (response {:title "pumpetti"}))
  
(defn api [request]
  (api-content request))
