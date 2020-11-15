(ns jukebox.views.display
  (:require [jukebox.views.layout :as layout]
            [hiccup.core :refer [h]]
            [hiccup.form :as form]
            [ring.util.anti-forgery :as anti-forgery]
            [clojure.string :as str]))

(defn display-track [track]

[:audio
  {:src "../resources/audio/Track1.wav", :controls "controls"}
  "\n            Your browser does not support the\n            "
  [:code "audio"]
  " element.\n    \n"]

  )
(defn display-tracks [tracks]
  [:div {:class "tracks sixteen columns alpha omega"}
   (map
    (fn [track] [:h2 {:class "track"} (h (:title track))])
    tracks)])

(defn display-index []
  [:div {:class "index"}
   [:p {:class "index"} "Welcome to Jukebox"]

[:audio
  {:src "../resources/audio/Track1.wav", :controls "controls"}
  "\n            Your browser does not support the\n            "
  [:code "audio"]
  " element.\n    \n"]

   ])
(defn index [tracks]
  (layout/common "Jukebox"
                 ;; (post-form)
                 [:div {:class "clear"}]
                 (display-tracks tracks)))
