"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[8959],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>v});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=o,v=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return t?r.createElement(v,i(i({ref:n},p),{},{components:t})):r.createElement(v,i({ref:n},p))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2653:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const a={},i="Android Integration",s={unversionedId:"integrations/Braze/Android",id:"integrations/Braze/Android",title:"Android Integration",description:"Getting Started",source:"@site/docs/integrations/Braze/Android.md",sourceDirName:"integrations/Braze",slug:"/integrations/Braze/Android",permalink:"/integrations/Braze/Android",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Braze Integration",permalink:"/integrations/Braze/Overview"},next:{title:"iOS Integration",permalink:"/integrations/Braze/iOS"}},l={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Integrate Bluedot Point SDK in your Project",id:"integrate-bluedot-point-sdk-in-your-project",level:2},{value:"Interaction between Braze SDK and Bluedot Point SDK",id:"interaction-between-braze-sdk-and-bluedot-point-sdk",level:2}],p={toc:d},c="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"android-integration"},"Android Integration"),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"1","."," Modify your\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle"),"\xa0to include Braze SDK."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gradle"},'repositories {\n...\n    maven { \n        url "https://appboy.github.io/appboy-android-sdk/sdk" \n    }\n}\n')),(0,o.kt)("p",null,"Braze supports a few push providers: FCM, GCM, ADM. We recommend using Firebase. However, you can choose other."),(0,o.kt)("p",null,"2",".","\xa0In the app gradle add"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gradle"},'implementation "com.appboy:android-sdk-ui:+"\n')),(0,o.kt)("p",null,"3","."," Create ",(0,o.kt)("inlineCode",{parentName:"p"},"appboy.xml")," under the res folder and add the following code. Create a Braze Android App and get the API key and replace it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"\u201cREPLACE_WITH_YOUR_API_KEY\u201d"),". Also, replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"\u201cYOUR_CUSTOM_ENDPOINT_OR_CLUSTER\u201d")," with the custom endpoint from Braze."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <string name="com_appboy_api_key">REPLACE_WITH_YOUR_API_KEY</string>\n    <string translatable="false" name="com_appboy_custom_endpoint">YOUR_CUSTOM_ENDPOINT_OR_CLUSTER</string>\n    <bool translatable="false" name="com_appboy_firebase_cloud_messaging_registration_enabled">true</bool>\n    <string translatable="false" name="com_appboy_firebase_cloud_messaging_sender_id">your_fcm_sender_id_here</string>\n    <integer name="com_appboy_default_notification_accent_color">0xFFf33e3e</integer>\n    <bool name="com_appboy_handle_push_deep_links_automatically">true</bool>\n</resources>\n')),(0,o.kt)("p",null,"4","."," In the ",(0,o.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," add the following:",(0,o.kt)("br",{parentName:"p"}),"\n","a. The following permissions are required."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />\n<uses-permission android:name="android.permission.INTERNET" />\n<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n')),(0,o.kt)("p",null,"b. The following braze service should be included to handle push receipt and open intents."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<service android:name="com.appboy.AppboyFirebaseMessagingService">\n    <intent-filter>\n        <action android:name="com.google.firebase.MESSAGING_EVENT" />\n    </intent-filter>\n</service>\n')),(0,o.kt)("h2",{id:"integrate-bluedot-point-sdk-in-your-project"},"Integrate Bluedot Point SDK in your Project"),(0,o.kt)("p",null,"To integrate Bluedot Point SDK in your project, please click ",(0,o.kt)("a",{parentName:"p",href:"/Point%20SDK/Android/Quick%20Start"},"here")),(0,o.kt)("h2",{id:"interaction-between-braze-sdk-and-bluedot-point-sdk"},"Interaction between Braze SDK and Bluedot Point SDK"),(0,o.kt)("p",null,"1","."," We need to ask the user to give permission to use the location services. To do that, create a ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestPermissionActivity.kt")," and then add the below code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"internal val PERMISSION_REQUEST_CODE = 1\noverride fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n\n    //Request permission required for location\n    ActivityCompat.requestPermissions(\n        this,\n        arrayOf(Manifest.permission.ACCESS_COARSE_LOCATION, Manifest.permission.ACCESS_FINE_LOCATION),\n        PERMISSION_REQUEST_CODE\n    )\n}\n\noverride fun onRequestPermissionsResult(requestCode: Int, permissions: Array, grantResults: IntArray) {\n    super.onRequestPermissionsResult(requestCode, permissions, grantResults)\n    when (requestCode) {\n        PERMISSION_REQUEST_CODE -> if (grantResults.size > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {\n            (application as MainApplication).initPointSDK()\n\n        } else {\n            //Permissions denied\n\n        }\n    }\n    finish()\n}\n")),(0,o.kt)("p",null,"2","."," We then create another class which will implements Bluedot ",(0,o.kt)("inlineCode",{parentName:"p"},"InitializationResultListener")," and upon SDK initialisation, calls Braze\u2019s changeUser API. To do that create ",(0,o.kt)("inlineCode",{parentName:"p"},"MainApplication.kt")," class and add the below code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MainApplication : Application(), InitializationResultListener {\n\n    private lateinit var mServiceManager: ServiceManager\n    \n    private val projectId = Bluedot Project Id for the App\n\n    override fun onCreate() {\n        super.onCreate()\n\n        registerActivityLifecycleCallbacks(AppboyLifecycleCallbackListener(false, false))\n\n        // initialize Bluedot point sdk\n        initPointSDK()\n    }\n\n    fun initPointSDK() {\n        val checkPermissionFine = \n            ActivityCompat.checkSelfPermission( applicationContext, Manifest.permission.ACCESS_FINE_LOCATION ) \n\n        if (checkPermissionFine == PackageManager.PERMISSION_GRANTED) { \n            mServiceManager = ServiceManager.getInstance(this) \n            if (!mServiceManager.isBluedotServiceInitialized) { \n                mServiceManager.initialize(projectId, this) \n            } \n        } else { \n            requestPermissions() \n        }\n    }\n\n    private fun requestPermissions() {\n        val intent = Intent(applicationContext, RequestPermissionActivity::class.java)\n        intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK\n        startActivity(intent)\n    }\n}    \n")),(0,o.kt)("p",null,"This method is called when BlueDotPointService started successfully, your app logic code using the Bluedot service could start from here. Replace \u201cYOUR_BRAZE_USER_ACCOUNT\u201d with the Braze user account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    override fun onInitializationFinished(error: BDError?) {\n        if (error != null) {\n            Toast.makeText(\n                applicationContext,\n                "Bluedot Point SDK initialization error: ${error.reason}",\n                Toast.LENGTH_LONG\n            ).show()\n            return\n        }\n\n        Appboy.getInstance(this).changeUser(YOUR_BRAZE_USER_ACCOUNT)\n        println("Bluedot Point SDK authenticated")\n    }\n')),(0,o.kt)("p",null,"3","."," Next, we create a class which will receive Bluedot GeoTrigger events, which we will then log the event via the Braze API. To do that create ",(0,o.kt)("inlineCode",{parentName:"p"},"BluedotGeoTriggerReceiver.kt")," class and add the below code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class BluedotGeoTriggerReceiver: GeoTriggeringEventReceiver() {\n    private val customEventEntry = YOUR CUSTOM ENTRY EVENT NAME\n    private val customEventExit =YOUR CUSTOM EXIT EVENT NAME\n\n    override fun onZoneEntryEvent(entryEvent: ZoneEntryEvent, context: Context) {\n        println("Zone ${entryEvent.zoneInfo.zoneName}, fence ${entryEvent.fenceInfo.name} entered at: ${Date()}")\n\n        val eventProperties = AppboyProperties()\n        eventProperties.addProperty("zone_id", entryEvent.zoneInfo.zoneId)\n        eventProperties.addProperty("zone_name", entryEvent.zoneInfo.zoneName)\n        eventProperties.addProperty("latitude", entryEvent.locationInfo.latitude)\n        eventProperties.addProperty("longitude", entryEvent.locationInfo.longitude)\n        eventProperties.addProperty("fence_id", entryEvent.fenceInfo.id)\n        eventProperties.addProperty("fence_name", entryEvent.fenceInfo.name)\n\n        entryEvent.zoneInfo.getCustomData()?.forEach { data ->\n            eventProperties.addProperty(data.key, data.value)\n        }\n\n        Appboy.getInstance(context).logCustomEvent(customEventEntry, eventProperties)\n    }\n\n    override fun onZoneExitEvent(exitEvent: ZoneExitEvent, context: Context) {\n        println("Zone ${exitEvent.zoneInfo.zoneName}, fence ${exitEvent.fenceInfo.name} exited at: ${Date()}")\n\n        val eventProperties = AppboyProperties()\n        eventProperties.addProperty("zone_id", exitEvent.zoneInfo.zoneId)\n        eventProperties.addProperty("zone_name", exitEvent.zoneInfo.zoneName)\n        eventProperties.addProperty("dwellTime", exitEvent.dwellTime)\n        eventProperties.addProperty("fence_id", exitEvent.fenceInfo.id)\n        eventProperties.addProperty("fence_name", exitEvent.fenceInfo.name)\n\n        exitEvent.zoneInfo.getCustomData()?.forEach { data ->\n            eventProperties.addProperty(data.key, data.value)\n        }\n\n        Appboy.getInstance(context).logCustomEvent(customEventExit, eventProperties)\n    }\n\n    override fun onZoneInfoUpdate(zones: List<ZoneInfo>, context: Context) {\n        println("Zones updated at: ${Date()} \\nZoneInfos count: ${zones.count()}")\n    }\n}\n')))}u.isMDXComponent=!0}}]);