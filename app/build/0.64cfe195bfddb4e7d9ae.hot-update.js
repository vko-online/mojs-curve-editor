webpackHotUpdatemojs_curve_editor(0,[,function(t,e,n){(function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}n(42);var r=n(86),o=e(r);n(73),document.addEventListener("DOMContentLoaded",function(){t.mount("curve-editor",{store:o["default"]})})}).call(e,n(2))},,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(5),i=r(o);e["default"]=i["default"]||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){t.exports={"default":n(6),__esModule:!0}},function(t,e,n){n(7),t.exports=n(10).Object.assign},function(t,e,n){var r=n(8);r(r.S+r.F,"Object",{assign:n(23)})},function(t,e,n){var r=n(9),o=n(10),i=n(11),u=n(13),c="prototype",a=function(t,e,n){var f,s,l,p=t&a.F,d=t&a.G,y=t&a.S,v=t&a.P,h=t&a.B,g=t&a.W,b=d?o:o[e]||(o[e]={}),_=b[c],m=d?r:y?r[e]:(r[e]||{})[c];d&&(n=e);for(f in n)s=!p&&m&&void 0!==m[f],s&&f in b||(l=s?m[f]:n[f],b[f]=d&&"function"!=typeof m[f]?n[f]:h&&s?i(l,r):g&&m[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[c]=t[c],e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((b.virtual||(b.virtual={}))[f]=l,t&a.R&&_&&!_[f]&&u(_,f,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(12);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(14),o=n(22);t.exports=n(18)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(15),o=n(17),i=n(21),u=Object.defineProperty;e.f=n(18)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(16);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(18)&&!n(19)(function(){return 7!=Object.defineProperty(n(20)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(19)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){var r=n(16),o=n(9).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(16);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";var r=n(24),o=n(39),i=n(40),u=n(41),c=n(28),a=Object.assign;t.exports=!a||n(19)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=a({},t)[n]||Object.keys(a({},e)).join("")!=r})?function(t,e){for(var n=u(t),a=arguments.length,f=1,s=o.f,l=i.f;a>f;)for(var p,d=c(arguments[f++]),y=s?r(d).concat(s(d)):r(d),v=y.length,h=0;v>h;)l.call(d,p=y[h++])&&(n[p]=d[p]);return n}:a},function(t,e,n){var r=n(25),o=n(38);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(26),o=n(27),i=n(31)(!1),u=n(35)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),a=0,f=[];for(n in c)n!=u&&r(c,n)&&f.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(f,n)||f.push(n));return f}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(28),o=n(30);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(29);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(27),o=n(32),i=n(34);t.exports=function(t){return function(e,n,u){var c,a=r(e),f=o(a.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if(c=a[s++],c!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(33),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(33),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(36)("keys"),o=n(37);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(9),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(30);t.exports=function(t){return Object(r(t))}},,,,,,,,,,,,,,,,function(t,e,n){(function(t){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){}e.__esModule=!0,e.compose=e.applyMiddleware=e.bindActionCreators=e.combineReducers=e.createStore=void 0;var i=n(59),u=r(i),c=n(67),a=r(c),f=n(69),s=r(f),l=n(70),p=r(l),d=n(71),y=r(d),v=n(68),h=r(v);"production"!==t.env.NODE_ENV&&"string"==typeof o.name&&"isCrushed"!==o.name&&(0,h["default"])("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build."),e.createStore=u["default"],e.combineReducers=a["default"],e.bindActionCreators=s["default"],e.applyMiddleware=p["default"],e.compose=y["default"]}).call(e,n(58))},function(t,e){function n(){l&&f&&(l=!1,f.length?s=f.concat(s):p=-1,s.length&&r())}function r(){if(!l){var t=u.call(null,n);l=!0;for(var e=s.length;e;){for(f=s,s=[];++p<e;)f&&f[p].run();p=-1,e=s.length}f=null,l=!1,c.call(null,t)}}function o(t,e){this.fun=t,this.array=e}function i(){}var u,c,a=t.exports={};!function(){try{u=setTimeout}catch(t){u=function(){throw new Error("setTimeout is not defined")}}try{c=clearTimeout}catch(t){c=function(){throw new Error("clearTimeout is not defined")}}}();var f,s=[],l=!1,p=-1;a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new o(t,e)),1!==s.length||l||u.call(null,r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=i,a.addListener=i,a.once=i,a.off=i,a.removeListener=i,a.removeAllListeners=i,a.emit=i,a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e,n){function r(){g===h&&(g=h.slice())}function i(){return v}function c(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var e=!0;return r(),g.push(t),function(){if(e){e=!1,r();var n=g.indexOf(t);g.splice(n,1)}}}function s(t){if(!(0,u["default"])(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(b)throw new Error("Reducers may not dispatch actions.");try{b=!0,v=y(v,t)}finally{b=!1}for(var e=h=g,n=0;n<e.length;n++)e[n]();return t}function l(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");y=t,s({type:f.INIT})}function p(){var t,e=c;return t={subscribe:function(t){function n(){t.next&&t.next(i())}if("object"!=typeof t)throw new TypeError("Expected the observer to be an object.");n();var r=e(n);return{unsubscribe:r}}},t[a["default"]]=function(){return this},t}var d;if("function"==typeof e&&"undefined"==typeof n&&(n=e,e=void 0),"undefined"!=typeof n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(o)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var y=t,v=e,h=[],g=h,b=!1;return s({type:f.INIT}),d={dispatch:s,subscribe:c,getState:i,replaceReducer:l},d[a["default"]]=p,d}e.__esModule=!0,e.ActionTypes=void 0,e["default"]=o;var i=n(60),u=r(i),c=n(65),a=r(c),f=e.ActionTypes={INIT:"@@redux/INIT"}},function(t,e,n){function r(t){if(!u(t)||p.call(t)!=c||i(t))return!1;var e=o(t);if(null===e)return!0;var n=s.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&f.call(n)==l}var o=n(61),i=n(63),u=n(64),c="[object Object]",a=Object.prototype,f=Function.prototype.toString,s=a.hasOwnProperty,l=f.call(Object),p=a.toString;t.exports=r},function(t,e,n){var r=n(62),o=Object.getPrototypeOf,i=r(o,Object);t.exports=i},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e){function n(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}t.exports=n},function(t,e){function n(t){return!!t&&"object"==typeof t}t.exports=n},function(t,e,n){(function(e){"use strict";t.exports=n(66)(e||window||this)}).call(e,function(){return this}())},function(t,e){"use strict";t.exports=function(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}},function(t,e,n){(function(t){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){var n=e&&e.type,r=n&&'"'+n.toString()+'"'||"an action";return"Given action "+r+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function i(t,e,n){var r=Object.keys(e),o=n&&n.type===a.ActionTypes.INIT?"initialState argument passed to createStore":"previous state received by the reducer";if(0===r.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!(0,s["default"])(t))return"The "+o+' has unexpected type of "'+{}.toString.call(t).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following '+('keys: "'+r.join('", "')+'"');var i=Object.keys(t).filter(function(t){return!e.hasOwnProperty(t)});return i.length>0?"Unexpected "+(i.length>1?"keys":"key")+" "+('"'+i.join('", "')+'" found in '+o+". ")+"Expected to find one of the known reducer keys instead: "+('"'+r.join('", "')+'". Unexpected keys will be ignored.'):void 0}function u(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:a.ActionTypes.INIT});if("undefined"==typeof r)throw new Error('Reducer "'+e+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:o}))throw new Error('Reducer "'+e+'" returned undefined when probed with a random type. '+("Don't try to handle "+a.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function c(e){for(var n=Object.keys(e),r={},c=0;c<n.length;c++){var a=n[c];"function"==typeof e[a]&&(r[a]=e[a])}var f,s=Object.keys(r);try{u(r)}catch(l){f=l}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=arguments[1];if(f)throw f;if("production"!==t.env.NODE_ENV){var u=i(e,r,n);u&&(0,p["default"])(u)}for(var c=!1,a={},l=0;l<s.length;l++){var d=s[l],y=r[d],v=e[d],h=y(v,n);if("undefined"==typeof h){var g=o(d,n);throw new Error(g)}a[d]=h,c=c||h!==v}return c?a:e}}e.__esModule=!0,e["default"]=c;var a=n(59),f=n(60),s=r(f),l=n(68),p=r(l)}).call(e,n(58))},function(t,e){"use strict";function n(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t);try{throw new Error(t)}catch(e){}}e.__esModule=!0,e["default"]=n},function(t,e){"use strict";function n(t,e){return function(){return e(t.apply(void 0,arguments))}}function r(t,e){if("function"==typeof t)return n(t,e);if("object"!=typeof t||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(t),o={},i=0;i<r.length;i++){var u=r[i],c=t[u];"function"==typeof c&&(o[u]=n(c,e))}return o}e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(n,r,o){var u=t(n,r,o),a=u.dispatch,f=[],s={getState:u.getState,dispatch:function(t){return a(t)}};return f=e.map(function(t){return t(s)}),a=c["default"].apply(void 0,f)(u.dispatch),i({},u,{dispatch:a})}}}e.__esModule=!0;var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e["default"]=o;var u=n(71),c=r(u)},function(t,e){"use strict";function n(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];if(0===e.length)return function(t){return t};var r=function(){var t=e[e.length-1],n=e.slice(0,-1);return{v:function(){return n.reduceRight(function(t,e){return e(t)},t.apply(void 0,arguments))}}}();return"object"==typeof r?r.v:void 0}e.__esModule=!0,e["default"]=n},function(t,e){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function r(){if(x){for(var t,e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];console.group||n.unshift("%credux-undo","font-style: italic"),(t=console).log.apply(t,n)}}function o(t,e){if(x){var n=["action",t.type];if(console.group){var o;n.unshift("%credux-undo","font-style: italic"),(o=console).groupCollapsed.apply(o,n),console.log("received",{state:e,action:t})}else r.apply(void 0,n)}}function i(){if(x)return console.groupEnd&&console.groupEnd()}function u(t){var e=t.past,n=t.future;return e.length+1+n.length}function c(t,e,o){r("insert",{state:e,history:t,free:o-u(t)});var i=t.past,c=t.present,a=o&&u(t)>=o;return void 0===c?{past:[],present:e,future:[]}:{past:[].concat(n(i.slice(a?1:0)),[c]),present:e,future:[]}}function a(t){r("undo",{history:t});var e=t.past,o=t.present,i=t.future;return e.length<=0?t:{past:e.slice(0,e.length-1),present:e[e.length-1],future:[o].concat(n(i))}}function f(t){r("redo",{history:t});var e=t.past,o=t.present,i=t.future;return i.length<=0?t:{future:i.slice(1,i.length),present:i[0],past:[].concat(n(e),[o])}}function s(t,e){if(0===e)return f(t);var n=t.past,r=t.present,o=t.future;return{future:o.slice(e+1),present:o[e],past:n.concat([r]).concat(o.slice(0,e))}}function l(t,e){if(e===t.past.length-1)return a(t);var n=t.past,r=t.present,o=t.future;return{future:n.slice(e+1).concat([r]).concat(o),present:n[e],past:n.slice(0,e)}}function p(t){return w({},t,{history:t})}function d(t,e){return p(w({},t,e))}function y(t){return{past:[],present:t,future:[]}}function v(t){var e=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];return Array.isArray(t)?t:"string"==typeof t?[t]:e}function h(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];x=e.debug;var n={initialState:e.initialState,initTypes:v(e.initTypes,["@@redux/INIT","@@INIT"]),limit:e.limit,filter:e.filter||function(){return!0},undoType:e.undoType||T.UNDO,redoType:e.redoType||T.REDO,jumpToPastType:e.jumpToPastType||T.JUMP_TO_PAST,jumpToFutureType:e.jumpToFutureType||T.JUMP_TO_FUTURE};return n.history=e.initialHistory||y(n.initialState),0===n.initTypes.length&&console.warn("redux-undo: supply at least one action type in initTypes to ensure initial state"),function(e,v){o(v,e);var h=void 0;switch(v.type){case n.undoType:return h=a(e),r("after undo",h),i(),h?d(e,h):e;case n.redoType:return h=f(e),r("after redo",h),i(),h?d(e,h):e;case n.jumpToPastType:return h=l(e,v.index),r("after jumpToPast",h),i(),h?d(e,h):e;case n.jumpToFutureType:return h=s(e,v.index),r("after jumpToFuture",h),i(),h?d(e,h):e;default:if(h=t(e&&e.present,v),n.initTypes.some(function(t){return t===v.type}))return r("reset history due to init action"),i(),p(w({},e,y(h)));if(n.filter&&"function"==typeof n.filter&&!n.filter(v,h,e&&e.present))return r("filter prevented action, not storing it"),i(),p(w({},e,{present:h}));var g=e&&void 0!==e.present?e:n.history,b=c(g,h,n.limit);return r("after insert",{history:b,free:n.limit-u(b)}),i(),p(w({},e,b))}}}function g(){return function(t,e,n){return e!==n}}function b(t){var e=v(t);return function(t){return e.indexOf(t.type)>=0}}function _(t){return console.error("Deprecation Warning: Please change `ifAction` to `includeAction`"),b(t)}function m(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],e=v(t);return function(t){return e.indexOf(t.type)<0}}Object.defineProperty(e,"__esModule",{value:!0});var w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.parseActions=v,e["default"]=h,e.distinctState=g,e.includeAction=b,e.ifAction=_,e.excludeAction=m;var x=void 0,T=e.ActionTypes={UNDO:"@@redux-undo/UNDO",REDO:"@@redux-undo/REDO",JUMP_TO_FUTURE:"@@redux-undo/JUMP_TO_FUTURE",JUMP_TO_PAST:"@@redux-undo/JUMP_TO_PAST"};e.ActionCreators={undo:function(){return{type:T.UNDO}},redo:function(){return{type:T.REDO}},jumpToFuture:function(t){return{type:T.JUMP_TO_FUTURE,index:t}},jumpToPast:function(t){return{type:T.JUMP_TO_PAST,index:t}}}},,,,,,function(t,e,n){(function(t){t.tag2("curve",'<div riot-style="{this.getSvgStyle()}"> <svg width="358" height="358" viewbox="0 0 100 100" class="{this.CLASSES[\'curve__svg\']}"> </svg> </div>',"",'class="{this.CLASSES[\'curve\']}" riot-style="{this.getStyle()}"',function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var r=n(86),o=e(r),i=n(92),u=e(i);this.CLASSES=n(81),n(79),o["default"].subscribe(this.update.bind(this)),this.getSvgStyle=function(){var t=o["default"].getState().present,e=t.tempResize_top;e+=t.resize_top,358-e<358&&(e=0),e=(0,u["default"])(e);var n="transform: translate(0px, "+-e+"px)";return""+mojs.h.prefix.css+n+"; "+n+";"},this.getStyle=function(){var t=o["default"].getState().present,e=t.tempResize_top;e+=t.resize_top,358-e<358&&(e=0),e=(0,u["default"])(e);var n="background-position: 0 "+(-e-1)+"px";return n+";"}})}).call(e,n(2))},,,,function(t,e,n){(function(t){t.tag2("resize-handle",'<icon shape="ellipsis"></icon>',"",'class="{this.applyClass}"',function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var r=this,o=n(86),i=e(o),u=n(77),c=e(u),a=n(87),f=e(a),s=this.opts.type,l=n(85);this.applyClass=l["resize-handle"]+" "+(t.adc||""),this.applyClass=this.applyClass+" "+l["resize-handle--"+this.opts.type],n(83),n(50),this.on("mount",function(){(0,f["default"])(new c["default"](r.root)).on("pan",function(t){var e=t.deltaX,n=t.deltaY;i["default"].dispatch({type:"EDITOR_RESIZE",data:{x:e,y:n,type:s}}),t.stopPropagation()}).on("panend",function(t){var e=t.deltaX,n=t.deltaY;i["default"].dispatch({type:"EDITOR_RESIZE_END",data:{x:e,y:n,type:s}}),t.stopPropagation()})})})}).call(e,n(2))},,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(88),i=r(o),u=n(4),c=r(u),a=n(57),f=n(72),s=r(f),l={translate:{x:-15,y:0},resize_top:0,tempResize_top:0,tempResize_right:0,resize_bottom:0,tempResize_bottom:0},p=function(){var t=arguments.length<=0||void 0===arguments[0]?l:arguments[0],e=arguments[1];switch(e.type){case"EDITOR_RESIZE":var n=e.data,r={data:n},o=r.type,u="top"===o||"bottom"===o?n.x:n.y;return(0,c["default"])({},t,(0,i["default"])({},"tempResize_"+e.data.type,u));case"EDITOR_RESIZE_END":var a,f=e.data,s={data:f},p=s.type,d="top"===p||"bottom"===p?f.x:f.y;return(0,c["default"])({},t,(a={},(0,i["default"])(a,"resize_"+e.data.type,t["resize_"+e.data.type]+d),(0,i["default"])(a,"tempResize_"+e.data.type,0),a));case"EDITOR_TRANSLATE":return(0,c["default"])({},t,{translate:e.data})}return t},d=(0,a.createStore)((0,s["default"])(p,{filter:function(t,e,n){return t.isRecord}}));e["default"]=d},,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(89),i=r(o);e["default"]=function(t,e,n){return e in t?(0,i["default"])(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){t.exports={"default":n(90),__esModule:!0}},function(t,e,n){n(91);var r=n(10).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(8);r(r.S+r.F*!n(18),"Object",{defineProperty:n(14).f})}]);