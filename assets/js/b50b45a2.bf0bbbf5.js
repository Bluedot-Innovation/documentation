"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[1706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(v,o(o({ref:t},p),{},{components:n})):a.createElement(v,o({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o="Android -  Quick start",l={unversionedId:"Point SDK/Xamarin/Android",id:"Point SDK/Xamarin/Android",title:"Android -  Quick start",description:"In order to successfully integrate the Xamarin wrapper for Point SDK, you would require a Bluedot account. Please contact our sales team by requesting a\xa0demo. \xa0Also, ensure that you also meet the\xa0Android requirements.",source:"@site/docs/Point SDK/Xamarin/Android.md",sourceDirName:"Point SDK/Xamarin",slug:"/Point SDK/Xamarin/Android",permalink:"/documentation/Point SDK/Xamarin/Android",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/documentation/Point SDK/Xamarin/Overview"},next:{title:"iOS \u2013 Quick start",permalink:"/documentation/Point SDK/Xamarin/iOS"}},s={},c=[{value:"Step 1: Creating the Xamarin Android project",id:"step-1-creating-the-xamarin-android-project",level:2},{value:"Step 2: Add Bluedot.PointSDK.Android package",id:"step-2-add-bluedotpointsdkandroid-package",level:2},{value:"Step 3: Minimal Point SDK Integration",id:"step-3-minimal-point-sdk-integration",level:2},{value:"Step 4: Next Steps",id:"step-4-next-steps",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"android----quick-start"},"Android -  Quick start"),(0,r.kt)("p",null,"In order to successfully integrate the Xamarin wrapper for Point SDK, you would require a Bluedot account. Please contact our sales team by requesting a\xa0",(0,r.kt)("a",{parentName:"p",href:"https://bluedot.io/contact-us/"},"demo"),". \xa0Also, ensure that you also meet the\xa0",(0,r.kt)("a",{parentName:"p",href:"/documentation/Point%20SDK/Android/Quick%20Start"},"Android requirements"),"."),(0,r.kt)("p",null,"The Bluedot Point SDK enables geolocation capability for apps by delivering accurate location awareness, while substantially reducing battery consumption compared to Android Location API or other standard methods. The Point SDK connects to the Bluedot\u2019s backend system, Canvas, to download your pre-configured Geofences, GEOLINE\u2122, conditions, and actions."),(0,r.kt)("p",null,"The Point SDK enables rapid development of location-aware apps. It delivers precise location awareness to the mobile application, but without the usual battery drain\xa0that would typically occur. There\u2019s also no need for additional hardware, making it highly scalable.\xa0This means the Point SDK enables location-based apps and experiences that were previously impossible. The rest is up to you."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"step-1-creating-the-xamarin-android-project"},"Step 1: Creating the Xamarin Android project"),(0,r.kt)("p",null,"Create the Xamarin Android project:"),(0,r.kt)("p",null,"1","."," Note: Ensure that your Visual Studio version is at least 15.3."),(0,r.kt)("p",null,"2","."," Start a new Xamarin Visual Studio solution, select\xa0",(0,r.kt)("strong",{parentName:"p"},"Android App"),"\xa0template and click Next."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://bluedot.lionwood.software/wp-content/uploads/2018/01/Create_New_Android_App_Solution.png",alt:null})),(0,r.kt)("p",null,"3.\xa0Enter an App Name, Organization Name. Select Modern Development as target platforms and click Next."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://bluedot.lionwood.software/wp-content/uploads/2018/01/Configure_Android_App.png",alt:null})),(0,r.kt)("p",null,"4.\xa0Choose a folder to save the project (e.g. \u2018Projects\u2019) and select \u2018",(0,r.kt)("strong",{parentName:"p"},"Create"),"\u2019."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://bluedot.lionwood.software/wp-content/uploads/2018/01/Configure_Android_App_Location.png",alt:null})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"step-2-add-bluedotpointsdkandroid-package"},"Step 2: Add Bluedot.PointSDK.Android package"),(0,r.kt)("p",null,"1","."," Right-click on Packages folder, select \u2018",(0,r.kt)("em",{parentName:"p"},"Add Packages\u2026"),"\u2018. In the search box type Bluedot."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5408).Z,width:"300",height:"197"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"step-3-minimal-point-sdk-integration"},"Step 3: Minimal Point SDK Integration"),(0,r.kt)("p",null,"1.\xa0Declare an instance of\xa0",(0,r.kt)("strong",{parentName:"p"},"ServiceManager"),"\xa0class, which is the entry point for an app to start using Point SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace appname\n{\n    [Activity(Label = "appname", MainLauncher = true, Icon = "@mipmap/icon")]\n    public class MainActivity : Activity\n    {\n        ServiceManager serviceManager;\n        ...\n    }\n}\n')),(0,r.kt)("p",null,"2","."," Instantiate the\xa0",(0,r.kt)("strong",{parentName:"p"},"ServiceManager"),"\xa0singleton object and invoke\xa0",(0,r.kt)("strong",{parentName:"p"},"initialize()"),"\xa0function inside\xa0",(0,r.kt)("strong",{parentName:"p"},"OnCreate()"),"\xa0by passing the ",(0,r.kt)("em",{parentName:"p"},"projectId")," and\xa0implementation of\xa0",(0,r.kt)("strong",{parentName:"p"},"IInitializationResultListener")," for Initiliazing Bluedot SDK as below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace appname\n{\n    \\[Activity(Label \\= "appname", MainLauncher \\= true, Icon \\= "@mipmap/icon")\\]\n    public class MainActivity : Activity, IInitializationResultListener\n    {\n        ServiceManager serviceManager;\n        ...\n \n        protected override void OnCreate(Bundle savedInstanceState)\n        {\n            ...\n\n          ServiceManager.getInstance(this).initialize("myProjectId", this);\n            ...\n\n        } \n       \n       public void OnInitializationFinished(BDError error)\n       {\n         // Implement this function to receive Initialization status\n         // error is reported if initialization is not success // otherwise error is null\n       }\n\n      ... \n      }\n }\n')),(0,r.kt)("p",null,"3","."," Extend BroadcastReceivers as ",(0,r.kt)("strong",{parentName:"p"},"GeoTriggeringEventReceiver,\xa0TempoTrackingReceiver"),"\xa0and ",(0,r.kt)("strong",{parentName:"p"},"BluedotServiceReceiver"),"\xa0to receive GeoTriggering callbacks, Tempo and Bluedot service error callbacks. Implement the functions of the classes as below:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Point SDK Broadcast Receivers and Callbacks")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace yourappname\n{\n [BroadcastReceiver(Enabled = true)]\n [IntentFilter(new[] { "io.bluedot.point.GEOTRIGGER" })]\n public class AppGeoTriggerReceiver : GeoTriggeringEventReceiver\n {\n    public override void OnZoneEntryEvent(ZoneEntryEvent entryEvent, Context context)\n    {\n      // This method will be called if the device entered into a Fence \n    }\n\n    public override void OnZoneExitEvent(ZoneExitEvent exitEvent, Context context)\n    {\n      // This method will be called when a device exits the Fence for which OnZoneEntryEvent was reported.\n      // Only applies to zones flagged as Exit enabled on Canvas\n    }\n\n   public override void OnZoneInfoUpdate(IList<ZoneInfo> zones, Context context)\n   {\n     //Passively receive Zones information \n   }\n }\n\n[BroadcastReceiver(Enabled = true)]\n[IntentFilter(new[] { "io.bluedot.point.TEMPO" })]\npublic class AppTempoReceiver : TempoTrackingReceiver\n{\n  public override void TempoStoppedWithError(BDError error, Context context)\n  {\n    // If Tempo tracking is stopped due to some Error\n    // Human-readable string of error.getReason() can be useful to analyse the cause of the error.\xa0\n  }\n}\n\n[BroadcastReceiver(Enabled = true)]\n[IntentFilter(new[] { "io.bluedot.point.SERVICE" })]\npublic class BluedotErrorReceiver : BluedotServiceReceiver\n{\n  public override void OnBluedotServiceError(BDError error, Context context)\n  {\n    // This gives you details if BlueDotPointService encounters error. \n    // Human-readable string of error.getReason() can be useful to analyse the cause of the error.\xa0\n  }\n }\n}\n')),(0,r.kt)("p",null,"4 (Optional). You can use the ",(0,r.kt)("strong",{parentName:"p"},"SetCustomEventMetaData()")," method to pass additional event-specific metadata to our Check-in and/or Check-out Notifications which is sent to our servers. Make sure to set this MetaData before calling the ",(0,r.kt)("em",{parentName:"p"},"initialize()"),". Learn more about the Custom Event Metadata ",(0,r.kt)("a",{parentName:"p",href:"/documentation/Custom%20Event%20Metadata"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace appname\n{\n    [Activity(Label = "appname", MainLauncher = true, Icon = "@mipmap/icon")]\n    public class MainActivity : Activity,...\n    {\n        ServiceManager serviceManager;\n        ... \n      \n        protected override void OnCreate(Bundle savedInstanceState)\n        {\n            ...\n            serviceManager = ServiceManager.GetInstance(this);\n            // Set CustomEventMetadata \n            IDictionary<string, string> keyValuePairs = new Dictionary<string, string>(); \n            keyValuePairs.Add("store_id", "1234"); \n            keyValuePairs.Add("user_id", "3456"); \n            serviceManager.SetCustomEventMetaData(keyValuePairs); \n            ...\n        } \n       ...\n    }\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"step-4-next-steps"},"Step 4: Next Steps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Essential Guides:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For a list of detailed Android Features, please refer to the documentation section on\xa0",(0,r.kt)("a",{parentName:"li",href:"/documentation/Point%20SDK/Android/Features/Enable%20or%20disable%20zones"},"Android \u2013 Features")),(0,r.kt)("li",{parentName:"ul"},"To avoid unexpected behaviour in the app, it is highly recommended to read\xa0",(0,r.kt)("a",{parentName:"li",href:"/documentation/Point%20SDK/Android/Caveats"},"Android \u2013 Caveats")),(0,r.kt)("li",{parentName:"ul"},"For interacting with our Canvas backend, please refer to the documentation on\xa0",(0,r.kt)("a",{parentName:"li",href:"/documentation/Point%20SDK/Android/Quick%20Start"},"Android \u2013 Quick Start"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Xamarin Android integration examples on GitHub"),"\xa0"),(0,r.kt)("p",null,"You can refer to Xamarin Android integration examples via the link below:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/Bluedot-Innovation/PointSDK-Xamarin-minimal-app-Android",title:"GitHub Examples"},"GitHub Examples"))),(0,r.kt)("p",null,"API Documentation can be assessed via the link below:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://android-docs.bluedot.io/-bluedot-s-d-k/index.html",title:"API Documentation"},"API Documentation"))))}u.isMDXComponent=!0},5408:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screen-Shot-2021-02-04-at-2.21.38-pm-300x197-7f81226cc2749443211a851c6ee5d2a9.png"}}]);