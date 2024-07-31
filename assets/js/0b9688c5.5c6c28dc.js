"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[2815],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=i,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return t?a.createElement(g,r(r({ref:n},d),{},{components:t})):a.createElement(g,r({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10079:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const o={pagination_next:null},r="Migration Guide to Point SDK V16 for iOS",l={unversionedId:"Point SDK/iOS/Migration Guides/Migration guide to SDK 16 for iOS",id:"Point SDK/iOS/Migration Guides/Migration guide to SDK 16 for iOS",title:"Migration Guide to Point SDK V16 for iOS",description:"If you have implemented the previous versions of the iOS Point SDKs, this guide will help you understand the steps required to migrate to version 16.",source:"@site/docs/Point SDK/iOS/Migration Guides/Migration guide to SDK 16 for iOS.md",sourceDirName:"Point SDK/iOS/Migration Guides",slug:"/Point SDK/iOS/Migration Guides/Migration guide to SDK 16 for iOS",permalink:"/Point SDK/iOS/Migration Guides/Migration guide to SDK 16 for iOS",draft:!1,tags:[],version:"current",frontMatter:{pagination_next:null},sidebar:"defaultSidebar",previous:{title:"Location Permission best practices",permalink:"/Point SDK/iOS/Location Permission Best Practices"}},c={},s=[{value:"Breaking Changes",id:"breaking-changes",level:3},{value:"Update your minimum supported version to iOS 12 or higher.",id:"update-your-minimum-supported-version-to-ios-12-or-higher",level:4},{value:"XCFramework support for Cocoapods and Carthage",id:"xcframework-support-for-cocoapods-and-carthage",level:4},{value:"Update your &quot;Entry&quot; and &quot;Exit&quot; callbacks in the Geo-triggering service.",id:"update-your-entry-and-exit-callbacks-in-the-geo-triggering-service",level:4},{value:"<strong>New &quot;Entry&quot; callback</strong>",id:"new-entry-callback",level:4},{value:"<strong>New &quot;Exit&quot; callback</strong>",id:"new-exit-callback",level:4},{value:"New <code>didUpdateZoneInfo</code> callback",id:"new-didupdatezoneinfo-callback",level:4},{value:"<strong>Update for enabling the Background Location Access Indicator</strong>",id:"update-for-enabling-the-background-location-access-indicator",level:4},{value:"<strong>Update for accessing <code>BDZoneInfo</code>&#39;s fences property</strong>",id:"update-for-accessing-bdzoneinfos-fences-property",level:4},{value:"<strong>Upgrade to <code>reset</code> method now includes clearing of Custom Event Meta Data</strong>",id:"upgrade-to-reset-method-now-includes-clearing-of-custom-event-meta-data",level:4},{value:"<strong>Removal of deprecated classes and functions</strong>",id:"removal-of-deprecated-classes-and-functions",level:4},{value:"New APIs",id:"new-apis",level:3},{value:"<strong>New <code>tempoTrackingDidUpdate</code> callback available in the Tempo service.</strong>",id:"new-tempotrackingdidupdate-callback-available-in-the-tempo-service",level:4},{value:"<strong>Destination (Store) Details Now Accessible in <code>BDZoneInfo</code></strong>",id:"destination-store-details-now-accessible-in-bdzoneinfo",level:4},{value:"<strong>Privacy Manifest Included in SDK 16</strong>",id:"privacy-manifest-included-in-sdk-16",level:4}],d={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migration-guide-to-point-sdk-v16-for-ios"},"Migration Guide to Point SDK V16 for iOS"),(0,i.kt)("p",null,"If you have implemented the previous versions of the iOS Point SDKs, this guide will help you understand the steps required to migrate to version 16."),(0,i.kt)("h3",{id:"breaking-changes"},"Breaking Changes"),(0,i.kt)("h4",{id:"update-your-minimum-supported-version-to-ios-12-or-higher"},"Update your minimum supported version to iOS 12 or higher."),(0,i.kt)("p",null,"We regularly update the minimum supported version of our SDKs to focus on providing the best developer experience.\nVersions up to and including 15.6.8 of the Point iOS SDK will continue to support devices from iOS 10. However, starting with version 15.6.9, the minimum supported iOS version will be iOS 12."),(0,i.kt)("h4",{id:"xcframework-support-for-cocoapods-and-carthage"},"XCFramework support for Cocoapods and Carthage"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cocoapods"),"\nWe have migrated our CocoaPods integration to XCFramework to better support multiple architectures, including Apple Silicon machines. No changes are needed from your side besides running\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"pod update BluedotPointSDK --repo-update"),"\xa0to update our latest SDK."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Carthage"),"\nTo update Carthage, specify the latest version of the iOS Point SDK in ",(0,i.kt)("inlineCode",{parentName:"p"},"cartfile"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'github "Bluedot-Innovation/PointSDK-iOS" "16.0.0"')),(0,i.kt)("p",null,"Then execute the following command to get the latest PointSDK:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"carthage update PointSDK-iOS --use-xcframeworks")),(0,i.kt)("h4",{id:"update-your-entry-and-exit-callbacks-in-the-geo-triggering-service"},'Update your "Entry" and "Exit" callbacks in the Geo-triggering service.'),(0,i.kt)("p",null,'The "',(0,i.kt)("em",{parentName:"p"},'Entry"'),'\xa0and "',(0,i.kt)("em",{parentName:"p"},'Exit"'),"\xa0callbacks have a new payload structure with additional information. The new payload includes information such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Location and Notification permissions users have granted."),(0,i.kt)("li",{parentName:"ul"},"A list of geofences the device has crossed to complete a travel path condition."),(0,i.kt)("li",{parentName:"ul"},"User's device battery levels.")),(0,i.kt)("h4",{id:"new-entry-callback"},(0,i.kt)("strong",{parentName:"h4"},'New "Entry" callback')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"didEnterZone(_ enterEvent: BDZoneEntryEvent)")," has been renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"didEnterZone(_ triggerEvent: GeoTriggerEvent)"),". The callback functionality remains the same, apart from the new payload structure, which has new data available."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'func didEnterZone(_ triggerEvent: GeoTriggerEvent) {\n\n    print("Entered Zone: \\(String(describing: triggerEvent.zoneInfo.name))")\n        \n    let dateFormatter = DateFormatter()\n    dateFormatter.locale = NSLocale.current\n    dateFormatter.dateFormat = "yyyy-MM-dd HH:mm" //Specify your format that you want\n    let formattedcheckInDate = dateFormatter.string(from: triggerEvent.entryEvent?.locations.first?.timestamp ?? Date())\n    \n    print("You have checked into fence \'\\(triggerEvent.entryEvent?.fenceName ?? "")\' in zone \'\\(triggerEvent.zoneInfo.name)\', at \\(formattedcheckInDate)")\n}\n')),(0,i.kt)("p",null,"Here's an example of how the new Entry callback payload looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "installRef": "6b25d2b6-c4d1-46b5-b5cb-20d803a9464c",\n  "triggerEvents": [\n    {\n      "fenceId": "4d20f4ac-b5e0-4d49-b7b0-c1e938e9bf33",\n      "fenceName": "Fence 2",\n      "applicationState": {\n        "lastRuleUpdate": "2023-02-17T08:45:28.126Z",\n        "viewState": "background",\n        "locationPermission": "always",\n        "blueBarEnabled": false,\n        "batteryLevel": 55\n      },\n      "localEventTime": "2023-02-17T19:45:56.161",\n      "eventTime": "2023-02-17T08:45:56.161Z",\n      "crossedFences": [\n        {\n          "fenceId": "ec71a592-6eba-4ba3-8064-ed676bccc396",\n          "fenceName": "Fence 1",\n          "crossTime": "2023-02-24T07:06:41.791Z",\n          "location": {\n            "altitude": 6.11293625831604,\n            "verticalAccuracy": 4,\n            "bearing": 98.66992950439453,\n            "horizontalAccuracy": 10,\n            "time": "2023-02-24T07:06:41.791Z",\n            "speed": 10.779999732971191,\n            "latitude": 1.23,\n            "longitude": 4.56\n          }\n        },\n        {\n          "fenceId": "4d20f4ac-b5e0-4d49-b7b0-c1e938e9bf33",\n          "fenceName": "Fence 2",\n          "crossTime": "2023-02-17T08:45:56.461Z",\n          "location": {\n            "altitude": 6.11293625831604,\n            "verticalAccuracy": 4,\n            "bearing": 98.66992950439453,\n            "horizontalAccuracy": 10,\n            "time": "2023-02-17T08:45:56.000Z",\n            "speed": 10.779999732971191,\n            "latitude": 1.23,\n            "longitude": 4.56\n          }\n        }\n      ],\n      "locations": [\n        {\n          "altitude": 6.11293625831604,\n          "verticalAccuracy": 4,\n          "bearing": 98.66992950439453,\n          "horizontalAccuracy": 10,\n          "time": "2023-02-17T08:45:56.000Z",\n          "speed": 10.779999732971191,\n          "latitude": 1.23,\n          "longitude": 4.56\n        }\n      ],\n      "eventType": "fenceEntered",\n      "triggerEngine": "bd"\n    }\n  ],\n  "appInfo": {\n    "appBuildVersion": "1.0.0",\n    "customerApplicationId": "MyTestApp",\n    "sdkVersion": "16.0.0",\n    "customEventMetaData": {}\n  },\n  "triggerChainId": "bbc874c4-446e-4675-84ac-e5ad3027143c",\n  "notificationType": "entry",\n  "zoneInfo": {\n    "id": "6e319a0e-3bbd-485f-bc90-4f458bf5062a",\n    "name": "My Zone",\n    "customData": {}\n  },\n  "deviceInfo": {\n    "deviceType": "iPhone 11,6",\n    "os": "iOS",\n    "osVersion": "16.3"\n  },\n  "projectId": "1ee328b2-41b9-4e15-b8da-ba0f2a130a47"\n}\n')),(0,i.kt)("h4",{id:"new-exit-callback"},(0,i.kt)("strong",{parentName:"h4"},'New "Exit" callback')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"didExitZone(_ exitEvent: BDZoneExitEvent)")," has been renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"didExitZone(_ event: GeoTriggerEvent)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"func didExitZone(_ triggerEvent: GeoTriggerEvent) {\n    print(\"You have left fence '\\(triggerEvent.exitEvent?.fenceName ?? \"\")' in zone '\\(triggerEvent.zoneInfo.name)', after \\(triggerEvent.exitEvent!.dwellTime/1000/60) minutes\")\n}\n")),(0,i.kt)("p",null,"Here's an example of how the new Exit callback payload looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "installRef": "6b25d2b6-c4d1-46b5-b5cb-20d803a9464c",\n  "triggerEvents": [\n    {\n      "fenceId": "4d20f4ac-b5e0-4d49-b7b0-c1e938e9bf33",\n      "fenceName": "Fence 2",\n      "applicationState": {\n        "lastRuleUpdate": "2023-02-17T08:45:28.126Z",\n        "viewState": "background",\n        "locationPermission": "always",\n        "blueBarEnabled": false,\n        "batteryLevel": 55\n      },\n      "localEventTime": "2023-02-17T19:45:56.161",\n      "eventTime": "2023-02-17T08:45:56.161Z",\n      "crossedFences": [\n        {\n          "fenceId": "ec71a592-6eba-4ba3-8064-ed676bccc396",\n          "fenceName": "Fence 1",\n          "crossTime": "2023-02-24T07:06:41.791Z",\n          "location": {\n            "altitude": 6.11293625831604,\n            "verticalAccuracy": 4,\n            "bearing": 98.66992950439453,\n            "horizontalAccuracy": 10,\n            "time": "2023-02-24T07:06:41.791Z",\n            "speed": 10.779999732971191,\n            "latitude": 1.23,\n            "longitude": 4.56\n          }\n        },\n        {\n          "fenceId": "4d20f4ac-b5e0-4d49-b7b0-c1e938e9bf33",\n          "fenceName": "Fence 2",\n          "crossTime": "2023-02-17T08:45:56.461Z",\n          "location": {\n            "altitude": 6.11293625831604,\n            "verticalAccuracy": 4,\n            "bearing": 98.66992950439453,\n            "horizontalAccuracy": 10,\n            "time": "2023-02-17T08:45:56.000Z",\n            "speed": 10.779999732971191,\n            "latitude": 1.23,\n            "longitude": 4.56\n          }\n        }\n      ],\n      "locations": [\n        {\n          "altitude": 6.11293625831604,\n          "verticalAccuracy": 4,\n          "bearing": 98.66992950439453,\n          "horizontalAccuracy": 10,\n          "time": "2023-02-17T08:45:56.000Z",\n          "speed": 10.779999732971191,\n          "latitude": 1.23,\n          "longitude": 4.56\n        }\n      ],\n      "eventType": "fenceEntered",\n      "triggerEngine": "bd"\n    },\n    {\n      "fenceId": "4d20f4ac-b5e0-4d49-b7b0-c1e938e9bf33",\n      "fenceName": "Fence 2",\n      "localEventTime": "2023-02-17T19:48:56.161",\n      "eventTime": "2023-02-17T08:48:56.161Z",\n      "applicationState": {\n        "lastRuleUpdate": "2023-02-17T08:45:28.126Z",\n        "viewState": "background",\n        "locationPermission": "always",\n        "blueBarEnabled": false,\n        "batteryLevel": 55\n      },\n      "distance": 166.1379852294922,\n      "distanceRequired": 50,\n      "locations": [\n        {\n          "altitude": 5.768045902252197,\n          "verticalAccuracy": 24.188264846801758,\n          "bearing": 97.83613027893678,\n          "horizontalAccuracy": 73,\n          "time": "2023-02-17T08:48:56.161Z",\n          "speed": -1,\n          "latitude": 1.23,\n          "longitude": 4.56\n        }\n      ],\n      "eventType": "fenceExited",\n      "triggerEngine": "bd",\n      "dwellTime": 14892.5621509552\n    }\n  ],\n  "appInfo": {\n    "appBuildVersion": "1.0.0",\n    "customerApplicationId": "MyTestApp",\n    "sdkVersion": "16.0.0",\n    "customEventMetaData": {}\n  },\n  "triggerChainId": "bbc874c4-446e-4675-84ac-e5ad3027143c",\n  "notificationType": "exit",\n  "zoneInfo": {\n    "id": "6e319a0e-3bbd-485f-bc90-4f458bf5062a",\n    "name": "My Zone",\n    "customData": {}\n  },\n  "deviceInfo": {\n    "deviceType": "iPhone 11,6",\n    "os": "iOS",\n    "osVersion": "16.3"\n  },\n  "projectId": "1ee328b2-41b9-4e15-b8da-ba0f2a130a47"\n}\n')),(0,i.kt)("h4",{id:"new-didupdatezoneinfo-callback"},"New ",(0,i.kt)("inlineCode",{parentName:"h4"},"didUpdateZoneInfo")," callback"),(0,i.kt)("p",null,"The previous callback ",(0,i.kt)("inlineCode",{parentName:"p"},"func onZoneInfoUpdate(_ zoneInfos: Set<BDZoneInfo>)")," has been replaced by the new ",(0,i.kt)("inlineCode",{parentName:"p"},"func didUpdateZoneInfo()"),". The updated callback no longer returns the ",(0,i.kt)("inlineCode",{parentName:"p"},"zoneInfos")," data directly. Instead, you should access the ",(0,i.kt)("inlineCode",{parentName:"p"},"zoneInfos")," data directly from the ",(0,i.kt)("inlineCode",{parentName:"p"},"BDLocationManager.instance().zoneInfos")," property."),(0,i.kt)("h4",{id:"update-for-enabling-the-background-location-access-indicator"},(0,i.kt)("strong",{parentName:"h4"},"Update for enabling the Background Location Access Indicator")),(0,i.kt)("p",null,'The Background Location Usage Indicator (AKA Blue Bar) for when location permissions are "',(0,i.kt)("em",{parentName:"p"},'While In Use"'),"\xa0is now controlled by a single switch, ",(0,i.kt)("inlineCode",{parentName:"p"},"BDLocationManager.instance().backgroundLocationAccessForWhileUsing"),". The previous property, ",(0,i.kt)("inlineCode",{parentName:"p"},"allowsBackgroundLocationUpdates"),", is no longer supported. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"BDLocationManager.instance()?.backgroundLocationAccessForWhileUsing = true\n")),(0,i.kt)("h4",{id:"update-for-accessing-bdzoneinfos-fences-property"},(0,i.kt)("strong",{parentName:"h4"},"Update for accessing ",(0,i.kt)("inlineCode",{parentName:"strong"},"BDZoneInfo"),"'s fences property")),(0,i.kt)("p",null,"If you are accessing ",(0,i.kt)("inlineCode",{parentName:"p"},"BDZoneInfo"),"'s fences property, note that fences are no longer optional starting SDK 16.\nChange from ",(0,i.kt)("inlineCode",{parentName:"p"},"zoneInfo?.fences?")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"zoneInfo?.fences"),"]"),(0,i.kt)("h4",{id:"upgrade-to-reset-method-now-includes-clearing-of-custom-event-meta-data"},(0,i.kt)("strong",{parentName:"h4"},"Upgrade to ",(0,i.kt)("inlineCode",{parentName:"strong"},"reset")," method now includes clearing of Custom Event Meta Data")),(0,i.kt)("p",null,"We've updated the reset method to enhance its functionality. Previously, invoking reset did not clear the Custom Event Meta Data. With this release, the reset method now also clears any Custom Event Meta Data, ensuring that all settings and cached data are fully restored to their default states."),(0,i.kt)("h4",{id:"removal-of-deprecated-classes-and-functions"},(0,i.kt)("strong",{parentName:"h4"},"Removal of deprecated classes and functions")),(0,i.kt)("p",null,"The following classes and functions have been removed from the SDK as these were deprecated in version 15.4.0, released in March 2021."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Removed deprecated classes/functions:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BDPLocationDelegate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BDPAuthenticationStateProvider")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BDPSessionDelegate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BDPRestartAlertDelegate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BDAuthorizationLevel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BDPMKShape")),(0,i.kt)("li",{parentName:"ul"},"All Beacon related classes and functionalities"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BDLocationManager"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authenticateWithApiKey:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authenticateWithApiKey:requestAuthorization:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"logOut")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pointDelegate"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"locationDelegate"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"authenticationDelegate"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"sessionDelegate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authenticationState"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isZoneDisabledByApplication:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"startTempoTracking:")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"stopTempoTracking:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BDPointSDKVersionNumber")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"BDPointSDKVersionString")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BDPTempoTrackingDelegate: didStartTracking")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"didStopTracking"))))),(0,i.kt)("h3",{id:"new-apis"},"New APIs"),(0,i.kt)("h4",{id:"new-tempotrackingdidupdate-callback-available-in-the-tempo-service"},(0,i.kt)("strong",{parentName:"h4"},"New ",(0,i.kt)("inlineCode",{parentName:"strong"},"tempoTrackingDidUpdate")," callback available in the Tempo service.")),(0,i.kt)("p",null,"The Tempo Service has a new callback that provides the user's ETA updates at runtime. Previously, the ETA updates were only accessible by listening to our Tempo webhooks. Now, you can receive the user's ETA updates in your app, not only from the Tempo webhooks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'func tempoTrackingDidUpdate(_ tempoUpdate: TempoTrackingUpdate) {\n    print("tempoTrackingDidUpdate: \'\\(tempoUpdate.destination?.name ?? "")\' - eta:\\(tempoUpdate.eta) minutes")\n}\n')),(0,i.kt)("p",null,"Every time the Tempo Service generates a new ETA update, the ",(0,i.kt)("inlineCode",{parentName:"p"},"tempoTrackingDidUpdate")," callback payload looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "triggerChainId": "bbc874c4-446e-4675-84ac-e5ad3027143c",\n    "eta": 900,\n    "etaDirection": "greaterThan",\n    "destination": {\n        "name": "My Store",\n            "address": "My address address",\n            "location": {\n                "latitude": 1.23,\n                "longitude": 4.56,\n                "geometryType": "Point"\n            },\n            "destinationId": "my destination id"\n    }\n}\n')),(0,i.kt)("h4",{id:"destination-store-details-now-accessible-in-bdzoneinfo"},(0,i.kt)("strong",{parentName:"h4"},"Destination (Store) Details Now Accessible in ",(0,i.kt)("inlineCode",{parentName:"strong"},"BDZoneInfo"))),(0,i.kt)("p",null,"Each 'Destination' (AKA Store) can have multiple 'Zones' associated with it in our platform. We have enhanced the ",(0,i.kt)("inlineCode",{parentName:"p"},"BDZoneInfo")," object to reflect this relationship better. Now, when a Zone is linked to a Destination, you can access its information directly within each ",(0,i.kt)("inlineCode",{parentName:"p"},"BDZoneInfo")," object."),(0,i.kt)("p",null,"Here's an example of what the Destination payload looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n // zone info...\n     "destination": {\n        "name": "My Store",\n        "address": "My address address",\n        "location": {\n            "latitude": 1.23,\n            "longitude": 4.56,\n            "geometryType": "Point"\n        },\n        "destination": "my destination id"\n     }\n}\n')),(0,i.kt)("h4",{id:"privacy-manifest-included-in-sdk-16"},(0,i.kt)("strong",{parentName:"h4"},"Privacy Manifest Included in SDK 16")),(0,i.kt)("p",null,"To comply with Apple's latest guidelines, SDK 16 now includes a Privacy Manifest (",(0,i.kt)("inlineCode",{parentName:"p"},"PrivacyInfo.xcprivacy"),"). This manifest details the necessary API usage reasons, ensuring our Point SDK adheres to the latest privacy requirements for app submissions."))}u.isMDXComponent=!0}}]);