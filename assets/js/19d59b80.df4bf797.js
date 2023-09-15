"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[6781],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=d(a),g=r,c=u["".concat(p,".").concat(g)]||u[g]||s[g]||i;return a?n.createElement(c,l(l({ref:e},m),{},{components:a})):n.createElement(c,l({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4058:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={},l="mParticle Integration",o={unversionedId:"Integrations/mParticle",id:"Integrations/mParticle",title:"mParticle Integration",description:"Bluedot is a location platform that provides an accurate and simple geofencing platform for apps. After integrating the Bluedot SDK and setting geofences, customer\u2019s can create personalised location-based experiences for their users.",source:"@site/docs/Integrations/mParticle.md",sourceDirName:"Integrations",slug:"/Integrations/mParticle",permalink:"/Integrations/mParticle",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Mobivity Integration",permalink:"/Integrations/Mobivity"},next:{title:"Olo Integration",permalink:"/Integrations/Olo"}},p={},d=[{value:"Associated Documentation",id:"associated-documentation",level:2},{value:"Integration Architecture Diagram",id:"integration-architecture-diagram",level:2},{value:"Integration Overview",id:"integration-overview",level:2},{value:"Custom Attributes / Sending events to mParticle",id:"custom-attributes--sending-events-to-mparticle",level:2},{value:"Integration Fields: Type &amp; Character Length setup",id:"integration-fields-type--character-length-setup",level:2},{value:"<strong>Event Custom Attributes</strong>",id:"event-custom-attributes",level:3},{value:"<strong>Application Info</strong>",id:"application-info",level:3},{value:"<strong>Device Info</strong>",id:"device-info",level:3},{value:"<strong>User Attributes</strong>",id:"user-attributes",level:3},{value:"Contact Details",id:"contact-details",level:2}],m={toc:d},u="wrapper";function s(t){let{components:e,...i}=t;return(0,r.kt)(u,(0,n.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mparticle-integration"},"mParticle Integration"),(0,r.kt)("p",null,"Bluedot is a location platform that provides an accurate and simple geofencing platform for apps. After integrating the Bluedot SDK and setting geofences, customer\u2019s can create personalised location-based experiences for their users."),(0,r.kt)("p",null,"mParticle is a customer data platform that unifies customer data in one place and connects it to 175+ leading marketing, analytics, and data warehousing solutions."),(0,r.kt)("p",null,"Through this integration, Bluedot\u2019s first-party, accurate, and privacy compliant location data can be connected and utilised across all of the platform and apps supported by mParticle.\xa0\xa0"),(0,r.kt)("h2",{id:"associated-documentation"},"Associated Documentation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mParticle\u2019s own ",(0,r.kt)("a",{parentName:"li",href:"https://docs.mparticle.com/integrations/bluedot/feed/"},(0,r.kt)("em",{parentName:"a"},"mParticle + Bluedot documentation")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"integration-architecture-diagram"},"Integration Architecture Diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2154).Z,width:"1024",height:"576"})),(0,r.kt)("h2",{id:"integration-overview"},"Integration Overview"),(0,r.kt)("p",null,"Before you begin the integration please ensure you have an active customer account with both Bluedot & mParticle."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Decide on the custom data you\u2019ll be passing from Bluedot Entry/Exit (",(0,r.kt)("em",{parentName:"li"},"can")," ",(0,r.kt)("em",{parentName:"li"},"also be called Check-in and Check-out Event"),") Events to mParticle:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/Custom%20Event%20Metadata"},"Custom Event Metadata")," (",(0,r.kt)("em",{parentName:"li"},"max.20"),")"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/Canvas/What%20is%20Zone%20custom%20data"},"Custom Zone Data"),"\xa0(",(0,r.kt)("em",{parentName:"li"},"max.20"),")"))),(0,r.kt)("li",{parentName:"ol"},"Integrate the Bluedot SDK within your mobile app:\xa0",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/Point%20SDK/iOS/Quick%20Start"},"iOS integration guide")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/Point%20SDK/Android/Quick%20Start"},"Android integration guide")))),(0,r.kt)("li",{parentName:"ol"},"Add a Bluedot integration to your mParticle account, as laid out in ",(0,r.kt)("a",{parentName:"li",href:"https://docs.mparticle.com/integrations/bluedot/feed/"},"mParticle\u2019s documentation"),"."),(0,r.kt)("li",{parentName:"ol"},"Add your mParticle iOS and/or Android publishable API keys and secrets to the Project via the Integrations section in Canvas.  ",(0,r.kt)("img",{alt:"mParticle Integration Form",src:a(6899).Z,width:"1024",height:"722"}))),(0,r.kt)("p",null,"Once these steps are done, the integration is ready to go. Simply enter a geofence with a mobile device to trigger the Zone."),(0,r.kt)("h2",{id:"custom-attributes--sending-events-to-mparticle"},"Custom Attributes / Sending events to mParticle"),(0,r.kt)("p",null,"Custom attributes can be passed along to mParticle as key/ value pairs in Bluedot\u2019s ",(0,r.kt)("a",{parentName:"p",href:"/Custom%20Event%20Metadata"},"Custom Event Metadata")," by prepending the key with ",(0,r.kt)("inlineCode",{parentName:"p"},"mparticle_"),".",(0,r.kt)("br",{parentName:"p"}),"\n","An example will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mparticle_customer_id : "<your mparticle customer id>",\nmparticle_another_custom_field : "another value",\n')),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"At least one of ",(0,r.kt)("inlineCode",{parentName:"p"},"user_dentities"),"\xa0listed in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mparticle.com/developers/server/json-reference/#user_identities"},"mParticle\u2019s documentation"),"\xa0with the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"mparticle_"),"\xa0fields ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"must"))," be included in the CustomEventMetaData in order to push events to mParticle.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The custom event metadata is not persisted across SDK sessions. If the SDK is logged out the\xa0custom event metadata is cleared by the SDK. We suggest setting the custom data every time the SDK is authenticated in the app."),(0,r.kt)("p",{parentName:"admonition"},"More information on best practices of setting and using custom event metadata can be found\xa0",(0,r.kt)("a",{parentName:"p",href:"/Custom%20Event%20Metadata"},"here"),".")),(0,r.kt)("h2",{id:"integration-fields-type--character-length-setup"},"Integration Fields: Type & Character Length setup"),(0,r.kt)("h3",{id:"event-custom-attributes"},(0,r.kt)("strong",{parentName:"h3"},"Event Custom Attributes")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Field")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"TYPE")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"LENGTH")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"DESCRIPTION")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"altitude")),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Altitude in metres if supplied by device sensors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"altitudeAccuracy")),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Accuracy of supplied altitude")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bearing")),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The direction of motion of the device at the time of trigger event, if available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"checkInTime")),(0,r.kt)("td",{parentName:"tr",align:null},"Datetime"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The time of entry \u2013 only supplied for exit triggers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eventTime")),(0,r.kt)("td",{parentName:"tr",align:null},"Datetime"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The time of the trigger event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fenceId")),(0,r.kt)("td",{parentName:"tr",align:null},"UUID"),(0,r.kt)("td",{parentName:"tr",align:null},"36"),(0,r.kt)("td",{parentName:"tr",align:null},"Only available if trigger caused by geofence or Geoline\u2122")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fenceName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Only available if trigger caused by geofence or Geoline\u2122")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"UUID"),(0,r.kt)("td",{parentName:"tr",align:null},"36"),(0,r.kt)("td",{parentName:"tr",align:null},"The unique ID of the trigger")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"projectId")),(0,r.kt)("td",{parentName:"tr",align:null},"UUID"),(0,r.kt)("td",{parentName:"tr",align:null},"36"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the Bluedot project that the SDK was running against")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sdkVersion")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The version of the Bluedot SDK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"speed")),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The speed of the device at the time of trigger event, if available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"triggerId")),(0,r.kt)("td",{parentName:"tr",align:null},"UUID"),(0,r.kt)("td",{parentName:"tr",align:null},"36"),(0,r.kt)("td",{parentName:"tr",align:null},"The chain ID of the trigger, which can be used to associate entry and exit events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zoneId")),(0,r.kt)("td",{parentName:"tr",align:null},"UUID"),(0,r.kt)("td",{parentName:"tr",align:null},"36"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the Bluedot Zone that the trigger was associated with")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zoneName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the Bluedot Zone that the trigger was associated with")))),(0,r.kt)("h3",{id:"application-info"},(0,r.kt)("strong",{parentName:"h3"},"Application Info")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"FIELD")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"TYPE")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"LENGTH")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"DESCRIPTION")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"application_version")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The version of the application holding the Bluedot PointSDK on the device that triggered")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"package")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The package name of the application running Bluedot Point SDK")))),(0,r.kt)("h3",{id:"device-info"},(0,r.kt)("strong",{parentName:"h3"},"Device Info")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"FIELD")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"TYPE")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"LENGTH")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"DESCRIPTION")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device_model")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The model of device that triggered")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"platform")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"iOS or android")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"os_version")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The version of the operating system on the device that triggered")))),(0,r.kt)("h3",{id:"user-attributes"},(0,r.kt)("strong",{parentName:"h3"},"User Attributes")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"FIELD")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"TYPE")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"LENGTH")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"DESCRIPTION")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bluedot_customer_id")),(0,r.kt)("td",{parentName:"tr",align:null},"UUID"),(0,r.kt)("td",{parentName:"tr",align:null},"36"),(0,r.kt)("td",{parentName:"tr",align:null},"A unique UUID associated with the device that triggered")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"contact-details"},"Contact Details"),(0,r.kt)("p",null,"If you have any technical issues or questions you please use ",(0,r.kt)("a",{parentName:"p",href:"mailto:help@bluedot.io"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("em",{parentName:"strong"},"help@bluedot.io"))),"\xa0to reach out to our Melbourne-based Engineering team."))}s.isMDXComponent=!0},2154:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Bluedot-mParticle-Architecture-1024x576-1f15aae714654830c65bb2db6c058715.png"},6899:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mParticle-canvas-integration-2e42e0de3975bea6c95b972b81e494b6.png"}}]);