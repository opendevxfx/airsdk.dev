"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[40007],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?i.createElement(f,r(r({ref:t},s),{},{components:n})):i.createElement(f,r({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const l={},r="Loading an external SWF file",o={unversionedId:"development/display/working-with-movie-clips/loading-an-external-swf-file",id:"development/display/working-with-movie-clips/loading-an-external-swf-file",title:"Loading an external SWF file",description:"In ActionScript 3.0, SWF files are loaded using the Loader class. To load an",source:"@site/docs/development/display/working-with-movie-clips/loading-an-external-swf-file.md",sourceDirName:"development/display/working-with-movie-clips",slug:"/development/display/working-with-movie-clips/loading-an-external-swf-file",permalink:"/docs/development/display/working-with-movie-clips/loading-an-external-swf-file",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/working-with-movie-clips/loading-an-external-swf-file.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Creating MovieClip objects with ActionScript",permalink:"/docs/development/display/working-with-movie-clips/creating-movieclip-objects-with-actionscript"},next:{title:"Movie clip example: RuntimeAssetsExplorer",permalink:"/docs/development/display/working-with-movie-clips/movie-clip-example-runtime-assets-explorer"}},c={},p=[{value:"Considerations for loading an older SWF file",id:"considerations-for-loading-an-older-swf-file",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"loading-an-external-swf-file"},"Loading an external SWF file"),(0,a.kt)("p",null,"In ActionScript 3.0, SWF files are loaded using the Loader class. To load an\nexternal SWF file, your ActionScript needs to do four things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new URLRequest object with the url of the file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new Loader object.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Call the Loader object's ",(0,a.kt)("inlineCode",{parentName:"p"},"load()")," method, passing the URLRequest instance as\na parameter.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Call the ",(0,a.kt)("inlineCode",{parentName:"p"},"addChild()")," method on a display object container (such as the main\ntimeline of a Flash document) to add the Loader instance to the display\nlist."))),(0,a.kt)("p",null,"Ultimately, the code looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'var request:URLRequest = new URLRequest("http://www.[yourdomain].com/externalSwf.swf");\nvar loader:Loader = new Loader()\nloader.load(request);\naddChild(loader);\n')),(0,a.kt)("p",null,"This same code can be used to load an external image file such as a JPEG, GIF,\nor PNG image, by specifying the image file's url rather than a SWF file's url. A\nSWF file, unlike an image file, may contain ActionScript. Thus, although the\nprocess of loading a SWF file may be identical to loading an image, when loading\nan external SWF file both the SWF file doing the loading and the SWF file being\nloaded must reside in the same security sandbox if Flash Player or AIR is\nplaying the SWF and you plan to use ActionScript to communicate in any way to\nthe external SWF file. Additionally, if the external SWF file contains classes\nthat share the same namespace as classes in the loading SWF file, you may need\nto create a new application domain for the loaded SWF file in order to avoid\nnamespace conflicts. For more information on security and application domain\nconsiderations, see\n",(0,a.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/working-with-application-domains"},"Working with application domains"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"/docs/development/security/loading-content"},"Loading content"),"."),(0,a.kt)("p",null,"When the external SWF file is successfully loaded, it can be accessed through\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"Loader.content")," property. If the external SWF file is published for\nActionScript 3.0, this will be either a movie clip or a sprite, depending on\nwhich class it extends."),(0,a.kt)("p",null,"There are a few differences for loading a SWF file in Adobe AIR for iOS versus\nother platforms. For more information, see\n",(0,a.kt)("a",{parentName:"p",href:"/docs/development/display/display-programming/loading-display-content-dynamically#loading-swf-files-in-air-for-ios"},"Loading SWF files in AIR for iOS"),"."),(0,a.kt)("h2",{id:"considerations-for-loading-an-older-swf-file"},"Considerations for loading an older SWF file"),(0,a.kt)("p",null,"If the external SWF file has been published with an older version of\nActionScript, there are important limitations to consider. Unlike an\nActionScript 3.0 SWF file that runs in AVM2 (ActionScript Virtual Machine 2), a\nSWF file published for ActionScript 1.0 or 2.0 runs in AVM1 (ActionScript\nVirtual Machine 1)."),(0,a.kt)("p",null,"There are important differences when loading an ActionScript 1.0 or 2.0 SWF file\ninto an ActionScript 3.0 SWF file (compared to loading an ActionScript 3.0 SWF\nfile). Flash Player provides full backward compatibility with previously\npublished content. Any content that runs in previous versions of Flash Player\nruns in Flash Player versions that support ActionScript 3.0. However, the\nfollowing limitations apply:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ActionScript 3.0 code can load a SWF file written in ActionScript 1.0 or 2.0.\nWhen an ActionScript 1.0 or 2.0 SWF file is successfully loaded, the loaded\nobject (the ",(0,a.kt)("inlineCode",{parentName:"p"},"Loader.content")," property) is an AVM1Movie object. An AVM1Movie\ninstance is not the same as a MovieClip instance. It is a display object, but\nunlike a movie clip, it does not include timeline-related methods or\nproperties. The parent AVM2 SWF file cannot access the properties, methods, or\nobjects of the loaded AVM1Movie object.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SWF files written in ActionScript 1.0 or 2.0 cannot load SWF files written in\nActionScript 3.0. This means that SWF files authored in Flash 8 or Flex\nBuilder 1.5 or earlier versions cannot load ActionScript 3.0 SWF files."),(0,a.kt)("p",{parentName:"li"},"The only exception to this rule is that an ActionScript 2.0 SWF file can\nreplace itself with an ActionScript 3.0 SWF file, as long as the ActionScript\n2.0 SWF file hasn't previously loaded anything into any of its levels. An\nActionScript 2.0 SWF file can do this through a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"loadMovieNum()"),",\npassing a value of 0 to the ",(0,a.kt)("inlineCode",{parentName:"p"},"level")," parameter.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In general, SWF files written in ActionScript 1.0 or 2.0 must be migrated if\nthey are to work together with SWF files written in ActionScript 3.0. For\nexample, suppose you created a media player using ActionScript 2.0. The media\nplayer loads various content that was also created using ActionScript 2.0. You\ncannot create new content in ActionScript 3.0 and load it in the media player.\nYou must migrate the video player to ActionScript 3.0."),(0,a.kt)("p",{parentName:"li"},"If, however, you create a media player in ActionScript 3.0, that media player\ncan perform simple loads of your ActionScript 2.0 content."))),(0,a.kt)("p",null,"The following tables summarize the limitations of previous versions of Flash\nPlayer in relation to loading newer content and executing code, as well as the\nlimitations for cross-scripting between SWF files written in different versions\nof ActionScript."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Supported functionality"),(0,a.kt)("th",{parentName:"tr",align:null},"Flash Player 7"),(0,a.kt)("th",{parentName:"tr",align:null},"Flash Player 8"),(0,a.kt)("th",{parentName:"tr",align:null},"Flash Player 9 and 10"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Can load SWFs published for"),(0,a.kt)("td",{parentName:"tr",align:null},"7 and earlier"),(0,a.kt)("td",{parentName:"tr",align:null},"8 and earlier"),(0,a.kt)("td",{parentName:"tr",align:null},"9 (or 10) and earlier")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Contains this AVM"),(0,a.kt)("td",{parentName:"tr",align:null},"AVM1"),(0,a.kt)("td",{parentName:"tr",align:null},"AVM1"),(0,a.kt)("td",{parentName:"tr",align:null},"AVM1 and AVM2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Runs SWFs written in ActionScript"),(0,a.kt)("td",{parentName:"tr",align:null},"1.0 and 2.0"),(0,a.kt)("td",{parentName:"tr",align:null},"1.0 and 2.0"),(0,a.kt)("td",{parentName:"tr",align:null},"1.0 and 2.0, and 3.0")))),(0,a.kt)("p",null,'In the following table, "Supported functionality" refers to content running in\nFlash Player 9 or later. Content running in Flash Player 8 or earlier can load,\ndisplay, execute, and cross-script only ActionScript 1.0 and 2.0.'),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("p",null,"Supported functionality")),(0,a.kt)("th",null,(0,a.kt)("p",null,"Content created in ActionScript 1.0 and 2.0")),(0,a.kt)("th",null,(0,a.kt)("p",null,"Content created in ActionScript 3.0")))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("p",null,"Can load content and execute code in content created in")),(0,a.kt)("td",null,(0,a.kt)("p",null,"ActionScript 1.0 and 2.0 only")),(0,a.kt)("td",null,(0,a.kt)("p",null,"ActionScript 1.0 and 2.0, and ActionScript 3.0"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("p",null,"Can cross script content created in")),(0,a.kt)("td",null,(0,a.kt)("p",null,"ActionScript 1.0 and 2.0 only (ActionScript 3.0 through Local Connection)")),(0,a.kt)("td",null,(0,a.kt)("p",null,"ActionScript 1.0 and 2.0 through LocalConnection."),(0,a.kt)("p",null,"ActionScript 3.0"))))))}u.isMDXComponent=!0}}]);