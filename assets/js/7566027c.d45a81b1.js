"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[1793],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=g(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,f=d["".concat(s,".").concat(p)]||d[p]||u[p]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var g={};for(var s in t)hasOwnProperty.call(t,s)&&(g[s]=t[s]);g.originalType=e,g[d]="string"==typeof e?e:i,a[1]=g;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},24123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>g,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={},a="Geo-triggering",g={unversionedId:"versions/Point SDK 15/Android/Geo-triggering",id:"versions/Point SDK 15/Android/Geo-triggering",title:"Geo-triggering",description:"Start Geo-triggering",source:"@site/docs/versions/Point SDK 15/Android/Geo-triggering.md",sourceDirName:"versions/Point SDK 15/Android",slug:"/versions/Point SDK 15/Android/Geo-triggering",permalink:"/versions/Point SDK 15/Android/Geo-triggering",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Start Geo-triggering",id:"start-geo-triggering",level:2},{value:"Start with Foreground Service Norification",id:"start-with-foreground-service-norification",level:3},{value:"Start without the Foreground Service Notification",id:"start-without-the-foreground-service-notification",level:3},{value:"Receiving Geo-trigger events",id:"receiving-geo-trigger-events",level:2},{value:"Stop Geo-triggering",id:"stop-geo-triggering",level:2}],l={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"geo-triggering"},"Geo-triggering"),(0,i.kt)("h2",{id:"start-geo-triggering"},"Start Geo-triggering"),(0,i.kt)("p",null,"Geo-triggering allows the automatic detection of location context change events (such as entering or exiting a geofence, or crossing a Geoline\u2122). For this capability, the SDK needs to be initialized and the app must have location permission. For many use cases, a foreground service notification is also recommended."),(0,i.kt)("p",null,"To start Geo-triggering, you should create and start the ",(0,i.kt)("a",{parentName:"p",href:"https://android-docs.bluedot.io/-bluedot-s-d-k/au.com.bluedot.point.net.engine/-geo-triggering-service/index.html"},"GeoTriggeringService"),"."),(0,i.kt)("h3",{id:"start-with-foreground-service-norification"},"Start with Foreground Service Norification"),(0,i.kt)("p",null,"To achieve optimal performance of the SDK, we recommend initiating the Geo-triggering service with the Foreground Service Notification."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"if (ServiceManager.getInstance(context).isBluedotServiceInitialized()) {\n    // The Bluedot SDK is initialized, you can start Geo-triggering.\n\n    GeoTriggeringService.builder()\n            .notification(notificationReference) // Notification to use to run Geo-triggering as a foreground service.\n            .notificationId(myNotificationId) // Optional id to use for foreground service notification. Use if your app will \n                                              // run additional foreground services, or you wish to update the notification.\n            .start(myApplicationContext, // This context should be the Application context.\n                   error -> {\n                       if (error != null) {\n                           // Something went wrong when starting Geo-triggering. Handle error here.\n                           return;\n                       }\n                       // Geo-triggering has started successfully. Handle success here.\n                   });\n} else {\n    // The Bluedot SDK is not initialized. Initialize before starting Geo-triggering.\n}\n")),(0,i.kt)("h3",{id:"start-without-the-foreground-service-notification"},"Start without the Foreground Service Notification"),(0,i.kt)("p",null,"In scenarios where the Foreground Service Notification is not required, you can start the Geo-triggering service as demonstrated below. For guidance on when to use this approach, please consult your Customer Experience (CX) representative."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"if (ServiceManager.getInstance(context).isBluedotServiceInitialized()) {\n    // The Bluedot SDK is initialized, you can start Geo-triggering.\n\n    GeoTriggeringService.builder()\n        .start(myApplicationContext, // This context should be the Application context.\n            error -> {\n                if (error != null) {\n                    // Something went wrong when starting Geo-triggering. Handle error here.\n                    return;\n                }\n                // Geo-triggering has started successfully. Handle success here.\n            });\n} else {\n    // The Bluedot SDK is not initialized. Initialize before starting Geo-triggering.\n}\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To learn more about the Foreground Service Notification check the ",(0,i.kt)("a",{parentName:"p",href:"/versions/Point%20SDK%2015/Android/Location%20Permission%20&%20Notifications%20Best%20Practices#foreground-service-and-persistent-notification"},"Foreground service and persistent notification documentation"))),(0,i.kt)("h2",{id:"receiving-geo-trigger-events"},"Receiving Geo-trigger events"),(0,i.kt)("p",null,"Create a receiver in the Manifest to receive geo-trigger events (such as entering a location):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="AndroidManifest"',title:'"AndroidManifest"'},'<application android:label="@string/app_name" >\n \xa0 \xa0 <receiver\n \xa0 \xa0\xa0 \xa0 android:name="my.package.ExampleGeoTriggerReceiver"\n \xa0 \xa0\xa0 \xa0 android:enabled="true"\n \xa0 \xa0\xa0 \xa0 android:exported="false"\n \xa0 \xa0 >\n \xa0 \xa0\xa0 \xa0 <intent-filter>\n \xa0 \xa0\xa0 \xa0\xa0 \xa0 <action android:name="io.bluedot.point.GEOTRIGGER" />\n \xa0 \xa0\xa0 \xa0 </intent-filter>\n \xa0 \xa0 </receiver>\n </application>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class ExampleGeoTriggerReceiver : GeoTriggeringEventReceiver() {\n\xa0 \xa0 override fun onZoneInfoUpdate(zones: List<ZoneInfo>, context: Context) {\n \xa0 \xa0\xa0 \xa0 // Notification that the local cache of zones has been updated.\n \xa0 \xa0 }\n \n\xa0 \xa0 override fun onZoneEntryEvent(entryEvent: ZoneEntryEvent, context: Context) {\n \xa0 \xa0\xa0 \xa0 // Notification that a zone has been entered/Geoline\u2122 crossed.\n \xa0 \xa0 }\n \n \xa0 \xa0 override fun onZoneExitEvent(exitEvent: ZoneExitEvent, context: Context) {\n \xa0 \xa0\xa0 \xa0 // Notification that an exit detection-enabled zone has been exited.\n \xa0 \xa0 }\xa0 \xa0\n }\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," ",(0,i.kt)("em",{parentName:"p"},"Exit")," events will only trigger when the device has moved a substantial distance away from the geofence. Detection of ",(0,i.kt)("em",{parentName:"p"},"Exit")," events may not be as immediate as ",(0,i.kt)("em",{parentName:"p"},"Entry")," events.")),(0,i.kt)("h2",{id:"stop-geo-triggering"},"Stop Geo-triggering"),(0,i.kt)("p",null,"If you only need geo-triggering for a limited period, once that period is over, you can stop the geo-trigger service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"GeoTriggeringService.stop(myContext, error -> { \n    if (error != null) {\n        // Something went wrong stopping Geo-triggering. Handle error here.\n        return;\n    }\n    \n    // Geo-triggering stopped successfully. Handle success here.\n});\n")),(0,i.kt)("p",null,"Geo-triggering start and stop status are provided through callbacks on the\xa0 ",(0,i.kt)("a",{parentName:"p",href:"https://android-docs.bluedot.io/-bluedot-s-d-k/au.com.bluedot.point.net.engine/-geo-triggering-status-listener/index.html"},(0,i.kt)("inlineCode",{parentName:"a"},"geoTriggeringStatusListener")),", implemented as lambda functions in the above examples."))}u.isMDXComponent=!0}}]);