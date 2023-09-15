"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[8177],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={},i="Create your Destination(s)",s={unversionedId:"Tempo/Create your destinations",id:"Tempo/Create your destinations",title:"Create your Destination(s)",description:"To create a Destination, you\u2019ll need to have an active user and a Bluedot Account. Your Bluedot administrator can easily grant you access or you can contact our team \u2013 help@bluedot.io. Your user credentials are used to log into the Canvas dashboard and also authenticate with Config API.",source:"@site/docs/Tempo/Create your destinations.md",sourceDirName:"Tempo",slug:"/Tempo/Create your destinations",permalink:"/documentation/Tempo/Create your destinations",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Configure Tempo isochrone time brackets",permalink:"/documentation/Tempo/Isochrone time brackets"},next:{title:"Configure a Tempo Webhook",permalink:"/documentation/Tempo/Configure a Tempo webhook"}},l={},c=[{value:"Creating a Destination",id:"creating-a-destination",level:2},{value:"1. Store creation",id:"1-store-creation",level:3},{value:"2. Zone creation",id:"2-zone-creation",level:3},{value:"3. Save",id:"3-save",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-your-destinations"},"Create your Destination(s)"),(0,a.kt)("p",null,"To create a Destination, you\u2019ll need to have an active user and a Bluedot Account. Your Bluedot administrator can easily grant you access or you can contact our team \u2013 ",(0,a.kt)("a",{parentName:"p",href:"mailto:help@bluedot.io."},"help@bluedot.io.")," Your user credentials are used to log into the ",(0,a.kt)("a",{parentName:"p",href:"/documentation/Canvas/Overview"},"Canvas dashboard")," and also authenticate with ",(0,a.kt)("a",{parentName:"p",href:"/documentation/APIs/Config%20API/Overview"},"Config API"),".\xa0"),(0,a.kt)("h2",{id:"creating-a-destination"},"Creating a Destination"),(0,a.kt)("p",null,"A Destination is a physical location your customers arrive at to collect their mobile order \u2013 this is usually your store or restaurant. Within Canvas, Destinations are also known as Stores. When creating a store you\u2019ll need to provide a Destination ID."),(0,a.kt)("p",null,"There are 2 simple steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create the Store with a\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"DestinationId")),(0,a.kt)("li",{parentName:"ol"},"Create or link a Zone to the store")),(0,a.kt)("h3",{id:"1-store-creation"},"1","."," Store creation"),(0,a.kt)("p",null,"From the \u201cStores\u201d section, fill out the \u201cAdd a New Store\u201d form. In the form, you\u2019ll have to input the Destination ID for the store. We recommend using an ID that makes sense for your brand and/or systems. Check the ",(0,a.kt)("a",{parentName:"p",href:"/documentation/Canvas/Store%20management"},"Store Management documentation")," for more details."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5537).Z,width:"570",height:"1024"})),(0,a.kt)("h3",{id:"2-zone-creation"},"2","."," Zone creation"),(0,a.kt)("p",null,"Once you\u2019ve created the store, click on Add new Zone and create a geofence \u2013 you can use a circular geofence, a polygon or a rectangle. This should cover your restaurant or store."),(0,a.kt)("p",null,"You can also update the name of the Zone and geofence \u2013 both of these details will be included in Tempo Webhook updates."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7885).Z,width:"1024",height:"697"})),(0,a.kt)("h3",{id:"3-save"},"3","."," Save"),(0,a.kt)("p",null,"Close Zone Settings and click the Create/Update button. The Zone is ready, and the isochrones for it will be generated in the Bluedot backend. It takes from 30 seconds to 1 minute for the isochrones to be generated."),(0,a.kt)("p",null,"If you\u2019d like to link a Zone to a Store (A.K.A Destination) using ",(0,a.kt)("a",{parentName:"p",href:"/documentation/APIs/Config%20API/Overview"},"Config API"),", you\u2019ll use the following /Endpoints;"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Endpoint")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://config-docs.bluedot.io/#operation/addZone"},"Add DestintaionId to a new Zone")),(0,a.kt)("p",null,"When linking a Zone to a Store you\u2019ll have to pass the Destination ID of the Store."),(0,a.kt)("p",null,"Endpoint:\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"https://config.bluedot.io/prod1/zones")),(0,a.kt)("p",null,"Example of adding a Destination Id:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{ \n    "destinationId": "<store_destination_id_goes_here>" \n}\n')))}p.isMDXComponent=!0},7885:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Create-zone-1024x697-6e9951922067d8a4961a76e73204a7e8.jpg"},5537:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/store-management-3-b0fa9e7ba333b3a0ac6dac294285e3f8.png"}}]);