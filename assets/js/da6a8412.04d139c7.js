"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[15245],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(r),c=i,h=m["".concat(u,".").concat(c)]||m[c]||d[c]||n;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},24292:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var a=r(87462),i=(r(67294),r(3905));const n={title:"Release 50.2.2.1",authors:["marchbold"],tags:["airsdk","updates"]},s=void 0,o={permalink:"/news/2023/03/20/air-release",source:"@site/news/2023-03-20-air-release.md",title:"Release 50.2.2.1",description:"AIR SDK 50.2.2.1 has been released by Harman.",date:"2023-03-20T00:00:00.000Z",formattedDate:"March 20, 2023",tags:[{label:"airsdk",permalink:"/news/tags/airsdk"},{label:"updates",permalink:"/news/tags/updates"}],readingTime:1.36,hasTruncateMarker:!1,authors:[{name:"Michael",title:"Developer at distriqt",url:"https://github.com/marchbold",imageURL:"https://avatars3.githubusercontent.com/u/442356?s=460&v=4",key:"marchbold"}],frontMatter:{title:"Release 50.2.2.1",authors:["marchbold"],tags:["airsdk","updates"]},prevItem:{title:"Release 50.2.2.2",permalink:"/news/2023/03/22/air-release"},nextItem:{title:"Release 50.2.1.1",permalink:"/news/2023/02/22/air-release"}},u={authorsImageUrls:[void 0]},l=[{value:"Features",id:"features",level:3},{value:"Bug fixes",id:"bug-fixes",level:3}],p={toc:l},m="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"AIR SDK 50.2.2.1")," has been released by Harman.  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://airsdk.harman.com/api/versions/50.2.2.1/release-notes/Release_Notes_AIR_SDK_50.2.2.pdf"},"Release Notes"),"  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://airsdk.harman.com/download/50.2.2.1"},"Download"),"  ")),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AIR-6395: Implementation of screen mode on mobile platforms"),(0,i.kt)("li",{parentName:"ul"},"AIR-6451: ADT output logging to SDK Manager troubleshooting tab"),(0,i.kt)("li",{parentName:"ul"},"AIR-6475: AIR ANE - ability to use VideoTexture for Android video players"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/1777"},"github-1777"),": Ensuring iOS cameras support higher resolutions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/1802"},"github-1802"),": Updating camera maximum resolution to 4K"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/1984"},"github-1984"),": Enabling video on linux using ffmpeg"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2073"},"github-2073"),": Adding support for HTTPS_PROXY environment variable to ADT"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2482"},"github-2482"),": ADT certificate creation supporting 25 year default and beyond 2050"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2502"},"github-2502"),": Adding file version information into .exe file generated by windows bundle packaging"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2522"},"github-2522"),": Throw an error if 'new Vector()' is called with an invalid argument type"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2525"},"github-2525"),": Automatically injecting INTERNET permission for debug Android packages")),(0,i.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AIR-6037: Updating iOS event handling to fix screen time impact on audio"),(0,i.kt)("li",{parentName:"ul"},"AIR-6479: Fixing instabilities in macOS URL handling"),(0,i.kt)("li",{parentName:"ul"},"AIR-6486: Fixing crash in Android permission manager from CameraRoll storage request"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/1830"},"github-1830"),": Updating macho signing to allow replacing of a smaller signature at the end of a file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2293"},"github-2293"),": Add caching of method closures to reduce memory churn"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2339"},"github-2339"),": Fixing StageWebView location handling across stages and screens"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2385"},"github-2385"),": Ensuring Worker isolates load ANE swf definitions at start-up"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2409"},"github-2409"),": Updating build settings for tvOS runtime to avoid missing symbols"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2481"},"github-2481"),": Fixing performance slowdown when Direct3D window is minimised"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2493"},"github-2493"),": Fixing crash on Linux when exiting fullscreen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2496"},"github-2496"),": Ensuring any folder structures are created for mac bundle outputs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2508"},"github-2508"),": Ensuring that dpi-changed resize events are handled during moveWindow")))}d.isMDXComponent=!0}}]);