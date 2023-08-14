"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[15339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=i,d=m["".concat(o,".").concat(h)]||m[h]||u[h]||r;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={},l="Movie clip example: RuntimeAssetsExplorer",s={unversionedId:"development/display/working-with-movie-clips/movie-clip-example-runtime-assets-explorer",id:"development/display/working-with-movie-clips/movie-clip-example-runtime-assets-explorer",title:"Movie clip example: RuntimeAssetsExplorer",description:"The Export for ActionScript functionality can be especially advantageous for",source:"@site/docs/development/display/working-with-movie-clips/movie-clip-example-runtime-assets-explorer.md",sourceDirName:"development/display/working-with-movie-clips",slug:"/development/display/working-with-movie-clips/movie-clip-example-runtime-assets-explorer",permalink:"/docs/development/display/working-with-movie-clips/movie-clip-example-runtime-assets-explorer",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/working-with-movie-clips/movie-clip-example-runtime-assets-explorer.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Loading an external SWF file",permalink:"/docs/development/display/working-with-movie-clips/loading-an-external-swf-file"},next:{title:"Working with MovieClip objects",permalink:"/docs/development/display/working-with-movie-clips/working-with-movieclip-objects"}},o={},p=[{value:"Establishing a run-time library interface",id:"establishing-a-run-time-library-interface",level:2},{value:"Creating the asset library SWF file",id:"creating-the-asset-library-swf-file",level:2},{value:"Creating a class to implement the RuntimeLibrary interface",id:"creating-a-class-to-implement-the-runtimelibrary-interface",level:4},{value:"Creating classes for each MovieClip asset",id:"creating-classes-for-each-movieclip-asset",level:4},{value:"Publishing the library",id:"publishing-the-library",level:4},{value:"Loading the library into another SWF file",id:"loading-the-library-into-another-swf-file",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"movie-clip-example-runtimeassetsexplorer"},"Movie clip example: RuntimeAssetsExplorer"),(0,i.kt)("p",null,'The Export for ActionScript functionality can be especially advantageous for\nlibraries that may be useful across more than one project. If Flash Player or\nAIR executes a SWF file, symbols that have been exported to ActionScript are\navailable to any SWF file within the same security sandbox as the SWF that loads\nit. In this way, a single Flash document can generate a SWF file that is\ndesignated for the sole purpose of holding graphical assets. This technique is\nparticularly useful for larger projects where designers working on visual assets\ncan work in parallel with developers who create a "wrapper" SWF file that then\nloads the graphical assets SWF file at run time. You can use this method to\nmaintain a series of versioned files where graphical assets are not dependent\nupon the progress of programming development.'),(0,i.kt)("p",null,"The RuntimeAssetsExplorer application loads any SWF file that is a subclass of\nRuntimeAsset and allows you to browse the available assets of that SWF file. The\nexample illustrates the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Loading an external SWF file using ",(0,i.kt)("inlineCode",{parentName:"p"},"Loader.load()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dynamic creation of a library symbol exported for ActionScript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ActionScript control of MovieClip playback"))),(0,i.kt)("p",null,"Before beginning, note that each of the SWF files to run in Flash Player must be\nlocated in the same security sandbox. For more information, see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/security/security-sandboxes"},"Security sandboxes"),"."),(0,i.kt)("p",null,"To get the application files for this sample, download the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/joshtynjala/flash-platform-as3-dev-guide-examples/releases/tag/original"},(0,i.kt)("em",{parentName:"a"},"FlashPlatformAS3DevGuideExamples.zip")),".\nThe RuntimeAssetsExplorer application files can be found in the folder\nSamples/RuntimeAssetsExplorer. The application consists of the following files:"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("p",null,"File")),(0,i.kt)("th",null,(0,i.kt)("p",null,"Description")))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"RuntimeAssetsExample.mxml"),(0,i.kt)("p",null,"or"),(0,i.kt)("p",null,"RuntimeAssetsExample.fla")),(0,i.kt)("td",null,(0,i.kt)("p",null,"The user interface for the application for Flex (MXML) or Flash (FLA)."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"RuntimeAssetsExample.as")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Document class for the Flash (FLA) application."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"GeometricAssets.as")),(0,i.kt)("td",null,(0,i.kt)("p",null,"An example class that implements the RuntimeAsset interface."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"GeometricAssets.fla")),(0,i.kt)("td",null,(0,i.kt)("p",null,"A FLA file linked to the GeometricAssets class (the document class of the FLA) containing symbols that are exported for ActionScript."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"com/example/programmingas3/runtimeassetexplorer/RuntimeLibrary.as")),(0,i.kt)("td",null,(0,i.kt)("p",null,"An interface that defines the required methods expected of all run-time asset SWF files that will be loaded into the explorer container."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"com/example/programmingas3/runtimeassetexplorer/AnimatingBox.as")),(0,i.kt)("td",null,(0,i.kt)("p",null,"The class of the library symbol in the shape of a rotating box."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"com/example/programmingas3/runtimeassetexplorer/AnimatingStar.as")),(0,i.kt)("td",null,(0,i.kt)("p",null,"The class of the library symbol in the shape of a rotating star."))))),(0,i.kt)("h2",{id:"establishing-a-run-time-library-interface"},"Establishing a run-time library interface"),(0,i.kt)("p",null,"In order for the explorer to properly interact with a SWF library, the structure\nof the run-time asset libraries must be formalized. We will accomplish this by\ncreating an interface, which is similar to a class in that it's a blueprint of\nmethods that demarcate an expected structure, but unlike a class it includes no\nmethod bodies. The interface provides a way for both the run-time library and\nthe explorer to communicate to one another. Each SWF of run-time assets that is\nloaded in our browser will implement this interface. For more information about\ninterfaces and how they can be useful, see Interfaces in ",(0,i.kt)("em",{parentName:"p"},"Learning ActionScript\n3.0"),"."),(0,i.kt)("p",null,"The RuntimeLibrary interface will be very simple\u2014we merely require a function\nthat can provide the explorer with an array of classpaths for the symbols to be\nexported and available in the run-time library. To this end, the interface has a\nsingle method: ",(0,i.kt)("inlineCode",{parentName:"p"},"getAssets()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"package com.example.programmingas3.runtimeassetexplorer\n{\n    public interface RuntimeLibrary\n    {\n        function getAssets():Array;\n    }\n}\n")),(0,i.kt)("h2",{id:"creating-the-asset-library-swf-file"},"Creating the asset library SWF file"),(0,i.kt)("p",null,"By defining the RuntimeLibrary interface, it's possible to create multiple asset\nlibrary SWF files that can be loaded into another SWF file. Making an individual\nSWF library of assets involves four tasks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Creating a class for the asset library SWF file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Creating classes for individual assets contained in the library")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Creating the actual graphic assets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Associating graphic elements with classes and publishing the library SWF"))),(0,i.kt)("h4",{id:"creating-a-class-to-implement-the-runtimelibrary-interface"},"Creating a class to implement the RuntimeLibrary interface"),(0,i.kt)("p",null,"Next, we'll create the GeometricAssets class that will implement the\nRuntimeLibrary interface. This will be the document class of the FLA. The code\nfor this class is very similar to the RuntimeLibrary interface\u2014the difference\nbetween them is that in the class definition the ",(0,i.kt)("inlineCode",{parentName:"p"},"getAssets()")," method has a\nmethod body."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'package\n{\n    import flash.display.Sprite;\n    import com.example.programmingas3.runtimeassetexplorer.RuntimeLibrary;\n\n    public class GeometricAssets extends Sprite implements RuntimeLibrary\n    {\n        public function GeometricAssets() {\n\n        }\n        public function getAssets():Array {\n            return [ "com.example.programmingas3.runtimeassetexplorer.AnimatingBox",\n                    "com.example.programmingas3.runtimeassetexplorer.AnimatingStar" ];\n        }\n    }\n}\n')),(0,i.kt)("p",null,"If we were to create a second run-time library, we could create another FLA\nbased upon another class (for example, AnimationAssets) that provides its own\n",(0,i.kt)("inlineCode",{parentName:"p"},"getAssets()")," implementation."),(0,i.kt)("h4",{id:"creating-classes-for-each-movieclip-asset"},"Creating classes for each MovieClip asset"),(0,i.kt)("p",null,"For this example, we'll merely extend the MovieClip class without adding any\nfunctionality to the custom assets. The following code for AnimatingStar is\nanalogous to that of AnimatingBox:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"package com.example.programmingas3.runtimeassetexplorer\n{\n    import flash.display.MovieClip;\n\n    public class AnimatingStar extends MovieClip\n    {\n        public function AnimatingStar() {\n        }\n    }\n}\n")),(0,i.kt)("h4",{id:"publishing-the-library"},"Publishing the library"),(0,i.kt)("p",null,"We'll now connect the MovieClip-based assets to the new class by creating a new\nFLA and entering GeometricAssets into the Document Class field of the Property\ninspector. For the purposes of this example, we'll create two very basic shapes\nthat use a timeline tween to make one clockwise rotation over 360 frames. Both\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"animatingBox")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"animatingStar")," symbols are set to Export for\nActionScript and have the Class field set to the respective classpaths specified\nin the ",(0,i.kt)("inlineCode",{parentName:"p"},"getAssets()")," implementation. The default base class of\n",(0,i.kt)("inlineCode",{parentName:"p"},"flash.display.MovieClip")," remains, as we want to subclass the standard MovieClip\nmethods."),(0,i.kt)("p",null,"After setting up your symbol's export settings, publish the FLA. You now have\nyour first run-time library. This SWF file could be loaded into another AVM2 SWF\nfile and the AnimatingBox and AnimatingStar symbols would be available to the\nnew SWF file."),(0,i.kt)("h2",{id:"loading-the-library-into-another-swf-file"},"Loading the library into another SWF file"),(0,i.kt)("p",null,"The last functional piece to deal with is the user interface for the asset\nexplorer. In this example, the path to the run-time library is hard-coded as a\nvariable named ",(0,i.kt)("inlineCode",{parentName:"p"},"ASSETS_PATH"),". Alternatively, you could use the FileReference\nclass\u2014for example, to create an interface that browses for a particular SWF file\non your hard drive."),(0,i.kt)("p",null,"When the run-time library is successfully loaded, Flash Player calls the\n",(0,i.kt)("inlineCode",{parentName:"p"},"runtimeAssetsLoadComplete()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"private function runtimeAssetsLoadComplete(event:Event):void\n{\n    var rl:* = event.target.content;\n    var assetList:Array = rl.getAssets();\n    populateDropdown(assetList);\n    stage.frameRate = 60;\n}\n")),(0,i.kt)("p",null,"In this method, the variable rl represents the loaded SWF file. The code calls\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"getAssets()")," method of the loaded SWF file, obtaining the list of assets\nthat are available, and uses them to populate a ComboBox component with a list\nof available assets by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"populateDropDown()")," method. That method in\nturn stores the full classpath of each asset. Clicking the Add button on the\nuser interface triggers the ",(0,i.kt)("inlineCode",{parentName:"p"},"addAsset()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"private function addAsset():void\n{\n    var className:String = assetNameCbo.selectedItem.data;\n    var AssetClass:Class = getDefinitionByName(className) as Class;\n    var mc:MovieClip = new AssetClass();\n    ...\n}\n")),(0,i.kt)("p",null,"which gets the classpath of whichever asset is currently selected in the\nComboBox (",(0,i.kt)("inlineCode",{parentName:"p"},"assetNameCbo.selectedItem.data"),"), and uses the\n",(0,i.kt)("inlineCode",{parentName:"p"},"getDefinitionByName()")," function (from the flash.utils package) to obtain an\nactual reference to the asset's class in order to create a new instance of that\nasset."))}u.isMDXComponent=!0}}]);