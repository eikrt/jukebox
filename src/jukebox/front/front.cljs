(ns jukebox.front.front
  
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]])
            )

  
(def state-track (r/atom ""))

(def api-response (r/atom ""))
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



(defn get-from-api! []
  (go
    (let [response (<! (http/get "/api" {:with-credentials? false
                                         :response-format :json
          :keywords? true}))]
      (reset! api-response (js->clj (:body response)))))
  
  )
  
(defn track-list []
  
  (pr api-response)
  [:div {:id "track-list"} 
   [:input {:type "button" :value @api-response :on-click #(onclick track)}]
   ]
  )
(defn start-listening []
  [:div {:id "start-listening"}
   [:input {:type "button" :value "Start Listening!" :on-click #(get-from-api!)}]]
   )
(defn page-component []

  [:div  [player-component]
                                        ; [track-list "Islands/6. Islands.wav"]
   [start-listening]
   [track-list ]
   ;[track-list (get-track-list)]
  ])
  (rdom/render [page-component]
             (.getElementById js/document "jukebox"))
