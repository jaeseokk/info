(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[593],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=i,p=f["".concat(c,".").concat(m)]||f[m]||d[m]||o;return n?r.createElement(p,a(a({ref:t},u),{},{components:n})):r.createElement(p,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},983:function(e,t,n){"use strict";n.d(t,{M:function(){return l}});var r=n(7294),i=n(9205),o="titleOffset_2I3u",a="iconContainer_1xRA",l=function(e){var t=e.title?r.createElement("div",{className:"card__header"},r.createElement("span",{className:a},e.icon&&r.createElement(i.A,{icon:e.icon,link:e.link,active:"true"})),r.createElement("h3",{className:e.icon&&o},e.title)):"";return r.createElement("div",{className:"card-demo",style:{margin:"2rem"}},r.createElement("div",{className:"card"},t,r.createElement("div",{className:"card__body"},r.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return s}});var r=n(7294),i="hidden_2JtY",o="iconContainer_2Rnc",a="visible_2147",l="link_Lh4h",c="clickable_3vcc",s=function(e){var t=" "+(e.active?a:i),n=l+" "+(e.link&&c);return r.createElement("div",{className:o+t},r.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},4848:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=n(983),l=["components"],c={title:"Getting started",sidebar_position:1},s={unversionedId:"Guide/Getting started",id:"Guide/Getting started",isDocsHomePage:!1,title:"Getting started",description:"Understanding IFC.js",source:"@site/docs/Guide/Getting started.mdx",sourceDirName:"Guide",slug:"/Guide/Getting started",permalink:"/info/docs/Guide/Getting started",version:"current",sidebarPosition:1,frontMatter:{title:"Getting started",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Hello world",permalink:"/info/docs/Hello world"},next:{title:"Introduction",permalink:"/info/docs/Guide/web-ifc/Introduction"}},u=[{value:"Understanding IFC.js",id:"understanding-ifcjs",children:[]}],d={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"understanding-ifcjs"},"Understanding IFC.js"),(0,o.kt)("p",null,"  \ud83d\udc1f\ud83d\udc20\ud83d\udc21\nIFC.js is not just a library: it is an ecosystem of libraries and projects that make creating BIM tools trivial. There are two reasons for this modularity:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To be able to use in our applications only what we need."),(0,o.kt)("li",{parentName:"ul"},"To make the library more maintainable.")),(0,o.kt)("p",null,"It is important to understand which pieces make it up in order to know what to use in each case. IFC.js is essentially composed of 3 layers, each with a unique responsibility."),(0,o.kt)(a.M,{icon:"\ud83e\udde9",title:"web-ifc",link:"https://ifcjs.github.io/info/docs/Guide/web-ifc/Introduction",mdxType:"IfcCard"},(0,o.kt)("div",{style:{margin:"1rem 0"}},"An IFC file parser. It is able to read all information from an IFC, edit it and write new files. It has no 3d viewer, it only works with data."),(0,o.kt)("div",{style:{margin:"1rem 0"}}),(0,o.kt)("div",null,(0,o.kt)("b",null,"When to use:")),(0,o.kt)("div",{style:{margin:"1rem 0"}},"When you want to read or write IFC files without any viewer. This library gives full power over the data, but requires more understanding of the IFC schema to use it."),(0,o.kt)("div",null,(0,o.kt)("b",null,"Depends on: "),"-")),(0,o.kt)(a.M,{icon:"\ud83e\udde9",title:"web-ifc-three",link:"https://ifcjs.github.io/info/docs/Guide/web-ifc-three/Introduction",mdxType:"IfcCard"},(0,o.kt)("div",{style:{margin:"1rem 0"}},"A 3D BIM viewer. It allows to view and navigate the 3d model at 60 fps, select elements and easily read all the IFC data to display it to the end user. It is the official IFC Loader of three.js."),(0,o.kt)("div",null,(0,o.kt)("b",null,"When to use:")),(0,o.kt)("div",{style:{margin:"1rem 0"}},"When you want to make a BIM viewer for your application and you want to have full control over all implemented functionalities."),(0,o.kt)("div",null,(0,o.kt)("b",null,"Depends on: "),"web-ifc")),(0,o.kt)(a.M,{icon:"\ud83e\udde9",title:"web-ifc-viewer",link:"https://ifcjs.github.io/info/docs/Guide/web-ifc-viewer/Introduction",mdxType:"IfcCard"},(0,o.kt)("div",{style:{margin:"1rem 0"}},"A 3D BIM viewer with many tools and functionalities already implemented (section drawings, dimensions, etc.), allowing you to create BIM tools with very little effort."),(0,o.kt)("div",null,(0,o.kt)("b",null,"When to use:")),(0,o.kt)("div",{style:{margin:"1rem 0"}},"When you want to create a BIM viewer and you don't want to spend time implementing all the model navigation tools you would like to have."),(0,o.kt)("div",null,(0,o.kt)("b",null,"Depends on: "),"web-ifc-three")))}f.isMDXComponent=!0}}]);