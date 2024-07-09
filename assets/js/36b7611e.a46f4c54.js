"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[7371],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>h});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),p=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=p(e.components);return o.createElement(s.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},g=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(t),g=n,h=u["".concat(s,".").concat(g)]||u[g]||c[g]||a;return t?o.createElement(h,l(l({ref:r},d),{},{components:t})):o.createElement(h,l({ref:r},d))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=g;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},59953:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=t(87462),n=(t(67294),t(3905));const a={},l="Order Grouping",i={unversionedId:"Hello Screens/Grouping Orders",id:"Hello Screens/Grouping Orders",title:"Order Grouping",description:"The Order Grouping feature allows multiple orders linked to a single collector (e.g. a delivery driver) to be grouped together. By grouping these orders, staff can easily see which orders are associated with the same collector.",source:"@site/docs/Hello Screens/Grouping Orders.md",sourceDirName:"Hello Screens",slug:"/Hello Screens/Grouping Orders",permalink:"/Hello Screens/Grouping Orders",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Partner ETA",permalink:"/Hello Screens/Partner ETA"},next:{title:"Custom Order States",permalink:"/Hello Screens/Custom Order States"}},s={},p=[{value:"Group Display",id:"group-display",level:3},{value:"Order Details Modal",id:"order-details-modal",level:4},{value:"Grouping Orders on Hello Screens via Wave API",id:"grouping-orders-on-hello-screens-via-wave-api",level:3}],d={toc:p},u="wrapper";function c(e){let{components:r,...a}=e;return(0,n.kt)(u,(0,o.Z)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"order-grouping"},"Order Grouping"),(0,n.kt)("p",null,"The Order Grouping feature allows multiple orders linked to a single collector (e.g. a delivery driver) to be grouped together. By grouping these orders, staff can easily see which orders are associated with the same collector."),(0,n.kt)("h3",{id:"group-display"},"Group Display"),(0,n.kt)("p",null,'Orders that belong to the same group will appear next to each other on the Hello Screens, segregated by a coloured border that represents their group. Each group is labelled with a name displayed in the top right corner of the group boundary. The default prefix for these names can be customized, but it typically starts as "Group", followed by a sequential number (e.g., Group 1, Group 2).'),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(86330).Z,width:"3072",height:"2085"})),(0,n.kt)("h4",{id:"order-details-modal"},"Order Details Modal"),(0,n.kt)("p",null,"When an order card within a group is selected, the group name will appear in the Order Details modal. This group label uses the same colour as the group's border on the active orders screen, providing a consistent visual reference. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(67592).Z,width:"3072",height:"2085"})),(0,n.kt)("h3",{id:"grouping-orders-on-hello-screens-via-wave-api"},"Grouping Orders on Hello Screens via Wave API"),(0,n.kt)("p",null,"You will use the new property ",(0,n.kt)("inlineCode",{parentName:"p"},"hs_orderGroupId")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"customEventMetaData")," of a Wave API event to group orders on Hello Screens. Orders are grouped on the Hello Screens when there are at least two orders with matching ",(0,n.kt)("inlineCode",{parentName:"p"},"hs_orderGroupId")," within the same day, "),(0,n.kt)("p",null,"The order's grouping information is reset daily, so only orders from the current day are considered for grouping."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'// Order A\n{\n    "destinationId": "dest-id",\n    "userToken": "ab45DE7",\n    "customEventMetaData": {\n        "hs_Customer Name": "Mark Herrera",\n        "hs_orderGroupId": "abc123",\n        "eventType": "onTheWay",\n        "hs_orderId": "Order 1",\n        //...other custom data fields here\n    }\n}\n')),(0,n.kt)("p",null,"If you have any questions just contact our Support Team at\xa0",(0,n.kt)("a",{parentName:"p",href:"mailto:help@bluedot.io"},"help@bluedot.io"),"."))}c.isMDXComponent=!0},67592:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/Hello Screen - Grouping orders-1-670269b2dee27f2cf9d8861449a30004.png"},86330:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/Hello Screen - Grouping orders-f64c96664444b8345ccb480c03b40efd.png"}}]);