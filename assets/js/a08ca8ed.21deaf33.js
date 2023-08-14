"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[21419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||g[m]||s;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={sidebar_position:1},i="Basics of strings",o={unversionedId:"development/core-actionscript-classes/working-with-strings/basics-of-strings",id:"development/core-actionscript-classes/working-with-strings/basics-of-strings",title:"Basics of strings",description:"In programming parlance, a string is a text value\u2014a sequence of letters,",source:"@site/docs/development/core-actionscript-classes/working-with-strings/basics-of-strings.md",sourceDirName:"development/core-actionscript-classes/working-with-strings",slug:"/development/core-actionscript-classes/working-with-strings/basics-of-strings",permalink:"/docs/development/core-actionscript-classes/working-with-strings/basics-of-strings",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/core-actionscript-classes/working-with-strings/basics-of-strings.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"Working with strings",permalink:"/docs/development/core-actionscript-classes/working-with-strings/"},next:{title:"Creating strings",permalink:"/docs/development/core-actionscript-classes/working-with-strings/creating-strings"}},c={},l=[{value:"Important concepts and terms",id:"important-concepts-and-terms",level:4}],p={toc:l},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basics-of-strings"},"Basics of strings"),(0,a.kt)("p",null,"In programming parlance, a string is a text value\u2014a sequence of letters,\nnumbers, or other characters strung together into a single value. For instance,\nthis line of code creates a variable with the data type String and assigns a\nliteral string value to that variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var albumName:String = "Three for the money";\n')),(0,a.kt)("p",null,"As this example shows, in ActionScript you can denote a string value by\nsurrounding text with double or single quotation marks. Here are several more\nexamples of strings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"Hello"\n"555-7649"\n"https://www.adobe.com/"\n')),(0,a.kt)("p",null,"Any time you manipulate a piece of text in ActionScript, you are working with a\nstring value. The ActionScript String class is the data type you can use to work\nwith text values. String instances are frequently used for properties, method\nparameters, and so forth in many other ActionScript classes."),(0,a.kt)("h4",{id:"important-concepts-and-terms"},"Important concepts and terms"),(0,a.kt)("p",null,"The following reference list contains important terms related to strings that\nyou will encounter:"),(0,a.kt)("p",null,"ASCII",(0,a.kt)("br",{parentName:"p"}),"\n","A system for representing text characters and symbols in computer programs. The\nASCII system supports the 26-letter English alphabet, plus a limited set of\nadditional characters."),(0,a.kt)("p",null,"Character",(0,a.kt)("br",{parentName:"p"}),"\n","The smallest unit of text data (a single letter or symbol)."),(0,a.kt)("p",null,"Concatenation",(0,a.kt)("br",{parentName:"p"}),"\n","Joining multiple string values together by adding one to the end of the other,\ncreating a new string value."),(0,a.kt)("p",null,"Empty string",(0,a.kt)("br",{parentName:"p"}),"\n","A string that contains no text, white space, or other characters, written as\n",(0,a.kt)("inlineCode",{parentName:"p"},'""'),". An empty string value is different from a String variable with a null\nvalue\u2014a null String variable is a variable that does not have a String instance\nassigned to it, whereas an empty string has an instance with a value that\ncontains no characters."),(0,a.kt)("p",null,"String",(0,a.kt)("br",{parentName:"p"}),"\n","A textual value (sequence of characters)."),(0,a.kt)("p",null,'String literal (or "literal string")',(0,a.kt)("br",{parentName:"p"}),"\n","A string value written explicitly in code, written as a text value surrounded by\ndouble quotation marks or single quotation marks."),(0,a.kt)("p",null,"Substring",(0,a.kt)("br",{parentName:"p"}),"\n","A string that is a portion of another string."),(0,a.kt)("p",null,"Unicode",(0,a.kt)("br",{parentName:"p"}),"\n","A standard system for representing text characters and symbols in computer\nprograms. The Unicode system allows for the use of any character in any writing\nsystem."))}g.isMDXComponent=!0}}]);