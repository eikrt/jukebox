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
                 [cheshire "5.10.0"]
                 [reagent "0.10.0"]
                 [org.postgresql/postgresql "9.4-1201-jdbc41"]
                 [ring/ring-core "1.8.2"]
                 [ring/ring-jetty-adapter "1.8.2"]
                 [ring/ring-defaults "0.3.2"]
                 [ring/ring-json "0.5.0"]
                 [compojure "1.6.2"]
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
                                
                                ]

                 }
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
