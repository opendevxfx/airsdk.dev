"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[73862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},x=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),x=i,u=m["".concat(s,".").concat(x)]||m[x]||c[x]||r;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=x;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}x.displayName="MDXCreateElement"},52249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={},o="Displaying text",l={unversionedId:"development/text/using-the-textfield-class/displaying-text",id:"development/text/using-the-textfield-class/displaying-text",title:"Displaying text",description:"Although authoring tools like Adobe Flash Builder and Flash Professional provide",source:"@site/docs/development/text/using-the-textfield-class/displaying-text.md",sourceDirName:"development/text/using-the-textfield-class",slug:"/development/text/using-the-textfield-class/displaying-text",permalink:"/docs/development/text/using-the-textfield-class/displaying-text",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/text/using-the-textfield-class/displaying-text.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Capturing text input",permalink:"/docs/development/text/using-the-textfield-class/capturing-text-input"},next:{title:"Formatting text",permalink:"/docs/development/text/using-the-textfield-class/formatting-text"}},s={},p=[{value:"Types of text",id:"types-of-text",level:2},{value:"Modifying the text field contents",id:"modifying-the-text-field-contents",level:2},{value:"Displaying HTML text",id:"displaying-html-text",level:2},{value:"Using images in text fields",id:"using-images-in-text-fields",level:2},{value:"Scrolling text in a text field",id:"scrolling-text-in-a-text-field",level:2}],d={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"displaying-text"},"Displaying text"),(0,i.kt)("p",null,"Although authoring tools like Adobe Flash Builder and Flash Professional provide\nseveral options for displaying text, including text-related components or text\ntools, the simplest way to display text programmatically is through a text\nfield."),(0,i.kt)("h2",{id:"types-of-text"},"Types of text"),(0,i.kt)("p",null,"The type of text within a text field is characterized by its source:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dynamic text"),(0,i.kt)("p",{parentName:"li"},"Dynamic text includes content that is loaded from an external source, such as\na text file, an XML file, or even a remote web service.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Input text"),(0,i.kt)("p",{parentName:"li"},"Input text is any text entered by a user or dynamic text that a user can edit.\nYou can set up a style sheet to format input text, or use the\nflash.text.TextFormat class to assign properties to the text field for the\ninput content. For more information, see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/text/using-the-textfield-class/capturing-text-input"},"Capturing text input"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Static text"),(0,i.kt)("p",{parentName:"li"},"Static text is created through Flash Professional only. You cannot create a\nstatic text instance using ActionScript 3.0. However, you can use ActionScript\nclasses like StaticText and TextSnapshot to manipulate an existing static text\ninstance. For more information, see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/text/using-the-textfield-class/working-with-static-text"},"Working with static text"),"."))),(0,i.kt)("h2",{id:"modifying-the-text-field-contents"},"Modifying the text field contents"),(0,i.kt)("p",null,"You can define dynamic text by assigning a string to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"flash.text.TextField.text")," property. You assign a string directly to the\nproperty, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'myTextField.text = "Hello World";\n')),(0,i.kt)("p",null,"You can also assign the ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," property a value from a variable defined in your\nscript, as in the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'package\n{\n    import flash.display.Sprite;\n    import flash.text.*;\n\n    public class TextWithImage extends Sprite\n    {\n        private var myTextBox:TextField = new TextField();\n        private var myText:String = "Hello World";\n\n        public function TextWithImage()\n        {\n            addChild(myTextBox);\n            myTextBox.text = myText;\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Alternatively, you can assign the ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," property a value from a remote\nvariable. You have three options for loading text values from remote sources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The flash.net.URLLoader and flash.net.URLRequest classes load variables for\nthe text from a local or remote location.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"FlashVars")," attribute is embedded in the HTML page hosting the SWF file\nand can contain values for text variables.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The flash.net.SharedObject class manages persistent storage of values. For\nmore information, see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/storing-local-data/"},"Storing local data"),"."))),(0,i.kt)("h2",{id:"displaying-html-text"},"Displaying HTML text"),(0,i.kt)("p",null,"The flash.text.TextField class has an ",(0,i.kt)("inlineCode",{parentName:"p"},"htmlText")," property that you can use to\nidentify your text string as one containing HTML tags for formatting the\ncontent. As in the following example, you must assign your string value to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"htmlText")," property (not the ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," property) for Flash Player or AIR to render\nthe text as HTML:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'var myText:String = "<p>This is <b>some</b> content to <i>render</i> as <u>HTML</u> text.</p>";\nmyTextBox.htmlText = myText;\n')),(0,i.kt)("p",null,"Flash Player and AIR support a subset of HTML tags and entities for the\n",(0,i.kt)("inlineCode",{parentName:"p"},"htmlText")," property. The ",(0,i.kt)("inlineCode",{parentName:"p"},"flash.text.TextField.htmlText")," property description in\nthe ActionScript 3.0 Reference provides detailed information about the supported\nHTML tags and entities."),(0,i.kt)("p",null,"Once you designate your content using the ",(0,i.kt)("inlineCode",{parentName:"p"},"htmlText")," property, you can use style\nsheets or the ",(0,i.kt)("inlineCode",{parentName:"p"},"textformat")," tag to manage the formatting of your content. For\nmore information, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/development/text/using-the-textfield-class/formatting-text"},"Formatting text"),"."),(0,i.kt)("h2",{id:"using-images-in-text-fields"},"Using images in text fields"),(0,i.kt)("p",null,"Another advantage to displaying your content as HTML text is that you can\ninclude images in the text field. You can reference an image, local or remote,\nusing the ",(0,i.kt)("inlineCode",{parentName:"p"},"img")," tag and have it appear within the associated text field."),(0,i.kt)("p",null,"The following example creates a text field named ",(0,i.kt)("inlineCode",{parentName:"p"},"myTextBox")," and includes a JPG\nimage of an eye, stored in the same directory as the SWF file, within the\ndisplayed text:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"package\n{\n    import flash.display.Sprite;\n    import flash.text.*;\n\n    public class TextWithImage extends Sprite\n    {\n        private var myTextBox:TextField;\n        private var myText:String = \"<p>This is <b>some</b> content to <i>test</i> and <i>see</i></p><p><img src='eye.jpg' width='20' height='20'></p><p>what can be rendered.</p><p>You should see an eye image and some <u>HTML</u> text.</p>\";\n\n        public function TextWithImage()\n        {\n            myTextBox.width = 200;\n            myTextBox.height = 200;\n            myTextBox.multiline = true;\n            myTextBox.wordWrap = true;\n            myTextBox.border = true;\n\n            addChild(myTextBox);\n            myTextBox.htmlText = myText;\n        }\n    }\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"img")," tag supports JPEG, GIF, PNG, and SWF files."),(0,i.kt)("h2",{id:"scrolling-text-in-a-text-field"},"Scrolling text in a text field"),(0,i.kt)("p",null,"In many cases, your text can be longer than the text field displaying the text.\nOr you may have an input field that allows a user to input more text than can be\ndisplayed at one time. You can use the scroll-related properties of the\nflash.text.TextField class to manage lengthy content, either vertically or\nhorizontally."),(0,i.kt)("p",null,"The scroll-related properties include ",(0,i.kt)("inlineCode",{parentName:"p"},"TextField.scrollV"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TextField.scrollH"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"maxScrollV")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"maxScrollH"),". Use these properties to respond to events,\nlike a mouse click or a keypress."),(0,i.kt)("p",null,"The following example creates a text field that is a set size and contains more\ntext than the field can display at one time. As the user clicks the text field,\nthe text scrolls vertically."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'package\n{\n    import flash.display.Sprite;\n    import flash.text.*;\n    import flash.events.MouseEvent;\n\n    public class TextScrollExample extends Sprite\n    {\n        private var myTextBox:TextField = new TextField();\n        private var myText:String = "Hello world and welcome to the show. It\'s really nice to meet you. Take your coat off and stay a while. OK, show is over. Hope you had fun. You can go home now. Don\'t forget to tip your waiter. There are mints in the bowl by the door. Thank you. Please come again.";\n\n        public function TextScrollExample()\n        {\n            myTextBox.text = myText;\n            myTextBox.width = 200;\n            myTextBox.height = 50;\n            myTextBox.multiline = true;\n            myTextBox.wordWrap = true;\n            myTextBox.background = true;\n            myTextBox.border = true;\n\n            var format:TextFormat = new TextFormat();\n            format.font = "Verdana";\n            format.color = 0xFF0000;\n            format.size = 10;\n\n            myTextBox.defaultTextFormat = format;\n            addChild(myTextBox);\n            myTextBox.addEventListener(MouseEvent.MOUSE_DOWN, mouseDownScroll);\n        }\n\n        public function mouseDownScroll(event:MouseEvent):void\n        {\n            myTextBox.scrollV++;\n        }\n    }\n}\n')))}c.isMDXComponent=!0}}]);