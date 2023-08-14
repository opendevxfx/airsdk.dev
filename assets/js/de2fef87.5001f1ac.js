"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[98943],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>y});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(i),m=r,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return i?n.createElement(y,o(o({ref:t},l),{},{components:i})):n.createElement(y,o({ref:t},l))}));function y(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=i[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},76275:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=i(87462),r=(i(67294),i(3905));const a={sidebar_position:10},o="Security on iOS devices",s={unversionedId:"development/security/air-security/security-on-ios-devices",id:"development/security/air-security/security-on-ios-devices",title:"Security on iOS devices",description:"On iOS AIR conforms to the native security model. At the same time, AIR",source:"@site/docs/development/security/air-security/security-on-ios-devices.md",sourceDirName:"development/security/air-security",slug:"/development/security/air-security/security-on-ios-devices",permalink:"/docs/development/security/air-security/security-on-ios-devices",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/security/air-security/security-on-ios-devices.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"mainSidebar",previous:{title:"Security on Android devices",permalink:"/docs/development/security/air-security/security-on-android-devices"},next:{title:"Camera, microphone, clipboard, mouse, and keyboard access",permalink:"/docs/development/security/camera-microphone-clipboard-mouse-and-keyboard-access"}},c={},u=[{value:"Application signatures",id:"application-signatures",level:4},{value:"Background image privacy",id:"background-image-privacy",level:4}],l={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"security-on-ios-devices"},"Security on iOS devices"),(0,r.kt)("p",null,"On iOS AIR conforms to the native security model. At the same time, AIR\nmaintains its own security rules, which are intended to make it easy for\ndevelopers to write secure, Internet-connected applications."),(0,r.kt)("p",null,"Since AIR applications on iOS use the iOS package format, installation falls\nunder the iOS security model. The AIR application installer is not used.\nFurthermore, a separate AIR runtime is not used on iOS devices. Every AIR\napplication contains all the code needed to function."),(0,r.kt)("h4",{id:"application-signatures"},"Application signatures"),(0,r.kt)("p",null,"All application packages created for the iOS platform must be signed. Since AIR\napplications on iOS are packaged in the native iOS IPA format, they are signed\nin accordance with iOS requirements rather than AIR requirements. While iOS and\nAIR use code signing in a similar fashion, there are significant differences:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On iOS, the certificate used to sign an application must be issued by Apple;\nCertificates from other certificate authorities cannot be used.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On iOS, Apple-issued distribution certificates are typically valid for one\nyear."))),(0,r.kt)("h4",{id:"background-image-privacy"},"Background image privacy"),(0,r.kt)("p",null,"When a user switches an application to the background on iOS, the operating\nsystem captures a screenshot that it uses to animate the transition. This\nscreenshot is stored in device memory and can be accessed by an attacker in\nphysical control of the device."),(0,r.kt)("p",null,"If your application displays sensitive information, you should guard against\nsuch information being captured by the background screenshot. The ",(0,r.kt)("inlineCode",{parentName:"p"},"deactivate"),"\nevent dispatched by the NativeApplication object signals that an application is\nabout to switch to the background. Use this event to clear or hide any sensitive\ninformation."))}d.isMDXComponent=!0}}]);