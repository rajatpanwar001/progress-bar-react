(this["webpackJsonpreact-component-depot"]=this["webpackJsonpreact-component-depot"]||[]).push([[10],{157:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),i="undefined"!==typeof window?n.useLayoutEffect:n.useEffect},176:function(e,t,r){"use strict";function n(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var l=o[c];if(!u(l))return!1;var s=e[l],f=t[l];if(!1===(i=r?r.call(n,s,f,l):void 0)||void 0===i&&s!==f)return!1}return!0}r.d(t,"a",(function(){return n}))},189:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0),i=r(2),o=r(55);function a(){var e=Object(n.useContext)(o.a).dragDropManager;return Object(i.a)(null!=e,"Expected drag drop context"),e}},190:function(e,t,r){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return null!==e&&"object"===n(e)&&Object.prototype.hasOwnProperty.call(e,"current")}r.d(t,"a",(function(){return i}))},191:function(e,t,r){"use strict";function n(e,t,r){var n=r.getRegistry(),i=n.addTarget(e,t);return[i,function(){return n.removeTarget(i)}]}function i(e,t,r){var n=r.getRegistry(),i=n.addSource(e,t);return[i,function(){return n.removeSource(i)}]}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}))},208:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(157),i=r(176),o=r(0);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){i=!0,o=c}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){i=!0,o=c}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t,r){var u=c(function(e,t,r){var u=a(Object(o.useState)((function(){return t(e)})),2),c=u[0],l=u[1],s=Object(o.useCallback)((function(){var n=t(e);Object(i.a)(c,n)||(l(n),r&&r())}),[c,e,r]);return Object(n.a)(s,[]),[c,s]}(e,t,r),2),l=u[0],s=u[1];return Object(n.a)((function(){var t=e.getHandlerId();if(null!=t)return e.subscribeToStateChange(s,{handlerIds:[t]})}),[e,s]),l}},209:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),i=r(2);function o(e,t){"function"===typeof e?e(t):e.current=t}function a(e,t){var r=e.ref;return Object(i.a)("string"!==typeof r,"Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute"),r?Object(n.cloneElement)(e,{ref:function(e){o(r,e),o(t,e)}}):Object(n.cloneElement)(e,{ref:t})}function u(e){if("string"!==typeof e.type){var t=e.type.displayName||e.type.name||"the component";throw new Error("Only native element nodes can now be passed to React DnD connectors."+"You can either wrap ".concat(t," into a <div>, or turn it into a ")+"drag source or a drop target itself.")}}function c(e){var t={};return Object.keys(e).forEach((function(r){var i=e[r];if(r.endsWith("Ref"))t[r]=e[r];else{var o=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!Object(n.isValidElement)(t)){var i=t;return e(i,r),i}var o=t;u(o);var c=r?function(t){return e(t,r)}:e;return a(o,c)}}(i);t[r]=function(){return o}}})),t}},292:function(e,t,r){"use strict";r.d(t,"a",(function(){return S}));var n=r(0),i=r(2),o=r(208),a=r(157),u=r(191),c=r(189),l=r(176),s=r(209),f=r(190);function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var g=function(){function e(t){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.hooks=Object(s.a)({dropTarget:function(e,t){r.clearDropTarget(),r.dropTargetOptions=t,Object(f.a)(e)?r.dropTargetRef=e:r.dropTargetNode=e,r.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=t}var t,r,n;return t=e,(r=[{key:"reconnect",value:function(){var e=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();e&&this.disconnectDropTarget();var t=this.dropTarget;this.handlerId&&(t?e&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=t,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,t,this.dropTargetOptions)):this.lastConnectedDropTarget=t)}},{key:"receiveHandlerId",value:function(e){e!==this.handlerId&&(this.handlerId=e,this.reconnect())}},{key:"didHandlerIdChange",value:function(){return this.lastConnectedHandlerId!==this.handlerId}},{key:"didDropTargetChange",value:function(){return this.lastConnectedDropTarget!==this.dropTarget}},{key:"didOptionsChange",value:function(){return!Object(l.a)(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}},{key:"disconnectDropTarget",value:function(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}},{key:"clearDropTarget",value:function(){this.dropTargetRef=null,this.dropTargetNode=null}},{key:"connectTarget",get:function(){return this.dropTarget}},{key:"dropTargetOptions",get:function(){return this.dropTargetOptionsInternal},set:function(e){this.dropTargetOptionsInternal=e}},{key:"dropTarget",get:function(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}}])&&d(t.prototype,r),n&&d(t,n),e}();function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var y=!1,v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.targetId=null,this.internalMonitor=t.getMonitor()}var t,r,n;return t=e,(r=[{key:"receiveHandlerId",value:function(e){this.targetId=e}},{key:"getHandlerId",value:function(){return this.targetId}},{key:"subscribeToStateChange",value:function(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}},{key:"canDrop",value:function(){if(!this.targetId)return!1;Object(i.a)(!y,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return y=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{y=!1}}},{key:"isOver",value:function(e){return!!this.targetId&&this.internalMonitor.isOverTarget(this.targetId,e)}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}])&&h(t.prototype,r),n&&h(t,n),e}();function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){i=!0,o=c}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){i=!0,o=c}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function S(e){var t=Object(n.useRef)(e);t.current=e,Object(i.a)(null!=e.accept,"accept must be defined");var r=m(function(){var e=Object(c.a)();return[Object(n.useMemo)((function(){return new v(e)}),[e]),Object(n.useMemo)((function(){return new g(e.getBackend())}),[e])]}(),2),l=r[0],s=r[1];!function(e,t,r){var i=Object(c.a)(),o=Object(n.useMemo)((function(){return{canDrop:function(){var r=e.current.canDrop;return!r||r(t.getItem(),t)},hover:function(){var r=e.current.hover;r&&r(t.getItem(),t)},drop:function(){var r=e.current.drop;if(r)return r(t.getItem(),t)}}}),[t]);Object(a.a)((function(){var n=p(Object(u.b)(e.current.accept,o,i),2),a=n[0],c=n[1];return t.receiveHandlerId(a),r.receiveHandlerId(a),c}),[t,r])}(t,l,s);var f=Object(o.a)(l,t.current.collect||function(){return{}},(function(){return s.reconnect()})),d=Object(n.useMemo)((function(){return s.hooks.dropTarget()}),[s]);return Object(a.a)((function(){s.dropTargetOptions=e.options||null,s.reconnect()}),[e.options]),[f,d]}},293:function(e,t,r){"use strict";r.d(t,"a",(function(){return D}));var n=r(0),i=r(2),o=r(208),a=r(157),u=r(191),c=r(189);function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=!1,f=!1,d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sourceId=null,this.internalMonitor=t.getMonitor()}var t,r,n;return t=e,(r=[{key:"receiveHandlerId",value:function(e){this.sourceId=e}},{key:"getHandlerId",value:function(){return this.sourceId}},{key:"canDrag",value:function(){Object(i.a)(!s,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return s=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{s=!1}}},{key:"isDragging",value:function(){if(!this.sourceId)return!1;Object(i.a)(!f,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return f=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{f=!1}}},{key:"subscribeToStateChange",value:function(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}},{key:"isDraggingSource",value:function(e){return this.internalMonitor.isDraggingSource(e)}},{key:"isOverTarget",value:function(e,t){return this.internalMonitor.isOverTarget(e,t)}},{key:"getTargetIds",value:function(){return this.internalMonitor.getTargetIds()}},{key:"isSourcePublic",value:function(){return this.internalMonitor.isSourcePublic()}},{key:"getSourceId",value:function(){return this.internalMonitor.getSourceId()}},{key:"subscribeToOffsetChange",value:function(e){return this.internalMonitor.subscribeToOffsetChange(e)}},{key:"canDragSource",value:function(e){return this.internalMonitor.canDragSource(e)}},{key:"canDropOnTarget",value:function(e){return this.internalMonitor.canDropOnTarget(e)}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}])&&l(t.prototype,r),n&&l(t,n),e}(),g=r(209),h=r(190),y=r(176);function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var p=function(){function e(t){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.hooks=Object(g.a)({dragSource:function(e,t){r.clearDragSource(),r.dragSourceOptions=t||null,Object(h.a)(e)?r.dragSourceRef=e:r.dragSourceNode=e,r.reconnectDragSource()},dragPreview:function(e,t){r.clearDragPreview(),r.dragPreviewOptions=t||null,Object(h.a)(e)?r.dragPreviewRef=e:r.dragPreviewNode=e,r.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=t}var t,r,n;return t=e,(r=[{key:"receiveHandlerId",value:function(e){this.handlerId!==e&&(this.handlerId=e,this.reconnect())}},{key:"reconnect",value:function(){this.reconnectDragSource(),this.reconnectDragPreview()}},{key:"reconnectDragSource",value:function(){var e=this.dragSource,t=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();t&&this.disconnectDragSource(),this.handlerId&&(e?t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions)):this.lastConnectedDragSource=e)}},{key:"reconnectDragPreview",value:function(){var e=this.dragPreview,t=this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();t&&this.disconnectDragPreview(),this.handlerId&&(e?t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=e,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,e,this.dragPreviewOptions)):this.lastConnectedDragPreview=e)}},{key:"didHandlerIdChange",value:function(){return this.lastConnectedHandlerId!==this.handlerId}},{key:"didConnectedDragSourceChange",value:function(){return this.lastConnectedDragSource!==this.dragSource}},{key:"didConnectedDragPreviewChange",value:function(){return this.lastConnectedDragPreview!==this.dragPreview}},{key:"didDragSourceOptionsChange",value:function(){return!Object(y.a)(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}},{key:"didDragPreviewOptionsChange",value:function(){return!Object(y.a)(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}},{key:"disconnectDragSource",value:function(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}},{key:"disconnectDragPreview",value:function(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}},{key:"clearDragSource",value:function(){this.dragSourceNode=null,this.dragSourceRef=null}},{key:"clearDragPreview",value:function(){this.dragPreviewNode=null,this.dragPreviewRef=null}},{key:"connectTarget",get:function(){return this.dragSource}},{key:"dragSourceOptions",get:function(){return this.dragSourceOptionsInternal},set:function(e){this.dragSourceOptionsInternal=e}},{key:"dragPreviewOptions",get:function(){return this.dragPreviewOptionsInternal},set:function(e){this.dragPreviewOptionsInternal=e}},{key:"dragSource",get:function(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}},{key:"dragPreview",get:function(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}}])&&v(t.prototype,r),n&&v(t,n),e}();function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){i=!0,o=c}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function O(e){return(O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){i=!0,o=c}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return I(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function D(e){var t=Object(n.useRef)(e);t.current=e,Object(i.a)(null!=e.item,"item must be defined"),Object(i.a)(null!=e.item.type,"item type must be defined");var r=S(function(){var e=Object(c.a)();return[Object(n.useMemo)((function(){return new d(e)}),[e]),Object(n.useMemo)((function(){return new p(e.getBackend())}),[e])]}(),2),l=r[0],s=r[1];!function(e,t,r){var o=Object(c.a)(),l=Object(n.useMemo)((function(){return{beginDrag:function(){var r=e.current,n=r.begin,o=r.item;if(n){var a=n(t);return Object(i.a)(null==a||"object"===O(a),"dragSpec.begin() must either return an object, undefined, or null"),a||o||{}}return o||{}},canDrag:function(){return"boolean"===typeof e.current.canDrag?e.current.canDrag:"function"!==typeof e.current.canDrag||e.current.canDrag(t)},isDragging:function(r,n){var i=e.current.isDragging;return i?i(t):n===r.getSourceId()},endDrag:function(){var n=e.current.end;n&&n(t.getItem(),t),r.reconnect()}}}),[]);Object(a.a)((function(){var n=b(Object(u.a)(e.current.item.type,l,o),2),i=n[0],a=n[1];return t.receiveHandlerId(i),r.receiveHandlerId(i),a}),[])}(t,l,s);var f=Object(o.a)(l,t.current.collect||function(){return{}},(function(){return s.reconnect()})),g=Object(n.useMemo)((function(){return s.hooks.dragSource()}),[s]),h=Object(n.useMemo)((function(){return s.hooks.dragPreview()}),[s]);return Object(a.a)((function(){s.dragSourceOptions=t.current.options||null,s.reconnect()}),[s]),Object(a.a)((function(){s.dragPreviewOptions=t.current.previewOptions||null,s.reconnect()}),[s]),[f,g,h]}}}]);
//# sourceMappingURL=10.cb7d9bee.chunk.js.map