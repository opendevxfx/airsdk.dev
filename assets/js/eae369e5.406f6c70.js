"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[13336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=l(n),m=r,u=h["".concat(c,".").concat(m)]||h[m]||p[m]||i;return n?a.createElement(u,s(s({ref:t},d),{},{components:n})):a.createElement(u,s({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[h]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Using the Math class with drawing methods",sidebar_position:7},s=void 0,o={unversionedId:"development/display/using-the-drawing-api/using-the-math-class-with-drawing-methods",id:"development/display/using-the-drawing-api/using-the-math-class-with-drawing-methods",title:"Using the Math class with drawing methods",description:"A Graphics object draws circles and squares, but can also draw more complex forms, particularly when the drawing methods are used in combination with the properties and methods of the Math class. The Math class contains constants of common mathematical interest, such as Math.PI (approximately 3.14159265...), a constant for the ratio of the circumference of a circle to its diameter. It also contains methods for trigonometry functions, including Math.sin() , Math.cos() , and Math.tan() among others. Drawing shapes using these methods and constants create more dynamic visual effects, particularly when used with repetition or recursion.",source:"@site/docs/development/display/using-the-drawing-api/using-the-math-class-with-drawing-methods.md",sourceDirName:"development/display/using-the-drawing-api",slug:"/development/display/using-the-drawing-api/using-the-math-class-with-drawing-methods",permalink:"/docs/development/display/using-the-drawing-api/using-the-math-class-with-drawing-methods",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/using-the-drawing-api/using-the-math-class-with-drawing-methods.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Using the Math class with drawing methods",sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Creating gradient lines and fills",permalink:"/docs/development/display/using-the-drawing-api/creating-gradient-lines-and-fills"},next:{title:"Animating with the drawing API",permalink:"/docs/development/display/using-the-drawing-api/animating-with-the-drawing-api"}},c={},l=[],d={toc:l},h="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A Graphics object draws circles and squares, but can also draw more complex forms, particularly when the drawing methods are used in combination with the properties and methods of the Math class. The Math class contains constants of common mathematical interest, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Math.PI")," (approximately 3.14159265...), a constant for the ratio of the circumference of a circle to its diameter. It also contains methods for trigonometry functions, including ",(0,r.kt)("inlineCode",{parentName:"p"},"Math.sin()")," , ",(0,r.kt)("inlineCode",{parentName:"p"},"Math.cos()")," , and ",(0,r.kt)("inlineCode",{parentName:"p"},"Math.tan()")," among others. Drawing shapes using these methods and constants create more dynamic visual effects, particularly when used with repetition or recursion."),(0,r.kt)("p",null,"Many methods of the Math class expect circular measurements in units of radians rather than degrees. Converting between these two types of units is a common use of the Math class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-actionscript"},"var degrees = 121;\nvar radians = degrees * Math.PI / 180;\ntrace(radians) // 2.111848394913139\n")),(0,r.kt)("p",null,"The following example creates a sine wave and a cosine wave, to highlight the difference between the ",(0,r.kt)("inlineCode",{parentName:"p"},"Math.sin()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Math.cos()")," methods for a given value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-actionscript"},"var sinWavePosition = 100;\nvar cosWavePosition = 200;\nvar sinWaveColor:uint = 0xFF0000;\nvar cosWaveColor:uint = 0x00FF00;\nvar waveMultiplier:Number = 10;\nvar waveStretcher:Number = 5;\n\nvar i:uint;\nfor(i = 1; i < stage.stageWidth; i++)\n{\n    var sinPosY:Number = Math.sin(i / waveStretcher) * waveMultiplier;\n    var cosPosY:Number = Math.cos(i / waveStretcher) * waveMultiplier;\n\n    graphics.beginFill(sinWaveColor);\n    graphics.drawRect(i, sinWavePosition + sinPosY, 2, 2);\n    graphics.beginFill(cosWaveColor);\n    graphics.drawRect(i, cosWavePosition + cosPosY, 2, 2);\n}\n")))}p.isMDXComponent=!0}}]);