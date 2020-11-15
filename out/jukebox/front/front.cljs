(ns jukebox.front.front
  (:require [reagent.dom :as reagent-dom]))

(enable-console-print!)
;(defn debug? []
 ; (re-find #"debug" (-> js/document .-location .-search)))


;(reagent-dom/render [components/main-component :debug (debug?)]
 ;                   (.getElementById js/document "jukebox"))

(defn hello-component [name]
  [:p "hello, " name "!"])
(defn say-hello []
  [hello-component "world"])
