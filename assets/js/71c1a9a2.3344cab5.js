"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[83647],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>y});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||c;return n?t.createElement(y,i(i({ref:r},u),{},{components:n})):t.createElement(y,i({ref:r},u))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=m;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11245:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var t=n(87462),o=(n(67294),n(3905));const c={},i="Using workers for concurrency",a={unversionedId:"development/client-system-interaction/using-workers-for-concurrency/index",id:"development/client-system-interaction/using-workers-for-concurrency/index",title:"Using workers for concurrency",description:"ActionScript workers make it possible to execute code concurrently, or in other",source:"@site/docs/development/client-system-interaction/using-workers-for-concurrency/index.md",sourceDirName:"development/client-system-interaction/using-workers-for-concurrency",slug:"/development/client-system-interaction/using-workers-for-concurrency/",permalink:"/docs/development/client-system-interaction/using-workers-for-concurrency/",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/client-system-interaction/using-workers-for-concurrency/index.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Display screens in AIR",permalink:"/docs/development/client-system-interaction/display-screens-in-air"},next:{title:"Understanding workers and concurrency",permalink:"/docs/development/client-system-interaction/using-workers-for-concurrency/understanding-workers-and-concurrency"}},s={},l=[],u={toc:l},p="wrapper";function d(e){let{components:r,...n}=e;return(0,o.kt)(p,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-workers-for-concurrency"},"Using workers for concurrency"),(0,o.kt)("p",null,"ActionScript workers make it possible to execute code concurrently, or in other\nwords, to execute code in the background without interrupting the main code's\nexecution."),(0,o.kt)("p",null,"The ActionScript concurrency apis are available on desktop platforms only in\nFlash Player 11.4 and later, and AIR 3.4 and later. Concurrency is not supported\nin AIR for mobile platforms."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/client-system-interaction/using-workers-for-concurrency/understanding-workers-and-concurrency"},"Understanding workers and concurrency")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/client-system-interaction/using-workers-for-concurrency/creating-and-managing-workers"},"Creating and managing workers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/client-system-interaction/using-workers-for-concurrency/communicating-between-workers"},"Communicating between workers"))))}d.isMDXComponent=!0}}]);