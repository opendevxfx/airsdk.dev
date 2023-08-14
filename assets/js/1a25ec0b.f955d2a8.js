"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[32019],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52004:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Features",sidebar_position:1.1},o=void 0,s={unversionedId:"features",id:"features",title:"Features",description:"Cross platform",source:"@site/docs/features.md",sourceDirName:".",slug:"/features",permalink:"/docs/features",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/features.md",tags:[],version:"current",sidebarPosition:1.1,frontMatter:{title:"Features",sidebar_position:1.1},sidebar:"mainSidebar",previous:{title:"AIR",permalink:"/docs/"},next:{title:"Getting Started",permalink:"/docs/basics/getting-started"}},l={},p=[{value:"Cross platform",id:"cross-platform",level:2},{value:"Mature and free environment",id:"mature-and-free-environment",level:2},{value:"Development made easy",id:"development-made-easy",level:2},{value:"Native extensions",id:"native-extensions",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"cross-platform"},"Cross platform"),(0,r.kt)("p",null,"The runtime provides a consistent cross-operating system framework for deploying applications and therefore reduces cross-platform testing by ensuring consistent functionality and interactions across platforms. Instead of developing for a specific operating system, you target the runtime, which has the following benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Applications developed for AIR run across multiple operating systems without any additional work by you. The runtime ensures consistent and predictable presentation and interactions across all the operating systems supported by AIR."),(0,r.kt)("li",{parentName:"ul"},"Applications can be built faster by enabling you to leverage existing web technologies and design patterns. You can extend applications to the desktop and mobile devices without learning traditional development technologies or the complexity of native code."),(0,r.kt)("li",{parentName:"ul"},"Application development is easier than using lower-level languages such as C and C++."),(0,r.kt)("li",{parentName:"ul"},"You do not need to manage the complex, low-level APIs specific to each operating system, but can access them if required through powerful native extensions.")),(0,r.kt)("p",null,"AIR applications are installed and run just like any other desktop or mobile application and appear no different to the end user."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"With AIR, you can target desktop (Windows and MacOS) and main mobile platforms (iOS, Android, Amazon Fire devices...)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can even quickly build and deploy iOS apps to Apple devices on Windows ! *")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The same code has identical behavior across various devices, allowing to develop on a platform and port it to another with almost no changes."))),(0,r.kt)("h2",{id:"mature-and-free-environment"},"Mature and free environment"),(0,r.kt)("p",null,"AIR was released in 2008 by Adobe and is very stable and mature. It has been used in countless projects by big companies over the years. It is now actively maintained and updated by Harman, a Samsung company."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AIR has a free tier that allows you to develop your applications completely for free! (only an AIR splash screen will be displayed at startup). ",(0,r.kt)("a",{parentName:"li",href:"https://airsdk.harman.com/pricing"},"Reasonable paid tiers")," will remove the default splash screen and give you access to extra support."),(0,r.kt)("li",{parentName:"ul"},"You can use ActionScript 3 to develop elegant OOP code (the Haxe language can also be used to compile to AIR for even more advanced language features)."),(0,r.kt)("li",{parentName:"ul"},"AIR offers a ",(0,r.kt)("a",{parentName:"li",href:"/reference"},"very rich API")," covering many areas: Graphics (vectors and bitmap), Animation, User input, Rich text display, Sound, Networking, Data storage..."),(0,r.kt)("li",{parentName:"ul"},"Many libraries and code examples are already available."),(0,r.kt)("li",{parentName:"ul"},"Some awesome libraries like ",(0,r.kt)("a",{parentName:"li",href:"https://gamua.com/starling/"},"Starling")," (GPU accelerated engine) or ",(0,r.kt)("a",{parentName:"li",href:"https://feathersui.com/learn/as3-starling/getting-started/"},"Feathers UI")," (complete UI design solution) as also available for free!")),(0,r.kt)("h2",{id:"development-made-easy"},"Development made easy"),(0,r.kt)("p",null,"Due to its consistent behavior across different platforms, the AIR desktop simulator allows to quickly test your code without having to deploy your apps to actual devices."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can debug your apps over Wifi or USB, and inspect your code with breakpoints at runtime. Profile your apps and see potential bottlenecks with Adobe Scout."),(0,r.kt)("li",{parentName:"ul"},"The compile times are very fast, making tests and iterations easy."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/basics/setup-an-editor"},"Different quality IDEs")," are available, both free or commercial."),(0,r.kt)("li",{parentName:"ul"},"Join our ",(0,r.kt)("a",{parentName:"li",href:"/community"},"friendly community")," for extra guidance and support!")),(0,r.kt)("h2",{id:"native-extensions"},"Native extensions"),(0,r.kt)("p",null,"You can expand AIR functionalities with native extensions, to call native functionality not exposed by the runtime or to access native SDKs."),(0,r.kt)("p",null,"Many extensions are already available, both open source or ",(0,r.kt)("a",{parentName:"p",href:"https://airnativeextensions.com"},"commercially maintained"),": in-app billing, app rating, social sharing, analytics, ads, notifications, and many more!"))}d.isMDXComponent=!0}}]);