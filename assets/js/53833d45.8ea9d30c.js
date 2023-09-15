"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[1226],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,s=u["".concat(d,".").concat(k)]||u[k]||m[k]||i;return n?a.createElement(s,l(l({ref:t},c),{},{components:n})):a.createElement(s,l({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},l="Geo-trigger webhook",o={unversionedId:"Webhooks/Geo-triggering",id:"Webhooks/Geo-triggering",title:"Geo-trigger webhook",description:"Register Geo-trigger Webhooks to receive real-time Entry/Exit notifications from your customers.",source:"@site/docs/Webhooks/Geo-triggering.md",sourceDirName:"Webhooks",slug:"/Webhooks/Geo-triggering",permalink:"/documentation/Webhooks/Geo-triggering",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/documentation/Webhooks/Overview"},next:{title:"Tempo Webhook",permalink:"/documentation/Webhooks/Tempo"}},d={},p=[{value:"Configure a Geo-trigger Webhook",id:"configure-a-geo-trigger-webhook",level:2},{value:"Additional Header and Body fields",id:"additional-header-and-body-fields",level:3},{value:"Webhook request JSON structure",id:"webhook-request-json-structure",level:2},{value:"Entry JSON request",id:"entry-json-request",level:3},{value:"Entry JSON request with <code>customEventMetaData</code> and <code>customData</code>",id:"entry-json-request-with-customeventmetadata-and-customdata",level:3},{value:"Exit JSON request",id:"exit-json-request",level:3},{value:"Exit JSON request with <code>customEventMetaData</code> and <code>customData</code>",id:"exit-json-request-with-customeventmetadata-and-customdata",level:3},{value:"Geo-trigger Webhook field description",id:"geo-trigger-webhook-field-description",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"geo-trigger-webhook"},"Geo-trigger webhook"),(0,r.kt)("p",null,"Register Geo-trigger Webhooks to receive real-time Entry/Exit notifications from your customers."),(0,r.kt)("h2",{id:"configure-a-geo-trigger-webhook"},"Configure a Geo-trigger Webhook"),(0,r.kt)("p",null,"From the Canvas Integration section, add a new Webhook and select Geo-trigger as the type in the dropdown."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8245).Z,width:"1024",height:"750"})),(0,r.kt)("h3",{id:"additional-header-and-body-fields"},"Additional Header and Body fields"),(0,r.kt)("p",null,"You can have additional information in either the headers or the body of the webhook\u2019s request by adding extra fields."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3213).Z,width:"1024",height:"647"})),(0,r.kt)("p",null,"You can also configure a Geo-trigger Webhook through Config API (Information on using the Config API for registering a Webhook can be found ",(0,r.kt)("a",{parentName:"p",href:"https://config-docs.bluedot.io/#operation/addProject"},"here"),".)"),(0,r.kt)("p",null,"If you\u2019d like to Create a Destination using ",(0,r.kt)("a",{parentName:"p",href:"/documentation/APIs/Config%20API/Overview"},"Config API"),", you\u2019ll use the following endpoints:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://config-docs.bluedot.io/#tag/projects/operation/addProject"},(0,r.kt)("strong",{parentName:"a"},"Add Geo-trigger Webhooks to a Project"))),(0,r.kt)("p",null,"When creating or editing a Project you can add Geo-trigger Webhooks within the webhooks property.\nSet the type to trigger in the request."),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://config.bluedot.io/prod1/projects"},"https://config.bluedot.io/prod1/projects")),(0,r.kt)("p",null,"Example of adding a Geo-trigger Webhook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"webhooks": [{\n    "type": "trigger",\n    "url": "<webhook URL goes here>"\n}]\n')),(0,r.kt)("h2",{id:"webhook-request-json-structure"},"Webhook request JSON structure"),(0,r.kt)("h3",{id:"entry-json-request"},"Entry JSON request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n\xa0 \xa0 "type": "checkIn",\n\xa0 \xa0 "checkInId":"73cbdf0c-5523-46ec-bc15-c9ad362b2a85",\n\xa0 \xa0 "installRef":"c92f4a32dc35282d4471b42993f809fa",\n\xa0 \xa0 "checkInTime": "02-09-2018 00:08:16",\n\xa0 \xa0 "checkInTimeISO": "2018-09-02T00:08:16.000Z",\n\xa0 \xa0 "longitude":144.98173087835312,\n\xa0 \xa0 "latitude":-37.819805462370944,\n\xa0 \xa0 "fenceName":"Melbourne Cricket Ground Gate 1",\n\xa0 \xa0 "deviceSpeed":10,\n\xa0 \xa0 "fenceId":"80fc36ad-ee72-4450-ad96-b3fadfc26cb4",\n\xa0 \xa0 "zoneName":"Melbourne Cricket Ground",\n\xa0 \xa0 "zoneId":"ffece0a9-fd21-4148-892e-0a61d01a6bd4",\n\xa0 \xa0 "deviceType":"iPhone 9,3",\n\xa0 \xa0 "sdkVersion": "1.13.0",\n\xa0 \xa0 "os": "iOS",\n\xa0 \xa0 "osVersion": "12.1.2",\n\xa0 \xa0 "appBuildVersion": "2.8.0.639",\n\xa0 \xa0 "receivedAt": "2018-09-02T00:22:43.816Z"\n}\n')),(0,r.kt)("h3",{id:"entry-json-request-with-customeventmetadata-and-customdata"},"Entry JSON request with ",(0,r.kt)("inlineCode",{parentName:"h3"},"customEventMetaData")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"customData")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n\xa0 "type": "checkIn",\n\xa0 "checkInId":"73cbdf0c-5523-46ec-bc15-c9ad362b2a85",\n\xa0 "installRef":"c92f4a32dc35282d4471b42993f809fa",\n\xa0 "checkInTime": "02-09-2018 00:08:16",\n\xa0 "checkInTimeISO": "2018-09-02T00:08:16.000Z",\n\xa0 "longitude":144.98173087835312,\n\xa0 "latitude":-37.819805462370944,\n\xa0 "fenceName":"Melbourne Cricket Ground Gate 1",\n\xa0 "deviceSpeed":10,\n\xa0 "fenceId":"80fc36ad-ee72-4450-ad96-b3fadfc26cb4",\n\xa0 "zoneName":"Melbourne Cricket Ground",\n\xa0 "zoneId":"ffece0a9-fd21-4148-892e-0a61d01a6bd4",\n\xa0 "deviceType":"iPhone 9,3",\n\xa0 "sdkVersion": "1.13.0",\n\xa0 "appBuildVersion": "2.8.0.639",\n\xa0 "os": "iOS",\n\xa0 "osVersion": "12.1.2",\n\xa0 "receivedAt": "2018-09-02T00:22:43.816Z",\n\xa0 "zoneCustomData": {\n\xa0 \xa0 \xa0 "key1": "value1",\n\xa0 \xa0 \xa0 "key2": "value2"\n\xa0 },\n\xa0 "eventMetaData": {\n\xa0 \xa0 \xa0 "eKey1": "eValue1"\n\xa0 }\n}\n')),(0,r.kt)("h3",{id:"exit-json-request"},"Exit JSON request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n\xa0 \xa0 "type": "checkOut",\n\xa0 \xa0 "checkInId":"73cbdf0c-5523-46ec-bc15-c9ad362b2a85",\n\xa0 \xa0 "installRef":"c92f4a32dc35282d4471b42993f809fa",\n\xa0 \xa0 "checkInTime": "02-09-2016 00:08:16",\n\xa0 \xa0 "checkInTimeISO": "2016-09-02T00:08:16.000Z",\n\xa0 \xa0 "checkOutTime": "02-09-2016 02:25:47",\n\xa0 \xa0 "checkOutTimeISO": "2016-09-02T02:25:47.000Z",\n\xa0 \xa0 "dwellTime": 138,\xa0\n\xa0 \xa0 "fenceName":"Melbourne Cricket Ground Gate 1",\n\xa0 \xa0 "fenceId":"80fc36ad-ee72-4450-ad96-b3fadfc26cb4",\n\xa0 \xa0 "zoneName":"Melbourne Cricket Ground",\n\xa0 \xa0 "zoneId":"ffece0a9-fd21-4148-892e-0a61d01a6bd4",\n\xa0 \xa0 "deviceType":"iPhone",\n\xa0 \xa0 "sdkVersion": "1.8.0",\n\xa0 \xa0 "appBuildVersion": "2.8.0.639",\n\xa0 \xa0 "receivedAt": "2016-09-02T02:25:47.816Z"\n}\n')),(0,r.kt)("h3",{id:"exit-json-request-with-customeventmetadata-and-customdata"},"Exit JSON request with ",(0,r.kt)("inlineCode",{parentName:"h3"},"customEventMetaData")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"customData")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n\xa0 \xa0 "type": "checkOut",\n\xa0 \xa0 "checkInId":"73cbdf0c-5523-46ec-bc15-c9ad362b2a85",\n\xa0 \xa0 "installRef":"c92f4a32dc35282d4471b42993f809fa",\n\xa0 \xa0 "checkInTime": "02-09-2016 00:08:16",\n\xa0 \xa0 "checkInTimeISO": "2016-09-02T00:08:16.000Z",\n\xa0 \xa0 "checkOutTime": "02-09-2016 02:25:47",\n\xa0 \xa0 "checkOutTimeISO": "2016-09-02T02:25:47.000Z",\n\xa0 \xa0 "dwellTime": 138,\xa0\n\xa0 \xa0 "fenceName":"Melbourne Cricket Ground Gate 1",\n\xa0 \xa0 "fenceId":"80fc36ad-ee72-4450-ad96-b3fadfc26cb4",\n\xa0 \xa0 "zoneName":"Melbourne Cricket Ground",\n\xa0 \xa0 "zoneId":"ffece0a9-fd21-4148-892e-0a61d01a6bd4",\n\xa0 \xa0 "deviceType":"iPhone",\n\xa0 \xa0 "sdkVersion": "1.8.0",\n\xa0 \xa0 "appBuildVersion": "2.8.0.639",\n\xa0 \xa0 "receivedAt": "2016-09-02T02:25:47.816Z",\n\xa0 \xa0 "zoneCustomData": {\n\xa0 \xa0 \xa0 \xa0 "key1": "value1",\n\xa0 \xa0 \xa0 \xa0 \xa0"key2": "value2"\n\xa0 \xa0 \xa0},\n\xa0 \xa0 \xa0"eventMetaData": {\n\xa0 \xa0 \xa0 \xa0 \xa0 "eKey1": "eValue1"\n\xa0 \xa0 \xa0 }\n}\n')),(0,r.kt)("h2",{id:"geo-trigger-webhook-field-description"},"Geo-trigger Webhook field description"),(0,r.kt)("p",null,"Fields returned in Entry event JSON request"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Field")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Example")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"appBuildVersion")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The app build version of the application using the Point SDK, which triggered the check-in. (Available only for check-ins of SDK version 1.8 and above.)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"1.11.2"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"checkInId")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The unique identifier of the Check-in record."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"73cbdf0c-5523-46ec-bc15-c9ad362b2a85"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"checkInTime")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"UTC date and time of the Check-in in DD-MM-YYYY hh:mm:ss format."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"02-09-2018 00:08:16"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"checkInTimeISO")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"UTC date and time of the Check-in in ISO format."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"2016-09-02T00:08:16.000Z"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deviceSpeed")),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"The travel speed of the device at the time of Check-in reported as meters per second."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eventMetaData")),(0,r.kt)("td",{parentName:"tr",align:null},"JSON Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Key/Value pairs passed from the application to Bluedot Point SDK. This will not be returned as part of the request if no data set on the Mobile SDK."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ \u201ceKey1\u201d: \u201ceValue1\u201d }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fenceId")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The unique identifier of the fence that triggered the Check-in."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"73cbdf0c-5523-46ec-bc15-c9ad362b2a85"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fenceName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the geofence that triggered the Check-in."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Fence Number 1"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"installRef")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The unique app install reference on the device."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"73cbdf0c-5523-46ec-bc15-c9ad362b2a85"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"latitude")),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Latitude component of the coordinate at which the Entry event occurred."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"144.981730"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"longitude")),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Longitude component of the coordinate at which the Entry event occurred."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-37.819805"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"os")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The OS of the device that triggered the Check-in event."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"android")," ",(0,r.kt)("inlineCode",{parentName:"td"},"iOS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"osVersion")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The OS Version of the device that triggered the Check-in event."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"15.4.3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"receivedAt")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"UTC date and time of the Check-in was received in our database in ISO format."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"2016-09-02T00:08:16.000Z"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sdkVersion")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The Point SDK version number is being used in the application which has triggered the Entry event. (Available only for check-ins of SDK version 1.6 and above.)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"15.2.0"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"This field denotes the type of event being relayed from our servers to yours. For check-ins, the type will be \u201ccheckIn\u201d."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"checkIn"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zoneCustomData")),(0,r.kt)("td",{parentName:"tr",align:null},"JSON Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Key/Value pair of Location specific data added to the custom action of the Zone. This will not be returned as part of the request if no data set for the Zone\u2019s custom Action."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ \u201ceKey1\u201d: \u201ceValue1\u201d }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zoneId")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The unique identifier of the zone that triggered the Entry event."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"73cbdf0c-5523-46ec-bc15-c9ad362b2a85"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zoneName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the zone that triggered the Entry event."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Zone Restaurant"'))))),(0,r.kt)("p",null,"Fields returned in Exit event JSON request"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Field")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Example")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"checkOutTime")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"UTC date and time of the Check-out in DD-MM-YYYY hh:mm:ss format."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"02-09-2018 00:08:16"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"checkOutTimeISO")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"UTC date and time of the Check-out in ISO format."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"2016-09-02T00:08:16.000Z"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dwellTime")),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"The dwell time is the number of minutes a device was within a fence."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"138"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"This field denotes the type of event being relayed from our servers to yours. For Exit events, the type will be \u201ccheckOut\u201d."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"checkOut"'))))))}m.isMDXComponent=!0},8245:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Add-New-Geo-trigger-webhook-1024x750-61f6802156250da8ae2af2d530ca87fd.png"},3213:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Add-extra-headers-and-body-fields-1024x647-da2e7147056c03ed5d7a6818abda768f.png"}}]);