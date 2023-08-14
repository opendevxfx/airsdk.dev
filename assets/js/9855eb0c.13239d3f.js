"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[28502],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),p=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(a.Provider,{value:t},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,m=l["".concat(a,".").concat(d)]||l[d]||h[d]||u;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,i=new Array(u);i[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[l]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<u;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const u={sidebar_position:2},i="Touch support discovery",s={unversionedId:"development/user-interaction/touch-multitouch-and-gesture-input/touch-support-discovery",id:"development/user-interaction/touch-multitouch-and-gesture-input/touch-support-discovery",title:"Touch support discovery",description:"Use the",source:"@site/docs/development/user-interaction/touch-multitouch-and-gesture-input/touch-support-discovery.md",sourceDirName:"development/user-interaction/touch-multitouch-and-gesture-input",slug:"/development/user-interaction/touch-multitouch-and-gesture-input/touch-support-discovery",permalink:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/touch-support-discovery",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/user-interaction/touch-multitouch-and-gesture-input/touch-support-discovery.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Basics of touch input",permalink:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/basics-of-touch-input"},next:{title:"Touch event handling",permalink:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/touch-event-handling"}},a={},p=[{value:"Set the input type",id:"set-the-input-type",level:2},{value:"Test for touch input support",id:"test-for-touch-input-support",level:2}],c={toc:p},l="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"touch-support-discovery"},"Touch support discovery"),(0,r.kt)("p",null,"Use the\n",(0,r.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/ui/Multitouch.html"},"Multitouch class"),"\nproperties to set the scope of touch input your application handles. Then, test\nthe environment to ensure that support exists for the events your ActionScript\nhandles. Specifically, first establish the type of touch input for your\napplication. The options are: touch point, gesture, or none (interpret all touch\ninput as mouse clicks and use mouse event handlers, only). Then, use the\nproperties and methods of the Multitouch class to make sure that the runtime is\nin an environment that supports the touch input your application requires. Test\nthe runtime environment for support of the types of touch input (such as whether\nit can interpret gestures), and respond accordingly."),(0,r.kt)("p",null,"Note: The Multitouch class properties are static properties, and do not belong\nto instances of any class. Use them with the syntax Multitouch.property, for\nexample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var touchSupport:Boolean = Multitouch.supportsTouchEvents;\n")),(0,r.kt)("h2",{id:"set-the-input-type"},"Set the input type"),(0,r.kt)("p",null,"The Flash runtime must know the type of touch input to interpret, because a\ntouch event can have many elements or phases. If a finger simply touches a\ntouch-enabled screen, does the runtime dispatch a touch event? Or does it wait\nfor a gesture? Or does the runtime track the touch as a mouse-down event? An\napplication that supports touch input must establish the type of touch events it\nhandles for the Flash runtime. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Multitouch.inputMode")," property to\nestablish the type of touch input for the runtime. The input mode can be one of\nthree options:"),(0,r.kt)("p",null,"None",(0,r.kt)("br",{parentName:"p"}),"\n","No special handling is provided for touch events. Set:\n",(0,r.kt)("inlineCode",{parentName:"p"},"Multitouch.inputMode=MultitouchInputMode.NONE")," and use the MouseEvent class to\nhandle input."),(0,r.kt)("p",null,"Single touch points",(0,r.kt)("br",{parentName:"p"}),"\n","All touch input is interpreted, individually, and all touch points can be\ntracked and handled. Set: ",(0,r.kt)("inlineCode",{parentName:"p"},"Multitouch.inputMode=MultitouchInputMode.TOUCH_POINT"),"\nand use the TouchEvent class to handle input."),(0,r.kt)("p",null,"Gesture input",(0,r.kt)("br",{parentName:"p"}),"\n","The device or operating system interprets input as a complex form of finger\nmovement across the screen. The device or operating system collectively assigns\nthe movement to a single gesture input event. Set:\n",(0,r.kt)("inlineCode",{parentName:"p"},"Multitouch.inputMode=MultitouchInputMode.GESTURE")," and use the\nTransformGestureEvent, PressAndTapGestureEvent, or GestureEvent classes to\nhandle input."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/touch-event-handling"},"Touch event handling")," for an example that uses\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"Multitouch.inputMode")," property to set the input type before handling a\ntouch event."),(0,r.kt)("h2",{id:"test-for-touch-input-support"},"Test for touch input support"),(0,r.kt)("p",null,"Other properties of the Multitouch class provide values for fine-tuning your\napplication to the current environment's touch support. The Flash runtime\npopulates values for the number of simultaneous touch points allowed or gestures\navailable. If the runtime is in an environment that does not support the touch\nevent handling your application needs, provide the user with an alternative. For\nexample, provide mouse event handling or information about what features are\navailable, or not, in the current environment."),(0,r.kt)("p",null,"You can also use the API for keyboard, touch, and mouse support, see\n",(0,r.kt)("a",{parentName:"p",href:"/docs/development/user-interaction/basics-of-user-interaction#discovering-input-types"},"Discovering input types"),"."),(0,r.kt)("p",null,"For more information about compatibility testing, see\n",(0,r.kt)("a",{parentName:"p",href:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/troubleshooting"},"Troubleshooting"),"."))}h.isMDXComponent=!0}}]);