"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[37490],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(h,o(o({ref:n},s),{},{components:t})):a.createElement(h,o({ref:n},s))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},63911:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const r={},o="Using the external API",c={unversionedId:"development/networking-and-communication/using-the-external-api/index",id:"development/networking-and-communication/using-the-external-api/index",title:"Using the external API",description:"The ActionScript 3.0 external API (",source:"@site/docs/development/networking-and-communication/using-the-external-api/index.md",sourceDirName:"development/networking-and-communication/using-the-external-api",slug:"/development/networking-and-communication/using-the-external-api/",permalink:"/docs/development/networking-and-communication/using-the-external-api/",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/networking-and-communication/using-the-external-api/index.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Communicating with native processes in AIR",permalink:"/docs/development/networking-and-communication/communicating-with-native-processes-in-air"},next:{title:"Basics of using the external API",permalink:"/docs/development/networking-and-communication/using-the-external-api/basics-of-using-the-external-api"}},l={},p=[{value:"Using the external API in AIR",id:"using-the-external-api-in-air",level:4}],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-the-external-api"},"Using the external API"),(0,i.kt)("p",null,"The ActionScript 3.0 external API (\n",(0,i.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/external/ExternalInterface.html"},"flash.external.ExternalInterface"),")\nenables straightforward communication between ActionScript and the container\napplication within which Adobe Flash Player is running. Use the\nExternalInterface API to create interaction between a SWF document and\nJavaScript in an HTML page."),(0,i.kt)("p",null,"You can use the external API to interact with a container application, pass data\nbetween ActionScript and JavaScript in an HTML page."),(0,i.kt)("p",null,"Some common external API tasks are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Getting information about the container application")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using ActionScript to call code in a web page displayed in a browser or an AIR\ndesktop application")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Calling ActionScript code from a web page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Creating a proxy to simplify calling ActionScript code from a web page"))),(0,i.kt)("p",null,"Note: This discussion of the external interface only covers communication\nbetween ActionScript in a SWF file and the container application that includes a\nreference to the Flash Player or instance in which the SWF file is loaded. Any\nother use of Flash Player within an application is outside the scope of this\ndocumentation. Flash Player is designed to be used as a browser plug-in or as a\nprojector (standalone application). Other usage scenarios may have limited\nsupport."),(0,i.kt)("h4",{id:"using-the-external-api-in-air"},"Using the external API in AIR"),(0,i.kt)("p",null,"Since an AIR application does not have an external container, this external\ninterface does not generally apply\u2014nor is it generally needed. When your AIR\napplication loads a SWF file directly, the application code can communicate\ndirectly with the ActionScript code in the SWF (subject to security sandbox\nrestrictions)."),(0,i.kt)("p",null,"However, when your AIR application loads a SWF file using an HTML page in an\nHTMLLoader object (or an HTML component in Flex), the HTMLLoader object serves\nas the external container. Thus, you can use the external interface to\ncommunicate between the ActionScript code in the loaded SWF and the JavaScript\ncode in the HTML page loaded in the HTMLLoader."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/development/networking-and-communication/using-the-external-api/basics-of-using-the-external-api"},"Basics of using the external API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/development/networking-and-communication/using-the-external-api/external-api-requirements-and-advantages"},"External API requirements and advantages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/development/networking-and-communication/using-the-external-api/using-the-externalinterface-class"},"Using the ExternalInterface class")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/development/networking-and-communication/using-the-external-api/external-api-example-communicating-between-actionscript-and-javascript-in-a-web-browser"},"External API example: Communicating between ActionScript and JavaScript in a web browser"))))}d.isMDXComponent=!0}}]);