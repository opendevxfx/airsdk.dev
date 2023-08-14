"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[17300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||i;return n?r.createElement(m,u(u({ref:t},l),{},{components:n})):r.createElement(m,u({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,u[1]=a;for(var c=2;c<i;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={},u="Touch, multitouch and gesture input",a={unversionedId:"development/user-interaction/touch-multitouch-and-gesture-input/index",id:"development/user-interaction/touch-multitouch-and-gesture-input/index",title:"Touch, multitouch and gesture input",description:"The touch event handling features of the Flash Platform include input from a",source:"@site/docs/development/user-interaction/touch-multitouch-and-gesture-input/index.md",sourceDirName:"development/user-interaction/touch-multitouch-and-gesture-input",slug:"/development/user-interaction/touch-multitouch-and-gesture-input/",permalink:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/user-interaction/touch-multitouch-and-gesture-input/index.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Mouse input example: WordSearch",permalink:"/docs/development/user-interaction/mouse-input/mouse-input-example-word-search"},next:{title:"Basics of touch input",permalink:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/basics-of-touch-input"}},s={},c=[],l={toc:c},p="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"touch-multitouch-and-gesture-input"},"Touch, multitouch and gesture input"),(0,o.kt)("p",null,"The touch event handling features of the Flash Platform include input from a\nsingle point of contact or multiple points of contact on touch-enabled devices.\nAnd, the Flash runtimes handle events that combine multiple touch points with\nmovement to create a gesture. In other words, Flash runtimes interpret two types\nof input:"),(0,o.kt)("p",null,"Touch",(0,o.kt)("br",{parentName:"p"}),"\n","input with a single point device such as a finger, stylus, or other tool on a\ntouch-enabled device. Some devices support multiple simultaneous points of\ncontact with a finger or stylus."),(0,o.kt)("p",null,"Multitouch",(0,o.kt)("br",{parentName:"p"}),"\n","input with more than one simultaneous point of contact."),(0,o.kt)("p",null,"Gesture",(0,o.kt)("br",{parentName:"p"}),"\n","Input interpreted by a device or operating system in response to one or more\ntouch events. For example, a user rotates two fingers simultaneously, and the\ndevice or operating system interprets that touch input as a rotation gesture.\nSome gestures are performed with one finger or touch point, and some gestures\nrequire multiple touch points. The device or operating system establishes the\ntype of gesture to assign to the input."),(0,o.kt)("p",null,"Both touch and gesture input can be multitouch input depending on the user's\ndevice. ActionScript provides API for handling touch events, gesture events, and\nindividually tracked touch events for multitouch input."),(0,o.kt)("p",null,"Note: Listening for touch and gesture events can consume a significant amount of\nprocessing resources (equivalent to rendering several frames per second),\ndepending on the computing device and operating system. It is often better to\nuse mouse events when you do not actually need the extra functionality provided\nby touch or gestures. When you do use touch or gesture events, consider reducing\nthe amount of graphical changes that can occur, especially when such events can\nbe dispatched rapidly, as during a pan, rotate, or zoom operation. For example,\nyou could stop animation within a component while the user resizes it using a\nzoom gesture."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/basics-of-touch-input"},"Basics of touch input")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/touch-support-discovery"},"Touch support discovery")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/touch-event-handling"},"Touch event handling")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/touch-and-drag"},"Touch and drag")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/gesture-event-handling"},"Gesture event handling")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/troubleshooting"},"Troubleshooting"))),(0,o.kt)("p",null,"More Help topics"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(67824).Z,width:"16",height:"16"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/ui/Multitouch.html"},"flash.ui.Multitouch")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(67824).Z,width:"16",height:"16"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/events/TouchEvent.html"},"flash.events.TouchEvent")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(67824).Z,width:"16",height:"16"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/events/GestureEvent.html"},"flash.events.GestureEvent")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(67824).Z,width:"16",height:"16"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/events/TransformGestureEvent.html"},"flash.events.TransformGestureEvent")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(67824).Z,width:"16",height:"16"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/events/GesturePhase.html"},"flash.events.GesturePhase")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(67824).Z,width:"16",height:"16"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/events/PressAndTapGestureEvent.html"},"flash.events.PressAndTapGestureEvent")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.paultrani.com/blog/index.php/2011/02/touch-events-and-gestures-on-mobile/"},"Paul Trani: Touch Events and Gestures on Mobile")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://blog.flashgen.com/2011/03/21/virtual-game-controllers/"},"Mike Jones: Virtual Game Controllers")))}h.isMDXComponent=!0},67824:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUwMDZGOTY2NjYxRjExRTBCNDdCQTM5RjAzRkM2RTA1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUwMDZGOTY3NjYxRjExRTBCNDdCQTM5RjAzRkM2RTA1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTAwNkY5NjQ2NjFGMTFFMEI0N0JBMzlGMDNGQzZFMDUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTAwNkY5NjU2NjFGMTFFMEI0N0JBMzlGMDNGQzZFMDUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6HYd/mAAABZUlEQVR42oxSOU7EUAy1ZyKQ0o1EkQKJAgrSoKkoOAASHXfgULSUdJyAQ+QII+UMkGSSb7z9JYyQ+JJjO96fjZ+P93T3dAUX1zuALYK+hQBCYL44ZwqL6U748qHO+HZ5QyI9nB1EBWSFiJijcv9hiUE813K1gFWd1ImJ3Cn6eTC5PSZGJDVVx8AKGybC5ChOp8//keVEsETV7AEDz2lxbJC5YxjmduNEqlOwDmb5yTQKgKltEzFWLjGw8knmESxi1A5y6zaKFKLcGbkP28irVLOXHckMMYlh5j1Q0Ujqxh6PYJZpQwnpvKVijSXPqPgWWBsEuDQ4f0IMCq6HQs9Y6RZkzkERL4AElwk9r+8fMJ8SxjtgadQCtNpCuf4C3TUGR2932uYjyfu3jpNMp+dVzcHKfC1F4OoO/n7is3l+f4Xz/S2vEZQGTjhE+Rd9hzUf4031fU9d18F/X13X0DQNtG2LPwIMALHE9dBufo94AAAAAElFTkSuQmCC"}}]);