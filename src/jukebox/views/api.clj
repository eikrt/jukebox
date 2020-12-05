(ns jukebox.views.api
  (:require [jukebox.views.layout :as layout]
            [hiccup.core :refer [h]]
            [hiccup.form :as form]
            [ring.util.anti-forgery :as anti-forgery]
            [clojure.string :as str]
            [ring.util.response :refer [response]]
            [cheshire.core :refer :all]
            ))
(defn api-content [tracks]
 ; (map (fn [track]
 ;        (generate-string  track {:pretty true)

;                  )
 ;  (first tracks))
                                        ;)
  (generate-string (first tracks) {:pretty true})
)

(defn api [tracks]
  (api-content tracks))
