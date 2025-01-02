"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[3917],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67562:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(87462),o=(t(67294),t(3905));const i={pagination_next:null},r="Migration Guide to Point SDK V16 for Android",l={unversionedId:"Point SDK/Android/Migration Guides/Migration guide to SDK 16 for Android",id:"Point SDK/Android/Migration Guides/Migration guide to SDK 16 for Android",title:"Migration Guide to Point SDK V16 for Android",description:"If you have implemented the previous versions of the Android Point SDKs, this guide will help you understand the steps required to migrate to version 16.",source:"@site/docs/Point SDK/Android/Migration Guides/Migration guide to SDK 16 for Android.md",sourceDirName:"Point SDK/Android/Migration Guides",slug:"/Point SDK/Android/Migration Guides/Migration guide to SDK 16 for Android",permalink:"/Point SDK/Android/Migration Guides/Migration guide to SDK 16 for Android",draft:!1,tags:[],version:"current",frontMatter:{pagination_next:null},sidebar:"defaultSidebar",previous:{title:"Gradle 8",permalink:"/Point SDK/Android/Gradle 8"}},s={},d=[{value:"Breaking Changes",id:"breaking-changes",level:3},{value:"Update your <code>CompileSdk</code> version to 34, Gradle to version 8.2 and Java to version 17.",id:"update-your-compilesdk-version-to-34-gradle-to-version-82-and-java-to-version-17",level:4},{value:"Update your &quot;Entry&quot; and &quot;Exit&quot; callbacks in the Geo-triggering service.",id:"update-your-entry-and-exit-callbacks-in-the-geo-triggering-service",level:4},{value:"<strong>New &quot;Entry&quot; callback</strong>",id:"new-entry-callback",level:4},{value:"<strong>New &quot;Exit&quot; callback</strong>",id:"new-exit-callback",level:4},{value:"New <code>onZoneInfoUpdate</code> callback",id:"new-onzoneinfoupdate-callback",level:4},{value:"<strong>Update the App&#39;s Location Permissions in the Manifest</strong>",id:"update-the-apps-location-permissions-in-the-manifest",level:4},{value:"<strong>Add GeoTriggerEvent class in Proguard</strong>",id:"add-geotriggerevent-class-in-proguard",level:4},{value:"<strong>Upgrade to <code>reset</code> method now includes clearing of Custom Event Meta Data</strong>",id:"upgrade-to-reset-method-now-includes-clearing-of-custom-event-meta-data",level:4},{value:"Removal of deprecated classes and functions",id:"removal-of-deprecated-classes-and-functions",level:4},{value:"New APIs",id:"new-apis",level:3},{value:"<strong>New <code>onTempoTrackingUpdate</code> callback available in the Tempo service.</strong>",id:"new-ontempotrackingupdate-callback-available-in-the-tempo-service",level:4},{value:"<strong>Destination (Store) Details Now Accessible in <code>ZoneInfo</code></strong>",id:"destination-store-details-now-accessible-in-zoneinfo",level:4},{value:"***New <code>getCustomEventMetaData()</code> method",id:"new-getcustomeventmetadata-method",level:4}],c={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migration-guide-to-point-sdk-v16-for-android"},"Migration Guide to Point SDK V16 for Android"),(0,o.kt)("p",null,"If you have implemented the previous versions of the Android Point SDKs, this guide will help you understand the steps required to migrate to version 16."),(0,o.kt)("h3",{id:"breaking-changes"},"Breaking Changes"),(0,o.kt)("h4",{id:"update-your-compilesdk-version-to-34-gradle-to-version-82-and-java-to-version-17"},"Update your ",(0,o.kt)("inlineCode",{parentName:"h4"},"CompileSdk")," version to 34, Gradle to version 8.2 and Java to version 17."),(0,o.kt)("p",null,"We regularly update the minimum supported version of our SDKs to focus on providing the best developer experience.\nExisting 15.X versions of the Android Point SDK will continue to be compatible with devices running on ",(0,o.kt)("inlineCode",{parentName:"p"},"CompileSDK")," version 33, utilize Gradle version\n7.4 and Java version as 1.8"),(0,o.kt)("h4",{id:"update-your-entry-and-exit-callbacks-in-the-geo-triggering-service"},'Update your "Entry" and "Exit" callbacks in the Geo-triggering service.'),(0,o.kt)("p",null,'The "',(0,o.kt)("em",{parentName:"p"},'Entry"'),'\xa0and "',(0,o.kt)("em",{parentName:"p"},'Exit"'),"\xa0callbacks have a new payload structure with additional information. The new payload includes information such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Location and Notification permissions users have granted."),(0,o.kt)("li",{parentName:"ul"},"A list of geofences the device has crossed to complete a travel path condition."),(0,o.kt)("li",{parentName:"ul"},"User's device battery levels.")),(0,o.kt)("h4",{id:"new-entry-callback"},(0,o.kt)("strong",{parentName:"h4"},'New "Entry" callback')),(0,o.kt)("p",null,"The ","[ZoneEntryEvent]"," class has been renamed to ",(0,o.kt)("a",{parentName:"p",href:"https://android-docs.bluedot.io/-bluedot%20-s-d-k%20-docs/au.com.bluedot.point.net.engine.event/-geo-trigger-event/index.html"},"GeoTriggerEvent"),". The callback functionality remains the same, apart from the new payload structure, which has new data available."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'    override fun onZoneEntryEvent(event: GeoTriggerEvent, context: Context) {\n        Log.i(TAG_TEST_APP, "onZoneEntryEvent for ${event.toJson()}")\n        ....\n    }\n')),(0,o.kt)("p",null,"Here's an example of how the new Entry callback payload looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "notificationType": "entry",\n    "appInfo": {\n        "appBuildVersion": "16.0.0",\n        "customerApplicationId": "BDTestApp",\n        "minSdkVersion": "21",\n        "compileSdkVersion": "34",\n        "targetSdkVersion": "31",\n        "sdkVersion": "16.0.0",\n        "customEventMetaData": {\n            "CustomerName": "Test Name",\n            "OrderId": "Test OrderId",\n        }\n      },\n    "triggerEvents": [\n        {\n            "eventTime": "2024-04-16T04:24:20.843Z",\n            "localEventTime": "2024-04-16T14:29:42.955",\n            "fenceName": "Home Fence",\n            "applicationState": {\n                "viewState": "foreground",\n                "foregroundServiceEnabled": "false",\n                "batteryLevel": 86,\n                "lastRuleUpdate": "2024-04-16T02:24:20.843Z",\n                "notificationPermission": "authorized",\n                "locationPermission": "always"\n            },\n            "fenceId": "444444-2423-4092-9db6-44444444",\n            "eventType": "fenceEntered",\n            "crossedFences": [ \n                {   \n                    "fenceId": "03d7bd1d-5555-5555-846c-6755555555", \n                    "fenceName": "Fence 0", \n                    "crossTime": "2024-04-16T04:24:20.843Z", \n                    "location": {\n                        "longitude" : 145.3023396,\n                        "latitude" : -38.018478, \n                        "horizontalAccuracy": 11.591,\n                        "time": "2024-04-16T04:24:20.843Z",\n                        "altitude": 32.67277495576316,\n                        "verticalAccuracy": 8.2064, \n                        "bearing": -1.0,\n                        "speed": -1.0\n                    }\n                }],\n            "locations": [\n                {\n                    "verticalAccuracy": 3,\n                    "speed": 0,\n                    "longitude": 144.84852131469626,\n                    "horizontalAccuracy": 10,\n                    "bearing": -1,\n                    "time": "2024-04-16T04:24:20.843Z",\n                    "latitude": -37.821534527500923,\n                    "altitude": 25.084405422210693\n                }\n            ]\n        }\n    ],\n    "installRef": "e80a1289-fcb5-4970-9070-51d2b183f58e",\n    "projectId": "YOUR-PROJECT-ID",\n    "triggerChainId" : "368b70e5-017a-45dc-8a95-68ada0e6c5be",\n    "zoneInfo": {\n        "id": "368b70e5-017a-45dc-8a95-68ada0e6c5be",\n        "name": "Test Zone",\n        "customData": {\n            "ZoneCustomData1": "test value for the ZoneCustomData"\n        }\n    },\n    "deviceInfo": {\n        "deviceType": "Google Pixel 3 XL",\n        "os": "Android",\n        "osVersion": "11"\n    }    \n}\n')),(0,o.kt)("h4",{id:"new-exit-callback"},(0,o.kt)("strong",{parentName:"h4"},'New "Exit" callback')),(0,o.kt)("p",null,"The ","[ZoneExitEvent]"," class has been renamed to ",(0,o.kt)("a",{parentName:"p",href:"https://android-docs.bluedot.io/-bluedot%20-s-d-k%20-docs/au.com.bluedot.point.net.engine.event/-geo-trigger-event/index.html"},"GeoTriggerEvent")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},' override fun onZoneExitEvent(event: GeoTriggerEvent, context: Context) {\n    Log.i(TAG_TEST_APP, "onZoneExitEvent for ${event.toJson()}")\n    ...\n }\n')),(0,o.kt)("p",null,"Here's an example of how the new Exit callback payload looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "notificationType": "exit",\n    "appInfo": {\n        "appBuildVersion": "2.0.0.203",\n        "customerApplicationId": "io.bluedot.hostapp",\n        "minSdkVersion": "21",\n        "compileSdkVersion": "34",\n        "targetSdkVersion": "34",\n        "sdkVersion": "16.0.0",\n        "customEventMetaData": {\n            "CustomerName": "Test Name",\n            "OrderId": "Test OrderId",\n        }\n      },\n    "triggerEvents": [\n        {  \n            "eventType": "fenceEntered",\n            ...\n        },\n        {\n            "eventType": "fenceExited"    \n            "fenceId": "03d7bd1d-d947-4c4f-846c-6777777777b", \n            "fenceName": "Fence 0", \n            "distance": 169.16157234771617, \n            "distanceRequired": 65.04399871826172, \n            "dwellTime": 1018101, \n            "locations": [\n                {\n                    "verticalAccuracy": 3,\n                    "speed": 0,\n                    "longitude": 144.84852131469626,\n                    "horizontalAccuracy": 10,\n                    "bearing": -1,\n                    "time": "2024-04-16T04:24:20.843Z",\n                    "latitude": -37.821534527500923,\n                    "altitude": 25.084405422210693\n                }\n            ],\n            "applicationState": {\n                  "locationPermission": "ALWAYS",\n                  "notificationPermission": "AUTHORIZED", \n                  "batteryLevel": 79, \n                  "lastRuleUpdate": "2024-04-16T03:48:27.737Z", \n                  "viewState": "BACKGROUND", \n                  "foregroundServiceEnabled": false\n                  }, \n            "eventTime": "2024-04-16T04:41:36.221Z", \n            "localEventTime": "2024-04-16T14:41:36.221"\n            \n        }\n    ],\n    "installRef": "e80a1289-fcb5-4970-9070-51d2b183f58e",\n    "projectId": "YOUR-PROJECT-ID",\n    "triggerChainId" : "368b70e5-017a-45dc-8a95-68ada0e6c5be",\n    "zoneInfo": {\n        "id": "368b70e5-017a-45dc-8a95-68ada0e6c5be",\n        "name": "Test Zone",\n        "customData": {\n            "ZoneCustomData1": "test value for the ZoneCustomData"\n        }\n    },\n    "deviceInfo": {\n        "deviceType": "Google Pixel 3 XL",\n        "os": "Android",\n        "osVersion": "11"\n    }    \n}\n')),(0,o.kt)("h4",{id:"new-onzoneinfoupdate-callback"},"New ",(0,o.kt)("inlineCode",{parentName:"h4"},"onZoneInfoUpdate")," callback"),(0,o.kt)("p",null,"The previous callback ",(0,o.kt)("inlineCode",{parentName:"p"},"onZoneInfoUpdate(zones: List<ZoneInfo>, context: Context)")," has been updated to ",(0,o.kt)("inlineCode",{parentName:"p"},"onZoneInfoUpdate(context: Context)"),". The updated callback no longer returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"zones")," data directly. Instead, you should access the ",(0,o.kt)("inlineCode",{parentName:"p"},"zones")," data from the ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceManager.getInstance(context).getZonesAndFences()")," property. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},' override fun onZoneInfoUpdate(context: Context) {\n    Log.i(TAG_TEST_APP, "onZoneInfoUpdate")\n    Log.i(TAG_TEST_APP, "Zones and Fences ${ServiceManager.getInstance(context).zonesAndFences}")\n  }\n')),(0,o.kt)("h4",{id:"update-the-apps-location-permissions-in-the-manifest"},(0,o.kt)("strong",{parentName:"h4"},"Update the App's Location Permissions in the Manifest")),(0,o.kt)("p",null,"To give you more control over your app's permissions, we have updated our SDK so that location permissions for foreground or background location access are no longer automatically included. Now, you will need to explicitly add location permissions based on your use case to access location as a foreground Service or Always in background to your app\u2019s manifest. This change allows for greater flexibility and customization based on your app\u2019s specific needs."),(0,o.kt)("p",null,"Below is an example of how you can add the necessary location permissions to your app's manifest:"),(0,o.kt)("p",null,"If your use case requires Bluedot Geo-Trigger to run as a foreground service then you need to add below 2 permissions in your App's Manifest:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'  <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />\n  <uses-permission android:name="android.permission.FOREGROUND_SERVICE_LOCATION" />\n\n')),(0,o.kt)("p",null,"If your use case requires Bluedot Geo-trigger to run without a foreground service but always inthe background then add permission in your App's Manifest:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />\n')),(0,o.kt)("h4",{id:"add-geotriggerevent-class-in-proguard"},(0,o.kt)("strong",{parentName:"h4"},"Add GeoTriggerEvent class in Proguard")),(0,o.kt)("p",null,"Please add below rule to your ProGuard rules to preserve GeoTriggerEvent parameter names after obfuscation. This is crucial as GeoTriggerEvent is the new payload returned in the Entry and Exit callbacks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pro"},"-keep class au.com.bluedot.point.net.engine.event.GeoTriggerEvent {*;}\n")),(0,o.kt)("h4",{id:"upgrade-to-reset-method-now-includes-clearing-of-custom-event-meta-data"},(0,o.kt)("strong",{parentName:"h4"},"Upgrade to ",(0,o.kt)("inlineCode",{parentName:"strong"},"reset")," method now includes clearing of Custom Event Meta Data")),(0,o.kt)("p",null,"We've updated the reset method to enhance its functionality. Previously, invoking reset did not clear the Custom Event Meta Data. With this release, the reset method now also clears any Custom Event Meta Data, ensuring that all settings and cached data are fully restored to their default states."),(0,o.kt)("h4",{id:"removal-of-deprecated-classes-and-functions"},"Removal of deprecated classes and functions"),(0,o.kt)("p",null,"The following classes and functions have been removed from the SDK as these were deprecated in version 15.3.0, released in March 2021."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Url Action and Message Action have been removed from our SDK.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setCustomMessageAction")))),(0,o.kt)("li",{parentName:"ul"},"Beacons removed."),(0,o.kt)("li",{parentName:"ul"},"List of zones removed from ",(0,o.kt)("inlineCode",{parentName:"li"},"onZoneInfoUpdate")),(0,o.kt)("li",{parentName:"ul"},"Deprecations removed:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sendAuthenticationRequest")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"addBlueDotPointServiceStatusListener")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"removeBlueDotPointServiceStatusListener")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subscribeForApplicationNotification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"unsubscribeForApplicationNotification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"startTempoTracking")," (variant)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"stopTempoTracking"),"\t(variant)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"stopPointService")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isBlueDotPointServiceRunning")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isBlueDotPointServiceConfiguredToRestart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"registerService")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"notifyPushUpdate")," (message action)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setForegroundServiceNotification"))))),(0,o.kt)("h3",{id:"new-apis"},"New APIs"),(0,o.kt)("h4",{id:"new-ontempotrackingupdate-callback-available-in-the-tempo-service"},(0,o.kt)("strong",{parentName:"h4"},"New ",(0,o.kt)("inlineCode",{parentName:"strong"},"onTempoTrackingUpdate")," callback available in the Tempo service.")),(0,o.kt)("p",null,"The Tempo Service has a new ",(0,o.kt)("a",{parentName:"p",href:"https://android-docs.bluedot.io/-bluedot%20-s-d-k%20-docs/au.com.bluedot.point.net.engine/-tempo-tracking-receiver/index.html"},"callback")," that provides the user's ETA updates at runtime. Previously, the ETA updates were only accessible by listening to our Tempo webhooks. Now, you can receive the user's ETA updates in your app, not only from the Tempo webhooks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'  class AppTempoReceiver : TempoTrackingReceiver() {\n \n    override fun onTempoTrackingUpdate(tempoTrackingUpdate: TempoTrackingUpdate, context: Context) {\n      GlobalContext.logEvent(EventItem("Tempo update: ${tempoTrackingUpdate.toString()}"))\n    }\n\n    ...\n  }   \n')),(0,o.kt)("p",null,"Every time the Tempo Service generates a new ETA update, the ",(0,o.kt)("inlineCode",{parentName:"p"},"onTempoTrackingUpdate")," callback payload looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'     {\n        "triggerChainId": "30add2f5-ac7b-42cc-8799-cf8d4729579e",\n        "eta": 60,                     //In seconds\n        "etaDirection": "lessThan",    // lessThan, greaterThan\n        "destination": {\n                       "destinationId": "002",\n                        "name": "Tempo Zone 002",\n                        "location": {\n                                   "latitude": -38.12203660000001,\n                                    "longitude": 145.1404072\n                                    }\n        }\n     }\n')),(0,o.kt)("h4",{id:"destination-store-details-now-accessible-in-zoneinfo"},(0,o.kt)("strong",{parentName:"h4"},"Destination (Store) Details Now Accessible in ",(0,o.kt)("inlineCode",{parentName:"strong"},"ZoneInfo"))),(0,o.kt)("p",null,"Each 'Destination' (AKA Store) can have multiple 'Zones' associated with it in our platform. We have enhanced the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZoneInfo")," object to reflect this relationship better. Now, when a Zone is linked to a Destination, you can access its information directly within each ",(0,o.kt)("a",{parentName:"p",href:"https://android-docs.bluedot.io/-bluedot%20-s-d-k%20-docs/au.com.bluedot.point.net.engine/-zone-info/index.html"},"ZoneInfo")," object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"    ZoneInfo {\n        zoneId='23d2f4be-0228-4c89-93ce-4e30719eb8ac',\n        zoneName='TestSales123',\n        description='null',\n        destination='{\n                \"name\":\"TestSales123\",\n                \"address\":\"1 ulip  Pl, Point Cook VIC 3030, Australia\",\n                \"destinationId\":\"eta123\",\n                \"location\":{ \n                            \"latitude\":-37.887793704819,\n                            \"longitude\":144.72884061177632\n                 }\n         }',\n        customData='{\n                     Zone_key=Maccas Point Cook,\n                     placekey=zzy-226@63t-sg2-wzf,\n                    }',\n        fences=[\n                 FenceInfo {\n                        geometry=Circle{radius=70.05617546362394, center=-37.88779370424774,144.72884061177632},\n                        id='aca84e47-b17a-4c64-a261-ff09cb963b69',\n                        name='Fence 0',\n                        description='',\n                        applicationId='<PROJECT-ID>'\n                       }\n               ],\n        enabled=true,\n        checkout=false'\n    }\n")),(0,o.kt)("p",null,"Here's an example of what the Destination payload looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'destination=\'{ \n   "name": "TestSales123",\n   "address": "1 ulip  Pl, Point Cook VIC 3030, Australia",\n   "destinationId": "eta123",\n   "location": { "latitude":-37.887793704819,\n                 "longitude":144.72884061177632\n    }\n}    \n')),(0,o.kt)("h4",{id:"new-getcustomeventmetadata-method"},"***New ",(0,o.kt)("inlineCode",{parentName:"h4"},"getCustomEventMetaData()")," method"),(0,o.kt)("p",null,"We have introduced the ",(0,o.kt)("inlineCode",{parentName:"p"},"getCustomEventMetaData")," API, enhancing your ability to access Custom Event Meta Data in real-time. This new API allows you to retrieve the custom event meta data dynamically."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"ServiceManager.getInstance(context).getCustomEventMetaData();\n")))}u.isMDXComponent=!0}}]);