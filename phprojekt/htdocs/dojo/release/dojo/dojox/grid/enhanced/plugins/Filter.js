/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._hasResource["dojox.grid.enhanced.plugins.Filter"]||(dojo._hasResource["dojox.grid.enhanced.plugins.Filter"]=!0,dojo.provide("dojox.grid.enhanced.plugins.Filter"),dojo.requireLocalization("dojox.grid.enhanced","Filter",null,"ROOT,ar,ca,cs,da,de,el,es,fi,fr,he,hr,hu,it,ja,kk,ko,nb,nl,pl,pt,pt-pt,ro,ru,sk,sl,sv,th,tr,zh,zh-tw"),dojo.require("dojox.grid.enhanced._Plugin"),dojo.require("dojox.grid.enhanced.plugins.Dialog"),dojo.require("dojox.grid.enhanced.plugins.filter.FilterLayer"),dojo.require("dojox.grid.enhanced.plugins.filter.FilterBar"),
dojo.require("dojox.grid.enhanced.plugins.filter.FilterDefDialog"),dojo.require("dojox.grid.enhanced.plugins.filter.FilterStatusTip"),dojo.require("dojox.grid.enhanced.plugins.filter.ClearFilterConfirm"),function(){var e=dojox.grid.enhanced.plugins,c=e.filter;dojo.declare("dojox.grid.enhanced.plugins.Filter",dojox.grid.enhanced._Plugin,{name:"filter",constructor:function(b,a){this.grid=b;this.nls=dojo.i18n.getLocalization("dojox.grid.enhanced","Filter");a=this.args=dojo.isObject(a)?a:{};if(typeof a.ruleCount!=
"number"||a.ruleCount<0)a.ruleCount=3;this._wrapStore();var d={plugin:this};this.clearFilterDialog=new dojox.grid.enhanced.plugins.Dialog({refNode:this.grid.domNode,title:this.nls.clearFilterDialogTitle,content:new c.ClearFilterConfirm(d)});this.filterDefDialog=new c.FilterDefDialog(d);this.filterBar=new c.FilterBar(d);this.filterStatusTip=new c.FilterStatusTip(d);b.onFilterDefined=function(){};this.connect(b.layer("filter"),"onFilterDefined",function(){b.onFilterDefined(b.getFilter(),b.getFilterRelation())})},
destroy:function(){this.inherited(arguments);try{this.grid.unwrap("filter"),this.filterBar.destroyRecursive(),this.filterBar=null,this.clearFilterDialog.destroyRecursive(),this.clearFilterDialog=null,this.filterStatusTip.destroy(),this.filterStatusTip=null,this.filterDefDialog.destroy(),this.args=this.nls=this.grid=this.filterDefDialog=null}catch(b){console.warn("Filter.destroy() error:",b)}},_wrapStore:function(){var b=this.grid,a=this.args,a=a.isServerSide?new c.ServerSideFilterLayer(a):new c.ClientSideFilterLayer({cacheSize:a.filterCacheSize,
fetchAll:a.fetchAllOnFirstFilter,getter:this._clientFilterGetter});e.wrap(b,"_storeLayerFetch",a);this.connect(b,"_onDelete",dojo.hitch(a,"invalidate"))},onSetStore:function(){this.filterDefDialog.clearFilter(!0)},_clientFilterGetter:function(b,a,c){return a.get(c,b)}})}(),dojox.grid.EnhancedGrid.registerPlugin(dojox.grid.enhanced.plugins.Filter));