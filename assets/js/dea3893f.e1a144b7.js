"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[64065],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=c(n),u=a,y=l["".concat(s,".").concat(u)]||l[u]||h[u]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[l]="string"==typeof e?e:a,i[1]=d;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1},i="Capturing keyboard input",d={unversionedId:"development/user-interaction/keyboard-input/capturing-keyboard-input",id:"development/user-interaction/keyboard-input/capturing-keyboard-input",title:"Capturing keyboard input",description:"Display objects that inherit their interaction model from the InteractiveObject",source:"@site/docs/development/user-interaction/keyboard-input/capturing-keyboard-input.md",sourceDirName:"development/user-interaction/keyboard-input",slug:"/development/user-interaction/keyboard-input/capturing-keyboard-input",permalink:"/docs/development/user-interaction/keyboard-input/capturing-keyboard-input",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/user-interaction/keyboard-input/capturing-keyboard-input.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"Keyboard input",permalink:"/docs/development/user-interaction/keyboard-input/"},next:{title:"Using the IME class",permalink:"/docs/development/user-interaction/keyboard-input/using-the-ime-class"}},s={},c=[{value:"Key codes and character codes",id:"key-codes-and-character-codes",level:2},{value:"KeyboardEvent precedence",id:"keyboardevent-precedence",level:2}],p={toc:c},l="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"capturing-keyboard-input"},"Capturing keyboard input"),(0,a.kt)("p",null,"Display objects that inherit their interaction model from the InteractiveObject\nclass can respond to keyboard events by using event listeners. For example, you\ncan place an event listener on the Stage to listen for and respond to keyboard\ninput. In the following code, an event listener captures a key press, and the\nkey name and key code properties are displayed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'function reportKeyDown(event:KeyboardEvent):void\n{\n    trace("Key Pressed: " + String.fromCharCode(event.charCode) +         " (character code: " + event.charCode + ")");\n}\nstage.addEventListener(KeyboardEvent.KEY_DOWN, reportKeyDown);\n')),(0,a.kt)("p",null,"Some keys, such as the Ctrl key, generate events even though they have no glyph\nrepresentation."),(0,a.kt)("p",null,"In the previous code example, the keyboard event listener captured keyboard\ninput for the entire Stage. You can also write an event listener for a specific\ndisplay object on the Stage; this event listener is triggered when the object\nhas the focus."),(0,a.kt)("p",null,"In the following example, keystrokes are reflected in the Output panel only when\nthe user types inside the TextField instance. Holding the Shift key down\ntemporarily changes the border color of the TextField to red."),(0,a.kt)("p",null,"This code assumes there is a TextField instance named ",(0,a.kt)("inlineCode",{parentName:"p"},"tf")," on the Stage."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'tf.border = true;\ntf.type = "input";\ntf.addEventListener(KeyboardEvent.KEY_DOWN,reportKeyDown);\ntf.addEventListener(KeyboardEvent.KEY_UP,reportKeyUp);\n\nfunction reportKeyDown(event:KeyboardEvent):void\n{\n    trace("Key Pressed: " + String.fromCharCode(event.charCode) + " (key code: " + event.keyCode + " character code: " + event.charCode + ")");\n    if (event.keyCode == Keyboard.SHIFT) tf.borderColor = 0xFF0000;\n}\n\nfunction reportKeyUp(event:KeyboardEvent):void\n{\n    trace("Key Released: " + String.fromCharCode(event.charCode) + " (key code: " + event.keyCode + " character code: " + event.charCode + ")");\n    if (event.keyCode == Keyboard.SHIFT)\n    {\n        tf.borderColor = 0x000000;\n    }\n}\n')),(0,a.kt)("p",null,"The TextField class also reports a ",(0,a.kt)("inlineCode",{parentName:"p"},"textInput")," event that you can listen for\nwhen a user enters text. For more information, see\n",(0,a.kt)("a",{parentName:"p",href:"/docs/development/text/using-the-textfield-class/capturing-text-input"},"Capturing text input"),"."),(0,a.kt)("p",null,"Note: In the AIR runtime, a keyboard event can be canceled. In the Flash Player\nruntime, a keyboard event cannot be canceled."),(0,a.kt)("h2",{id:"key-codes-and-character-codes"},"Key codes and character codes"),(0,a.kt)("p",null,"You can access the ",(0,a.kt)("inlineCode",{parentName:"p"},"keyCode")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"charCode")," properties of a keyboard event to\ndetermine what key was pressed and then trigger other actions. The ",(0,a.kt)("inlineCode",{parentName:"p"},"keyCode"),"\nproperty is a numeric value that corresponds to the value of a key on the\nkeyboard. The ",(0,a.kt)("inlineCode",{parentName:"p"},"charCode")," property is the numeric value of that key in the\ncurrent character set. (The default character set is UTF-8, which supports\nASCII.)"),(0,a.kt)("p",null,'The primary difference between the key code and character values is that a key\ncode value represents a particular key on the keyboard (the 1 on a keypad is\ndifferent than the 1 in the top row, but the key that generates "1" and the key\nthat generates "!" are the same key) and the character value represents a\nparticular character (the R and r characters are different).'),(0,a.kt)("p",null,"Note: For the mappings between keys and their character code values in ASCII,\nsee the\n",(0,a.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/ui/Keyboard.html"},"flash.ui.Keyboard"),"\nclass listing in the\n",(0,a.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/index.html"},"ActionScript 3.0 Reference for the Adobe Flash Platform"),"."),(0,a.kt)("p",null,"The mappings between keys and their key codes is dependent on the device and the\noperating system. For this reason, you should not use key mappings to trigger\nactions. Instead, you should use the predefined constant values provided by the\nKeyboard class to reference the appropriate ",(0,a.kt)("inlineCode",{parentName:"p"},"keyCode")," properties. For example,\ninstead of using the key mapping for the Shift key, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Keyboard.SHIFT"),"\nconstant (as shown in the preceding code sample)."),(0,a.kt)("h2",{id:"keyboardevent-precedence"},"KeyboardEvent precedence"),(0,a.kt)("p",null,"As with other events, the keyboard event sequence is determined by the display\nobject hierarchy and not the order in which ",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListener()")," methods are\nassigned in code."),(0,a.kt)("p",null,"For example, suppose you place a text field called ",(0,a.kt)("inlineCode",{parentName:"p"},"tf")," inside a movie clip\ncalled ",(0,a.kt)("inlineCode",{parentName:"p"},"container")," and add an event listener for a keyboard event to both\ninstances, as the following example shows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'container.addEventListener(KeyboardEvent.KEY_DOWN,reportKeyDown);\ncontainer.tf.border = true;\ncontainer.tf.type = "input";\ncontainer.tf.addEventListener(KeyboardEvent.KEY_DOWN,reportKeyDown);\n\nfunction reportKeyDown(event:KeyboardEvent):void\n{\n    trace(event.currentTarget.name + " hears key press: " + String.fromCharCode(event.charCode) + " (key code: " +         event.keyCode + " character code: " + event.charCode + ")");\n}\n')),(0,a.kt)("p",null,"Because there is a listener on both the text field and its parent container, the\n",(0,a.kt)("inlineCode",{parentName:"p"},"reportKeyDown()")," function is called twice for every keystroke inside the\nTextField. Note that for each key pressed, the text field dispatches an event\nbefore the ",(0,a.kt)("inlineCode",{parentName:"p"},"container")," movie clip dispatches an event."),(0,a.kt)("p",null,"The operating system and the web browser will process keyboard events before\nAdobe Flash Player or AIR. For example, in Microsoft Internet Explorer, pressing\nCtrl+W closes the browser window before any contained SWF file dispatches a\nkeyboard event."))}h.isMDXComponent=!0}}]);