"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[75940],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},384:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={title:"Release 51.1.1.2",authors:["marchbold"],tags:["airsdk","updates"]},o=void 0,l={permalink:"/news/2024/08/05/air-release",source:"@site/news/2024-08-05-air-release.md",title:"Release 51.1.1.2",description:"AIR SDK 51.1.1.2 has been released by Harman.",date:"2024-08-05T00:00:00.000Z",formattedDate:"August 5, 2024",tags:[{label:"airsdk",permalink:"/news/tags/airsdk"},{label:"updates",permalink:"/news/tags/updates"}],readingTime:.4,hasTruncateMarker:!1,authors:[{name:"Michael",title:"Developer at distriqt",url:"https://github.com/marchbold",imageURL:"https://avatars3.githubusercontent.com/u/442356?s=460&v=4",key:"marchbold"}],frontMatter:{title:"Release 51.1.1.2",authors:["marchbold"],tags:["airsdk","updates"]},nextItem:{title:"Release 51.1.1.1",permalink:"/news/2024/08/02/air-release"}},s={authorsImageUrls:[void 0]},u=[{value:"Bug fixes",id:"bug-fixes",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"AIR SDK 51.1.1.2")," has been released by Harman.  "),(0,n.kt)("p",null,"To fix a couple of major issues in the previous version, Harman have rushed through an update with limited changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airsdk.harman.com/api/versions/51.1.1.2/release-notes/Release_Notes_AIR_SDK_51.1.1.pdf"},"Release Notes"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airsdk.harman.com/download/51.1.1.2"},"Download"),"  ")),(0,n.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/461"},"github-461"),": Fixing command-line entry framework detection for MacOS bundle"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3380"},"github-3380"),": Fixing Android file seek/tell functionality"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3390"},"github-3390"),": Fixing MacOS App Bundle packaging with ANE files for universal binaries"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3391"},"github-3391"),": Ensuring calls to navigateToUrl and sendToUrl still work with new x-air-appid header")))}m.isMDXComponent=!0}}]);