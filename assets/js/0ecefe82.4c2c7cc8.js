"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[46321],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>d});var t=n(67294);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=t.createContext({}),l=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(p.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=s,d=u["".concat(p,".").concat(m)]||u[m]||g[m]||a;return n?t.createElement(d,i(i({ref:r},c),{},{components:n})):t.createElement(d,i({ref:r},c))}));function d(e,r){var n=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[u]="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25486:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=n(87462),s=(n(67294),n(3905));const a={},i="Regular expression syntax",o={unversionedId:"development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/index",id:"development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/index",title:"Regular expression syntax",description:"This section describes all of the elements of ActionScript regular expression",source:"@site/docs/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/index.md",sourceDirName:"development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax",slug:"/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/",permalink:"/docs/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/index.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Basics of regular expressions",permalink:"/docs/development/core-actionscript-classes/using-regular-expressions/basics-of-regular-expressions"},next:{title:"Creating an instance of a regular expression",permalink:"/docs/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/creating-an-instance-of-a-regular-expression"}},p={},l=[],c={toc:l},u="wrapper";function g(e){let{components:r,...n}=e;return(0,s.kt)(u,(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"regular-expression-syntax"},"Regular expression syntax"),(0,s.kt)("p",null,"This section describes all of the elements of ActionScript regular expression\nsyntax. As you'll see, regular expressions can have many complexities and\nnuances. You can find detailed resources on regular expressions on the web and\nin bookstores. Keep in mind that different programming environments implement\nregular expressions in different ways. ActionScript 3.0 implements regular\nexpressions as defined in the ECMAScript edition 3 language specification\n(ECMA-262)."),(0,s.kt)("p",null,"Generally, you use regular expressions that match more complicated patterns than\na simple string of characters. For example, the following regular expression\ndefines the pattern consisting of the letters A, B, and C in sequence followed\nby any digit:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/ABC\\d/\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"\\d"),' code represents "any digit." The backslash (',(0,s.kt)("inlineCode",{parentName:"p"},"\\"),") character is called\nthe escape character, and combined with the character that follows it (in this\ncase the letter d), it has special meaning in the regular expression."),(0,s.kt)("p",null,"The following regular expression defines the pattern of the letters ABC followed\nby any number of digits (note the asterisk):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/ABC\\d*/\n")),(0,s.kt)("p",null,"The asterisk character (",(0,s.kt)("inlineCode",{parentName:"p"},"*"),") is a ",(0,s.kt)("em",{parentName:"p"},"metacharacter"),". A metacharacter is a\ncharacter that has special meaning in regular expressions. The asterisk is a\nspecific type of metacharacter called a ",(0,s.kt)("em",{parentName:"p"},"quantifier,")," which is used to quantify\nthe amount of repetition of a character or group of characters. For more\ninformation, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/quantifiers"},"Quantifiers"),"."),(0,s.kt)("p",null,"In addition to its pattern, a regular expression can contain flags, which\nspecify how the regular expression is to be matched. For example, the following\nregular expression uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"i")," flag, which specifies that the regular\nexpression ignores case sensitivity in matching strings:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/ABC\\d*/i\n")),(0,s.kt)("p",null,"For more information, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/flags-and-properties"},"Flags and properties"),"."),(0,s.kt)("p",null,"You can use regular expressions with the following methods of the String class:\n",(0,s.kt)("inlineCode",{parentName:"p"},"match()"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"replace()"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"search()"),". For more information on these methods,\nsee\n",(0,s.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/working-with-strings/finding-substrings-and-patterns-in-strings"},"Finding patterns in strings and replacing substrings"),"."),(0,s.kt)("p",null,"More Help topics"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/creating-an-instance-of-a-regular-expression"},"Creating an instance of a regular expression"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/characters-metacharacters-and-metasequences"},"Characters, metacharacters, and metasequences"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/character-classes"},"Character classes"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/quantifiers"},"Quantifiers"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/alternation"},"Alternation"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/groups"},"Groups"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/using-regular-expressions/regular-expression-syntax/flags-and-properties"},"Flags and properties")))))}g.isMDXComponent=!0}}]);