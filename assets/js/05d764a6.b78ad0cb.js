"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[39629],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=l,k=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(k,a(a({ref:t},u),{},{components:r})):n.createElement(k,a({ref:t},u))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:l,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},88359:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const o={sidebar_position:8},a="Comparing the Error classes",s={unversionedId:"development/core-actionscript-classes/handling-errors/comparing-the-error-classes",id:"development/core-actionscript-classes/handling-errors/comparing-the-error-classes",title:"Comparing the Error classes",description:"ActionScript provides a number of predefined Error classes. But, you can also",source:"@site/docs/development/core-actionscript-classes/handling-errors/comparing-the-error-classes.md",sourceDirName:"development/core-actionscript-classes/handling-errors",slug:"/development/core-actionscript-classes/handling-errors/comparing-the-error-classes",permalink:"/docs/development/core-actionscript-classes/handling-errors/comparing-the-error-classes",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/core-actionscript-classes/handling-errors/comparing-the-error-classes.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"mainSidebar",previous:{title:"Responding to error events and status",permalink:"/docs/development/core-actionscript-classes/handling-errors/responding-to-error-events-and-status"},next:{title:"Handling errors example: CustomErrors application",permalink:"/docs/development/core-actionscript-classes/handling-errors/handling-errors-example-custom-errors-application"}},i={},c=[{value:"Core Error classes",id:"core-error-classes",level:2},{value:"flash.error package Error classes",id:"flasherror-package-error-classes",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"comparing-the-error-classes"},"Comparing the Error classes"),(0,l.kt)("p",null,"ActionScript provides a number of predefined Error classes. But, you can also\nuse the same Error classes in your own code. There are two main types of Error\nclasses in ActionScript 3.0: ActionScript core Error classes and flash.error\npackage Error classes. The flash.error package contains additional classes to\naid ActionScript 3.0 application development and debugging."),(0,l.kt)("h2",{id:"core-error-classes"},"Core Error classes"),(0,l.kt)("p",null,"The core error classes include the Error, ArgumentError, EvalError, RangeError,\nReferenceError, SecurityError, SyntaxError, TypeError, URIError, and VerifyError\nclasses. Each of these classes are located in the top-level namespace."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,(0,l.kt)("p",null,"Class name")),(0,l.kt)("th",null,(0,l.kt)("p",null,"Description")),(0,l.kt)("th",null,(0,l.kt)("p",null,"Notes")))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"Error")),(0,l.kt)("td",null,(0,l.kt)("p",null,"The Error class is for throwing exceptions, and is the base class for the other exception classes defined in ECMAScript: EvalError, RangeError, ReferenceError, SyntaxError, TypeError, and URIError.")),(0,l.kt)("td",null,(0,l.kt)("p",null,"The Error class serves as the base class for all run-time errors, and is the recommended base class for any custom error classes."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"ArgumentError")),(0,l.kt)("td",null,(0,l.kt)("p",null,"The ArgumentError class represents an error that occurs when the parameter values supplied during a function call do not match the parameters defined for that function.")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Some examples of argument errors include the following:"),(0,l.kt)("ul",{class:"incremental"},(0,l.kt)("li",null,(0,l.kt)("p",null,"Too few or too many arguments are supplied to a method.")),(0,l.kt)("li",null,(0,l.kt)("p",null,"An argument was expected to be a member of an enumeration and was not."))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"EvalError")),(0,l.kt)("td",null,(0,l.kt)("p",null,"An EvalError exception is thrown if any parameters are passed to the Function class's constructor or if user code calls the",(0,l.kt)("samp",null,"eval()"),"function.")),(0,l.kt)("td",null,(0,l.kt)("p",null,"In ActionScript 3.0, support for the",(0,l.kt)("samp",null,"eval()")," function has been removed and attempts to use the function result in an error."),(0,l.kt)("p",null,"Earlier versions of Flash Player used the",(0,l.kt)("samp",null,"eval()")," function to access variables, properties, objects, or movie clips by name."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"RangeError")),(0,l.kt)("td",null,(0,l.kt)("p",null,"A RangeError exception is thrown if a numeric value falls outside an acceptable range.")),(0,l.kt)("td",null,(0,l.kt)("p",null,"For example, a RangeError is thrown by the Timer class if a delay was either negative or was not finite. A RangeError could also be thrown if you attempted to add a display object at an invalid depth."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"ReferenceError")),(0,l.kt)("td",null,(0,l.kt)("p",null,"A ReferenceError exception is thrown when a reference to an undefined property is attempted on a sealed (nondynamic) object. Versions of the ActionScript compiler before ActionScript 3.0 did not throw an error when access was attempted to a property that was",(0,l.kt)("samp",null,"undefined"),". However ActionScript 3.0 throws the ReferenceError exception in this condition.")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Exceptions for undefined variables point to potential bugs, helping you improve software quality. However, if you are not used to having to initialize your variables, this new ActionScript behavior requires some changes in your coding habits."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"SecurityError")),(0,l.kt)("td",null,(0,l.kt)("p",null,"The SecurityError exception is thrown when a security violation takes place and access is denied.")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Some examples of security errors include the following:"),(0,l.kt)("ul",{class:"incremental"},(0,l.kt)("li",null,(0,l.kt)("p",null,"An unauthorized property access or method call is made across a security sandbox boundary.")),(0,l.kt)("li",null,(0,l.kt)("p",null,"An attempt was made to access a URL not permitted by the security sandbox.")),(0,l.kt)("li",null,(0,l.kt)("p",null,"A socket connection was attempted to a port but the necessary socket policy file wasn't present.")),(0,l.kt)("li",null,(0,l.kt)("p",null,"An attempt was made to access the user's camera or microphone, and the user denide the access to the device."))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"SyntaxError")),(0,l.kt)("td",null,(0,l.kt)("p",null,"A SyntaxError exception is thrown when a parsing error occurs in your ActionScript code.")),(0,l.kt)("td",null,(0,l.kt)("p",null,"A SyntaxError can be thrown under the following circumstances:"),(0,l.kt)("ul",{class:"incremental"},(0,l.kt)("li",null,(0,l.kt)("p",null,"ActionScript throws SyntaxError exceptions when the RegExp class parses an invalid regular expression.")),(0,l.kt)("li",null,(0,l.kt)("p",null,"ActionScript throws SyntaxError exceptions when the XMLDocument class parses invalid XML."))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"TypeError")),(0,l.kt)("td",null,(0,l.kt)("p",null,"The TypeError exception is thrown when the actual type of an operand is different from the expected type.")),(0,l.kt)("td",null,(0,l.kt)("p",null,"A TypeError can be thrown under the following circumstances:"),(0,l.kt)("ul",{class:"incremental"},(0,l.kt)("li",null,(0,l.kt)("p",null,"An actual parameter of a function or method could not be coerced to the formal parameter type.")),(0,l.kt)("li",null,(0,l.kt)("p",null,"A value is assigned to a variable and cannot be coerced to the variable's type.")),(0,l.kt)("li",null,(0,l.kt)("p",null,"The right side of the",(0,l.kt)("samp",null,"is")," or",(0,l.kt)("samp",null,"instanceof"),"operator is not a valid type.")),(0,l.kt)("li",null,(0,l.kt)("p",null,"The",(0,l.kt)("samp",null,"super")," keyword is used illegally.")),(0,l.kt)("li",null,(0,l.kt)("p",null,"A property lookup results in more than one binding, and is therefore ambiguous.")),(0,l.kt)("li",null,(0,l.kt)("p",null,'A method is called on an incompatible object. For example, a TypeError exception is thrown if a method in the RegExp class is "grafted" onto a generic object and then called.'))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"URIError")),(0,l.kt)("td",null,(0,l.kt)("p",null,"The URIError exception is thrown when one of the global URI handling functions is used in a way that is incompatible with its definition.")),(0,l.kt)("td",null,(0,l.kt)("p",null,"A URIError can be thrown under the following circumstances:"),(0,l.kt)("p",null,"An invalid URI is specified for a Flash Player API function that expects a valid URI, such as",(0,l.kt)("samp",null,"Socket.connect()"),"."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"VerifyError")),(0,l.kt)("td",null,(0,l.kt)("p",null,"A VerifyError exception is thrown when a malformed or corrupted SWF file is encountered.")),(0,l.kt)("td",null,(0,l.kt)("p",null,"When a SWF file loads another SWF file, the parent SWF file can catch a VerifyError generated by the loaded SWF file."))))),(0,l.kt)("h2",{id:"flasherror-package-error-classes"},"flash.error package Error classes"),(0,l.kt)("p",null,"The flash.error package contains Error classes that are considered part of the\nFlash runtime API. In contrast to the Error classes described, the flash.error\npackage communicates errors events that are specific to Flash runtimes (such as\nFlash Player and Adobe AIR)."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,(0,l.kt)("p",null,"Class name")),(0,l.kt)("th",null,(0,l.kt)("p",null,"Description")),(0,l.kt)("th",null,(0,l.kt)("p",null,"Notes")))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"EOFError")),(0,l.kt)("td",null,(0,l.kt)("p",null,"An EOFError exception is thrown when you attempt to read past the end of the available data.")),(0,l.kt)("td",null,(0,l.kt)("p",null,"For example, an EOFError is thrown when one of the read methods in the IDataInput interface is called and there is insufficient data to satisfy the read request."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"IllegalOperationError")),(0,l.kt)("td",null,(0,l.kt)("p",null,"An IllegalOperationError exception is thrown when a method is not implemented or the implementation doesn't cover the current usage.")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Examples of illegal operation error exceptions include the following:"),(0,l.kt)("ul",{class:"incremental"},(0,l.kt)("li",null,(0,l.kt)("p",null,"A base class, such as DisplayObjectContainer, provides more functionality than the Stage can support. For example, if you attempt to get or set a mask on the Stage (using",(0,l.kt)("samp",null,"stage.mask"),'), the Flash runtime throws an IllegalOperationError with the message "The Stage class does not implement this property or method."')),(0,l.kt)("li",null,(0,l.kt)("p",null,"A subclass inherits a method it does not require and does not want to support.")),(0,l.kt)("li",null,(0,l.kt)("p",null,"Certain accessibility methods are called when Flash Player is compiled without accessibility support.")),(0,l.kt)("li",null,(0,l.kt)("p",null,"Authoring-only features are called from a run-time version of Flash Player.")),(0,l.kt)("li",null,(0,l.kt)("p",null,"You attempt to set the name of an object placed on the timeline."))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"IOError")),(0,l.kt)("td",null,(0,l.kt)("p",null,"An IOError exception is thrown when some type of I/O exception occurs.")),(0,l.kt)("td",null,(0,l.kt)("p",null,"You get this error, for example, when a read-write operation is attempted on a socket that is not connected or that has become disconnected."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"MemoryError")),(0,l.kt)("td",null,(0,l.kt)("p",null,"A MemoryError exception is thrown when a memory allocation request fails.")),(0,l.kt)("td",null,(0,l.kt)("p",null,"By default, ActionScript Virtual Machine 2 does not impose a limit on how much memory an ActionScript program allocates. On a desktop system, memory allocation failures are infrequent. You see an error thrown when the system is unable to allocate the memory required for an operation. So, on a desktop system, this exception is rare unless an allocation request is extremely large; for example, a request for 3 billion bytes is impossible because a 32-bit Microsoft\xae Windows\xae program can access only 2 GB of address space."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"ScriptTimeoutError")),(0,l.kt)("td",null,(0,l.kt)("p",null,"A ScriptTimeoutError exception is thrown when a script timeout interval of 15 seconds is reached. By catching a ScriptTimeoutError exception, you can handle the script timeout more gracefully. If there is no exception handler, the uncaught exception handler displays a dialog box with an error message.")),(0,l.kt)("td",null,(0,l.kt)("p",null,"To prevent a malicious developer from catching the exception and staying in an infinite loop, only the first ScriptTimeoutError exception thrown in the course of a particular script can be caught. A subsequent ScriptTimeoutError exception cannot be caught by your code and immediately goes to the uncaught exception handler."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"StackOverflowError")),(0,l.kt)("td",null,(0,l.kt)("p",null,"The StackOverflowError exception is thrown when the stack available to the script has been exhausted.")),(0,l.kt)("td",null,(0,l.kt)("p",null,"A StackOverflowError exception might indicate that infinite recursion has occurred."))))))}d.isMDXComponent=!0}}]);