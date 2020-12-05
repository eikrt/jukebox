(ns jukebox.front.front
  
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]])
            )

  
(def state-track (r/atom ""))
;(defn debug? []
 ; (re-find #"debug" (-> js/document .-location .-search)))


;(reagent-dom/render [components/main-component :debug (debug?)]
                                        ;                   (.getElementById js/document "jukebox"))

(defn onclick [track]
  
  (reset! state-track track)
  
  )
(defn player-component []
 
  [:div {:id "player"}
   [:p "Currently playing:" @state-track]
  [:audio
  {:src (str "../audio/"  (js/decodeURI @state-track)), :controls "controls"}
  "\n            Your browser does not support the\n            "
  [:code "audio"]
  " element.\n    \n"]
]
  )
(defn get-track-list []

(go (let [response (<! (http/get "/api"
                                 {:with-credentials? false
                                  :response-format :json
          :keywords? true}))]
      (js/console.log  (:body response)))) 
  )
(defn track-list [track]
  [:div {:id "track-list"} 
   [:input {:type "button" :value track :on-click #(onclick track)}]
   ]
  )
(defn page-component []
  [:div  [player-component]
   ;[track-list "Islands/6. Islands.wav"]
   [track-list (get-track-list)]
  ])
  (rdom/render [page-component]
             (.getElementById js/document "jukebox"))
