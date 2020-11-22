(defproject personal-web-app "0.1.0-SNAPSHOT"
  :description "software for entertainment system"
  :url "https://github.com/eikrt/jukebox"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/java.jdbc "0.6.1"]
                 [org.clojure/clojurescript "1.10.773"]
                 [org.clojure/core.async "1.3.610"] 
                 [org.clojure/tools.logging "1.1.0"]
                 [reagent "0.10.0"]
                 
                 [org.postgresql/postgresql "9.4-1201-jdbc41"]
                 [ring "1.4.0"]
                 [ring/ring-jetty-adapter "1.4.0"]
                 [ring/ring-defaults "0.1.2"]
                 [compojure "1.4.0"]
                 [hiccup "1.0.5"]
                 [cljs-http "0.1.46"] 
                 ]
 :plugins [[lein-cljsbuild "1.1.8"]] 
  :repl-options {:init-ns jukebox.web}
:main ^:skip-aot jukebox.web
:uberjar-name "app.jar"
:ring {:handler jukebox/server
       :init jukebox/migration/migrate}
:profiles {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                                [ring-mock "0.1.5"]
                                [cider/piggieback "0.5.2"]
                                
                                ]

                 :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}
           :uberjar {:aot :all}}

:cljsbuild {
    :builds [{
        ; The path to the top-level ClojureScript source directory:
        :source-paths ["src/jukebox/front"]
        ; The standard ClojureScript compiler options:
        ; (See the ClojureScript compiler documentation for details.)
        :compiler {
          :output-to "resources/public/js/jukebox.js"  ; default: target/cljsbuild-main.js
          :optimizations :whitespace
          :pretty-print true}}]})
