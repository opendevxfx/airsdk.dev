"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[17558],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>m});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||a;return n?t.createElement(m,i(i({ref:r},p),{},{components:n})):t.createElement(m,i({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96647:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=n(87462),o=(n(67294),n(3905));const a={sidebar_position:3},i="Error handling in ActionScript 3.0",s={unversionedId:"development/core-actionscript-classes/handling-errors/error-handling-in-actionscript-3.0",id:"development/core-actionscript-classes/handling-errors/error-handling-in-actionscript-3.0",title:"Error handling in ActionScript 3.0",description:"Since many applications can run without building the logic to handle errors,",source:"@site/docs/development/core-actionscript-classes/handling-errors/error-handling-in-actionscript-3.0.md",sourceDirName:"development/core-actionscript-classes/handling-errors",slug:"/development/core-actionscript-classes/handling-errors/error-handling-in-actionscript-3.0",permalink:"/docs/development/core-actionscript-classes/handling-errors/error-handling-in-actionscript-3.0",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/core-actionscript-classes/handling-errors/error-handling-in-actionscript-3.0.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mainSidebar",previous:{title:"Types of errors",permalink:"/docs/development/core-actionscript-classes/handling-errors/types-of-errors"},next:{title:"Working with the debugger versions of Flash runtimes",permalink:"/docs/development/core-actionscript-classes/handling-errors/working-with-the-debugger-versions-of-flash-runtimes"}},l={},c=[{value:"ActionScript 3.0 error-handling elements",id:"actionscript-30-error-handling-elements",level:2},{value:"Error-handling strategies",id:"error-handling-strategies",level:2}],p={toc:c},d="wrapper";function h(e){let{components:r,...n}=e;return(0,o.kt)(d,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"error-handling-in-actionscript-30"},"Error handling in ActionScript 3.0"),(0,o.kt)("p",null,"Since many applications can run without building the logic to handle errors,\ndevelopers are tempted to postpone building error handling into their\napplications. However, without error handling, an application can easily stall\nor frustrate the user if something doesn't work as expected. ActionScript 2.0\nhas an Error class that allows you to build logic into custom functions to throw\nan exception with a specific message. Because error handling is critical for\nmaking a user-friendly application, ActionScript 3.0 includes an expanded\narchitecture for catching errors."),(0,o.kt)("p",null,"Note: While the\n",(0,o.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/index.html"},"ActionScript 3.0 Reference for the Adobe Flash Platform"),"\ndocuments the exceptions thrown by many methods, it might not include all\npossible exceptions for each method. A method might throw an exception for\nsyntax errors or other problems that are not noted explicitly in the method\ndescription, even when the description does list some of the exceptions a method\nthrows."),(0,o.kt)("h2",{id:"actionscript-30-error-handling-elements"},"ActionScript 3.0 error-handling elements"),(0,o.kt)("p",null,"ActionScript 3.0 includes many tools for error handling, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Error classes. ActionScript 3.0 includes a broad range of Error classes to\nexpand the scope of situations that can produce error objects. Each Error\nclass helps applications handle and respond to specific error conditions,\nwhether they are related to system errors (like a MemoryError condition),\ncoding errors (like an ArgumentError condition), networking and communication\nerrors (like a URIError condition), or other situations. For more information\non each class, see\n",(0,o.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/handling-errors/comparing-the-error-classes"},"Comparing the Error classes"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fewer silent failures. In earlier versions of Flash Player, errors were\ngenerated and reported only if you explicitly used the ",(0,o.kt)("inlineCode",{parentName:"p"},"throw")," statement. For\nFlash Player 9 and later Flash runtimes, native ActionScript methods and\nproperties throw run-time errors. These errors allow you to handle these\nexceptions more effectively when they occur, then react to each exception,\nindividually.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Clear error messages displayed during debugging. When you are using the\ndebugger version of a Flash runtime, problematic code or situations generate\nrobust error messages, which help you easily identify reasons why a particular\nblock of code fails. These messages make fixing errors more efficient. For\nmore information, see\n",(0,o.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/handling-errors/working-with-the-debugger-versions-of-flash-runtimes"},"Working with the debugger versions of Flash runtimes"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Precise errors allow for clear error messages displayed to users. In previous\nversions of Flash Player, the ",(0,o.kt)("inlineCode",{parentName:"p"},"FileReference.upload()")," method returned a\nBoolean value of ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," if the ",(0,o.kt)("inlineCode",{parentName:"p"},"upload()")," call was unsuccessful, indicating\none of five possible errors. If an error occurs when you call the ",(0,o.kt)("inlineCode",{parentName:"p"},"upload()"),"\nmethod in ActionScript 3.0, four specific errors help you display more\naccurate error messages to end users.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Refined error handling. Distinct errors are thrown for many common situations.\nFor example, in ActionScript 2.0, before a FileReference object has been\npopulated, the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property has the value ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," (so, before you can use or\ndisplay the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property, ensure that the value is set and not ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"). In\nActionScript 3.0, if you attempt to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property before it has\nbeen populated, Flash Player or AIR throws an IllegalOperationError, which\ninforms you that the value has not been set, and you can use\n",(0,o.kt)("inlineCode",{parentName:"p"},"try..catch..finally")," blocks to handle the error. For more information see\n",(0,o.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/handling-errors/handling-synchronous-errors-in-an-application#using-try-catch-finally-statements"},"Using try..catch..finally statements"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"No significant performance drawbacks. Using ",(0,o.kt)("inlineCode",{parentName:"p"},"try..catch..finally")," blocks to\nhandle errors takes little or no additional resources compared to previous\nversions of ActionScript.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"An ErrorEvent class that allows you to build listeners for specific\nasynchronous error events. For more information see\n",(0,o.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/handling-errors/responding-to-error-events-and-status"},"Responding to error events and status"),"."))),(0,o.kt)("h2",{id:"error-handling-strategies"},"Error-handling strategies"),(0,o.kt)("p",null,"As long as your application doesn't encounter a problematic condition, it can\nstill run successfully if you don't build error-handling logic into your code.\nHowever, if you don't actively handle errors and your application does encounter\na problem, your users will never know why your application fails when it does."),(0,o.kt)("p",null,"There are different ways you can approach error handling in your application.\nThe following list summarizes the three major options for handling errors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"try..catch..finally")," statements. These statements catch synchronous\nerrors as they occur. You can nest your statements into a hierarchy to catch\nexceptions at various levels of code execution. For more information, see\n",(0,o.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/handling-errors/handling-synchronous-errors-in-an-application#using-try-catch-finally-statements"},"Using try..catch..finally statements"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create your own custom error objects. You can use the Error class to create\nyour own custom error objects to track specific operations in your application\nthat are not covered by built-in error types. Then you can use\n",(0,o.kt)("inlineCode",{parentName:"p"},"try..catch..finally")," statements on your custom error objects. For more\ninformation see\n",(0,o.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/handling-errors/creating-custom-error-classes"},"Creating custom error classes"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Write event listeners and handlers to respond to error events. By using this\nstrategy, you can create global error handlers that let you handle similar\nevents without duplicating much code in ",(0,o.kt)("inlineCode",{parentName:"p"},"try..catch..finally")," blocks. You are\nalso more likely to catch asynchronous errors using this approach. For more\ninformation, see\n",(0,o.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/handling-errors/responding-to-error-events-and-status"},"Responding to error events and status"),"."))))}h.isMDXComponent=!0}}]);