"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[1566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),c=o,k=p["".concat(s,".").concat(c)]||p[c]||h[c]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={pagination_next:"Webhooks/Geo-triggering",pagination_prev:null},i="Overview",l={unversionedId:"Webhooks/Overview",id:"Webhooks/Overview",title:"Overview",description:"Register Webhooks to receive real-time notifications from your app user\u2019s activity. Webhooks can be used to send events for:",source:"@site/docs/Webhooks/Overview.md",sourceDirName:"Webhooks",slug:"/Webhooks/Overview",permalink:"/documentation/Webhooks/Overview",draft:!1,tags:[],version:"current",frontMatter:{pagination_next:"Webhooks/Geo-triggering",pagination_prev:null},sidebar:"defaultSidebar",next:{title:"Geo-trigger webhook",permalink:"/documentation/Webhooks/Geo-triggering"}},s={},u=[{value:"Configure a Webhook",id:"configure-a-webhook",level:2},{value:"Webhook Event Headers",id:"webhook-event-headers",level:2},{value:"Example HTTP header in the request",id:"example-http-header-in-the-request",level:3},{value:"Example Dynamic headers in the request",id:"example-dynamic-headers-in-the-request",level:3},{value:"Webhook request JSON structure",id:"webhook-request-json-structure",level:2}],d={toc:u},p="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Register Webhooks to receive real-time notifications from your app user\u2019s activity. Webhooks can be used to send events for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Geo-trigger:")," Entry and/or exit into a Zone/Geofence"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tempo:")," ETA calculations as a user moves towards a Zone"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Wave:")," API events when a user notifies of their arrival"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hello Orders:"),"\xa0events when the state of an order has been updated in Hello Screens")),(0,o.kt)("p",null,"Please also note that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Multiple Webhooks can be added to the project"),(0,o.kt)("li",{parentName:"ul"},"Webhooks structure can be standard hierarchical or flat"),(0,o.kt)("li",{parentName:"ul"},"Header fields can be set dynamically")),(0,o.kt)("h2",{id:"configure-a-webhook"},"Configure a Webhook"),(0,o.kt)("p",null,"There are two ways to configure a Webhook:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Through the Canvas UI"),(0,o.kt)("li",{parentName:"ul"},"Using Config API (Learn more\xa0",(0,o.kt)("a",{parentName:"li",href:"https://config-docs.bluedot.io/#operation/addProject"},"here"),".)")),(0,o.kt)("p",null,"Webhooks are configured at the Project level with a maximum of one webhook for each Event type."),(0,o.kt)("p",null,"To set up ",(0,o.kt)("strong",{parentName:"p"},"Webhooks"),", login to Canvas and head to the ",(0,o.kt)("strong",{parentName:"p"},"Integrations")," section",(0,o.kt)("strong",{parentName:"p"},".")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8132).Z,width:"1600",height:"739"})),(0,o.kt)("p",null,"1","."," In the Integrations section, choose a Project where you would like to add a Webhook and click on the Add button"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8555).Z,width:"1600",height:"815"})),(0,o.kt)("p",null,"2","."," In the list of the Integrations search for the Webhooks tab and click on adding a new Webhook"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5494).Z,width:"1600",height:"794"})),(0,o.kt)("p",null,"3","."," Configure Event Type, URL, Header and Body fields"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1850).Z,width:"1199",height:"649"}),(0,o.kt)("br",{parentName:"p"}),"\n","4","."," Header Fields for the standard Webhooks can be set dynamically by adding the {} in the value field.\xa0By the way, the value itself can be set and injected from the additional event-specific\xa0",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/documentation/Custom%20Event%20Metadata"},"Custom Event Meta Data")),"\xa0fields. The Dynamic Webhook Headers feature will pick up that value and attach it to the Webhook outputs."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8468).Z,width:"1197",height:"839"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Event"),(0,o.kt)("td",{parentName:"tr",align:null},"Choose Event Type: - Geo-triggering - Wave - Tempo - Hello Order")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"URL"),(0,o.kt)("td",{parentName:"tr",align:null},"The URL of the server where the webhooks will be received. We suggest that the service has SSL enabled.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Header fields (optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"Custom headers are sent along with the webhook request. Keys must not contain spaces.  The dynamic headers (available only for standard webhooks) will require a fixed property key; only the value can be programmatically set. By adding dynamic headers to the Webhook, you\u2019re setting up a pattern that will be picked up and populated from the webhook request body . It can be any property name that is present in the webhook request body. For example, to set a custom value included in the event, you can use ",(0,o.kt)("inlineCode",{parentName:"td"},"eventMetaData.key_name")," for a Geo-trigger event or ",(0,o.kt)("inlineCode",{parentName:"td"},"customEventMetaData.key_name")," for a Tempo or Wave event")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Body fields (optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"Custom fields and values which will be added to the body of the webhook when sent. Keys must not contain spaces")))),(0,o.kt)("p",null,"5","."," Select Add"),(0,o.kt)("h1",{id:"receiving-a-webhook-notification"},"Receiving a Webhook notification"),(0,o.kt)("p",null,"To receive a webhook, you would need a server, cloud function or any HTTP endpoint that can accept and process ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," requests."),(0,o.kt)("h2",{id:"webhook-event-headers"},"Webhook Event Headers"),(0,o.kt)("p",null,"You can make use of the ",(0,o.kt)("strong",{parentName:"p"},"Token Key")," and ",(0,o.kt)("strong",{parentName:"p"},"Token Value")," to add your own signature to the Webhook event. The Token Key and Token Value will be included in the Header of the HTTP request.\xa0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"tokenKey": "tokenValue"\n')),(0,o.kt)("p",null,"We encourage you to make use of these Key/Value tokens to sign the events with our own values to verify the origin of the events."),(0,o.kt)("h3",{id:"example-http-header-in-the-request"},"Example HTTP header in the request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "securitytoken": "72340732BlueDOT7297329-T0",\n    "contenttype": "application/json"\n}\n')),(0,o.kt)("h3",{id:"example-dynamic-headers-in-the-request"},"Example Dynamic headers in the request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "authentication_token": "Bearer {eventMetaData.auth_key}",\n    "user_id": "{installRef}",\n    "HeaderKey3": "HeaderValue3"\n}\n')),(0,o.kt)("h2",{id:"webhook-request-json-structure"},"Webhook request JSON structure"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/documentation/Webhooks/Geo-triggering"},"Geo-trigger")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/documentation/Webhooks/Tempo"},"Tempo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/documentation/Webhooks/Wave"},"Wave")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/documentation/Webhooks/Hello%20order"},"Hello Order"))))}h.isMDXComponent=!0},8132:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/webhooks-overview-1-83a96e6afb43286d80d96df6929a8eb8.png"},8555:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/webhooks-overview-2-a428a2f1351e7bdfbed95bd446e6edaf.png"},5494:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/webhooks-overview-3-162421e2dbc776fbb44f3aad675bf4ba.png"},1850:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/webhooks-overview-4-cb81a6e0938acb5d394d4d499c842bcd.png"},8468:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/webhooks-overview-5-7b5f4af890bedd82ac4df94feb10fd76.png"}}]);