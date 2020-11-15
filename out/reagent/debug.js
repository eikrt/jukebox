// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__12100__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12100 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12101__i = 0, G__12101__a = new Array(arguments.length -  0);
while (G__12101__i < G__12101__a.length) {G__12101__a[G__12101__i] = arguments[G__12101__i + 0]; ++G__12101__i;}
  args = new cljs.core.IndexedSeq(G__12101__a,0,null);
} 
return G__12100__delegate.call(this,args);};
G__12100.cljs$lang$maxFixedArity = 0;
G__12100.cljs$lang$applyTo = (function (arglist__12102){
var args = cljs.core.seq(arglist__12102);
return G__12100__delegate(args);
});
G__12100.cljs$core$IFn$_invoke$arity$variadic = G__12100__delegate;
return G__12100;
})()
);

(o.error = (function() { 
var G__12103__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12103 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12104__i = 0, G__12104__a = new Array(arguments.length -  0);
while (G__12104__i < G__12104__a.length) {G__12104__a[G__12104__i] = arguments[G__12104__i + 0]; ++G__12104__i;}
  args = new cljs.core.IndexedSeq(G__12104__a,0,null);
} 
return G__12103__delegate.call(this,args);};
G__12103.cljs$lang$maxFixedArity = 0;
G__12103.cljs$lang$applyTo = (function (arglist__12105){
var args = cljs.core.seq(arglist__12105);
return G__12103__delegate(args);
});
G__12103.cljs$core$IFn$_invoke$arity$variadic = G__12103__delegate;
return G__12103;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
