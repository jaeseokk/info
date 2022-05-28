(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2512],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3878:function(e,t,n){"use strict";n.d(t,{r:function(){return o}});var a=n(7294),r="icon_1PGw",i=n(9205),o=function(e){return a.createElement("div",{className:"alert alert--primary",role:"alert",style:{margin:"2rem"}},a.createElement("div",{className:r},a.createElement(i.A,{icon:"\ud83d\udca1",active:"true"})),e.children)}},983:function(e,t,n){"use strict";n.d(t,{M:function(){return l}});var a=n(7294),r=n(9205),i="titleOffset_2I3u",o="iconContainer_1xRA",l=function(e){var t=e.title?a.createElement("div",{className:"card__header"},a.createElement("span",{className:o},e.icon&&a.createElement(r.A,{icon:e.icon,link:e.link,active:"true"})),a.createElement("h3",{className:e.icon&&i},e.title)):"";return a.createElement("div",{className:"card-demo",style:{margin:"2rem"}},a.createElement("div",{className:"card"},t,a.createElement("div",{className:"card__body"},a.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return p}});var a=n(7294),r="hidden_2JtY",i="iconContainer_2Rnc",o="visible_2147",l="link_Lh4h",s="clickable_3vcc",p=function(e){var t=" "+(e.active?o:r),n=l+" "+(e.link&&s);return a.createElement("div",{className:i+t},a.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},6649:function(e,t,n){"use strict";n.d(t,{x:function(){return i}});var a=n(7294),r="threeScene_3QXR",i=function(e){return a.createElement("iframe",{className:r,width:"100%",height:"600px",key:Math.random(),src:e.link,frameBorder:"0"})}},2353:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=(n(3878),n(983)),l=(n(6649),["components"]),s={title:"\ud83d\udcc3 Properties",sidebar_position:2},p={unversionedId:"Guide/web-ifc/Tutorials/Properties",id:"Guide/web-ifc/Tutorials/Properties",isDocsHomePage:!1,title:"\ud83d\udcc3 Properties",description:"Introduction",source:"@site/docs/Guide/web-ifc/Tutorials/Properties.mdx",sourceDirName:"Guide/web-ifc/Tutorials",slug:"/Guide/web-ifc/Tutorials/Properties",permalink:"/info/zh/docs/Guide/web-ifc/Tutorials/Properties",version:"current",sidebarPosition:2,frontMatter:{title:"\ud83d\udcc3 Properties",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Hello World",permalink:"/info/zh/docs/Guide/web-ifc/Tutorials/Hello world"},next:{title:"\u7b80\u4ecb",permalink:"/info/zh/docs/Guide/web-ifc-three/Introduction"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"How to do it",id:"how-to-do-it",children:[{value:"Setting up",id:"setting-up",children:[]},{value:"Getting Element Data",id:"getting-element-data",children:[]},{value:"Element Properties",id:"element-properties",children:[]},{value:"FrontEnd",id:"frontend",children:[]}]},{value:"Next steps",id:"next-steps",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"\ud83e\uddca\nOne of the coolest thing you can do is traverse the IFC file and fetch the relevant information, web-ifc provides us with the capability to read and write IFC file from within the browser, In this tutorial we will ",(0,i.kt)("strong",{parentName:"p"},"Read Properties")," from IFC file and ",(0,i.kt)("strong",{parentName:"p"},"Output it on Frontend"),"."),(0,i.kt)("p",null,"\ud83d\udcbe\nThis tutorial will help us to get the ",(0,i.kt)("strong",{parentName:"p"},"Analysis")," of IFC without a viewer\ud83d\ude0e."),(0,i.kt)(o.M,{mdxType:"IfcCard"},"\ud83d\udc49 You can check out the final result deployed ",(0,i.kt)("a",{href:"https://ifcjs.github.io/hello-world/examples/web-ifc/ifc-to-json/properties/index.html"},"here")," and the full code ",(0,i.kt)("a",{href:"https://github.com/ifcjs/hello-world/tree/main/examples/web-ifc/ifc-to-json/properties"},"here"),"."),(0,i.kt)("p",null,"\ud83d\udcda\nThere are several types of properties in the IFC scheme, each with a specific purpose, and IFC.js can get ",(0,i.kt)("strong",{parentName:"p"},"all of them"),". Some of the most common are:"),(0,i.kt)(o.M,{icon:"\ud83d\udcd5",title:"Native properties",mdxType:"IfcCard"},"Specific to each IFC class."),(0,i.kt)(o.M,{icon:"\ud83d\udcd7",title:"Type properties",mdxType:"IfcCard"},"Describe properties of all elements of the same type (e.g. all envelope walls of a particular type)."),(0,i.kt)(o.M,{icon:"\ud83d\udcd8",title:"Material properties",mdxType:"IfcCard"},"Describes all the materials that make up the layers of that element."),(0,i.kt)(o.M,{icon:"\ud83d\udcd9",title:"Property sets",mdxType:"IfcCard"},"Arbitrary sets of user-defined properties. There may be multiple sets of properties associated with one or more elements. Each property set contains an arbitrary group of properties related to each other."),(0,i.kt)(o.M,{icon:"\ud83d\udcd2",title:"Quantity sets",mdxType:"IfcCard"},"Sets of properties describing the dimensions of the elements to which they refer. Although it would also be possible to infer element dimensions implicitly from the geometry definition, this explicit description makes it much easier to create applications that measure IFC models."),(0,i.kt)("p",null,"\ud83d\udeb4\u200d\u2642\ufe0f But enough theory! Let's get down to work."),(0,i.kt)("h2",{id:"how-to-do-it"},"How to do it"),(0,i.kt)("h3",{id:"setting-up"},"Setting up"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Imports and Global Variables")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import {\n    IfcAPI, IFCRELDEFINESBYPROPERTIES\n} from "web-ifc/web-ifc-api";\n..\n// We will show our properties in table, we will talk about this in FrontEnd Section\nconst table = document.createElement("table");\n..\n..\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reading File")),(0,i.kt)("p",null,"We will read file and call ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/hello-world/blob/main/examples/web-ifc/ifc-to-json/properties/app.js#:~:text=async%20function%20LoadFile(ifcAsText)"},(0,i.kt)("inlineCode",{parentName:"a"},"LoadFileData()"))," and send IFC data as Text"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fetch('../../../../IFC/01.ifc')\n  .then(response => response.text())\n  .then(data => {\n    // This will send the file data to our LoadFileData method\n    LoadFileData(data);\n});\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Creating a method which will be called for getting Element Properties "),"\nAll the code for getting ",(0,i.kt)("strong",{parentName:"p"},"Element Data")," goes inside it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{8}","{8}":!0},'function getPropertyWithExpressId(modelID=0) {\n    // Clearing if previous values present\n    const prop = document.getElementById("properties");\n    prop.innerHTML = "";\n    table.innerHTML = "";\n\n    // Getting the Element ID from User and parsing it to \n    const elementID = parseInt(document.getElementById("expressIDLabel").value);\n    ..\n    // Getting Element Data - Refer Below \n    ..\n\n    // Appending Table to our Div\n    prop.appendChild(table);\n}\n')),(0,i.kt)("h3",{id:"getting-element-data"},"Getting Element Data"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GetAllLines()")," gives you all the lines, but what if you want to get a line according to that ElementID?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GetLines()")," can be used at times like these when we know ElementID and want the data for it."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," \ud83d\udd22 Getting Element Data by ElementID ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{2}","{2}":!0},"// If third parameter is added as true, we get a flatten result\nconst element = ifcapi.GetLine(modelID, elementID);\n\n// Now you can fetch GUID of that Element\nconst guid = element.GlobalId.value;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83e\udd28 But what is Element?")),(0,i.kt)("p",null,"Every Entity can be considered as an Element which has it's own unique ElementID, by using the above code we can get various values that are contained in that Element Data. Few values that you can get and what we will ",(0,i.kt)("strong",{parentName:"p"},"output on Frontend")," are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://technical.buildingsmart.org/resources/ifcimplementationguidance/ifc-guid/"},"GUID")," : Globally Unique Identifier for the Element"),(0,i.kt)("li",{parentName:"ul"},"Name - Name given to that Element"),(0,i.kt)("li",{parentName:"ul"},"IfcType - It refers to the type of Element it is e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"IFCWALL"),",",(0,i.kt)("inlineCode",{parentName:"li"},"IFCWINDOW")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://standards.buildingsmart.org/IFC/RELEASE/IFC2x3/TC1/HTML/ifckernel/lexical/ifctypeobject.htm#:~:text=IfcTypeObject&text=Definition%20from%20buildingSMART%3A%20The%20object,%2D%20specific%20%2D%20occurrence%20modeling%20paradigm."},"IfcObjectType")," - Defines the specific information about a type "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.visualarq.com/features/collaboration/ifc/#:~:text=Tag%20feature.-,The%20IFC%20Tag,-The%20IFC%20tag"},"Tag")," - The IFC tag feature lets you assign IFC properties to the objects when they are exported to IFC"),(0,i.kt)("li",{parentName:"ul"},"and ",(0,i.kt)("strong",{parentName:"li"},"Many More")," ")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83e\udd16 Element Data")),(0,i.kt)("p",null,"Please ",(0,i.kt)("strong",{parentName:"p"},"Ignore")," ",(0,i.kt)("inlineCode",{parentName:"p"},"createRowInTable()")," as of now, it will be covered in Frontend Section"),(0,i.kt)("p",null,"Just remember 1st parameter is the Label and the 2nd parameter is the respected value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// Now you can fetch GUID of that Element\nconst guid      = element.GlobalId.value;\ncreateRowInTable("GUID", guid);\n\nconst name      = element.Name.value;\ncreateRowInTable("Name", name);\n\nconst ifcType   = element.__proto__.constructor.name;\ncreateRowInTable("IfcType", ifcType);\n\nconst type      = element.ObjectType.value;\ncreateRowInTable("Object Type", type);\n\nconst tag       = element.Tag.value;\ncreateRowInTable("Tag", tag);\n')),(0,i.kt)("h3",{id:"element-properties"},"Element Properties"),(0,i.kt)("p",null,"Now that we have Element Data, we need to get the properties of that Element, the way IFC is structured we can't directly get Properties like we got Element Data, we have to fetch Lines which are Property Data and filter it according to the ExpressID we want."),(0,i.kt)("p",null,"Feels too hectic? Don't worry, web-ifc with it's ",(0,i.kt)("strong",{parentName:"p"},"Native Speed")," gets us the data easily. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1\ufe0f\u20e3 Getting All Lines with Type")),(0,i.kt)("p",null,"We will get all ",(0,i.kt)("inlineCode",{parentName:"p"},"Lines")," that has relation as properties with Elements i.e ",(0,i.kt)("inlineCode",{parentName:"p"},"IFCRELDEFINESBYPROPERTIES"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Get all the propertyset lines in the IFC file\nlet lines = ifcapi.GetLineIDsWithType(modelID, IFCRELDEFINESBYPROPERTIES);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," 2\ufe0f\u20e3 Get ElementID of Property Sets ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After getting the lines we will fetch the ElementID from those lines, next we use those ElementID to get the Element Data same like what we have done above."),(0,i.kt)("li",{parentName:"ul"},"Next, we will go through the Element Data and find out the RelatedObjects and if those RelatedObjects contain the ElementID for which we are trying to find properties we save them in a local array\ud83e\udd73")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{8,16,26,28}","{8,16,26,28}":!0},'// In the below array we will store the IDs of the Property Sets found\nlet propSetIds = [];\nfor (let i = 0; i < lines.size(); i++) {\n    // Getting the ElementID from Lines\n    let relatedID = lines.get(i);\n    \n    // Getting Element Data using the relatedID\n    let relDefProps = ifcapi.GetLine(modelID, relatedID);\n    \n    // Boolean for Getting the IDs if relevant IDs are present\n    let foundElement = false;\n\n    // RelatedObjects is a property that is an Array of Objects. \n    // The way IFC is structured, Entities that use same property are included inside RelatedObjects\n    // We Search inside RelatedObjects if our ElementID is present or not\n    relDefProps.RelatedObjects.forEach((relID) => {\n        if(relID.value === elementID){\n            foundElement = true;\n        }\n    });\n\n    if(foundElement){\n        // Relevant IDs are found we then we go to RelatingPropertyDefinition\n        // RelatingPropertyDefinition contain the IDs of Property Sets\n        // But they should not be array, hence using (!Array.isArray())\n        if(!Array.isArray(relDefProps.RelatingPropertyDefinition)){\n            console.log("Found");\n            let handle = relDefProps.RelatingPropertyDefinition;\n\n            // Storing and pushing the IDs found in propSetIds Array\n            propSetIds.push(handle.value);\n        }\n    }\n}\n')),(0,i.kt)("p",null,"\u2696\ufe0f The heavy lifting has been done, now we will repeat few of the steps."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," 3\ufe0f\u20e3 Getting Property Sets from their ID ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Yes you are right, getting Element Data using Element IDs!, now we will use the IDs from propSetIds and Get Data."),(0,i.kt)("li",{parentName:"ul"},"Then we will check whether they have properties i.e. check if they contain ",(0,i.kt)("a",{parentName:"li",href:"https://standards.buildingsmart.org/IFC/RELEASE/IFC2x3/TC1/HTML/ifcpropertyresource/lexical/ifcpropertysinglevalue.htm"},"Nominal Values")),(0,i.kt)("li",{parentName:"ul"},"If you want you can store Property Sets but in our case we will show them on Frontend, so no need to store.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{2,6,8}","{2,6,8}":!0},'// Getting the Property Sets from their IDs\nlet propsets = propSetIds.map(id => ifcapi.GetLine(modelID, id, true));\n\npropsets.forEach((set) => {\n    // There can multiple Property Sets\n    set.HasProperties.forEach(p => {\n        // We will check if the Values that are present are not null\n        if(p.NominalValue != null){\n            // This is an e.g. filter, you can write down your various conditions to modify the result\n            if(p.NominalValue.label === "IFCBOOLEAN"){\n                // We will talk about this function in Frontend Part\n                createRowInTable(p.Name.value, p.NominalValue.value);\n            }\n            else{\n                // We will talk about this function in Frontend Part\n                createRowInTable(p.NominalValue.label, p.NominalValue.value);\n            }\n        }\n    });\n});\n')),(0,i.kt)(o.M,{mdxType:"IfcCard"},"Your complete code until now should look like ",(0,i.kt)("a",{href:"https://github.com/IFCjs/hello-world/tree/main/examples/web-ifc/ifc-to-json/properties/app.js"},"this")),(0,i.kt)("h3",{id:"frontend"},"FrontEnd"),(0,i.kt)(o.M,{mdxType:"IfcCard"},"We are using this example as a ",(0,i.kt)("a",{href:"https://github.com/IFCjs/hello-world/tree/main/examples/web-ifc/ifc-to-json/frontend"},"base")," and will be making additions to it"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," \ud83e\udd16 Method to Create Rows "),"\nWe will create a function to create rows dynamically, this will help us to insert data directly into table and show it on the FrontEnd."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We will now use the ",(0,i.kt)("inlineCode",{parentName:"li"},"table")," variable we had created globally while doing the setup")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function createRowInTable(label, value){\n    // Create a New Row Element\n    const row = document.createElement("tr");\n\n    // Add Label to 1st Coloumn and Value to 2nd Coloumn\n    row.innerHTML = "<td>"+label+"</td><td>"+value+"</td>";\n\n    // Appending the Row to Table - It means inserting Row inside Table\n    table.appendChild(row);\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," \ud83d\udd33 Your HTML Code inside ",(0,i.kt)("inlineCode",{parentName:"strong"},"<body>")," should like this ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="file-opener">\n    <a class="invisible" id="save-button">Save JSON</a>\n    <button class="basic-button" id="file-opener-button">Open IFC</button>\n</div>\n<input class="invisible" id="file-input" type="file">\n<div class="general-container">\n    <div class="container" id="left-container"></div>\n    <div class="separator"></div>\n    <div class="container" id="right-container">\n        <div class="ifc-container">\n            <pre id="json"></pre>\n        </div>\n        <div class="property-container">\n            <div class="input-container">\n                <input id="expressIDLabel">\n                \x3c!-- On Clicking this button we call getPropertyWithExpressId() --\x3e\n                <button class="property-button" onclick="getPropertyWithExpressId()">Get Properties</button>\n            </div>\n            \x3c!-- This is the area where our properties will be shown --\x3e\n            <pre id="properties"></pre>\n        </div>\n    </div>\n</div>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," \ud83c\udfa8 Now Styling ")),(0,i.kt)("p",null,"Containers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".ifc-container{\n    height: 60%;\n    border-bottom: 5px solid #F3F4F6;\n    overflow: auto;\n}\n.property-container{\n    overflow: auto;\n    height: 40%;\n}\n.input-container{\n    padding: 20px;\n    border-bottom: 5px solid #F3F4F6;\n}\n#properties{\n    padding: 8px;\n}\n")),(0,i.kt)("p",null,"Input Field and button:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"input{\n    font-size: 14px;\n    padding: 4px;\n    width: 60%;\n    border-radius: 8px;\n}\n.property-button{\n    margin-left: 20px;\n    font-size: 14px;\n    padding: 8px 12px;\n    background-color: #e6e6e6;\n    border: unset;\n    border-radius: 8px;\n}\n.property-button:hover{\n    box-shadow: 0 10px 20px 8px #e6e6e6;\n    background-color: white;\n    transition: 0.2s;\n}\n")),(0,i.kt)("p",null,"Table and Table Row:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"table{\n    width: 100%;\n    border-collapse: collapse;\n}\ntr:nth-child(even){\n    background-color: #f2f2f2;\n}\ntd{\n    border: 1px solid black;\n    padding: 8px;\n}\n")),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"\ud83c\udf89\nCongratulations! You should now be able to ",(0,i.kt)("strong",{parentName:"p"},"traverse any IFC")," and extract the properties you are looking for."),(0,i.kt)("p",null,"You can use the web-ifc APIs to get Material Data as well and many more to query the lines according to your need."))}d.isMDXComponent=!0}}]);