"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[5397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),g=r,m=p["".concat(s,".").concat(g)]||p[g]||u[g]||o;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(7462),r=(n(7294),n(3905));const o={},a="Migration guide from previous versions to Point SDK v15.3.0",l={unversionedId:"Point SDK/Android/Migrating from previous versions to v15.3.0",id:"Point SDK/Android/Migrating from previous versions to v15.3.0",title:"Migration guide from previous versions to Point SDK v15.3.0",description:"The Bluedot Point SDK version 15.3.0 is a major rewrite of our API interfaces. It includes many updates, such as",source:"@site/docs/Point SDK/Android/Migrating from previous versions to v15.3.0.md",sourceDirName:"Point SDK/Android",slug:"/Point SDK/Android/Migrating from previous versions to v15.3.0",permalink:"/Point SDK/Android/Migrating from previous versions to v15.3.0",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Gradle 8",permalink:"/Point SDK/Android/Gradle 8"},next:{title:"Overview",permalink:"/Point SDK/iOS/Overview"}},s={},d=[{value:"Update to authentication/initialization call",id:"update-to-authenticationinitialization-call",level:2},{value:"New/Updates in 15.3.0",id:"newupdates-in-1530",level:3},{value:"Explicit calls to start &amp; stop Geo-triggering feature",id:"explicit-calls-to-start--stop-geo-triggering-feature",level:2},{value:"Notes:",id:"notes",level:3},{value:"Receiving Geo-trigger events",id:"receiving-geo-trigger-events",level:2},{value:"Update in 15.3.0",id:"update-in-1530",level:3},{value:"Updates to Tempo API",id:"updates-to-tempo-api",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migration-guide-from-previous-versions-to-point-sdk-v1530"},"Migration guide from previous versions to Point SDK v15.3.0"),(0,r.kt)("p",null,"The Bluedot Point SDK version 15.3.0 is a major rewrite of our API interfaces. It includes many updates, such as"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a simpler and easier way to initialize with SDK, and"),(0,r.kt)("li",{parentName:"ul"},"giving you more control on when to start & stop Geo-triggering/Tempo features.")),(0,r.kt)("p",null,"This guide will help you migrate your code to Point SDK version 15.3.0"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"update-to-authenticationinitialization-call"},"Update to authentication/initialization call"),(0,r.kt)("p",null,"The authentication call has been changed from:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Deprecated in 15.3.0\n public void sendAuthenticationRequest(String apiKey, ServiceStatusListener listener)\n")),(0,r.kt)("p",null,"to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface InitializationResultListener{\n    void onInitializationFinished(@Nullable BDError error)\n}\n \npublic void initialize(@NonNull String projectId,\n     @NonNull InitializationResultListener resultListener)\n")),(0,r.kt)("p",null,"in addition, in order to receive Bluedot service error events post initialization, a class that implements ",(0,r.kt)("a",{parentName:"p",href:"https://android-docs.bluedot.io/-bluedot-s-d-k/au.com.bluedot.point.net.engine/-bluedot-service-receiver/index.html?query=abstract%20class%20BluedotServiceReceiver%20:%20BroadcastReceiver"},(0,r.kt)("inlineCode",{parentName:"a"},"BluedotServiceReceiver"))," should be implemented and registered in the AndroidManifest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"}," class ExampleBluedotServiceReceiver : BluedotServiceReceiver() {\n     override fun onBluedotServiceError(error: BDError, context: Context) {\n         // Handle error here.\n     }\n }\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="AndroidManifest"',title:'"AndroidManifest"'},'<application android:label="@string/app_name">\n    <receiver\n        android:name="<path to your BluedotServiceReceiver implementation>"\n        android:enabled="true"\n        android:exported="false"\n    >\n        <intent-filter>\n            <action android:name="io.bluedot.point.SERVICE" />\n        </intent-filter>\n    </receiver>\n</application>\n')),(0,r.kt)("h3",{id:"newupdates-in-1530"},"New/Updates in 15.3.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Moving forward, ",(0,r.kt)("inlineCode",{parentName:"li"},"apiKey")," will be replaced by ",(0,r.kt)("inlineCode",{parentName:"li"},"projectId"),"."),(0,r.kt)("li",{parentName:"ul"},"Any error in relation to initialization will be passed back via a completion callback. If the error is null, initialization was successful.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'serviceManager.initialize("projectId", \n    (error) -> {\n         // Handle initialization result\n});\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ServiceStatusListener")," will be replaced by the combination of the ",(0,r.kt)("inlineCode",{parentName:"li"},"InitializationResultListener")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"BluedotServiceReceiver")),(0,r.kt)("li",{parentName:"ul"},"Bluedot SDK will not start triggering Geofeatures immediately as per the previous API. You will have to make the call explicitly to start/stop Geo-triggering.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"explicit-calls-to-start--stop-geo-triggering-feature"},"Explicit calls to start & stop Geo-triggering feature"),(0,r.kt)("p",null,"In 15.3.0 SDK, we give more control to you on when to start and stop Geo-triggering features. To start triggering Geofeatures, you will need to explicitly call the API."),(0,r.kt)("h3",{id:"notes"},"Notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stopping Geo-triggering feature has the intended effect of stopping location services on the device, thereby conserving battery on your user\u2019s device unless another feature such as Tempo, is active."),(0,r.kt)("li",{parentName:"ul"},"Once you\u2019ve stopped the ",(0,r.kt)("inlineCode",{parentName:"li"},"GeoTriggeringService"),", the SDK will stop tracking the device. The deprecated ",(0,r.kt)("inlineCode",{parentName:"li"},"logout()")," method is no longer needed, the SDK will be initialized only once.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"}," interface GeoTriggeringStatusListener {\n     void onGeoTriggeringResult(@Nullable BDError error)\n }\n\n /* GeoTriggeringService class is used to use GeoTriggering feature\n from Bluedot Point SDK which includes reporting zone entry and exit events.\n Its builder can be used to start and stop GeoTriggering with/without \n Foreground notification.\n\n Here:\n notificationId: Id used to display Foreground Notification to user (if any)\n notification: Notification with Message to used to start Geotrigger as foreground\n service (if any)\n start: is called to start GeoTriggering\n */\n \n GeoTriggeringService.builder()\n         .notificationId(notificationId: Int) \n         .notification(notificationWithTitle: Notification)\n         .start(context: Context, \n             geoTriggeringStatusListener: GeoTriggeringStatusListener)\n \n // To stop GeoTriggering\n GeoTriggeringService.stop(context: Context)\n \n // To query status of Geotrigger\n GeoTriggeringService.isRunning()\n")),(0,r.kt)("h2",{id:"receiving-geo-trigger-events"},"Receiving Geo-trigger events"),(0,r.kt)("p",null,"In previous versions of the Point SDK, you would have implemented the ",(0,r.kt)("inlineCode",{parentName:"p"},"ApplicationNotificationListener")," to receive Fence triggers callbacks. In the new version of the Point SDK, you need to implement ",(0,r.kt)("inlineCode",{parentName:"p"},"GeoTriggeringEventReceiver")," as a new class to receive Geo-triggering related callbacks and declare it in AndroidManifest."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class ExampleGeoTriggerReceiver : GeoTriggeringEventReceiver() {\n    override fun onZoneInfoUpdate(zones: List<ZoneInfo>, context: Context) {\n       //zones list from Rule Download\n    }\n \n    override fun onZoneEntryEvent(entryEvent: ZoneEntryEvent, context: Context) {\n       //Zone Entry event details for Checkin\n    }\n \n    override fun onZoneExitEvent(exitEvent: ZoneExitEvent, context: Context) {\n       //Zone Exit event details for Checkout\n    }\n }\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="AndroidManifest"',title:'"AndroidManifest"'},'<application android:label="@string/app_name">\n   <receiver\n       android:name="<path to your GeoTriggeringEventReceiver implementation>"\n       android:enabled="true"\n       android:exported="false"\n   >\n       <intent-filter>\n           <action android:name="io.bluedot.point.GEOTRIGGER" />\n       </intent-filter>\n   </receiver>\n</application>\n')),(0,r.kt)("h3",{id:"update-in-1530"},"Update in 15.3.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ApplicationNotificationListener")," & ",(0,r.kt)("inlineCode",{parentName:"li"},"ServiceStatusListener")," will be deprecated.",(0,r.kt)("br",{parentName:"li"}),"You may find most of the features migrated to either ",(0,r.kt)("inlineCode",{parentName:"li"},"GeoTriggeringEvenTReceiver")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"BluedotServiceReceiver")),(0,r.kt)("li",{parentName:"ul"},"Moving forward, beacons related callbacks will no longer be supported. You may continue to use the deprecated delegate ",(0,r.kt)("inlineCode",{parentName:"li"},"ApplicationNotificationListener")," to receive beacon related callbacks."),(0,r.kt)("li",{parentName:"ul"},"Zone infos will now only be downloaded after Geo-triggering Start API is called.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"updates-to-tempo-api"},"Updates to Tempo API"),(0,r.kt)("p",null,"The Start Tempo API call has changed from"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Deprecated in 15.3.0\n public void startTempoTracking(@NonNull String destinationId,\n @NonNull TempoStatusListener statusListener)\n \n public void stopTempoTracking()\n")),(0,r.kt)("p",null,"to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"}," interface TempoStatusListener {\n     fun onTempoResult(error: BDError?) \n }\n \n /* TempoService class is used to use Tempo feature from the Bluedot\n Point SDK which includes reporting tempo update and tempo stop events on a \n defined interval.\n It has a builder which can be used to start and stop Tempo\n\n Here:\n notificationId: Id used to display Foreground Notification to user(if any)\n notification: Notification with Message to used to start Tempo as foreground\n service(Required)\n destinationId: DestinationId of Zone to start Tempo (Required)\n start: is called to start Tempo\n */\n \n TempoService.builder()\n         .notificationId(myNotificationId) // If running a foreground service\n         .notification(notificationReference) // As above\n         .destinationId(destId: String)\n         .start(context: Context, statusListener: TempoStatusListener)\n \n // To stop Tempo \n TempoService.stop(context: Context)\n \n // To query status of Tempo\n TempoService.isRunning(context: Context)\n")),(0,r.kt)("p",null,"In order to receive any error events during Tempo, a class that implements ",(0,r.kt)("inlineCode",{parentName:"p"},"TempoTrackingReceiver")," should be implemented and registered in the AndroidManifest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"}," class ExampleTempoReceiver : TempoTrackingReceiver() {\n    // Called when there is an error that has caused Tempo to stop\n    override fun tempoStoppedWithError(error: BDError, context: Context) {\n         // error during Tempo \n    }\n }\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="AndroidManifest"',title:'"AndroidManifest"'},'<application android:label="@string/app_name" >\n    <receiver\n        android:name="<path to your TempoTrackingReceiver implementation>"\n        android:enabled="true"\n        android:exported="false"\n    >\n        <intent-filter>\n            <action android:name="io.bluedot.point.TEMPO" />\n       </intent-filter>\n    </receiver>\n</application>\n')))}u.isMDXComponent=!0}}]);