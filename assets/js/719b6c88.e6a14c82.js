"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[9298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=i,v=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return n?r.createElement(v,a(a({ref:t},d),{},{components:n})):r.createElement(v,a({ref:t},d))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={},a="Android Integration",l={unversionedId:"Integrations/Airship/Android",id:"Integrations/Airship/Android",title:"Android Integration",description:"Getting Started",source:"@site/docs/Integrations/Airship/Android.md",sourceDirName:"Integrations/Airship",slug:"/Integrations/Airship/Android",permalink:"/Integrations/Airship/Android",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/Integrations/Airship/Overview"},next:{title:"iOS Integration",permalink:"/Integrations/Airship/iOS"}},s={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Integration Example",id:"integration-example",level:3},{value:"Integrate Airship SDK into your App",id:"integrate-airship-sdk-into-your-app",level:3},{value:"Integrate Bluedot PointSDK in your Project",id:"integrate-bluedot-pointsdk-in-your-project",level:3},{value:"Interaction between Airship SDK and Bluedot PointSDK",id:"interaction-between-airship-sdk-and-bluedot-pointsdk",level:2},{value:"Start Airship Services",id:"start-airship-services",level:3},{value:"Setup Bluedot Location Services",id:"setup-bluedot-location-services",level:3},{value:"Use Case",id:"use-case",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"android-integration"},"Android Integration"),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"integration-example"},"Integration Example"),(0,i.kt)("p",null,"You can find our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Bluedot-Innovation/BluedotAirshipDemoApp-Android"},"Bluedot \u2013 Airship Android Example on GitHub")," or follow the steps below to integrate Airship and Bluedot PointSDK."),(0,i.kt)("h3",{id:"integrate-airship-sdk-into-your-app"},"Integrate Airship SDK into your App"),(0,i.kt)("p",null,"Details on integrating the Airship SDK can be found on their documentation website ",(0,i.kt)("a",{parentName:"p",href:"https://docs.airship.com/platform/android/getting-started/"},"here"),"."),(0,i.kt)("h3",{id:"integrate-bluedot-pointsdk-in-your-project"},"Integrate Bluedot PointSDK in your Project"),(0,i.kt)("p",null,"To integrate Point SDK, please refer to the integration steps ",(0,i.kt)("a",{parentName:"p",href:"/Point%20SDK/Android/Quick%20Start"},"here")),(0,i.kt)("h2",{id:"interaction-between-airship-sdk-and-bluedot-pointsdk"},"Interaction between Airship SDK and Bluedot PointSDK"),(0,i.kt)("h3",{id:"start-airship-services"},"Start Airship Services"),(0,i.kt)("p",null,"1","."," Start Airship services by overriding\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"onCreate"),"\xa0in your custom Application class"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"override fun onCreate() {    \n    super.onCreate()\n\n    UAirship.takeOff(this, OnReadyCallback {\n      // Enable user notifications\n      it.pushManager.userNotificationsEnabled \\= true\n    })\n}\n")),(0,i.kt)("p",null,"or add ",(0,i.kt)("inlineCode",{parentName:"p"},"Autopilot")," configuration to ",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<meta-data android:name="com.urbanairship.autopilot" android:value="com.package.yourAirshipAutopilotClass"/>\n')),(0,i.kt)("h3",{id:"setup-bluedot-location-services"},"Setup Bluedot Location Services"),(0,i.kt)("p",null,"1","."," Start PointSDK at the entry point in your application by overriding ",(0,i.kt)("inlineCode",{parentName:"p"},"onCreate()"),"\xa0and replace your Bluedot ProjectId in ",(0,i.kt)("inlineCode",{parentName:"p"},"<Your Bluedot Project ID>"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'super.onCreate();\n ...\n // start Point SDK\nboolean locationPermissionGranted = ActivityCompat.checkSelfPermission(getApplicationContext(), Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED\n\nif (locationPermissionGranted) {\n  serviceManager = ServiceManager.getInstance(this);\n  if (!serviceManager.isBluedotServiceInitialized()) {\n    InitializationResultListener resultListener = bdError -> {\n    String text = "Initialization Result "\n\n    if (bdError != null) {\n      text = text + bdError.reason\n      Log.i("Bluedot", text)\n    }\n    else {\n      startGeoTriggering()\n    }\n  }\n  serviceManager.initialize("<Your Bluedot Project ID>", resultListener)\n }\n}\nelse\n{\n   requestLocationPermissions()\n}\n')),(0,i.kt)("p",null,"2","."," Start Geo-triggering feature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'public void startGeoTriggering() {\n  // Start Geo-triggering feature\n  GeoTriggeringService.builder()\n    .start(this, geoTriggerError \\-> {\n      if (geoTriggerError != null) {\n        Log.i("Bluedot", "Error in starting GeoTrigger" + geoTriggerError.reason)\n      }\n      else {\n        Log.i("Bluedot", "GeoTrigger started successfully")\n      }\n  });\n}\n')),(0,i.kt)("p",null,"3","."," Receiving Geo-trigger events"),(0,i.kt)("p",null,"Create a receiver in the Manifest to receive Geo-trigger events (such as entering a location):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<application android:label="@string/app_name" >\n  <receiver\n    android:name="my.package.ExampleGeoTriggerReceiver"\n    android:enabled="true"\n    android:exported="false"\n  >\n    <intent-filter>\n      <action android:name="io.bluedot.point.GEOTRIGGER" />\n    </intent-filter>\n  </receiver>\n</application>\n')),(0,i.kt)("p",null,"Implement the receiver"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class ExampleGeoTriggerReceiver extends GeoTriggeringEventReceiver {\n  @Override\n  public void onZoneEntryEvent(@NotNull ZoneEntryEvent entryEvent, @NotNull Context context) {\n    ...\n  }\n\n  @Override\n  public void onZoneExitEvent(@NotNull ZoneExitEvent exitEvent, @NotNull Context context) {\n    ...\n  }\n}\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Exit"),"\xa0does not apply to GEOLINE\u2122.")),(0,i.kt)("h3",{id:"use-case"},"Use Case"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Objective:"),"\xa0To trigger\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"automated message"),"\xa0pushed to the user when their device checks in into\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Geofence"),"\xa0."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Setting Automated Message:"),"\xa0Automated message to be setup via\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Urban Airship Dashboard"),", to trigger when a new event is posted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'override fun onZoneEntryEvent(entryEvent: ZoneEntryEvent, context: Context) {\n  val builder \\= CustomEvent.Builder("bluedot_place_entered")\n  builder.setInteraction("location", entryEvent.zoneInfo.zoneId)\n  entryEvent.zoneInfo.zoneName?.let { builder.addProperty("bluedot_zone_name", it) }\n  entryEvent.zoneInfo.customData?.let {\n    for ((key, value) in it) {\n      builder.addProperty(key, value)\n    }\n  }\n  val event = builder.build()\n  event.track()\n}\n\noverride fun onZoneExitEvent(exitEvent: ZoneExitEvent, context: Context) {\n  val builder = CustomEvent.Builder("bluedot_place_exited")\n  builder.setInteraction("location", exitEvent.zoneInfo.zoneId)\n  exitEvent.zoneInfo.zoneName?.let { builder.addProperty("bluedot_zone_name", it) }\n  exitEvent.zoneInfo.customData?.let {\n    for ((key, value) in it) {\n      builder.addProperty(key, value)\n    }\n  }\n\n  if (exitEvent.dwellTime != -1) {\n    builder.addProperty("dwell_time", exitEvent.dwellTime)\n  }\n  val event = builder.build()\n  event.track()\n}\n')))}c.isMDXComponent=!0}}]);