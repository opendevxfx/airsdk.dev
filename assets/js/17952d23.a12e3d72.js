"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[70399],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,f=s["".concat(l,".").concat(m)]||s[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51844:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"ADT -prepare",sidebar_label:"prepare",sidebar_position:2},i=void 0,p={unversionedId:"building/air-developer-tool/commands/prepare",id:"building/air-developer-tool/commands/prepare",title:"ADT -prepare",description:"The -prepare command creates an unsigned AIRI package. An AIRI package cannot be used on its own. Use the -sign command to convert an AIRI file to a signed AIR package, or the package command to convert the AIRI file to a native package.",source:"@site/docs/building/air-developer-tool/commands/prepare.md",sourceDirName:"building/air-developer-tool/commands",slug:"/building/air-developer-tool/commands/prepare",permalink:"/docs/building/air-developer-tool/commands/prepare",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/building/air-developer-tool/commands/prepare.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"ADT -prepare",sidebar_label:"prepare",sidebar_position:2},sidebar:"mainSidebar",previous:{title:"package",permalink:"/docs/building/air-developer-tool/commands/package"},next:{title:"sign",permalink:"/docs/building/air-developer-tool/commands/sign"}},l={},c=[{value:"<code>output</code>",id:"output",level:3},{value:"<code>app_descriptor</code>",id:"app_descriptor",level:3},{value:"<code>FILE_OPTIONS</code>",id:"file_options",level:3}],d={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"-prepare")," command creates an unsigned AIRI package. An AIRI package cannot be used on its own. Use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/commands/sign"},(0,a.kt)("inlineCode",{parentName:"a"},"-sign"))," command to convert an AIRI file to a signed AIR package, or the package command to convert the AIRI file to a native package."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"-prepare")," command uses the following syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"adt -prepare output app_descriptor FILE_OPTIONS \n")),(0,a.kt)("h3",{id:"output"},(0,a.kt)("inlineCode",{parentName:"h3"},"output")),(0,a.kt)("p",null,"The name of the AIRI file that is created."),(0,a.kt)("h3",{id:"app_descriptor"},(0,a.kt)("inlineCode",{parentName:"h3"},"app_descriptor")),(0,a.kt)("p",null,"The path to the application descriptor file. The path can be specified relative to the current directory or as an absolute path. (The application descriptor file is renamed as application.xml in the AIR file.)"),(0,a.kt)("h3",{id:"file_options"},(0,a.kt)("inlineCode",{parentName:"h3"},"FILE_OPTIONS")),(0,a.kt)("p",null,"Identifies the application files to include in the package. The file options are fully described in ",(0,a.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/option-sets/file-and-path-options"},"File and path options"),"."))}u.isMDXComponent=!0}}]);