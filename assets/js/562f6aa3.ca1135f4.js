"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[59555],{3905:(e,i,t)=>{t.d(i,{Zo:()=>s,kt:()=>h});var n=t(67294);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function a(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),c=function(e){var i=n.useContext(p),t=i;return e&&(t="function"==typeof e?e(i):l(l({},i),e)),t},s=function(e){var i=c(e.components);return n.createElement(p.Provider,{value:i},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},v=n.forwardRef((function(e,i){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(t),v=r,h=m["".concat(p,".").concat(v)]||m[v]||d[v]||o;return t?n.createElement(h,l(l({ref:i},s),{},{components:t})):n.createElement(h,l({ref:i},s))}));function h(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=v;var a={};for(var p in i)hasOwnProperty.call(i,p)&&(a[p]=i[p]);a.originalType=e,a[m]="string"==typeof e?e:r,l[1]=a;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},34045:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const o={},l="Working with movie clips",a={unversionedId:"development/display/working-with-movie-clips/index",id:"development/display/working-with-movie-clips/index",title:"Working with movie clips",description:"The MovieClip class is the core class for animation and movie clip symbols that",source:"@site/docs/development/display/working-with-movie-clips/index.md",sourceDirName:"development/display/working-with-movie-clips",slug:"/development/display/working-with-movie-clips/",permalink:"/docs/development/display/working-with-movie-clips/",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/working-with-movie-clips/index.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Using a shader",permalink:"/docs/development/display/working-with-pixel-bender-shaders/using-a-shader"},next:{title:"Basics of movie clips",permalink:"/docs/development/display/working-with-movie-clips/basics-of-movie-clips"}},p={},c=[],s={toc:c},m="wrapper";function d(e){let{components:i,...o}=e;return(0,r.kt)(m,(0,n.Z)({},s,o,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"working-with-movie-clips"},"Working with movie clips"),(0,r.kt)("p",null,"The MovieClip class is the core class for animation and movie clip symbols that\nyou create in your Adobe\xae Flash\xae development environment. It has all the\nbehaviors and functionality of display objects, but with additional properties\nand methods for controlling its timeline."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/development/display/working-with-movie-clips/basics-of-movie-clips"},"Basics of movie clips")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/development/display/working-with-movie-clips/working-with-movieclip-objects"},"Working with MovieClip objects")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/development/display/working-with-movie-clips/controlling-movie-clip-playback"},"Controlling movie clip playback")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/development/display/working-with-movie-clips/creating-movieclip-objects-with-actionscript"},"Creating MovieClip objects with ActionScript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/development/display/working-with-movie-clips/loading-an-external-swf-file"},"Loading an external SWF file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/development/display/working-with-movie-clips/movie-clip-example-runtime-assets-explorer"},"Movie clip example: RuntimeAssetsExplorer"))),(0,r.kt)("p",null,"More Help Topics"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(67824).Z,width:"16",height:"16"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/display/MovieClip.html"},"flash.display.MovieClip class")))}d.isMDXComponent=!0},67824:(e,i,t)=>{t.d(i,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUwMDZGOTY2NjYxRjExRTBCNDdCQTM5RjAzRkM2RTA1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUwMDZGOTY3NjYxRjExRTBCNDdCQTM5RjAzRkM2RTA1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTAwNkY5NjQ2NjFGMTFFMEI0N0JBMzlGMDNGQzZFMDUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTAwNkY5NjU2NjFGMTFFMEI0N0JBMzlGMDNGQzZFMDUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6HYd/mAAABZUlEQVR42oxSOU7EUAy1ZyKQ0o1EkQKJAgrSoKkoOAASHXfgULSUdJyAQ+QII+UMkGSSb7z9JYyQ+JJjO96fjZ+P93T3dAUX1zuALYK+hQBCYL44ZwqL6U748qHO+HZ5QyI9nB1EBWSFiJijcv9hiUE813K1gFWd1ImJ3Cn6eTC5PSZGJDVVx8AKGybC5ChOp8//keVEsETV7AEDz2lxbJC5YxjmduNEqlOwDmb5yTQKgKltEzFWLjGw8knmESxi1A5y6zaKFKLcGbkP28irVLOXHckMMYlh5j1Q0Ujqxh6PYJZpQwnpvKVijSXPqPgWWBsEuDQ4f0IMCq6HQs9Y6RZkzkERL4AElwk9r+8fMJ8SxjtgadQCtNpCuf4C3TUGR2932uYjyfu3jpNMp+dVzcHKfC1F4OoO/n7is3l+f4Xz/S2vEZQGTjhE+Rd9hzUf4031fU9d18F/X13X0DQNtG2LPwIMALHE9dBufo94AAAAAElFTkSuQmCC"}}]);