"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[13092],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=A(e,["components","mdxType","originalType","parentName"]),c=l(n),h=a,g=c["".concat(o,".").concat(h)]||c[h]||d[h]||i;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var A={};for(var o in t)hasOwnProperty.call(t,o)&&(A[o]=t[o]);A.originalType=e,A[c]="string"==typeof e?e:a,s[1]=A;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},60668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>A,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:8},s="Finding substrings and patterns in strings",A={unversionedId:"development/core-actionscript-classes/working-with-strings/finding-substrings-and-patterns-in-strings",id:"development/core-actionscript-classes/working-with-strings/finding-substrings-and-patterns-in-strings",title:"Finding substrings and patterns in strings",description:"Substrings are sequential characters within a string. For example, the string",source:"@site/docs/development/core-actionscript-classes/working-with-strings/finding-substrings-and-patterns-in-strings.md",sourceDirName:"development/core-actionscript-classes/working-with-strings",slug:"/development/core-actionscript-classes/working-with-strings/finding-substrings-and-patterns-in-strings",permalink:"/docs/development/core-actionscript-classes/working-with-strings/finding-substrings-and-patterns-in-strings",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/core-actionscript-classes/working-with-strings/finding-substrings-and-patterns-in-strings.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"mainSidebar",previous:{title:"Concatenating strings",permalink:"/docs/development/core-actionscript-classes/working-with-strings/concatenating-strings"},next:{title:"Converting strings between uppercase and lowercase",permalink:"/docs/development/core-actionscript-classes/working-with-strings/converting-strings-between-uppercase-and-lowercase"}},o={},l=[{value:"Finding a substring by character position",id:"finding-a-substring-by-character-position",level:2},{value:"Finding the character position of a matching substring",id:"finding-the-character-position-of-a-matching-substring",level:2},{value:"Creating an array of substrings segmented by a delimiter",id:"creating-an-array-of-substrings-segmented-by-a-delimiter",level:2},{value:"Finding patterns in strings and replacing substrings",id:"finding-patterns-in-strings-and-replacing-substrings",level:2},{value:"Finding matching substrings",id:"finding-matching-substrings",level:4},{value:"Replacing matched substrings",id:"replacing-matched-substrings",level:4},{value:"Adobe recommends",id:"adobe-recommends",level:2}],p={toc:l},c="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"finding-substrings-and-patterns-in-strings"},"Finding substrings and patterns in strings"),(0,a.kt)("p",null,"Substrings are sequential characters within a string. For example, the string\n",(0,a.kt)("inlineCode",{parentName:"p"},'"abc"')," has the following substrings: ",(0,a.kt)("inlineCode",{parentName:"p"},'""'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"a"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"ab"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"abc"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"b"'),",\n",(0,a.kt)("inlineCode",{parentName:"p"},'"bc"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"c"'),". You can use ActionScript methods to locate substrings of a\nstring."),(0,a.kt)("p",null,"Patterns are defined in ActionScript by strings or by regular expressions. For\nexample, the following regular expression defines a specific pattern\u2014the letters\nA, B, and C followed by a digit character (the forward slashes are regular\nexpression delimiters):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/ABC\\d/\n")),(0,a.kt)("p",null,"ActionScript includes methods for finding patterns in strings and for replacing\nfound matches with replacement substrings. These methods are described in the\nfollowing sections."),(0,a.kt)("p",null,"Regular expressions can define intricate patterns. For more information, see\n",(0,a.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/using-regular-expressions/"},"Using regular expressions"),"."),(0,a.kt)("h2",{id:"finding-a-substring-by-character-position"},"Finding a substring by character position"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"substr()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"substring()")," methods are similar. Both return a substring of\na string. Both take two parameters. In both methods, the first parameter is the\nposition of the starting character in the given string. However, in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"substr()")," method, the second parameter is the ",(0,a.kt)("em",{parentName:"p"},"length")," of the substring to\nreturn, and in the ",(0,a.kt)("inlineCode",{parentName:"p"},"substring()")," method, the second parameter is the position of\nthe character at the ",(0,a.kt)("em",{parentName:"p"},"end")," of the substring (which is not included in the\nreturned string). This example shows the difference between these two methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var str:String = "Hello from Paris, Texas!!!";\ntrace(str.substr(11,15)); // output: Paris, Texas!!!\ntrace(str.substring(11,15)); // output: Pari\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"slice()")," method functions similarly to the ",(0,a.kt)("inlineCode",{parentName:"p"},"substring()")," method. When given\ntwo non-negative integers as parameters, it works exactly the same. However, the\n",(0,a.kt)("inlineCode",{parentName:"p"},"slice()")," method can take negative integers as parameters, in which case the\ncharacter position is taken from the end of the string, as shown in the\nfollowing example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var str:String = "Hello from Paris, Texas!!!";\ntrace(str.slice(11,15)); // output: Pari\ntrace(str.slice(-3,-1)); // output: !!\ntrace(str.slice(-3,26)); // output: !!!\ntrace(str.slice(-3,str.length)); // output: !!!\ntrace(str.slice(-8,-3)); // output: Texas\n')),(0,a.kt)("p",null,"You can combine non-negative and negative integers as the parameters of the\n",(0,a.kt)("inlineCode",{parentName:"p"},"slice()")," method."),(0,a.kt)("h2",{id:"finding-the-character-position-of-a-matching-substring"},"Finding the character position of a matching substring"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"indexOf()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"lastIndexOf()")," methods to locate matching\nsubstrings within a string, as the following example shows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var str:String = "The moon, the stars, the sea, the land";\ntrace(str.indexOf("the")); // output: 10\n')),(0,a.kt)("p",null,"Notice that the ",(0,a.kt)("inlineCode",{parentName:"p"},"indexOf()")," method is case-sensitive."),(0,a.kt)("p",null,"You can specify a second parameter to indicate the index position in the string\nfrom which to start the search, as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var str:String = "The moon, the stars, the sea, the land"\ntrace(str.indexOf("the", 11)); // output: 21\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"lastIndexOf()")," method finds the last occurrence of a substring in the\nstring:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var str:String = "The moon, the stars, the sea, the land"\ntrace(str.lastIndexOf("the")); // output: 30\n')),(0,a.kt)("p",null,"If you include a second parameter with the ",(0,a.kt)("inlineCode",{parentName:"p"},"lastIndexOf()")," method, the search is\nconducted from that index position in the string working backward (from right to\nleft):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var str:String = "The moon, the stars, the sea, the land"\ntrace(str.lastIndexOf("the", 29)); // output: 21\n')),(0,a.kt)("h2",{id:"creating-an-array-of-substrings-segmented-by-a-delimiter"},"Creating an array of substrings segmented by a delimiter"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"split()")," method to create an array of substrings, which is\ndivided based on a delimiter. For example, you can segment a comma-delimited or\ntab-delimited string into multiple strings."),(0,a.kt)("p",null,"The following example shows how to split an array into substrings with the\nampersand (&) character as the delimiter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var queryStr:String = "first=joe&last=cheng&title=manager&StartDate=3/6/65";\nvar params:Array = queryStr.split("&", 2); // params == ["first=joe","last=cheng"]\n')),(0,a.kt)("p",null,"The second parameter of the ",(0,a.kt)("inlineCode",{parentName:"p"},"split()")," method, which is optional, defines the\nmaximum size of the array that is returned."),(0,a.kt)("p",null,"You can also use a regular expression as the delimiter character:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var str:String = "Give me\\t5."\nvar a:Array = str.split(/\\s+/); // a == ["Give","me","5."]\n')),(0,a.kt)("p",null,"For more information, see\n",(0,a.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/using-regular-expressions/"},"Using regular expressions")," and the\n",(0,a.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/index.html"},"ActionScript 3.0 Reference for the Adobe Flash Platform"),"."),(0,a.kt)("h2",{id:"finding-patterns-in-strings-and-replacing-substrings"},"Finding patterns in strings and replacing substrings"),(0,a.kt)("p",null,"The String class includes the following methods for working with patterns in\nstrings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"match()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"search()")," methods to locate substrings that match a\npattern.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"replace()")," method to find substrings that match a pattern and replace\nthem with a specified substring."))),(0,a.kt)("p",null,"These methods are described in the following sections."),(0,a.kt)("p",null,"You can use strings or regular expressions to define patterns used in these\nmethods. For more information on regular expressions, see\n",(0,a.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/using-regular-expressions/"},"Using regular expressions"),"."),(0,a.kt)("h4",{id:"finding-matching-substrings"},"Finding matching substrings"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"search()")," method returns the index position of the first substring that\nmatches a given pattern, as shown in this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var str:String = "The more the merrier.";\n// (This search is case-sensitive.)\ntrace(str.search("the")); // output: 9\n')),(0,a.kt)("p",null,"You can also use regular expressions to define the pattern to match, as this\nexample shows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var pattern:RegExp = /the/i;\nvar str:String = "The more the merrier.";\ntrace(str.search(pattern)); // 0\n')),(0,a.kt)("p",null,"The output of the ",(0,a.kt)("inlineCode",{parentName:"p"},"trace()")," method is 0, because the first character in the\nstring is index position 0. The ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," flag is set in the regular expression, so\nthe search is not case-sensitive."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"search()")," method finds only one match and returns its starting index\nposition, even if the ",(0,a.kt)("inlineCode",{parentName:"p"},"g")," (global) flag is set in the regular expression."),(0,a.kt)("p",null,"The following example shows a more intricate regular expression, one that\nmatches a string in double quotation marks:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var pattern:RegExp = /"[^"]*"/;\nvar str:String = "The \\"more\\" the merrier.";\ntrace(str.search(pattern)); // output: 4\n\nstr = "The \\"more the merrier.";\ntrace(str.search(pattern)); // output: -1\n// (Indicates no match, since there is no closing double quotation mark.)\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"match()")," method works similarly. It searches for a matching substring.\nHowever, when you use the global flag in a regular expression pattern, as in the\nfollowing example, ",(0,a.kt)("inlineCode",{parentName:"p"},"match()")," returns an array of matching substrings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var str:String = "bob@example.com, omar@example.org";\nvar pattern:RegExp = /\\w*@\\w*\\.[org|com]+/g;\nvar results:Array = str.match(pattern);\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"results")," array is set to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'["bob@example.com","omar@example.org"]\n')),(0,a.kt)("p",null,"For more information on regular expressions, see\n",(0,a.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/using-regular-expressions/"},"Using regular expressions"),"."),(0,a.kt)("h4",{id:"replacing-matched-substrings"},"Replacing matched substrings"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"replace()")," method to search for a specified pattern in a string\nand replace matches with the specified replacement string, as the following\nexample shows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var str:String = "She sells seashells by the seashore.";\nvar pattern:RegExp = /sh/gi;\ntrace(str.replace(pattern, "sch")); //sche sells seaschells by the seaschore.\n')),(0,a.kt)("p",null,"Note that in this example, the matched strings are not case-sensitive because\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," (",(0,a.kt)("inlineCode",{parentName:"p"},"ignoreCase"),") flag is set in the regular expression, and multiple\nmatches are replaced because the ",(0,a.kt)("inlineCode",{parentName:"p"},"g")," (",(0,a.kt)("inlineCode",{parentName:"p"},"global"),") flag is set. For more\ninformation, see\n",(0,a.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/using-regular-expressions/"},"Using regular expressions"),"."),(0,a.kt)("p",null,"You can include the following ",(0,a.kt)("inlineCode",{parentName:"p"},"$")," replacement codes in the replacement string.\nThe replacement text shown in the following table is inserted in place of the\n",(0,a.kt)("inlineCode",{parentName:"p"},"$")," replacement code:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"$ Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Replacement Text"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$$")),(0,a.kt)("td",{parentName:"tr",align:null},"$")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$&")),(0,a.kt)("td",{parentName:"tr",align:null},"The matched substring.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"`` $```"),(0,a.kt)("td",{parentName:"tr",align:null},"The portion of the string that precedes the matched substring. This code uses the straight left single quotation mark character (`",(0,a.kt)("inlineCode",{parentName:"td"}," ```), not the straight single quotation mark ("),"'",(0,a.kt)("inlineCode",{parentName:"td"},") or the left curly single quotation mark ("),"'`).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$'")),(0,a.kt)("td",{parentName:"tr",align:null},"The portion of the string that follows the matched substring. This code uses the straight single quotation mark (",(0,a.kt)("inlineCode",{parentName:"td"},"'"),").")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$")," ",(0,a.kt)("em",{parentName:"td"},"n")),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("em",{parentName:"td"},"n")," th captured parenthetical group match, where n is a single digit, 1-9, and $n is not followed by a decimal digit.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$")," ",(0,a.kt)("em",{parentName:"td"},"nn")),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("em",{parentName:"td"},"nn")," th captured parenthetical group match, where ",(0,a.kt)("em",{parentName:"td"},"nn")," is a two-digit decimal number, 01\u201399. If the ",(0,a.kt)("em",{parentName:"td"},"nn")," th capture is undefined, the replacement text is an empty string.")))),(0,a.kt)("p",null,"For example, the following shows the use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"$2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"$1")," replacement codes,\nwhich represent the first and second capturing group matched:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var str:String = "flip-flop";\nvar pattern:RegExp = /(\\w+)-(\\w+)/g;\ntrace(str.replace(pattern, "$2-$1")); // flop-flip\n')),(0,a.kt)("p",null,"You can also use a function as the second parameter of the ",(0,a.kt)("inlineCode",{parentName:"p"},"replace()")," method.\nThe matching text is replaced by the returned value of the function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var str:String = "Now only $9.95!";\nvar price:RegExp = /\\$([\\d,]+.\\d+)+/i;\ntrace(str.replace(price, usdToEuro));\n\nfunction usdToEuro(matchedSubstring:String,                                  capturedMatch1:String,                                  index:int,                                  str:String):String\n{\n    var usd:String = capturedMatch1;\n    usd = usd.replace(",", "");\n    var exchangeRate:Number = 0.853690;\n    var euro:Number = parseFloat(usd) * exchangeRate;\n    const euroSymbol:String = String.fromCharCode(8364);\n    return euro.toFixed(2) + " " + euroSymbol;\n}\n')),(0,a.kt)("p",null,"When you use a function as the second parameter of the ",(0,a.kt)("inlineCode",{parentName:"p"},"replace()")," method, the\nfollowing arguments are passed to the function:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The matching portion of the string.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Any capturing parenthetical group matches. The number of arguments passed this\nway will vary depending on the number of parenthetical matches. You can\ndetermine the number of parenthetical matches by checking\n",(0,a.kt)("inlineCode",{parentName:"p"},"arguments.length - 3")," within the function code.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The index position in the string where the match begins.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The complete string."))),(0,a.kt)("h2",{id:"adobe-recommends"},"Adobe recommends"),(0,a.kt)("blockquote",null,(0,a.kt)("h3",{parentName:"blockquote",id:"-trim-leading-and-trailing-00s-from-a-string"},(0,a.kt)("a",{parentName:"h3",href:"https://web.archive.org/web/20160306044712/http://dougr.net/2011/09/15/actionscript-trim-leading-and-trailing-0s-from-a-string/"},(0,a.kt)("img",{src:n(91221).Z,width:"40",height:"14"})," Trim Leading and Trailing 00s From a String")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20160306100956/http://dougr.net/"},"Doug Reynolds"))))}d.isMDXComponent=!0},91221:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAMAAABq1a50AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRF+vr6+fn5/f39/v7+uLi4+/v7/f395OTk/Pz88fHx6urq////6enp5+fn8fHx8vLy3d3d9/f39fX129vb7u7u9fX17Ozsy8vL+fn54+Pj9PT04eHh6enp39/fy8vL2tra6+vr8/Pz9vb27e3t+Pj43NzcxsbG7e3t7+/v8PDw2dnZwcHBvb29wsLC6Ojo4ODg4uLi09PT1NTU5eXl5OTkvr6+39/f5ubm2NjYz8/P0NDQuLi4rq6u1dXV0NDQ3t7dsbGx5efm19fX5ujnv7+/srKyx8fH6Oro3d3c3N3c8PLxxcXF5+fmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArEZivAAAAE50Uk5T//////////////////////////////////////////////////////////////////////////////////////////////////////8ArE37zgAAAMJJREFUeNqMUNsKwjAMDUhGQRiOtdD6IAi7sIn6oijkG/L/v2OSzoeOPeykzTknCS0E+LgLDId9YKgUVJWgoqiCwTlHF3Ikx2UiGjQ3Iu6apewcg4AkJAv1i/t7SZRdHuzF3DJZ96tiND++bTAyxALDEDfRrAfneXsw2NentgU7cj208Mj+qWQNgCsDIiYJxI/QtLiEHSYTKQTt1rZHL1EjKsW68kGFD+dMnVI1LQtvVgtviqIIeTGc6x14MfBO/AQYAM9zNMQh3/tmAAAAAElFTkSuQmCC"}}]);