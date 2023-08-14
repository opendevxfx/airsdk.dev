"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[10585],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=l(r),u=a,g=c["".concat(d,".").concat(u)]||c[u]||m[u]||i;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},86595:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={},o="Drag and drop in AIR",p={unversionedId:"development/user-interaction/drag-and-drop-in-air/index",id:"development/user-interaction/drag-and-drop-in-air/index",title:"Drag and drop in AIR",description:"Use the classes in the Adobe\xae AIR\u2122 drag-and-drop API to support user-interface",source:"@site/docs/development/user-interaction/drag-and-drop-in-air/index.md",sourceDirName:"development/user-interaction/drag-and-drop-in-air",slug:"/development/user-interaction/drag-and-drop-in-air/",permalink:"/docs/development/user-interaction/drag-and-drop-in-air/",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/user-interaction/drag-and-drop-in-air/index.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Clipboard data formats",permalink:"/docs/development/user-interaction/copy-and-paste/clipboard-data-formats"},next:{title:"Basics of drag and drop in AIR",permalink:"/docs/development/user-interaction/drag-and-drop-in-air/basics-of-drag-and-drop-in-air"}},d={},l=[],s={toc:l},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"drag-and-drop-in-air"},"Drag and drop in AIR"),(0,a.kt)("p",null,"Use the classes in the Adobe\xae AIR\u2122 drag-and-drop API to support user-interface\ndrag-and-drop gestures. A ",(0,a.kt)("em",{parentName:"p"},"gesture")," in this sense is an action by the user,\nmediated by both the operating system and your application, expressing an intent\nto copy, move, or link information. A ",(0,a.kt)("em",{parentName:"p"},"drag-out")," gesture occurs when the user\ndrags an object out of a component or application. A ",(0,a.kt)("em",{parentName:"p"},"drag-in")," gesture occurs\nwhen the user drags in an object from outside a component or application."),(0,a.kt)("p",null,"With the drag-and-drop API, you can allow a user to drag data between\napplications and between components within an application. Supported transfer\nformats include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Bitmaps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Files")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"HTML-formatted text")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Text")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Rich Text Format data")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"URLs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"File promises")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Serialized objects")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Object references (only valid within the originating application)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/development/user-interaction/drag-and-drop-in-air/basics-of-drag-and-drop-in-air"},"Basics of drag and drop in AIR"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/development/user-interaction/drag-and-drop-in-air/supporting-the-drag-out-gesture"},"Supporting the drag-out gesture"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/development/user-interaction/drag-and-drop-in-air/supporting-the-drag-in-gesture"},"Supporting the drag-in gesture"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/development/user-interaction/drag-and-drop-in-air/drag-and-drop-in-html"},"Drag and drop in HTML"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/development/user-interaction/drag-and-drop-in-air/dragging-data-out-of-an-html-element"},"Dragging data out of an HTML element"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/development/user-interaction/drag-and-drop-in-air/dragging-data-into-an-html-element"},"Dragging data into an HTML element"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/development/user-interaction/drag-and-drop-in-air/example-overriding-the-default-html-drag-in-behavior"},"Example: Overriding the default HTML drag-in behavior"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/development/user-interaction/drag-and-drop-in-air/handling-file-drops-in-non-application-html-sandboxes"},"Handling file drops in non-application HTML sandboxes"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/development/user-interaction/drag-and-drop-in-air/dropping-file-promises/"},"Dropping file promises")))))}m.isMDXComponent=!0}}]);