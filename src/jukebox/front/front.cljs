(ns jukebox.front.front
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            ))

(enable-console-print!)
;(defn debug? []
 ; (re-find #"debug" (-> js/document .-location .-search)))


;(reagent-dom/render [components/main-component :debug (debug?)]
 ;                   (.getElementById js/document "jukebox"))

(defn hello-component [name]
  [:p "hello, " name "!"])
(defn say-hello []
  [hello-component "world"])
;(defn render-front []
 ; (rdom/render
  ; [say-hello]
   ;(.-body js/document)))
(rdom/render [say-hello]
             (.getElementById js/document "jukebox"))
