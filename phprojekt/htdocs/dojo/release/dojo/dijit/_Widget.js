/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dijit._Widget"])dojo._hasResource["dijit._Widget"]=!0,dojo.provide("dijit._Widget"),dojo.require("dijit._WidgetBase"),dojo.require("dijit._base"),dojo.connect(dojo,"_connect",function(a,d){a&&dojo.isFunction(a._onConnect)&&a._onConnect(d)}),dijit._connectOnUseEventHandler=function(){},dijit._lastKeyDownNode=null,dojo.isIE?function(){var a=function(a){dijit._lastKeyDownNode=a.srcElement};dojo.doc.attachEvent("onkeydown",a);dojo.addOnWindowUnload(function(){dojo.doc.detachEvent("onkeydown",
a)})}():dojo.doc.addEventListener("keydown",function(a){dijit._lastKeyDownNode=a.target},!0),function(){dojo.declare("dijit._Widget",dijit._WidgetBase,{_deferredConnects:{onClick:"",onDblClick:"",onKeyDown:"",onKeyPress:"",onKeyUp:"",onMouseMove:"",onMouseDown:"",onMouseOut:"",onMouseOver:"",onMouseLeave:"",onMouseEnter:"",onMouseUp:""},onClick:dijit._connectOnUseEventHandler,onDblClick:dijit._connectOnUseEventHandler,onKeyDown:dijit._connectOnUseEventHandler,onKeyPress:dijit._connectOnUseEventHandler,
onKeyUp:dijit._connectOnUseEventHandler,onMouseDown:dijit._connectOnUseEventHandler,onMouseMove:dijit._connectOnUseEventHandler,onMouseOut:dijit._connectOnUseEventHandler,onMouseOver:dijit._connectOnUseEventHandler,onMouseLeave:dijit._connectOnUseEventHandler,onMouseEnter:dijit._connectOnUseEventHandler,onMouseUp:dijit._connectOnUseEventHandler,create:function(a,d){this._deferredConnects=dojo.clone(this._deferredConnects);for(var b in this.attributeMap)delete this._deferredConnects[b];for(b in this._deferredConnects)this[b]!==
dijit._connectOnUseEventHandler&&delete this._deferredConnects[b];this.inherited(arguments);if(this.domNode)for(b in this.params)this._onConnect(b)},_onConnect:function(a){a in this._deferredConnects&&(this.connect(this[this._deferredConnects[a]||"domNode"],a.toLowerCase(),a),delete this._deferredConnects[a])},focused:!1,isFocusable:function(){return this.focus&&dojo.style(this.domNode,"display")!="none"},onFocus:function(){},onBlur:function(){},_onFocus:function(){this.onFocus()},_onBlur:function(){this.onBlur()},
setAttribute:function(a,d){dojo.deprecated(this.declaredClass+"::setAttribute(attr, value) is deprecated. Use set() instead.","","2.0");this.set(a,d)},attr:function(a,d){if(dojo.config.isDebug){var b=arguments.callee._ach||(arguments.callee._ach={}),c=(arguments.callee.caller||"unknown caller").toString();b[c]||(dojo.deprecated(this.declaredClass+"::attr() is deprecated. Use get() or set() instead, called from "+c,"","2.0"),b[c]=!0)}return arguments.length>=2||typeof a==="object"?this.set.apply(this,
arguments):this.get(a)},nodesWithKeyClick:["input","button"],connect:function(a,d,b){var c=dojo,f=c._connect,g=this.inherited(arguments,[a,d=="ondijitclick"?"onclick":d,b]);if(d=="ondijitclick"&&c.indexOf(this.nodesWithKeyClick,a.nodeName.toLowerCase())==-1){var h=c.hitch(this,b);g.push(f(a,"onkeydown",this,function(e){if((e.keyCode==c.keys.ENTER||e.keyCode==c.keys.SPACE)&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&!e.metaKey)dijit._lastKeyDownNode=e.target,"openDropDown"in this&&a==this._buttonNode||e.preventDefault()}),
f(a,"onkeyup",this,function(a){if((a.keyCode==c.keys.ENTER||a.keyCode==c.keys.SPACE)&&a.target==dijit._lastKeyDownNode&&!a.ctrlKey&&!a.shiftKey&&!a.altKey&&!a.metaKey)return dijit._lastKeyDownNode=null,h(a)}))}return g},_onShow:function(){this.onShow()},onShow:function(){},onHide:function(){},onClose:function(){return!0}})}();