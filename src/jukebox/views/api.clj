(ns jukebox.views.api
  (:require [jukebox.views.layout :as layout]
            [hiccup.core :refer [h]]
            [hiccup.form :as form]
            [ring.util.anti-forgery :as anti-forgery]
            [clojure.string :as str]
            [ring.util.response :refer [response]]
            [cheshire.core :refer :all]
            ))
(defn api-content []
  (generate-string {:pumpetti "pumpetti"})
  )
  
(defn api []
  ;(layout/api "Jukebox"
   ;              [:div {:class "api"}]
                 (api-content))
