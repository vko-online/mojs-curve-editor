webpackHotUpdatemojs_curve_editor(0,{82:function(t,e,a){(function(t){t.tag2("resize-handle",'<icon shape="ellipsis"></icon>',"",'class="{this.applyClass}"',function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var s=this,n=a(86),o=e(n),i=this.opts.type.type,p=a(85),l=a(77);this.applyClass=p["resize-handle"]+" "+(t.adc||""),this.applyClass=this.applyClass+" "+p["resize-handle--"+this.opts.type],a(83),a(50),this.on("mount",function(){var t=new l(s.root,{direction:l.DIRECTION_ALL,domEvents:!0});t.on("pan",function(t){var e=t.deltaX,a=t.deltaY;console.log(t.gesture),o["default"].dispatch({type:"EDITOR_RESIZE",data:{x:e,y:a,type:i}}),t.gesture.stopPropagation()}),t.on("panend",function(t){var e=t.deltaX,a=t.deltaY;o["default"].dispatch({type:"EDITOR_RESIZE_END",data:{x:e,y:a,type:i}}),t.gesture.stopPropagation()})})})}).call(e,a(2))}});