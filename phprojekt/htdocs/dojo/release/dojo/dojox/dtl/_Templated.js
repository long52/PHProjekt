/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._hasResource["dojox.dtl._Templated"]||(dojo._hasResource["dojox.dtl._Templated"]=!0,dojo.provide("dojox.dtl._Templated"),dojo.require("dijit._Templated"),dojo.require("dojox.dtl._base"),dojo.declare("dojox.dtl._Templated",dijit._Templated,{_dijitTemplateCompat:!1,buildRendering:function(){var b;if(!this.domNode||this._template){if(!this._template){var a=this.getCachedTemplate(this.templatePath,this.templateString,this._skipNodeCache);a instanceof dojox.dtl.Template?this._template=a:b=a}if(!b)if(a=
new dojox.dtl._Context(this),this._created||delete a._getter,a=dojo._toDom(this._template.render(a)),a.nodeType!==1&&a.nodeType!==3)for(var c=0,e=a.childNodes.length;c<e;++c){if(b=a.childNodes[c],b.nodeType==1)break}else b=a;this._attachTemplateNodes(b);if(this.widgetsInTemplate){var a=dojo.parser,d,f;if(a._query!="[dojoType]")d=a._query,f=a._attrName,a._query="[dojoType]",a._attrName="dojoType";c=this._startupWidgets=dojo.parser.parse(b,{noStart:!this._earlyTemplatedStartup,inherited:{dir:this.dir,
lang:this.lang}});if(d)a._query=d,a._attrName=f;this._supportingWidgets=dijit.findWidgets(b);this._attachTemplateNodes(c,function(a,b){return a[b]})}this.domNode&&(dojo.place(b,this.domNode,"before"),this.destroyDescendants(),dojo.destroy(this.domNode));this.domNode=b;this._fillContent(this.srcNodeRef)}},_templateCache:{},getCachedTemplate:function(b,a,c){var e=this._templateCache,d=a||b;if(e[d])return e[d];a=dojo.string.trim(a||dojo.cache(b,{sanitize:!0}));if(this._dijitTemplateCompat&&(c||a.match(/\$\{([^\}]+)\}/g)))a=
this._stringRepl(a);return c||!a.match(/\{[{%]([^\}]+)[%}]\}/g)?e[d]=dojo._toDom(a):e[d]=new dojox.dtl.Template(a)},render:function(){this.buildRendering()},startup:function(){dojo.forEach(this._startupWidgets,function(b){b&&!b._started&&b.startup&&b.startup()});this.inherited(arguments)}}));