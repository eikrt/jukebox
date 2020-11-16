(ns jukebox.front.front
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            ))
(def state-track (r/atom "Track1.wav"))
(enable-console-print!)
;(defn debug? []
 ; (re-find #"debug" (-> js/document .-location .-search)))


;(reagent-dom/render [components/main-component :debug (debug?)]
                                        ;                   (.getElementById js/document "jukebox"))

(defn onclick [track]
  (reset! state-track track)
  (r/force-update-all)
  )
(defn player-component [track]
 [:div {:id "player"} 
  [:audio
  {:src (str "../resources/audio/" state-track), :controls "controls"}
  "\n            Your browser does not support the\n            "
  [:code "audio"]
  " element.\n    \n"]
]
  )
(defn track-list [track]
  [:div {:id "track-list"} 
   [:input {:type "button" :value "song" :on-click #(onclick track)}]
   ]
  )
(defn page-component []
  [:div  [player-component "Track1.wav"]
  [track-list]])
;(defn render-front []
 ; (rdom/render
  ; [say-hello]
   ;(.-body js/document)))
(rdom/render [page-component]
             (.getElementById js/document "jukebox"))
