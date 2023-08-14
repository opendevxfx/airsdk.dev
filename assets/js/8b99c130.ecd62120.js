"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[68390],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(t),u=o,m=h["".concat(c,".").concat(u)]||h[u]||d[u]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},83015:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const a={sidebar_position:1},i="Basics of error handling",s={unversionedId:"development/core-actionscript-classes/handling-errors/basics-of-error-handling",id:"development/core-actionscript-classes/handling-errors/basics-of-error-handling",title:"Basics of error handling",description:"A run-time error is something that goes wrong in your ActionScript code that",source:"@site/docs/development/core-actionscript-classes/handling-errors/basics-of-error-handling.md",sourceDirName:"development/core-actionscript-classes/handling-errors",slug:"/development/core-actionscript-classes/handling-errors/basics-of-error-handling",permalink:"/docs/development/core-actionscript-classes/handling-errors/basics-of-error-handling",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/core-actionscript-classes/handling-errors/basics-of-error-handling.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"Handling errors",permalink:"/docs/development/core-actionscript-classes/handling-errors/"},next:{title:"Types of errors",permalink:"/docs/development/core-actionscript-classes/handling-errors/types-of-errors"}},c={},l=[{value:"Important concepts and terms",id:"important-concepts-and-terms",level:4}],p={toc:l},h="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(h,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basics-of-error-handling"},"Basics of error handling"),(0,o.kt)("p",null,"A run-time error is something that goes wrong in your ActionScript code that\nstops the ActionScript content from running as intended. To ensure that your\nActionScript code runs smoothly for users, write code in your application that\nhandles the error\u2014that fixes it, works around it, or at least lets the user know\nthat it has happened. This process is called ",(0,o.kt)("em",{parentName:"p"},"error handling"),"."),(0,o.kt)("p",null,"Error handling is a broad category that includes responding to many kinds of\nerrors that are thrown during compilation or while an application is running.\nErrors that happen at compile time are often easier to identify\u2014 fix them to\ncomplete the process of creating a SWF file."),(0,o.kt)("p",null,"Run-time errors can be more difficult to detect, because in order for them to\noccur the erroneous code must actually be run. If a segment of your program has\nseveral branches of code, like an ",(0,o.kt)("inlineCode",{parentName:"p"},"if..then..else")," statement, test every\npossible condition, with all the possible input values that real users might\nuse, to confirm that your code is error-free."),(0,o.kt)("p",null,"Run-time errors can be divided into two categories: ",(0,o.kt)("em",{parentName:"p"},"program errors")," are\nmistakes in your ActionScript code, such as specifying the wrong data type for a\nmethod parameter; ",(0,o.kt)("em",{parentName:"p"},"logical errors")," are mistakes in the logic (the data checking\nand value manipulation) of your program, such as using the wrong formula to\ncalculate interest rates in a banking application. Again, both of these types of\nerrors can often be detected and corrected ahead of time by diligently testing\nyour application."),(0,o.kt)("p",null,"Ideally, you'll want to identify and remove all errors from your application\nbefore it is released to end users. However, not all errors can be foreseen or\nprevented. For example, suppose your ActionScript application loads information\nfrom a particular website that is outside your control. If at some point that\nwebsite isn't available, the part of your application that depends on that\nexternal data won't behave correctly. The most important aspect of error\nhandling involves preparing for these unknown cases and handling them\ngracefully. Users need to continue to use your application, or at least get a\nfriendly error message explaining why it isn't working."),(0,o.kt)("p",null,"Run-time errors are represented in two ways in ActionScript:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Error classes: Many errors have an error class associated with them. When an\nerror occurs, the Flash runtime (such as Flash Player or Adobe AIR) creates an\ninstance of the specific error class that is associated with that particular\nerror. Your code can use the information contained in that error object to\nmake an appropriate response to the error.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Error events: Sometimes an error occurs when the Flash runtime would normally\ntrigger an event. In those cases, an error event is triggered instead. Each\nerror event has a class associated with it, and the Flash runtime passes an\ninstance of that class to the methods that are subscribed to the error event."))),(0,o.kt)("p",null,"To determine whether a particular method can trigger an error or error event,\nsee the method's entry in the\n",(0,o.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/index.html"},"ActionScript 3.0 Reference for the Adobe Flash Platform"),"."),(0,o.kt)("h4",{id:"important-concepts-and-terms"},"Important concepts and terms"),(0,o.kt)("p",null,"The following reference list contains important terms for programming error\nhandling routines:"),(0,o.kt)("p",null,"Asynchronous",(0,o.kt)("br",{parentName:"p"}),"\n","A program command such as a method call that doesn't provide an immediate\nresult; instead it gives a result (or error) in the form of an event."),(0,o.kt)("p",null,"Catch",(0,o.kt)("br",{parentName:"p"}),"\n","When an exception (a run-time error) occurs and your code becomes aware of the\nexception, that code is said to ",(0,o.kt)("em",{parentName:"p"},"catch")," the exception. Once an exception is\ncaught, the Flash runtime stops notifying other ActionScript code of the\nexception."),(0,o.kt)("p",null,"Debugger version",(0,o.kt)("br",{parentName:"p"}),"\n","A special version of the Flash runtime, such as the Flash Player dubugger\nversion or the AIR Debug Launcher (ADL), that contains code for notifying users\nof run-time errors. In the standard version of Flash Player or Adobe AIR (the\none that most users have), errors that aren't handled by your ActionScript code\nare ignored. In the debugger versions (which are included with Adobe Flash CS4\nProfessional and Adobe Flash Builder), a warning message appears when an\nunhandled error happens."),(0,o.kt)("p",null,"Exception",(0,o.kt)("br",{parentName:"p"}),"\n","An error that happens while an application is running and that the Flash runtime\ncan't resolve on its own."),(0,o.kt)("p",null,"Re-throw",(0,o.kt)("br",{parentName:"p"}),"\n","When your code catches an exception, the Flash runtime no longer notifies other\nobjects of the exception. If it's important for other objects to receive the\nexception, your code must ",(0,o.kt)("em",{parentName:"p"},"re-throw")," the exception to start the notification\nprocess again."),(0,o.kt)("p",null,"Synchronous",(0,o.kt)("br",{parentName:"p"}),"\n","A program command, such as a method call, that provides an immediate result (or\nimmediately throws an error), meaning that the response can be used within the\nsame code block."),(0,o.kt)("p",null,"Throw",(0,o.kt)("br",{parentName:"p"}),"\n","The act of notifying a Flash runtime (and consequently, notifying other objects\nand ActionScript code) that an error has occurred is known as ",(0,o.kt)("em",{parentName:"p"},"throwing")," an\nerror."))}d.isMDXComponent=!0}}]);