"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[6120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,k=p["".concat(d,".").concat(u)]||p[u]||m[u]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o="Bluedot Data Extension Fields",l={unversionedId:"integrations/Salesforce/Bluedot data extension fields",id:"integrations/Salesforce/Bluedot data extension fields",title:"Bluedot Data Extension Fields",description:"As part of Bluedot + Salesforce, we create a Data Extension\xa0associated with the app. It is called BluedotLocationServicesV2.",source:"@site/docs/integrations/Salesforce/Bluedot data extension fields.md",sourceDirName:"integrations/Salesforce",slug:"/integrations/Salesforce/Bluedot data extension fields",permalink:"/documentation/integrations/Salesforce/Bluedot data extension fields",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Salesforce iOS Integration",permalink:"/documentation/integrations/Salesforce/Mobile SDK Integration/iOS"},next:{title:"Segment integration",permalink:"/documentation/integrations/Segment"}},d={},c=[{value:"Add Custom Data",id:"add-custom-data",level:2}],s={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bluedot-data-extension-fields"},"Bluedot Data Extension Fields"),(0,r.kt)("p",null,"As part of Bluedot + Salesforce, we create a ",(0,r.kt)("a",{parentName:"p",href:"https://help.salesforce.com/articleView?id=mc_co_salesforce_data_extensions.htm&type=5"},"Data Extension"),"\xa0associated with the app. It is called ",(0,r.kt)("strong",{parentName:"p"},"BluedotLocationServicesV2"),".  "),(0,r.kt)("p",null,"The following information will be sent to the Data Extension for every event:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Field")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subscriberKey")),(0,r.kt)("td",{parentName:"tr",align:null},"A unique UUID value of a Salesforce subscriber.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apiKey")),(0,r.kt)("td",{parentName:"tr",align:null},"API Key of the relevant app.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"packageName")),(0,r.kt)("td",{parentName:"tr",align:null},"Package name of the app. A package contains a reverse domain name that must be unique to this application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"userName")),(0,r.kt)("td",{parentName:"tr",align:null},"Is the registered email address.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zoneId")),(0,r.kt)("td",{parentName:"tr",align:null},"The unique identifier of the Zone that triggered the check-in.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zoneName")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the Zone that triggered the check-in.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fenceId")),(0,r.kt)("td",{parentName:"tr",align:null},"The unique identifier of the Fence that triggered the check-in.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fenceName")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the Geofence that triggered the check-in.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"checkInTime")),(0,r.kt)("td",{parentName:"tr",align:null},"Date and time the check-in was triggered on the mobile device.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"checkInLatitude")),(0,r.kt)("td",{parentName:"tr",align:null},"Latitude component of the coordinate at which the check-in occurred.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"checkInLongitude")),(0,r.kt)("td",{parentName:"tr",align:null},"Longitude component of the coordinate at which the check-in occurred.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"checkInBearing")),(0,r.kt)("td",{parentName:"tr",align:null},"The bearing value of the device at the time of check-in, reported in degree.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"checkInSpeed")),(0,r.kt)("td",{parentName:"tr",align:null},"The travel speed of the device at the time of check-in, reported as meters per second.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customData")),(0,r.kt)("td",{parentName:"tr",align:null},"The keys and values entered in the Custom Action will be delivered to the mobile app at the time of check-in and check-out as part of the SDK callbacks. The custom data keys and values will be stored as individual columns in the Salesforce Data Extension.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"checkOutTime")),(0,r.kt)("td",{parentName:"tr",align:null},"Date and time the check-out was triggered on the mobile device. Only available for check-out enabled Zones.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dwellTime")),(0,r.kt)("td",{parentName:"tr",align:null},"The dwell time is the number of minutes a device was within a Fence. Only available for check-out enabled Zones.")))),(0,r.kt)("h2",{id:"add-custom-data"},"Add Custom Data"),(0,r.kt)("p",null,"Additional custom data can be included in the information going to your Data Extension. This data can come from either ",(0,r.kt)("a",{parentName:"p",href:"/documentation/Canvas/What%20is%20Zone%20custom%20data"},"Custom Zone Data fields"),", or from ",(0,r.kt)("a",{parentName:"p",href:"/documentation/Custom%20Event%20Metadata"},"Custom Event Metadata fields"),".\xa0However, we\u2019ll need to adjust your Data Extension in order to receive this data.\xa0"),(0,r.kt)("p",null,"To add these fields into your Data Extension just connect the Bluedot team using ",(0,r.kt)("a",{parentName:"p",href:"mailto:help@bluedot.io"},"help@bluedot.io")," and pass a list of the additional field names that you would like to be able to populate."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Only the fields specified to the Bluedot team are passed along to the Salesforce Marketing Cloud Data Extensions. All other fields specified in the Zone Custom Data or Custom Event Metadata will be ignored.")))}m.isMDXComponent=!0}}]);