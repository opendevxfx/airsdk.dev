"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[29993],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),p=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,u=m["".concat(o,".").concat(d)]||m[d]||h[d]||r;return a?i.createElement(u,s(s({ref:t},c),{},{components:a})):i.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},66661:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));const r={sidebar_position:4},s="Capabilities example: Detecting system capabilities",l={unversionedId:"development/client-system-interaction/client-system-environment/capabilities-example-detecting-system-capabilities",id:"development/client-system-interaction/client-system-environment/capabilities-example-detecting-system-capabilities",title:"Capabilities example: Detecting system capabilities",description:"The CapabilitiesExplorer example demonstrates how you can use the",source:"@site/docs/development/client-system-interaction/client-system-environment/capabilities-example-detecting-system-capabilities.md",sourceDirName:"development/client-system-interaction/client-system-environment",slug:"/development/client-system-interaction/client-system-environment/capabilities-example-detecting-system-capabilities",permalink:"/docs/development/client-system-interaction/client-system-environment/capabilities-example-detecting-system-capabilities",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/client-system-interaction/client-system-environment/capabilities-example-detecting-system-capabilities.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"mainSidebar",previous:{title:"Using the Capabilities class",permalink:"/docs/development/client-system-interaction/client-system-environment/using-the-capabilities-class"},next:{title:"AIR application invocation and termination",permalink:"/docs/development/client-system-interaction/air-application-invokation-and-termination"}},o={},p=[{value:"CapabilitiesExplorer overview",id:"capabilitiesexplorer-overview",level:2},{value:"CapabilitiesGrabber class overview",id:"capabilitiesgrabber-class-overview",level:2},{value:"Communicating with JavaScript",id:"communicating-with-javascript",level:2}],c={toc:p},m="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"capabilities-example-detecting-system-capabilities"},"Capabilities example: Detecting system capabilities"),(0,n.kt)("p",null,"The CapabilitiesExplorer example demonstrates how you can use the\nflash.system.Capabilities class to determine which features the user's version\nof the Flash runtime supports. This example teaches the following techniques:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Detecting which capabilities the user's version of the Flash runtime supports\nusing the Capabilities class")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Using the ExternalInterface class to detect which browser settings the user's\nbrowser supports"))),(0,n.kt)("p",null,"To get the application files for this sample, see\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/joshtynjala/flash-platform-as3-dev-guide-examples/releases/tag/original"},(0,n.kt)("em",{parentName:"a"},"FlashPlatformAS3DevGuideExamples.zip")),".\nThe CapabilitiesExplorer application files can be found in the folder\nSamples/CapabilitiesExplorer. This application consists of the following files:"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,(0,n.kt)("p",null,"File")),(0,n.kt)("th",null,(0,n.kt)("p",null,"Description")))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("p",null,"CapabilitiesExplorer.fla"),(0,n.kt)("p",null,"or"),(0,n.kt)("p",null,"CapabilitiesExplorer.mxml")),(0,n.kt)("td",null,(0,n.kt)("p",null,"The main application file in Flash (FLA) or Flex (MXML)."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("p",null,"com/example/programmingas3/capabilities/CapabilitiesGrabber.as")),(0,n.kt)("td",null,(0,n.kt)("p",null,"The class that provides the main functionality of the application, including adding the system Capabilities to an  array, sorting the items, and using the ExternalInterface class to retrieve browser capabilities."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("p",null,"capabilities.html")),(0,n.kt)("td",null,(0,n.kt)("p",null,"An HTML container that contains the necessary JavaScript to communicate with the external API."))))),(0,n.kt)("h2",{id:"capabilitiesexplorer-overview"},"CapabilitiesExplorer overview"),(0,n.kt)("p",null,"The CapabilitiesExplorer.mxml file is responsible for setting up the user\ninterface for the CapabilitiesExplorer application. The capabilities of the\nuser's version of the Flash runtime will be displayed within a DataGrid\ncomponent instance on the Stage. Their browser capabilities will also be\ndisplayed if they are running the application from an HTML container and if the\nexternal API is available."),(0,n.kt)("p",null,"When the main application file's ",(0,n.kt)("inlineCode",{parentName:"p"},"creationComplete")," event is dispatched, the\n",(0,n.kt)("inlineCode",{parentName:"p"},"initApp()")," method is invoked. The ",(0,n.kt)("inlineCode",{parentName:"p"},"initApp()")," method calls the\n",(0,n.kt)("inlineCode",{parentName:"p"},"getCapabilities()")," method from within the\ncom.example.programmingas3.capabilities.CapabilitiesGrabber class. The code for\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"initApp()")," method is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"private function initApp():void\n{\n    var dp:Array = CapabilitiesGrabber.getCapabilities();\n    capabilitiesGrid.dataProvider = dp;\n}\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"CapabilitiesGrabber.getCapabilities()")," method returns a sorted array of the\nFlash runtime and browser capabilities, which then gets set to the\n",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," property of the ",(0,n.kt)("inlineCode",{parentName:"p"},"capabilitiesGrid")," DataGrid component instance on\nthe Stage."),(0,n.kt)("h2",{id:"capabilitiesgrabber-class-overview"},"CapabilitiesGrabber class overview"),(0,n.kt)("p",null,"The static ",(0,n.kt)("inlineCode",{parentName:"p"},"getCapabilities()")," method of the CapabilitiesGrabber class adds each\nproperty from the flash.system.Capabilities class to an array ( ",(0,n.kt)("inlineCode",{parentName:"p"},"capDP"),"). It\nthen calls the static ",(0,n.kt)("inlineCode",{parentName:"p"},"getBrowserObjects()")," method in the CapabilitiesGrabber\nclass. The ",(0,n.kt)("inlineCode",{parentName:"p"},"getBrowserObjects()")," method uses the external API to loop over the\nbrowser's navigator object, which contains the browser's capabilities. The\n",(0,n.kt)("inlineCode",{parentName:"p"},"getCapabilities()")," method is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'public static function getCapabilities():Array\n{\n    var capDP:Array = new Array();\n    capDP.push({name:"Capabilities.avHardwareDisable", value:Capabilities.avHardwareDisable});\n    capDP.push({name:"Capabilities.hasAccessibility", value:Capabilities.hasAccessibility});\n    capDP.push({name:"Capabilities.hasAudio", value:Capabilities.hasAudio});\n    ...\n    capDP.push({name:"Capabilities.version", value:Capabilities.version});\n    var navArr:Array = CapabilitiesGrabber.getBrowserObjects();\n    if (navArr.length > 0)\n    {\n        capDP = capDP.concat(navArr);\n    }\n    capDP.sortOn("name", Array.CASEINSENSITIVE);\n    return capDP;\n}\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"getBrowserObjects()")," method returns an array of each of the properties in\nthe browser's navigator object. If this array has a length of one or more items,\nthe array of browser capabilities ( ",(0,n.kt)("inlineCode",{parentName:"p"},"navArr"),") is appended to the array of Flash\nPlayer capabilities ( ",(0,n.kt)("inlineCode",{parentName:"p"},"capDP"),"), and the entire array is sorted alphabetically.\nFinally, the sorted array is returned to the main application file, which then\npopulates the data grid. The code for the ",(0,n.kt)("inlineCode",{parentName:"p"},"getBrowserObjects()")," method is as\nfollows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'private static function getBrowserObjects():Array\n{\n    var itemArr:Array = new Array();\n    var itemVars:URLVariables;\n    if (ExternalInterface.available)\n    {\n        try\n        {\n            var tempStr:String = ExternalInterface.call("JS_getBrowserObjects");\n            itemVars = new URLVariables(tempStr);\n            for (var i:String in itemVars)\n            {\n                itemArr.push({name:i, value:itemVars[i]});\n            }\n        }\n        catch (error:SecurityError)\n        {\n            // ignore\n        }\n    }\n    return itemArr;\n}\n')),(0,n.kt)("p",null,"If the external API is available in the current user environment, the Flash\nruntime calls the JavaScript ",(0,n.kt)("inlineCode",{parentName:"p"},"JS_getBrowserObjects()")," method, which loops over\nthe browser's navigator object and returns a string of URL-encoded values to\nActionScript. This string is then converted into a URLVariables object (\n",(0,n.kt)("inlineCode",{parentName:"p"},"itemVars"),") and added to the ",(0,n.kt)("inlineCode",{parentName:"p"},"itemArr")," array, which is returned to the calling\nscript."),(0,n.kt)("h2",{id:"communicating-with-javascript"},"Communicating with JavaScript"),(0,n.kt)("p",null,"The final piece in building the CapabilitiesExplorer application is writing the\nnecessary JavaScript to loop over each of the items in the browser's navigator\nobject and append a name-value pair to a temporary array. The code for the\nJavaScript ",(0,n.kt)("inlineCode",{parentName:"p"},"JS_getBrowserObjects()")," method in the container.html file is as\nfollows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'<script language="JavaScript">\n    function JS_getBrowserObjects()\n    {\n        // Create an array to hold each of the browser\'s items.\n        var tempArr = new Array();\n\n        // Loop over each item in the browser\'s navigator object.\n        for (var name in navigator)\n        {\n            var value = navigator[name];\n\n            // If the current value is a string or Boolean object, add it to the\n            // array, otherwise ignore the item.\n            switch (typeof(value))\n            {\n                case "string":\n                case "boolean":\n\n                    // Create a temporary string which will be added to the array.\n                    // Make sure that we URL-encode the values using JavaScript\'s\n                    // escape() function.\n                    var tempStr = "navigator." + name + "=" + escape(value);\n                    // Push the URL-encoded name/value pair onto the array.\n                    tempArr.push(tempStr);\n                    break;\n            }\n        }\n        // Loop over each item in the browser\'s screen object.\n        for (var name in screen)\n        {\n            var value = screen[name];\n\n            // If the current value is a number, add it to the array, otherwise\n            // ignore the item.\n            switch (typeof(value))\n            {\n                case "number":\n                    var tempStr = "screen." + name + "=" + escape(value);\n                    tempArr.push(tempStr);\n                    break;\n            }\n        }\n        // Return the array as a URL-encoded string of name-value pairs.\n        return tempArr.join("&");\n    }\n<\/script>\n')),(0,n.kt)("p",null,"The code begins by creating a temporary array that will hold all the name-value\npairs in the navigator object. Next, the navigator object is looped over using a\n",(0,n.kt)("inlineCode",{parentName:"p"},"for..in")," loop, and the data type of the current value is evaluated to filter\nout unwanted values. In this application, we are interested only in String or\nBoolean values, and other data types (such as functions or arrays) are ignored.\nEach String or Boolean value in the navigator object is appended to the\n",(0,n.kt)("inlineCode",{parentName:"p"},"tempArr")," array. Next, the browser's screen object is looped over using a\n",(0,n.kt)("inlineCode",{parentName:"p"},"for..in")," loop, and each numeric value is added to the ",(0,n.kt)("inlineCode",{parentName:"p"},"tempArr")," array. Finally,\nthe temporary array is converted into a string using the ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.join()")," method.\nThe array uses an ampersand (&) as a delimiter, which allows ActionScript to\neasily parse the data using the URLVariables class."))}h.isMDXComponent=!0}}]);