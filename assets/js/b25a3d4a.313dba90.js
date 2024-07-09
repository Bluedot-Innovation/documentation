"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[3330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),c=o,v=p["".concat(l,".").concat(c)]||p[c]||m[c]||i;return n?a.createElement(v,r(r({ref:t},u),{},{components:n})):a.createElement(v,r({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const i={},r="Event Simulator Guide",s={unversionedId:"Canvas/Event simulator guide",id:"Canvas/Event simulator guide",title:"Event Simulator Guide",description:"Canvas Event Simulator is a tool designed to help test your Bluedot setup. It simulates events which would usually be sent by the mobile SDK (Geo\u2013trigger and Tempo events) as well as web events sent via the Events API. The simulator can help during project set up to confirm that your systems (such as webhook receivers, Tempo time ranges or Hello Screens set up) are correctly configured.",source:"@site/docs/Canvas/Event simulator guide.md",sourceDirName:"Canvas",slug:"/Canvas/Event simulator guide",permalink:"/Canvas/Event simulator guide",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Setting Up Multiple Environments Guide",permalink:"/Canvas/Setting up multiple environments"},next:{title:"How to authenticate with Config API",permalink:"/Canvas/How to authenticate with Config API"}},l={},d=[{value:"<strong>Custom Meta Data in simulated events</strong>",id:"custom-meta-data-in-simulated-events",level:2},{value:"<strong>Simulate Geo-trigger Events</strong>",id:"simulate-geo-trigger-events",level:2},{value:"<strong>Simulate Tempo Events</strong>",id:"simulate-tempo-events",level:2},{value:"<strong>Simulate Wave Events</strong>",id:"simulate-wave-events",level:2},{value:"<strong>Simulate Registration Events</strong>",id:"simulate-registration-events",level:2}],u={toc:d},p="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"event-simulator-guide"},"Event Simulator Guide"),(0,o.kt)("p",null,"Canvas Event Simulator is a tool designed to help test your Bluedot setup. It simulates events which would usually be sent by the mobile SDK (Geo\u2013trigger and Tempo events) as well as web events sent via the Events API. The simulator can help during project set up to confirm that your systems (such as webhook receivers, Tempo time ranges or Hello Screens set up) are correctly configured."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(52889).Z,width:"1024",height:"425"})),(0,o.kt)("h2",{id:"custom-meta-data-in-simulated-events"},(0,o.kt)("strong",{parentName:"h2"},"Custom Meta Data in simulated events")),(0,o.kt)("p",null,"For each of the event types, you may optionally add any custom fields to be attached to the event. This represents the ability to add custom data in SDK and Web events via the ",(0,o.kt)("inlineCode",{parentName:"p"},"customEventMetaData")," object. To add custom data fields first click the ",(0,o.kt)("em",{parentName:"p"},"Add Custom Fields")," button to open the interface."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(42548).Z,width:"814",height:"498"})),(0,o.kt)("p",null,"When adding custom fields you can select the type of custom field from the ",(0,o.kt)("em",{parentName:"p"},"Type")," dropdown. \xa0For these fields the keys are pre-defined, and you only need to input the value. If you want to define both the key and value select the \u201cCustom Field\u201d option."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Some custom data fields have a special meaning, such as those tied to Hello Screens or our SFMC and mParticle integrations. For more information check our ",(0,o.kt)("a",{parentName:"p",href:"/Hello%20Screens/Overview"},"Hello Screens documentation")," and\xa0",(0,o.kt)("a",{parentName:"p",href:"/integrations/Overview"},"Integrations documentation"))),(0,o.kt)("h2",{id:"simulate-geo-trigger-events"},(0,o.kt)("strong",{parentName:"h2"},"Simulate Geo-trigger Events")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(82109).Z,width:"932",height:"662"})),(0,o.kt)("p",null,"The Geo-trigger Simulator simulates the core ",(0,o.kt)("em",{parentName:"p"},"Entry")," and ",(0,o.kt)("em",{parentName:"p"},"Exit")," events generated by the mobile SDK. These are the events that are sent when a mobile user enters or exits a Zone. To send a Geo-trigger event first select the target Project, Zone and Fence. If you wish to send an ",(0,o.kt)("em",{parentName:"p"},"Entry")," and ",(0,o.kt)("em",{parentName:"p"},"Exit")," event you will also be asked to specify a dwell time. In this case, two events will be sent, the first an ",(0,o.kt)("em",{parentName:"p"},"Entry")," event, and after that, an ",(0,o.kt)("em",{parentName:"p"},"Exit")," event with the event times separated by the specified dwell time."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(21928).Z,width:"1024",height:"424"})),(0,o.kt)("p",null,"Geo-trigger events are usually visible in the Analytics pages of Canvas, as well as the Activity Log pages for both individual zones and individual ",(0,o.kt)("inlineCode",{parentName:"p"},"installRef")," (users). Simulated events are excluded by default from Analytics events to ensure they are not confused with production data. To view simulated events in the Activity Log pages via Canvas just select the Show simulated events checkbox on the Zone or Install Ref Activity Log pages. Simulated events are easy to identify by their fixed ",(0,o.kt)("inlineCode",{parentName:"p"},"installRef")," value: ",(0,o.kt)("inlineCode",{parentName:"p"},'"ffffffff-eeee-4ddd-8ccc-bbbbbbbbbbbb"'),"."),(0,o.kt)("h2",{id:"simulate-tempo-events"},(0,o.kt)("strong",{parentName:"h2"},"Simulate Tempo Events")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(97556).Z,width:"1024",height:"784"})),(0,o.kt)("p",null,"The Tempo Event simulate allows you to simulate Tempo events usually sent via the mobile SDK. As Tempo is an added value service, your account must have Tempo enabled for these events to be successfully received. To start a Tempo journey select a Project and valid destination Zone (Tempo destinations must have a ",(0,o.kt)("inlineCode",{parentName:"p"},"destinationId"),"). The first event of a Tempo journey must be a Start Tempo event."),(0,o.kt)("p",null,"After selecting a Zone, a map will appear with your destination Zone in the center. You can then select a location on the map to send your first Tempo event. If you have Hello Screens enabled (and have added the required Hello Screens custom data), you will then be able to see the resulting event within Hello Screens with the estimated time of arrival based on that location."),(0,o.kt)("p",null,"To continue sending events for the same journey you can select new locations on the map and send more Update events. If you want to send a ",(0,o.kt)("inlineCode",{parentName:"p"},"tempoStop")," update, indicating the journey has been cancelled, select the Stop Tempo event type. After sending a Stop Tempo event you are free to create a new Tempo journey."),(0,o.kt)("h2",{id:"simulate-wave-events"},(0,o.kt)("strong",{parentName:"h2"},"Simulate Wave Events")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5877).Z,width:"988",height:"721"})),(0,o.kt)("p",null,"Wave events are an alternate way to send updates without the use of the mobile SDK. They can be useful for reaching customers that do not wish to provide location permissions or download a mobile application. For Wave the only required fields are Project and Zone. Wave event Zones must have a ",(0,o.kt)("inlineCode",{parentName:"p"},"destinationId"),", as this is used to identify the target when sending a Wave event."),(0,o.kt)("p",null,"Wave events can include an ",(0,o.kt)("inlineCode",{parentName:"p"},"eventType"),", which allows them to be interpreted in specific ways in Hello Screens. They can also include a User Token, which is a value that must be included for updates to orders which have been registered via Registration events."),(0,o.kt)("h2",{id:"simulate-registration-events"},(0,o.kt)("strong",{parentName:"h2"},"Simulate Registration Events")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9659).Z,width:"881",height:"855"})),(0,o.kt)("p",null,"Registration events are another form of event that is received via the Events API. These events allow ",(0,o.kt)("inlineCode",{parentName:"p"},"customEventMetaData")," to be attached to an order at the time the order is placed, but before the customer indicated they have started journeying to the location via a Wave update."),(0,o.kt)("p",null,"Registration events return a ",(0,o.kt)("inlineCode",{parentName:"p"},"userToken")," that is used to validate subsequent updates to that ",(0,o.kt)("inlineCode",{parentName:"p"},"orderId")," are from the correct source, and also provide a mechanism for retrieving Hello API data for a specific order. Currently, their primary purpose is to support Now Ready Screens, which provides a customisable web interface for users to indicate when they are on the way or arrived at a location."),(0,o.kt)("p",null,"As Hello API orders are identified by ",(0,o.kt)("inlineCode",{parentName:"p"},"orderId"),", if a registration event is sent with the same ",(0,o.kt)("inlineCode",{parentName:"p"},"orderId")," as an existing order, the previous order will be overwritten by the most recent order. This is designed to support systems which may reuse ",(0,o.kt)("inlineCode",{parentName:"p"},"orderId")," after a certain period. The simulator keeps track of these updates, letting you know when a more recent event has invalidated a previous ",(0,o.kt)("inlineCode",{parentName:"p"},"userToken")," via the ",(0,o.kt)("em",{parentName:"p"},"Token Valid")," column."))}m.isMDXComponent=!0},21928:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event_simulator_activity_log-50d88ad69cd61be2030db011297a87f7.png"},42548:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event_simulator_custom_data-22bf6d948e21237014097ef951902baa.png"},82109:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event_simulator_geotrigger-0e1129ce64cae5409ae9da3150f51e40.png"},52889:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event_simulator_main_dashboard-7dc67342c90e898db6a45e9b05f30890.png"},9659:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event_simulator_registration-10d1f3cbba5610faafccc815730a4e2c.png"},97556:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event_simulator_tempo-496e94867319ab79dd0d55822b210fbc.png"},5877:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event_simulator_wave-e848938710d1adb31da3abf445f87f8b.png"}}]);