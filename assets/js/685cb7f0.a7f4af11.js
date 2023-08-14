"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[41844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const o={title:"ADT Environment Variables",sidebar_position:5},a=void 0,l={unversionedId:"building/air-developer-tool/environment-variables",id:"building/air-developer-tool/environment-variables",title:"ADT Environment Variables",description:"ADT reads the values of the following environment variables (if they are set):",source:"@site/docs/building/air-developer-tool/environment-variables.md",sourceDirName:"building/air-developer-tool",slug:"/building/air-developer-tool/environment-variables",permalink:"/docs/building/air-developer-tool/environment-variables",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/building/air-developer-tool/environment-variables.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"ADT Environment Variables",sidebar_position:5},sidebar:"mainSidebar",previous:{title:"ADT Error Messages",permalink:"/docs/building/air-developer-tool/error-messages"},next:{title:"Introduction to Application Descriptor Files",permalink:"/docs/building/application-descriptor-files/introduction"}},s={},d=[{value:"<code>AIR_ANDROID_SDK_HOME</code>",id:"air_android_sdk_home",level:3},{value:"<code>AIR_EXTENSION_PATH</code>",id:"air_extension_path",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ADT reads the values of the following environment variables (if they are set):"),(0,i.kt)("h3",{id:"air_android_sdk_home"},(0,i.kt)("inlineCode",{parentName:"h3"},"AIR_ANDROID_SDK_HOME")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AIR_ANDROID_SDK_HOME")," specifies the path to the root directory of the Android SDK (the directory containing the tools folder). The AIR 2.6+ SDK includes the tools from the Android SDK needed to implement the relevant ADT commands. Only set this value to use a different version of the Android SDK. If this variable is set, then the ",(0,i.kt)("inlineCode",{parentName:"p"},"-platformsdk")," option does not need to be specified when running the ADT commands which require it. If both this variable and the command-line option are set, the path specified on the command line is used."),(0,i.kt)("h3",{id:"air_extension_path"},(0,i.kt)("inlineCode",{parentName:"h3"},"AIR_EXTENSION_PATH")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AIR_EXTENSION_PATH")," specifies a list of directories to search for native extensions required by an application. This list of directories is searched in order after any native extension directories specified on the ADT command line. The ADL command also uses this environment variable."),(0,i.kt)("p",null,"TODO:: Add in current additional environment variables"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"On some computer systems, double-byte characters in the file system paths stored in these environment variables can be misinterpreted. If this occurs, try setting the JRE used to run ADT to use the UTF-8 character set. This is done by default in the script used to launch ADT on Mac and Linux. In the Windows ",(0,i.kt)("inlineCode",{parentName:"p"},"adt.bat")," file, or when you run ADT directly from Java, specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"-Dfile.encoding=UTF-8")," option on the Java command line.")))}u.isMDXComponent=!0}}]);