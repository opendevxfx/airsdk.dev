"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[88813],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>g});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?t.createElement(g,l(l({ref:n},p),{},{components:a})):t.createElement(g,l({ref:n},p))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26130:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=a(87462),r=(a(67294),a(3905));a(73992),a(18679);const i={title:"Tasks",sidebar_position:2},l=void 0,o={unversionedId:"tools/building/ant/tasks",id:"tools/building/ant/tasks",title:"Tasks",description:"AIR provides a series of Ant tasks for each of the main commands used when compiling and packaging actionscript code and AIR applications.",source:"@site/docs/tools/building/ant/tasks.mdx",sourceDirName:"tools/building/ant",slug:"/tools/building/ant/tasks",permalink:"/docs/tools/building/ant/tasks",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/tools/building/ant/tasks.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Tasks",sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/tools/building/ant/"},next:{title:"Examples",permalink:"/docs/tools/building/ant/examples"}},s={},c=[{value:"<code>mxmlc</code>",id:"mxmlc",level:2},{value:"<code>compc</code>",id:"compc",level:2},{value:"<code>asdoc</code>",id:"asdoc",level:2},{value:"<code>adt</code>",id:"adt",level:2},{value:"<code>adl</code>",id:"adl",level:2}],p={toc:c},m="wrapper";function d(e){let{components:n,...a}=e;return(0,r.kt)(m,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"AIR provides a series of Ant tasks for each of the main commands used when compiling and packaging actionscript code and AIR applications."),(0,r.kt)("p",null,"These tasks are made available to your ant script by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"taskdef")," pointed to the AIR SDK as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<taskdef resource="flexTasks.tasks" classpath="${env.AIR_HOME}/ant"/>\n')),(0,r.kt)("p",null,"This makes the following tasks available"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mxmlc"),": actionscript/mxml compiler for generating ",(0,r.kt)("inlineCode",{parentName:"li"},"swf")," files; "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compc"),": actionscript component compiler, for generating ",(0,r.kt)("inlineCode",{parentName:"li"},"swc")," libraries;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"asdoc"),": ASDoc documentation generator;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"adt")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"adl"),": AIR developer tool and the AIR debug launcher via an ",(0,r.kt)("inlineCode",{parentName:"li"},"exec")," task.")),(0,r.kt)("h2",{id:"mxmlc"},(0,r.kt)("inlineCode",{parentName:"h2"},"mxmlc")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mxmlc")," task gives you access to a task that implements all of the features of the ",(0,r.kt)("inlineCode",{parentName:"p"},"mxmlc")," command for compiling ",(0,r.kt)("inlineCode",{parentName:"p"},"as")," (AS3) and ",(0,r.kt)("inlineCode",{parentName:"p"},"mxml")," files into a ",(0,r.kt)("inlineCode",{parentName:"p"},"swf"),". "),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<mxmlc file="src/Main.as" output="output.swf">\n    <source-path path-element="src"/>\n    <source-path path-element="${AIR_HOME}/frameworks"/>\n</mxmlc>\n')),(0,r.kt)("p",null,"The tags for the ",(0,r.kt)("inlineCode",{parentName:"p"},"mxmlc")," task align with the parameters for the ",(0,r.kt)("inlineCode",{parentName:"p"},"mxmlc")," command line utility. You can see these by running ",(0,r.kt)("inlineCode",{parentName:"p"},"mxmlc -help list")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"mxmlc -help advanced"),") on the command line."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"mxmlc parameter list"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ mxmlc -help advanced\nAdobe ActionScript Compiler (mxmlc)\nVersion 2.0.0 build 1234\nCopyright 2004-2012 Adobe Systems Incorporated. All rights reserved.\n\n-advanced-telemetry\n-advanced-telemetry-password <string>\n-compiler.accessible\n-compiler.actionscript-file-encoding <string>\n-compiler.allow-source-path-overlap\n-compiler.as3\n-compiler.compress\n-compiler.context-root <context-path>\n-compiler.debug\n-compiler.defaults-css-files [filename] [...]\n-compiler.defaults-css-url <string>\n-compiler.define <name> <value>\n-compiler.enable-runtime-design-layers\n-compiler.es\n-compiler.external-library-path [path-element] [...]\n-compiler.fonts.advanced-anti-aliasing\n-compiler.fonts.languages.language-range <lang> <range>\n-compiler.fonts.local-font-paths [path-element] [...]\n-compiler.fonts.local-fonts-snapshot <string>\n-compiler.fonts.managers [manager-class] [...]\n-compiler.fonts.max-cached-fonts <string>\n-compiler.fonts.max-glyphs-per-face <string>\n-compiler.headless-server\n-compiler.include-libraries [library] [...]\n-compiler.inline\n-compiler.isolate-styles\n-compiler.keep-all-type-selectors\n-compiler.keep-as3-metadata [name] [...]\n-compiler.library-path [path-element] [...]\n-compiler.locale [locale-element] [...]\n-compiler.minimum-supported-version <string>\n-compiler.mobile\n-compiler.mxml.compatibility-version <version>\n-compiler.mxml.minimum-supported-version <string>\n-compiler.namespaces.namespace [uri] [manifest] [...]\n-compiler.omit-trace-statements\n-compiler.optimize\n-compiler.preloader <string>\n-compiler.remove-dead-code\n-compiler.report-invalid-styles-as-warnings\n-compiler.report-missing-required-skin-parts-as-warnings\n-compiler.services <filename>\n-compiler.show-actionscript-warnings\n-compiler.show-binding-warnings\n-compiler.show-invalid-css-property-warnings\n-compiler.show-multiple-definition-warnings\n-compiler.show-shadowed-device-font-warnings\n-compiler.show-unused-type-selector-warnings\n-compiler.source-path [path-element] [...]\n-compiler.strict\n-compiler.theme [filename] [...]\n-compiler.verbose-stacktraces\n-compiler.warn-array-tostring-changes\n-compiler.warn-assignment-within-conditional\n-compiler.warn-bad-array-cast\n-compiler.warn-bad-bool-assignment\n-compiler.warn-bad-date-cast\n-compiler.warn-bad-es3-type-method\n-compiler.warn-bad-es3-type-prop\n-compiler.warn-bad-nan-comparison\n-compiler.warn-bad-null-assignment\n-compiler.warn-bad-null-comparison\n-compiler.warn-bad-undefined-comparison\n-compiler.warn-boolean-constructor-with-no-args\n-compiler.warn-changes-in-resolve\n-compiler.warn-class-is-sealed\n-compiler.warn-const-not-initialized\n-compiler.warn-constructor-returns-value\n-compiler.warn-deprecated-event-handler-error\n-compiler.warn-deprecated-function-error\n-compiler.warn-deprecated-property-error\n-compiler.warn-duplicate-argument-names\n-compiler.warn-duplicate-variable-def\n-compiler.warn-for-var-in-changes\n-compiler.warn-import-hides-class\n-compiler.warn-instance-of-changes\n-compiler.warn-internal-error\n-compiler.warn-level-not-supported\n-compiler.warn-missing-namespace-decl\n-compiler.warn-negative-uint-literal\n-compiler.warn-no-constructor\n-compiler.warn-no-explicit-super-call-in-constructor\n-compiler.warn-no-type-decl\n-compiler.warn-number-from-string-changes\n-compiler.warn-scoping-change-in-this\n-compiler.warn-slow-text-field-addition\n-compiler.warn-unlikely-function-value\n-compiler.warn-xml-class-has-changed\n-debug-password <string>\n-default-background-color <int>\n-default-frame-rate <int>\n-default-script-limits <max-recursion-depth> <max-execution-time>\n-default-size <width> <height>\n-dependency-graph <filename>\n-dump-config <filename>\n-error-problems [class] [...]\n-externs [symbol] [...]\n-frames.frame [label] [classname] [...]\n-help [keyword] [...]\n-ignore-problems [class] [...]\n-include-inheritance-dependencies-only\n-include-resource-bundles [bundle] [...]\n-includes [symbol] [...]\n-link-report <filename>\n-load-config <filename>\n-load-externs <filename>\n-metadata.contributor <name>\n-metadata.creator <name>\n-metadata.date <text>\n-metadata.description <text>\n-metadata.language <code>\n-metadata.localized-description <text> <lang>\n-metadata.localized-title <title> <lang>\n-metadata.publisher <name>\n-metadata.title <text>\n-output <filename>\n-raw-metadata <text>\n-remove-unused-rsls\n-resource-bundle-list <filename>\n-runtime-shared-libraries [url] [...]\n-runtime-shared-library-path [path-element] [rsl-url] [policy-file-url] [rsl-url] [policy-file-url]\n-runtime-shared-library-settings.application-domain [path-element] [application-domain-target] [...]\n-runtime-shared-library-settings.force-rsls [path-element] [...]\n-single-thread\n-size-report <filename>\n-static-link-runtime-shared-libraries\n-swf-version <int>\n-target-player <version>\n-tools-locale <string>\n-use-direct-blit\n-use-gpu\n-use-network\n-verify-digests\n-version\n-warning-problems [class] [...]\n-warnings\n")))),(0,r.kt)("p",null,"To describe one of these parameters in detail you can call ",(0,r.kt)("inlineCode",{parentName:"p"},"mxmlc -help <parameter>"),", eg:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ mxmlc -help use-network\nAdobe ActionScript Compiler (mxmlc)\nVersion 2.0.0 build 1234\nCopyright 2004-2012 Adobe Systems Incorporated. All rights reserved.\n\n-use-network\n    toggle whether the SWF is flagged for access to network resources\n")),(0,r.kt)("h2",{id:"compc"},(0,r.kt)("inlineCode",{parentName:"h2"},"compc")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"compc")," (component compiler) task is used to generate ",(0,r.kt)("inlineCode",{parentName:"p"},"swc")," component libraries from source code and asset files (such as images, css etc)."),(0,r.kt)("p",null,"For example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<compc output="output.swc">\n    <source-path path-element="src"/>\n    <include-sources dir="src" includes="*"/>\n</compc>\n')),(0,r.kt)("p",null,"The tags for the ",(0,r.kt)("inlineCode",{parentName:"p"},"compc")," task align with the parameters for the ",(0,r.kt)("inlineCode",{parentName:"p"},"compc")," command line utility. You can see these by running ",(0,r.kt)("inlineCode",{parentName:"p"},"compc -help list")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"compc -help advanced"),") on the command line."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"compc parameter list"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ compc -help advanced\nAdobe SWC Component Compiler (compc)\nVersion 2.0.0 build 1234\nCopyright 2004-2012 Adobe Systems Incorporated. All rights reserved.\n\n-advanced-telemetry\n-advanced-telemetry-password <string>\n-compiler.accessible\n-compiler.actionscript-file-encoding <string>\n-compiler.allow-source-path-overlap\n-compiler.as3\n-compiler.compress\n-compiler.context-root <context-path>\n-compiler.debug\n-compiler.defaults-css-files [filename] [...]\n-compiler.defaults-css-url <string>\n-compiler.define <name> <value>\n-compiler.enable-runtime-design-layers\n-compiler.es\n-compiler.external-library-path [path-element] [...]\n-compiler.fonts.advanced-anti-aliasing\n-compiler.fonts.languages.language-range <lang> <range>\n-compiler.fonts.local-font-paths [path-element] [...]\n-compiler.fonts.local-fonts-snapshot <string>\n-compiler.fonts.managers [manager-class] [...]\n-compiler.fonts.max-cached-fonts <string>\n-compiler.fonts.max-glyphs-per-face <string>\n-compiler.headless-server\n-compiler.include-libraries [library] [...]\n-compiler.inline\n-compiler.isolate-styles\n-compiler.keep-all-type-selectors\n-compiler.keep-as3-metadata [name] [...]\n-compiler.library-path [path-element] [...]\n-compiler.locale [locale-element] [...]\n-compiler.minimum-supported-version <string>\n-compiler.mobile\n-compiler.mxml.compatibility-version <version>\n-compiler.mxml.minimum-supported-version <string>\n-compiler.namespaces.namespace [uri] [manifest] [...]\n-compiler.omit-trace-statements\n-compiler.optimize\n-compiler.preloader <string>\n-compiler.remove-dead-code\n-compiler.report-invalid-styles-as-warnings\n-compiler.report-missing-required-skin-parts-as-warnings\n-compiler.services <filename>\n-compiler.show-actionscript-warnings\n-compiler.show-binding-warnings\n-compiler.show-invalid-css-property-warnings\n-compiler.show-multiple-definition-warnings\n-compiler.show-shadowed-device-font-warnings\n-compiler.show-unused-type-selector-warnings\n-compiler.source-path [path-element] [...]\n-compiler.strict\n-compiler.theme [filename] [...]\n-compiler.verbose-stacktraces\n-compiler.warn-array-tostring-changes\n-compiler.warn-assignment-within-conditional\n-compiler.warn-bad-array-cast\n-compiler.warn-bad-bool-assignment\n-compiler.warn-bad-date-cast\n-compiler.warn-bad-es3-type-method\n-compiler.warn-bad-es3-type-prop\n-compiler.warn-bad-nan-comparison\n-compiler.warn-bad-null-assignment\n-compiler.warn-bad-null-comparison\n-compiler.warn-bad-undefined-comparison\n-compiler.warn-boolean-constructor-with-no-args\n-compiler.warn-changes-in-resolve\n-compiler.warn-class-is-sealed\n-compiler.warn-const-not-initialized\n-compiler.warn-constructor-returns-value\n-compiler.warn-deprecated-event-handler-error\n-compiler.warn-deprecated-function-error\n-compiler.warn-deprecated-property-error\n-compiler.warn-duplicate-argument-names\n-compiler.warn-duplicate-variable-def\n-compiler.warn-for-var-in-changes\n-compiler.warn-import-hides-class\n-compiler.warn-instance-of-changes\n-compiler.warn-internal-error\n-compiler.warn-level-not-supported\n-compiler.warn-missing-namespace-decl\n-compiler.warn-negative-uint-literal\n-compiler.warn-no-constructor\n-compiler.warn-no-explicit-super-call-in-constructor\n-compiler.warn-no-type-decl\n-compiler.warn-number-from-string-changes\n-compiler.warn-scoping-change-in-this\n-compiler.warn-slow-text-field-addition\n-compiler.warn-unlikely-function-value\n-compiler.warn-xml-class-has-changed\n-debug-password <string>\n-default-background-color <int>\n-default-frame-rate <int>\n-default-script-limits <max-recursion-depth> <max-execution-time>\n-default-size <width> <height>\n-dependency-graph <filename>\n-directory\n-dump-config <filename>\n-error-problems [class] [...]\n-externs [symbol] [...]\n-frames.frame [label] [classname] [...]\n-help [keyword] [...]\n-ignore-problems [class] [...]\n-include-classes [class] [...]\n-include-file [name] [path] [...]\n-include-inheritance-dependencies-only\n-include-lookup-only\n-include-namespaces [uri] [...]\n-include-resource-bundles [bundle] [...]\n-include-sources [path-element] [...]\n-include-stylesheet [name] [path] [...]\n-includes [symbol] [...]\n-link-report <filename>\n-load-config <filename>\n-load-externs <filename>\n-metadata.contributor <name>\n-metadata.creator <name>\n-metadata.date <text>\n-metadata.description <text>\n-metadata.language <code>\n-metadata.localized-description <text> <lang>\n-metadata.localized-title <title> <lang>\n-metadata.publisher <name>\n-metadata.title <text>\n-output <filename>\n-raw-metadata <text>\n-remove-unused-rsls\n-resource-bundle-list <filename>\n-runtime-shared-libraries [url] [...]\n-runtime-shared-library-path [path-element] [rsl-url] [policy-file-url] [rsl-url] [policy-file-url]\n-runtime-shared-library-settings.application-domain [path-element] [application-domain-target] [...]\n-runtime-shared-library-settings.force-rsls [path-element] [...]\n-single-thread\n-size-report <filename>\n-static-link-runtime-shared-libraries\n-swf-version <int>\n-target-player <version>\n-tools-locale <string>\n-use-direct-blit\n-use-gpu\n-use-network\n-verify-digests\n-version\n-warning-problems [class] [...]\n-warnings\n")))),(0,r.kt)("p",null,"To describe one of these parameters in detail you can call ",(0,r.kt)("inlineCode",{parentName:"p"},"compc -help <parameter>"),", eg:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ compc -help include-sources\nAdobe SWC Component Compiler (compc)\nVersion 2.0.0 build 1234\nCopyright 2004-2012 Adobe Systems Incorporated. All rights reserved.\n\n-include-sources [path-element] [...]\n    a list of directories and source files to include in the output SWC\n    (repeatable)\n")),(0,r.kt)("h2",{id:"asdoc"},(0,r.kt)("inlineCode",{parentName:"h2"},"asdoc")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"asdoc")," task is a command-line tool that you can use to create API language reference documentation as HTML pages from the ActionScript classes and MXML files."),(0,r.kt)("h2",{id:"adt"},(0,r.kt)("inlineCode",{parentName:"h2"},"adt")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"adt")," task is the AIR Developer Tool and represents the key packaging tool for creating AIR applications and components. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"adt")," to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Package an AIR application in a variety of formats ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".air")," installation file;"),(0,r.kt)("li",{parentName:"ul"},"iOS ",(0,r.kt)("inlineCode",{parentName:"li"},"ipa"),";"),(0,r.kt)("li",{parentName:"ul"},"Android ",(0,r.kt)("inlineCode",{parentName:"li"},"apk")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"aab"),";"),(0,r.kt)("li",{parentName:"ul"},"native installer eg ",(0,r.kt)("inlineCode",{parentName:"li"},"exe")," on Windows or ",(0,r.kt)("inlineCode",{parentName:"li"},"dmg")," on macOS"))),(0,r.kt)("li",{parentName:"ul"},"Package a native extension as an AIR Native Extension (ANE) file;"),(0,r.kt)("li",{parentName:"ul"},"Sign an AIR application with a digital certificate;"),(0,r.kt)("li",{parentName:"ul"},"Install, uninstall and launch applications on connected devices;")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<exec executable="${env.AIR_HOME}/bin/adt">\n    <arg line="-package"/>\n    <arg line="-storetype pkcs12"/>\n    <arg line="-keystore certificate.p12"/>\n    <arg line="-storepass password"/>\n    ...\n</exec>\n')),(0,r.kt)("h2",{id:"adl"},(0,r.kt)("inlineCode",{parentName:"h2"},"adl")),(0,r.kt)("p",null,"ADL is a command line debugger for Adobe\xae AIR\u2122 applications in the AIR SDK.\nYou can use this to launch an AIR application without packaging into a captive runtime application or using the AIR Runtime."),(0,r.kt)("p",null,"This command can be called through an ",(0,r.kt)("inlineCode",{parentName:"p"},"exec")," task similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"adt"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<exec executable="${env.AIR_HOME}/bin/adl">\n    ...\n</exec>\n')))}d.isMDXComponent=!0},18679:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(67294),r=a(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:a,className:l}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:a},n)}},73992:(e,n,a)=>{a.d(n,{Z:()=>y});var t=a(87462),r=a(67294),i=a(86010),l=a(72957),o=a(16550),s=a(75238),c=a(33609),p=a(92560);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}function d(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??m(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function u(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:a}=e;const t=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function h(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,i=d(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[s,c]=g({queryString:a,groupId:t}),[m,h]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,p.Nk)(a);return[t,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:t}),f=(()=>{const e=s??m;return u({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),h(e)}),[c,h,i]),tabValues:i}}var f=a(51048);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:n,block:a,selectedValue:o,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const n=e.currentTarget,a=p.indexOf(n),t=c[a].value;t!==o&&(m(n),s(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;n=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;n=p[a]??p[p.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},n)},c.map((e=>{let{value:n,label:a,attributes:l}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>p.push(e),onKeyDown:u,onClick:d},l,{className:(0,i.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":o===n})}),a??n)})))}function w(e){let{lazy:n,children:a,selectedValue:t}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function v(e){const n=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},r.createElement(k,(0,t.Z)({},e,n)),r.createElement(w,(0,t.Z)({},e,n)))}function y(e){const n=(0,f.Z)();return r.createElement(v,(0,t.Z)({key:String(n)},e))}}}]);