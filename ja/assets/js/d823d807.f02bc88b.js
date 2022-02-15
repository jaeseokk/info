(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[519],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,p=f["".concat(s,".").concat(m)]||f[m]||d[m]||i;return n?r.createElement(p,a(a({ref:t},l),{},{components:n})):r.createElement(p,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4973:function(e,t,n){"use strict";n.d(t,{Z:function(){return d},I:function(){return l}});var r=n(7294),o=/{\w+}/g,i="{}";function a(e,t){var n=[],a=e.replace(o,(function(e){var o=e.substr(1,e.length-2),a=null==t?void 0:t[o];if(void 0!==a){var c=r.isValidElement(a)?a:String(a);return n.push(c),i}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?a.split(i).reduce((function(e,t,r){var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):a.split(i).reduce((function(e,t,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},t,n[o])])}),[])}function c(e){return a(e.children,e.values)}var s=n(4644);function u(e){var t,n=e.id,r=e.message;return null!==(t=s[null!=n?n:r])&&void 0!==t?t:r}function l(e,t){var n,r=e.message;return a(null!==(n=u({message:r,id:e.id}))&&void 0!==n?n:r,t)}function d(e){var t,n=e.children,o=e.id,i=e.values,a=null!==(t=u({message:n,id:o}))&&void 0!==t?t:n;return r.createElement(c,{values:i},a)}},983:function(e,t,n){"use strict";n.d(t,{M:function(){return c}});var r=n(7294),o=n(9205),i="titleOffset_2I3u",a="iconContainer_1xRA",c=function(e){var t=e.title?r.createElement("div",{className:"card__header"},r.createElement("span",{className:a},e.icon&&r.createElement(o.A,{icon:e.icon,link:e.link,active:"true"})),r.createElement("h3",{className:e.icon&&i},e.title)):"";return r.createElement("div",{className:"card-demo",style:{margin:"2rem"}},r.createElement("div",{className:"card"},t,r.createElement("div",{className:"card__body"},r.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var r=n(7294),o="hidden_2JtY",i="iconContainer_2Rnc",a="visible_2147",c="link_Lh4h",s="clickable_3vcc",u=function(e){var t=" "+(e.active?a:o),n=c+" "+(e.link&&s);return r.createElement("div",{className:i+t},r.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},5308:function(e,t,n){"use strict";n.d(t,{Q:function(){return i}});var r=n(7294),o=n(4973),i=function(e){return r.createElement("div",null,e.image,r.createElement("a",{target:"_blank",href:e.ifcLink}," ",r.createElement("i",null,function(e){return e.hideSource?null:r.createElement(o.Z,{description:"The source of an image of the blog"},"Source")}(e))," "))}},6649:function(e,t,n){"use strict";n.d(t,{x:function(){return i}});var r=n(7294),o="threeScene_3QXR",i=function(e){return r.createElement("iframe",{className:o,width:"100%",height:"600px",key:Math.random(),src:e.link,frameBorder:"0"})}},4455:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=(n(6649),n(983)),c=n(5308),s=["components"],u={title:"IFC for developers",sidebar_position:1},l={unversionedId:"Courses/Ifc-course",id:"Courses/Ifc-course",isDocsHomePage:!1,title:"IFC for developers",description:"What's this about?",source:"@site/docs/Courses/Ifc-course.mdx",sourceDirName:"Courses",slug:"/Courses/Ifc-course",permalink:"/info/ja/docs/Courses/Ifc-course",version:"current",sidebarPosition:1,frontMatter:{title:"IFC for developers",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"IFC.js crash course",permalink:"/info/ja/docs/Courses/Crash-course"},next:{title:"\u306f\u3058\u3081\u306b",permalink:"/info/ja/docs/Guide/Getting started"}},d=[{value:"What&#39;s this about?",id:"whats-this-about",children:[]},{value:"Course content",id:"course-content",children:[]},{value:"Requirements",id:"requirements",children:[]}],f={toc:d};function m(e){var t=e.components,u=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"whats-this-about"},"What's this about?"),(0,i.kt)("p",null,"\ud83d\udc1e Our projects are becoming more and more complex, and that means that it is often not possible to carry them out with the tools of a single brand. Open BIM is the solution to this problem; it is increasingly present in our workflows, and ",(0,i.kt)("strong",{parentName:"p"},"IFC is its foundation"),"."),(0,i.kt)(a.M,{mdxType:"IfcCard"},"IFC allows the exchange of information between applications of different vendors, as well as accessing the information without depending on a single application / licensing policy."),(0,i.kt)("p",null,"\ud83c\udf08 However, documentation is not easy and it is often difficult to discern what is really important to know from this scheme. ",(0,i.kt)("strong",{parentName:"p"},"In this course we are going to teach you all the knowledge we have needed to develop IFC.js.")),(0,i.kt)("p",null,"\ud83c\udf1f ",(0,i.kt)("strong",{parentName:"p"},"This is not a programming course"),", although at some point we might write some code to illustrate some of the concepts. Instead, this course aims to understand how the IFC schema works, what information does it contains and how is it structured."),(0,i.kt)(c.Q,{hideSource:!0,image:(0,i.kt)("img",{src:n(5285).Z,alt:"PC image"}),alt:"PC image",mdxType:"IfcImage"}),(0,i.kt)("h2",{id:"course-content"},"Course content"),(0,i.kt)(a.M,{mdxType:"IfcCard"},"\ud83c\udf31 IFC schema basics."),(0,i.kt)(a.M,{mdxType:"IfcCard"},"\ud83c\udf0d IFC generic entities."),(0,i.kt)(a.M,{mdxType:"IfcCard"},"\ud83c\udf33 IFC spatial structure and coordinate systems."),(0,i.kt)(a.M,{mdxType:"IfcCard"},"\ud83c\udfe0 IFC building elements: semantic objects."),(0,i.kt)(a.M,{mdxType:"IfcCard"},"\ud83e\uddf5 IFC geometry: placements and representations."),(0,i.kt)(a.M,{mdxType:"IfcCard"},"\ud83d\udcc3 IFC properties: native, psets, qsets and others."),(0,i.kt)(a.M,{mdxType:"IfcCard"},"\ud83d\udcda Common errors: IFC files in the wild."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"\ud83d\udc4c Nothing! You will learn the IFC schema in practice from the ground up."))}m.isMDXComponent=!0},5285:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ifc-course-5ca8d269f591ce700efd7b992356b853.png"}}]);