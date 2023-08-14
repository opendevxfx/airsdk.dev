"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[95033],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=l(a),p=i,f=h["".concat(d,".").concat(p)]||h[p]||c[p]||r;return a?n.createElement(f,o(o({ref:t},m),{},{components:a})):n.createElement(f,o({ref:t},m))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},13646:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:6},o="Data formats, and choosing the read and write methods to use",s={unversionedId:"development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/reading-and-writing-files/working-with-filestream-objects/data-formats-and-choosing-the-read-and-write-methods-to-use",id:"development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/reading-and-writing-files/working-with-filestream-objects/data-formats-and-choosing-the-read-and-write-methods-to-use",title:"Data formats, and choosing the read and write methods to use",description:"Every file is a set of bytes on a disk. In ActionScript, the data from a file",source:"@site/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/reading-and-writing-files/working-with-filestream-objects/data-formats-and-choosing-the-read-and-write-methods-to-use.md",sourceDirName:"development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/reading-and-writing-files/working-with-filestream-objects",slug:"/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/reading-and-writing-files/working-with-filestream-objects/data-formats-and-choosing-the-read-and-write-methods-to-use",permalink:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/reading-and-writing-files/working-with-filestream-objects/data-formats-and-choosing-the-read-and-write-methods-to-use",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/reading-and-writing-files/working-with-filestream-objects/data-formats-and-choosing-the-read-and-write-methods-to-use.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"mainSidebar",previous:{title:"Asynchronous programming and the events generated by a FileStream object opened asynchronously",permalink:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/reading-and-writing-files/working-with-filestream-objects/asynchronous-programming-and-the events-generated-by-a-filestream-object-opened-asynchronously"},next:{title:"Using the load() and save() methods",permalink:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/reading-and-writing-files/using-the-load-and-save-methods"}},d={},l=[],m={toc:l},h="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-formats-and-choosing-the-read-and-write-methods-to-use"},"Data formats, and choosing the read and write methods to use"),(0,i.kt)("p",null,"Every file is a set of bytes on a disk. In ActionScript, the data from a file\ncan always be represented as a ByteArray. For example, the following code reads\nthe data from a file into a ByteArray object named ",(0,i.kt)("inlineCode",{parentName:"p"},"bytes"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'var myFile:File = File.documentsDirectory.resolvePath("AIR Test/test.txt");\nvar myFileStream:FileStream = new FileStream();\nmyFileStream.addEventListener(Event.COMPLETE, completeHandler);\nmyFileStream.openAsync(myFile, FileMode.READ);\nvar bytes:ByteArray = new ByteArray();\n\nfunction completeHandler(event:Event):void\n{\n    myFileStream.readBytes(bytes, 0, myFileStream.bytesAvailable);\n}\n')),(0,i.kt)("p",null,"Similarly, the following code writes data from a ByteArray named ",(0,i.kt)("inlineCode",{parentName:"p"},"bytes")," to a\nfile:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'var myFile:File = File.documentsDirectory.resolvePath("AIR Test/test.txt");\nvar myFileStream:FileStream = new FileStream();\nmyFileStream.open(myFile, FileMode.WRITE);\nmyFileStream.writeBytes(bytes, 0, bytes.length);\n')),(0,i.kt)("p",null,"However, often you do not want to store the data in an ActionScript ByteArray\nobject. And often the data file is in a specified file format."),(0,i.kt)("p",null,"For example, the data in the file may be in a text file format, and you may want\nto represent such data in a String object."),(0,i.kt)("p",null,"For this reason, the FileStream class includes read and write methods for\nreading and writing data to and from types other than ByteArray objects. For\nexample, the ",(0,i.kt)("inlineCode",{parentName:"p"},"readMultiByte()")," method lets you read data from a file and store\nit to a string, as in the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'var myFile:File = File.documentsDirectory.resolvePath("AIR Test/test.txt");\nvar myFileStream:FileStream = new FileStream();\nmyFileStream.addEventListener(Event.COMPLETE, completed);\nmyFileStream.openAsync(myFile, FileMode.READ);\nvar str:String = "";\n\nfunction completeHandler(event:Event):void\n{\n    str = myFileStream.readMultiByte(myFileStream.bytesAvailable, "iso-8859-1");\n}\n')),(0,i.kt)("p",null,"The second parameter of the ",(0,i.kt)("inlineCode",{parentName:"p"},"readMultiByte()"),' method specifies the text format\nthat ActionScript uses to interpret the data ("iso-8859-1" in the example).\nAdobe AIR supports common character set encodings (see\n',(0,i.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/charset-codes.html"},"Supported character sets"),")."),(0,i.kt)("p",null,"The FileStream class also includes the ",(0,i.kt)("inlineCode",{parentName:"p"},"readUTFBytes()")," method, which reads data\nfrom the read buffer into a string using the UTF-8 character set. Since\ncharacters in the UTF-8 character set are of variable length, do not use\n",(0,i.kt)("inlineCode",{parentName:"p"},"readUTFBytes()")," in a method that responds to the ",(0,i.kt)("inlineCode",{parentName:"p"},"progress")," event, since the\ndata at the end of the read buffer may represent an incomplete character. (This\nis also true when using the ",(0,i.kt)("inlineCode",{parentName:"p"},"readMultiByte()")," method with a variable-length\ncharacter encoding.) For this reason, read the entire set of data when the\nFileStream object dispatches the ",(0,i.kt)("inlineCode",{parentName:"p"},"complete")," event."),(0,i.kt)("p",null,"There are also similar write methods, ",(0,i.kt)("inlineCode",{parentName:"p"},"writeMultiByte()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"writeUTFBytes()"),",\nfor working with String objects and text files."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"readUTF()")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"writeUTF()")," methods (not to be confused with\n",(0,i.kt)("inlineCode",{parentName:"p"},"readUTFBytes()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"writeUTFBytes()"),") also read and write the text data to a\nfile, but they assume that the text data is preceded by data specifying the\nlength of the text data, which is not a common practice in standard text files."),(0,i.kt)("p",null,'Some UTF-encoded text files begin with a "UTF-BOM" (byte order mark) character\nthat defines the endianness as well as the encoding format (such as UTF-16 or\nUTF-32).'),(0,i.kt)("p",null,"For an example of reading and writing to a text file, see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/reading-and-writing-files/example-reading-an-xml-file-into-an-xml-object"},"Example: Reading an XML file into an XML object"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"readObject()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"writeObject()")," are convenient ways to store and retrieve\ndata for complex ActionScript objects. The data is encoded in AMF (ActionScript\nMessage Format). Adobe AIR, Flash Player, Flash Media Server, and Flex Data\nServices include APIs for working with data in this format."),(0,i.kt)("p",null,"There are some other read and write methods (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"readDouble()")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"writeDouble()"),"). However, if you use these, make sure that the file format\nmatches the formats of the data defined by these methods."),(0,i.kt)("p",null,"File formats are often more complex than simple text formats. For example, an\nMP3 file includes compressed data that can only be interpreted with the\ndecompression and decoding algorithms specific to MP3 files. MP3 files also may\ninclude ID3 tags that contain meta tag information about the file (such as the\ntitle and artist for a song). There are multiple versions of the ID3 format, but\nthe simplest (ID3 version 1) is discussed in the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/reading-and-writing-files/example-reading-and-writing-data-with-random-access"},"Example: Reading and writing data with random access"),"\nsection."),(0,i.kt)("p",null,"Other files formats (for images, databases, application documents, and so on)\nhave different structures, and to work with their data in ActionScript, you must\nunderstand how the data is structured."))}c.isMDXComponent=!0}}]);