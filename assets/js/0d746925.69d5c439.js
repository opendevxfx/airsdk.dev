"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[56420],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(r),f=l,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,o=new Array(i);o[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:l,o[1]=a;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},48513:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(87462),l=(r(67294),r(3905));const i={},o="Blur filter",a={unversionedId:"development/display/filtering-display-objects/blur-filter",id:"development/display/filtering-display-objects/blur-filter",title:"Blur filter",description:"The BlurFilter class smears, or blurs, a display object and its contents. Blur",source:"@site/docs/development/display/filtering-display-objects/blur-filter.md",sourceDirName:"development/display/filtering-display-objects",slug:"/development/display/filtering-display-objects/blur-filter",permalink:"/docs/development/display/filtering-display-objects/blur-filter",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/filtering-display-objects/blur-filter.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Bevel filter",permalink:"/docs/development/display/filtering-display-objects/bevel-filter"},next:{title:"Color matrix filter",permalink:"/docs/development/display/filtering-display-objects/color-matrix-filter"}},s={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"blur-filter"},"Blur filter"),(0,l.kt)("p",null,"The BlurFilter class smears, or blurs, a display object and its contents. Blur\neffects are useful for giving the impression that an object is out of focus or\nfor simulating fast movement, as in a motion blur. By setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"quality"),"\nproperty of the blur filter too low, you can simulate a softly out-of-focus lens\neffect. Setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"quality")," property to high results in a smooth blur effect\nsimilar to a Gaussian blur."),(0,l.kt)("p",null,"The following example creates a circle object using the ",(0,l.kt)("inlineCode",{parentName:"p"},"drawCircle()")," method of\nthe Graphics class and applies a blur filter to it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"import flash.display.Sprite;\nimport flash.filters.BitmapFilterQuality;\nimport flash.filters.BlurFilter;\n\n// Draw a circle.\nvar redDotCutout:Sprite = new Sprite();\nredDotCutout.graphics.lineStyle();\nredDotCutout.graphics.beginFill(0xFF0000);\nredDotCutout.graphics.drawCircle(145, 90, 25);\nredDotCutout.graphics.endFill();\n\n// Add the circle to the display list.\naddChild(redDotCutout);\n\n// Apply the blur filter to the rectangle.\nvar blur:BlurFilter = new BlurFilter();\nblur.blurX = 10;\nblur.blurY = 10;\nblur.quality = BitmapFilterQuality.MEDIUM;\nredDotCutout.filters = [blur];\n")))}d.isMDXComponent=!0}}]);