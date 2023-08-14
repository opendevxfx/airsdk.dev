"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[26002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,f=d["".concat(l,".").concat(h)]||d[h]||m[h]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},35718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i="Performing complex 3D transformations",s={unversionedId:"development/display/working-in-three-dimensions/performing-complex-3d-transformations",id:"development/display/working-in-three-dimensions/performing-complex-3d-transformations",title:"Performing complex 3D transformations",description:"The Matrix3D class lets you transform 3D points within a coordinate space or map",source:"@site/docs/development/display/working-in-three-dimensions/performing-complex-3d-transformations.md",sourceDirName:"development/display/working-in-three-dimensions",slug:"/development/display/working-in-three-dimensions/performing-complex-3d-transformations",permalink:"/docs/development/display/working-in-three-dimensions/performing-complex-3d-transformations",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/working-in-three-dimensions/performing-complex-3d-transformations.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Example: Perspective projection",permalink:"/docs/development/display/working-in-three-dimensions/example-perspective-projection"},next:{title:"Projecting 3D objects onto a 2D view",permalink:"/docs/development/display/working-in-three-dimensions/projecting-3d-objects-onto-a-2d-view"}},l={},p=[{value:"Creating Matrix3D objects",id:"creating-matrix3d-objects",level:2},{value:"Applying multiple 3D transformations",id:"applying-multiple-3d-transformations",level:2},{value:"Using Matrix3D objects for reordering display",id:"using-matrix3d-objects-for-reordering-display",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"performing-complex-3d-transformations"},"Performing complex 3D transformations"),(0,a.kt)("p",null,"The Matrix3D class lets you transform 3D points within a coordinate space or map\n3D points from one coordinate space to another."),(0,a.kt)("p",null,"You don't need to understand matrix mathematics to use the Matrix3D class. Most\nof the common transformation operations can be handled using the methods of the\nclass. You don't have to worry about explicitly setting or calculating the\nvalues of each element in the matrix."),(0,a.kt)("p",null,"After you set the ",(0,a.kt)("inlineCode",{parentName:"p"},"z")," property of a display object to a numeric value, you can\nretrieve the object's transformation matrix using the Matrix3D property of the\ndisplay object's Transform object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var leafMatrix:Matrix3D = this.transform.matrix3D;\n")),(0,a.kt)("p",null,"You can use the methods of the Matrix3D object to perform translation, rotation,\nscaling, and perspective projection on the display object."),(0,a.kt)("p",null,"Use the Vector3D class with its ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"y"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"z")," properties for managing 3D\npoints. It can also represent a spatial vector in physics, which has a direction\nand a magnitude. The methods of the Vector3D class let you perform common\ncalculations with spatial vectors, such as addition, dot product, and cross\nproduct calculations."),(0,a.kt)("p",null,"Note: The Vector3D class is not related to the ActionScript Vector class. The\nVector3D class contains properties and methods for defining and manipulating 3D\npoints, while the Vector class supports arrays of typed objects."),(0,a.kt)("h2",{id:"creating-matrix3d-objects"},"Creating Matrix3D objects"),(0,a.kt)("p",null,"There are three main ways of creating or retrieving ",(0,a.kt)("inlineCode",{parentName:"p"},"Matrix3D")," objects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Matrix3D()")," constructor method to instantiate a new matrix. The\n",(0,a.kt)("inlineCode",{parentName:"p"},"Matrix3D()")," constructor takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector")," object containing 16 numeric values\nand places each value into a cell of the matrix. For example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"var rotateMatrix:Matrix3D = new Matrix3D(1,0,0,1, 0,1,0,1, 0,0,1,1, 0,0,0,1);\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set the value the ",(0,a.kt)("inlineCode",{parentName:"p"},"z")," property of a display object. Then retrieve the\ntransformation matrix from the ",(0,a.kt)("inlineCode",{parentName:"p"},"transform.matrix3D")," property of that object.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Retrieve the Matrix3D object that controls the display of 3D objects on the\nstage by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"perspectiveProjection.toMatrix3D()")," method on the root\ndisplay object."))),(0,a.kt)("h2",{id:"applying-multiple-3d-transformations"},"Applying multiple 3D transformations"),(0,a.kt)("p",null,"You can apply many 3D transformations at once using a Matrix3D object. For\nexample if you wanted to rotate, scale, and then move a cube, you could apply\nthree separate transformations to each point of the cube. However it is much\nmore efficient to precalculate multiple transformations in one Matrix3D object\nand then perform one matrix transformation on each of the points."),(0,a.kt)("p",null,"Note: The order in which matrix transformations are applied is important. Matrix\ncalculations are not commutative. For example, applying a rotation followed by a\ntranslation gives a different result than applying the same translation followed\nby the same rotation."),(0,a.kt)("p",null,"The following example shows two ways of performing multiple 3D transformations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"package {\n    import flash.display.Sprite;\n    import flash.display.Shape;\n    import flash.display.Graphics;\n    import flash.geom.*;\n\n    public class Matrix3DTransformsExample extends Sprite\n    {\n        private var rect1:Shape;\n        private var rect2:Shape;\n\n        public function Matrix3DTransformsExample():void\n        {\n            var pp:PerspectiveProjection = this.transform.perspectiveProjection;\n            pp.projectionCenter = new Point(275,200);\n            this.transform.perspectiveProjection = pp;\n\n            rect1 = new Shape();\n            rect1.x = -70;\n            rect1.y = -40;\n            rect1.z = 0;\n            rect1.graphics.beginFill(0xFF8800);\n            rect1.graphics.drawRect(0,0,50,80);\n            rect1.graphics.endFill();\n            addChild(rect1);\n\n            rect2 = new Shape();\n            rect2.x = 20;\n            rect2.y = -40;\n            rect2.z = 0;\n            rect2.graphics.beginFill(0xFF0088);\n            rect2.graphics.drawRect(0,0,50,80);\n            rect2.graphics.endFill();\n            addChild(rect2);\n\n            doTransforms();\n        }\n\n        private function doTransforms():void\n        {\n            rect1.rotationX = 15;\n            rect1.scaleX = 1.2;\n            rect1.x += 100;\n            rect1.y += 50;\n            rect1.rotationZ = 10;\n\n            var matrix:Matrix3D = rect2.transform.matrix3D;\n            matrix.appendRotation(15, Vector3D.X_AXIS);\n            matrix.appendScale(1.2, 1, 1);\n            matrix.appendTranslation(100, 50, 0);\n            matrix.appendRotation(10, Vector3D.Z_AXIS);\n            rect2.transform.matrix3D = matrix;\n        }\n    }\n}\n")),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"doTransforms()")," method the first block of code uses the DisplayObject\nproperties to change the rotation, scaling, and position of a rectangle shape.\nThe second block of code uses the methods of the Matrix3D class to do the same\ntransformations."),(0,a.kt)("p",null,"The main advantage of using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Matrix3D")," methods is that all of the\ncalculations are performed in the matrix first,. Then they are applied to the\ndisplay object only once, when its ",(0,a.kt)("inlineCode",{parentName:"p"},"transform.matrix3D")," property is set. Setting\nDisplayObject properties make the source code a bit simpler to read. However\neach time a rotation or scaling property is set, it causes multiple calculations\nand changes multiple display object properties."),(0,a.kt)("p",null,"If your code will apply the same complex transformations to display objects more\nthan once, save the Matrix3D object as a variable and then reapply it over and\nover."),(0,a.kt)("h2",{id:"using-matrix3d-objects-for-reordering-display"},"Using Matrix3D objects for reordering display"),(0,a.kt)("p",null,"As mentioned previously, the layering order of display objects in the display\nlist determines the display layering order, regardless of their relative z-axes.\nIf your animation transforms the properties of display objects into an order\nthat differs from the display list order, the viewer might see display object\nlayering that does not correspond to the z-axis layering. So, an object that\nshould appear further away from the viewer might appear in front of an object\nthat is closer to the viewer."),(0,a.kt)("p",null,"To ensure that the layering of 3D display objects corresponds to the relative\ndepths of the objects, use an approach like the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"getRelativeMatrix3D()")," method of the Transform object to get the\nrelative ",(0,a.kt)("inlineCode",{parentName:"p"},"z-axes")," of the child 3D display objects.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"removeChild()")," method to remove the objects from the display list.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sort the display objects based on their relative z-axis values.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"addChild()")," method to add the children back to the display list in\nreverse order."))),(0,a.kt)("p",null,"This reordering ensures that your objects display in accordance with their\nrelative z-axes."),(0,a.kt)("p",null,"The following code enforces the correct display of the six faces of a 3D box. It\nreorders the faces of the box after rotations have been applied to the it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'public var faces:Array; . . .\n\npublic function ReorderChildren()\n{\n    for(var ind:uint = 0; ind < 6; ind++)\n    {\n        faces[ind].z = faces[ind].child.transform.getRelativeMatrix3D(root).position.z;\n        this.removeChild(faces[ind].child);\n    }\n    faces.sortOn("z", Array.NUMERIC | Array.DESCENDING);\n    for (ind = 0; ind < 6; ind++)\n    {\n        this.addChild(faces[ind].child);\n    }\n}\n')),(0,a.kt)("p",null,"To get the application files for this sample, see\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/joshtynjala/flash-platform-as3-dev-guide-examples/releases/tag/original"},(0,a.kt)("em",{parentName:"a"},"FlashPlatformAS3DevGuideExamples.zip")),".\nThe application files are in the Samples/ReorderByZ folder."))}m.isMDXComponent=!0}}]);