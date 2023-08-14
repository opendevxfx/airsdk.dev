"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[38024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>f});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=l,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?i.createElement(f,r(r({ref:t},h),{},{components:n})):i.createElement(f,r({ref:t},h))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,r[1]=o;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(87462),l=(n(67294),n(3905));const a={},r="TextField Example: Newspaper-style text formatting",o={unversionedId:"development/text/using-the-textfield-class/textfield-example-newspaper-style-text-formatting",id:"development/text/using-the-textfield-class/textfield-example-newspaper-style-text-formatting",title:"TextField Example: Newspaper-style text formatting",description:"The News Layout example formats text to look something like a story in a printed",source:"@site/docs/development/text/using-the-textfield-class/textfield-example-newspaper-style-text-formatting.md",sourceDirName:"development/text/using-the-textfield-class",slug:"/development/text/using-the-textfield-class/textfield-example-newspaper-style-text-formatting",permalink:"/docs/development/text/using-the-textfield-class/textfield-example-newspaper-style-text-formatting",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/text/using-the-textfield-class/textfield-example-newspaper-style-text-formatting.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Selecting and manipulating text",permalink:"/docs/development/text/using-the-textfield-class/selecting-and-manipulating-text"},next:{title:"Working with static text",permalink:"/docs/development/text/using-the-textfield-class/working-with-static-text"}},s={},d=[{value:"Reading the external CSS file",id:"reading-the-external-css-file",level:2},{value:"Arranging story elements on the page",id:"arranging-story-elements-on-the-page",level:2},{value:"Altering font size to fit the field size",id:"altering-font-size-to-fit-the-field-size",level:2},{value:"Splitting text across multiple columns",id:"splitting-text-across-multiple-columns",level:2}],h={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"textfield-example-newspaper-style-text-formatting"},"TextField Example: Newspaper-style text formatting"),(0,l.kt)("p",null,"The News Layout example formats text to look something like a story in a printed\nnewspaper. The input text can contain a headline, a subtitle, and the body of\nthe story. Given a display width and height, this News Layout example formats\nthe headline and the subtitle to take the full width of the display area. The\nstory text is distributed across two or more columns."),(0,l.kt)("p",null,"This example illustrates the following ActionScript programming techniques:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Extending the TextField class")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Loading and applying an external CSS file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Converting CSS styles into TextFormat objects")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Using the TextLineMetrics class to get information about text display size"))),(0,l.kt)("p",null,"To get the application files for this sample, see\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/joshtynjala/flash-platform-as3-dev-guide-examples/releases/tag/original"},(0,l.kt)("em",{parentName:"a"},"FlashPlatformAS3DevGuideExamples.zip")),".\nThe News Layout application files can be found in the folder Samples/NewsLayout.\nThe application consists of the following files:"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,(0,l.kt)("p",null,"File")),(0,l.kt)("th",null,(0,l.kt)("p",null,"Description")))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"NewsLayout.mxml"),(0,l.kt)("p",null,"or"),(0,l.kt)("p",null,"NewsLayout.fla")),(0,l.kt)("td",null,(0,l.kt)("p",null,"The user interface for the application for Flex (MXML) or Flash (FLA)."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"com/example/programmingas3/newslayout/StoryLayoutComponent.as")),(0,l.kt)("td",null,(0,l.kt)("p",null,"A Flex UIComponent class that places the StoryLayout instance."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"com/example/programmingas3/newslayout/StoryLayout.as")),(0,l.kt)("td",null,(0,l.kt)("p",null,"The main ActionScript class that arranges all the components of a news story for display."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"com/example/programmingas3/newslayout/FormattedTextField.as")),(0,l.kt)("td",null,(0,l.kt)("p",null,"A subclass of the TextField class that manages its own TextFormat object."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"com/example/programmingas3/newslayout/HeadlineTextField.as")),(0,l.kt)("td",null,(0,l.kt)("p",null,"A subclass of the FormattedTextField class that adjusts font sizes to fit a desired width."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"com/example/programmingas3/newslayout/MultiColumnTextField.as")),(0,l.kt)("td",null,(0,l.kt)("p",null,"An ActionScript class that splits text across two or more columns."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"story.css")),(0,l.kt)("td",null,(0,l.kt)("p",null,"A CSS file that defines text styles for the layout."))))),(0,l.kt)("h2",{id:"reading-the-external-css-file"},"Reading the external CSS file"),(0,l.kt)("p",null,"The News Layout application starts by reading story text from a local XML file.\nThen it reads an external CSS file that provides the formatting information for\nthe headline, subtitle, and main text."),(0,l.kt)("p",null,"The CSS file defines three styles, a standard paragraph style for the story, and\nthe h1 and h2 styles for the headline and subtitle respectively."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'p {\n    font-family: Georgia, "Times New Roman", Times, _serif;\n    font-size: 12;\n    leading: 2;\n    text-align: justify;\n    indent: 24;\n}\n\nh1 {\n    font-family: Verdana, Arial, Helvetica, _sans;\n    font-size: 20;\n    font-weight: bold;\n    color: #000099;\n    text-align: left;\n}\n\nh2 {\n    font-family: Verdana, Arial, Helvetica, _sans;\n    font-size: 16;\n    font-weight: normal;\n    text-align: left;\n}\n')),(0,l.kt)("p",null,"The technique used to read the external CSS file is the same as the technique\ndescribed in\n",(0,l.kt)("a",{parentName:"p",href:"/docs/development/text/using-the-textfield-class/formatting-text#loading-an-external-css-file"},"Loading an external CSS file"),".\nWhen the CSS file has been loaded the application executes the\n",(0,l.kt)("inlineCode",{parentName:"p"},"onCSSFileLoaded()")," method, shown below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'public function onCSSFileLoaded(event:Event):void\n{\n    this.sheet = new StyleSheet();\n    this.sheet.parseCSS(loader.data);\n\n    h1Format = getTextStyle("h1", this.sheet);\n    if (h1Format == null)\n    {\n        h1Format = getDefaultHeadFormat();\n    }\n    h2Format = getTextStyle("h2", this.sheet);\n    if (h2Format == null)\n    {\n        h2Format = getDefaultHeadFormat();\n        h2Format.size = 16;\n    }\n    pFormat = getTextStyle("p", this.sheet);\n    if (pFormat == null)\n    {\n        pFormat = getDefaultTextFormat();\n        pFormat.size = 12;\n    }\n    displayText();\n}\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"onCSSFileLoaded()")," method creates a StyleSheet object and has it parse the\ninput CSS data. The main text for the story is displayed in a\nMultiColumnTextField object, which can use a StyleSheet object directly.\nHowever, the headline fields use the HeadlineTextField class, which uses a\nTextFormat object for its formatting."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"onCSSFileLoaded()")," method calls the ",(0,l.kt)("inlineCode",{parentName:"p"},"getTextStyle()")," method twice to\nconvert a CSS style declaration into a TextFormat object for use with each of\nthe two HeadlineTextField objects."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'public function getTextStyle(styleName:String, ss:StyleSheet):TextFormat\n{\n    var format:TextFormat = null;\n\n    var style:Object = ss.getStyle(styleName);\n    if (style != null)\n    {\n        var colorStr:String = style.color;\n        if (colorStr != null && colorStr.indexOf("#") == 0)\n        {\n            style.color = colorStr.substr(1);\n        }\n        format = new TextFormat(style.fontFamily,\n                        style.fontSize,\n                        style.color,\n                        (style.fontWeight == "bold"),\n                        (style.fontStyle == "italic"),\n                        (style.textDecoration == "underline"),\n                        style.url,\n                        style.target,\n                        style.textAlign,\n                        style.marginLeft,\n                        style.marginRight,\n                        style.indent,\n                        style.leading);\n\n        if (style.hasOwnProperty("letterSpacing"))\n        {\n            format.letterSpacing = style.letterSpacing;\n        }\n    }\n    return format;\n}\n')),(0,l.kt)("p",null,"The property names and the meaning of the property values differ between CSS\nstyle declarations and TextFormat objects. The ",(0,l.kt)("inlineCode",{parentName:"p"},"getTextStyle()")," method\ntranslates CSS property values into the values expected by the TextFormat\nobject."),(0,l.kt)("h2",{id:"arranging-story-elements-on-the-page"},"Arranging story elements on the page"),(0,l.kt)("p",null,"The StoryLayout class formats and lays out the headline, subtitle, and main text\nfields into a newspaper-style arrangement. The ",(0,l.kt)("inlineCode",{parentName:"p"},"displayText()")," method initially\ncreates and places the various fields."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"public function displayText():void\n{\n    headlineTxt = new HeadlineTextField(h1Format);\n    headlineTxt.wordWrap = true;\n    headlineTxt.x = this.paddingLeft;\n    headlineTxt.y = this.paddingTop;\n    headlineTxt.width = this.preferredWidth;\n    this.addChild(headlineTxt);\n\n    headlineTxt.fitText(this.headline, 1, true);\n\n    subtitleTxt = new HeadlineTextField(h2Format);\n    subtitleTxt.wordWrap = true;\n    subtitleTxt.x = this.paddingLeft;\n    subtitleTxt.y = headlineTxt.y + headlineTxt.height;\n    subtitleTxt.width = this.preferredWidth;\n    this.addChild(subtitleTxt);\n\n    subtitleTxt.fitText(this.subtitle, 2, false);\n\n    storyTxt = new MultiColumnText(this.numColumns, 20,\n                        this.preferredWidth, 400, true, this.pFormat);\n    storyTxt.x = this.paddingLeft;\n    storyTxt.y = subtitleTxt.y + subtitleTxt.height + 10;\n    this.addChild(storyTxt);\n\n    storyTxt.text = this.content;\n    ...\n")),(0,l.kt)("p",null,"Each field is placed below the previous field by setting its ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," property to\nequal the ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," property of the previous field plus its height. This dynamic\nplacement calculation is needed because HeadlineTextField objects and\nMultiColumnTextField objects can change their height to fit their contents."),(0,l.kt)("h2",{id:"altering-font-size-to-fit-the-field-size"},"Altering font size to fit the field size"),(0,l.kt)("p",null,"Given a width in pixels and a maximum number of lines to display, the\nHeadlineTextField alters the font size to make the text fit the field. If the\ntext is short, the font size is large, creating a tabloid-style headline. If the\ntext is long, the font size is smaller."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"HeadlineTextField.fitText()")," method shown below does the font sizing work:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"public function fitText(msg:String, maxLines:uint = 1, toUpper:Boolean = false, targetWidth:Number = -1):uint\n{\n    this.text = toUpper ? msg.toUpperCase() : msg;\n\n    if (targetWidth == -1)\n    {\n        targetWidth = this.width;\n    }\n\n    var pixelsPerChar:Number = targetWidth / msg.length;\n\n    var pointSize:Number = Math.min(MAX_POINT_SIZE, Math.round(pixelsPerChar * 1.8 * maxLines));\n\n    if (pointSize < 6)\n    {\n        // the point size is too small\n        return pointSize;\n    }\n\n    this.changeSize(pointSize);\n\n    if (this.numLines > maxLines)\n    {\n        return shrinkText(--pointSize, maxLines);\n    }\n    else\n    {\n        return growText(pointSize, maxLines);\n    }\n}\n\npublic function growText(pointSize:Number, maxLines:uint = 1):Number\n{\n    if (pointSize >= MAX_POINT_SIZE)\n    {\n        return pointSize;\n    }\n\n    this.changeSize(pointSize + 1);\n\n    if (this.numLines > maxLines)\n    {\n        // set it back to the last size\n        this.changeSize(pointSize);\n        return pointSize;\n    }\n    else\n    {\n        return growText(pointSize + 1, maxLines);\n    }\n}\n\npublic function shrinkText(pointSize:Number, maxLines:uint=1):Number\n{\n    if (pointSize <= MIN_POINT_SIZE)\n    {\n        return pointSize;\n    }\n\n    this.changeSize(pointSize);\n\n    if (this.numLines > maxLines)\n    {\n        return shrinkText(pointSize - 1, maxLines);\n    }\n    else\n    {\n        return pointSize;\n    }\n}\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"HeadlineTextField.fitText()")," method uses a simple recursive technique to\nsize the font. First it guesses an average number of pixels per character in the\ntext and from there calculates a starting point size. Then it changes the font\nsize and checks whether the text has word wrapped to create more than the\nmaximum number of text lines. If there are too many lines it calls the\n",(0,l.kt)("inlineCode",{parentName:"p"},"shrinkText()")," method to decrease the font size and try again. If there are not\ntoo many lines it calls the ",(0,l.kt)("inlineCode",{parentName:"p"},"growText()")," method to increase the font size and\ntry again. The process stops at the point where incrementing the font size by\none more point would create too many lines."),(0,l.kt)("h2",{id:"splitting-text-across-multiple-columns"},"Splitting text across multiple columns"),(0,l.kt)("p",null,"The MultiColumnTextField class spreads text among multiple TextField objects\nwhich are then arranged like newspaper columns."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"MultiColumnTextField()")," constructor first creates an array of TextField\nobjects, one for each column, as shown here:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"for (var i:int = 0; i < cols; i++)\n{\n    var field:TextField = new TextField();\n    field.multiline = true;\n    field.autoSize = TextFieldAutoSize.NONE;\n    field.wordWrap = true;\n    field.width = this.colWidth;\n    field.setTextFormat(this.format);\n    this.fieldArray.push(field);\n    this.addChild(field);\n}\n")),(0,l.kt)("p",null,"Each TextField object is added to the array and added to the display list with\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"addChild()")," method."),(0,l.kt)("p",null,"Whenever the StoryLayout ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," property or ",(0,l.kt)("inlineCode",{parentName:"p"},"styleSheet")," property changes, it\ncalls the ",(0,l.kt)("inlineCode",{parentName:"p"},"layoutColumns()")," method to redisplay the text. The ",(0,l.kt)("inlineCode",{parentName:"p"},"layoutColumns()"),"\nmethod calls the ",(0,l.kt)("inlineCode",{parentName:"p"},"getOptimalHeight()")," method, to figure out the correct pixel\nheight that is needed to fit all of the text within the given layout width."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'public function getOptimalHeight(str:String):int\n{\n    if (field.text == "" || field.text == null)\n    {\n        return this.preferredHeight;\n    }\n    else\n    {\n        this.linesPerCol = Math.ceil(field.numLines / this.numColumns);\n\n        var metrics:TextLineMetrics = field.getLineMetrics(0);\n        this.lineHeight = metrics.height;\n        var prefHeight:int = linesPerCol * this.lineHeight;\n\n        return prefHeight + 4;\n    }\n}\n')),(0,l.kt)("p",null,"First the ",(0,l.kt)("inlineCode",{parentName:"p"},"getOptimalHeight()")," method calculates the width of each column. Then\nit sets the width and ",(0,l.kt)("inlineCode",{parentName:"p"},"htmlText")," property of the first TextField object in the\narray. The ",(0,l.kt)("inlineCode",{parentName:"p"},"getOptimalHeight()")," method uses that first TextField object to\ndiscover the total number of word-wrapped lines in the text, and from that it\nidentifies how many lines should be in each column. Next it calls the\n",(0,l.kt)("inlineCode",{parentName:"p"},"TextField.getLineMetrics()")," method to retrieve a TextLineMetrics object that\ncontains details about size of the text in the first line. The\n",(0,l.kt)("inlineCode",{parentName:"p"},"TextLineMetrics.height")," property represents the full height of a line of text,\nin pixels, including the ascent, descent, and leading. The optimal height for\nthe MultiColumnTextField object is then the line height multiplied by the number\nof lines per column, plus 4 to account for the two-pixel border at the top and\nthe bottom of a TextField object."),(0,l.kt)("p",null,"Here is the code for the full ",(0,l.kt)("inlineCode",{parentName:"p"},"layoutColumns()")," method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'public function layoutColumns():void\n{\n    if (this._text == "" || this._text == null)\n    {\n        return;\n    }\n\n    var field:TextField = fieldArray[0] as TextField;\n    field.text = this._text;\n    field.setTextFormat(this.format);\n\n    this.preferredHeight = this.getOptimalHeight(field);\n\n    var remainder:String = this._text;\n    var fieldText:String = "";\n    var lastLineEndedPara:Boolean = true;\n\n    var indent:Number = this.format.indent as Number;\n\n    for (var i:int = 0; i < fieldArray.length; i++)\n    {\n        field = this.fieldArray[i] as TextField;\n\n        field.height = this.preferredHeight;\n        field.text = remainder;\n\n        field.setTextFormat(this.format);\n\n        var lineLen:int;\n        if (indent > 0 && !lastLineEndedPara && field.numLines > 0)\n        {\n            lineLen = field.getLineLength(0);\n            if (lineLen > 0)\n            {\n                field.setTextFormat(this.firstLineFormat, 0, lineLen);\n            }\n        }\n\n        field.x = i * (colWidth + gutter);\n        field.y = 0;\n\n        remainder = "";\n        fieldText = "";\n\n        var linesRemaining:int = field.numLines;\n        var linesVisible:int = Math.min(this.linesPerCol, linesRemaining);\n\n        for (var j:int = 0; j < linesRemaining; j++)\n        {\n            if (j < linesVisible)\n            {\n                fieldText += field.getLineText(j);\n            }\n            else\n            {\n                remainder +=field.getLineText(j);\n            }\n        }\n\n        field.text = fieldText;\n\n        field.setTextFormat(this.format);\n\n        if (indent > 0 && !lastLineEndedPara)\n        {\n            lineLen = field.getLineLength(0);\n            if (lineLen > 0)\n            {\n                field.setTextFormat(this.firstLineFormat, 0, lineLen);\n            }\n        }\n\n        var lastLine:String = field.getLineText(field.numLines - 1);\n        var lastCharCode:Number = lastLine.charCodeAt(lastLine.length - 1);\n\n        if (lastCharCode == 10 || lastCharCode == 13)\n        {\n            lastLineEndedPara = true;\n        }\n        else\n        {\n            lastLineEndedPara = false;\n        }\n\n        if ((this.format.align == TextFormatAlign.JUSTIFY) &&\n                (i < fieldArray.length - 1))\n        {\n            if (!lastLineEndedPara)\n            {\n                justifyLastLine(field, lastLine);\n            }\n        }\n    }\n}\n')),(0,l.kt)("p",null,"After the ",(0,l.kt)("inlineCode",{parentName:"p"},"preferredHeight")," property has been set by calling the\n",(0,l.kt)("inlineCode",{parentName:"p"},"getOptimalHeight()")," method, the ",(0,l.kt)("inlineCode",{parentName:"p"},"layoutColumns()")," method iterates through the\nTextField objects, setting the height of each to the ",(0,l.kt)("inlineCode",{parentName:"p"},"preferredHeight")," value.\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"layoutColumns()"),' method then distributes just enough lines of text to each\nfield so that no scrolling occurs in any individual field, and the text in each\nsuccessive field begins where the text in the previous field ended. If the text\nalignment style has been set to "justify" then the ',(0,l.kt)("inlineCode",{parentName:"p"},"justifyLastLine()")," method is\ncalled to justify the final line of text in a field. Otherwise that last line\nwould be treated as an end-of-paragraph line and not justified."))}u.isMDXComponent=!0}}]);