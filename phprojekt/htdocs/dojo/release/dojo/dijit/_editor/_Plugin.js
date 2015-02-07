/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._hasResource["dijit._editor._Plugin"]||(dojo._hasResource["dijit._editor._Plugin"]=!0,dojo.provide("dijit._editor._Plugin"),dojo.require("dijit._Widget"),dojo.require("dijit.form.Button"),dojo.declare("dijit._editor._Plugin",null,{constructor:function(a){this.params=a||{};dojo.mixin(this,this.params);this._connects=[];this._attrPairNames={}},editor:null,iconClassPrefix:"dijitEditorIcon",button:null,command:"",useDefaultCommand:!0,buttonClass:dijit.form.Button,disabled:!1,getLabel:function(a){return this.editor.commands[a]},
_initButton:function(){if(this.command.length){var a=this.getLabel(this.command),b=this.editor,c=this.iconClassPrefix+" "+this.iconClassPrefix+this.command.charAt(0).toUpperCase()+this.command.substr(1);if(!this.button)this.button=new this.buttonClass(dojo.mixin({label:a,dir:b.dir,lang:b.lang,showLabel:!1,iconClass:c,dropDown:this.dropDown,tabIndex:"-1"},this.params||{}))}this.get("disabled")&&this.button&&this.button.set("disabled",this.get("disabled"))},destroy:function(){dojo.forEach(this._connects,
dojo.disconnect);this.dropDown&&this.dropDown.destroyRecursive()},connect:function(a,b,c){this._connects.push(dojo.connect(a,b,this,c))},updateState:function(){var a=this.editor,b=this.command,c,d;if(a&&a.isLoaded&&b.length){var e=this.get("disabled");if(this.button)try{d=!e&&a.queryCommandEnabled(b);if(this.enabled!==d)this.enabled=d,this.button.set("disabled",!d);if(typeof this.button.checked=="boolean"&&(c=a.queryCommandState(b),this.checked!==c))this.checked=c,this.button.set("checked",a.queryCommandState(b))}catch(f){console.log(f)}}},
setEditor:function(a){this.editor=a;this._initButton();if(this.button&&this.useDefaultCommand)this.editor.queryCommandAvailable(this.command)?this.connect(this.button,"onClick",dojo.hitch(this.editor,"execCommand",this.command,this.commandArg)):this.button.domNode.style.display="none";this.connect(this.editor,"onNormalizedDisplayChanged","updateState")},setToolbar:function(a){this.button&&a.addChild(this.button)},set:function(a,b){if(typeof a==="object"){for(var c in a)this.set(c,a[c]);return this}c=
this._getAttrNames(a);if(this[c.s])var d=this[c.s].apply(this,Array.prototype.slice.call(arguments,1));else this._set(a,b);return d||this},get:function(a){var b=this._getAttrNames(a);return this[b.g]?this[b.g]():this[a]},_setDisabledAttr:function(a){this.disabled=a;this.updateState()},_getAttrNames:function(a){var b=this._attrPairNames;if(b[a])return b[a];var c=a.charAt(0).toUpperCase()+a.substr(1);return b[a]={s:"_set"+c+"Attr",g:"_get"+c+"Attr"}},_set:function(a,b){this[a]=b}}));