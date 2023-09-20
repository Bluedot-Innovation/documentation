"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[8859],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2040:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={},i="Adobe Experience Platform integration",l={unversionedId:"Integrations/Adobe Experience",id:"Integrations/Adobe Experience",title:"Adobe Experience Platform integration",description:"Bluedot is a location platform that provides an accurate and simple geofencing platform for apps. After integrating the Bluedot SDK and setting geofences, customer\u2019s can create personalised location-based experiences for their users.",source:"@site/docs/Integrations/Adobe Experience.md",sourceDirName:"Integrations",slug:"/Integrations/Adobe Experience",permalink:"/documentation/Integrations/Adobe Experience",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/documentation/Integrations/Overview"},next:{title:"Overview",permalink:"/documentation/Integrations/Airship/Overview"}},s={},c=[{value:"Integration Architecture Diagram",id:"integration-architecture-diagram",level:2},{value:"Integration Overview",id:"integration-overview",level:2},{value:"Custom Event Metadata in Bluedot events",id:"custom-event-metadata-in-bluedot-events",level:2},{value:"Webhook fields passed to HTTP API Streaming connector",id:"webhook-fields-passed-to-http-api-streaming-connector",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adobe-experience-platform-integration"},"Adobe Experience Platform integration"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://bluedot.io/"},"Bluedot")," is a location platform that provides an accurate and simple geofencing platform for apps. After integrating the Bluedot SDK and setting geofences, customer\u2019s can create personalised location-based experiences for their users."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://business.adobe.com/au/products/experience-platform/adobe-experience-platform.html"},"Adobe Experience Platform"),", the foundation of Experience Cloud products, is an open system that transforms all your data \u2014 Adobe and non-Adobe \u2014 into robust customer profiles that update in real-time and uses AI-driven insights to help you to deliver the right experiences across every channel."),(0,r.kt)("p",null,"With Adobe Experience Platform + Bluedot together you can send Push messages when the customer arrives at your restaurant, trigger specific email campaigns based on visits to a rival\u2019s store, or create an immersive game experience, engaging your customers as they move throughout real-world locations."),(0,r.kt)("h2",{id:"integration-architecture-diagram"},"Integration Architecture Diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(239).Z,width:"1024",height:"576"})),(0,r.kt)("h2",{id:"integration-overview"},"Integration Overview"),(0,r.kt)("p",null,"Before you begin the integration please ensure you have an active customer account with both Bluedot & Adobe Experience Cloud."),(0,r.kt)("p",null,"We will be using an ",(0,r.kt)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-platform/sources/ui-tutorials/create/streaming/http.html?lang=en"},(0,r.kt)("strong",{parentName:"a"},"HTTP API streaming connector"))," to pass Bluedot Entry/Exit events to Adobe."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Decide on the custom data you\u2019ll be passing from Bluedot Entry/Exit (can also be called Check-in and Check-out Event) Events to Adobe:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/documentation/Custom%20Event%20Metadata"},"Custom Event Metadata")," (max. 20)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/documentation/Canvas/What%20is%20Zone%20custom%20data"},"Custom Zone Data")," (max. 20)"))),(0,r.kt)("li",{parentName:"ol"},"Integrate the Bluedot SDK within your mobile app:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/documentation/Point%20SDK/Android/Quick%20Start"},"Android integration guide")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/documentation/Point%20SDK/iOS/Quick%20Start"},"iOS integration guide")))),(0,r.kt)("li",{parentName:"ol"},"Create a streaming connection using the UI to accept Bluedot events as per Adobe\u2019s documentation.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Create a new HTTP API account",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Account name:")," Bluedot geo-trigger webhook"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Real-time Entry/Exit notifications from your customers are received here."),(0,r.kt)("li",{parentName:"ul"},"Disable authentication"),(0,r.kt)("li",{parentName:"ul"},"Uncheck XDM compatible"))),(0,r.kt)("li",{parentName:"ol"},"Work with the Bluedot team on creating a JSON file to upload"),(0,r.kt)("li",{parentName:"ol"},"Create a new dataset",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Target dataset name:")," Bluedot Geo-trigger Webhook events"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Bluedot Geo-trigger Webhook events"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Schema:")," streaming data prep"))),(0,r.kt)("li",{parentName:"ol"},"Follow ",(0,r.kt)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/experience-platform/sources/ui-tutorials/create/streaming/http.html?lang=en#map-standard-fields"},"instructions")," to map the data fields"),(0,r.kt)("li",{parentName:"ol"},"Follow ",(0,r.kt)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/experience-platform/sources/ui-tutorials/create/streaming/http.html?lang=en#dataflow-detail"},"instructions")," to complete the Dataflow detail step"),(0,r.kt)("li",{parentName:"ol"},"In the Review step, after confirming the details are correct, select Finish."))),(0,r.kt)("li",{parentName:"ol"},"Set up a Webhook for the project in Bluedot Canvas. Use the streaming endpoint URL available on the sources detail page. You can leave the Token key and value fields blank.")),(0,r.kt)("p",null,"Once these steps are done, the integration is ready to go. Simply enter a geofence with a mobile device to trigger the Zone."),(0,r.kt)("h2",{id:"custom-event-metadata-in-bluedot-events"},"Custom Event Metadata in Bluedot events"),(0,r.kt)("p",null,"More information on best practices of setting and using custom event metadata can be found ",(0,r.kt)("a",{parentName:"p",href:"/documentation/Custom%20Event%20Metadata"},"here"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The custom event metadata is not persisted across SDK sessions. If the SDK is logged out the custom event metadata is cleared by the SDK. We suggest setting the custom data every time the SDK is authenticated in the app.")),(0,r.kt)("h2",{id:"webhook-fields-passed-to-http-api-streaming-connector"},"Webhook fields passed to HTTP API Streaming connector"),(0,r.kt)("p",null,"More information on the fields passed via entry/exit events Bluedot webhooks are ",(0,r.kt)("a",{parentName:"p",href:"/documentation/Webhooks/Overview"},"here"),"."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"If you have any questions about this guide or implementing Bluedot & Adobe Experience Platform together, reach out to our Engineering Support Team ",(0,r.kt)("a",{parentName:"p",href:"mailto:help@bluedot.io"},"help@bluedot.io"),"."))}m.isMDXComponent=!0},239:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Bluedot-Adobe-Experience-Platform-Architecture-1024x576-70f679910242a0fa48d5961c06bd867b.png"}}]);