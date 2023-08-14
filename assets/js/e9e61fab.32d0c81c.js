"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[1531],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),l=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),g=a,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||s;return n?t.createElement(m,o(o({ref:r},c),{},{components:n})):t.createElement(m,o({ref:r},c))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=g;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},20136:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=n(87462),a=(n(67294),n(3905));const s={sidebar_position:5},o="Alternation",i={unversionedId:"development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/alternation",id:"development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/alternation",title:"Alternation",description:"Use the | (pipe) character in a regular expression to have the regular",source:"@site/docs/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/alternation.md",sourceDirName:"development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax",slug:"/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/alternation",permalink:"/docs/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/alternation",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/alternation.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"mainSidebar",previous:{title:"Quantifiers",permalink:"/docs/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/quantifiers"},next:{title:"Groups",permalink:"/docs/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/groups"}},p={},l=[],c={toc:l},u="wrapper";function d(e){let{components:r,...n}=e;return(0,a.kt)(u,(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alternation"},"Alternation"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"|")," (pipe) character in a regular expression to have the regular\nexpression engine consider alternatives for a match. For example, the following\nregular expression matches any one of the words ",(0,a.kt)("inlineCode",{parentName:"p"},"cat, dog, pig, rat"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var pattern:RegExp = /cat|dog|pig|rat/;\n")),(0,a.kt)("p",null,"You can use parentheses to define groups to restrict the scope of the ","|","\nalternator. The following regular expression matches ",(0,a.kt)("inlineCode",{parentName:"p"},"cat")," followed by ",(0,a.kt)("inlineCode",{parentName:"p"},"nap")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"nip"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var pattern:RegExp = /cat(nap|nip)/;\n")),(0,a.kt)("p",null,"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/groups"},"Groups"),"."),(0,a.kt)("p",null,"The following two regular expressions, one using the ",(0,a.kt)("inlineCode",{parentName:"p"},"|")," alternator, the other\nusing a character class (defined with ",(0,a.kt)("inlineCode",{parentName:"p"},"[")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"]"),"), are equivalent:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/1|3|5|7|9/\n/[13579]/\n")),(0,a.kt)("p",null,"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/character-classes"},"Character classes"),"."))}d.isMDXComponent=!0}}]);