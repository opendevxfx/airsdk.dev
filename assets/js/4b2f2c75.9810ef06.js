"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[98440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},96799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:3},r="HTML security in Adobe AIR",s={unversionedId:"development/security/air-security/html-security-in-adobe-air",id:"development/security/air-security/html-security-in-adobe-air",title:"HTML security in Adobe AIR",description:"This topic describes the AIR HTML security architecture and how to use iframes,",source:"@site/docs/development/security/air-security/html-security-in-adobe-air.md",sourceDirName:"development/security/air-security",slug:"/development/security/air-security/html-security-in-adobe-air",permalink:"/docs/development/security/air-security/html-security-in-adobe-air",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/security/air-security/html-security-in-adobe-air.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mainSidebar",previous:{title:"Installation and updates",permalink:"/docs/development/security/air-security/installation-and-updates"},next:{title:"Scripting between content in different domains",permalink:"/docs/development/security/air-security/scripting-between-content-in-different-domains"}},l={},c=[{value:"Overview on configuring your HTML-based application",id:"overview-on-configuring-your-html-based-application",level:2},{value:"Setting up a parent-child sandbox relationship",id:"setting-up-a-parent-child-sandbox-relationship",level:3},{value:"Setting up a bridge between parent and child frames in different sandboxes or domains",id:"setting-up-a-bridge-between-parent-and-child-frames-in-different-sandboxes-or-domains",level:3},{value:"Code restrictions for content in different sandboxes",id:"code-restrictions-for-content-in-different-sandboxes",level:2},{value:"Restrictions on using the JavaScript eval() function and similar techniques",id:"restrictions-on-using-the-javascript-eval-function-and-similar-techniques",level:3},{value:"Restrictions on access to AIR APIs (for non-application sandboxes)",id:"restrictions-on-access-to-air-apis-for-non-application-sandboxes",level:3},{value:"Restrictions on using XMLHttpRequest calls",id:"restrictions-on-using-xmlhttprequest-calls",level:3},{value:"Restrictions on loading CSS, frame, iframe, and img elements (for content in non-application sandboxes)",id:"restrictions-on-loading-css-frame-iframe-and-img-elements-for-content-in-non-application-sandboxes",level:3},{value:"Restrictions on calling the JavaScript window.open() method",id:"restrictions-on-calling-the-javascript-windowopen-method",level:3},{value:"Errors when calling restricted code",id:"errors-when-calling-restricted-code",level:3},{value:"Sandbox protection when loading HTML content from a string",id:"sandbox-protection-when-loading-html-content-from-a-string",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"html-security-in-adobe-air"},"HTML security in Adobe AIR"),(0,i.kt)("p",null,"This topic describes the AIR HTML security architecture and how to use iframes,\nframes, and the sandbox bridge to set up HTML-based applications and safely\nintegrate HTML content into SWF-based applications."),(0,i.kt)("p",null,"The runtime enforces rules and provides mechanisms for overcoming possible\nsecurity vulnerabilities in HTML and JavaScript. The same rules are enforced\nwhether your application is primarily written in JavaScript or whether you load\nthe HTML and JavaScript content into a SWF-based application. Content in the\napplication sandbox and the non-application security sandbox have different\nprivileges. When loading content into an iframe or frame, the runtime provides a\nsecure ",(0,i.kt)("em",{parentName:"p"},"sandbox bridge")," mechanism that allows content in the frame or iframe to\ncommunicate securely with content in the application security sandbox."),(0,i.kt)("p",null,"The AIR SDK provides three classes for rendering HTML content."),(0,i.kt)("p",null,"The HTMLLoader class provides close integration between JavaScript code and the\nAIR APIs."),(0,i.kt)("p",null,"The StageWebView class is an HTML rendering class and has very limited\nintegration with the host AIR application. Content loaded by the StageWebView\nclass is never placed in the application security sandbox and cannot access data\nor call functions in the host AIR application. On desktop platforms, the\nStageWebView class uses the built-in AIR HTML engine, based on Webkit, which is\nalso used by the HTMLLoader class. On mobile platforms, the StageWebView class\nuses the HTML control provided by the operating system. Thus, on mobile\nplatforms the StageWebView class has the same security considerations and\nvulnerabilities as the system web browser."),(0,i.kt)("p",null,"The TextField class can display strings of HTML text. No JavaScript can be\nexecuted, but the text can include links and externally loaded images."),(0,i.kt)("p",null,"For more information, see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/avoiding-security-related-javascript-errors"},"Avoiding security-related JavaScript errors"),"."),(0,i.kt)("h2",{id:"overview-on-configuring-your-html-based-application"},"Overview on configuring your HTML-based application"),(0,i.kt)("p",null,"Frames and iframes provide a convenient structure for organizing HTML content in\nAIR. Frames provide a means both for maintaining data persistence and for\nworking securely with remote content."),(0,i.kt)("p",null,'Because HTML in AIR retains its normal, page-based organization, the HTML\nenvironment completely refreshes if the top frame of your HTML content\n"navigates" to a different page. You can use frames and iframes to maintain data\npersistence in AIR, much the same as you would for a web application running in\na browser. Define your main application objects in the top frame and they\npersist as long as you don\'t allow the frame to navigate to a new page. Use\nchild frames or iframes to load and display the transient parts of the\napplication. (There are a variety of ways to maintain data persistence that can\nbe used in addition to, or instead of, frames. These include cookies, local\nshared objects, local file storage, the encrypted file store, and local database\nstorage.)'),(0,i.kt)("p",null,"Because HTML in AIR retains its normal, blurred line between executable code and\ndata, AIR puts content in the top frame of the HTML environment into the\napplication sandbox. After the page ",(0,i.kt)("inlineCode",{parentName:"p"},"load")," event, AIR restricts any operations,\nsuch as ",(0,i.kt)("inlineCode",{parentName:"p"},"eval()"),", that can convert a string of text into an executable object.\nThis restriction is enforced even when an application does not load remote\ncontent. To allow HTML content to execute these restricted operations, you must\nuse frames or iframes to place the content into a non-application sandbox.\n(Running content in a sandboxed child frame may be necessary when using some\nJavaScript application frameworks that rely on the ",(0,i.kt)("inlineCode",{parentName:"p"},"eval()")," function.) For a\ncomplete list of the restrictions on JavaScript in the application sandbox, see\n",(0,i.kt)("a",{parentName:"p",href:"#code-restrictions-for-content-in-different-sandboxes"},"Code restrictions for content in different sandboxes"),"."),(0,i.kt)("p",null,"Because HTML in AIR retains its ability to load remote, possibly insecure\ncontent, AIR enforces a same-origin policy that prevents content in one domain\nfrom interacting with content in another. To allow interaction between\napplication content and content in another domain, you can set up a bridge to\nserve as the interface between a parent and a child frame."),(0,i.kt)("h3",{id:"setting-up-a-parent-child-sandbox-relationship"},"Setting up a parent-child sandbox relationship"),(0,i.kt)("p",null,"AIR adds the ",(0,i.kt)("inlineCode",{parentName:"p"},"sandboxRoot")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"documentRoot")," attributes to the HTML frame and\niframe elements. These attributes let you treat application content as if it\ncame from another domain:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sandboxRoot"),(0,i.kt)("td",{parentName:"tr",align:null},"The URL to use for determining the sandbox and domain in which to place the frame content. The ",(0,i.kt)("inlineCode",{parentName:"td"},"file:"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"http:"),", or ",(0,i.kt)("inlineCode",{parentName:"td"},"https:")," URL schemes must be used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"documentRoot"),(0,i.kt)("td",{parentName:"tr",align:null},"The URL from which to load the frame content. The ",(0,i.kt)("inlineCode",{parentName:"td"},"file:"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"app:"),", or ",(0,i.kt)("inlineCode",{parentName:"td"},"app-storage:")," URL schemes must be used.")))),(0,i.kt)("p",null,"The following example maps content installed in the sandbox subdirectory of the\napplication to run in the remote sandbox and the ",(0,i.kt)("a",{parentName:"p",href:"http://www.example.com"},"www.example.com")," domain:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<iframe\n    src="ui.html"\n    sandboxRoot="http://www.example.com/local/"\n    documentRoot="app:/sandbox/">\n</iframe>\n')),(0,i.kt)("h3",{id:"setting-up-a-bridge-between-parent-and-child-frames-in-different-sandboxes-or-domains"},"Setting up a bridge between parent and child frames in different sandboxes or domains"),(0,i.kt)("p",null,"AIR adds the ",(0,i.kt)("inlineCode",{parentName:"p"},"childSandboxBridge")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"parentSandboxBridge")," properties to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"window")," object of any child frame. These properties let you define bridges to\nserve as interfaces between a parent and a child frame. Each bridge goes in one\ndirection:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"childSandboxBridge")," \u2014 The ",(0,i.kt)("inlineCode",{parentName:"p"},"childSandboxBridge")," property allows the child frame\nto expose an interface to content in the parent frame. To expose an interface,\nyou set the ",(0,i.kt)("inlineCode",{parentName:"p"},"childSandbox")," property to a function or object in the child frame.\nYou can then access the object or function from content in the parent frame. The\nfollowing example shows how a script running in a child frame can expose an\nobject containing a function and a property to its parent:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'var interface = {};\ninterface.calculatePrice = function(){\n    return .45 + 1.20;\n}\ninterface.storeID = "abc"\nwindow.childSandboxBridge = interface;\n')),(0,i.kt)("p",null,"If this child content is in an iframe assigned an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of ",(0,i.kt)("inlineCode",{parentName:"p"},'"child"'),", you can\naccess the interface from parent content by reading the ",(0,i.kt)("inlineCode",{parentName:"p"},"childSandboxBridge"),"\nproperty of the frame:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'var childInterface = document.getElementById("child").childSandboxBridge;\nair.trace(childInterface.calculatePrice()); //traces "1.65"\nair.trace(childInterface.storeID)); //traces "abc"\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"parentSandboxBridge")," \u2014 The ",(0,i.kt)("inlineCode",{parentName:"p"},"parentSandboxBridge")," property allows the parent\nframe to expose an interface to content in the child frame. To expose an\ninterface, you set the ",(0,i.kt)("inlineCode",{parentName:"p"},"parentSandbox")," property of the child frame to a function\nor object in the parent frame. You can then access the object or function from\ncontent in the child frame. The following example shows how a script running in\nthe parent frame can expose an object containing a save function to a child:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'var interface = {};\ninterface.save = function(text){\n    var saveFile = air.File("app-storage:/save.txt");\n    //write text to file\n}\ndocument.getElementById("child").parentSandboxBridge = interface;\n')),(0,i.kt)("p",null,"Using this interface, content in the child frame could save text to a file named\nsave.txt. However, it would not have any other access to the file system. In\ngeneral, application content should expose the narrowest possible interface to\nother sandboxes. The child content could call the save function as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'var textToSave = "A string.";\nwindow.parentSandboxBridge.save(textToSave);\n')),(0,i.kt)("p",null,"If child content attempts to set a property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"parentSandboxBridge")," object,\nthe runtime throws a SecurityError exception. If parent content attempts to set\na property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"childSandboxBridge")," object, the runtime throws a\nSecurityError exception."),(0,i.kt)("h2",{id:"code-restrictions-for-content-in-different-sandboxes"},"Code restrictions for content in different sandboxes"),(0,i.kt)("p",null,"As discussed in the introduction to this topic,\n",(0,i.kt)("a",{parentName:"p",href:"#html-security-in-adobe-air"},"HTML security in Adobe AIR"),', the runtime enforces\nrules and provides mechanisms for overcoming possible security vulnerabilities\nin HTML and JavaScript. This topic lists those restrictions. If code attempts to\ncall these restricted APIs, the runtime throws an error with the message "Adobe\nAIR runtime security violation for JavaScript code in the application security\nsandbox."'),(0,i.kt)("p",null,"For more information, see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/avoiding-security-related-javascript-errors"},"Avoiding security-related JavaScript errors"),"."),(0,i.kt)("h3",{id:"restrictions-on-using-the-javascript-eval-function-and-similar-techniques"},"Restrictions on using the JavaScript eval() function and similar techniques"),(0,i.kt)("p",null,"For HTML content in the application security sandbox, there are limitations on\nusing APIs that can dynamically transform strings into executable code after the\ncode is loaded (after the ",(0,i.kt)("inlineCode",{parentName:"p"},"onload")," event of the ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," element has been\ndispatched and the ",(0,i.kt)("inlineCode",{parentName:"p"},"onload")," handler function has finished executing). This is to\nprevent the application from inadvertently injecting (and executing) code from\nnon-application sources (such as potentially insecure network domains)."),(0,i.kt)("p",null,"For example, if your application uses string data from a remote source to write\nto the innerHTML property of a DOM element, the string could include executable\n(JavaScript) code that could perform insecure operations. However, while the\ncontent is loading, there is no risk of inserting remote strings into the DOM."),(0,i.kt)("p",null,"One restriction is in the use of the JavaScript ",(0,i.kt)("inlineCode",{parentName:"p"},"eval()")," function. Once code in\nthe application sandbox is loaded and after processing of the onload event\nhandler, you can only use the ",(0,i.kt)("inlineCode",{parentName:"p"},"eval()")," function in limited ways. The following\nrules apply to the use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"eval()")," function ",(0,i.kt)("em",{parentName:"p"},"after")," code is loaded from the\napplication security sandbox:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Expressions involving literals are allowed. For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'eval("null");\neval("3 + .14");\neval("\'foo\'");\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Object literals are allowed, as in the following:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"{ prop1: val1, prop2: val2 }\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Object literal setter/getters are ",(0,i.kt)("em",{parentName:"p"},"prohibited")," , as in the following:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"{ get prop1() { ... }, set prop1(v) { ... } }\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Array literals are allowed, as in the following:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"[ val1, val2, val3 ]\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Expressions involving property reads are ",(0,i.kt)("em",{parentName:"p"},"prohibited")," , as in the following:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"a.b.c\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Function invocation is ",(0,i.kt)("em",{parentName:"p"},"prohibited."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Function definitions are ",(0,i.kt)("em",{parentName:"p"},"prohibited."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Setting any property is ",(0,i.kt)("em",{parentName:"p"},"prohibited."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Function literals are ",(0,i.kt)("em",{parentName:"p"},"prohibited.")))),(0,i.kt)("p",null,"However, while the code is loading, before the ",(0,i.kt)("inlineCode",{parentName:"p"},"onload")," event, and during\nexecution the ",(0,i.kt)("inlineCode",{parentName:"p"},"onload")," event handler function, these restrictions do not apply\nto content in the application security sandbox."),(0,i.kt)("p",null,"For example, after code is loaded, the following code results in the runtime\nthrowing an exception:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'eval("alert(44)");\neval("myFunction(44)");\neval("NativeApplication.applicationID");\n')),(0,i.kt)("p",null,"Dynamically generated code, such as that which is made when calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"eval()"),"\nfunction, would pose a security risk if allowed within the application sandbox.\nFor example, an application may inadvertently execute a string loaded from a\nnetwork domain, and that string may contain malicious code. For example, this\ncould be code to delete or alter files on the user's computer. Or it could be\ncode that reports back the contents of a local file to an untrusted network\ndomain."),(0,i.kt)("p",null,"Ways to generate dynamic code are the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"eval()")," function.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"innerHTML")," properties or DOM functions to insert script tags that load\na script outside of the application directory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"innerHTML")," properties or DOM functions to insert script tags that have\ninline code (rather than loading a script via the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," attribute).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," attribute for a ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," tags to load a JavaScript file that\nis outside of the application directory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"javascript")," URL scheme (as in ",(0,i.kt)("inlineCode",{parentName:"p"},"href=\"javascript:alert('Test')\""),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"setInterval()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"setTimout()")," function where the first parameter\n(defining the function to run asynchronously) is a string (to be evaluated)\nrather than a function name (as in ",(0,i.kt)("inlineCode",{parentName:"p"},"setTimeout('x = 4', 1000)"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Calling ",(0,i.kt)("inlineCode",{parentName:"p"},"document.write()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"document.writeln()"),"."))),(0,i.kt)("p",null,"Code in the application security sandbox can only use these methods while\ncontent is loading."),(0,i.kt)("p",null,"These restrictions do ",(0,i.kt)("em",{parentName:"p"},"not")," prevent using ",(0,i.kt)("inlineCode",{parentName:"p"},"eval()")," with JSON object literals.\nThis lets your application content work with the JSON JavaScript library.\nHowever, you are restricted from using overloaded JSON code (with event\nhandlers)."),(0,i.kt)("p",null,"For other Ajax frameworks and JavaScript code libraries, check to see if the\ncode in the framework or library works within these restrictions on dynamically\ngenerated code. If they do not, include any content that uses the framework or\nlibrary in a non-application security sandbox. For details, see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/security/security-sandboxes#restrictions-for-javascript-inside-air"},"Restrictions for JavaScript inside AIR"),"\nand\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/security/air-security/working-securely-with-untrusted-content#scripting-between-application-and-non-application-content"},"Scripting between application and non-application content"),".\nAdobe maintains a list of Ajax frameworks known to support the application\nsecurity sandbox, at\n",(0,i.kt)("a",{parentName:"p",href:"https://www.adobe.com/products/air/develop/ajax/features/"},"https://www.adobe.com/products/air/develop/ajax/features/"),"."),(0,i.kt)("p",null,"Unlike content in the application security sandbox, JavaScript content in a\nnon-application security sandbox ",(0,i.kt)("em",{parentName:"p"},"can")," call the ",(0,i.kt)("inlineCode",{parentName:"p"},"eval()")," function to execute\ndynamically generated code at any time."),(0,i.kt)("h3",{id:"restrictions-on-access-to-air-apis-for-non-application-sandboxes"},"Restrictions on access to AIR APIs (for non-application sandboxes)"),(0,i.kt)("p",null,"JavaScript code in a non-application sandbox does not have access to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"window.runtime")," object, and as such this code cannot execute AIR APIs. If\ncontent in a non-application security sandbox calls the following code, the\napplication throws a TypeError exception:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"try {\n    window.runtime.flash.system.NativeApplication.nativeApplication.exit();\n}\ncatch (e)\n{\n    alert(e);\n}\n")),(0,i.kt)("p",null,"The exception type is TypeError (undefined value), because content in the\nnon-application sandbox does not recognize the ",(0,i.kt)("inlineCode",{parentName:"p"},"window.runtime")," object, so it is\nseen as an undefined value."),(0,i.kt)("p",null,"You can expose runtime functionality to content in a non-application sandbox by\nusing a script bridge. For details, see and\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/security/air-security/working-securely-with-untrusted-content#scripting-between-application-and-non-application-content"},"Scripting between application and non-application content"),"."),(0,i.kt)("h3",{id:"restrictions-on-using-xmlhttprequest-calls"},"Restrictions on using XMLHttpRequest calls"),(0,i.kt)("p",null,"HTML content in the application security sandbox cannot use synchronous\nXMLHttpRequest methods to load data from outside of the application sandbox\nwhile the HTML content is loading and during ",(0,i.kt)("inlineCode",{parentName:"p"},"onLoad")," event."),(0,i.kt)("p",null,"By default, HTML content in non-application security sandboxes are not allowed\nto use the JavaScript XMLHttpRequest object to load data from domains other than\nthe domain calling the request. A ",(0,i.kt)("inlineCode",{parentName:"p"},"frame")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"iframe")," tag can include an\n",(0,i.kt)("inlineCode",{parentName:"p"},"allowcrosscomainxhr")," attribute. Setting this attribute to any non-null value\nallows the content in the frame or iframe to use the JavaScript XMLHttpRequest\nobject to load data from domains other than the domain of the code calling the\nrequest:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<iframe id="UI"\n    src="http://example.com/ui.html"\n    sandboxRoot="http://example.com/"\n    allowcrossDomainxhr="true"\n    documentRoot="app:/">\n</iframe>\n')),(0,i.kt)("p",null,"For more information, see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/security/air-security/scripting-between-content-in-different-domains"},"Scripting between content in different domains"),"."),(0,i.kt)("h3",{id:"restrictions-on-loading-css-frame-iframe-and-img-elements-for-content-in-non-application-sandboxes"},"Restrictions on loading CSS, frame, iframe, and img elements (for content in non-application sandboxes)"),(0,i.kt)("p",null,"HTML content in remote (network) security sandboxes can only load CSS, ",(0,i.kt)("inlineCode",{parentName:"p"},"frame"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"iframe"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"img")," content from remote sandboxes (from network URLs)."),(0,i.kt)("p",null,"HTML content in local-with-filesystem, local-with-networking, or local-trusted\nsandboxes can only load CSS, frame, iframe, and ",(0,i.kt)("inlineCode",{parentName:"p"},"img")," content from local\nsandboxes (not from application or remote sandboxes)."),(0,i.kt)("h3",{id:"restrictions-on-calling-the-javascript-windowopen-method"},"Restrictions on calling the JavaScript window.open() method"),(0,i.kt)("p",null,"If a window that is created via a call to the JavaScript ",(0,i.kt)("inlineCode",{parentName:"p"},"window.open()")," method\ndisplays content from a non-application security sandbox, the window's title\nbegins with the title of the main (launching) window, followed by a colon\ncharacter. You cannot use code to move that portion of the title of the window\noff screen."),(0,i.kt)("p",null,"Content in non-application security sandboxes can only successfully call the\nJavaScript ",(0,i.kt)("inlineCode",{parentName:"p"},"window.open()")," method in response to an event triggered by a user\nmouse or keyboard interaction. This prevents non-application content from\ncreating windows that might be used deceptively (for example, for phishing\nattacks). Also, the event handler for the mouse or keyboard event cannot set the\n",(0,i.kt)("inlineCode",{parentName:"p"},"window.open()")," method to execute after a delay (for example by calling the\n",(0,i.kt)("inlineCode",{parentName:"p"},"setTimeout()")," function)."),(0,i.kt)("p",null,"Content in remote (network) sandboxes can only use the ",(0,i.kt)("inlineCode",{parentName:"p"},"window.open()")," method to\nopen content in remote network sandboxes. It cannot use the ",(0,i.kt)("inlineCode",{parentName:"p"},"window.open()"),"\nmethod to open content from the application or local sandboxes."),(0,i.kt)("p",null,"Content in the local-with-filesystem, local-with-networking, or local-trusted\nsandboxes (see ",(0,i.kt)("a",{parentName:"p",href:"/docs/development/security/security-sandboxes"},"Security sandboxes"),") can only use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"window.open()")," method to open content in local sandboxes. It cannot use\n",(0,i.kt)("inlineCode",{parentName:"p"},"window.open()")," to open content from the application or remote sandboxes."),(0,i.kt)("h3",{id:"errors-when-calling-restricted-code"},"Errors when calling restricted code"),(0,i.kt)("p",null,'If you call code that is restricted from use in a sandbox due to these security\nrestrictions, the runtime dispatches a JavaScript error: "Adobe AIR runtime\nsecurity violation for JavaScript code in the application security sandbox."'),(0,i.kt)("p",null,"For more information, see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/avoiding-security-related-javascript-errors"},"Avoiding security-related JavaScript errors"),"."),(0,i.kt)("h2",{id:"sandbox-protection-when-loading-html-content-from-a-string"},"Sandbox protection when loading HTML content from a string"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"loadString()")," method of the HTMLLoader class lets you create HTML content\nat run time. However, data that you use as the HTML content can be corrupted if\nthe data is loaded from an insecure Internet source. For this reason, by\ndefault, HTML created using the ",(0,i.kt)("inlineCode",{parentName:"p"},"loadString()")," method is not placed in the\napplication sandbox and it has no access to AIR APIs. However, you can set the\n",(0,i.kt)("inlineCode",{parentName:"p"},"placeLoadStringContentInApplicationSandbox")," property of an HTMLLoader object to\ntrue to place HTML created using the ",(0,i.kt)("inlineCode",{parentName:"p"},"loadString()")," method into the application\nsandbox. For more information, see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/about-the-htmlloader-class#loading-html-content-from-a-string"},"Loading HTML content from a string"),"."))}m.isMDXComponent=!0}}]);