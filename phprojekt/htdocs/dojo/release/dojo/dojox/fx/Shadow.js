/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._hasResource["dojox.fx.Shadow"]||(dojo._hasResource["dojox.fx.Shadow"]=!0,dojo.provide("dojox.fx.Shadow"),dojo.experimental("dojox.fx.Shadow"),dojo.require("dijit._Widget"),dojo.require("dojo.NodeList-fx"),dojo.declare("dojox.fx.Shadow",dijit._Widget,{shadowPng:dojo.moduleUrl("dojox.fx","resources/shadow"),shadowThickness:7,shadowOffset:3,opacity:0.75,animate:!1,node:null,startup:function(){this.inherited(arguments);this.node.style.position="relative";this.pieces={};var a=-1*this.shadowThickness,
c=this.shadowOffset,d=this.shadowOffset+this.shadowThickness;this._makePiece("tl","top",c,"left",a);this._makePiece("l","top",d,"left",a,"scale");this._makePiece("tr","top",c,"left",0);this._makePiece("r","top",d,"left",0,"scale");this._makePiece("bl","top",0,"left",a);this._makePiece("b","top",0,"left",0,"crop");this._makePiece("br","top",0,"left",0);this.nodeList=dojo.query(".shadowPiece",this.node);this.setOpacity(this.opacity);this.resize()},_makePiece:function(a,c,d,f,i,g){var e,h=this.shadowPng+
a.toUpperCase()+".png";dojo.isIE<7?(e=dojo.create("div"),e.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+h+"'"+(g?", sizingMethod='"+g+"'":"")+")"):e=dojo.create("img",{src:h});e.style.position="absolute";e.style[c]=d+"px";e.style[f]=i+"px";e.style.width=this.shadowThickness+"px";e.style.height=this.shadowThickness+"px";dojo.addClass(e,"shadowPiece");this.pieces[a]=e;this.node.appendChild(e)},setOpacity:function(a,c){if(!dojo.isIE)if(c||(c={}),this.animate){var d=[];this.nodeList.forEach(function(f){d.push(dojo._fade(dojo.mixin(c,
{node:f,end:a})))});dojo.fx.combine(d).play()}else this.nodeList.style("opacity",a)},setDisabled:function(a){if(a){if(!this.disabled)this.animate?this.nodeList.fadeOut().play():this.nodeList.style("visibility","hidden"),this.disabled=!0}else if(this.disabled)this.animate?this.nodeList.fadeIn().play():this.nodeList.style("visibility","visible"),this.disabled=!1},resize:function(a){var c;a?(c=a.x,a=a.y):(a=dojo._getBorderBox(this.node),c=a.w,a=a.h);var d=a-(this.shadowOffset+this.shadowThickness);d<
0&&(d=0);a<1&&(a=1);c<1&&(c=1);with(this.pieces)l.style.height=d+"px",r.style.height=d+"px",b.style.width=c+"px",bl.style.top=a+"px",b.style.top=a+"px",br.style.top=a+"px",tr.style.left=c+"px",r.style.left=c+"px",br.style.left=c+"px"}}));