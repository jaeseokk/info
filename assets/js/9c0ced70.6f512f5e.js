(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[130],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return d},kt:function(){return f}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(i),f=r,h=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return i?n.createElement(h,a(a({ref:t},d),{},{components:i})):n.createElement(h,a({ref:t},d))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},3878:function(e,t,i){"use strict";i.d(t,{r:function(){return a}});var n=i(7294),r="icon_1PGw",o=i(9205),a=function(e){return n.createElement("div",{className:"alert alert--primary",role:"alert",style:{margin:"2rem"}},n.createElement("div",{className:r},n.createElement(o.A,{icon:"\ud83d\udca1",active:"true"})),e.children)}},983:function(e,t,i){"use strict";i.d(t,{M:function(){return l}});var n=i(7294),r=i(9205),o="titleOffset_2I3u",a="iconContainer_1xRA",l=function(e){var t=e.title?n.createElement("div",{className:"card__header"},n.createElement("span",{className:a},e.icon&&n.createElement(r.A,{icon:e.icon,link:e.link,active:"true"})),n.createElement("h3",{className:e.icon&&o},e.title)):"";return n.createElement("div",{className:"card-demo",style:{margin:"2rem"}},n.createElement("div",{className:"card"},t,n.createElement("div",{className:"card__body"},n.createElement("p",null," ",e.children," "))))}},9205:function(e,t,i){"use strict";i.d(t,{A:function(){return c}});var n=i(7294),r="hidden_2JtY",o="iconContainer_2Rnc",a="visible_2147",l="link_Lh4h",s="clickable_3vcc",c=function(e){var t=" "+(e.active?a:r),i=l+" "+(e.link&&s);return n.createElement("div",{className:o+t},n.createElement("a",{href:e.link,className:i},e.icon||"\ud83d\ude80"))}},6649:function(e,t,i){"use strict";i.d(t,{x:function(){return o}});var n=i(7294),r="threeScene_3QXR",o=function(e){return n.createElement("iframe",{className:r,width:"100%",height:"600px",key:Math.random(),src:e.link,frameBorder:"0"})}},7053:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return f}});var n=i(2122),r=i(9756),o=(i(7294),i(3905)),a=i(983),l=i(3878),s=(i(6649),["components"]),c={title:"\ud83d\udccb Json Property",sidebar_position:1},d={unversionedId:"Guide/web-ifc-viewer/Tutorials/JsonProperty",id:"Guide/web-ifc-viewer/Tutorials/JsonProperty",isDocsHomePage:!1,title:"\ud83d\udccb Json Property",description:"Introduction",source:"@site/docs/Guide/web-ifc-viewer/Tutorials/JsonProperty.mdx",sourceDirName:"Guide/web-ifc-viewer/Tutorials",slug:"/Guide/web-ifc-viewer/Tutorials/JsonProperty",permalink:"/info/docs/Guide/web-ifc-viewer/Tutorials/JsonProperty",version:"current",sidebarPosition:1,frontMatter:{title:"\ud83d\udccb Json Property",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/info/docs/Guide/web-ifc-viewer/Introduction"},next:{title:"\ud83e\udd0f Picking",permalink:"/info/docs/Guide/web-ifc-viewer/Tutorials/Picking"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"How to do it",id:"how-to-do-it",children:[{value:"Loading the file",id:"loading-the-file",children:[]},{value:"Serializing all properties",id:"serializing-all-properties",children:[]},{value:"Downloading JSON file",id:"downloading-json-file",children:[]},{value:"Github code",id:"github-code",children:[]},{value:"Result",id:"result",children:[]}]}],p={toc:u};function f(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"\ud83d\udc69\u200d\ud83c\udfeb As you might know, IFC is a data schema and what we call as a '.ifc' file is a STEP-File that is widely used to exchange data for 3D objects. This STEP-File is in text format and is not designed as a database. Wanting to be fast reading a single text file is like wishing to go as fast as a car, but with a cycle."),(0,o.kt)("p",null,"\ud83d\udea7\ud83d\udea7\ud83d\udea7 While IFC.js is super efficient and it works well for medium IFC models, its not the most efficient especially for bigger models and thus you can't except high performance when making concatenated queries. There are ways to gain efficiency in this kind of queries: the easiest one is to generate a JSON with the properties and query that JSON instead."),(0,o.kt)("p",null,"\ud83d\udeb6\u200d\u2640\ufe0f\ud83d\udeb6\u200d\u2640\ufe0f\ud83d\udeb6\u200d\u2640\ufe0f Here, we will learn how to deal with this situation, so nothing can stop us, no matter how big the IFC model is! \ud83d\udcaa\ud83e\udd16\ud83d\udd25"),(0,o.kt)(a.M,{mdxType:"IfcCard"},"\ud83d\udc76 Check out this wiki link for details on ",(0,o.kt)("a",{href:"https://en.wikipedia.org/wiki/Industry_Foundation_Classes#File_Formats"},"IFC file format")),(0,o.kt)("p",null,"\ud83c\udfa9 Thankfully IFC.js allows you to pre-process the properties and geometry of an IFC model and convert it to something much more efficient. Specifically, convert the properties to JSON and the geometry to GLB files. After this preprocessing, even big models will run like a charm on any browser. This will make loading and working with files faster and more efficient. "),(0,o.kt)("p",null,"\ud83d\udeb4\u200d\u2642\ufe0f Enough theory. Lets see how to convert the properties to JSON."),(0,o.kt)("h2",{id:"how-to-do-it"},"How to do it"),(0,o.kt)("h3",{id:"loading-the-file"},"Loading the file"),(0,o.kt)("p",null,"\u26a1\u26a1\u26a1 Let's start out by loading our ",(0,o.kt)("b",null,"IFC file"),". This is done through ",(0,o.kt)("inlineCode",{parentName:"p"},"loadIfcUrl()")," method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function init() {\n    await viewer.IFC.setWasmPath(wasmPath); \n    const model = await viewer.IFC.loadIfcUrl(url);\n    }\n")),(0,o.kt)("h3",{id:"serializing-all-properties"},"Serializing all properties"),(0,o.kt)("p",null,"\ud83e\udd14 Next, we take all the properties of the model and serialize them, that means, we will create a JSON file with all the properties. The idea beind this is to take properties from JSON instead of IFC directly. This way, you will be able to get the properties an order of magnitude much faster and is super efficient."),(0,o.kt)("p",null,"\ud83d\ude80 IFC.js makes it super easy with the built in ",(0,o.kt)("inlineCode",{parentName:"p"},"serializeAllProperties()")," method. This method serializes all the properties of an IFC (exluding the geometry) into an array of Blobs. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const properties =  await viewer.IFC.properties.serializeAllProperties(model);\n")),(0,o.kt)(a.M,{mdxType:"IfcCard"},"\ud83c\udf70 Working with JSON is also more convenient as you can put the JSON file into a database like MongoDB."),(0,o.kt)(l.r,{mdxType:"IfcAlert"},"As an alternative, you can also generate JSON properties along with geometry by using the method ",(0,o.kt)("code",null,"viewer.GLTF.exportIfcFileAsGltf()")," with option ",(0,o.kt)("code",null,"getProperties: true")),(0,o.kt)("h3",{id:"downloading-json-file"},"Downloading JSON file"),(0,o.kt)("p",null,"Now that we have serialized all the properties and generated the JSON file, let's go ahead and download this file \ud83d\udcbe. We can then use this downloaded JSON file for our super efficient IFC model."),(0,o.kt)("p",null,"\ud83d\udc47 In the code below we are creating a link that downloads the JSON file when we open the page"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const file = new File(properties, 'properties');\nconst link = document.createElement('a'); \ndocument.body.appendChild(link);\nlink.href = URL.createObjectURL(file);\nlink.download = 'properties.json';\nlink.click();\nlink.remove();\n")),(0,o.kt)("h3",{id:"github-code"},"Github code"),(0,o.kt)("p",null,"\ud83d\ude0e Check out the generated JSON file and the implementation of the code in the Github ",(0,o.kt)("a",{href:"https://github.com/IFCjs/hello-world/tree/main/examples/web-ifc-viewer/JSON-property-example"},"page")," "),(0,o.kt)("h3",{id:"result"},"Result"),(0,o.kt)("p",null,"\ud83c\udf89\ud83c\udf89\ud83c\udf89 Congratulations! You now have all the properties from the IFC file in a much efficient JSON format \ud83d\udc53. If you open this file with Visual Studio Code and format it, you will see that this is all the data from the IFC, but in JSON format."),(0,o.kt)(l.r,{mdxType:"IfcAlert"},"\ud83d\udcbb\ud83e\uddd1 Go ahead and save this in a front-end database and make your application way way faster."))}f.isMDXComponent=!0}}]);