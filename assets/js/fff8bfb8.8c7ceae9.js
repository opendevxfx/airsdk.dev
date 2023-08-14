"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[65381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),h=r,u=c["".concat(p,".").concat(h)]||c[h]||m[h]||a;return n?i.createElement(u,o(o({ref:t},d),{},{components:n})):i.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},57278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const a={sidebar_position:3},o="Flash runtime tasks and system printing",s={unversionedId:"development/client-system-interaction/printing/flash-runtime-tasks-and-system-printing",id:"development/client-system-interaction/printing/flash-runtime-tasks-and-system-printing",title:"Flash runtime tasks and system printing",description:"Because Flash runtimes dispatch pages to the operating system's printing",source:"@site/docs/development/client-system-interaction/printing/flash-runtime-tasks-and-system-printing.md",sourceDirName:"development/client-system-interaction/printing",slug:"/development/client-system-interaction/printing/flash-runtime-tasks-and-system-printing",permalink:"/docs/development/client-system-interaction/printing/flash-runtime-tasks-and-system-printing",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/client-system-interaction/printing/flash-runtime-tasks-and-system-printing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mainSidebar",previous:{title:"Printing a page",permalink:"/docs/development/client-system-interaction/printing/printing-a-page"},next:{title:"Setting size, scale, and orientation",permalink:"/docs/development/client-system-interaction/printing/setting-size-scale-and-orientation"}},p={},l=[{value:"Working with exceptions and returns",id:"working-with-exceptions-and-returns",level:2},{value:"Working with page properties",id:"working-with-page-properties",level:2},{value:"Setting vector or bitmap rendering",id:"setting-vector-or-bitmap-rendering",level:2},{value:"Timing print job statements",id:"timing-print-job-statements",level:2}],d={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flash-runtime-tasks-and-system-printing"},"Flash runtime tasks and system printing"),(0,r.kt)("p",null,"Because Flash runtimes dispatch pages to the operating system's printing\ninterface, be aware of the tasks managed by Flash runtimes and the tasks managed\nby an operating system's own printing interface. Flash runtimes can initiate a\nprint job, read some of a printer's page settings, pass the content for a print\njob to the operating system, and verify if the user or system has canceled a\nprint job. Other processes, such as displaying printer specific dialog boxes,\ncanceling a spooled print job, or reporting on the printer's status, are all\nhandled by the operating system. Flash runtimes are able to respond if there is\na problem initiating or formatting a print job, but can report back only on\ncertain properties or conditions from the operating system's printing interface.\nAs a developer, your code needs to respond to these properties or conditions."),(0,r.kt)("h2",{id:"working-with-exceptions-and-returns"},"Working with exceptions and returns"),(0,r.kt)("p",null,"Check to see if the ",(0,r.kt)("inlineCode",{parentName:"p"},"PrintJob.start()")," method returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," before executing\n",(0,r.kt)("inlineCode",{parentName:"p"},"addPage()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"send()")," calls, in case the user has canceled the print job. A\nsimple way to check whether these methods have been canceled before continuing\nis to wrap them in an ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," statement, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"if (myPrintJob.start())\n{\n    // addPage() and send() statements here\n}\n")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"PrintJob.start()")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the user selected Print (or a Flash runtime,\nsuch as Flash Player or AIR, has initiated a Print command). So, the ",(0,r.kt)("inlineCode",{parentName:"p"},"addPage()"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"send()")," methods can be called."),(0,r.kt)("p",null,"Also, to help manage the printing process, Flash runtimes throw exceptions for\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"PrintJob.addPage()")," method, so that you can catch errors and provide\ninformation and options to the user. If a ",(0,r.kt)("inlineCode",{parentName:"p"},"PrintJob.addPage()")," method fails, you\ncan also call another function or stop the current print job. You catch these\nexceptions by embedding ",(0,r.kt)("inlineCode",{parentName:"p"},"addPage()")," calls within a ",(0,r.kt)("inlineCode",{parentName:"p"},"try..catch")," statement, as in\nthe following example. In the example, ",(0,r.kt)("inlineCode",{parentName:"p"},"[params]")," is a placeholder for the\nparameters specifying the actual content you want to print:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"if (myPrintJob.start())\n{\n    try\n    {\n        myPrintJob.addPage([params]);\n    }\n    catch (error:Error)\n    {\n        // Handle error,\n    }\n    myPrintJob.send();\n}\n")),(0,r.kt)("p",null,"After the print job starts, you can add the content using ",(0,r.kt)("inlineCode",{parentName:"p"},"PrintJob.addPage()"),"\nand see if that generates an exception (for example, if the user has canceled\nthe print job). If it does, you can add logic to the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," statement to\nprovide the user (or the Flash runtime) with information and options, or you can\nstop the current print job. If you add the page successfully, you can proceed to\nsend the pages to the printer using ",(0,r.kt)("inlineCode",{parentName:"p"},"PrintJob.send()"),"."),(0,r.kt)("p",null,"If the Flash runtime encounters a problem sending the print job to the printer\n(for example, if the printer is offline), you can catch that exception, too, and\nprovide more information or more options (such as displaying message text or\nproviding an alert within an animation). For example, you can assign new text to\na text field in an ",(0,r.kt)("inlineCode",{parentName:"p"},"if..else")," statement, as the following code shows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'if (myPrintJob.start())\n{\n    try\n    {\n        myPrintJob.addPage([params]);\n    }\n    catch (error:Error)\n    {\n        // Handle error.\n    }\n    myPrintJob.send();\n}\nelse\n{\n    myAlert.text = "Print job canceled";\n}\n')),(0,r.kt)("p",null,"For a working example, see\n",(0,r.kt)("a",{parentName:"p",href:"/docs/development/client-system-interaction/printing/printing-example-scaling-cropping-and-responding"},"Printing example: Scaling, cropping, and responding"),"."),(0,r.kt)("h2",{id:"working-with-page-properties"},"Working with page properties"),(0,r.kt)("p",null,"Once the user clicks OK in the Print dialog box and ",(0,r.kt)("inlineCode",{parentName:"p"},"PrintJob.start()")," returns\n",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", you can access the properties defined by the printer's settings. These\nsettings include the paper width, paper height ( ",(0,r.kt)("inlineCode",{parentName:"p"},"pageHeight")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pageWidth"),"),\nand content orientation on the paper. Because these are printer settings, not\ncontrolled by the Flash runtime, you cannot alter these settings; however, you\ncan use them to align the content you send to the printer to match the current\nsettings. For more information, see\n",(0,r.kt)("a",{parentName:"p",href:"/docs/development/client-system-interaction/printing/setting-size-scale-and-orientation"},"Setting size, scale, and orientation"),"."),(0,r.kt)("h2",{id:"setting-vector-or-bitmap-rendering"},"Setting vector or bitmap rendering"),(0,r.kt)("p",null,"You can manually set the print job to spool each page as vector graphics or a\nbitmap image. In some cases, vector printing produces a smaller spool file, and\na better image than bitmap printing. However, if your content includes a bitmap\nimage, and you want to preserve any alpha transparency or color effects, print\nthe page as a bitmap image. Also, a non-PostScript printer automatically\nconverts any vector graphics to bitmap images."),(0,r.kt)("p",null,"You specify bitmap printing by passing a PrintJobOptions object as the third\nparameter of ",(0,r.kt)("inlineCode",{parentName:"p"},"PrintJob.addPage()"),"."),(0,r.kt)("p",null,"For Flash Player and AIR prior to AIR 2, set the PrintJobOptions object's\n",(0,r.kt)("inlineCode",{parentName:"p"},"printAsBitmap")," parameter set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var options:PrintJobOptions = new PrintJobOptions();\noptions.printAsBitmap = true;\nmyPrintJob.addPage(mySprite, null, options);\n")),(0,r.kt)("p",null,"If you don't specify a value for the third parameter, the print job uses the\ndefault, which is vector printing."),(0,r.kt)("p",null,"For AIR 2 and later, use the PrintJobOptions object's ",(0,r.kt)("inlineCode",{parentName:"p"},"printMethod")," property to\nspecify the print method. This property accepts three values, which are defined\nas constants in the PrintMethod class:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"PrintMethod.AUTO"),": Automatically chooses the best print method based on the\ncontent being printed. For example, if a page consists of text, the vector\nprint method is chosen. However, if a watermark image with alpha transparency\nis overlaid on the text, bitmap printing is chosen to preserve the\ntransparency.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"PrintMethod.BITMAP"),": Forces bitmap printing regardless of the content")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"PrintMethod.VECTOR"),": Forces vector printing regardless of the content"))),(0,r.kt)("h2",{id:"timing-print-job-statements"},"Timing print job statements"),(0,r.kt)("p",null,"ActionScript 3.0 does not restrict a PrintJob object to a single frame (as did\nprevious versions of ActionScript). However, because the operating system\ndisplays print status information to the user once the user has clicked the OK\nbutton in the Print dialog box, call ",(0,r.kt)("inlineCode",{parentName:"p"},"PrintJob.addPage()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PrintJob.send()"),"\nas soon as possible to send pages to the spooler. A delay reaching the frame\ncontaining the ",(0,r.kt)("inlineCode",{parentName:"p"},"PrintJob.send()")," call delays the printing process."),(0,r.kt)("p",null,"In ActionScript 3.0, there is a script time-out limit of 15 seconds. Therefore,\nthe time between each major statement in a print job sequence cannot exceed 15\nseconds. In other words, the 15-second script time-out limit applies to the\nfollowing intervals:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Between ",(0,r.kt)("inlineCode",{parentName:"p"},"PrintJob.start()")," and the first ",(0,r.kt)("inlineCode",{parentName:"p"},"PrintJob.addPage()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Between ",(0,r.kt)("inlineCode",{parentName:"p"},"PrintJob.addPage()")," and the next ",(0,r.kt)("inlineCode",{parentName:"p"},"PrintJob.addPage()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Between the last ",(0,r.kt)("inlineCode",{parentName:"p"},"PrintJob.addPage()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PrintJob.send()")))),(0,r.kt)("p",null,"If any of these intervals spans more than 15 seconds, the next call to\n",(0,r.kt)("inlineCode",{parentName:"p"},"PrintJob.start()")," on the PrintJob instance returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", and the next\n",(0,r.kt)("inlineCode",{parentName:"p"},"PrintJob.addPage()")," on the PrintJob instance causes Flash Player or AIR to\nthrow a run-time exception."))}m.isMDXComponent=!0}}]);