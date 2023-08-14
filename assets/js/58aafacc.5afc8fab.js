"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[36528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=c(n),d=i,m=l["".concat(u,".").concat(d)]||l[d]||h[d]||r;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[l]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const r={sidebar_position:1},a="Basics of touch input",s={unversionedId:"development/user-interaction/touch-multitouch-and-gesture-input/basics-of-touch-input",id:"development/user-interaction/touch-multitouch-and-gesture-input/basics-of-touch-input",title:"Basics of touch input",description:"When the Flash Platform is running in an environment that supports touch input,",source:"@site/docs/development/user-interaction/touch-multitouch-and-gesture-input/basics-of-touch-input.md",sourceDirName:"development/user-interaction/touch-multitouch-and-gesture-input",slug:"/development/user-interaction/touch-multitouch-and-gesture-input/basics-of-touch-input",permalink:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/basics-of-touch-input",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/user-interaction/touch-multitouch-and-gesture-input/basics-of-touch-input.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"Touch, multitouch and gesture input",permalink:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/"},next:{title:"Touch support discovery",permalink:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/touch-support-discovery"}},u={},c=[{value:"Important concepts and terms",id:"important-concepts-and-terms",level:4},{value:"The touch input API structure",id:"the-touch-input-api-structure",level:2},{value:"Discovery",id:"discovery",level:3},{value:"Events",id:"events",level:3},{value:"Phases",id:"phases",level:3}],p={toc:c},l="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(l,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basics-of-touch-input"},"Basics of touch input"),(0,i.kt)("p",null,"When the Flash Platform is running in an environment that supports touch input,\nInteractiveObject instances can listen for touch events and call handlers.\nGenerally, you handle touch, multitouch, and gesture events as you would other\nevents in ActionScript (see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/handling-events/"},"Handling events")," for\nbasic information about event handling with ActionScript)."),(0,i.kt)("p",null,"However, for the Flash runtime to interpret a touch or gesture, the runtime must\nbe running in a hardware and software environment that supports touch or\nmultitouch input. See\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/user-interaction/basics-of-user-interaction#discovering-input-types"},"Discovering input types"),"\nfor a chart comparing different touch screen types. Additionally, if the runtime\nis running within a container application (such as a browser), then that\ncontainer passes the input to the runtime. In some cases, the current hardware\nand operating system environment support multitouch, but the browser containing\nthe Flash runtime interprets the input and does not pass it on to the runtime.\nOr, it can simply ignore the input altogether."),(0,i.kt)("p",null,"The following diagram shows the flow of input from user to runtime:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(62580).Z,width:"610",height:"117"})),(0,i.kt)("p",null,"Flow of input from user to the Flash Platform runtime"),(0,i.kt)("p",null,'Fortunately, the ActionScript API for developing touch applications includes\nclasses, methods, and properties to determine the support for touch or\nmultitouch input in the runtime environment. The API you use to determine\nsupport for touch input are the "discovery API" for touch event handling.'),(0,i.kt)("h4",{id:"important-concepts-and-terms"},"Important concepts and terms"),(0,i.kt)("p",null,"The following reference list contains important terms for writing touch\nevent-handling applications:"),(0,i.kt)("p",null,"Discovery API",(0,i.kt)("br",{parentName:"p"}),"\n","The methods and properties used to test the runtime environment for support of\ntouch events and different modes of input."),(0,i.kt)("p",null,"Touch event",(0,i.kt)("br",{parentName:"p"}),"\n","An input action performed on a touch-enabled device using a single point of\ncontact."),(0,i.kt)("p",null,"Touch point",(0,i.kt)("br",{parentName:"p"}),"\n","The point of contact for a single touch event. Even if a device does not support\ngesture input, it might support multiple simultaneous touch points."),(0,i.kt)("p",null,"Touch sequence",(0,i.kt)("br",{parentName:"p"}),"\n","The series of events representing the lifespan of a single touch. These events\ninclude one beginning, zero or more moves, and one end."),(0,i.kt)("p",null,"Multitouch event",(0,i.kt)("br",{parentName:"p"}),"\n","An input action performed on a touch-enabled device using several points of\ncontact (such as more than one finger)."),(0,i.kt)("p",null,"Gesture event",(0,i.kt)("br",{parentName:"p"}),"\n","An input action performed on a touch-enabled device tracing some complex\nmovement. For example, one gesture is touching a screen with two fingers and\nmoving them simultaneously around the perimeter of an abstract circle to\nindicate rotation."),(0,i.kt)("p",null,"Phases",(0,i.kt)("br",{parentName:"p"}),"\n","Distinct points of time in the event flow (such as begin and end)."),(0,i.kt)("p",null,"Stylus",(0,i.kt)("br",{parentName:"p"}),"\n","An instrument for interacting with a touch-enabled screen. A stylus can provide\nmore precision than the human finger. Some devices recognize only input from a\nspecific type of stylus. Devices that do recognize stylus input might not\nrecognize multiple, simultaneous points of contact or finger contact."),(0,i.kt)("p",null,"Press-and-tap",(0,i.kt)("br",{parentName:"p"}),"\n","A specific type of multitouch input gesture where the user pushes a finger\nagainst a touch-enabled device and then taps with another finger or pointing\ndevice. This gesture is often used to simulate a mouse right-click in multitouch\napplications."),(0,i.kt)("h2",{id:"the-touch-input-api-structure"},"The touch input API structure"),(0,i.kt)("p",null,"The ActionScript touch input API is designed to address the fact that touch\ninput handling depends on the hardware and software environment of the Flash\nruntime. The touch input API primarily addresses three needs of touch\napplication development: discovery, events, and phases. Coordinate these API to\nproduce a predictable and responsive experience for the user; even if the target\ndevice is unknown as you develop an application."),(0,i.kt)("h3",{id:"discovery"},"Discovery"),(0,i.kt)("p",null,"The discovery API provides the ability to test the hardware and software\nenvironment at runtime. The values populated by the runtime determine the touch\ninput available to the Flash runtime in its current context. Also, use the\ncollection of discovery properties and methods to set your application to react\nto mouse events (instead of touch events in case some touch input is not\nsupported by the environment). For more information, see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/touch-support-discovery"},"Touch support discovery"),"."),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("p",null,"ActionScript manages touch input events with event listeners and event handlers\nas it does other events. However, touch input event handling also must take into\naccount:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A touch can be interpreted in several ways by the device or operating system,\neither as a sequence of touches or, collectively, as a gesture.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A single touch to a touch-enabled device (by a finger, stylus or pointing\ndevice) always dispatches a mouse event, too. You can handle the mouse event\nwith the event types in the MouseEvent class. Or, you can design your\napplication only to respond to touch events. Or, you can design an application\nthat responds to both.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An application can respond to multiple, simultaneous touch events, and handle\neach one separately."))),(0,i.kt)("p",null,"Typically, use the discovery API to conditionally handle the events your\napplication handles, and how they are handled. Once the application knows the\nruntime environment, it can call the appropriate handler or establish the\ncorrect event object when the user interacts with the application. Or, the\napplication can indicate that specific input cannot be handled in the current\nenvironment and provide the user with an alternative or information. For more\ninformation, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/touch-event-handling"},"Touch event handling")," and\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/gesture-event-handling"},"Gesture event handling"),"."),(0,i.kt)("h3",{id:"phases"},"Phases"),(0,i.kt)("p",null,"For touch and multitouch applications, touch event objects contain properties to\ntrack the phases of user interaction. Write ActionScript to handle phases like\nthe begin, update, or end phase of user input to provide the user with feedback.\nRespond to event phases so visual objects change as the user touch and moves the\npoint of touch on a screen. Or, use the phases to track specific properties of a\ngesture, as the gesture evolves."),(0,i.kt)("p",null,"For touch point events, track how long the user rests on a specific interactive\nobject. An application can track multiple, simultaneous touch points' phases\nindividually, and handle each accordingly."),(0,i.kt)("p",null,"For a gesture, interpret specific information about the transformation of the\ngesture as it occurs. Track the coordinates of the point of contact (or several)\nas they move across the screen."))}h.isMDXComponent=!0},62580:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ig_touch_flow_popup-1b493466870f4bd2752ad414f25ebbfa.png"}}]);