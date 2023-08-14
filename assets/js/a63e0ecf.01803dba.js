"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[27641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,u=c["".concat(o,".").concat(m)]||c[m]||h[m]||r;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:10},l="Display object example: SpriteArranger",s={unversionedId:"development/display/display-programming/display-object-example-sprite-arranger",id:"development/display/display-programming/display-object-example-sprite-arranger",title:"Display object example: SpriteArranger",description:"The SpriteArranger sample application builds upon the Geometric Shapes sample",source:"@site/docs/development/display/display-programming/display-object-example-sprite-arranger.md",sourceDirName:"development/display/display-programming",slug:"/development/display/display-programming/display-object-example-sprite-arranger",permalink:"/docs/development/display/display-programming/display-object-example-sprite-arranger",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/display-programming/display-object-example-sprite-arranger.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"mainSidebar",previous:{title:"Loading display content dynamically",permalink:"/docs/development/display/display-programming/loading-display-content-dynamically"},next:{title:"Overview",permalink:"/docs/development/display/working-with-geometry/"}},o={},p=[{value:"Defining the SpriteArranger classes",id:"defining-the-spritearranger-classes",level:2},{value:"The DrawingCanvas class",id:"the-drawingcanvas-class",level:4},{value:"The GeometricSprite class and its subclasses",id:"the-geometricsprite-class-and-its-subclasses",level:4},{value:"Adding display objects to the canvas",id:"adding-display-objects-to-the-canvas",level:2},{value:"Clicking and dragging display objects",id:"clicking-and-dragging-display-objects",level:2},{value:"Rearranging display object layering",id:"rearranging-display-object-layering",level:2}],d={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"display-object-example-spritearranger"},"Display object example: SpriteArranger"),(0,i.kt)("p",null,"The SpriteArranger sample application builds upon the Geometric Shapes sample\napplication described separately in ",(0,i.kt)("em",{parentName:"p"},"Learning ActionScript 3.0"),"."),(0,i.kt)("p",null,"The SpriteArranger sample application illustrates a number of concepts for\ndealing with display objects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Extending display object classes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Adding objects to the display list")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Layering display objects and working with display object containers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Responding to display object events")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using properties and methods of display objects"))),(0,i.kt)("p",null,"To get the application files for this sample, see\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/joshtynjala/flash-platform-as3-dev-guide-examples/releases/tag/original"},(0,i.kt)("em",{parentName:"a"},"FlashPlatformAS3DevGuideExamples.zip")),".\nThe SpriteArranger application files can be found in the folder\nExamples/SpriteArranger. The application consists of the following files:"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("p",null,"File")),(0,i.kt)("th",null,(0,i.kt)("p",null,"Description")))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"SpriteArranger.mxml"),(0,i.kt)("p",null,"or"),(0,i.kt)("p",null,"SpriteArranger.fla")),(0,i.kt)("td",null,(0,i.kt)("p",null,"The main application file in Flash (FLA) or Flex (MXML)."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"com/example/programmingas3/SpriteArranger/CircleSprite.as")),(0,i.kt)("td",null,(0,i.kt)("p",null,"A class defining a type of Sprite object that renders a circle on-screen."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"com/example/programmingas3/SpriteArranger/DrawingCanvas.as")),(0,i.kt)("td",null,(0,i.kt)("p",null,"A class defining the canvas, which is a display object container that contains GeometricSprite objects."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"com/example/programmingas3/SpriteArranger/SquareSprite.as")),(0,i.kt)("td",null,(0,i.kt)("p",null,"A class defining a type of Sprite object that renders a square on-screen."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"com/example/programmingas3/SpriteArranger/TriangleSprite.as")),(0,i.kt)("td",null,(0,i.kt)("p",null,"A class defining a type of Sprite object that renders a triangle on-screen."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"com/example/programmingas3/SpriteArranger/GeometricSprite.as")),(0,i.kt)("td",null,(0,i.kt)("p",null,"A class that extends the Sprite object, used to define an on-screen shape. The CircleSprite, SquareSprite, and TriangleSprite each extend this class."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"com/example/programmingas3/geometricshapes/IGeometricShape.as")),(0,i.kt)("td",null,(0,i.kt)("p",null,"The base interface defining methods to be implemented by all geometric shape classes."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"com/example/programmingas3/geometricshapes/IPolygon.as")),(0,i.kt)("td",null,(0,i.kt)("p",null,"An interface defining methods to be implemented by geometric shape classes that have multiple sides."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"com/example/programmingas3/geometricshapes/RegularPolygon.as")),(0,i.kt)("td",null,(0,i.kt)("p",null,"A type of geometric shape that has sides of equal length positioned symmetrically around the shape's center."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"com/example/programmingas3/geometricshapes/Circle.as")),(0,i.kt)("td",null,(0,i.kt)("p",null,"A type of geometric shape that defines a circle."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"com/example/programmingas3/geometricshapes/EquilateralTriangle.as")),(0,i.kt)("td",null,(0,i.kt)("p",null,"A subclass of RegularPolygon that defines a triangle with all sides the same length."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"com/example/programmingas3/geometricshapes/Square.as")),(0,i.kt)("td",null,(0,i.kt)("p",null,"A subclass of RegularPolygon defining a rectangle with all four sides the same length."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"com/example/programmingas3/geometricshapes/GeometricShapeFactory.as")),(0,i.kt)("td",null,(0,i.kt)("p",null,'A class containing a "factory method" for creating shapes given a shape type and size.'))))),(0,i.kt)("h2",{id:"defining-the-spritearranger-classes"},"Defining the SpriteArranger classes"),(0,i.kt)("p",null,'The SpriteArranger application lets the user add a variety of display objects to\nthe on-screen "canvas."'),(0,i.kt)("p",null,"The DrawingCanvas class defines a drawing area, a type of display object\ncontainer, to which the user can add on-screen shapes. These on-screen shapes\nare instances of one of the subclasses of the GeometricSprite class."),(0,i.kt)("h4",{id:"the-drawingcanvas-class"},"The DrawingCanvas class"),(0,i.kt)("p",null,"In Flex, all child display objects added to a Container object must be of a\nclass that descends from the mx.core.UIComponent class. This application adds an\ninstance of the DrawingCanvas class as a child of an mx.containers.VBox object,\nas defined in MXML code in the SpriteArranger.mxml file. This inheritance is\ndefined in the DrawingCanvas class declaration, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"public class DrawingCanvas extends UIComponent\n")),(0,i.kt)("p",null,"The UIComponent class inherits from the DisplayObject, DisplayObjectContainer,\nand Sprite classes, and the code in the DrawingCanvas class uses methods and\nproperties of those classes."),(0,i.kt)("p",null,"The DrawingCanvas class extends the Sprite class, and this inheritance is\ndefined in the DrawingCanvas class declaration, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"public class DrawingCanvas extends Sprite\n")),(0,i.kt)("p",null,"The Sprite class is a subclass of the DisplayObjectContainer and DisplayObject\nclasses, and the DrawingCanvas class uses methods and properties of those\nclasses."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DrawingCanvas()")," constructor method sets up a Rectangle object, ",(0,i.kt)("inlineCode",{parentName:"p"},"bounds"),",\nwhich is property that is later used in drawing the outline of the canvas. It\nthen calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"initCanvas()")," method, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"this.bounds = new Rectangle(0, 0, w, h);\ninitCanvas(fillColor, lineColor);\n")),(0,i.kt)("p",null,"AS the following example shows, the ",(0,i.kt)("inlineCode",{parentName:"p"},"initCanvas()")," method defines various\nproperties of the DrawingCanvas object, which were passed as arguments to the\nconstructor function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"this.lineColor = lineColor;\nthis.fillColor = fillColor;\nthis.width = 500;\nthis.height = 200;\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"initCanvas()")," method then calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"drawBounds()")," method, which draws the\ncanvas using the DrawingCanvas class's ",(0,i.kt)("inlineCode",{parentName:"p"},"graphics")," property. The ",(0,i.kt)("inlineCode",{parentName:"p"},"graphics"),"\nproperty is inherited from the Shape class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"this.graphics.clear();\nthis.graphics.lineStyle(1.0, this.lineColor, 1.0);\nthis.graphics.beginFill(this.fillColor, 1.0);\nthis.graphics.drawRect(bounds.left - 1,\n                    bounds.top - 1,\n                    bounds.width + 2,\n                    bounds.height + 2);\nthis.graphics.endFill();\n")),(0,i.kt)("p",null,"The following additional methods of the DrawingCanvas class are invoked based on\nuser interactions with the application:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"addShape()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"describeChildren()")," methods, which are described in\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/display/display-programming/display-object-example-sprite-arranger#adding-display-objects-to-the-canvas"},"Adding display objects to the canvas"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"moveToBack()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"moveDown()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"moveToFront()"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"moveUp()")," methods,\nwhich are described in\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/display/display-programming/display-object-example-sprite-arranger#rearranging-display-object-layering"},"Rearranging display object layering"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"onMouseUp()")," method, which is described in\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/display/display-programming/display-object-example-sprite-arranger#clicking-and-dragging-display-objects"},"Clicking and dragging display objects")))),(0,i.kt)("h4",{id:"the-geometricsprite-class-and-its-subclasses"},"The GeometricSprite class and its subclasses"),(0,i.kt)("p",null,"Each display object the user can add to the canvas is an instance of one of the\nfollowing subclasses of the GeometricSprite class:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"CircleSprite")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"SquareSprite")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"TriangleSprite"))),(0,i.kt)("p",null,"The GeometricSprite class extends the flash.display.Sprite class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"public class GeometricSprite extends Sprite\n")),(0,i.kt)("p",null,"The GeometricSprite class includes a number of properties common to all\nGeometricSprite objects. These are set in the constructor function based on\nparameters passed to the function. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"this.size = size;\nthis.lineColor = lColor;\nthis.fillColor = fColor;\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"geometricShape")," property of the GeometricSprite class defines an\nIGeometricShape interface, which defines the mathematical properties, but not\nthe visual properties, of the shape. The classes that implement the\nIGeometricShape interface are defined in the GeometricShapes sample application\ndescribed in ",(0,i.kt)("em",{parentName:"p"},"Learning ActionScript 3.0"),"."),(0,i.kt)("p",null,"The GeometricSprite class defines the ",(0,i.kt)("inlineCode",{parentName:"p"},"drawShape()"),' method, which is further\nrefined in the override definitions in each subclass of GeometricSprite. For\nmore information, see the "Adding display objects to the canvas" section, which\nfollows.'),(0,i.kt)("p",null,"The GeometricSprite class also provides the following methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"onMouseDown()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"onMouseUp()")," methods, which are described in\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/display/display-programming/display-object-example-sprite-arranger#clicking-and-dragging-display-objects"},"Clicking and dragging display objects"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"showSelected()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"hideSelected()")," methods, which are described in\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/display/display-programming/display-object-example-sprite-arranger#clicking-and-dragging-display-objects"},"Clicking and dragging display objects")))),(0,i.kt)("h2",{id:"adding-display-objects-to-the-canvas"},"Adding display objects to the canvas"),(0,i.kt)("p",null,"When the user clicks the Add Shape button, the application calls the\n",(0,i.kt)("inlineCode",{parentName:"p"},"addShape()")," method of the DrawingCanvas class. It instantiates a new\nGeometricSprite by calling the appropriate constructor function of one of the\nGeometricSprite subclasses, as the following example shows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'public function addShape(shapeName:String, len:Number):void\n{\n    var newShape:GeometricSprite;\n    switch (shapeName)\n    {\n        case "Triangle":\n            newShape = new TriangleSprite(len);\n            break;\n\n        case "Square":\n            newShape = new SquareSprite(len);\n            break;\n\n        case "Circle":\n            newShape = new CircleSprite(len);\n            break;\n    }\n    newShape.alpha = 0.8;\n    this.addChild(newShape);\n}\n')),(0,i.kt)("p",null,"Each constructor method calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"drawShape()")," method, which uses the\n",(0,i.kt)("inlineCode",{parentName:"p"},"graphics")," property of the class (inherited from the Sprite class) to draw the\nappropriate vector graphic. For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"drawShape()")," method of the\nCircleSprite class includes the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"this.graphics.clear();\nthis.graphics.lineStyle(1.0, this.lineColor, 1.0);\nthis.graphics.beginFill(this.fillColor, 1.0);\nvar radius:Number = this.size / 2;\nthis.graphics.drawCircle(radius, radius, radius);\n")),(0,i.kt)("p",null,"The second to last line of the ",(0,i.kt)("inlineCode",{parentName:"p"},"addShape()")," function sets the ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha")," property\nof the display object (inherited from the DisplayObject class), so that each\ndisplay object added to the canvas is slightly transparent, letting the user see\nthe objects behind it."),(0,i.kt)("p",null,"The final line of the ",(0,i.kt)("inlineCode",{parentName:"p"},"addChild()")," method adds the new display object to the\nchild list of the instance of the DrawingCanvas class, which is already on the\ndisplay list. This causes the new display object to appear on the Stage."),(0,i.kt)("p",null,"The interface for the application includes two text fields, ",(0,i.kt)("inlineCode",{parentName:"p"},"selectedSpriteTxt"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"outputTxt"),". The text properties of these text fields are updated with\ninformation about the GeometricSprite objects that have been added to the canvas\nor selected by the user. The GeometricSprite class handles this\ninformation-reporting task by overriding the ",(0,i.kt)("inlineCode",{parentName:"p"},"toString()")," method, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'public override function toString():String\n{\n    return this.shapeType + " of size " + this.size + " at " + this.x + ", " + this.y;\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"shapeType")," property is set to the appropriate value in the constructor\nmethod of each GeometricSprite subclass. For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"toString()")," method\nmight return the following value for a CircleSprite instance recently added to\nthe DrawingCanvas instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Circle of size 50 at 0, 0\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"describeChildren()")," method of the DrawingCanvas class loops through the\ncanvas's child list, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"numChildren")," property (inherited from the\nDisplayObjectContainer class) to set the limit of the ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," loop. It generates a\nstring listing each child, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'var desc:String = "";\nvar child:DisplayObject;\nfor (var i:int=0; i < this.numChildren; i++)\n{\n    child = this.getChildAt(i);\n    desc += i + ": " + child + \'\\n\';\n}\n')),(0,i.kt)("p",null,"The resulting string is used to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"outputTxt")," text\nfield."),(0,i.kt)("h2",{id:"clicking-and-dragging-display-objects"},"Clicking and dragging display objects"),(0,i.kt)("p",null,"When the user clicks on a GeometricSprite instance, the application calls the\n",(0,i.kt)("inlineCode",{parentName:"p"},"onMouseDown()")," event handler. As the following shows, this event handler is set\nto listen for mouse down events in the constructor function of the\nGeometricSprite class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"this.addEventListener(MouseEvent.MOUSE_DOWN, onMouseDown);\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"onMouseDown()")," method then calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"showSelected()")," method of the\nGeometricSprite object. If it is the first time this method has been called for\nthe object, the method creates a new Shape object named ",(0,i.kt)("inlineCode",{parentName:"p"},"selectionIndicator")," and\nit uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"graphics")," property of the Shape object to draw a red highlight\nrectangle, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"this.selectionIndicator = new Shape();\nthis.selectionIndicator.graphics.lineStyle(1.0, 0xFF0000, 1.0);\nthis.selectionIndicator.graphics.drawRect(-1, -1, this.size + 1, this.size + 1);\nthis.addChild(this.selectionIndicator);\n")),(0,i.kt)("p",null,"If this is not the first time the ",(0,i.kt)("inlineCode",{parentName:"p"},"onMouseDown()")," method is called, the method\nsimply sets the ",(0,i.kt)("inlineCode",{parentName:"p"},"selectionIndicator")," shape's ",(0,i.kt)("inlineCode",{parentName:"p"},"visible")," property (inherited from\nthe DisplayObject class), as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"this.selectionIndicator.visible = true;\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"hideSelected()")," method hides the ",(0,i.kt)("inlineCode",{parentName:"p"},"selectionIndicator")," shape of the\npreviously selected object by setting its ",(0,i.kt)("inlineCode",{parentName:"p"},"visible")," property to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"onMouseDown()")," event handler method also calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"startDrag()")," method\n(inherited from the Sprite class), which includes the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var boundsRect:Rectangle = this.parent.getRect(this.parent);\nboundsRect.width -= this.size;\nboundsRect.height -= this.size;\nthis.startDrag(false, boundsRect);\n")),(0,i.kt)("p",null,"This lets the user drag the selected object around the canvas, within the\nboundaries set by the ",(0,i.kt)("inlineCode",{parentName:"p"},"boundsRect")," rectangle."),(0,i.kt)("p",null,"When the user releases the mouse button, the ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseUp")," event is dispatched. The\nconstructor method of the DrawingCanvas sets up the following event listener:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"this.addEventListener(MouseEvent.MOUSE_UP, onMouseUp);\n")),(0,i.kt)("p",null,"This event listener is set for the DrawingCanvas object, rather than for the\nindividual GeometricSprite objects. This is because when the GeometricSprite\nobject is dragged, it could end up behind another display object (another\nGeometricSprite object) when the mouse is released. The display object in the\nforeground would receive the mouse up event but the display object the user is\ndragging would not. Adding the listener to the DrawingCanvas object ensures that\nthe event is always handled."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"onMouseUp()")," method calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"onMouseUp()")," method of the GeometricSprite\nobject, which in turn calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"stopDrag()")," method of the GeometricSprite\nobject."),(0,i.kt)("h2",{id:"rearranging-display-object-layering"},"Rearranging display object layering"),(0,i.kt)("p",null,"The user interface for the application includes buttons labeled Move Back, Move\nDown, Move Up, and Move to Front. When the user clicks one of these buttons, the\napplication calls the corresponding method of the DrawingCanvas class:\n",(0,i.kt)("inlineCode",{parentName:"p"},"moveToBack()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"moveDown()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"moveUp()"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"moveToFront()"),". For example, the\n",(0,i.kt)("inlineCode",{parentName:"p"},"moveToBack()")," method includes the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"public function moveToBack(shape:GeometricSprite):void\n{\n    var index:int = this.getChildIndex(shape);\n    if (index > 0)\n    {\n        this.setChildIndex(shape, 0);\n    }\n}\n")),(0,i.kt)("p",null,"The method uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"setChildIndex()")," method (inherited from the\nDisplayObjectContainer class) to position the display object in index position 0\nin the child list of the DrawingCanvas instance (",(0,i.kt)("inlineCode",{parentName:"p"},"this"),")."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"moveDown()")," method works similarly, except that it decrements the index\nposition of the display object by 1 in the child list of the DrawingCanvas\ninstance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"public function moveDown(shape:GeometricSprite):void\n{\n    var index:int = this.getChildIndex(shape);\n    if (index > 0)\n    {\n        this.setChildIndex(shape, index - 1);\n    }\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"moveUp()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"moveToFront()")," methods work similarly to the ",(0,i.kt)("inlineCode",{parentName:"p"},"moveToBack()"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"moveDown()")," methods."))}h.isMDXComponent=!0}}]);