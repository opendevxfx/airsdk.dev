"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[45950],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=l(a),h=i,u=m["".concat(o,".").concat(h)]||m[h]||c[h]||s;return a?n.createElement(u,p(p({ref:t},d),{},{components:a})):n.createElement(u,p({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,p=new Array(s);p[0]=h;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[m]="string"==typeof e?e:i,p[1]=r;for(var l=2;l<s;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},67266:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const s={},p="The Bitmap and BitmapData classes",r={unversionedId:"development/display/working-with-bitmaps/the-bitmap-and-bitmap-data-classes",id:"development/display/working-with-bitmaps/the-bitmap-and-bitmap-data-classes",title:"The Bitmap and BitmapData classes",description:"The main ActionScript 3.0 classes for working with bitmap images are the Bitmap",source:"@site/docs/development/display/working-with-bitmaps/the-bitmap-and-bitmap-data-classes.md",sourceDirName:"development/display/working-with-bitmaps",slug:"/development/display/working-with-bitmaps/the-bitmap-and-bitmap-data-classes",permalink:"/docs/development/display/working-with-bitmaps/the-bitmap-and-bitmap-data-classes",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/working-with-bitmaps/the-bitmap-and-bitmap-data-classes.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Taking advantage of mipmapping",permalink:"/docs/development/display/working-with-bitmaps/taking-advantage-of-mipmapping"},next:{title:"Filtering display objects",permalink:"/docs/development/display/filtering-display-objects/"}},o={},l=[{value:"Understanding the Bitmap class",id:"understanding-the-bitmap-class",level:2},{value:"Pixel snapping and smoothing",id:"pixel-snapping-and-smoothing",level:2},{value:"Understanding the BitmapData class",id:"understanding-the-bitmapdata-class",level:2}],d={toc:l},m="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-bitmap-and-bitmapdata-classes"},"The Bitmap and BitmapData classes"),(0,i.kt)("p",null,"The main ActionScript 3.0 classes for working with bitmap images are the Bitmap\nclass, which is used to display bitmap images on the screen, and the BitmapData\nclass, which is used to access and manipulate the raw image data of a bitmap."),(0,i.kt)("h2",{id:"understanding-the-bitmap-class"},"Understanding the Bitmap class"),(0,i.kt)("p",null,"As a subclass of the DisplayObject class, the Bitmap class is the main\nActionScript 3.0 class used for displaying bitmap images. These images may have\nbeen loaded via the flash.display.Loader class or created dynamically using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Bitmap()")," constructor. When loading an image from an external source, a Bitmap\nobject can only use GIF, JPEG, or PNG format images. Once instantiated, the\nBitmap instance can be considered a wrapper for a BitmapData object that needs\nto be rendered to the Stage. Because a Bitmap instance is a display object, all\nthe characteristics and functionality of display objects can be used to\nmanipulate a Bitmap instance as well. For more information about working with\ndisplay objects, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/development/display/display-programming/"},"Display programming"),"."),(0,i.kt)("h2",{id:"pixel-snapping-and-smoothing"},"Pixel snapping and smoothing"),(0,i.kt)("p",null,"In addition to the functionality common to all display objects, the Bitmap class\nprovides some additional features that are specific to bitmap images."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pixelSnapping")," property of the Bitmap class determines whether or not a\nBitmap object snaps to its nearest pixel. This property accepts one of three\nconstants defined in the PixelSnapping class: ",(0,i.kt)("inlineCode",{parentName:"p"},"ALWAYS"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AUTO"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"NEVER"),"."),(0,i.kt)("p",null,"The syntax for applying pixel snapping is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"myBitmap.pixelSnapping = PixelSnapping.ALWAYS;\n")),(0,i.kt)("p",null,"Often, when bitmap images are scaled, they become blurred and distorted. To help\nreduce this distortion, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"smoothing")," property of the BitmapData class.\nThis Boolean property, when set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", smooths, or anti-aliases, the pixels\nwithin the image when it is scaled. This gives the image a clearer and more\nnatural appearance."),(0,i.kt)("h2",{id:"understanding-the-bitmapdata-class"},"Understanding the BitmapData class"),(0,i.kt)("p",null,"The BitmapData class, which is in the flash.display package, can be likened to a\nphotographic snapshot of the pixels contained within a loaded or dynamically\ncreated bitmap image. This snapshot is represented by an array of pixel data\nwithin the object. The BitmapData class also contains a series of built-in\nmethods that are useful for creation and manipulation of pixel data."),(0,i.kt)("p",null,"To instantiate a BitmapData object, use the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var myBitmap:BitmapData = new BitmapData(width:Number, height:Number, transparent:Boolean, fillColor:uinit);\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," parameters specify the size of the bitmap. Starting\nwith AIR 3 and Flash player 11, the size limits for a BitmapData object have\nbeen removed. The maximum size of a bitmap is dependent on the operating system."),(0,i.kt)("p",null,"In AIR 1.5 and Flash Player 10, the maximum size for a BitmapData object is\n8,191 pixels in width or height, and the total number of pixels cannot exceed\n16,777,215 pixels. (So, if a BitmapData object is 8,191 pixels wide, it can only\nbe 2,048 pixels high.) In Flash Player 9 and earlier and AIR 1.1 and earlier,\nthe limitation is 2,880 pixels in height and 2,880 in width."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"transparent")," parameter specifies whether the bitmap data includes an alpha\nchannel (",(0,i.kt)("inlineCode",{parentName:"p"},"true"),") or not (",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"). The ",(0,i.kt)("inlineCode",{parentName:"p"},"fillColor")," parameter is a 32-bit color\nvalue that specifies the background color, as well as the transparency value (if\nit has been set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"). The following example creates a BitmapData object\nwith an orange background that is 50 percent transparent:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var myBitmap:BitmapData = new BitmapData(150, 150, true, 0x80FF3300);\n")),(0,i.kt)("p",null,"To render a newly created BitmapData object to the screen, assign it to or wrap\nit in a Bitmap instance. To do this, you can either pass the BitmapData object\nas a parameter of the Bitmap object's constructor, or you can assign it to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"bitmapData")," property of an existing Bitmap instance. You must also add the\nBitmap instance to the display list by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"addChild()")," or\n",(0,i.kt)("inlineCode",{parentName:"p"},"addChildAt()")," methods of the display object container that will contain the\nBitmap instance. For more information on working with the display list, see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/display/display-programming/working-with-display-objects/adding-display-objects-to-the-display-list"},"Adding display objects to the display list"),"."),(0,i.kt)("p",null,"The following example creates a BitmapData object with a red fill, and displays\nit in a Bitmap instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var myBitmapDataObject:BitmapData = new BitmapData(150, 150, false, 0xFF0000);\nvar myImage:Bitmap = new Bitmap(myBitmapDataObject);\naddChild(myImage);\n")))}c.isMDXComponent=!0}}]);