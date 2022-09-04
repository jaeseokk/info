(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),f=l,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,r[1]=a;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},983:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var i=n(7294),l=n(9205),o="titleOffset_2I3u",r="iconContainer_1xRA",a=function(e){var t=e.title?i.createElement("div",{className:"card__header"},i.createElement("span",{className:r},e.icon&&i.createElement(l.A,{icon:e.icon,link:e.link,active:"true"})),i.createElement("h3",{className:e.icon&&o},e.title)):"";return i.createElement("div",{className:"card-demo",style:{margin:"2rem"}},i.createElement("div",{className:"card"},t,i.createElement("div",{className:"card__body"},i.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return c}});var i=n(7294),l="hidden_2JtY",o="iconContainer_2Rnc",r="visible_2147",a="link_Lh4h",s="clickable_3vcc",c=function(e){var t=" "+(e.active?r:l),n=a+" "+(e.link&&s);return i.createElement("div",{className:o+t},i.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},2342:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var i=n(2122),l=n(9756),o=(n(7294),n(3905)),r=n(983),a=["components"],s={title:"Hello World",sidebar_position:1},c={unversionedId:"Guide/web-ifc/Tutorials/Hello world",id:"Guide/web-ifc/Tutorials/Hello world",isDocsHomePage:!1,title:"Hello World",description:"Introduction",source:"@site/docs/Guide/web-ifc/Tutorials/Hello world.mdx",sourceDirName:"Guide/web-ifc/Tutorials",slug:"/Guide/web-ifc/Tutorials/Hello world",permalink:"/info/zh/docs/Guide/web-ifc/Tutorials/Hello world",version:"current",sidebarPosition:1,frontMatter:{title:"Hello World",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/info/zh/docs/Guide/web-ifc/Introduction"},next:{title:"\ud83d\udcc3 Editing Properties",permalink:"/info/zh/docs/Guide/web-ifc/Tutorials/Editing Properties"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Setting up the project",id:"setting-up-the-project",children:[{value:"install dependencies",id:"install-dependencies",children:[]},{value:"add scripts in your package.json",id:"add-scripts-in-your-packagejson",children:[]},{value:"configure Rollup",id:"configure-rollup",children:[]},{value:"Feed your root folder :)",id:"feed-your-root-folder-",children:[]},{value:"Serving files from a server",id:"serving-files-from-a-server",children:[]}]},{value:"How to do it",id:"how-to-do-it",children:[{value:"get an .ifc file",id:"get-an-ifc-file",children:[]},{value:"index.html",id:"indexhtml",children:[]},{value:"app.js",id:"appjs",children:[]},{value:"Retrieve a list of spaces.",id:"retrieve-a-list-of-spaces",children:[]}]},{value:"Next steps",id:"next-steps",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Web-ifc provides an easy way to read and manipulate your ifc file. you can as example to get the spatial tree information or project, geometries, add new entities etc...\nIn this tutorial we will ",(0,o.kt)("strong",{parentName:"p"},"Load an ifc")," file and ",(0,o.kt)("strong",{parentName:"p"},"Retrieves all its IFCSPACE"),".",(0,o.kt)("br",{parentName:"p"}),"\n","\ud83d\udcaa Thanks to web-ifc all of these are just a breeze "),(0,o.kt)(r.M,{mdxType:"IfcCard"},"\ud83d\udc49 You can get the full code ",(0,o.kt)("a",{href:"https://github.com/ifcjs/hello-world/tree/main/examples/web-ifc/hello-world"},"here"),"."),(0,o.kt)("h2",{id:"setting-up-the-project"},"Setting up the project"),(0,o.kt)("p",null,"\ud83d\udc69\u200d\ud83c\udfeb Node JS must be install on your machine, and to makes thing easier i recommand to use Visual Code studio with the plugin Live server."),(0,o.kt)("h3",{id:"install-dependencies"},"install dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm init\nnpm install web-ifc\nnpm install rollup --save-dev\nnpm install @rollup/plugin-node-resolve --save-dev\nnpm install @open-wc/building-rollup --save-dev\n")),(0,o.kt)("h3",{id:"add-scripts-in-your-packagejson"},"add scripts in your package.json"),(0,o.kt)("p",null,"open your package.json  and add aliases build and watch in the scripts section,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'\xa0\xa0"scripts":\xa0{\n\xa0\xa0\xa0\xa0"build":\xa0"rollup\xa0-c\xa0./rollup.config.js",\n\xa0\xa0\xa0\xa0"watch":\xa0"rollup\xa0-w\xa0-c\xa0./rollup.config.js"\n\xa0\xa0},\n')),(0,o.kt)("h3",{id:"configure-rollup"},"configure Rollup"),(0,o.kt)("p",null,"on your project root add a config file  ",(0,o.kt)("strong",{parentName:"p"},"rollup.config.js"),"  with these configs values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import\xa0resolve\xa0from\xa0"@rollup/plugin-node-resolve";\n\nexport\xa0default\xa0{\n\xa0\xa0input:\xa0"app.js",\n\xa0\xa0output:\xa0[\n\n\xa0\xa0\xa0\xa0{\n\xa0\xa0\xa0\xa0\xa0\xa0format:\xa0"esm",\n\xa0\xa0\xa0\xa0\xa0\xa0file:\xa0"bundle.js",\n\xa0\xa0\xa0\xa0},\n\xa0\xa0],\n\xa0\xa0plugins:\xa0[resolve()],\n};\n')),(0,o.kt)("h3",{id:"feed-your-root-folder-"},"Feed your root folder :)"),(0,o.kt)("p",null,"To make things easier we drop all in the root folder : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"app.js"),(0,o.kt)("li",{parentName:"ul"},"index.html"),(0,o.kt)("li",{parentName:"ul"},"drop an .ifc file of your choice for testing."),(0,o.kt)("li",{parentName:"ul"},"copy ",(0,o.kt)("strong",{parentName:"li"},"web-ifc-mt.wasm")," and ",(0,o.kt)("strong",{parentName:"li"},"web-ifc.wasm"),"  from ",(0,o.kt)("strong",{parentName:"li"},"node_modules/web-ifc")," here in the root folder")),(0,o.kt)("h3",{id:"serving-files-from-a-server"},"Serving files from a server"),(0,o.kt)("p",null,"for Visual code studio lovers there is an extension which remove all headaches, this will give you the possibility to serve your bundled app. elsewhere you can run your code throught node server directly"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"},"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer")),(0,o.kt)("h2",{id:"how-to-do-it"},"How to do it"),(0,o.kt)("p",null,"Ok now you've got your folder ready to start, let's complete these 2 objectives : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"load your ifc file"),(0,o.kt)("li",{parentName:"ul"},"grab some datas from this loaded ifc file\n\ud83d\ude4f")),(0,o.kt)("h3",{id:"get-an-ifc-file"},"get an .ifc file"),(0,o.kt)("p",null,"If you don't have a sample ifcModel you can grab one from  ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/test-ifc-files"},"here")),(0,o.kt)("h3",{id:"indexhtml"},"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE\xa0html>\n\n<html\xa0lang="en">\n\n<head>\n\xa0\xa0\xa0\xa0<meta\xa0charset="UTF-8">\n\xa0\xa0\xa0\xa0<meta\xa0http-equiv="X-UA-Compatible"\xa0content="IE=edge">\n\xa0\xa0\xa0\xa0<meta\xa0name="viewport"\xa0content="width=device-width,\xa0initial-scale=1.0">\n\xa0\xa0\xa0\xa0<title>WEB-IFC</title>\n</head>\n\n<body>\n\xa0\xa0<div\xa0id="main">\n\xa0\xa0\xa0\xa0\xa0\xa0<div id="result"></div>\n\xa0\xa0</div>\n\xa0\xa0<script\xa0src="bundle.js"><\/script>\n</body>\n\n  \n\n</html>\n')),(0,o.kt)("h3",{id:"appjs"},"app.js"),(0,o.kt)("h4",{id:"definitions"},"definitions"),(0,o.kt)("p",null,"We will only need ",(0,o.kt)("strong",{parentName:"p"},"web-ifc/web-ifc-api"),"  just pay attention on ifcFileLocation its an ifcModel stored in the root folder in this demo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import {IfcAPI} from "web-ifc/web-ifc-api";\nconst ifcFileLocation = "duplex-apartment.ifc"; // dont forget to modify for your ifc filename\nlet modelID = 0;\nconst ifcapi = new IfcAPI();\n//ifcapi.SetWasmPath("./wasm/"); only if the wasm file are note at the same level as app.js\n')),(0,o.kt)("h4",{id:"fetching-ifcfile-function"},"fetching ifcFile function"),(0,o.kt)("p",null,"i've chosen the XMLHttpRequest to fetch my file you can chose any method of your choice. The only required thing is ",(0,o.kt)("inlineCode",{parentName:"p"},"new Uint8Array(oReq.response)")," at the end."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * resolve a Uint8Array().\n * \n * @param string url location of your ifc file\n * @returns {Promise}\n */\nfunction getIfcFile(url) {\n    return new Promise((resolve, reject) => {\n        var oReq = new XMLHttpRequest();\n        oReq.responseType = "arraybuffer";\n        oReq.addEventListener("load", () => {\n            resolve(new Uint8Array(oReq.response));\n        });\n        oReq.open("GET", url);\n        oReq.send();\n    });\n}\n')),(0,o.kt)("h4",{id:"loadfile-with-web-ifc"},"loadFile with Web-ifc"),(0,o.kt)("p",null,"We are almost done ;) . ifcapi is initialized we fetch our ifcFile and with ifcapi we can work with the loaded file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"ifcapi.Init().then(()=>{\n  getIfcFile(ifcFileLocation).then((ifcData) => {\n    modelID = ifcapi.OpenModel(ifcData);\n    let isModelOpened = ifcapi.IsModelOpen(modelID);\n    console.log({isModelOpened});\n    ifcapi.CloseModel(modelID);\n  });\n});\n")),(0,o.kt)("h4",{id:"lets-build"},"Let's Build"),(0,o.kt)("p",null,"run this command before opening your app ",(0,o.kt)("strong",{parentName:"p"},"npm run build")," rollup will build your app and then you will have to serve your app. If you have live server extension installed on Visual code studio you can simply run it and go to the hello_world example.\n\u26a0\ufe0f At any code changes don't forget to rebuild OR you can use ",(0,o.kt)("strong",{parentName:"p"},"npm run watch")," while the job is not done rollup will rebuild on code save \ud83d\ude0a "),(0,o.kt)("p",null,"if in your console you got this message ",(0,o.kt)("inlineCode",{parentName:"p"},"{isModelOpened: true}")),(0,o.kt)("p",null,"\ud83c\udf89\ud83c\udf89\ud83c\udf89 ",(0,o.kt)("strong",{parentName:"p"},"congratulations")," \ud83c\udf89\ud83c\udf89\ud83c\udf89"),(0,o.kt)("p",null,"All is setup and running but now i want ",(0,o.kt)("strong",{parentName:"p"},"ALL")," IFCSPACES"),(0,o.kt)("h3",{id:"retrieve-a-list-of-spaces"},"Retrieve a list of spaces."),(0,o.kt)("p",null,"Okay, now i want to get all the IFCSPACES and display them somewhere. Lets make a function wich grab all IFCSPACE.\n\ud83d\ude08 You can fetch by any type you need. i've made a total arbitrary decision to take IFCSPACE."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Get all IFCSPACE from ifc file\n * @param integer modelID \n * @returns array\n */\nfunction getAllSpaces(modelID) {\n    // Get all the propertyset lines in the IFC file\n    let lines = ifcapi.GetLineIDsWithType(modelID, IFCSPACE);\n    let lineSize = lines.size();\n    let spaces = [];\n    for (let i = 0; i < lineSize; i++) {\n        // Getting the ElementID from Lines\n        let relatedID = lines.get(i);\n        // Getting Element Data using the relatedID\n        let relDefProps = ifcapi.GetLine(modelID, relatedID);\n        spaces.push(relDefProps);\n\n    }\n    return spaces;\n}\n")),(0,o.kt)("p",null,"If your attentive you will notice the const IFSPACE from ",(0,o.kt)("strong",{parentName:"p"},"let lines = ifcapi.GetLineIDsWithType(modelID, IFCSPACE);")," it means I want to get all IFCSPACE from my ifc file. Don't forget to import this as follow."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import {IfcAPI,IFCSPACE} from "web-ifc/web-ifc-api";\n')),(0,o.kt)("h4",{id:"call-getallspaces"},"call getAllSpaces"),(0,o.kt)("p",null,"after the .ifc file has been retrieved and loaded in ifcapi i can call my function to get all spaces."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"ifcapi.Init().then(() => {\n    getIfcFile(ifcFileLocation).then((ifcData) => {\n        modelID = ifcapi.OpenModel(ifcData);\n        let isModelOpened = ifcapi.IsModelOpen(modelID);\n        console.log({isModelOpened});\n        let spaces = getAllSpaces(modelID);\n        console.log({spaces});\n        ifcapi.CloseModel(modelID);\n    });\n});\n\n")),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"\ud83c\udf89\ud83c\udf89\ud83c\udf89 ",(0,o.kt)("strong",{parentName:"p"},"congratulations"),"  you can load your .ifc file and find any element you want. However it could be nice to navigate in your spatial tree, or describe an IFCSPACE... To be continued \ud83d\ude0b   \ud83c\udf89\ud83c\udf89\ud83c\udf89"))}u.isMDXComponent=!0}}]);