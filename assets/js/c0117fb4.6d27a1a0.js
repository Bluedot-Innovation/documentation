"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[2207],{3905:(e,n,o)=>{o.d(n,{Zo:()=>p,kt:()=>v});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return o?t.createElement(v,a(a({ref:n},p),{},{components:o})):t.createElement(v,a({ref:n},p))}));function v(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},77749:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=o(87462),r=(o(67294),o(3905));const i={},a="Tempo",s={unversionedId:"versions/Point SDK 15/Cordova/Tempo",id:"versions/Point SDK 15/Cordova/Tempo",title:"Tempo",description:"Tempo allows active tracking of a user\u2019s location, as well as live ETA estimation.",source:"@site/docs/versions/Point SDK 15/Cordova/Tempo.md",sourceDirName:"versions/Point SDK 15/Cordova",slug:"/versions/Point SDK 15/Cordova/Tempo",permalink:"/versions/Point SDK 15/Cordova/Tempo",draft:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Start Tempo",id:"start-tempo",level:2},{value:"Receiving Tempo events",id:"receiving-tempo-events",level:2},{value:"Stop Tempo",id:"stop-tempo",level:2},{value:"Tempo Status",id:"tempo-status",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...o}=e;return(0,r.kt)(u,(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tempo"},"Tempo"),(0,r.kt)("p",null,"Tempo allows active tracking of a user\u2019s location, as well as live ETA estimation."),(0,r.kt)("h2",{id:"start-tempo"},"Start Tempo"),(0,r.kt)("p",null,"For this capability, the SDK needs to be initialized and the app must have location permission. You also need Tempo to be enabled for your Bluedot Account and can see the Tempo section in the Projects List page of your Canvas account. If that is not visible and you want to use this capability, please contact your Bluedot CX representative."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For Android, a ",(0,r.kt)("a",{parentName:"p",href:"/versions/Point%20SDK%2015/Android/Location%20Permission%20&%20Notifications%20Best%20Practices"},"foreground service notification")," is also required.")),(0,r.kt)("p",null,"Tempo also requires Destination IDs to be defined, which you can learn about ",(0,r.kt)("a",{parentName:"p",href:"/Tempo/Create%20your%20destinations"},"here"),"."),(0,r.kt)("p",null,"To start Tempo, refer to the sample code\xa0below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function doStartTempo() {\n\xa0 \xa0 // The SDK needs be initialized and the app must have location permissions.\n    if (device.platform === "iOS") {\n        io.bluedot.cordova.plugin.iOSStartTempoTracking(\n            function () { console.log("Start Tempo Successful") },\n            function (error) { console.log("Start Tempo Failed: " + error) },\n            "YOUR_DESTINATION_ID");\n    } else if (device.platform === "Android") {\n        const androidNotificationParams = {\n            channelId: \'Bluedot Cordova\',\n            channelName: \'Bluedot Cordova\',\n            title: \'Bluedot Foreground Service - Tempo\',\n            content: "This app is running a foreground service using location services",\n            notificationId: -1\n        }\n\n        io.bluedot.cordova.plugin.androidStartTempoTracking(\n            function () { console.log("Start Tempo Successful") },\n            function (error) { console.log("Start Tempo Failed: " + error) },\n            "YOUR_DESTINATION_ID",\n            androidNotificationParams.channelId,\n            androidNotificationParams.channelName,\n            androidNotificationParams.title,\n            androidNotificationParams.content,\n            androidNotificationParams.notificationId\n        );\n    }\n}\n')),(0,r.kt)("h2",{id:"receiving-tempo-events"},"Receiving Tempo events"),(0,r.kt)("p",null,"The Tempo service does not issue events under normal operation. Instead, it only issues events if there is an error with operation. Tracking events are instead delivered via webhook, as configured in the Canvas UI."),(0,r.kt)("p",null,"Subscribe to receive the Tempo events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function subscribeToTempoEvents() {\n    // Register callbacks functions for receiving Tempo events\n    io.bluedot.cordova.plugin.tempoStoppedWithErrorCallback( tempoTrackingStoppedWithErrorCallback );\n    io.bluedot.cordova.plugin.tempoTrackingExpiredCallback( tempoTrackingExpiredCallback );\n\n    // Then start the Tempo service.\n}\n\nfunction tempoTrackingStoppedWithErrorCallback(error) {\n   console.log("Tempo stopped with error: " + error);\n}\n\nfunction tempoTrackingExpiredCallback() {\n   console.log("Tempo Tracking Expired");\n}\n')),(0,r.kt)("h2",{id:"stop-tempo"},"Stop Tempo"),(0,r.kt)("p",null,"Once the Tempo service is no longer needed, you can stop the service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'io.bluedot.cordova.plugin.stopTempoTracking(\n\xa0 \xa0 function () { console.log("Stop Tempo Successful") },\n\xa0 \xa0 function (error) { console.error("Stop Tempo Failed: " + error) }\n)\n')),(0,r.kt)("h2",{id:"tempo-status"},"Tempo Status"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"isTempoRunning")," method to check the status of the Tempo service. It will return a ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'io.bluedot.cordova.plugin.isTempoRunning(\n\xa0 \xa0 function (isRunning) { console.log("Is Tempo Running: " + isRunning) }\n);\n')))}d.isMDXComponent=!0}}]);