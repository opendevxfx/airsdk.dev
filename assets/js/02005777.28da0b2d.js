"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[16997],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>y});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(i),m=n,y=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return i?r.createElement(y,o(o({ref:t},l),{},{components:i})):r.createElement(y,o({ref:t},l))}));function y(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<a;d++)o[d]=i[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},18839:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=i(87462),n=(i(67294),i(3905));const a={sidebar_position:1},o="AIR security basics",s={unversionedId:"development/security/air-security/air-security-basics",id:"development/security/air-security/air-security-basics",title:"AIR security basics",description:"AIR applications run with the same security restrictions as native applications.",source:"@site/docs/development/security/air-security/air-security-basics.md",sourceDirName:"development/security/air-security",slug:"/development/security/air-security/air-security-basics",permalink:"/docs/development/security/air-security/air-security-basics",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/security/air-security/air-security-basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"AIR security",permalink:"/docs/development/security/air-security/"},next:{title:"Installation and updates",permalink:"/docs/development/security/air-security/installation-and-updates"}},c={},d=[{value:"Adobe recommends",id:"adobe-recommends",level:2}],l={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"air-security-basics"},"AIR security basics"),(0,n.kt)("p",null,"AIR applications run with the same security restrictions as native applications.\nIn general, AIR applications, like native applications, have broad access to\noperating system capabilities such as reading and writing files, starting\napplications, drawing to the screen, and communicating with the network.\nOperating system restrictions that apply to native applications, such as\nuser-specific privileges, equally apply to AIR applications."),(0,n.kt)("p",null,"Although the Adobe\xae AIR\xae security model is an evolution of the Adobe\xae Flash\xae\nPlayer security model, the security contract is different from the security\ncontract applied to content in a browser. This contract offers developers a\nsecure means of broader functionality for rich experiences with freedoms that\nwould be inappropriate for a browser-based application."),(0,n.kt)("p",null,"AIR applications are written using either compiled bytecode (SWF content) or\ninterpreted script (JavaScript, HTML) so that the runtime provides memory\nmanagement. This minimizes the chances of AIR applications being affected by\nvulnerabilities related to memory management, such as buffer overflows and\nmemory corruption. These are some of the most common vulnerabilities affecting\ndesktop applications written in native code."),(0,n.kt)("h2",{id:"adobe-recommends"},"Adobe recommends"),(0,n.kt)("blockquote",null,(0,n.kt)("h3",{parentName:"blockquote",id:"-maintaining-security-with-adobe-air"},(0,n.kt)("a",{parentName:"h3",href:"https://web.archive.org/web/20130309154244/http://tv.adobe.com/watch/max-2008-develop/maintaining-security-with-adobe-air/"},(0,n.kt)("img",{src:i(39130).Z,width:"40",height:"40"})," Maintaining Security with Adobe AIR")),(0,n.kt)("p",{parentName:"blockquote"},"Peleus Uhley and Ethan Malasky provide an overview of the security-related\nissues that can arise when developing Adobe AIR applications.")))}u.isMDXComponent=!0},39130:(e,t,i)=>{i.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);