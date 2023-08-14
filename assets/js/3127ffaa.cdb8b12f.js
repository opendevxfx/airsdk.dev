"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[4673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),l=i,g=m["".concat(c,".").concat(l)]||m[l]||u[l]||o;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},21480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={sidebar_position:10},a="Domain support",s={unversionedId:"development/rich-media-content/using-digital-rights-management/domain-support",id:"development/rich-media-content/using-digital-rights-management/domain-support",title:"Domain support",description:"If the content metadata specifies that domain registration is required, the AIR",source:"@site/docs/development/rich-media-content/using-digital-rights-management/domain-support.md",sourceDirName:"development/rich-media-content/using-digital-rights-management",slug:"/development/rich-media-content/using-digital-rights-management/domain-support",permalink:"/docs/development/rich-media-content/using-digital-rights-management/domain-support",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/rich-media-content/using-digital-rights-management/domain-support.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"mainSidebar",previous:{title:"Out-of-band Licenses",permalink:"/docs/development/rich-media-content/using-digital-rights-management/out-of-band-licenses"},next:{title:"Playing encrypted content using domain support",permalink:"/docs/development/rich-media-content/using-digital-rights-management/playing-encryped-content-using-domain-support"}},c={},p=[],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"domain-support"},"Domain support"),(0,i.kt)("p",null,"If the content metadata specifies that domain registration is required, the AIR\napplication can invoke an API to join a device group. This action triggers a\ndomain registration request to be sent to the domain server. Once a license is\nissued to a device group, the license can be exported and shared with other\ndevices that have joined the device group."),(0,i.kt)("p",null,"The device group information is then used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"DRMContentData"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"V"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"oucherAccessInfo")," object, which will then be used to present the information\nthat is required to successfully retrieve and consume a voucher."))}u.isMDXComponent=!0}}]);