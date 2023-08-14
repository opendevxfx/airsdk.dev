"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[59319],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},g="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),g=l(n),d=a,m=g["".concat(c,".").concat(d)]||g[d]||u[d]||o;return n?r.createElement(m,i(i({ref:e},p),{},{components:n})):r.createElement(m,i({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[g]="string"==typeof t?t:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33530:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:7},i="Concatenating strings",s={unversionedId:"development/core-actionscript-classes/working-with-strings/concatenating-strings",id:"development/core-actionscript-classes/working-with-strings/concatenating-strings",title:"Concatenating strings",description:"Concatenation of strings means taking two strings and joining them sequentially",source:"@site/docs/development/core-actionscript-classes/working-with-strings/concatenating-strings.md",sourceDirName:"development/core-actionscript-classes/working-with-strings",slug:"/development/core-actionscript-classes/working-with-strings/concatenating-strings",permalink:"/docs/development/core-actionscript-classes/working-with-strings/concatenating-strings",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/core-actionscript-classes/working-with-strings/concatenating-strings.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Obtaining string representations of other objects",permalink:"/docs/development/core-actionscript-classes/working-with-strings/obtaining-string-representations-of-other-objects"},next:{title:"Finding substrings and patterns in strings",permalink:"/docs/development/core-actionscript-classes/working-with-strings/finding-substrings-and-patterns-in-strings"}},c={},l=[],p={toc:l},g="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(g,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"concatenating-strings"},"Concatenating strings"),(0,a.kt)("p",null,"Concatenation of strings means taking two strings and joining them sequentially\ninto one. For example, you can use the+` operator to concatenate two strings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var str1:String = "green";\nvar str2:String = "ish";\nvar str3:String = str1 + str2; // str3 == "greenish"\n')),(0,a.kt)("p",null,"You can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"+=")," operator to the produce the same result, as the\nfollowing example shows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var str:String = "green";\nstr += "ish"; // str == "greenish"\n')),(0,a.kt)("p",null,"Additionally, the String class includes a ",(0,a.kt)("inlineCode",{parentName:"p"},"concat()")," method, which can be used\nas follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var str1:String = "Bonjour";\nvar str2:String = "from";\nvar str3:String = "Paris";\nvar str4:String = str1.concat(" ", str2, " ", str3);\n// str4 == "Bonjour from Paris"\n')),(0,a.kt)("p",null,"If you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," operator (or the ",(0,a.kt)("inlineCode",{parentName:"p"},"+=")," operator) with a String object and an\nobject that is ",(0,a.kt)("em",{parentName:"p"},"not")," a string, ActionScript automatically converts the nonstring\nobject to a String object in order to evaluate the expression, as shown in this\nexample:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var str:String = "Area = ";\nvar area:Number = Math.PI * Math.pow(3, 2);\nstr = str + area; // str == "Area = 28.274333882308138"\n')),(0,a.kt)("p",null,"However, you can use parentheses for grouping to provide context for the ",(0,a.kt)("inlineCode",{parentName:"p"},"+"),"\noperator, as the following example shows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'trace("Total: $" + 4.55 + 1.45); // output: Total: $4.551.45\ntrace("Total: $" + (4.55 + 1.45)); // output: Total: $6\n')))}u.isMDXComponent=!0}}]);