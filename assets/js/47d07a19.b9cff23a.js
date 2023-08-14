"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[15947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),h=i,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||o;return n?a.createElement(u,r(r({ref:t},s),{},{components:n})):a.createElement(u,r({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:i,r[1]=c;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},55833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={},r="Making ActionScript objects available to JavaScript",c={unversionedId:"development/html-content-in-air/programming-html-and-javascript-in-air/making-actionscript-objects-available-to-javascript",id:"development/html-content-in-air/programming-html-and-javascript-in-air/making-actionscript-objects-available-to-javascript",title:"Making ActionScript objects available to JavaScript",description:"JavaScript in the HTML page loaded by an HTMLLoader object can call the classes,",source:"@site/docs/development/html-content-in-air/programming-html-and-javascript-in-air/making-actionscript-objects-available-to-javascript.md",sourceDirName:"development/html-content-in-air/programming-html-and-javascript-in-air",slug:"/development/html-content-in-air/programming-html-and-javascript-in-air/making-actionscript-objects-available-to-javascript",permalink:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/making-actionscript-objects-available-to-javascript",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/html-content-in-air/programming-html-and-javascript-in-air/making-actionscript-objects-available-to-javascript.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Embedding SWF content in HTML",permalink:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/embedding-swf-content-in-html"},next:{title:"Manipulating an HTML stylesheet from ActionScript",permalink:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/manipulating-an-html-stylesheet-from-actionscript"}},l={},p=[{value:"A basic example of accessing JavaScript objects from ActionScript",id:"a-basic-example-of-accessing-javascript-objects-from-actionscript",level:2},{value:"Making class definitions available to JavaScript",id:"making-class-definitions-available-to-javascript",level:2},{value:"Removing event listeners",id:"removing-event-listeners",level:2}],s={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"making-actionscript-objects-available-to-javascript"},"Making ActionScript objects available to JavaScript"),(0,i.kt)("p",null,"JavaScript in the HTML page loaded by an HTMLLoader object can call the classes,\nobjects, and functions defined in the ActionScript execution context using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"window.runtime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"window.htmlLoader"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"window.nativeWindow")," properties of\nthe HTML page. You can also make ActionScript objects and functions available to\nJavaScript code by creating references to them within the JavaScript execution\ncontext."),(0,i.kt)("h2",{id:"a-basic-example-of-accessing-javascript-objects-from-actionscript"},"A basic example of accessing JavaScript objects from ActionScript"),(0,i.kt)("p",null,"The following example illustrates how to add properties referencing ActionScript\nobjects to the global window object of an HTML page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'var html:HTMLLoader = new HTMLLoader();\nvar foo:String = "Hello from container SWF."\nfunction helloFromJS(message:String):void {\n    trace("JavaScript says:", message);\n}\nvar urlReq:URLRequest = new URLRequest("test.html");\nhtml.addEventListener(Event.COMPLETE, loaded);\nhtml.load(urlReq);\n\nfunction loaded(e:Event):void{\n    html.window.foo = foo;\n    html.window.helloFromJS = helloFromJS;\n}\n')),(0,i.kt)("p",null,"The HTML content (in a file named test.html) loaded into the HTMLLoader object\nin the previous example can access the ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," property and the ",(0,i.kt)("inlineCode",{parentName:"p"},"helloFromJS()"),"\nmethod defined in the parent SWF file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<html>\n<script>\n    function alertFoo() {\n        alert(foo);\n    }\n<\/script>\n<body>\n    <button onClick="alertFoo()">\n        What is foo?\n    </button>\n    <p><button onClick="helloFromJS(\'Hi.\')">\n        Call helloFromJS() function.\n    </button></p>\n</body>\n</html>\n')),(0,i.kt)("p",null,"When accessing the JavaScript context of a loading document, you can use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"htmlDOMInitialize")," event to create objects early enough in the page\nconstruction sequence that any scripts defined in the page can access them. If\nyou wait for the ",(0,i.kt)("inlineCode",{parentName:"p"},"complete")," event, only scripts in the page that run after the\npage ",(0,i.kt)("inlineCode",{parentName:"p"},"load")," event can access the added objects."),(0,i.kt)("h2",{id:"making-class-definitions-available-to-javascript"},"Making class definitions available to JavaScript"),(0,i.kt)("p",null,"To make the ActionScript classes of your application available in JavaScript,\nyou can assign the loaded HTML content to the application domain containing the\nclass definitions. The application domain of the JavaScript execution context\ncan be set with the ",(0,i.kt)("inlineCode",{parentName:"p"},"runtimeApplicationDomain")," property of the HTMLLoader\nobject. To set the application domain to the primary application domain, for\nexample, set ",(0,i.kt)("inlineCode",{parentName:"p"},"runtimeApplicationDomain")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationDomain.currentDomain"),", as\nshown in the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"html.runtimeApplicationDomain = ApplicationDomain.currentDomain;\n")),(0,i.kt)("p",null,"Once the ",(0,i.kt)("inlineCode",{parentName:"p"},"runtimeApplicationDomain")," property is set, the JavaScript context\nshares class definitions with the assigned domain. To create an instance of a\ncustom class in JavaScript, reference the class definition through the\n",(0,i.kt)("inlineCode",{parentName:"p"},"window.runtime")," property and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," operator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var customClassObject = new window.runtime.CustomClass();\n")),(0,i.kt)("p",null,"The HTML content must be from a compatible security domain. If the HTML content\nis from a different security domain than that of the application domain you\nassign, the page uses a default application domain instead. For example, if you\nload a remote page from the Internet, you could not assign\nApplicationDomain.currentDomain as the application domain of the page."),(0,i.kt)("h2",{id:"removing-event-listeners"},"Removing event listeners"),(0,i.kt)("p",null,'When you add JavaScript event listeners to objects outside the current page,\nincluding runtime objects, objects in loaded SWF content, and even JavaScript\nobjects running in other pages, you should always remove those event listeners\nwhen the page unloads. Otherwise, the event listener dispatches the event to a\nhandler function that no longer exists. If this happens, you will see the\nfollowing error message: "The application attempted to reference a JavaScript\nobject in an HTML page that is no longer loaded." Removing unneeded event\nlisteners also lets AIR reclaim the associated memory. For more information, see\n',(0,i.kt)("a",{parentName:"p",href:"/docs/development/html-content-in-air/handling-html-related-events-in-air#removing-event-listeners-in-html-pages-that-navigate"},"Removing event listeners in HTML pages that navigate"),"."))}d.isMDXComponent=!0}}]);