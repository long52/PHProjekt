/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._hasResource["dojox.gfx.svg_attach"]||(dojo._hasResource["dojox.gfx.svg_attach"]=!0,dojo.provide("dojox.gfx.svg_attach"),dojo.require("dojox.gfx.svg"),dojo.experimental("dojox.gfx.svg_attach"),function(){function i(a){var c=a.rawNode.getAttribute("fill");if(c=="none")a.fillStyle=null;else{var b=null,d=e.getRef(c);if(d)switch(d.tagName.toLowerCase()){case "lineargradient":b=h(f.defaultLinearGradient,d);dojo.forEach(["x1","y1","x2","y2"],function(a){b[a]=d.getAttribute(a)});break;case "radialgradient":b=
h(f.defaultRadialGradient,d);dojo.forEach(["cx","cy","r"],function(a){b[a]=d.getAttribute(a)});b.cx=d.getAttribute("cx");b.cy=d.getAttribute("cy");b.r=d.getAttribute("r");break;case "pattern":b=dojo.clone(f.defaultPattern),dojo.forEach(["x","y","width","height"],function(a){b[a]=d.getAttribute(a)}),b.src=d.firstChild.getAttributeNS(e.xmlns.xlink,"href")}else if(b=new dojo.Color(c),c=a.rawNode.getAttribute("fill-opacity"),c!=null)b.a=c;a.fillStyle=b}}function h(a,c){var b=dojo.clone(a);b.colors=[];
for(var d=0;d<c.childNodes.length;++d)b.colors.push({offset:c.childNodes[d].getAttribute("offset"),color:new dojo.Color(c.childNodes[d].getAttribute("stop-color"))});return b}function g(a,c){var b=a.shape=dojo.clone(c),d=a.rawNode,e;for(e in b)b[e]=d.getAttribute(e)}var f=dojox.gfx,e=f.svg;e.attachNode=function(a){if(!a)return null;var c=null;switch(a.tagName.toLowerCase()){case e.Rect.nodeType:a=c=new e.Rect(a);g(a,f.defaultRect);a.shape.r=Math.min(a.rawNode.getAttribute("rx"),a.rawNode.getAttribute("ry"));
break;case e.Ellipse.nodeType:c=new e.Ellipse(a);g(c,f.defaultEllipse);break;case e.Polyline.nodeType:c=new e.Polyline(a);g(c,f.defaultPolyline);break;case e.Path.nodeType:c=new e.Path(a);g(c,f.defaultPath);break;case e.Circle.nodeType:c=new e.Circle(a);g(c,f.defaultCircle);break;case e.Line.nodeType:c=new e.Line(a);g(c,f.defaultLine);break;case e.Image.nodeType:c=new e.Image(a);g(c,f.defaultImage);break;case e.Text.nodeType:if((c=a.getElementsByTagName("textPath"))&&c.length){c=new e.TextPath(a);
g(c,f.defaultPath);var b=c,a=b.shape=dojo.clone(f.defaultTextPath),b=b.rawNode}else b=c=new e.Text(a),a=b.shape=dojo.clone(f.defaultText),b=b.rawNode,a.x=b.getAttribute("x"),a.y=b.getAttribute("y");a.align=b.getAttribute("text-anchor");a.decoration=b.getAttribute("text-decoration");a.rotated=parseFloat(b.getAttribute("rotate"))!=0;a.kerning=b.getAttribute("kerning")=="auto";a.text=b.firstChild.nodeValue;b=c;a=b.fontStyle=dojo.clone(f.defaultFont);b=b.rawNode;a.style=b.getAttribute("font-style");a.variant=
b.getAttribute("font-variant");a.weight=b.getAttribute("font-weight");a.size=b.getAttribute("font-size");a.family=b.getAttribute("font-family");break;default:return null}if(!(c instanceof e.Image)){i(c);var d=c,a=d.rawNode,b=a.getAttribute("stroke");if(b==null||b=="none")d.strokeStyle=null;else if(d=d.strokeStyle=dojo.clone(f.defaultStroke),b=new dojo.Color(b)){d.color=b;d.color.a=a.getAttribute("stroke-opacity");d.width=a.getAttribute("stroke-width");d.cap=a.getAttribute("stroke-linecap");d.join=
a.getAttribute("stroke-linejoin");if(d.join=="miter")d.join=a.getAttribute("stroke-miterlimit");d.style=a.getAttribute("dojoGfxStrokeStyle")}}a=c;b=a.rawNode.getAttribute("transform");b.match(/^matrix\(.+\)$/)?(b=b.slice(7,-1).split(","),a.matrix=f.matrix.normalize({xx:parseFloat(b[0]),xy:parseFloat(b[2]),yx:parseFloat(b[1]),yy:parseFloat(b[3]),dx:parseFloat(b[4]),dy:parseFloat(b[5])})):a.matrix=null;return c};e.attachSurface=function(a){var c=new e.Surface;c.rawNode=a;a=a.getElementsByTagName("defs");
if(a.length==0)return null;c.defNode=a[0];return c}}());