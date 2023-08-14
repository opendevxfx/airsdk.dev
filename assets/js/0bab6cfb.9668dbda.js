"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[85142],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>u});var i=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function n(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,i,r=function(e,t){if(null==e)return{};var l,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var o=i.createContext({}),p=function(e){var t=i.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):n(n({},t),e)),l},c=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(l),m=r,u=f["".concat(o,".").concat(m)]||f[m]||d[m]||a;return l?i.createElement(u,n(n({ref:t},c),{},{components:l})):i.createElement(u,n({ref:t},c))}));function u(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,n=new Array(a);n[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[f]="string"==typeof e?e:r,n[1]=s;for(var p=2;p<a;p++)n[p]=l[p];return i.createElement.apply(null,n)}return i.createElement.apply(null,l)}m.displayName="MDXCreateElement"},23189:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=l(87462),r=(l(67294),l(3905));const a={},n="Available display filters",s={unversionedId:"development/display/filtering-display-objects/available-display-filters",id:"development/display/filtering-display-objects/available-display-filters",title:"Available display filters",description:"ActionScript 3.0 includes ten filter classes that you can apply to display",source:"@site/docs/development/display/filtering-display-objects/available-display-filters.md",sourceDirName:"development/display/filtering-display-objects",slug:"/development/display/filtering-display-objects/available-display-filters",permalink:"/docs/development/display/filtering-display-objects/available-display-filters",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/filtering-display-objects/available-display-filters.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Filtering display objects",permalink:"/docs/development/display/filtering-display-objects/"},next:{title:"Basics of filtering display objects",permalink:"/docs/development/display/filtering-display-objects/basics-of-filtering-display-objects"}},o={},p=[],c={toc:p},f="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(f,(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"available-display-filters"},"Available display filters"),(0,r.kt)("p",null,"ActionScript 3.0 includes ten filter classes that you can apply to display\nobjects and BitmapData objects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bevel filter (BevelFilter class)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Blur filter (BlurFilter class)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Drop shadow filter (DropShadowFilter class)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Glow filter (GlowFilter class)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Gradient bevel filter (GradientBevelFilter class)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Gradient glow filter (GradientGlowFilter class)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Color matrix filter (ColorMatrixFilter class)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Convolution filter (ConvolutionFilter class)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Displacement map filter (DisplacementMapFilter class)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Shader filter (ShaderFilter class)"))),(0,r.kt)("p",null,"The first six filters are simple filters that can be used to create one specific\neffect, with some customization of the effect available. Those six filters can\nbe applied using ActionScript, and can also be applied to objects in Flash\nProfessional using the Filters panel. Consequently, even if you're applying\nfilters using ActionScript, if you have Flash Professional you can use the\nvisual interface to quickly try out different filters and settings to figure out\nhow to create a desired effect."),(0,r.kt)("p",null,"The final four filters are available in ActionScript only. Those filters, the\ncolor matrix filter, convolution filter, displacement map filter, and shader\nfilter, are much more flexible in the types of effects that they can be used to\ncreate. Rather than being optimized for a single effect, they provide power and\nflexibility. For example, by selecting different values for its matrix, the\nconvolution filter can be used to create effects such as blurring, embossing,\nsharpening, finding color edges, transformations, and more."),(0,r.kt)("p",null,"Each of the filters, whether simple or complex, can be customized using their\nproperties. Generally, you have two choices for setting filter properties. All\nthe filters let you set the properties by passing parameter values to the filter\nobject's constructor. Alternatively, whether or not you set the filter\nproperties by passing parameters, you can adjust the filters later by setting\nvalues for the filter object's properties. Most of the example code listings set\nthe properties directlyto make the example easier to follow. Nevertheless, you\ncould usually achieve the same result in fewer lines of code by passing the\nvalues as parameters in the filter object's constructor. For more details on the\nspecifics of each filter, its properties and its constructor parameters, see the\nlistings for the\n",(0,r.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/filters/package-detail.html"},"flash.filters package"),"\nin the\n",(0,r.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/index.html"},"ActionScript 3.0 Reference for the Adobe Flash Platform"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/development/display/filtering-display-objects/bevel-filter"},"Bevel filter"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/development/display/filtering-display-objects/blur-filter"},"Blur filter"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/development/display/filtering-display-objects/drop-shadow-filter"},"Drop shadow filter"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/development/display/filtering-display-objects/glow-filter"},"Glow filter"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/development/display/filtering-display-objects/gradient-bevel-filter"},"Gradient bevel filter"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/development/display/filtering-display-objects/gradient-glow-filter"},"Gradient glow filter"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/development/display/filtering-display-objects/example-combining-basic-filters"},"Example: Combining basic filters"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/development/display/filtering-display-objects/color-matrix-filter"},"Color matrix filter"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/development/display/filtering-display-objects/convolution-filter"},"Convolution filter"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/development/display/filtering-display-objects/displacement-map-filter"},"Displacement map filter"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/development/display/filtering-display-objects/shader-filter"},"Shader filter")))))}d.isMDXComponent=!0}}]);