"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[7878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>x});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,x=p["".concat(o,".").concat(u)]||p[u]||f[u]||i;return n?a.createElement(x,l(l({ref:t},d),{},{components:n})):a.createElement(x,l({ref:t},d))}));function x(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},l="Using the TextField class",s={unversionedId:"development/text/using-the-textfield-class/index",id:"development/text/using-the-textfield-class/index",title:"Using the TextField class",description:"You can use an instance of the TextField class to display text or create a text",source:"@site/docs/development/text/using-the-textfield-class/index.md",sourceDirName:"development/text/using-the-textfield-class",slug:"/development/text/using-the-textfield-class/",permalink:"/docs/development/text/using-the-textfield-class/",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/text/using-the-textfield-class/index.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Basics of Working with text",permalink:"/docs/development/text/basics-of-working-with-text"},next:{title:"Advanced text rendering",permalink:"/docs/development/text/using-the-textfield-class/advanced-text-rendering"}},o={},c=[],d={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-the-textfield-class"},"Using the TextField class"),(0,r.kt)("p",null,"You can use an instance of the TextField class to display text or create a text\ninput field on the screen in Adobe\xae Flash\xae Player or Adobe\xae AIR\u2122. The TextField\nclass is the basis for other text-based components, such as the TextArea\ncomponents or the TextInput components."),(0,r.kt)("p",null,"Text field content can be pre-specified in the SWF file, loaded from a text file\nor database, or entered by a user interacting with your application. Within a\ntext field, the text can appear as rendered HTML content, with images embedded\nin the rendered HTML. After you create an instance of a text field, you can use\nflash.text classes, such as TextFormat and StyleSheet, to control the appearance\nof the text. The\n",(0,r.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/text/package-detail.html"},"flash.text package"),"\ncontains nearly all the classes related to creating, managing, and formatting\ntext in ActionScript."),(0,r.kt)("p",null,"You can format text by defining the formatting with a TextFormat object and\nassigning that object to the text field. If your text field contains HTML text,\nyou can apply a StyleSheet object to the text field to assign styles to specific\npieces of the text field content. The TextFormat object or StyleSheet object\ncontains properties defining the appearance of the text, such as color, size,\nand weight. The TextFormat object assigns the properties to all the content\nwithin a text field or to a range of text. For example, within the same text\nfield, one sentence can be bold red text and the next sentence can be blue\nitalic text."),(0,r.kt)("p",null,"In addition to the classes in the flash.text package, you can use the\nflash.events.TextEvent class to respond to user actions related to text."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/development/text/using-the-textfield-class/displaying-text"},"Displaying text")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/development/text/using-the-textfield-class/selecting-and-manipulating-text"},"Selecting and manipulating text")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/development/text/using-the-textfield-class/capturing-text-input"},"Capturing text input")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/development/text/using-the-textfield-class/restricting-text-input"},"Restricting text input")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/development/text/using-the-textfield-class/formatting-text"},"Formatting text")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/development/text/using-the-textfield-class/advanced-text-rendering"},"Advanced text rendering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/development/text/using-the-textfield-class/working-with-static-text"},"Working with static text")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/development/text/using-the-textfield-class/textfield-example-newspaper-style-text-formatting"},"TextField Example: Newspaper-style text formatting"))),(0,r.kt)("p",null,"More Help topics"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20111120185735/https://help.adobe.com/en_US/Flash/10.0_UsingFlash/WSd60f23110762d6b883b18f10cb1fe1af6-7d54a.html"},"Text")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20150303093237/https://help.adobe.com/en_US/Flex/4.0/UsingSDK/WS2db454920e96a9e51e63e3d11c0bf69084-7d84.html"},"MX text controls")))}f.isMDXComponent=!0}}]);