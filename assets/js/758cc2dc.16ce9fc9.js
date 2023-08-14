"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[2587],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=u(n),d=a,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(k,i(i({ref:e},c),{},{components:n})):r.createElement(k,i({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84860:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={},i="About URLs in AIR",o={unversionedId:"development/html-content-in-air/programming-html-and-javascript-in-air/about-urls-in-air",id:"development/html-content-in-air/programming-html-and-javascript-in-air/about-urls-in-air",title:"About URLs in AIR",description:"In HTML content running in AIR, you can use any of the following URL schemes in",source:"@site/docs/development/html-content-in-air/programming-html-and-javascript-in-air/about-urls-in-air.md",sourceDirName:"development/html-content-in-air/programming-html-and-javascript-in-air",slug:"/development/html-content-in-air/programming-html-and-javascript-in-air/about-urls-in-air",permalink:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/about-urls-in-air",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/html-content-in-air/programming-html-and-javascript-in-air/about-urls-in-air.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"About the HTMLLoader class",permalink:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/about-the-htmlloader-class"},next:{title:"Accessing AIR API classes from JavaScript",permalink:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/accessing-air-api-classes-from-javascript"}},p={},u=[],c={toc:u},s="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"about-urls-in-air"},"About URLs in AIR"),(0,a.kt)("p",null,"In HTML content running in AIR, you can use any of the following URL schemes in\ndefining ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," attributes for ",(0,a.kt)("inlineCode",{parentName:"p"},"img"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"frame"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"iframe"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"script")," tags, in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," attribute of a ",(0,a.kt)("inlineCode",{parentName:"p"},"link")," tag, or anywhere else you can provide a URL."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("p",null,"URL scheme")),(0,a.kt)("th",null,(0,a.kt)("p",null,"Description")),(0,a.kt)("th",null,(0,a.kt)("p",null,"Example")))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("p",null,"file")),(0,a.kt)("td",null,(0,a.kt)("p",null,"A path relative to the root of the file system.")),(0,a.kt)("td",null,(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",null,"file:///c:/AIR Test/test.txt"))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("p",null,"app")),(0,a.kt)("td",null,(0,a.kt)("p",null,"A path relative to the root directory of the installed application.")),(0,a.kt)("td",null,(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",null,"app:/images"))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("p",null,"app-storage")),(0,a.kt)("td",null,(0,a.kt)("p",null,"A path relative to the application store directory. For each installed application, AIR defines a unique application store directory, which is a useful place to store data specific to that application.")),(0,a.kt)("td",null,(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",null,"app-storage:/settings/prefs.xml"))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("p",null,"http")),(0,a.kt)("td",null,(0,a.kt)("p",null,"A standard HTTP request.")),(0,a.kt)("td",null,(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",null,"http://www.adobe.com"))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("p",null,"https")),(0,a.kt)("td",null,(0,a.kt)("p",null,"A standard HTTPS request.")),(0,a.kt)("td",null,(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",null,"https://secure.example.com"))))))),(0,a.kt)("p",null,"For more information about using URL schemes in AIR, see\n",(0,a.kt)("a",{parentName:"p",href:"/docs/development/networking-and-communication/http-communications/loading-external-data#uri-schemes"},"URI schemes"),"."),(0,a.kt)("p",null,"Many of AIR APIs, including the File, Loader, URLStream, and Sound classes, use\na URLRequest object rather than a string containing the URL. The URLRequest\nobject itself is initialized with a string, which can use any of the same url\nschemes. For example, the following statement creates a URLRequest object that\ncan be used to request the Adobe home page:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'var urlReq = new air.URLRequest("https://www.adobe.com/");\n')),(0,a.kt)("p",null,"For information about URLRequest objects see\n",(0,a.kt)("a",{parentName:"p",href:"/docs/development/networking-and-communication/http-communications/"},"HTTP communications"),"."))}m.isMDXComponent=!0}}]);