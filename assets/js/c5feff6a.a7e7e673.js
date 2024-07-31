"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[6437],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,g=u["".concat(d,".").concat(s)]||u[s]||k[s]||o;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},42568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},l="Tempo webhook",i={unversionedId:"Webhooks/Tempo",id:"Webhooks/Tempo",title:"Tempo webhook",description:"Register Tempo Webhooks to receive real-time ETA notifications from your customers. As your customers get closer to their Destination to collect their order, Bluedot will send a notification every minute, so your team is ready to go.",source:"@site/docs/Webhooks/Tempo.md",sourceDirName:"Webhooks",slug:"/Webhooks/Tempo",permalink:"/Webhooks/Tempo",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Geo-Triggering webhook",permalink:"/Webhooks/Geo-triggering"},next:{title:"Wave webhook",permalink:"/Webhooks/Wave"}},d={},p=[{value:"Configure a Tempo Webhook",id:"configure-a-tempo-webhook",level:2},{value:"1. Add a New Webhook",id:"1-add-a-new-webhook",level:3},{value:"2. Add the Webhook Details",id:"2-add-the-webhook-details",level:3},{value:"3. Save",id:"3-save",level:3},{value:"Webhook request JSON structure",id:"webhook-request-json-structure",level:2},{value:"Tempo Webhook Field description",id:"tempo-webhook-field-description",level:2}],m={toc:p},u="wrapper";function k(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tempo-webhook"},"Tempo webhook"),(0,r.kt)("p",null,"Register Tempo Webhooks to receive real-time ETA notifications from your customers. As your customers get closer to their Destination to collect their order, Bluedot will send a notification every minute, so your team is ready to go."),(0,r.kt)("h2",{id:"configure-a-tempo-webhook"},"Configure a Tempo Webhook"),(0,r.kt)("h3",{id:"1-add-a-new-webhook"},"1","."," Add a New Webhook"),(0,r.kt)("p",null,"Under Your Account, choose"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(25325).Z,width:"1024",height:"563"})),(0,r.kt)("h3",{id:"2-add-the-webhook-details"},"2","."," Add the Webhook Details"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Property")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Project"),(0,r.kt)("td",{parentName:"tr",align:null},"Select the Project you\u2019ll receive the events from")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event"),(0,r.kt)("td",{parentName:"tr",align:null},"Select ",(0,r.kt)("em",{parentName:"td"},"Tempo"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Structure"),(0,r.kt)("td",{parentName:"tr",align:null},"Select Standard. If you\u2019d like to send the Tempo updates to Tealium check this guide.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"URL"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL of the server where the webhooks will be received. We suggest that the service has SSL enabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Header Fields (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"Add any extra parameters you\u2019d like to be included in the header of the request. For example, this is a good place to add a security token to authorize the incoming events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Body Fields (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"Add any extra parameters you\u2019d like to be included in the body of the request.")))),(0,r.kt)("h3",{id:""},(0,r.kt)("img",{src:n(52074).Z,width:"1024",height:"564"})),(0,r.kt)("h3",{id:"3-save"},"3","."," Save"),(0,r.kt)("p",null,"You can also configure a Tempo Webhook through Config API (Information on using the Config API for registering a Webhook can be found here.)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Endpoint")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description")),(0,r.kt)("p",null,"Add Tempo Webhooks to a Project"),(0,r.kt)("p",null,"When creating or editing a Project you can add Tempo Webhooks within the tempo property."),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://config.bluedot.io/prod1/projects")),(0,r.kt)("p",null,"Example of adding a Tempo Webhook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"tempo": { \n    "webhooks": [{ \n        "type": "tempo", \n        "url": "<webhook URL goes here>" \n    }] \n}\n')),(0,r.kt)("h2",{id:"webhook-request-json-structure"},"Webhook request JSON structure"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update JSON request")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n\xa0 \xa0 "deviceType": "iPhone12,3",\n\xa0 \xa0 "os": "iOS",\n\xa0 \xa0 "osVersion": "7.0",\n\xa0 \xa0 "customerApplicationId": "au.com.bluedot",\xa0\n\xa0 \xa0 "sdkVersion": "1.11.0",\n\xa0 \xa0 "appBuildVersion": "1.11.2",\n\xa0 \xa0 "customEventMetaData": {\n\xa0 \xa0 \xa0 \xa0 "key1": "value1",\n\xa0 \xa0 \xa0 \xa0 "key2": "value2"\n\xa0 \xa0 },\n\xa0 \xa0 "eventTime": "2020-05-21T05:44:04Z",\n\xa0 \xa0 "longitude": 144.123123123,\n\xa0 \xa0 "latitude": -33.123123123,\n\xa0 \xa0 "destinationId": "store ID",\n\xa0 \xa0 "eventType": "tempoUpdate",\n\xa0 \xa0 "eta": 900,\xa0\n\xa0 \xa0 "etaDirection": "greaterThan",\n\xa0 \xa0 "installRef": "1111111-2222-3333-4444-555555555555",\n\xa0 \xa0 "projectId": "1111111-2222-3333-4444-555555555555",\n\xa0 \xa0 "triggerChainId": "11111111-2222-3333-4444-555555555555",\n\xa0 \xa0 "notificationType": "tempo",\n    "zoneId": "1111111-2222-3333-4444-555555555555",\n    "zoneName": "Store 123", \n    "zoneCustomData": {\n        "key1": "value1",\n        "key2": "value2"\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Stop JSON request")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n\xa0 \xa0 "deviceType": "iPhone12,3",\n\xa0 \xa0 "os": "iOS",\n\xa0 \xa0 "osVersion": "7.0",\n\xa0 \xa0 "customerApplicationId": "au.com.bluedot",\xa0\n\xa0 \xa0 "sdkVersion": "1.11.0",\n\xa0 \xa0 "appBuildVersion": "1.11.2",\n\xa0 \xa0 "customEventMetaData": {\n\xa0 \xa0 \xa0 \xa0 "key1": "value1",\n\xa0 \xa0 \xa0 \xa0 "key2": "value2"\n\xa0 \xa0 },\n\xa0 \xa0 "eventTime": "2020-05-21T05:44:04Z",\n\xa0 \xa0 "destinationId": "store ID",\n\xa0 \xa0 "stopReason": "stoppedByCustomerApp",\xa0\n\xa0 \xa0 "eventType": "tempoStop",\n\xa0 \xa0 "installRef": "1111111-2222-3333-4444-555555555555",\n\xa0 \xa0 "projectId": "1111111-2222-3333-4444-555555555555",\n\xa0 \xa0 "triggerChainId": "11111111-2222-3333-4444-555555555555",\n\xa0 \xa0 "notificationType": "tempo",\n    "zoneId": "1111111-2222-3333-4444-555555555555",\n    "zoneName": "Store 123",\n    "zoneCustomData": { \n        "key1": "value1",\n        "key2": "value2" \n    }\n}\n')),(0,r.kt)("h2",{id:"tempo-webhook-field-description"},"Tempo Webhook Field description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"appBuildVersion")),(0,r.kt)("td",{parentName:"tr",align:null},"The app build version of the application using the Point SDK which triggered the check-in."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"1.11.2"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customerApplicationId")),(0,r.kt)("td",{parentName:"tr",align:null},"The application's package name."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"io.bluedot"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customEventMetaData")),(0,r.kt)("td",{parentName:"tr",align:null},"Key/Value pairs passed from the application to Bluedot Point SDK. This will not be returned as part of the request if no data set on the Mobile SDK."),(0,r.kt)("td",{parentName:"tr",align:null},"JSON"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "orderId":"Order 123" }'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"destinationId")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID associated with the location setup in Canvas for the Zone."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Store-123"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deviceType")),(0,r.kt)("td",{parentName:"tr",align:null},"The type of device that triggered the Tempo event."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"iPhone 9,3"'),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},'"samsung SM-N950F"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eta")),(0,r.kt)("td",{parentName:"tr",align:null},"The estimated time of arrival of the user to the store in seconds."),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"300"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"etaDirection")),(0,r.kt)("td",{parentName:"tr",align:null},"The direction of estimation \u2013 whether the device is more than or less than the number of seconds provided."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"greaterThan"'),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},'"lessThan"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eventTime")),(0,r.kt)("td",{parentName:"tr",align:null},"Records the time the event reaches the Bluedot platform."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"2020-05-21T05:44:04Z"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eventType")),(0,r.kt)("td",{parentName:"tr",align:null},"This field denotes the type of event being relayed from our servers to yours. For a stop of Tempo the type will be \u201ctempoStop\u201d."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"tempoUpdate"'),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},'"tempoStop"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"installRef")),(0,r.kt)("td",{parentName:"tr",align:null},"A randomly issued installation reference, not tied to any personally identifiable data (PID) on the user\u2019s device."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"44c2d0b8-0004-47fc-830d-b73e9ff706f6"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"latitude")),(0,r.kt)("td",{parentName:"tr",align:null},"Latitude component of the coordinate of the current Tempo event."),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"30.2672042"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"longitude")),(0,r.kt)("td",{parentName:"tr",align:null},"Longitude component of the coordinate the current Tempo event."),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-97.7447926"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"notificationType")),(0,r.kt)("td",{parentName:"tr",align:null},"This field denotes the type of notification being relayed from our servers to yours. For an Tempo event  the type will be \u201ctempo\u201d."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"tempo"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"os")),(0,r.kt)("td",{parentName:"tr",align:null},"The OS of the device that triggered the ETA event."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"android"'),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},'"iOS"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"osVersion")),(0,r.kt)("td",{parentName:"tr",align:null},"The OS Version of the device that triggered the Tempo event."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"8.0.0"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"projectId")),(0,r.kt)("td",{parentName:"tr",align:null},"The identifier of the project with which the SDK is logged into the app."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"4647e4eb-f908-4d3d-82e9-4959d59923b0"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sdkVersion")),(0,r.kt)("td",{parentName:"tr",align:null},"The Point SDK version number being used in the application which has triggered the Tempo event."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"15.5.0"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stopReason")),(0,r.kt)("td",{parentName:"tr",align:null},"This field denotes the reason the Tempo service stopped running."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"- ",(0,r.kt)("inlineCode",{parentName:"td"},"invalidDestinationId"),": Passing an invalid ",(0,r.kt)("inlineCode",{parentName:"td"},"destinationId")," to the start Tempo tracking SDK method. The SDK will return an error at the client level and at the same time, this event will be fired by our webhooks.",(0,r.kt)("br",null),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"stoppedByCustomerApp"),": The stop Tempo tracking method is executed.",(0,r.kt)("br",null),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"expired"),": Tempo service has been tracking the device for 30 minutes, and it hasn\u2019t arrived at the destination. This expiring time is customizable. Check with your CX representative if you\u2019d like to update it.",(0,r.kt)("br",null),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"sdkLogout"),": The SDK\u2019s reset method is executed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"triggerChainId")),(0,r.kt)("td",{parentName:"tr",align:null},"triggerChainId can be used to connect the ETA updates coming through for one set from start to finish."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"c8965662-d67f-49e8-abf9-0bada6c153d1"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zoneId")),(0,r.kt)("td",{parentName:"tr",align:null},"The unique identifier of the zone associated with the ",(0,r.kt)("inlineCode",{parentName:"td"},"destinationId"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"4647e4eb-f908-4d3d-82e9-4959d59923b0"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zoneName")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the zone associated with the ",(0,r.kt)("inlineCode",{parentName:"td"},"destinationId"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Zone Name"'))))))}k.isMDXComponent=!0},25325:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/new-webhook-1024x563-fc7b80a9ad76e201706eb1a6ba9264e0.jpg"},52074:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tempo-webhook-example-1024x564-2852950f12d92ac5fcb79a46e0ef036d.jpg"}}]);