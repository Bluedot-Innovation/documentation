"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[8562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},76812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="iOS Integration",l={unversionedId:"integrations/CleverTap/iOS",id:"integrations/CleverTap/iOS",title:"iOS Integration",description:"Getting started",source:"@site/docs/integrations/CleverTap/iOS.md",sourceDirName:"integrations/CleverTap",slug:"/integrations/CleverTap/iOS",permalink:"/integrations/CleverTap/iOS",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Android Integration",permalink:"/integrations/CleverTap/Android"},next:{title:"Flipdish Integration",permalink:"/integrations/Flipdish"}},p={},s=[{value:"Getting started",id:"getting-started",level:2},{value:"Integrate your project with Bluedot Point SDK",id:"integrate-your-project-with-bluedot-point-sdk",level:2},{value:"Integrate your project with CleverTap SDK",id:"integrate-your-project-with-clevertap-sdk",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ios-integration"},"iOS Integration"),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"This documentation depends on Bluedot PointSDK and CleverTap SDK. Both dependencies can be managed by CocoaPods or Carthage."),(0,a.kt)("h2",{id:"integrate-your-project-with-bluedot-point-sdk"},"Integrate your project with Bluedot Point SDK"),(0,a.kt)("p",null,"You can find detailed instructions\xa0",(0,a.kt)("a",{parentName:"p",href:"/Point%20SDK/iOS/Overview"},"here")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import BDPointSDK to your class:",(0,a.kt)("inlineCode",{parentName:"p"},"import BDPointSDK"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Implement Bluedot\xa0",(0,a.kt)("a",{parentName:"p",href:"https://ios-docs.bluedot.io/Protocols/BDPGeoTriggeringEventDelegate.html"},(0,a.kt)("inlineCode",{parentName:"a"},"BDPGeoTriggeringEventDelegate")),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"extension YourClass: BDPGeoTriggeringEventDelegate {\n\n    func didEnterZone(_ enterEvent: BDZoneEntryEvent) {\n        // Your logic when the device enters a Bluedot Zone\n\n    }\n\n    func didExitZone(_ exitEvent: BDZoneExitEvent) {\n        // Your logic when the device leaves a Bluedot Zone\n\n    }\n\n}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Assign GeoTriggeringEvent delegate with your implementation"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let instanceOfYourClass = YourClass()\nBDLocationManager.instance()?.geoTriggeringEventDelegate = instanceOfYourClass\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Authenticate with the Bluedot services"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'BDLocationManager.instance()?.initialize(withProjectId: projectId){ error in\n \xa0 \xa0 guard error == nil else {\n        print("There was an error initializing the Bluedot SDK: \\(error.localizedDescription)")\n        return\n     }\n}\n')))),(0,a.kt)("h2",{id:"integrate-your-project-with-clevertap-sdk"},"Integrate your project with CleverTap SDK"),(0,a.kt)("p",null,"Import CleverTap-iOS-SDK to your class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"import CleverTapSDK\n")),(0,a.kt)("p",null,"Add CleverTap credentials to associate your iOS app with your CleverTap account, you will need to add your CleverTap credentials in the Info.plist file in your application. For more information on integrating CleverTap SDK, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://developer.clevertap.com/docs/ios-quickstart-guide"},"CleverTap Developer Documentation")),(0,a.kt)("p",null,"Then start CleverTap within the ",(0,a.kt)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'CleverTap.autoIntegrate()\n\n// Track CleverTap custom events in your Bluedot Entry / Exit events.\n\nfunc didEnterZone(_ enterEvent: BDZoneEntryEvent) {\n\xa0 \xa0 \xa0 \xa0 // Name the custom event\n\xa0 \xa0 \xa0 \xa0 let customEventName = YOUR CUSTOM EVEN NAME\n\n\xa0 \xa0 \xa0 \xa0 // Map the Location and Zone attributes into a properties dictionary\n\xa0 \xa0 \xa0 \xa0 var properties = [\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 "bluedot_zone_id": "\\(enterEvent.zone().id!)",\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 "bluedot_zone_name": "\\(enterEvent.zone().name!)"\n\xa0 \xa0 \xa0 \xa0 ]\n\n\xa0 \xa0 \xa0 \xa0 // Map the Custom Data attributes into properties\n\xa0 \xa0 \xa0 \xa0 if let custData = enterEvent.zone().customData, !custData.isEmpty {\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 custData.forEach { data in properties["\\(data.key)"] = "\\(data.value)"}\n\xa0 \xa0 \xa0 \xa0 }\n\xa0\xa0 \xa0 \xa0 \xa0\n\xa0 \xa0 \xa0 \xa0 // Log the Custom Event in CleverTap\n\xa0 \xa0 \xa0 \xa0 CleverTap.sharedInstance()?.recordEvent(customEventName, withProps: properties)\n\xa0 \xa0 }\n')))}d.isMDXComponent=!0}}]);