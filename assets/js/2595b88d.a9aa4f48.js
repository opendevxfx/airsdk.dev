"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[26055],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=i,u=c["".concat(s,".").concat(f)]||c[f]||g[f]||a;return n?r.createElement(u,o(o({ref:t},d),{},{components:n})):r.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},56049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={},o="Gradient glow filter",l={unversionedId:"development/display/filtering-display-objects/gradient-glow-filter",id:"development/display/filtering-display-objects/gradient-glow-filter",title:"Gradient glow filter",description:"The GradientGlowFilter class lets you apply an enhanced glow effect to display",source:"@site/docs/development/display/filtering-display-objects/gradient-glow-filter.md",sourceDirName:"development/display/filtering-display-objects",slug:"/development/display/filtering-display-objects/gradient-glow-filter",permalink:"/docs/development/display/filtering-display-objects/gradient-glow-filter",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/filtering-display-objects/gradient-glow-filter.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Gradient bevel filter",permalink:"/docs/development/display/filtering-display-objects/gradient-bevel-filter"},next:{title:"Shader filter",permalink:"/docs/development/display/filtering-display-objects/shader-filter"}},s={},p=[],d={toc:p},c="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gradient-glow-filter"},"Gradient glow filter"),(0,i.kt)("p",null,"The GradientGlowFilter class lets you apply an enhanced glow effect to display\nobjects or BitmapData objects. The effect gives you greater color control of the\nglow, and in turn produces a more realistic glow effect. Additionally, the\ngradient glow filter allows you to apply a gradient glow to the inner, outer, or\nupper edges of an object."),(0,i.kt)("p",null,"The following example draws a circle on the Stage, and applies a gradient glow\nfilter to it. As you move the mouse further to the right and down, the amount of\nblur increases in the horizontal and vertical directions respectively. In\naddition, any time you click on the Stage, the strength of the blur increases."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import flash.events.MouseEvent;\nimport flash.filters.BitmapFilterQuality;\nimport flash.filters.BitmapFilterType;\nimport flash.filters.GradientGlowFilter;\n\n// Create a new Shape instance.\nvar shape:Shape = new Shape();\n\n// Draw the shape.\nshape.graphics.beginFill(0xFF0000, 100);\nshape.graphics.moveTo(0, 0);\nshape.graphics.lineTo(100, 0);\nshape.graphics.lineTo(100, 100);\nshape.graphics.lineTo(0, 100);\nshape.graphics.lineTo(0, 0);\nshape.graphics.endFill();\n\n// Position the shape on the Stage.\naddChild(shape);\nshape.x = 100;\nshape.y = 100;\n\n// Define a gradient glow.\nvar gradientGlow:GradientGlowFilter = new GradientGlowFilter();\ngradientGlow.distance = 0;\ngradientGlow.angle = 45;\ngradientGlow.colors = [0x000000, 0xFF0000];\ngradientGlow.alphas = [0, 1];\ngradientGlow.ratios = [0, 255];\ngradientGlow.blurX = 10;\ngradientGlow.blurY = 10;\ngradientGlow.strength = 2;\ngradientGlow.quality = BitmapFilterQuality.HIGH;\ngradientGlow.type = BitmapFilterType.OUTER;\n\n// Define functions to listen for two events.\nfunction onClick(event:MouseEvent):void\n{\n    gradientGlow.strength++;\n    shape.filters = [gradientGlow];\n}\n\nfunction onMouseMove(event:MouseEvent):void\n{\n    gradientGlow.blurX = (stage.mouseX / stage.stageWidth) * 255;\n    gradientGlow.blurY = (stage.mouseY / stage.stageHeight) * 255;\n    shape.filters = [gradientGlow];\n}\nstage.addEventListener(MouseEvent.CLICK, onClick);\nstage.addEventListener(MouseEvent.MOUSE_MOVE, onMouseMove);\n")))}g.isMDXComponent=!0}}]);