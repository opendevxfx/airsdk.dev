"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[66753],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=a.createContext({}),l=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},g=function(e){var n=l(e.components);return a.createElement(r.Provider,{value:n},e.children)},m="mdxType",A={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,g=d(e,["components","mdxType","originalType","parentName"]),m=l(t),c=i,u=m["".concat(r,".").concat(c)]||m[c]||A[c]||o;return t?a.createElement(u,s(s({ref:n},g),{},{components:t})):a.createElement(u,s({ref:n},g))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=c;var d={};for(var r in n)hasOwnProperty.call(n,r)&&(d[r]=n[r]);d.originalType=e,d[m]="string"==typeof e?e:i,s[1]=d;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},56158:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>A,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var a=t(87462),i=(t(67294),t(3905));const o={sidebar_position:4},s="Working with embedded sounds",d={unversionedId:"development/rich-media-content/working-with-sound/working-with-embedded-sounds",id:"development/rich-media-content/working-with-sound/working-with-embedded-sounds",title:"Working with embedded sounds",description:"Using embedded sounds, instead of loading sound from an external file, is most",source:"@site/docs/development/rich-media-content/working-with-sound/working-with-embedded-sounds.md",sourceDirName:"development/rich-media-content/working-with-sound",slug:"/development/rich-media-content/working-with-sound/working-with-embedded-sounds",permalink:"/docs/development/rich-media-content/working-with-sound/working-with-embedded-sounds",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/rich-media-content/working-with-sound/working-with-embedded-sounds.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"mainSidebar",previous:{title:"Loading external sound files",permalink:"/docs/development/rich-media-content/working-with-sound/loading-external-sound-files"},next:{title:"Working with streaming sound files",permalink:"/docs/development/rich-media-content/working-with-sound/working-with-streaming-sound-files"}},r={},l=[{value:"Using an embedded sound file in Flash",id:"using-an-embedded-sound-file-in-flash",level:2},{value:"To embed a sound file using the Flash authoring tool:",id:"to-embed-a-sound-file-using-the-flash-authoring-tool",level:4},{value:"Using an embedded sound file in Flex",id:"using-an-embedded-sound-file-in-flex",level:2}],g={toc:l},m="wrapper";function A(e){let{components:n,...o}=e;return(0,i.kt)(m,(0,a.Z)({},g,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"working-with-embedded-sounds"},"Working with embedded sounds"),(0,i.kt)("p",null,"Using embedded sounds, instead of loading sound from an external file, is most\nuseful for small sounds that are used as indicators within your application's\nuser interface, such as sounds that play when buttons are clicked."),(0,i.kt)("p",null,"When you embed a sound file in your application, the size of the resulting SWF\nfile increases by the size of the sound file. In other words, embedding large\nsound files in your application can increase the size of your SWF file to an\nundesirable size."),(0,i.kt)("p",null,"The exact method of embedding a sound file into your application's SWF file\nvaries according to your development environment."),(0,i.kt)("h2",{id:"using-an-embedded-sound-file-in-flash"},"Using an embedded sound file in Flash"),(0,i.kt)("p",null,'The Flash authoring tool lets you import sounds in a number of sound formats and\nstore them as symbols in the Library. You can then assign them to frames in the\ntimeline or to the frames of a button state, use them with Behaviors, or use\nthem directly in ActionScript code. This section describes how to use embedded\nsounds in ActionScript code with the Flash authoring tool. For information about\nthe other ways to use embedded sounds in Flash, see "Importing Sounds" in ',(0,i.kt)("em",{parentName:"p"},"Using\nFlash"),"."),(0,i.kt)("h4",{id:"to-embed-a-sound-file-using-the-flash-authoring-tool"},"To embed a sound file using the Flash authoring tool:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select File\xa0",">"," Import\xa0",">"," Import to Library, and then select a sound file and\nimport it.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Right-click the name of the imported file in the Library panel, and select\nProperties. Click the Export for ActionScript checkbox.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'In the Class field, enter a name to use when referring to this embedded\nsound in ActionScript. By default, it will use the name of the sound file in\nthis field. If the filename includes a period, as in the name\n"DrumSound.mp3", you must change it to something like "DrumSound";\nActionScript does not allow a period character in a class name. The Base\nClass field should still show flash.media.Sound.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click OK. You might see a dialog box saying that a definition for this class\ncould not be found in the classpath. Click OK and continue. If you entered a\nclass name that doesn't match the name of any of the classes in your\napplication's classpath, a new class that inherits from the\nflash.media.Sound class is automatically generated for you.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To use the embedded sound, you reference the class name for that sound in\nActionScript. For example, the following code starts by creating a new\ninstance of the automatically generated DrumSound class:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"var drum:DrumSound = new DrumSound();\nvar channel:SoundChannel = drum.play();\n")),(0,i.kt)("p",{parentName:"li"},"DrumSound is a subclass of the flash.media.Sound class so it inherits the\nSound class's methods and properties, including the ",(0,i.kt)("inlineCode",{parentName:"p"},"play()")," method as shown\nabove."))),(0,i.kt)("h2",{id:"using-an-embedded-sound-file-in-flex"},"Using an embedded sound file in Flex"),(0,i.kt)("p",null,"There are many ways to embed sound assets in a Flex application, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"[Embed]")," metadata tag in a script")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Embed")," directive in MXML to assign an embedded asset as a property\nof a component like a Button or a SoundEffect.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Embed")," directive within a CSS file"))),(0,i.kt)("p",null,"This section describes the first option: how to embed sounds in ActionScript\ncode within a Flex application using the ",(0,i.kt)("inlineCode",{parentName:"p"},"[Embed]")," metadata tag."),(0,i.kt)("p",null,"To embed an asset in ActionScript code, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"[Embed]")," metadata tag."),(0,i.kt)("p",null,"Place the sound file in the main source folder or another folder that is in your\nproject's build path. When the compiler encounters an Embed metadata tag, it\ncreates the embedded asset class for you. You can access the class through a\nvariable of data type Class that you declare immediately after the ",(0,i.kt)("inlineCode",{parentName:"p"},"[Embed]"),"\nmetadata tag."),(0,i.kt)("p",null,"The following code embeds a sound named smallSound.mp3 and uses a variable named\n",(0,i.kt)("inlineCode",{parentName:"p"},"soundClass")," to store a reference to the embedded asset class associated with\nthat sound. The code then creates an instance of the embedded asset class, casts\nit as an instance of the Sound class, and calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"play()")," method on that\ninstance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'package\n{\n    import flash.display.Sprite;\n    import flash.media.Sound;\n    import flash.media.SoundChannel;\n\n    public class EmbeddedSoundExample extends Sprite\n    {\n        [Embed(source="smallSound.mp3")]\n        public var soundClass:Class;\n\n        public function EmbeddedSoundExample()\n        {\n            var smallSound:Sound = new soundClass() as Sound;\n            smallSound.play();\n        }\n    }\n}\n')),(0,i.kt)("p",null,'To use the embedded sound to set a property of a Flex component, it should be\ncast as an instance of the mx.core.SoundAsset class instead of as an instance of\nthe Sound class. For a similar example that uses the SoundAsset class see\n"Embedded asset classes" in Learning ActionScript 3.0.'),(0,i.kt)("p",null,"More Help topics"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(72004).Z,width:"16",height:"16"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20150313235357/https://help.adobe.com/en_US/Flex/4.0/UsingSDK/WS2db454920e96a9e51e63e3d11c0bf69084-7fce.html"},"Embedding assets")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(63282).Z,width:"16",height:"16"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20150211003723/http://help.adobe.com/en_US/as3/learn/WS5b3ccc516d4fbf351e63e3d118a9b90204-7f36.html#WS5b3ccc516d4fbf351e63e3d118a9b90204-7f2e"},"Embedded asset classes")))}A.isMDXComponent=!0},63282:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTM5jWRgMAAAAWdEVYdENyZWF0aW9uIFRpbWUAMTAvMjEvMDlp12tfAAABx0lEQVQ4jY2TT0tbQRTFf+/5ggYKTXHhot0UitTG0G0LESxI6SaI62z7EdyI30D8HvoJVEqhu+zsSgpKazdFKC1ogkne33u6yLyXSbpx4Gxm5p57zpk7wdetLT3b22N5cxMzI8/zB6HVagUAwaelJWXA23qdBSAsIQEgwBwKBwOKLMsKIEqATKoOQiBguswnkf4ji1KJDEglgrLYdfcJBhLfzfhtxrtarSILEyAFEiD2MHaIgT8SV80m60dHfBwOSaTqfpRI5E7BpPnUe6njptnkw8kJi40Gw7MzYs9OlAIZEHuyfel9idcHByw2GnzZ3qbe62ESchlMLEjEHsbSRKZE1m7ztN0m7fd5ubtLvro6c7eyEHvdSy13ZrzodgFILy54FIbUwpCBpzBKgNyx+cWXZjze2GC92+W21+Pbzg4C7uJ48uzORpS4GYjnwnt/fMxap0M+GPBjf5+b0aiah9K/yhBzidjrLmCt0+Hv6Sk/Dw+5Pj8ndcnPD9U0A3dYEnxeWWFUFNwmCalZpcwfbZMmGRQS47kAr+7vp0WOfIbAKVhYhksFwasV6UlmZpmZpQ6Zh9ysmNlzyst/8xx4w8PXEPgFXP8DtA6DGIrzx1wAAAAASUVORK5CYII="},72004:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAsSAAALEgHS3X78AAAAFHRFWHRDcmVhdGlvbiBUaW1lADQvNS8wN+R1htQAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzOY1kYDAAAEEXRFWHRYTUw6Y29tLmFkb2JlLnhtcAA8P3hwYWNrZXQgYmVnaW49IiAgICIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA0LjEtYzAzNCA0Ni4yNzI5NzYsIFNhdCBKYW4gMjcgMjAwNyAyMjoxMTo0MSAgICAgICAgIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eGFwPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHhhcDpDcmVhdG9yVG9vbD5BZG9iZSBGaXJld29ya3MgQ1MzPC94YXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4YXA6Q3JlYXRlRGF0ZT4yMDA3LTA0LTA1VDIwOjA0OjM2WjwveGFwOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4YXA6TW9kaWZ5RGF0ZT4yMDA3LTA0LTA1VDIwOjUyOjA2WjwveGFwOk1vZGlmeURhdGU+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICCdW47vAAABbUlEQVQokY1SsYoCMRCdZBdRK2tLK8F/sNdKLCxUsPED7PcvBEsRhAUbG62s7KwFsfAn1EpnJpvkitHg7R3cvSJMJvMmb/Kier1eFEVRFGmtAcA5Z6211mYfCNv9fh9/QrLOOfgO/8bj8Yi996FrCCT+CUSMpaUxZrVaSb/T6ZQkSWDmtMXMrJSy1nrvl8tlmqYAoLWW28IAsgKAJiJERETpYYzJsqzdbidJgoiDwaDT6RhjmNkYAwAaEYXjnBsOh7vdrl6vbzabRqPR7/e73e56vZZqZgaAmIgAQOTO5/PFYiEK0zQdj8fb7fZ6vQJAeD0teohIVDIzERUKhVarNZvNms1msVgkIsm/ZgiS5F5mHo1Gt9ttOp2ez+fJZEJvAICq1WrBYKWU2JTzIWQul0uMiPL8chCQs0wIr6G995/+h+oQhGoAiBHxV0JYc/8qPh6Ph8MB/oFqtVoul5X3/vl83u/3PwmlUqlSqXwB0IXy0gbtBNUAAAAASUVORK5CYII="}}]);