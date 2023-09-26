"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[9727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=o,p=m["".concat(l,".").concat(h)]||m[h]||u[h]||r;return n?a.createElement(p,i(i({ref:t},d),{},{components:n})):a.createElement(p,i({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={},i="Store Management",s={unversionedId:"Canvas/Store management",id:"Canvas/Store management",title:"Store Management",description:"Canvas now has available the Store Management feature.\xa0Store Management\xa0simplifies how you create, manage and group the Zones related to a store. It also makes it easier to send Hello Screen links to the stores.",source:"@site/docs/Canvas/Store management.md",sourceDirName:"Canvas",slug:"/Canvas/Store management",permalink:"/documentation/Canvas/Store management",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Adding a Zone",permalink:"/documentation/Canvas/Add a new zone"},next:{title:"What are Zone Settings?",permalink:"/documentation/Canvas/What are Zone settings"}},l={},c=[{value:"Creating a Store",id:"creating-a-store",level:2},{value:"From Canvas",id:"from-canvas",level:3},{value:"From Config API",id:"from-config-api",level:3},{value:"Adding a Zone to a Store",id:"adding-a-zone-to-a-store",level:2},{value:"Send the Hello Screens links to the store",id:"send-the-hello-screens-links-to-the-store",level:2},{value:"Calculating ETA to the Store\u2019s location",id:"calculating-eta-to-the-stores-location",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"store-management"},"Store Management"),(0,o.kt)("p",null,"Canvas now has available the Store Management feature.\xa0Store Management\xa0simplifies how you create, manage and group the Zones related to a store. It also makes it easier to send Hello Screen links to the stores."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6683).Z,width:"1024",height:"551"})),(0,o.kt)("p",null,"Now it\u2019s much simpler to organize your Zones for each store with the Store Management feature. You\u2019ll simply create a Store and add or link Zones for the different use cases, for example, a curbside, drive-thru or in-store Zones."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4655).Z,width:"1024",height:"581"})),(0,o.kt)("h2",{id:"creating-a-store"},"Creating a Store"),(0,o.kt)("p",null,"You can create stores from Canvas or programmatically with Config API."),(0,o.kt)("h3",{id:"from-canvas"},"From Canvas"),(0,o.kt)("p",null,"You\u2019ll find a new \u201cStores\u201d button on the main navigation bar to go to the Store Management section. From there, you\u2019ll just need to fill out the \u201c",(0,o.kt)("em",{parentName:"p"},"Add New Store"),"\u201d form with the basic details about the store, such as the address and the store\u2019s email.\xa0We\u2019ll use the address to calculate the customer\u2019s ETA to your store and the store\u2019s email to send the links and steps to access Hello Screens."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8411).Z,width:"570",height:"1024"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The Destination ID must be unique; once created, ",(0,o.kt)("em",{parentName:"p"},"it can\u2019t be changed"),". If you want to change the Destination ID, you\u2019ll need to delete the store and create a new store with a new destination ID. When deleting a store, you can keep the Zones and link them again to the new store.")),(0,o.kt)("h3",{id:"from-config-api"},"From Config API"),(0,o.kt)("p",null,"We\u2019ve introduced a new set of endpoints to manage the stores in Config API: Destinations. You can use these endpoints to create, edit and delete stores. As the Destination ID is now part of a store instead of a Zone, you\u2019ll need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a store (A.K.A destination) using the ",(0,o.kt)("inlineCode",{parentName:"li"},"/destinations")," endpoint"),(0,o.kt)("li",{parentName:"ol"},"Link Zones to the store by adding the ",(0,o.kt)("inlineCode",{parentName:"li"},"destinationId")," to the Zones using the ",(0,o.kt)("inlineCode",{parentName:"li"},"/zones")," endpoint")),(0,o.kt)("p",null,"Check the Config API documentation for more details ",(0,o.kt)("a",{parentName:"p",href:"https://config-docs.bluedot.io/"},"here")),(0,o.kt)("h2",{id:"adding-a-zone-to-a-store"},"Adding a Zone to a Store"),(0,o.kt)("p",null,"You can link a Zone to a store by clicking the \u201c",(0,o.kt)("em",{parentName:"p"},"Add New Zone"),"\u201d if you\u2019re creating the store for the first time. If you want to link an existing Zone, click the \u201c",(0,o.kt)("em",{parentName:"p"},"Link Zone"),"\u201d."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1392).Z,width:"1024",height:"448"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Clicking on the Add New Zone button will take you to the Zone creation section. Once the Zone is created, it will automatically linked to the Store. To learn more about creating a Zone, check the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/Canvas/Add%20a%20new%20zone"},"Adding a Zone documentation"),"."),(0,o.kt)("li",{parentName:"ul"},"The Link Zone button will open a modal, where you can look up and select the Zone you\u2019d like to link to the store",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{src:n(2306).Z,width:"1024",height:"875"})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can also link Zones from the Zone Settings modal by clicking the ",(0,o.kt)("em",{parentName:"p"},"Link Zone to a Store")," button",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{src:n(3242).Z,width:"1024",height:"652"})))),(0,o.kt)("h2",{id:"send-the-hello-screens-links-to-the-store"},"Send the Hello Screens links to the store"),(0,o.kt)("p",null,"Sharing the link to access Hello Screens with your stores is now simpler. There\u2019s a new Hello Screens section at the bottom of each store where you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Send an email to the store with the steps to open Hello Screens"),(0,o.kt)("li",{parentName:"ul"},"Get the link to open Hello Screens")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1475).Z,width:"1024",height:"177"})),(0,o.kt)("p",null,"In the email, you\u2019ll find a link to open Hello Screens to track the orders for the store and a QR code you can scan. It will open the screens in your browser or the mobile app if installed on your device."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5490).Z,width:"829",height:"1024"})),(0,o.kt)("h2",{id:"calculating-eta-to-the-stores-location"},"Calculating ETA to the Store\u2019s location"),(0,o.kt)("p",null,"As you can now link multiple Zones to a store, the Destination ID is no longer part of a Zone, instead are part of the Store. Each store will have a unique destination ID and location (coordinates) that the Mobile Point SDK will use to calculate the ETA of a customer to the store."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8240).Z,width:"655",height:"1024"})),(0,o.kt)("p",null,"The store\u2019s location can be adjusted to the coordinates by pressing the \u201cEdit coordinates\u201d button. Updating the location of the store doesn\u2019t update its address. The coordinates are just the point of reference the SDK will use to calculate the ETA of the customer."))}u.isMDXComponent=!0},4655:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/store-management-2-6a9eb7426f7654d311a4b3e143c2dfb2.png"},8411:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/store-management-3-b0fa9e7ba333b3a0ac6dac294285e3f8.png"},1392:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stores-management-4-aa7aa26f9be990573de33c71998d9462.png"},2306:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stores-management-5-53182d3c5ca7a0663c475e5ed2568b0d.png"},3242:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stores-management-6-fe485cffa48a731fe93d60f26477e43f.png"},1475:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stores-management-7-05e81e7606dbf23b535a734fe8303760.png"},5490:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stores-management-8-70309805cea37a5033bb2374803a089e.png"},8240:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stores-management-9-f142a3efa829cf9a36000de83b7b20ba.png"},6683:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stores-management-cbc9d8fcc1d721cf7bd033d0b3b39fe5.png"}}]);