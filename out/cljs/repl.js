// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12637){
var map__12638 = p__12637;
var map__12638__$1 = (((((!((map__12638 == null))))?(((((map__12638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12638):map__12638);
var m = map__12638__$1;
var n = cljs.core.get.call(null,map__12638__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12638__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12640_12672 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12641_12673 = null;
var count__12642_12674 = (0);
var i__12643_12675 = (0);
while(true){
if((i__12643_12675 < count__12642_12674)){
var f_12676 = cljs.core._nth.call(null,chunk__12641_12673,i__12643_12675);
cljs.core.println.call(null,"  ",f_12676);


var G__12677 = seq__12640_12672;
var G__12678 = chunk__12641_12673;
var G__12679 = count__12642_12674;
var G__12680 = (i__12643_12675 + (1));
seq__12640_12672 = G__12677;
chunk__12641_12673 = G__12678;
count__12642_12674 = G__12679;
i__12643_12675 = G__12680;
continue;
} else {
var temp__5720__auto___12681 = cljs.core.seq.call(null,seq__12640_12672);
if(temp__5720__auto___12681){
var seq__12640_12682__$1 = temp__5720__auto___12681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12640_12682__$1)){
var c__4556__auto___12683 = cljs.core.chunk_first.call(null,seq__12640_12682__$1);
var G__12684 = cljs.core.chunk_rest.call(null,seq__12640_12682__$1);
var G__12685 = c__4556__auto___12683;
var G__12686 = cljs.core.count.call(null,c__4556__auto___12683);
var G__12687 = (0);
seq__12640_12672 = G__12684;
chunk__12641_12673 = G__12685;
count__12642_12674 = G__12686;
i__12643_12675 = G__12687;
continue;
} else {
var f_12688 = cljs.core.first.call(null,seq__12640_12682__$1);
cljs.core.println.call(null,"  ",f_12688);


var G__12689 = cljs.core.next.call(null,seq__12640_12682__$1);
var G__12690 = null;
var G__12691 = (0);
var G__12692 = (0);
seq__12640_12672 = G__12689;
chunk__12641_12673 = G__12690;
count__12642_12674 = G__12691;
i__12643_12675 = G__12692;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12693 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12693);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12693)))?cljs.core.second.call(null,arglists_12693):arglists_12693));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12644_12694 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12645_12695 = null;
var count__12646_12696 = (0);
var i__12647_12697 = (0);
while(true){
if((i__12647_12697 < count__12646_12696)){
var vec__12658_12698 = cljs.core._nth.call(null,chunk__12645_12695,i__12647_12697);
var name_12699 = cljs.core.nth.call(null,vec__12658_12698,(0),null);
var map__12661_12700 = cljs.core.nth.call(null,vec__12658_12698,(1),null);
var map__12661_12701__$1 = (((((!((map__12661_12700 == null))))?(((((map__12661_12700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12661_12700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12661_12700):map__12661_12700);
var doc_12702 = cljs.core.get.call(null,map__12661_12701__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12703 = cljs.core.get.call(null,map__12661_12701__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12699);

cljs.core.println.call(null," ",arglists_12703);

if(cljs.core.truth_(doc_12702)){
cljs.core.println.call(null," ",doc_12702);
} else {
}


var G__12704 = seq__12644_12694;
var G__12705 = chunk__12645_12695;
var G__12706 = count__12646_12696;
var G__12707 = (i__12647_12697 + (1));
seq__12644_12694 = G__12704;
chunk__12645_12695 = G__12705;
count__12646_12696 = G__12706;
i__12647_12697 = G__12707;
continue;
} else {
var temp__5720__auto___12708 = cljs.core.seq.call(null,seq__12644_12694);
if(temp__5720__auto___12708){
var seq__12644_12709__$1 = temp__5720__auto___12708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12644_12709__$1)){
var c__4556__auto___12710 = cljs.core.chunk_first.call(null,seq__12644_12709__$1);
var G__12711 = cljs.core.chunk_rest.call(null,seq__12644_12709__$1);
var G__12712 = c__4556__auto___12710;
var G__12713 = cljs.core.count.call(null,c__4556__auto___12710);
var G__12714 = (0);
seq__12644_12694 = G__12711;
chunk__12645_12695 = G__12712;
count__12646_12696 = G__12713;
i__12647_12697 = G__12714;
continue;
} else {
var vec__12663_12715 = cljs.core.first.call(null,seq__12644_12709__$1);
var name_12716 = cljs.core.nth.call(null,vec__12663_12715,(0),null);
var map__12666_12717 = cljs.core.nth.call(null,vec__12663_12715,(1),null);
var map__12666_12718__$1 = (((((!((map__12666_12717 == null))))?(((((map__12666_12717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12666_12717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12666_12717):map__12666_12717);
var doc_12719 = cljs.core.get.call(null,map__12666_12718__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12720 = cljs.core.get.call(null,map__12666_12718__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12716);

cljs.core.println.call(null," ",arglists_12720);

if(cljs.core.truth_(doc_12719)){
cljs.core.println.call(null," ",doc_12719);
} else {
}


var G__12721 = cljs.core.next.call(null,seq__12644_12709__$1);
var G__12722 = null;
var G__12723 = (0);
var G__12724 = (0);
seq__12644_12694 = G__12721;
chunk__12645_12695 = G__12722;
count__12646_12696 = G__12723;
i__12647_12697 = G__12724;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__12668 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12669 = null;
var count__12670 = (0);
var i__12671 = (0);
while(true){
if((i__12671 < count__12670)){
var role = cljs.core._nth.call(null,chunk__12669,i__12671);
var temp__5720__auto___12725__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___12725__$1)){
var spec_12726 = temp__5720__auto___12725__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12726));
} else {
}


var G__12727 = seq__12668;
var G__12728 = chunk__12669;
var G__12729 = count__12670;
var G__12730 = (i__12671 + (1));
seq__12668 = G__12727;
chunk__12669 = G__12728;
count__12670 = G__12729;
i__12671 = G__12730;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__12668);
if(temp__5720__auto____$1){
var seq__12668__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12668__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__12668__$1);
var G__12731 = cljs.core.chunk_rest.call(null,seq__12668__$1);
var G__12732 = c__4556__auto__;
var G__12733 = cljs.core.count.call(null,c__4556__auto__);
var G__12734 = (0);
seq__12668 = G__12731;
chunk__12669 = G__12732;
count__12670 = G__12733;
i__12671 = G__12734;
continue;
} else {
var role = cljs.core.first.call(null,seq__12668__$1);
var temp__5720__auto___12735__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___12735__$2)){
var spec_12736 = temp__5720__auto___12735__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12736));
} else {
}


var G__12737 = cljs.core.next.call(null,seq__12668__$1);
var G__12738 = null;
var G__12739 = (0);
var G__12740 = (0);
seq__12668 = G__12737;
chunk__12669 = G__12738;
count__12670 = G__12739;
i__12671 = G__12740;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__12741 = cljs.core.conj.call(null,via,t);
var G__12742 = cljs.core.ex_cause.call(null,t);
via = G__12741;
t = G__12742;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__12745 = datafied_throwable;
var map__12745__$1 = (((((!((map__12745 == null))))?(((((map__12745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12745):map__12745);
var via = cljs.core.get.call(null,map__12745__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__12745__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__12745__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__12746 = cljs.core.last.call(null,via);
var map__12746__$1 = (((((!((map__12746 == null))))?(((((map__12746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12746):map__12746);
var type = cljs.core.get.call(null,map__12746__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__12746__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__12746__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__12747 = data;
var map__12747__$1 = (((((!((map__12747 == null))))?(((((map__12747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12747):map__12747);
var problems = cljs.core.get.call(null,map__12747__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__12747__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__12747__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__12748 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__12748__$1 = (((((!((map__12748 == null))))?(((((map__12748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12748):map__12748);
var top_data = map__12748__$1;
var source = cljs.core.get.call(null,map__12748__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__12753 = phase;
var G__12753__$1 = (((G__12753 instanceof cljs.core.Keyword))?G__12753.fqn:null);
switch (G__12753__$1) {
case "read-source":
var map__12754 = data;
var map__12754__$1 = (((((!((map__12754 == null))))?(((((map__12754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12754):map__12754);
var line = cljs.core.get.call(null,map__12754__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__12754__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__12756 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__12756__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__12756,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__12756);
var G__12756__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__12756__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__12756__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__12756__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__12756__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__12757 = top_data;
var G__12757__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__12757,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__12757);
var G__12757__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__12757__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__12757__$1);
var G__12757__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__12757__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__12757__$2);
var G__12757__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__12757__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__12757__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__12757__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__12757__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__12758 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__12758,(0),null);
var method = cljs.core.nth.call(null,vec__12758,(1),null);
var file = cljs.core.nth.call(null,vec__12758,(2),null);
var line = cljs.core.nth.call(null,vec__12758,(3),null);
var G__12761 = top_data;
var G__12761__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__12761,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__12761);
var G__12761__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__12761__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__12761__$1);
var G__12761__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__12761__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__12761__$2);
var G__12761__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__12761__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__12761__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__12761__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__12761__$4;
}

break;
case "execution":
var vec__12762 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__12762,(0),null);
var method = cljs.core.nth.call(null,vec__12762,(1),null);
var file = cljs.core.nth.call(null,vec__12762,(2),null);
var line = cljs.core.nth.call(null,vec__12762,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__12744_SHARP_){
var or__4126__auto__ = (p1__12744_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__12744_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__12765 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__12765__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__12765,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__12765);
var G__12765__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__12765__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__12765__$1);
var G__12765__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__12765__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__12765__$2);
var G__12765__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__12765__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__12765__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__12765__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__12765__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12753__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__12769){
var map__12770 = p__12769;
var map__12770__$1 = (((((!((map__12770 == null))))?(((((map__12770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12770):map__12770);
var triage_data = map__12770__$1;
var phase = cljs.core.get.call(null,map__12770__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__12770__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__12770__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__12770__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__12770__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__12770__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__12770__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__12770__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__12772 = phase;
var G__12772__$1 = (((G__12772 instanceof cljs.core.Keyword))?G__12772.fqn:null);
switch (G__12772__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12773_12782 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12774_12783 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12775_12784 = true;
var _STAR_print_fn_STAR__temp_val__12776_12785 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12775_12784);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12776_12785);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__12767_SHARP_){
return cljs.core.dissoc.call(null,p1__12767_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12774_12783);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12773_12782);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12777_12786 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12778_12787 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12779_12788 = true;
var _STAR_print_fn_STAR__temp_val__12780_12789 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12779_12788);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12780_12789);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__12768_SHARP_){
return cljs.core.dissoc.call(null,p1__12768_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12778_12787);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12777_12786);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12772__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
