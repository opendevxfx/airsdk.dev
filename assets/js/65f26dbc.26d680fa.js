"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[77337],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),h=r,u=c["".concat(p,".").concat(h)]||c[h]||m[h]||o;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},62102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={},i="Creating and moving 3D display objects",s={unversionedId:"development/display/working-in-three-dimensions/creating-and-moving-3d-display-objects",id:"development/display/working-in-three-dimensions/creating-and-moving-3d-display-objects",title:"Creating and moving 3D display objects",description:"To convert a 2D display object into a 3D display object, you can explicitly set",source:"@site/docs/development/display/working-in-three-dimensions/creating-and-moving-3d-display-objects.md",sourceDirName:"development/display/working-in-three-dimensions",slug:"/development/display/working-in-three-dimensions/creating-and-moving-3d-display-objects",permalink:"/docs/development/display/working-in-three-dimensions/creating-and-moving-3d-display-objects",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/working-in-three-dimensions/creating-and-moving-3d-display-objects.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Basics of 3D display objects",permalink:"/docs/development/display/working-in-three-dimensions/basics-of-3d-objects"},next:{title:"Example: Perspective projection",permalink:"/docs/development/display/working-in-three-dimensions/example-perspective-projection"}},p={},l=[{value:"Moving an object in 3D space",id:"moving-an-object-in-3d-space",level:2},{value:"Rotating an object in 3D space",id:"rotating-an-object-in-3d-space",level:2}],d={toc:l},c="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-and-moving-3d-display-objects"},"Creating and moving 3D display objects"),(0,r.kt)("p",null,"To convert a 2D display object into a 3D display object, you can explicitly set\nits ",(0,r.kt)("inlineCode",{parentName:"p"},"z")," property to a numeric value. When you assign a value to the ",(0,r.kt)("inlineCode",{parentName:"p"},"z"),"\nproperty, a new Transform object is created for the display object. Setting the\n",(0,r.kt)("inlineCode",{parentName:"p"},"DisplayObject.rotationX")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"DisplayObject.rotationY")," properties also creates a\nnew Transform object. The Transform object contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"Matrix3D")," property that\ngoverns how the display object is represented in 3D space."),(0,r.kt)("p",null,'The following code sets the coordinates for a display object called "leaf":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"leaf.x = 100; leaf.y = 50; leaf.z = -30;\n")),(0,r.kt)("p",null,"You can see these values, as well as properties derived from these values, in\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"matrix3D")," property of the Transform object of the leaf:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var leafMatrix:Matrix3D  = leaf.transform.matrix3D;\n\ntrace(leafMatrix.position.x);\ntrace(leafMatrix.position.y);\ntrace(leafMatrix.position.z);\ntrace(leafMatrix.position.length);\ntrace(leafMatrix.position.lengthSquared);\n")),(0,r.kt)("p",null,"For information about the properties of the Transform object, see the\n",(0,r.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/geom/Transform.html"},"Transform"),"\nclass. For information about the properties of the Matrix3D object, see the\n",(0,r.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/geom/Matrix3D.html"},"Matrix3D"),"\nclass."),(0,r.kt)("h2",{id:"moving-an-object-in-3d-space"},"Moving an object in 3D space"),(0,r.kt)("p",null,"You can move an object in 3D space by changing the values of its ",(0,r.kt)("inlineCode",{parentName:"p"},"x, y, or z"),"\nproperties. When you change the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"z")," property the object appears to\nmove closer or farther away from the viewer."),(0,r.kt)("p",null,"The following code moves two ellipses back and forth along their z-axes by\nchanging the value of their ",(0,r.kt)("inlineCode",{parentName:"p"},"z")," properties in response to an event. ",(0,r.kt)("inlineCode",{parentName:"p"},"ellipse2"),"\nmoves faster than ",(0,r.kt)("inlineCode",{parentName:"p"},"ellipse1")," : its ",(0,r.kt)("inlineCode",{parentName:"p"},"z")," property is increased by a multiple of 20\non each Frame event while the ",(0,r.kt)("inlineCode",{parentName:"p"},"z")," property of ",(0,r.kt)("inlineCode",{parentName:"p"},"ellipse1")," is increased by a\nmultiple of 10:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var depth:int = 1000;\n\nfunction ellipse1FrameHandler(e:Event):void\n{\n    ellipse1Back = setDepth(e, ellipse1Back);\n    e.currentTarget.z += ellipse1Back * 10;\n}\nfunction ellipse2FrameHandler(e:Event):void\n{\n    ellipse2Back = setDepth(e, ellipse1Back);\n    e.currentTarget.z += ellipse1Back * 20;\n}\nfunction setDepth(e:Event, d:int):int\n{\n    if(e.currentTarget.z > depth)\n    {\n        e.currentTarget.z = depth;\n        d = -1;\n    }\n    else if (e.currentTarget.z <  0)\n    {\n        e.currentTarget.z = 0;\n        d = 1;\n    }\n}\n")),(0,r.kt)("h2",{id:"rotating-an-object-in-3d-space"},"Rotating an object in 3D space"),(0,r.kt)("p",null,"You can rotate an object in three different ways, depending on how you set the\nobject's rotation properties: ",(0,r.kt)("inlineCode",{parentName:"p"},"rotationX"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"rotationY"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"rotationZ"),"."),(0,r.kt)("p",null,"The figure below shows two squares that are not rotated:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(33867).Z,width:"150",height:"113"})),(0,r.kt)("p",null,"The next figure shows the two squares when you increment the ",(0,r.kt)("inlineCode",{parentName:"p"},"rotationY"),"\nproperty of the container of the squares to rotate them on the y- axis. Rotating\nthe container, or parent display object, of the two squares rotates both\nsquares:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"container.rotationY += 10;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(93455).Z,width:"59",height:"194"})),(0,r.kt)("p",null,"The next figure shows what happens when you set the ",(0,r.kt)("inlineCode",{parentName:"p"},"rotationX")," property of the\ncontainer for the squares. This rotates the squares on the x- axis."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(57485).Z,width:"125",height:"44"})),(0,r.kt)("p",null,"The next figure shows what happens when you increment the ",(0,r.kt)("inlineCode",{parentName:"p"},"rotationZ")," property\nof the container of the squares.This rotates the squares on the z-axis."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(86151).Z,width:"150",height:"174"})),(0,r.kt)("p",null,"A display object can simultaneously move and rotate in 3D space."))}m.isMDXComponent=!0},33867:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},57485:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAAsCAIAAADHMCAgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAH4UlEQVR4nN2av48lRxHHPzXv5+7e7t7eGWMjOXACB3KC5AAJZGdIYMmpJUhInTlB4h/gzyAjIyPjLyBEQiIgJzvbCRI6fLevCGamp7qqut9DQmjfllZPM9XV1TXfqq6qnlnRr37Hl79B7phIQElIgHooShbOeGFvMRyZ5e2o42iYFW0Q9J/cfcG3fp0Z/KBpzbDh3y95/XJiSAPbFGQaPkpVHRWQ2jX95UaBA1z8tbvGA6WBm0+4/cX0qOPfYK7LHxmfY7PSv6GePsy/zL+pPGbIiunw/0Prf0cDwx27DxaGtoNUj91aNKkzSpR0ejQbiprtlGmtNw1zHzQNIOx/gAsam4Gl5hQBCUxtXEQNnQriBI5mM+47Yw+WBoCrH/m9bJ/TRaJ1icvO0g5YGvm6LyaZL/2s88VdLrl6kUNmU4dLCE6sBVCaaqgjurVuv2hPes4X92HPsy8Y6tAuG9x1F2naYRYmjHbcUMCN+HbKjBPQQ1fugdIY7xtuP0uSdR/ckSTziu2OML+dTCX1RWuX2HUnOte6CsDqiv37Ple4Q0zLDbEYFL4GyVYg23NSn3x8nG+eAdiw/zh5ZpvW49nzRIrHUqvfiaVkd4w/VZ037rB7P9ns/ZN8h1rtSqv1tBOjcuf7KjudO+7XP+PmRdK0RPRPAT0FFAdZY2JfxpG+OSE3PTgyuF98wOVPoRGS0oj0tAXsdPHprZwsI9H992eOu1yw/S60656j2J9YyVOykDQ2QepLwm6YEv255xng6sesgNDVWXIdCyELpbMc3+XrMto6GxfhpK06yz5yXd1t32MF40GkdaJx5HrNwpRwQdDWqRNO3im0Og+vuX/NFC+jWkG7dh8V+G9pVBjVNhcSUTtw+Bf/+BVf/6HZtLgj0ik4dsQ6F6eTPIU/whrR2s1pIFial1x6U0WkGrQGVy3siHLHqlGJLvqZHbPZsd3VuHPg1V/4+4ccToOgjyldNNO5HFs0UbXm8CdYL3tkQkShRJzUcyMcfd/P8uXOWhvN7jyvHnj+Ds/fqfMMA9vvs4FX3Ye39qSc1rbo+LLvsMJ0FViBNwhoXZEKRwmgz2JqLjpnulFDank8THTSaRnaX3JzFz7WDHv2Hx1vMNxo2p/EQDjqgNixEDyXiB2aGtIOVcTX51K0F8l5gjQMKEOtrswqt0tvtvh+BmBg/6F/8rTBSI1urUd4TjcUWyP3PGkoJcZojYU2bFafGdzeGveBOmapHCyjylQ83UKx9RJlvebyhgx32L9gm9kag7TY1C9gVrilNhqdhm26rqixQRYgYKmTfrqAemjiZq0s12UJNyVynP2Uur1ityPH/frn3H7KwUw4ioJLDm5z9AMhRrpbK0JnxXxWnRWpGqY1w6jWeq51v30KmV1Vdk9aTsfRCg0zrCArnlyPoZDhvvkO+x9Oqt3uc6s60nDRuk3LfXqhBt/C10yyhJ64+S6Qs9jEuDBCr2bCmGeSpdXU6vhUAAwDb7+HDOS4I+y+NzVmJRBcVLaAc4HcyjlOUjKfJaGaqdU5WWuN4ISOCeqS8ZlHNVu6TK/MqFMZc6IvuypNaNZKUWTg8kk73oHLn1QjLYxa6cIxW5sj5SflKGwRh5doJYwBorJw9sQ4sCjRwjP6xUxh8V+VA0zprx48llnhoOy2DBO3gfvqlo3XE3S1Q7JDSb2qh2IWigUD41Gl6iNt8PqaJPWtLvAtYWvUUqYYpc791nQxt0vKKiVBubodkwxN3Icdz3+bDLpU64bIAHJD0YV2v8f01dJjOYseoyJWbzF/Y53Mr11VVNPvixmtl55cov4xMQe0za5wG7jLjuefN0M4xqnUQxqGJGJU71lqT7RWjKVlmAd01uin11hY79rUb9PIZPkYxaaRl4aROt+L6XkqU5WLS/YX5d69J7DPc8EGvjGcFnaRScaRLnxRgG74VyVHp4ycJ4E5iSOJwZOA2cWuPquxKepP7MxWOSi3z7h+Whht3GXPt3/Pq78xrKdoWt7VjXUjTbfz7VJ5zNNUlW3mYMNEfA61zKXEFeED91teXnBvZlk3C6gsyX0ppOLBmsyuX8UsgUw13TKtDjvRxft6y2pBu4078OyXvdEHQvfw5Z/hmyXDpLukBK8IKsRYLr5JA/lEJ0mIwJGGgf3eMrq4nwXp6wW+WDMKnzmZ2L5ASp3UKrTLlGYXwbwLxTHMnjcJa7Xm6sZOPst/Hq9I5jAv7dpIC5rzqPumUYW2cVfVVtWgFySlMVr9mtHVmpVtzB8B7rhkOj/tiObY4eFQZpFRrQ5HcaeI+aUGl/CyMyY6ARm4e8sdaB8F7ra3kyzupI5TcaM2+UitzbUStRLiC5mMVgNvvctQQf0ocCecGwoVT9jcsgS+Lp1SLKE+Y5iOKGlGzQufqtFTWLHbO+lHgbtt1+IJwO96ezvf24/MJaVQusZZnaucxXNQvWzAbqwDF5exOJ8/7u6IUEizLaAGSrUz3MnDHnrrIoFBtqQpsdvCaFY4aHkHaen8cS+Z176AlOpqIbH1tm63HTLqruu8b32WNuzMAsNq/KDq6PxxH8mGGC7K1Ythf81HInC5mcITktJauhq17jcKDgee3PDkOtr7WHAfqeBo7tsHn+6RCHMymJxq04g7pDJtiPK5vKT+66fjh2xHjwV3m47zU4+JxypfixcsU20x8DupzLLHBadIUFiv009R/wGqLoDzUEMI7wAAAABJRU5ErkJggg=="},93455:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},86151:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);