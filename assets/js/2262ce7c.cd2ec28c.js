"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[75065],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},90978:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const o={sidebar_position:1},r="Basics of internationalizing applications",l={unversionedId:"development/internationalizing-applications/internationalizing-applications/basics-of-internationalizing-applications",id:"development/internationalizing-applications/internationalizing-applications/basics-of-internationalizing-applications",title:"Basics of internationalizing applications",description:"The terms globalization and internationalization are sometimes used",source:"@site/docs/development/internationalizing-applications/internationalizing-applications/basics-of-internationalizing-applications.md",sourceDirName:"development/internationalizing-applications/internationalizing-applications",slug:"/development/internationalizing-applications/internationalizing-applications/basics-of-internationalizing-applications",permalink:"/docs/development/internationalizing-applications/internationalizing-applications/basics-of-internationalizing-applications",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/internationalizing-applications/internationalizing-applications/basics-of-internationalizing-applications.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"Internationalizing applications",permalink:"/docs/development/internationalizing-applications/internationalizing-applications/"},next:{title:"Overview of the flash.globalization package",permalink:"/docs/development/internationalizing-applications/internationalizing-applications/overview-of-the-flash-globalization-package"}},s={},p=[],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basics-of-internationalizing-applications"},"Basics of internationalizing applications"),(0,i.kt)("p",null,"The terms globalization and internationalization are sometimes used\ninterchangeably. But most definitions of these terms say that globalization\nrefers to a combination of business and engineering processes while\ninternationalization refers to engineering alone."),(0,i.kt)("p",null,"Here are some definitions for important terms:"),(0,i.kt)("p",null,"Globalization",(0,i.kt)("br",{parentName:"p"}),"\n","A broad range of engineering and business processes needed for preparing and\nlaunching products and company activities globally. Globalization consists of\nengineering activities like internationalization, localization and culturization\nand business activities like product management, financial planning, marketing,\nand legal work. Globalization is sometimes abbreviated as ",(0,i.kt)("em",{parentName:"p"},"G11n")," (which stands\nfor the letter G, then 11 more letters, and then the letter n). ",(0,i.kt)("em",{parentName:"p"},'"Globalization\nis what businesses do."')),(0,i.kt)("p",null,"Internationalization",(0,i.kt)("br",{parentName:"p"}),"\n","An engineering process for generalizing a product so that it can handle multiple\nlanguages, scripts and cultural conventions (including currencies, sorting\nrules, number and date formats, and more) without the need for redesign or\nrecompilation. This process can be divided into two sets of activities:\nenablement and localization. Internationalization is sometimes known as\n",(0,i.kt)("em",{parentName:"p"},"world-readiness")," , and sometimes abbreviated as ",(0,i.kt)("em",{parentName:"p"},"I18n"),". ",(0,i.kt)("em",{parentName:"p"},'"Internationalization\nis what engineers do."')),(0,i.kt)("p",null,"Localization",(0,i.kt)("br",{parentName:"p"}),"\n","A process of adapting a product or service to a particular language, culture,\nand desired local appearance. Localization is sometimes abbreviated as ",(0,i.kt)("em",{parentName:"p"},"L10n"),".\n",(0,i.kt)("em",{parentName:"p"},'"Localization is what translators do."')),(0,i.kt)("p",null,"Culturization",(0,i.kt)("br",{parentName:"p"}),"\n","An engineering process for developing or adapting specific features for the\nunique needs of a culture. Examples include the Japanese publishing features\navailable in Adobe InDesign, and the Hanko support feature in Adobe Acrobat."),(0,i.kt)("p",null,"Some other important internationalization terms can be defined as follows:"),(0,i.kt)("p",null,"Character Set",(0,i.kt)("br",{parentName:"p"}),"\n","The characters used by a language or by a group of languages. A character set\nincludes national characters, special characters (such as punctuation marks and\nmathematical symbols), numeric digits, and computer control characters."),(0,i.kt)("p",null,"Collation",(0,i.kt)("br",{parentName:"p"}),"\n","The sorting of text into a proper order for a given locale."),(0,i.kt)("p",null,"Locale",(0,i.kt)("br",{parentName:"p"}),"\n","A value that represents the language and cultural conventions used in a\ngeographical, political, or cultural region (which in many cases indicates a\nsingle country). A unique locale identifier (locale ID) represents this value.\nThe locale ID is used to look up a set of locale data that provides\nlocale-specific support. This support applies to measurement units, the parsing\nand formatting of numbers and dates, and so on."),(0,i.kt)("p",null,"Resource Bundle",(0,i.kt)("br",{parentName:"p"}),"\n","A stored set of locale-specific elements that are created for a locale in which\nan application is used. A resource bundle typically contains all text elements\nin the application's user interface. Within the bundle, these elements are\ntranslated into the appropriate language for the given locale. It can also\ncontain other settings that alter the layout or behavior of the user interface\nfor a specific locale. A resource bundle can contain other media types, or\nreferences to other media types, that are locale-specific."))}d.isMDXComponent=!0}}]);