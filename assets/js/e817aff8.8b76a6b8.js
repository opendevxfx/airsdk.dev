"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[27843],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>y});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(i),h=n,y=p["".concat(l,".").concat(h)]||p[h]||m[h]||o;return i?r.createElement(y,a(a({ref:t},c),{},{components:i})):r.createElement(y,a({ref:t},c))}));function y(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var d=2;d<o;d++)a[d]=i[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},3080:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=i(87462),n=(i(67294),i(3905));const o={sidebar_position:4},a="Working with directories",s={unversionedId:"development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/working-with-directories",id:"development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/working-with-directories",title:"Working with directories",description:"The runtime provides you with capabilities to work with directories on the local",source:"@site/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/working-with-directories.md",sourceDirName:"development/files-and-data/working-with-the-file-system/using-the-air-file-system-api",slug:"/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/working-with-directories",permalink:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/working-with-directories",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/working-with-directories.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"mainSidebar",previous:{title:"Getting file system information",permalink:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/getting-file-system-information"},next:{title:"Working with files",permalink:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/working-with-files"}},l={},d=[{value:"Creating directories",id:"creating-directories",level:2},{value:"Creating a temporary directory",id:"creating-a-temporary-directory",level:2},{value:"Enumerating directories",id:"enumerating-directories",level:2},{value:"Copying and moving directories",id:"copying-and-moving-directories",level:2},{value:"Deleting directory contents",id:"deleting-directory-contents",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"working-with-directories"},"Working with directories"),(0,n.kt)("p",null,"The runtime provides you with capabilities to work with directories on the local\nfile system."),(0,n.kt)("p",null,"For details on creating File objects that point to directories, see\n",(0,n.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/working-with-file-objects-in-air#pointing-a-file-object-to-a-directory"},"Pointing a File object to a directory"),"."),(0,n.kt)("h2",{id:"creating-directories"},"Creating directories"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"File.createDirectory()")," method lets you create a directory. For example,\nthe following code creates a directory named AIR Test as a subdirectory of the\nuser's home directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'var dir:File = File.userDirectory.resolvePath("AIR Test");\ndir.createDirectory();\n')),(0,n.kt)("p",null,"If the directory exists, the ",(0,n.kt)("inlineCode",{parentName:"p"},"createDirectory()")," method does nothing."),(0,n.kt)("p",null,"Also, in some modes, a FileStream object creates directories when opening files.\nMissing directories are created when you instantiate a FileStream instance with\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"fileMode")," parameter of the ",(0,n.kt)("inlineCode",{parentName:"p"},"FileStream()")," constructor set to\n",(0,n.kt)("inlineCode",{parentName:"p"},"FileMode.APPEND")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"FileMode.WRITE"),". For more information, see\n",(0,n.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/reading-and-writing-files/workflow-for-reading-and-writing-files"},"Workflow for reading and writing files"),"."),(0,n.kt)("h2",{id:"creating-a-temporary-directory"},"Creating a temporary directory"),(0,n.kt)("p",null,"The File class includes a ",(0,n.kt)("inlineCode",{parentName:"p"},"createTempDirectory()")," method, which creates a\ndirectory in the temporary directory folder for the System, as in the following\nexample:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"var temp:File = File.createTempDirectory();\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"createTempDirectory()")," method automatically creates a unique temporary\ndirectory (saving you the work of determining a new unique location)."),(0,n.kt)("p",null,"You can use a temporary directory to temporarily store temporary files used for\na session of the application. Note that there is a ",(0,n.kt)("inlineCode",{parentName:"p"},"createTempFile()")," method for\ncreating new, unique temporary files in the System temporary directory."),(0,n.kt)("p",null,"You may want to delete the temporary directory before closing the application,\nas it is ",(0,n.kt)("em",{parentName:"p"},"not")," automatically deleted on all devices."),(0,n.kt)("h2",{id:"enumerating-directories"},"Enumerating directories"),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"getDirectoryListing()")," method or the\n",(0,n.kt)("inlineCode",{parentName:"p"},"getDirectoryListingAsync()")," method of a File object to get an array of File\nobjects pointing to files and subfolders in a directory."),(0,n.kt)("p",null,"For example, the following code lists the contents of the user's documents\ndirectory (without examining subdirectories):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"var directory:File = File.documentsDirectory;\nvar contents:Array = directory.getDirectoryListing();\nfor (var i:uint = 0; i < contents.length; i++)\n{\n    trace(contents[i].name, contents[i].size);\n}\n")),(0,n.kt)("p",null,"When using the asynchronous version of the method, the ",(0,n.kt)("inlineCode",{parentName:"p"},"directoryListing")," event\nobject has a ",(0,n.kt)("inlineCode",{parentName:"p"},"files")," property that is the array of File objects pertaining to\nthe directories:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"var directory:File = File.documentsDirectory;\ndirectory.getDirectoryListingAsync();\ndirectory.addEventListener(FileListEvent.DIRECTORY_LISTING, dirListHandler);\n\nfunction dirListHandler(event:FileListEvent):void\n{\n    var contents:Array = event.files;\n    for (var i:uint = 0; i < contents.length; i++)\n    {\n        trace(contents[i].name, contents[i].size);\n    }\n}\n")),(0,n.kt)("h2",{id:"copying-and-moving-directories"},"Copying and moving directories"),(0,n.kt)("p",null,"You can copy or move a directory, using the same methods as you would to copy or\nmove a file. For example, the following code copies a directory synchronously:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'var sourceDir:File = File.documentsDirectory.resolvePath("AIR Test");\nvar resultDir:File = File.documentsDirectory.resolvePath("AIR Test Copy");\nsourceDir.copyTo(resultDir);\n')),(0,n.kt)("p",null,"When you specify true for the ",(0,n.kt)("inlineCode",{parentName:"p"},"overwrite")," parameter of the ",(0,n.kt)("inlineCode",{parentName:"p"},"copyTo()")," method,\nall files and folders in an existing target directory are deleted and replaced\nwith the files and folders in the source directory (even if the target file does\nnot exist in the source directory)."),(0,n.kt)("p",null,"The directory that you specify as the ",(0,n.kt)("inlineCode",{parentName:"p"},"newLocation")," parameter of the ",(0,n.kt)("inlineCode",{parentName:"p"},"copyTo()"),"\nmethod specifies the path to the resulting directory; it does ",(0,n.kt)("em",{parentName:"p"},"not")," specify the\n",(0,n.kt)("em",{parentName:"p"},"parent")," directory that will contain the resulting directory."),(0,n.kt)("p",null,"For details, see\n",(0,n.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/working-with-files#copying-and-moving-files"},"Copying and moving files"),"."),(0,n.kt)("h2",{id:"deleting-directory-contents"},"Deleting directory contents"),(0,n.kt)("p",null,"The File class includes a ",(0,n.kt)("inlineCode",{parentName:"p"},"deleteDirectory()")," method and a\n",(0,n.kt)("inlineCode",{parentName:"p"},"deleteDirectoryAsync()")," method. These methods delete directories, the first\nworking synchronously, the second working asynchronously (see\n",(0,n.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/air-file-basics"},"AIR file basics"),"). Both methods include a\n",(0,n.kt)("inlineCode",{parentName:"p"},"deleteDirectoryContents")," parameter (which takes a Boolean value); when this\nparameter is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," (the default value is ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),") the call to the method\ndeletes non-empty directories; otherwise, only empty directories are deleted."),(0,n.kt)("p",null,"For example, the following code synchronously deletes the AIR Test subdirectory\nof the user's documents directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'var directory:File = File.documentsDirectory.resolvePath("AIR Test");\ndirectory.deleteDirectory(true);\n')),(0,n.kt)("p",null,"The following code asynchronously deletes the AIR Test subdirectory of the\nuser's documents directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'var directory:File = File.documentsDirectory.resolvePath("AIR Test");\ndirectory.addEventListener(Event.COMPLETE, completeHandler)\ndirectory.deleteDirectoryAsync(true);\n\nfunction completeHandler(event:Event):void {\n    trace("Deleted.")\n}\n')),(0,n.kt)("p",null,"Also included are the ",(0,n.kt)("inlineCode",{parentName:"p"},"moveToTrash()")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"moveToTrashAsync()")," methods, which\nyou can use to move a directory to the System trash. For details, see\n",(0,n.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/working-with-files#moving-a-file-to-the-trash"},"Moving a file to the trash"),"."))}m.isMDXComponent=!0}}]);