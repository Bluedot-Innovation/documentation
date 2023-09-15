"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[139],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const r={},i="Features",l={unversionedId:"Point SDK/Cordova/Features",id:"Point SDK/Cordova/Features",title:"Features",description:"*   Custom Event Metadata",source:"@site/docs/Point SDK/Cordova/Features.md",sourceDirName:"Point SDK/Cordova",slug:"/Point SDK/Cordova/Features",permalink:"/Point SDK/Cordova/Features",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Tempo",permalink:"/Point SDK/Cordova/Tempo"},next:{title:"Events List",permalink:"/Point SDK/Cordova/Events List"}},s={},d=[{value:"Custom Event Metadata",id:"custom-event-metadata",level:2},{value:"Enable / Disable Zones",id:"enable--disable-zones",level:2},{value:"Android Features",id:"android-features",level:2},{value:"Foreground Notification",id:"foreground-notification",level:3},{value:"iOS Features",id:"ios-features",level:2},{value:"App Restart Notification",id:"app-restart-notification",level:3}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./Features#custom-event-metadata"},"Custom Event Metadata")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./Features#enable--disable-zones"},"Enable / Disable Zones")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./Features#android-features"},"Android features"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./Features#foreground-notification"},"Foreground Notification")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./Features#ios-features"},"iOS features"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./Features#app-restart-notification"},"App Restart Notification"))))),(0,a.kt)("h2",{id:"custom-event-metadata"},"Custom Event Metadata"),(0,a.kt)("p",null,"Custom event metadata is a feature that is available in the Bluedot Point SDK for our customers to set additional event-specific metadata to our location events. For further information refer to ",(0,a.kt)("a",{parentName:"p",href:"/Custom%20Event%20Metadata"},"Custom Event Metadata"),"."),(0,a.kt)("p",null,"It is recommended to set the Custom Event Metadata before starting Geo-triggering or Tempo."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Maximum 20 entries can be set in custom event metadata. If more than 20 entries are set, Bluedot SDK throws an error: Only 20 CustomEventMetaData fields are allowed.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'io.bluedot.cordova.plugin.setCustomEventMetaData({ \n    orderId: "order_123",\n\xa0 \xa0 storeId: "store_456",\n\xa0 \xa0 customerId: "789"\n})\n')),(0,a.kt)("h2",{id:"enable--disable-zones"},"Enable / Disable Zones"),(0,a.kt)("p",null,"An app may optionally disable (and later re-enable) Zones by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"enableZone")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"disableZone"),". For further information refer to Enable or disable Zones documentation (",(0,a.kt)("a",{parentName:"p",href:"/Point%20SDK/Android/Features/Enable%20or%20disable%20zones"},"Android")," | ",(0,a.kt)("a",{parentName:"p",href:"/Point%20SDK/iOS/Features/App%20restart%20notification"},"iOS"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const zoneId = "your_zone_id";\n\n// Enable Zone\nio.bluedot.cordova.plugin.enableZone(zoneId);\n\n// Disable Zone\nio.bluedot.cordova.plugin.disableZone(zoneId);\n')),(0,a.kt)("h2",{id:"android-features"},"Android Features"),(0,a.kt)("h3",{id:"foreground-notification"},"Foreground Notification"),(0,a.kt)("p",null,"Given the restrictions on accessing location data from the background, it is recommended that the Geo-triggering service be run as a foreground service, and the Tempo service must be run as a foreground service. For more information refer to ",(0,a.kt)("a",{parentName:"p",href:"/Point%20SDK/Android/Location%20Permission%20&%20Notifications%20Best%20Practices"},"Android \u2013 Location Permission & Notifications Best Practices"),"."),(0,a.kt)("p",null,"To run Geotriggering or Tempo with Foreground Notification, please refer to the sample code below:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Geo-triggering")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const androidNotificationParams = {\n\xa0 \xa0\xa0 \xa0 channelId: "Bluedot Cordova",\n \xa0 \xa0\xa0 \xa0 channelName: "Bluedot Cordova",\n \xa0 \xa0\xa0 \xa0 title: "Bluedot Foreground Service - Geo-triggering",\n \xa0 \xa0\xa0 \xa0 content: "This app is running a foreground service using location services",\n \xa0 \xa0\xa0 \xa0 notificationId: 123,\n \xa0 \xa0 };\n\nio.bluedot.cordova.plugin.androidStartGeoTriggering(\n    function () { console.log ("Start Geotriggering Successful") },\n    function (error) { console.log ("Start Geotriggering Failed with error: " + error) },\n    androidNotificationParams.channelId,\n    androidNotificationParams.channelName,\n    androidNotificationParams.title,\n    androidNotificationParams.content,\n    androidNotificationParams.notificationId\n);\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tempo")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const tempoBuilder = new io.bluedot.cordova.plugin.TempoBuilder();\nconst androidNotificationParams = {\n\xa0 \xa0\xa0 \xa0 channelId: \'Bluedot Cordova\',\n \xa0 \xa0\xa0 \xa0 channelName: \'Bluedot Cordova\',\n \xa0 \xa0\xa0 \xa0 title: \'Bluedot Foreground Service - Tempo\',\n \xa0 \xa0\xa0 \xa0 content: "This app is running a foreground service using location services"\n\xa0 \xa0 }\n\nio.bluedot.cordova.plugin.androidStartTempoTracking(\n    function () { console.log("Start Tempo Successful") },\n    function (error) { console.log("Start Tempo Failed: " + error) },\n    "YOUR_DESTINATION_ID",\n    androidNotificationParams.channelId,\n    androidNotificationParams.channelName,\n    androidNotificationParams.title,\n    androidNotificationParams.content,\n    androidNotificationParams.notificationId\n);\n')),(0,a.kt)("h2",{id:"ios-features"},"iOS Features"),(0,a.kt)("h3",{id:"app-restart-notification"},"App Restart Notification"),(0,a.kt)("p",null,"Bluedot Point SDK includes a method for apps to display app restart notification to a user after app termination. For further details refer to ",(0,a.kt)("a",{parentName:"p",href:"/Point%20SDK/iOS/Features/App%20restart%20notification"},"iOS Features \u2013 App restart"),"."),(0,a.kt)("p",null,"To start Geo-Triggering with App Restart notification, please refer to sample code below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'io.bluedot.cordova.plugin.iOSStartGeoTriggeringWithAppRestartNotification(\n    function () { console.log("Start Geotriggering Successful") },\n    function (error) { console.log("Start Geotriggering Failed with error: " + error) },\n    "Title",\n     "Button Text"\n);\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This feature is not available in Tempo.")))}p.isMDXComponent=!0}}]);