// Compiled by ClojureScript 1.10.773 {}
goog.provide('jukebox.front.front');
goog.require('cljs.core');
goog.require('reagent.dom');
cljs.core.enable_console_print_BANG_.call(null);
jukebox.front.front.hello_component = (function jukebox$front$front$hello_component(name){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"hello, ",name,"!"], null);
});
jukebox.front.front.say_hello = (function jukebox$front$front$say_hello(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jukebox.front.front.hello_component,"world"], null);
});

//# sourceMappingURL=front.js.map
