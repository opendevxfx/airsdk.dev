"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[11738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),g=i,d=m["".concat(u,".").concat(g)]||m[g]||l[g]||o;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},47640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:2},r="Creating native menus (AIR)",s={unversionedId:"development/user-interaction/working-with-menus/creating-native-menus-air",id:"development/user-interaction/working-with-menus/creating-native-menus-air",title:"Creating native menus (AIR)",description:"This topic describes how to create the various types of native menu supported by",source:"@site/docs/development/user-interaction/working-with-menus/creating-native-menus-air.md",sourceDirName:"development/user-interaction/working-with-menus",slug:"/development/user-interaction/working-with-menus/creating-native-menus-air",permalink:"/docs/development/user-interaction/working-with-menus/creating-native-menus-air",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/user-interaction/working-with-menus/creating-native-menus-air.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Menu basics",permalink:"/docs/development/user-interaction/working-with-menus/menu-basics"},next:{title:"About context menus in HTML (AIR)",permalink:"/docs/development/user-interaction/working-with-menus/about-context-menus-in-html-air"}},u={},c=[{value:"Creating a root menu object",id:"creating-a-root-menu-object",level:2},{value:"Setting the application menu or window menu",id:"setting-the-application-menu-or-window-menu",level:4},{value:"Setting a context menu on an interactive object",id:"setting-a-context-menu-on-an-interactive-object",level:4},{value:"Setting a dock icon menu or system tray icon menu",id:"setting-a-dock-icon-menu-or-system-tray-icon-menu",level:4},{value:"Displaying a menu as a pop-up",id:"displaying-a-menu-as-a-pop-up",level:4},{value:"Creating a submenu",id:"creating-a-submenu",level:2},{value:"Creating a menu command",id:"creating-a-menu-command",level:2},{value:"Creating a menu separator line",id:"creating-a-menu-separator-line",level:2}],p={toc:c},m="wrapper";function l(e){let{components:t,...o}=e;return(0,i.kt)(m,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-native-menus-air"},"Creating native menus (AIR)"),(0,i.kt)("p",null,"This topic describes how to create the various types of native menu supported by\nAIR."),(0,i.kt)("h2",{id:"creating-a-root-menu-object"},"Creating a root menu object"),(0,i.kt)("p",null,"To create a NativeMenu object to serve as the root of the menu, use the\nNativeMenu constructor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var root:NativeMenu = new NativeMenu();\n")),(0,i.kt)("p",null,"For application and window menus, the root menu represents the menu bar and\nshould only contain items that open submenus. Context menu and pop-up menus do\nnot have a menu bar, so the root menu can contain commands and separator lines\nas well as submenus."),(0,i.kt)("p",null,"After the menu is created, you can add menu items. Items appear in the menu in\nthe order in which they are added, unless you add the items at a specific index\nusing the ",(0,i.kt)("inlineCode",{parentName:"p"},"addItemAt()")," method of a menu object."),(0,i.kt)("p",null,"Assign the menu as an application, window, icon, or context menu, or display it\nas a pop-up menu as shown in the following sections:"),(0,i.kt)("h4",{id:"setting-the-application-menu-or-window-menu"},"Setting the application menu or window menu"),(0,i.kt)("p",null,"It's important that your code accommodate both application menus (supported on\nMac OS) and window menus (supported on other operating systems)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var root:NativeMenu = new NativeMenu();\nif (NativeApplication.supportsMenu)\n{\n    NativeApplication.nativeApplication.menu = root;\n}\nelse if (NativeWindow.supportsMenu)\n{\n    nativeWindow.menu = root;\n}\n")),(0,i.kt)("p",null,"Note: Mac OS defines a menu containing standard items for every application.\nAssigning a new NativeMenu object to the ",(0,i.kt)("inlineCode",{parentName:"p"},"menu")," property of the\nNativeApplication object replaces the standard menu. You can also use the\nstandard menu instead of replacing it."),(0,i.kt)("p",null,"The Adobe Flex provides a FlexNativeMenu class for easily creating menus that\nwork across platforms. If you are using the Flex Framework, use the\nFlexNativeMenu classes instead of the NativeMenu class."),(0,i.kt)("h4",{id:"setting-a-context-menu-on-an-interactive-object"},"Setting a context menu on an interactive object"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"interactiveObject.contextMenu = root;\n")),(0,i.kt)("h4",{id:"setting-a-dock-icon-menu-or-system-tray-icon-menu"},"Setting a dock icon menu or system tray icon menu"),(0,i.kt)("p",null,"It's important that your code accommodate both application menus (supported on\nMac OS) and window menus (supported on other operating systems)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"if (NativeApplication.supportsSystemTrayIcon)\n{\n    SystemTrayIcon(NativeApplication.nativeApplication.icon).menu = root;\n}\nelse if (NativeApplication.supportsDockIcon)\n{\n    DockIcon(NativeApplication.nativeApplication.icon).menu = root;\n}\n")),(0,i.kt)("p",null,"Note: Mac OS X defines a standard menu for the application dock icon. When you\nassign a new NativeMenu to the menu property of the DockIcon object, the items\nin that menu are displayed above the standard items. You cannot remove, access,\nor modify the standard menu items."),(0,i.kt)("h4",{id:"displaying-a-menu-as-a-pop-up"},"Displaying a menu as a pop-up"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"root.display(stage, x, y);\n")),(0,i.kt)("h2",{id:"creating-a-submenu"},"Creating a submenu"),(0,i.kt)("p",null,"To create a submenu, you add a NativeMenuItem object to the parent menu and then\nassign the NativeMenu object defining the submenu to the item's ",(0,i.kt)("inlineCode",{parentName:"p"},"submenu"),"\nproperty. AIR provides two ways to create submenu items and their associated\nmenu object:"),(0,i.kt)("p",null,"You can create a menu item and its related menu object in one step with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"addSubmenu()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'var editMenuItem:NativeMenuItem = root.addSubmenu(new NativeMenu(), "Edit");\n')),(0,i.kt)("p",null,"You can also create the menu item and assign the menu object to its ",(0,i.kt)("inlineCode",{parentName:"p"},"submenu"),"\nproperty separately:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'var editMenuItem:NativeMenuItem = root.addItem("Edit", false);\neditMenuItem.submenu = new NativeMenu();\n')),(0,i.kt)("h2",{id:"creating-a-menu-command"},"Creating a menu command"),(0,i.kt)("p",null,"To create a menu command, add a NativeMenuItem object to a menu and add an event\nlistener referencing the function implementing the menu command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'var copy:NativeMenuItem = new NativeMenuItem("Copy", false);\ncopy.addEventListener(Event.SELECT, onCopyCommand);\neditMenu.addItem(copy);\n')),(0,i.kt)("p",null,"You can listen for the ",(0,i.kt)("inlineCode",{parentName:"p"},"select")," event on the command item itself (as shown in\nthe example), or you can listen for the ",(0,i.kt)("inlineCode",{parentName:"p"},"select")," event on a parent menu object."),(0,i.kt)("p",null,"Note: Menu items that represent submenus and separator lines do not dispatch\n",(0,i.kt)("inlineCode",{parentName:"p"},"select")," events and so cannot be used as commands."),(0,i.kt)("h2",{id:"creating-a-menu-separator-line"},"Creating a menu separator line"),(0,i.kt)("p",null,"To create a separator line, create a NativeMenuItem, setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"isSeparator"),"\nparameter to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," in the constructor. Then add the separator item to the menu\nin the correct location:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'var separatorA:NativeMenuItem = new NativeMenuItem("A", true);\neditMenu.addItem(separatorA);\n')),(0,i.kt)("p",null,"The label specified for the separator, if any, is not displayed."),(0,i.kt)("p",null,"More Help topics"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(72004).Z,width:"16",height:"16"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20150519004618/https://help.adobe.com/en_US/Flex/4.0/UsingSDK/WSacd9bdd0c5c09f4a-690d4877120e8b878b0-8000.html"},"Using the Flex AIR components")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20150214073806/https://www.adobe.com/devnet/air/articles/developing_crossplatform.html"},"Developing cross-platform AIR applications")))}l.isMDXComponent=!0},72004:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAsSAAALEgHS3X78AAAAFHRFWHRDcmVhdGlvbiBUaW1lADQvNS8wN+R1htQAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzOY1kYDAAAEEXRFWHRYTUw6Y29tLmFkb2JlLnhtcAA8P3hwYWNrZXQgYmVnaW49IiAgICIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA0LjEtYzAzNCA0Ni4yNzI5NzYsIFNhdCBKYW4gMjcgMjAwNyAyMjoxMTo0MSAgICAgICAgIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eGFwPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHhhcDpDcmVhdG9yVG9vbD5BZG9iZSBGaXJld29ya3MgQ1MzPC94YXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4YXA6Q3JlYXRlRGF0ZT4yMDA3LTA0LTA1VDIwOjA0OjM2WjwveGFwOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4YXA6TW9kaWZ5RGF0ZT4yMDA3LTA0LTA1VDIwOjUyOjA2WjwveGFwOk1vZGlmeURhdGU+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICCdW47vAAABbUlEQVQokY1SsYoCMRCdZBdRK2tLK8F/sNdKLCxUsPED7PcvBEsRhAUbG62s7KwFsfAn1EpnJpvkitHg7R3cvSJMJvMmb/Kier1eFEVRFGmtAcA5Z6211mYfCNv9fh9/QrLOOfgO/8bj8Yi996FrCCT+CUSMpaUxZrVaSb/T6ZQkSWDmtMXMrJSy1nrvl8tlmqYAoLWW28IAsgKAJiJERETpYYzJsqzdbidJgoiDwaDT6RhjmNkYAwAaEYXjnBsOh7vdrl6vbzabRqPR7/e73e56vZZqZgaAmIgAQOTO5/PFYiEK0zQdj8fb7fZ6vQJAeD0teohIVDIzERUKhVarNZvNms1msVgkIsm/ZgiS5F5mHo1Gt9ttOp2ez+fJZEJvAICq1WrBYKWU2JTzIWQul0uMiPL8chCQs0wIr6G995/+h+oQhGoAiBHxV0JYc/8qPh6Ph8MB/oFqtVoul5X3/vl83u/3PwmlUqlSqXwB0IXy0gbtBNUAAAAASUVORK5CYII="}}]);