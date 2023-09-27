"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[3411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const i={},r="Attentive location-based messages",s={unversionedId:"integrations/Attentive/Location-based messages",id:"integrations/Attentive/Location-based messages",title:"Attentive location-based messages",description:"The Attentive - Bluedot Geofencing enables brands to deliver more personalized and effective messaging to their customers. This feature allow you to send SMS messages to your customers when they enter or exit a Geofence.",source:"@site/docs/integrations/Attentive/Location-based messages.md",sourceDirName:"integrations/Attentive",slug:"/integrations/Attentive/Location-based messages",permalink:"/integrations/Attentive/Location-based messages",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Attentive Curbside Experience",permalink:"/integrations/Attentive/Curbside experience"},next:{title:"Bbot Integration",permalink:"/integrations/Bbot"}},l={},u=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Installing the Attentive &amp; Bluedot integration",id:"installing-the-attentive--bluedot-integration",level:2},{value:"From Attentive\u2019s Marketplace",id:"from-attentives-marketplace",level:3},{value:"From Canvas Integrations",id:"from-canvas-integrations",level:3},{value:"Authorizing the Integration",id:"authorizing-the-integration",level:3},{value:"Bluedot Mobile SDK implementation best practices",id:"bluedot-mobile-sdk-implementation-best-practices",level:2},{value:"Create your Journeys to send messages",id:"create-your-journeys-to-send-messages",level:2},{value:"Important Notes",id:"important-notes",level:2},{value:"Only Opt-in Users",id:"only-opt-in-users",level:3},{value:"Missing Custom Properties in SMS",id:"missing-custom-properties-in-sms",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"attentive-location-based-messages"},"Attentive location-based messages"),(0,a.kt)("p",null,"The Attentive - Bluedot Geofencing enables brands to deliver more personalized and effective messaging to their customers. This feature allow you to send SMS messages to your customers when they enter or exit a Geofence."),(0,a.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,a.kt)("p",null,"When a user enters or exits a Zone, Bluedot will call ",(0,a.kt)("a",{parentName:"p",href:"https://docs.attentivemobile.com/openapi/reference/tag/Custom-Events/"},"Attentive\u2019s Custom Events")," API with\xa0the basic user and the information about the Zone they\u2019ve reached, then you can use the ",(0,a.kt)("a",{parentName:"p",href:"https://www.attentivemobile.com/messaging"},"Attentive\u2019s Journey Builder")," to craft the content of the SMS."),(0,a.kt)("h2",{id:"installing-the-attentive--bluedot-integration"},"Installing the Attentive & Bluedot integration"),(0,a.kt)("p",null,"To start using the Attentive integration you need to have an active account with Attentive, as well with Bluedot.\xa0"),(0,a.kt)("p",null,"You can install the integration either from Attentive\u2019s marketplace or from Canvas in the integrations section."),(0,a.kt)("h3",{id:"from-attentives-marketplace"},"From Attentive\u2019s Marketplace"),(0,a.kt)("p",null,"From Attentive\u2019s market place search for Bluedot and follow the steps to install the app."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Attentive marketplace Install Bluedot Integration",src:n(5403).Z,width:"1024",height:"529"})),(0,a.kt)("h3",{id:"from-canvas-integrations"},"From Canvas Integrations"),(0,a.kt)("p",null,"From Canvas, go to the Integrations section and select Attentive click on the \u201c",(0,a.kt)("em",{parentName:"p"},"Enable")," ",(0,a.kt)("em",{parentName:"p"},"Attentive Integration"),"\u201d button and then follow the steps to complete the integration."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Install the Attentive integration from Canvas",src:n(2269).Z,width:"1024",height:"649"})),(0,a.kt)("h3",{id:"authorizing-the-integration"},"Authorizing the Integration"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Authorize the Attentive &amp; Bluedot integration",src:n(7730).Z,width:"1024",height:"1020"})),(0,a.kt)("p",null,"If you are installing the integration from Attentive\u2019s Market place, you\u2019ll need to select the region where your Bluedot account is. If you\u2019re not sure what is the region of your account let us know at ",(0,a.kt)("a",{parentName:"p",href:"mailto:help@bluedot.io"},"help@bluedot.io"),"."),(0,a.kt)("h2",{id:"bluedot-mobile-sdk-implementation-best-practices"},"Bluedot Mobile SDK implementation best practices"),(0,a.kt)("p",null,"When implementing the Bluedot SDK in your app, ensure that you include the subscriber\u2019s mobile number in the SDK\u2019s Custom Event Meta Data. We\u2019ll pass this number to Attentive to send the message to the right user."),(0,a.kt)("p",null,"For the integration to work, you\u2019ll need to pass the subscriber mobile number in the Custom Event Meta Data with any of the following keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mobileNumber")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"contactNumber"))),(0,a.kt)("h2",{id:"create-your-journeys-to-send-messages"},"Create your Journeys to send messages"),(0,a.kt)("p",null,"Once you\u2019ve installed the Attentive & Bluedot integration, and have implemented the Bluedot mobile SDK into your app, you can start creating Journeys to send an SMS when a user enters a Zone.\xa0"),(0,a.kt)("p",null,"1","."," Create a new Journey and select the \u201c",(0,a.kt)("em",{parentName:"p"},"Start from scratch"),"\u201d option."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create a new Journey in Attentive",src:n(8116).Z,width:"1024",height:"745"})),(0,a.kt)("p",null,"2","."," Select one of the\xa0",(0,a.kt)("em",{parentName:"p"},"Bluedot Entered a Zone"),"\xa0or\xa0",(0,a.kt)("em",{parentName:"p"},"Bluedot Exit a Zone"),"\xa0custom events."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(943).Z,width:"1024",height:"433"})),(0,a.kt)("p",null,"3","."," Add a \u201cSend text message\u201d option and edit the content of the message.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{src:n(4135).Z,width:"994",height:"1024"})),(0,a.kt)("h2",{id:"important-notes"},"Important Notes"),(0,a.kt)("p",null,"Here\u2019s a list of known caveats that you need to take into account when designing your Curbside experience with Attentive & Bluedot to ensure your users will receive the SMS."),(0,a.kt)("h3",{id:"only-opt-in-users"},"Only Opt-in Users"),(0,a.kt)("p",null,"Please make sure to collect the customer\u2019s consent when collecting the phone number of the user during the order\u2019s checkout process. Attentive will always ensure the number is opted in before sending the SMS, so there\u2019s no chance of an un-opted user getting an SMS. \xa0For further information check ",(0,a.kt)("a",{parentName:"p",href:"https://docs.attentivemobile.com/pages/legal-docs/legal-transactional/"},"Attentive\u2019s documentation on legal requirements for transactional messages"),"."),(0,a.kt)("h3",{id:"missing-custom-properties-in-sms"},"Missing Custom Properties in SMS"),(0,a.kt)("p",null,"If a message includes variables from the {} Personalization options, but these are not populated when registering the order with Bluedot\u2019s Wave API, then the message will not be sent.\xa0"),(0,a.kt)("p",null,"If you have any technical issues or questions please use ",(0,a.kt)("a",{parentName:"p",href:"mailto:help@bluedot.io"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("em",{parentName:"strong"},"help@bluedot.io")))," to reach out to our team."))}m.isMDXComponent=!0},5403:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Attentive-marketplace-bluedot-integration-1024x529-9ca1c9711aefa860de1c2b2f5ad8cddf.png"},8116:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Attentive_create_new_journey-1024x745-2cbe28787a463ab34e785eb3d0eea1bf.png"},7730:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Authorize_the_attentive__bluedot_integration-1024x1020-87de3fec85d530f0d1d10ac009b86499.png"},943:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/attentive-geo-trigger-1024x433-8179e03c4ea0abaa25baba6fac9481d0.jpg"},2269:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/attentive_integration_from_canvas-1024x649-97ad15976aee5feefae5f30741d29bc6.png"},4135:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/attentive_send_message_content-994x1024-50a47258293275a01f92ed0891624f4d.png"}}]);