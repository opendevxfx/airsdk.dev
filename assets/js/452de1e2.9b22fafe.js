"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[94406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=i,u=m["".concat(c,".").concat(h)]||m[h]||d[h]||a;return n?o.createElement(u,r(r({ref:t},p),{},{components:n})):o.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},80454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const a={},r="Incorporating motion tween scripts",s={unversionedId:"development/display/working-with-motion-tweens/incorporating-motion-tween-scripts",id:"development/display/working-with-motion-tweens/incorporating-motion-tween-scripts",title:"Incorporating motion tween scripts",description:"The header in the ActionScript code that you copy from Flash lists all the",source:"@site/docs/development/display/working-with-motion-tweens/incorporating-motion-tween-scripts.md",sourceDirName:"development/display/working-with-motion-tweens",slug:"/development/display/working-with-motion-tweens/incorporating-motion-tween-scripts",permalink:"/docs/development/display/working-with-motion-tweens/incorporating-motion-tween-scripts",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/working-with-motion-tweens/incorporating-motion-tween-scripts.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Describing the animation",permalink:"/docs/development/display/working-with-motion-tweens/describing-the-animation"},next:{title:"Working with inverse kinematics",permalink:"/docs/development/display/working-with-inverse-kinematics/"}},c={},l=[{value:"Motion tween classes",id:"motion-tween-classes",level:2},{value:"Motion object names",id:"motion-object-names",level:2}],p={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"incorporating-motion-tween-scripts"},"Incorporating motion tween scripts"),(0,i.kt)("p",null,"The header in the ActionScript code that you copy from Flash lists all the\nmodules required to support the motion tween."),(0,i.kt)("h2",{id:"motion-tween-classes"},"Motion tween classes"),(0,i.kt)("p",null,"The essential motion tween classes are the AnimatorFactory, MotionBase, and\nMotion classes from the ",(0,i.kt)("inlineCode",{parentName:"p"},"fl.motion")," package. You could need additional classes,\ndepending on the properties that the motion tween manipulates. For example, if\nthe motion tween transforms or rotates the display object, import the\nappropriate ",(0,i.kt)("inlineCode",{parentName:"p"},"flash.geom")," classes. If it applies filters, import the\n",(0,i.kt)("inlineCode",{parentName:"p"},"flash.filter")," classes. In ActionScript, a motion tween is an instance of the\nMotion class. The Motion class stores a keyframe animation sequence that can be\napplied to a visual object. The animation data includes position, scale,\nrotation, skew, color, filters, and easing."),(0,i.kt)("p",null,"The following ActionScript was copied from a motion tween that was created in\nFlash to animate a display object whose instance name is ",(0,i.kt)("inlineCode",{parentName:"p"},"Symbol1_2"),". It\ndeclares a variable for a MotionBase object named ",(0,i.kt)("inlineCode",{parentName:"p"},"__motion_Symbol1_2"),". The\nMotionBase class is the parent of the Motion class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var __motion_Symbol1_2:MotionBase;\n")),(0,i.kt)("p",null,"Then the script creates the Motion object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"__motion_Symbol1_2 = new Motion();\n")),(0,i.kt)("h2",{id:"motion-object-names"},"Motion object names"),(0,i.kt)("p",null,"In the previous case, Flash automatically generated the name\n",(0,i.kt)("inlineCode",{parentName:"p"},"__motion_Symbol1_2")," for the Motion object. It attached the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"__motion_"),"\nto the display object name. Thus, the automatically generated name is based on\nthe instance name of the target object of the motion tween in Flash. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"duration")," property of the Motion object indicates the total number of frames in\nthe motion tween:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"__motion_Symbol1_2.duration = 200;\n")),(0,i.kt)("p",null,"By default, Flash automatically names the display object instance whose motion\ntween is copied, if it does not already have an instance name."),(0,i.kt)("p",null,"When you reuse ActionScript created by Flash in your own animation, you can keep\nthe name that Flash automatically generates for the tween or you can substitute\na different name. If you change the tween name, make sure that you change it\nthroughout the script."),(0,i.kt)("p",null,"Alternately, in Flash you can assign a name of your choosing to the target\nobject of the motion tween. Then create the motion tween and copy the script.\nWhichever naming approach you use, make sure that each Motion object in your\nActionScript code has a unique name."))}d.isMDXComponent=!0}}]);