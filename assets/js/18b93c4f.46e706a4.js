"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[1362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(k,r(r({ref:t},c),{},{components:n})):i.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const o={pagination_next:null},r="iOS \u2013 Quick start",l={unversionedId:"versions/Point SDK 15/Xamarin/iOS",id:"versions/Point SDK 15/Xamarin/iOS",title:"iOS \u2013 Quick start",description:"In order to successfully integrate the Xamarin wrapper for Point SDK, you would require a Bluedot account. Please contact our sales team by requesting for a\xa0demo.\xa0 Please also ensure that you also meet the\xa0iOS requirements.",source:"@site/docs/versions/Point SDK 15/Xamarin/iOS.md",sourceDirName:"versions/Point SDK 15/Xamarin",slug:"/versions/Point SDK 15/Xamarin/iOS",permalink:"/versions/Point SDK 15/Xamarin/iOS",draft:!1,tags:[],version:"current",frontMatter:{pagination_next:null}},p={},s=[{value:"Step 1: Creating the Xamarin iOS project",id:"step-1-creating-the-xamarin-ios-project",level:2},{value:"Step 2: Add Bluedot.PointSDK.iOS package",id:"step-2-add-bluedotpointsdkios-package",level:2},{value:"Step 3: Configure the Xamarin Project Solution",id:"step-3-configure-the-xamarin-project-solution",level:2},{value:"Step 4: Configure the info.plist settings",id:"step-4-configure-the-infoplist-settings",level:2},{value:"Step 5: Integration Checklist",id:"step-5-integration-checklist",level:2},{value:"Step 6: Next Steps",id:"step-6-next-steps",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ios--quick-start"},"iOS \u2013 Quick start"),(0,a.kt)("p",null,"In order to successfully integrate the Xamarin wrapper for Point SDK, you would require a Bluedot account. Please contact our sales team by requesting for a\xa0",(0,a.kt)("a",{parentName:"p",href:"https://bluedot.io/contact-us/"},"demo"),".\xa0 Please also ensure that you also meet the\xa0",(0,a.kt)("a",{parentName:"p",href:"/versions/Point%20SDK%2015/iOS/Quick%20Start"},"iOS requirements"),"."),(0,a.kt)("p",null,"The Bluedot Point SDK enables geo-location capability for apps by delivering accurate location awareness, while substantially reducing battery consumption compared to Android Location API or other standard methods. The Point SDK connects to the Bluedot\u2019s backend system, Canvas, to download your pre-configured Geofences, GEOLINE\u2122, Bluetooth Beacons, conditions, and actions."),(0,a.kt)("p",null,"The Point SDK enables rapid development of location-aware apps. It delivers precise location awareness to the mobile application, but without the usual battery drain\xa0that would typically occur. There\u2019s also no need for additional hardware, making it highly scalable.\xa0This means the Point SDK enables location-based apps and experiences that were previously impossible. The rest is up to you."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"step-1-creating-the-xamarin-ios-project"},"Step 1: Creating the Xamarin iOS project"),(0,a.kt)("p",null,"Create the Xamarin iOS project:"),(0,a.kt)("p",null,"1","."," Note: Ensure that your Visual Studio version is at least 15.3, and your Xamarin.iOS version is 10.12.0.18 or greater."),(0,a.kt)("p",null,"2","."," Start a new Xamarin Visual Studio project, using whichever template is appropriate for the app. The following example uses \u2018",(0,a.kt)("strong",{parentName:"p"},"Single View App"),"\u2018 for simplicity:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://bluedot.lionwood.software/wp-content/uploads/2018/01/New_Project.png",alt:null})),(0,a.kt)("p",null,"3.\xa0Enter a Product Name, Solution Name, and other required details."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://bluedot.lionwood.software/wp-content/uploads/2018/01/New_Project-2.png",alt:null})),(0,a.kt)("p",null,"4.\xa0Choose a folder to save the project (e.g. \u2018Projects\u2019) and select \u2018",(0,a.kt)("strong",{parentName:"p"},"Create"),"\u2019."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"step-2-add-bluedotpointsdkios-package"},"Step 2: Add Bluedot.PointSDK.iOS package"),(0,a.kt)("p",null,"Right click on Packages folder, select \u2018",(0,a.kt)("em",{parentName:"p"},"Add Packages\u2026"),"\u2018. In the search box type Bluedot."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(30650).Z,width:"1024",height:"678"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"step-3-configure-the-xamarin-project-solution"},"Step 3: Configure the Xamarin Project Solution"),(0,a.kt)("p",null,"Follow the steps below to configure the Xamarin Project Options"),(0,a.kt)("p",null,"1","."," Go to \u2018",(0,a.kt)("em",{parentName:"p"},"Project"),"\u2018 in the menu bar, and select\xa0",(0,a.kt)("em",{parentName:"p"},"Project Option"),", in our example here its \u2018",(0,a.kt)("em",{parentName:"p"},"BDHelloPointSDK Options"),"\u2018."),(0,a.kt)("p",null,"2","."," Select\xa0",(0,a.kt)("em",{parentName:"p"},"\u2018iOS Build"),"\u2018 on the left pane."),(0,a.kt)("p",null,"3","."," In the Linker behavior, select \u2018",(0,a.kt)("em",{parentName:"p"},"Link Framework SDKs Only"),"\u2018."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://bluedot.lionwood.software/wp-content/uploads/2018/01/Project_Options_%E2%80%93_BDHelloPointSDK.png",alt:null})),(0,a.kt)("p",null,"4.\xa0Bitcode was introduced in iOS 9 for App thinning. Point SDK is compatible with iOS versions prior to this and can therefore not be built with Bitcode enabled. This entails that an app utilizing Point SDK must have Bitcode set to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"NO"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"step-4-configure-the-infoplist-settings"},"Step 4: Configure the info.plist settings"),(0,a.kt)("p",null,"Follow the steps below to configure the info.plist settings:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.\xa0Device capabilities")),(0,a.kt)("p",null,"Point SDK requires Location Services with GPS accuracy to operate as intended. This should be declared in the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"info.plist"),"\xa0of any integrating app."),(0,a.kt)("p",null,"To declare the requirement:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Locate the app\u2019s\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"info.plist"),"\xa0file."),(0,a.kt)("li",{parentName:"ol"},"In the \u2018",(0,a.kt)("em",{parentName:"li"},"Source"),"\u2018 tab of info.plist, find the existing entry titled \u2018",(0,a.kt)("strong",{parentName:"li"},"Required Device Capabilities"),"\u2019 or create one if it does not exist."),(0,a.kt)("li",{parentName:"ol"},"Select the (+) icon to add new Item lines containing the following values:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"gps")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"location-services")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"accelerometer"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2","."," Required background modes")),(0,a.kt)("p",null,"Point SDK requires access to location updates at all times (including when the app is in the background)."),(0,a.kt)("p",null,"Apple has restricted the ability of apps to execute in the background to reduce battery consumption. As part of iOS 4.0, Apple introduced a number of managed background execution modes, including delivery of location updates while in the background."),(0,a.kt)("p",null,"To declare the background execution modes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Locate the app\u2019s\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"info.plist"),"\xa0file."),(0,a.kt)("li",{parentName:"ol"},"In the \u2018",(0,a.kt)("em",{parentName:"li"},"Source"),"\u2018 tab of info.plist, find an existing entry titled \u2018",(0,a.kt)("strong",{parentName:"li"},"Required background modes"),"\u2018 or create one if it does not exist."),(0,a.kt)("li",{parentName:"ol"},"Select the (+) icon and select from the drop-down list provided:\xa0",(0,a.kt)("strong",{parentName:"li"},"App registers for location updates"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3","."," Required background updates description")),(0,a.kt)("p",null,"Starting from iOS 8, a usage description is required when utilizing Location services; this is also provided in\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"info.plist")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Locate the app\u2019s\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"info.plist"),"\xa0file."),(0,a.kt)("li",{parentName:"ol"},"In the \u2018",(0,a.kt)("em",{parentName:"li"},"Source"),"\u2018 tab of info.plist,\xa0find an existing entry titled \u2018",(0,a.kt)("strong",{parentName:"li"},"NSLocationAlwaysUsageDescription"),"\u2018\xa0or create one if it does not exist."),(0,a.kt)("li",{parentName:"ol"},"Select the type of\xa0String."),(0,a.kt)("li",{parentName:"ol"},"Enter a usage description that denotes the use of location services by your app.\xa0For example,\xa0",(0,a.kt)("strong",{parentName:"li"},"Your location is used by the app to get you deals closer to you while in the background"),"\xa0(This message will be prompted to the user when location services are first requested).")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4","."," (Optional) Local Notification Permission Prompt")),(0,a.kt)("p",null,"The Local Notification Permission Prompt is enabled by default to make sure the SDK delivers local notifications for the \u2018Message Action\u2019 or/and \u2018URL Action\u2019 set on a Zone through the Canvas dashboard."),(0,a.kt)("p",null,"Optional: To disable the notification permission prompt, the following key should be declared in the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"info.plist"),"\xa0of any integrating app."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Locate the app\u2019s\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"info.plist"),"\xa0file"),(0,a.kt)("li",{parentName:"ol"},"Select the (+) icon to add a new key\xa0BDPointLocalNotificationEnabled, and set the value to\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"Boolean"),"\xa0Type.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"set the value to\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"YES"),"\xa0to enable default notification prompt."),(0,a.kt)("li",{parentName:"ol"},"set the value to\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"NO"),"\xa0to disable default notification prompt.")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"step-5-integration-checklist"},"Step 5: Integration Checklist"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.\xa0Xcode Project Configuration Checklist")),(0,a.kt)("p",null,"The following is a checklist of the project configurations that must be made for successful integration of Point SDK into an app."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The following keys are added to the UIRequiredDeviceCapabilities section of the\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"info.plist"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"location-services")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"accelerometer")))),(0,a.kt)("li",{parentName:"ul"},"The following keys are added to the UIBackgroundModes section of the\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"info.plist"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"location")))),(0,a.kt)("li",{parentName:"ul"},"The following key is added the Information Property List in the\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"info.plist"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NSLocationAlwaysUsageDescription"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Type: String"),(0,a.kt)("li",{parentName:"ul"},"A description of the usage of location services by your app in the Value field."))))),(0,a.kt)("li",{parentName:"ul"},"The Linker behavior is set to \u2018",(0,a.kt)("em",{parentName:"li"},"Link Framework SDK only"),"\u2018.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2","."," Source Checklist")),(0,a.kt)("p",null,"The following is a checklist of the source code implementations that will assist in making a successful integration of Point SDK into an app."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implement the\xa0IBDPGeoTriggeringEventDelegate\xa0or IBDPTempoDelegate"),(0,a.kt)("li",{parentName:"ul"},"Assign an object implementing the protocols to a class (for example,\xa0AppDelegate)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"BDLocationManager.Instance().GeoTriggeringEventDelegate = myDelegateImplementation;\nBDLocationManager.Instance().TempoTrackingDelegate = myDelegateImplementation;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3","."," iOS Caveats")),(0,a.kt)("p",null,"To avoid unexpected behavior in the app, implementations of the following two selectors\xa0must\xa0be present in the\xa0",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/ios/documentation/uikit/reference/uiapplicationdelegate_protocol/Reference/Reference.html"},"Application Delegate"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public override void DidEnterBackground(UIApplication application){ ... }\npublic override void WillEnterForeground(UIApplication application){ ... }\npublic override void OnResignActivation(UIApplication application){ ... }\n")),(0,a.kt)("p",null,"If these are removed or missing for any reason, then an \u201c",(0,a.kt)("inlineCode",{parentName:"p"},"unrecognized selector sent to instance"),"\u201d error will occur at Runtime."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"step-6-next-steps"},"Step 6: Next Steps"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Essential Guides:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For a list of detailed iOS Features, please refer to the documentation section on\xa0",(0,a.kt)("a",{parentName:"li",href:"/versions/Point%20SDK%2015/iOS/Features/App%20restart%20notification"},"iOS \u2013 Features")),(0,a.kt)("li",{parentName:"ul"},"For interacting with our Canvas backend, please refer to the documentation on\xa0",(0,a.kt)("a",{parentName:"li",href:"/versions/Point%20SDK%2015/iOS/Quick%20Start"},"iOS \u2013 Quick Start"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Xamarin iOS integration examples on GitHub"),"\xa0"),(0,a.kt)("p",null,"You can refer to Xamarin iOS integration examples via the link below:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/Bluedot-Innovation",title:"GitHub Examples"},"GitHub Examples"))),(0,a.kt)("p",null,"API Documentation can be assessed via the link below:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://ios-docs.bluedot.io",title:"API Documentation"},"API Documentation"))))}d.isMDXComponent=!0},30650:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Xamarin-ios-nugget-d064576b2547aa32a79d036a93ff84ee.png"}}]);