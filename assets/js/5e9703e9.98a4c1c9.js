"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[8289],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var o=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(i),g=n,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||a;return i?o.createElement(m,r(r({ref:t},u),{},{components:i})):o.createElement(m,r({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,r[1]=l;for(var s=2;s<a;s++)r[s]=i[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}g.displayName="MDXCreateElement"},7080:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=i(7462),n=(i(7294),i(3905));const a={},r="Migration guide from previous versions to Point SDK v15.4.0",l={unversionedId:"Point SDK/iOS/Migration Guides/Migration guide from previous versions to Point SDK v15.4.0",id:"Point SDK/iOS/Migration Guides/Migration guide from previous versions to Point SDK v15.4.0",title:"Migration guide from previous versions to Point SDK v15.4.0",description:"The Bluedot Point SDK version 15.4.0 is a major rewrite of our API interfaces. It includes many updates, such as",source:"@site/docs/Point SDK/iOS/Migration Guides/Migration guide from previous versions to Point SDK v15.4.0.md",sourceDirName:"Point SDK/iOS/Migration Guides",slug:"/Point SDK/iOS/Migration Guides/Migration guide from previous versions to Point SDK v15.4.0",permalink:"/documentation/Point SDK/iOS/Migration Guides/Migration guide from previous versions to Point SDK v15.4.0",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Location Permission best practices",permalink:"/documentation/Point SDK/iOS/Location Permission Best Practices"},next:{title:"Migration guide from previous versions to Point SDK v15.5.0",permalink:"/documentation/Point SDK/iOS/Migration Guides/Migration guide from previous versions to Point SDK v15.5.0"}},c={},s=[{value:"Update to authentication/initialization call",id:"update-to-authenticationinitialization-call",level:2},{value:"New/Updates in 15.4.0",id:"newupdates-in-1540",level:3},{value:"iOS 14 \u2013 Reduced / Full Accuracy",id:"ios-14--reduced--full-accuracy",level:2},{value:"Explicit calls to start &amp; stop Geo-triggering feature",id:"explicit-calls-to-start--stop-geo-triggering-feature",level:2},{value:"Note:",id:"note",level:3},{value:"1. New Geo-triggering API:",id:"1-new-geo-triggering-api",level:3},{value:"2. To check if Geotriggering is running:",id:"2-to-check-if-geotriggering-is-running",level:3},{value:"Receiving Geo-trigger events",id:"receiving-geo-trigger-events",level:2},{value:"Update in 15.4.0",id:"update-in-1540",level:3},{value:"Bluedot Service Level Callbacks \u2013 <code>BDPBluedotServiceDelegate</code>",id:"bluedot-service-level-callbacks--bdpbluedotservicedelegate",level:2},{value:"Updates to Tempo API",id:"updates-to-tempo-api",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"migration-guide-from-previous-versions-to-point-sdk-v1540"},"Migration guide from previous versions to Point SDK v15.4.0"),(0,n.kt)("p",null,"The Bluedot Point SDK version 15.4.0 is a major rewrite of our API interfaces. It includes many updates, such as"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a simpler and easier way to initialize with Point SDK, and"),(0,n.kt)("li",{parentName:"ul"},"giving you more control on when to start & stop Geo-triggering/Tempo features.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"update-to-authenticationinitialization-call"},"Update to authentication/initialization call"),(0,n.kt)("p",null,"The authentication call has changed from"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Deprecated in 15.4.0\n(void)authenticateWithApiKey: (NSString *)apiKey requestAuthorization: (BDAuthorizationLevel) authorizationLevel;\n")),(0,n.kt)("p",null,"to"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"(void)initializeWithProjectId: (NSString * _Nonnull)projectId completion: (void (^_Nonnull)(NSError * _Nullable error)) completion;\n")),(0,n.kt)("p",null,"To check if SDK is initialized:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"(BOOL) isInitialized;\n")),(0,n.kt)("h3",{id:"newupdates-in-1540"},"New/Updates in 15.4.0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Moving forward, ",(0,n.kt)("inlineCode",{parentName:"li"},"apiKey")," will be replaced by ",(0,n.kt)("inlineCode",{parentName:"li"},"projectId"),". Note that you can find ",(0,n.kt)("inlineCode",{parentName:"li"},"projectId")," in Canvas."),(0,n.kt)("li",{parentName:"ul"},"Any error in relation to initialization will be passed back via a completion callback. If the error is NIL, initialization was successful."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"BDPSessionDelegate")," will be deprecated in favor of completion callbacks."),(0,n.kt)("li",{parentName:"ul"},"Bluedot Point SDK no longer requests for OS location permission on authentication/initialization as per the previous API.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"We encourage you to request OS location permission that you requires (Always or When in Use), at an opportune moment from within your app, to get the best conversion rate. For example, when a customer places an order within the mobile app, at this point you can start geo-triggering, as well as requesting for location permission."),(0,n.kt)("li",{parentName:"ul"},"To request for OS location permission, you can make the calls via our ",(0,n.kt)("a",{parentName:"li",href:"https://ios-docs.bluedot.io/Classes/BDLocationManager.html"},(0,n.kt)("inlineCode",{parentName:"a"},"BDLocationManager"))," Singleton, for example:")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"[BDLocationManager.instance requestAlwaysAuthorization];\n[BDLocationManager.instance requestWhenInUseAuthorization];\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bluedot SDK will ",(0,n.kt)("strong",{parentName:"li"},"not")," start triggering Geofeatures immediately after initialization as per the previous API. You will have to make the call explicitly to start/stop Geo-triggering.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"ios-14--reduced--full-accuracy"},"iOS 14 \u2013 Reduced / Full Accuracy"),(0,n.kt)("p",null,"If your users do not have precise location (accuracy authorization at a reduced level), you can make either of the following calls via our ",(0,n.kt)("a",{parentName:"p",href:"https://ios-docs.bluedot.io/Classes/BDLocationManager.html"},(0,n.kt)("inlineCode",{parentName:"a"},"BDLocationManager"))," Singleton, to request for Temporary Full Accuracy Authorization."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'[BDLocationManager.instance requestTemporaryFullAccuracyAuthorizationWithPurposeKey: @"YOUR_KEY"];\n[BDLocationManager.instance requestTemporaryFullAccuracyAuthorizationWithPurposeKey: @"YOUR_KEY" completion: ^{}];\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"explicit-calls-to-start--stop-geo-triggering-feature"},"Explicit calls to start & stop Geo-triggering feature"),(0,n.kt)("p",null,"In 15.4.0 SDK, we give more control to you on when to start and stop Geo-triggering features. To start triggering Geofeatures, you will need to explicitly call the API."),(0,n.kt)("h3",{id:"note"},"Note:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"You can start Geo-triggering feature only while your App is in the Foreground."),(0,n.kt)("li",{parentName:"ol"},"Stopping Geo-triggering feature has the intended effect of stopping location services on the device, thereby conserving battery on your user\u2019s device unless another feature such as Tempo, is active.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Once the ",(0,n.kt)("a",{parentName:"li",href:"https://ios-docs.bluedot.io/Classes/BDLocationManager.html#/c:objc(cs)BDLocationManager(im)stopGeoTriggeringWithCompletion:"},(0,n.kt)("inlineCode",{parentName:"a"},"stopGeoTriggeringWithCompletion"))," method is called the SDK will stop tracking the device. The deprecated ",(0,n.kt)("inlineCode",{parentName:"li"},"logout()")," method is no longer needed, the SDK will be initialized only once.")))),(0,n.kt)("h3",{id:"1-new-geo-triggering-api"},"1. New Geo-triggering API:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"(void)startGeoTriggeringWithCompletion: (void (^_Nonnull)(NSError * _Nullable error)) completion;\n\n(void)stopGeoTriggeringWithCompletion: (void (^_Nonnull)(NSError * _Nullable error)) completion;\n")),(0,n.kt)("h3",{id:"2-to-check-if-geotriggering-is-running"},"2. To check if Geotriggering is running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"(BOOL) isGeoTriggeringRunning;\n")),(0,n.kt)("h2",{id:"receiving-geo-trigger-events"},"Receiving Geo-trigger events"),(0,n.kt)("p",null,"In previous versions of the Point SDK, you would have implemented the ",(0,n.kt)("inlineCode",{parentName:"p"},"BDPLocationDelegate")," to receive Fence triggers callbacks. In the new version of the Point SDK, implement the following delegate to receive Geo-triggering related callbacks."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"@protocol BDPGeoTriggeringEventDelegate <NSObject>\n@optional\n(void)onZoneInfoUpdate: (NSSet<BDZoneInfo *> *)zoneInfos;\n(void)didEnterZone: (BDZoneEntryEvent) enterEvent;\n(void)didExitZone: (BDZoneExitEvent) exitEvent;\n@end\n")),(0,n.kt)("h3",{id:"update-in-1540"},"Update in 15.4.0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"BDPLocationDelegate")," will be deprecated. You may find most of the features migrated to either ",(0,n.kt)("a",{parentName:"li",href:"https://ios-docs.bluedot.io/Protocols/BDPGeoTriggeringEventDelegate.html"},(0,n.kt)("inlineCode",{parentName:"a"},"BDPGeoTriggeringEventDelegate"))," or ",(0,n.kt)("a",{parentName:"li",href:"https://ios-docs.bluedot.io/Protocols/BDPBluedotServiceDelegate.html"},(0,n.kt)("inlineCode",{parentName:"a"},"BDPBluedotServiceDelegate"))),(0,n.kt)("li",{parentName:"ul"},"Moving forward, beacons related callbacks will no longer be supported. You may continue to use the deprecated delegate ",(0,n.kt)("inlineCode",{parentName:"li"},"BDPLocationDelegate")," to receive beacon related callbacks."),(0,n.kt)("li",{parentName:"ul"},"Zone infos will now only be downloaded after Geo-triggering Start API is called.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"bluedot-service-level-callbacks--bdpbluedotservicedelegate"},"Bluedot Service Level Callbacks \u2013 ",(0,n.kt)("a",{parentName:"h2",href:"https://ios-docs.bluedot.io/Protocols/BDPBluedotServiceDelegate.html"},(0,n.kt)("inlineCode",{parentName:"a"},"BDPBluedotServiceDelegate"))),(0,n.kt)("p",null,"There will a new Bluedot Service Level Callback for all essential callbacks for the Point SDK."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"@protocol BDPBluedotServiceDelegate <NSObject>\n@optional\n(void)locationAuthorizationDidChangeFromOldAuthorizationStatus: (CLAuthorizationStatus) oldAuthorizationStatus toNewAuthorizationStatus: (CLAuthorizationStatus) newAuthorizationStatus;\n(void)lowPowerModeDidChange: (Bool) isLowPowerMode;\n(void)bluedotServiceDidReceiveError:(NSError *)error\n \n // iOS 14 only\n(void)accuracyAuthorizationDidChangeFromOldAccuracyAuthorization: (CLAccuracyAuthorization) oldAccuracyAuthorization toNewAccuracyAuthorization: (CLAccuracyAuthorization) newAccuracyAuthorization API_AVAILABLE(ios(14));\n@end\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"updates-to-tempo-api"},"Updates to Tempo API"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The Start Tempo API call has changed from")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Deprecated in 15.4.0\n(void)startTempoTracking: (NSString * _Nonnull)destinationId\n")),(0,n.kt)("p",null,"to"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"(void)startTempoTrackingWithDestinationId: (NSString * _Nonnull)destinationId completion: (void (^ _Nonnull)(NSError * _Nullable error)) completion;\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"The Stop Tempo API call has changed from")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Deprecated in 15.4.0\n(void)stopTempoTracking\n")),(0,n.kt)("p",null,"to"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"(void)stopTempoTrackingWithCompletion:completion: (void (^ _Nonnull)(NSError * _Nullable error)) completion;\n")),(0,n.kt)("p",null,"3","."," New API to check if Tempo is running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"(BOOL) isTempoRunning;\n")),(0,n.kt)("p",null,"4","."," Updates to ",(0,n.kt)("a",{parentName:"p",href:"https://ios-docs.bluedot.io/Protocols/BDPTempoTrackingDelegate.html"},(0,n.kt)("inlineCode",{parentName:"a"},"BDPTempoTrackingDelegate")),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Deprecated in 15.4.0, in favor of completion callbacks in Start/Stop Tempo API.\n (void)didStartTracking\n (void)didStopTracking\n \n // new in 15.4.0\n (void)tempoTrackingDidExpire\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("h3",{parentName:"admonition",id:"update-in-1540-1"},"Update in 15.4.0"),(0,n.kt)("p",{parentName:"admonition"},"In the previous version of the Point SDK, the start Tempo call will throw ",(0,n.kt)("inlineCode",{parentName:"p"},"NSException")," for any error detected. This has been changed in favor of completion callbacks.")))}d.isMDXComponent=!0}}]);