(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14],{3878:function(e,t,a){"use strict";a.d(t,{r:function(){return r}});var n=a(7294),i="icon_1PGw",o=a(9205),r=function(e){return n.createElement("div",{className:"alert alert--primary",role:"alert",style:{margin:"2rem"}},n.createElement("div",{className:i},n.createElement(o.A,{icon:"\ud83d\udca1",active:"true"})),e.children)}},983:function(e,t,a){"use strict";a.d(t,{M:function(){return s}});var n=a(7294),i=a(9205),o="titleOffset_2I3u",r="iconContainer_1xRA",s=function(e){var t=e.title?n.createElement("div",{className:"card__header"},n.createElement("span",{className:r},e.icon&&n.createElement(i.A,{icon:e.icon,active:"true"})),n.createElement("h3",{className:e.icon&&o},e.title)):"";return n.createElement("div",{className:"card-demo",style:{margin:"2rem"}},n.createElement("div",{className:"card"},t,n.createElement("div",{className:"card__body"},n.createElement("p",null," ",e.children," "))))}},9205:function(e,t,a){"use strict";a.d(t,{A:function(){return c}});var n=a(7294),i="hidden_2JtY",o="iconContainer_2Rnc",r="visible_2147",s="link_Lh4h",l="clickable_3vcc",c=function(e){var t=" "+(e.active?r:i),a=s+" "+(e.link&&l);return n.createElement("div",{className:o+t},n.createElement("a",{href:e.link,target:"_blank",className:a},e.icon||"\ud83d\ude80"))}},6649:function(e,t,a){"use strict";a.d(t,{x:function(){return o}});var n=a(7294),i="threeScene_3QXR",o=function(e){return n.createElement("iframe",{className:i,width:"100%",height:"300",key:Math.random(),src:e.link,frameBorder:"0"})}},4061:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return I},frontMatter:function(){return w},metadata:function(){return y},toc:function(){return k}});var n=a(2122),i=a(9756),o=a(7294),r=a(3905),s=a(983),l=a(3878),c=a(6649),d="ifcTabItem_3jhz",h="ifcTabContent_2OBh",u="linkContainer_2bzd",p="iconSpacing_2WTy",m=a(9205),f=function(e){var t,a=0,n=(0,o.useState)(e.items.map((function(e){return{name:e.name,selected:0===a,content:e.content,key:a++,icon:e.icon,link:e.link}}))),i=n[0],r=n[1],s=(0,o.useState)(!1),l=s[0],c=s[1];function f(e){return e.selected?" tabs__item--active ":""}function b(){return i.find((function(e){return e.selected}))}return o.createElement("div",null,o.createElement("ul",{className:"tabs ifc-tab"},i.map((function(e){return o.createElement("li",{onClick:function(){return t=e.key,(a=[].concat(i)).forEach((function(e){return e.selected=!1})),a.find((function(e){return e.key===t})).selected=!0,void r(a);var t,a},className:"tabs__item "+d+f(e),key:e.key},function(e){return e.icon?o.createElement("div",{className:p},o.createElement(m.A,{icon:e.icon,active:"true"})):e.name}(e))}))),o.createElement("div",{className:h,onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)}},b().content,(t=b()).link?o.createElement("div",{className:u},o.createElement(m.A,{link:t.link,active:t.link&&l})):null))},b=["components"],w={title:"Introduction",sidebar_position:1},y={unversionedId:"Introduction",id:"Introduction",isDocsHomePage:!1,title:"Introduction",description:"\ud83c\udfae",source:"@site/docs/Introduction.mdx",sourceDirName:".",slug:"/Introduction",permalink:"/info/docs/Introduction",version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Hello world",permalink:"/info/docs/Hello world"}},k=[{value:"What is this library?",id:"what-is-this-library",children:[{value:"What is IFC?",id:"what-is-ifc",children:[]},{value:"The problem of IFC",id:"the-problem-of-ifc",children:[]},{value:"IFC.js to the rescue",id:"ifcjs-to-the-rescue",children:[]}]},{value:"IFC.js in a nutshell",id:"ifcjs-in-a-nutshell",children:[]},{value:"Who is this library for",id:"who-is-this-library-for",children:[]},{value:"Why is IFC.js different?",id:"why-is-ifcjs-different",children:[{value:"Multiplatform",id:"multiplatform",children:[]},{value:"Speed",id:"speed",children:[]},{value:"Features",id:"features",children:[]}]},{value:"Source code",id:"source-code",children:[]},{value:"Contribute",id:"contribute",children:[]}],g={toc:k};function I(e){var t=e.components,a=(0,i.Z)(e,b);return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"  \ud83c\udfae\nIFC.js is a JavaScript library to load, display and edit IFC models in the browser. Try the ",(0,r.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/web-ifc-viewer/examples/simple-html/"},"live demo")," with your IFC model and discover the power of IFC.js."),(0,r.kt)("h2",{id:"what-is-this-library"},"What is this library?"),(0,r.kt)("h3",{id:"what-is-ifc"},"What is IFC?"),(0,r.kt)("p",null,"  \ud83c\udfe0\nArchitects no longer draw building plans one by one, but create 3D models of buildings, much like the houses modelled in ",(0,r.kt)("a",{parentName:"p",href:"https://www.ea.com/es-es/games/the-sims"},"The SIMS"),". This way of working is called BIM (Building Information Model), because the models created contain both geometry and information."),(0,r.kt)("p",null,"  \ud83d\udd25\nHowever, a building is so complex that there is no single application that can create these models in their entirety. Each application has a specific mission: modelling geometry, calculating structures, making energy simulations, creating project documents, and so on."),(0,r.kt)("p",null,"  \ud83d\udc40\nThese tools come from multiple developers around the world and each one works in its own format. In other words, the structural model created by a structural calculation application cannot be read by energy simulation software, and vice versa. So how is it possible to create a model of a building from multiple tools?"),(0,r.kt)("p",null,"  \ud83c\udf89\nThe answer is ",(0,r.kt)("a",{parentName:"p",href:"https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/"},(0,r.kt)("strong",{parentName:"a"},"IFC")),", a format created by BuildingSMART to contain these 3D models of buildings. It is open, so anyone can read and write it. Yay!"),(0,r.kt)(l.r,{mdxType:"IfcAlert"},"Thanks to IFC any developer can freely create BIM apps that can communicate with the apps of the big development companies in the construction sector."),(0,r.kt)("h3",{id:"the-problem-of-ifc"},"The problem of IFC"),(0,r.kt)("p",null,"Anyone who wants to make a BIM application ",(0,r.kt)("strong",{parentName:"p"},"needs to read and write IFC files")," to be able to import and export information from other tools. Unfortunately, IFC is a format that is difficult to read and write. There are thousands of pages of documentation and creating and maintaining a self-made IFC parser is a huge task."),(0,r.kt)(s.M,{title:"\nCan you afford IFC?",mdxType:"IfcCard"},"\ud83d\udcb8 This is something only companies with several developers working full time on this could afford. It doesn't sound that open anymore, does it?"),(0,r.kt)("p",null,"In case you are curious about how an IFC looks like inside, here you have an example. Imagine parsing hundreds of thousands of lines like these:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"#6699= IFCCARTESIANPOINT((0.,-1.7053025E-13));\n#6701= IFCAXIS2PLACEMENT2D(#6699,#23);\n#6703= IFCCARTESIANPOINT((892.,-253.399999,150.));\n#6705= IFCAXIS2PLACEMENT3D(#6703,#15,#19);\n#6706= IFCEXTRUDEDAREASOLID(#6702,#6705,#19,506.8);\n#6707= IFCCOLOURRGB($,0.50196,0.501913,0.501960);\n")),(0,r.kt)("p",null,"  \ud83d\udc80\nEven if you are willing to create a parser from scratch and maintain it with every change in the IFC schema, there are several non-trivial questions to tackle this problem. How to manage memory in very large files? How to implement geometric generation efficiently? What to do when an IFC has not been defined correctly?"),(0,r.kt)("h3",{id:"ifcjs-to-the-rescue"},"IFC.js to the rescue"),(0,r.kt)("p",null,"It wouldn't make sense for all developers to have to implement their own IFC file reader and writer for their applications. Especially when we all want the same thing: ",(0,r.kt)("strong",{parentName:"p"},"importing and exporting geometry and data"),"."),(0,r.kt)(s.M,{mdxType:"IfcCard"},"IFC.js is a JavaScript library that makes it super easy to ",(0,r.kt)("b",null,"read and write IFC files"),"."),(0,r.kt)("p",null,"This allows developers of architecture and construction applications to work in IFC effortlessly and focus on the functionalities that really add value to their business."),(0,r.kt)("h2",{id:"ifcjs-in-a-nutshell"},"IFC.js in a nutshell"),(0,r.kt)("p",null,"IFC.js has two focuses:"),(0,r.kt)(s.M,{icon:"\ud83d\udc8e",title:"Geometry",mdxType:"IfcCard"}," IFC.js is able to generate 3D scenes because it is compatible with 3D libraries such as Three.js or Babylon.js. This means that you can create 3D BIM tools right away."),(0,r.kt)(s.M,{icon:"\ud83d\udd17",title:"Data",mdxType:"IfcCard"}," High-level access to all the properties associated with that geometry. This means easy access to data on the building components, their materials, thermal characteristics, structural strength, etc."),(0,r.kt)("p",null,"Creating a BIM applications with IFC.js is as easy as creating a webpage with JavaScript, HTML and CSS."),(0,r.kt)(c.x,{link:"https://ifcjs.github.io/hello-world/scenes/introduction/",mdxType:"Scene"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { IfcLoader } from 'web-ifc-three';\nimport { Scene } from 'three';\n\n//Creates THREE.js scene\nconst scene = new Scene();\n\n//...\n\n//Loads IFC and adds it to the scene\nconst ifcLoader = new IfcLoader();\nifcLoader.load(ifcURL, (geometry) => scene.add(geometry));\n")),(0,r.kt)("h2",{id:"who-is-this-library-for"},"Who is this library for"),(0,r.kt)("p",null,"This library is for anyone who wants to develop BIM applications. This includes both developers creating applications for the construction industry and architects and other professionals who want to take advantage of the data in their IFC files."),(0,r.kt)("p",null,"To use this library it is necessary to have a basic knowledge of JavaScript, HTML and CSS. This knowledge is beyond the scope of this documentation. You'll also need to use some 3D library to display the geometry of the IFC (Three.js or Babylon.js)."),(0,r.kt)("p",null,"  \ud83d\ude0a\nIf you don't know where to start, we suggest you to take a look ",(0,r.kt)("a",{parentName:"p",href:"https://threejsfundamentals.org/"},"here")," or just join the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/g7Uzn2KSwB"},"Discord Channel")," and say hi."),(0,r.kt)("h2",{id:"why-is-ifcjs-different"},"Why is IFC.js different?"),(0,r.kt)("p",null,"IFC.js is a library written by and for JavaScript, arguably one of the most ubiquitous languages. This means that it is compatible with web browsers, desktop and mobile applications. JavaScript is also one of the easiest languages to learn, and allows you to build user interfaces with HTML and CSS. In other words, creating BIM applications with IFC.js is as easy as creating a web page."),(0,r.kt)("h3",{id:"multiplatform"},"Multiplatform"),(0,r.kt)("p",null,"You can use IFC.js to create open BIM applications for any platform:"),(0,r.kt)(f,{items:[{icon:"\ud83c\udf0f",content:(0,r.kt)("p",null,(0,r.kt)("b",null,"Frontend web applications")," that read and write IFC files and display 3D without relying on server communication can be created using ",(0,r.kt)("b",null,"vanilla JavaScript")," or other tools such as ",(0,r.kt)("b",null,"React, Vue, Angular, Svelte, etc"),". That is, ",(0,r.kt)("i",null,"with IFC.js we can turn any web browser into an open BIM app."))},{icon:"\ud83c\udfe2",content:(0,r.kt)("p",null,"There are cases where the IFC file cannot be processed at the client. For example, a mobile  device may not have the power to display several medium or large IFCs. In this case it is possible to ",(0,r.kt)("b",null,"use IFC.js on the server")," via ",(0,r.kt)("a",{href:"https://nodejs.org/en/"},"Node.js")," and send the Three.js scene already prepared to the client.")},{icon:"\ud83d\udcbb",content:(0,r.kt)("p",null,"Sometimes we don't want to create web applications, but ",(0,r.kt)("b",null,"native desktop applications that run on Windows, iOS and Linux"),". This is possible thanks to technologies like ",(0,r.kt)("a",{href:"https://www.electronjs.org/"},"Electron"),". These native applications will be programmed in the same way as web applications; HTML, CSS, JavaScript, React, Vue, etc.")},{icon:"\ud83d\udcf1",content:(0,r.kt)("p",null,"IFC.js also supports ",(0,r.kt)("a",{href:"https://reactnative.dev/"},"React Native"),", which maps WebGL code to native OpenGL. This means that you can create IFC-compatible ",(0,r.kt)("b",null,"Open BIM apps that run on Android and iOS")," easily.")}],mdxType:"IfcTab"}),(0,r.kt)("h3",{id:"speed"},"Speed"),(0,r.kt)("p",null,"  \u26a1\ufe0f\nIf you have experience with web applications, you might be thinking that the weak point of a JavaScript-based IFC library is performance. However, the core of the library is developed in C++ combined with WebAssembly and ",(0,r.kt)("a",{parentName:"p",href:"https://emscripten.org/"},"Emscripten"),". It is designed specifically for ",(0,r.kt)("strong",{parentName:"p"},"maximum performance"),", allowing IFC.js to approach the speed and performance of desktop applications while running directly in the browser."),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)(s.M,{mdxType:"IfcCard"},"\ud83d\udc53 IFC.js can ",(0,r.kt)("b",null,"read")," IFC files seamlessly."),(0,r.kt)(s.M,{mdxType:"IfcCard"},"\ud83c\udfd0 Generate ",(0,r.kt)("b",null,"3D geometry")," that runs on 60 fps in a browser."),(0,r.kt)(s.M,{mdxType:"IfcCard"},"\ud83d\udc84 Easily edit geometry ",(0,r.kt)("b",null,"appearance")," with the power of Three.js."),(0,r.kt)(s.M,{mdxType:"IfcCard"},"\ud83c\udfe0\ud83c\udfe0\ud83c\udfe0 Load ",(0,r.kt)("b",null,"multiple")," federated IFC models."),(0,r.kt)(s.M,{mdxType:"IfcCard"},"\ud83d\udcc3 Retrieve ",(0,r.kt)("b",null,"IFC properties")," for reports and databases."),(0,r.kt)(s.M,{mdxType:"IfcCard"},"\u270d IFC.js also can ",(0,r.kt)("b",null,"edit and write")," IFC files from scratch."),(0,r.kt)("h2",{id:"source-code"},"Source code"),(0,r.kt)("p",null,"IFC.js is a large, multi-language library (C++, TypeScript JavaScript, etc). Having it in a single repository would be difficult and unwieldy. For that reason, the library exists in multiple repositories, where each one has its own purpose. You can find them ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IFCjs"},"here"),"."),(0,r.kt)(f,{items:[{name:"web-ifc",link:"https://github.com/tomvandig/web-ifc",content:(0,r.kt)("p",null,"The core of the library: an IFC ",(0,r.kt)("b",null,"parser and geometry generator")," written from scratch in C++ and compiled via Emscripten to WebAssembly. This repository encapsulates the complexity of reading IFC files and loading their data into memory.")},{name:"web-ifc-three",link:"https://github.com/IFCjs/web-ifc-three",content:(0,r.kt)("p",null,"The library that adapts web-ifc to Three.js, generating an ",(0,r.kt)("b",null,"optimized 3D scene where users can directly interact with the IFC"),". This library is ",(0,r.kt)("a",{href:"https://threejs.org/examples/webgl_loader_ifc.html"},"the official Three.js IFC Loader"),". Thanks to this adapter open BIM applications can be created with Three.js in just two lines of code.")},{name:"web-ifc-viewer",link:"https://github.com/IFCjs/web-ifc-viewer",content:(0,r.kt)("p",null,"This is a browser-based ",(0,r.kt)("a",{href:"https://ifcjs.github.io/web-ifc-viewer/examples/simple-html/"},"IFC viewer")," with ",(0,r.kt)("b",null,"many examples of what can be done with IFC.js"),". Scene navigation, material changes, element selection by clicking on them, section plans, etc. There is an example of all these functionalities in this repository, so it can be reused in open BIM applications out of the box.")}],mdxType:"IfcTab"}),(0,r.kt)("h2",{id:"contribute"},"Contribute"),(0,r.kt)("p",null,"Do you want to help us keep improving the world of Open BIM development with IFC.js? The library is big, so you will have to choose where you want to participate."),(0,r.kt)(s.M,{icon:"\ud83e\udd1d",title:"I can't code, but i want to get in",mdxType:"IfcCard"},"That's great! There's tons of things you can do aside from coding. Get into the ",(0,r.kt)("a",{href:"https://discord.com/invite/g7Uzn2KSwB"},"Discord channel")," to find out how."),(0,r.kt)(s.M,{icon:"\ud83e\udde0",title:"Parsing, geometry and C++",mdxType:"IfcCard"},"If you are passionate about C++, WebAssembly, parsing or the nitty-gritty of IFC, you can help us with the fastest open source BIM parser in the industry: ",(0,r.kt)("a",{href:"https://github.com/tomvandig/web-ifc"},"web-ifc"),"."),(0,r.kt)(s.M,{icon:"\u2728",title:"Three.js, geometry and Typescript",mdxType:"IfcCard"},"If you are a Three.js developer, you can help us with ",(0,r.kt)("a",{href:"https://github.com/IFCjs/web-ifc-three"},"web-ifc-three"),",which is ",(0,r.kt)("a",{href:"https://threejs.org/examples/webgl_loader_ifc.html"},"the official Three.js IFC Loader"),"."),(0,r.kt)(s.M,{icon:"\ud83c\udf08",title:"BIM tools, brainstorming and UX",mdxType:"IfcCard"},"If you are interested in creating cool open BIM applications and you have great ideas for BIM tools or user interfaces, help us make ",(0,r.kt)("a",{href:"https://github.com/IFCjs/web-ifc-viewer"},"web-ifc-viewer")," the best IFC viewer on the market."),(0,r.kt)("p",null,"In any case, we encourage you to stop by the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/g7Uzn2KSwB"},"Discord channel"),", say hello and tell us what's on your mind, so we can give you some guidance."))}I.isMDXComponent=!0}}]);