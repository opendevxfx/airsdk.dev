"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[52468],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(t),h=a,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||i;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},72822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(87462),a=(t(67294),t(3905));const i={sidebar_position:8},o="Handling file drops in non-application HTML sandboxes",l={unversionedId:"development/user-interaction/drag-and-drop-in-air/handling-file-drops-in-non-application-html-sandboxes",id:"development/user-interaction/drag-and-drop-in-air/handling-file-drops-in-non-application-html-sandboxes",title:"Handling file drops in non-application HTML sandboxes",description:"Non-application content cannot access the File objects that result when files",source:"@site/docs/development/user-interaction/drag-and-drop-in-air/handling-file-drops-in-non-application-html-sandboxes.md",sourceDirName:"development/user-interaction/drag-and-drop-in-air",slug:"/development/user-interaction/drag-and-drop-in-air/handling-file-drops-in-non-application-html-sandboxes",permalink:"/docs/development/user-interaction/drag-and-drop-in-air/handling-file-drops-in-non-application-html-sandboxes",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/user-interaction/drag-and-drop-in-air/handling-file-drops-in-non-application-html-sandboxes.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"mainSidebar",previous:{title:"Example: Overriding the default HTML drag-in behavior",permalink:"/docs/development/user-interaction/drag-and-drop-in-air/example-overriding-the-default-html-drag-in-behavior"},next:{title:"Dropping file promises",permalink:"/docs/development/user-interaction/drag-and-drop-in-air/dropping-file-promises/"}},p={},d=[],s={toc:d},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"handling-file-drops-in-non-application-html-sandboxes"},"Handling file drops in non-application HTML sandboxes"),(0,a.kt)("p",null,"Non-application content cannot access the File objects that result when files\nare dragged into an AIR application. Nor is it possible to pass one of these\nFile objects to application content through a sandbox bridge. (The object\nproperties must be accessed during serialization.) However, you can still drop\nfiles in your application by listening for the AIR nativeDragDrop events on the\nHTMLLoader object."),(0,a.kt)("p",null,"Normally, if a user drops a file into a frame that hosts non-application\ncontent, the drop event does not propagate from the child to the parent.\nHowever, since the events dispatched by the HTMLLoader (which is the container\nfor all HTML content in an AIR application) are not part of the HTML event flow,\nyou can still receive the drop event in application content."),(0,a.kt)("p",null,"To receive the event for a file drop, the parent document adds an event listener\nto the HTMLLoader object using the reference provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"window.htmlLoader"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'window.htmlLoader.addEventListener("nativeDragDrop",function(event) {\n    var filelist = event.clipboard.getData(air.ClipboardFormats.FILE_LIST_FORMAT);\n    air.trace(filelist[0].url);\n});\n')),(0,a.kt)("p",null,"The following example uses a parent document that loads a child page into a\nremote sandbox (http://localhost/). The parent listens for the ",(0,a.kt)("inlineCode",{parentName:"p"},"nativeDragDrop"),"\nevent on the HTMLLoader object and traces out the file url."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<html>\n<head>\n    <title>Drag-and-drop in a remote sandbox</title>\n    <script language="javascript" type="text/javascript" src="AIRAliases.js"><\/script>\n    <script language="javascript">\n    window.htmlLoader.addEventListener("nativeDragDrop",function(event){\n        var filelist = event.clipboard.getData(air.ClipboardFormats.FILE_LIST_FORMAT);\n        air.trace(filelist[0].url);\n    });\n    <\/script>\n</head>\n<body>\n    <iframe src="child.html"\n            sandboxRoot="http://localhost/"\n            documentRoot="app:/"\n            frameBorder="0"  width="100%" height="100%">\n    </iframe>\n</body>\n</html>\n')),(0,a.kt)("p",null,"The child document must present a valid drop target by calling the Event object\n",(0,a.kt)("inlineCode",{parentName:"p"},"preventDefault()")," method in the HTML ",(0,a.kt)("inlineCode",{parentName:"p"},"dragenter")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"dragover")," event handlers.\nOtherwise, the drop event can never occur."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<html>\n<head>\n    <title>Drag and drop target</title>\n    <script language="javascript" type="text/javascript">\n        function preventDefault(event){\n            event.preventDefault();\n        }\n    <\/script>\n</head>\n<body ondragenter="preventDefault(event)" ondragover="preventDefault(event)">\n    <div>\n        <h1>Drop Files Here</h1>\n    </div>\n</body>\n</html>\n')))}u.isMDXComponent=!0}}]);