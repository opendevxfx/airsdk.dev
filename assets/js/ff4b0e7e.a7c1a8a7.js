"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[81767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=i,h=s["".concat(p,".").concat(m)]||s[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={title:"AIR Debug Launcher (adl)",sidebar_position:2},l=void 0,o={unversionedId:"building/air-debug-launcher",id:"building/air-debug-launcher",title:"AIR Debug Launcher (adl)",description:"Use the AIR Debug Launcher (ADL) to run both SWF-based and HTML-based applications during development. Using ADL, you can run an application without first packaging and installing it. By default, ADL uses a runtime included with the SDK, which means you do not have to install the runtime separately to use ADL.",source:"@site/docs/building/air-debug-launcher.md",sourceDirName:"building",slug:"/building/air-debug-launcher",permalink:"/docs/building/air-debug-launcher",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/building/air-debug-launcher.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"AIR Debug Launcher (adl)",sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Configuration files",permalink:"/docs/building/actionscript-compilers/configuration-files"},next:{title:"About ADT",permalink:"/docs/building/air-developer-tool/"}},p={},d=[{value:"ADL usage",id:"adl-usage",level:2},{value:"<code>-runtime runtime-directory</code>",id:"-runtime-runtime-directory",level:3},{value:"<code>-pubid publisher-id</code>",id:"-pubid-publisher-id",level:3},{value:"<code>-nodebug</code>",id:"-nodebug",level:3},{value:"<code>-atlogin</code>",id:"-atlogin",level:3},{value:"<code>-profile profileName</code>",id:"-profile-profilename",level:3},{value:"<code>-screensize value</code>",id:"-screensize-value",level:3},{value:"<code>-extdir extension-directory</code>",id:"-extdir-extension-directory",level:3},{value:"<code>application.xml</code>",id:"applicationxml",level:3},{value:"<code>root-directory</code>",id:"root-directory",level:3},{value:"<code>-- arguments</code>",id:"---arguments",level:3},{value:"ADL Examples",id:"adl-examples",level:2},{value:"ADL exit and error codes",id:"adl-exit-and-error-codes",level:2}],u={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Use the AIR Debug Launcher (ADL) to run both SWF-based and HTML-based applications during development. Using ADL, you can run an application without first packaging and installing it. By default, ADL uses a runtime included with the SDK, which means you do not have to install the runtime separately to use ADL."),(0,i.kt)("p",null,"ADL prints trace statements and run-time errors to the standard output, but does not support breakpoints or other debugging features. You can use the Flash Debugger (or an integrated development environment such as Flash Builder) for complex debugging issues."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If your ",(0,i.kt)("inlineCode",{parentName:"p"},"trace()")," statements do not display on the console, ensure that you have not specified ",(0,i.kt)("inlineCode",{parentName:"p"},"ErrorReportingEnable")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"TraceOutputFileEnable")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"mm.cfg")," file.")),(0,i.kt)("p",null,"AIR supports debugging directly, so you do not need a debug version of the runtime. To conduct command-line debugging, you use the Flash Debugger and the AIR Debug Launcher (ADL)."),(0,i.kt)("p",null,"The Flash Debugger is distributed in the AIR SDK directory. The native versions, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"fdb.exe")," on Windows, are in the ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," subdirectory. The Java version is in the ",(0,i.kt)("inlineCode",{parentName:"p"},"lib")," subdirectory. The AIR Debug Launcher, ",(0,i.kt)("inlineCode",{parentName:"p"},"adl.exe"),", is in the bin directory of your AIR SDK installation. (There is no separate Java version)."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You cannot start an AIR application directly with ",(0,i.kt)("inlineCode",{parentName:"p"},"fdb"),", because ",(0,i.kt)("inlineCode",{parentName:"p"},"fdb")," attempts to launch it with Flash Player. Instead, let the AIR application connect to a running ",(0,i.kt)("inlineCode",{parentName:"p"},"fdb")," session.")),(0,i.kt)("h2",{id:"adl-usage"},"ADL usage"),(0,i.kt)("p",null,"To run an application with ADL, use the following pattern:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"adl application.xml\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"application.xml")," is the application descriptor file for the application."),(0,i.kt)("p",null,"The full syntax for the ADL is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"adl     [-runtime runtime-directory]\n    [-pubid publisher-id]\n    [-nodebug]\n    [-atlogin]\n    [-profile profileName]\n    [-screensize value]\n    [-extdir extension-directory]\n    application.xml\n    [root-directory]\n    [-- arguments]\n")),(0,i.kt)("p",null,"(Items in brackets, [], are optional.)"),(0,i.kt)("h3",{id:"-runtime-runtime-directory"},(0,i.kt)("inlineCode",{parentName:"h3"},"-runtime runtime-directory")),(0,i.kt)("p",null,"Specifies the directory containing the runtime to use. If not specified, the runtime directory in the same SDK as the ADL program is used. If you move ADL out of its SDK folder, specify the runtime directory. On Windows and Linux, specify the directory containing the Adobe AIR directory. On Mac OS X, specify the directory containing Adobe AIR.framework."),(0,i.kt)("h3",{id:"-pubid-publisher-id"},(0,i.kt)("inlineCode",{parentName:"h3"},"-pubid publisher-id")),(0,i.kt)("p",null,"Assigns the specified value as the publisher ID of the AIR application for this run. Specifying a temporary publisher ID allows you to test features of an AIR application, such as communicating over a local connection, that use the publisher ID to help uniquely identify an application. As of AIR 1.5.3, you can also specify the publisher ID in the application descriptor file (and should not use this parameter)."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"As of AIR 1.5.3, a Publisher ID is no longer automatically computed and assigned to an AIR application. You can specify a publisher ID when creating an update to an existing AIR application, but new applications do not need and should not specify a publisher ID.")),(0,i.kt)("h3",{id:"-nodebug"},(0,i.kt)("inlineCode",{parentName:"h3"},"-nodebug")),(0,i.kt)("p",null,"Turns off debugging support. If used, the application process cannot connect to the Flash debugger and dialogs for unhandled exceptions are suppressed. (However, trace statements still print to the console window.) Turning off debugging allows your application to run a little faster and also emulates the execution mode of an installed application more closely."),(0,i.kt)("h3",{id:"-atlogin"},(0,i.kt)("inlineCode",{parentName:"h3"},"-atlogin")),(0,i.kt)("p",null,"Simulates launching the application at login. This flag allows you to test application logic that executes only when an application is set to launch when the user logs in. When -atlogin is used, the reason property of the InvokeEvent object dispatched to the application will be login instead of standard (unless the application is already running)."),(0,i.kt)("h3",{id:"-profile-profilename"},(0,i.kt)("inlineCode",{parentName:"h3"},"-profile profileName")),(0,i.kt)("p",null,"ADL debugs the application using the specified profile. The profileName can be one of the following values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"desktop")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"extendedDesktop")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mobileDevice"))),(0,i.kt)("p",null,"If the application descriptor includes a ",(0,i.kt)("inlineCode",{parentName:"p"},"supportedProfiles")," element, then the profile you specify with ",(0,i.kt)("inlineCode",{parentName:"p"},"-profile")," must be a member of the supported list. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"-profile")," flag is not used, the first profile in the application descriptor is used as the active profile. If the application descriptor does not include the ",(0,i.kt)("inlineCode",{parentName:"p"},"supportedProfiles")," element and you do not use the ",(0,i.kt)("inlineCode",{parentName:"p"},"-profile")," flag, then the ",(0,i.kt)("inlineCode",{parentName:"p"},"desktop")," profile is used."),(0,i.kt)("p",null,"For more information, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/building/application-descriptor-files/elements/application#supportedProfiles"},"supportedProfiles")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/building/device-profiles"},"Device profiles"),"."),(0,i.kt)("h3",{id:"-screensize-value"},(0,i.kt)("inlineCode",{parentName:"h3"},"-screensize value")),(0,i.kt)("p",null,"The simulated screen size to use when running apps in the ",(0,i.kt)("inlineCode",{parentName:"p"},"mobileDevice")," profile on the desktop. Specify the screen size as a predefined screen type, or as the pixel dimensions of the normal width and height for portrait layout, plus the fullscreen width and height. To specify the value by type, use one of the following predefined screen types:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"TODO: Need to confirm the following values are complete!")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Screen type"),(0,i.kt)("th",{parentName:"tr",align:null},"Normal width x height"),(0,i.kt)("th",{parentName:"tr",align:null},"Fullscreen width x height"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"480"),(0,i.kt)("td",{parentName:"tr",align:null},"720 x 480"),(0,i.kt)("td",{parentName:"tr",align:null},"720 x 480")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"720"),(0,i.kt)("td",{parentName:"tr",align:null},"1280 x 720"),(0,i.kt)("td",{parentName:"tr",align:null},"1280 x 720")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1080"),(0,i.kt)("td",{parentName:"tr",align:null},"1920 x 1080"),(0,i.kt)("td",{parentName:"tr",align:null},"1920 x 1080")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Droid"),(0,i.kt)("td",{parentName:"tr",align:null},"480 x 816"),(0,i.kt)("td",{parentName:"tr",align:null},"480 x 854")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FWQVGA"),(0,i.kt)("td",{parentName:"tr",align:null},"240 x 432"),(0,i.kt)("td",{parentName:"tr",align:null},"240 x 432")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FWVGA"),(0,i.kt)("td",{parentName:"tr",align:null},"480 x 854"),(0,i.kt)("td",{parentName:"tr",align:null},"480 x 854")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HVGA"),(0,i.kt)("td",{parentName:"tr",align:null},"320 x 480"),(0,i.kt)("td",{parentName:"tr",align:null},"320 x 480")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"iPad"),(0,i.kt)("td",{parentName:"tr",align:null},"768 x 1004"),(0,i.kt)("td",{parentName:"tr",align:null},"768 x 1024")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"iPadRetina"),(0,i.kt)("td",{parentName:"tr",align:null},"1536 x 2008"),(0,i.kt)("td",{parentName:"tr",align:null},"1536 x 2048")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"iPhone"),(0,i.kt)("td",{parentName:"tr",align:null},"320 x 460"),(0,i.kt)("td",{parentName:"tr",align:null},"320 x 480")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"iPhoneRetina"),(0,i.kt)("td",{parentName:"tr",align:null},"640 x 920"),(0,i.kt)("td",{parentName:"tr",align:null},"640 x 960")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"iPhone5Retina"),(0,i.kt)("td",{parentName:"tr",align:null},"640 x 1096"),(0,i.kt)("td",{parentName:"tr",align:null},"640 x 1136")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"iPhone6"),(0,i.kt)("td",{parentName:"tr",align:null},"750 x 1294"),(0,i.kt)("td",{parentName:"tr",align:null},"750 x 1334")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"iPhone6Plus"),(0,i.kt)("td",{parentName:"tr",align:null},"1242 x 2148"),(0,i.kt)("td",{parentName:"tr",align:null},"1242 x 2208")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"iPod"),(0,i.kt)("td",{parentName:"tr",align:null},"320 x 460"),(0,i.kt)("td",{parentName:"tr",align:null},"320 x 480")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"iPodRetina"),(0,i.kt)("td",{parentName:"tr",align:null},"640 x 920"),(0,i.kt)("td",{parentName:"tr",align:null},"640 x 960")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"iPod5Retina"),(0,i.kt)("td",{parentName:"tr",align:null},"640 x 1096"),(0,i.kt)("td",{parentName:"tr",align:null},"640 x 1136")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NexusOne"),(0,i.kt)("td",{parentName:"tr",align:null},"480 x 762"),(0,i.kt)("td",{parentName:"tr",align:null},"480 x 800")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"QVGA"),(0,i.kt)("td",{parentName:"tr",align:null},"240 x 320"),(0,i.kt)("td",{parentName:"tr",align:null},"240 x 320")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SamsungGalaxyS"),(0,i.kt)("td",{parentName:"tr",align:null},"480 x 762"),(0,i.kt)("td",{parentName:"tr",align:null},"480 x 800")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SamsungGalaxyTab"),(0,i.kt)("td",{parentName:"tr",align:null},"600 x 986"),(0,i.kt)("td",{parentName:"tr",align:null},"600 x 1024")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WQVGA"),(0,i.kt)("td",{parentName:"tr",align:null},"240 x 400"),(0,i.kt)("td",{parentName:"tr",align:null},"240 x 400")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WVGA"),(0,i.kt)("td",{parentName:"tr",align:null},"480 x 800"),(0,i.kt)("td",{parentName:"tr",align:null},"480 x 800")))),(0,i.kt)("p",null,"To specify the screen pixel dimensions directly, use the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"widthXheight:fullscreenWidthXfullscreenHeight\n")),(0,i.kt)("p",null,"Always specify the pixel dimensions for portrait layout, meaning specify the width as a value smaller than the value for height. For example, the NexusOne screen can be specified with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-screensize 480x762:480x800\n")),(0,i.kt)("h3",{id:"-extdir-extension-directory"},(0,i.kt)("inlineCode",{parentName:"h3"},"-extdir extension-directory")),(0,i.kt)("p",null,"The directory in which the runtime should search for native extensions. The directory contains a subdirectory for each native extension that the application uses. Each of these subdirectories contain the unpackaged ANE file of an extension. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"C:\\extensionDirs\\\n    extension1.ane\\\n        META-INF\\\n            ANE\\\n                Android-ARM\\\n                    library.swf\n                    extension1.jar\n                extension.xml\n            signatures.xml\n        catalog.xml\n        library.swf\n        mimetype\n    extension2.ane\\\n        META-INF\\\n            ANE\\\n                Android-ARM\\\n                    library.swf\n                    extension2.jar\n                extension.xml\n            signatures.xml\n        catalog.xml\n        library.swf\n        mimetype\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-extdir")," parameter, consider the following:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The ADL command requires that each of the specified directories have the ",(0,i.kt)("inlineCode",{parentName:"li"},".ane")," filename extension. However, the part of the filename before the ",(0,i.kt)("inlineCode",{parentName:"li"},".ane")," suffix can be any valid filename. It does not have to match the value of the extensionID element of the application descriptor file."),(0,i.kt)("li",{parentName:"ul"},"You can specify the ",(0,i.kt)("inlineCode",{parentName:"li"},"-extdir")," parameter more than once."),(0,i.kt)("li",{parentName:"ul"},"The use of the ",(0,i.kt)("inlineCode",{parentName:"li"},"-extdir")," parameter is different for the ADT tool and the ADL tool. In ADT, the parameter specifies a directory that contains ANE files."),(0,i.kt)("li",{parentName:"ul"},"You can also use the environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"AIR_EXTENSION_PATH")," to specify the extension directories. See ADT environment variables."))),(0,i.kt)("h3",{id:"applicationxml"},(0,i.kt)("inlineCode",{parentName:"h3"},"application.xml")),(0,i.kt)("p",null,"The application descriptor file. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/building/application-descriptor-files/introduction"},"AIR application descriptor files"),". The application descriptor is the only parameter required by ADL and, in most cases, the only parameter needed."),(0,i.kt)("h3",{id:"root-directory"},(0,i.kt)("inlineCode",{parentName:"h3"},"root-directory")),(0,i.kt)("p",null,"Specifies the root directory of the application to run. If not specified, the directory containing the application descriptor file is used."),(0,i.kt)("h3",{id:"---arguments"},(0,i.kt)("inlineCode",{parentName:"h3"},"-- arguments")),(0,i.kt)("p",null,'Any character strings appearing after "--" are passed to the application as command line arguments.'),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When you launch an AIR application that is already running, a new instance of that application is not started. Instead, an invoke event is dispatched to the running instance.")),(0,i.kt)("h2",{id:"adl-examples"},"ADL Examples"),(0,i.kt)("p",null,"Run an application in the current directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"adl myApp-app.xml\n")),(0,i.kt)("p",null,"Run an application in a subdirectory of the current directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"adl source/myApp-app.xml release\n")),(0,i.kt)("p",null,'Run an application and pass in two command-line arguments, "tick" and "tock":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"adl myApp-app.xml -- tick tock\n")),(0,i.kt)("p",null,"Run an application using a specific runtime:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"adl -runtime /AIRSDK/runtime myApp-app.xml\n")),(0,i.kt)("p",null,"Run an application without debugging support:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"adl -nodebug myApp-app.xml\n")),(0,i.kt)("p",null,"Run an application in the mobile device profile and simulate the Nexus One screen size:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"adl -profile mobileDevice -screensize NexusOne myMobileApp-app.xml\n")),(0,i.kt)("p",null,"Run an application using Apache Ant to run the application (the paths shown in the example are for Windows):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<property name="SDK_HOME" value="C:/AIRSDK"/>\n<property name="ADL" value="${SDK_HOME}/bin/adl.exe"/>\n<property name="APP_ROOT" value="c:/dev/MyApp/bin-debug"/>\n<property name="APP_DESCRIPTOR" value="${APP_ROOT}/myApp-app.xml"/>\n\n<target name="test">\n    <exec executable="${ADL}">\n        <arg value="${APP_DESCRIPTOR}"/>\n        <arg value="${APP_ROOT}"/>\n    </exec>\n</target>\n')),(0,i.kt)("h2",{id:"adl-exit-and-error-codes"},"ADL exit and error codes"),(0,i.kt)("p",null,"The following table describes the exit codes printed by ADL:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Exit code"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"Successful launch. ADL exits after the AIR application exits.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"Successful invocation of an already running AIR application. ADL exits immediately.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"Usage error. The arguments supplied to ADL are incorrect.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"The runtime cannot be found.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"The runtime cannot be started. Often, this occurs because the version specified in the application does not match the version of the runtime.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"An error of unknown cause occurred.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6"),(0,i.kt)("td",{parentName:"tr",align:null},"The application descriptor file cannot be found.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7"),(0,i.kt)("td",{parentName:"tr",align:null},"The contents of the application descriptor are not valid. This error usually indicates that the XML is not well formed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},"The main application content file (specified in the ",(0,i.kt)("inlineCode",{parentName:"td"},"<content>")," element of the application descriptor file) cannot be found.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"9"),(0,i.kt)("td",{parentName:"tr",align:null},"The main application content file is not a valid SWF or HTML file.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"10"),(0,i.kt)("td",{parentName:"tr",align:null},"The application doesn\u2019t support the profile specified with the ",(0,i.kt)("inlineCode",{parentName:"td"},"-profile")," option.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"11"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"-screensize")," argument is not supported in the current profile.")))))}c.isMDXComponent=!0}}]);