"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[3970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="iOS Integration",p={unversionedId:"integrations/Braze/iOS",id:"integrations/Braze/iOS",title:"iOS Integration",description:"Table of Contents",source:"@site/docs/integrations/Braze/iOS.md",sourceDirName:"integrations/Braze",slug:"/integrations/Braze/iOS",permalink:"/integrations/Braze/iOS",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Android Integration",permalink:"/integrations/Braze/Android"},next:{title:"Overview",permalink:"/integrations/CleverTap/Overview"}},l={},s=[{value:"Integrate your project with Bluedot Point SDK",id:"integrate-your-project-with-bluedot-point-sdk",level:2},{value:"Integrate your project with Appboy SDK",id:"integrate-your-project-with-appboy-sdk",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ios-integration"},"iOS Integration"),(0,o.kt)("h1",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Getting started",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Integrate your project with Bluedot Point SDK"),(0,o.kt)("li",{parentName:"ul"},"Integrate your project with Braze\u2019s Appboy SDK"))),(0,o.kt)("li",{parentName:"ul"},"Interaction between Appboy SDK and Bluedot Point SDK",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Start Appboy SDK Services"),(0,o.kt)("li",{parentName:"ul"},"Setup Bluedot Location Services")))),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"This documentation depends on BluedotPointSDK and Appboy-iOS-SDK. Both dependencies can be managed by CocoaPods."),(0,o.kt)("h2",{id:"integrate-your-project-with-bluedot-point-sdk"},"Integrate your project with Bluedot Point SDK"),(0,o.kt)("p",null,"You can find detailed instructions\xa0",(0,o.kt)("a",{parentName:"p",href:"/Point%20SDK/iOS/Quick%20Start"},"here")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Import BDPointSDK to your class:",(0,o.kt)("inlineCode",{parentName:"p"},"import BDPointSDK"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Implement Bluedot\xa0",(0,o.kt)("a",{parentName:"p",href:"https://ios-docs.bluedot.io/Protocols/BDPGeoTriggeringEventDelegate.html"},(0,o.kt)("inlineCode",{parentName:"a"},"BDPGeoTriggeringEventDelegate")),":"),(0,o.kt)("p",{parentName:"li"},"// Swift\nextension YourClass: BDPGeoTriggeringEventDelegate {"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"func didEnterZone(\\_ enterEvent: BDZoneEntryEvent) {\n    // Your logic when the device enters a Bluedot Zone\n}\n\n func didExitZone(\\_ exitEvent: BDZoneExitEvent) {\n    // Your logic when the device leaves a Bluedot Zone\n }\n")),(0,o.kt)("p",{parentName:"li"},"}")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Assign GeoTriggeringEvent delegate with your implementation"),(0,o.kt)("p",{parentName:"li"},"// Swift\nlet instanceOfYourClass \\= YourClass()\n",(0,o.kt)("a",{parentName:"p",href:"https://ios-docs.bluedot.io/Classes/BDLocationManager.html"},"BDLocationManager"),".instance()?.geoTriggeringEventDelegate \\= instanceOfYourClass")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Authenticate with the Bluedot services"),(0,o.kt)("p",{parentName:"li"},"// Swift"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://ios-docs.bluedot.io/Classes/BDLocationManager.html"},"BDLocationManager"),".instance()?.",(0,o.kt)("a",{parentName:"p",href:"https://ios-docs.bluedot.io/Classes/BDLocationManager.html#/c:objc(cs)BDLocationManager(im)initializeWithProjectId:completion:"},"initialize"),'(withProjectId: projectId){ error in\n\xa0 \xa0 guard error \\== nil else {\nprint("There was an error initializing the Bluedot SDK: ',"\\",'(error.localizedDescription)")\nreturn\n}\n}'))),(0,o.kt)("h2",{id:"integrate-your-project-with-appboy-sdk"},"Integrate your project with Appboy SDK"),(0,o.kt)("p",null,"Import Appboy-iOS-SDK to your class"),(0,o.kt)("p",null,"// Swift\nimport Appboy","_","iOS","_","SDK"),(0,o.kt)("p",null,"Start Appboy-iOS-SDK within the ",(0,o.kt)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions")," method.",(0,o.kt)("br",{parentName:"p"}),"\n","For further information refer to ",(0,o.kt)("a",{parentName:"p",href:"https://www.braze.com/docs/developer_guide/platform_integration_guides/ios/initial_sdk_setup/"},"Braze Developer Documentation")),(0,o.kt)("p",null,'// Swift\nAppboy.start(withApiKey: "Your assigned Braze API Key", in: application, withLaunchOptions: launchOptions)'),(0,o.kt)("p",null,"Track Braze custom events in your Bluedot Entry / Exit events."),(0,o.kt)("p",null,"func didEnterZone(","_",' enterEvent: BDZoneEntryEvent) {\n// Name the custom event let customEventName \\= "bluedot',"_",'entry"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Map the Location and Bluedot Zone attributes into a properties dictionary\n\nvar properties \\= \\[\n")),(0,o.kt)("p",null,'\xa0 \xa0 \xa0 \xa0 "zone',"_",'id": "',"\\",'(enterEvent.zone().id!)",\n\xa0 \xa0 \xa0 \xa0 "zone',"_",'name": "',"\\",'(enterEvent.zone().name!)",\n\xa0 \xa0 \xa0 \xa0 "latitude": "',"\\",'(enterEvent.location.latitude)",\n\xa0 \xa0 \xa0 \xa0 "longitude": "',"\\",'(enterEvent.location.longitude)",\n\xa0 \xa0 \xa0 \xa0 "speed": "',"\\",'(enterEvent.location.speed)",\n\xa0 \xa0 \xa0 \xa0 "bearing": "',"\\",'(enterEvent.location.bearing)",\n\xa0 \xa0 \xa0 \xa0 "timestamp": "',"\\",'(enterEvent.location.timestamp!)"\n\xa0 \xa0 ',"]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Map the Custom Data attributes into properties\n\nif let customData \\= enterEvent.zone().customData, !customData.isEmpty {\n")),(0,o.kt)("p",null,"\xa0 \xa0 \xa0 \xa0 customData.forEach { data in properties","[",'"',"\\",'(data.key)"',"]",' \\= "',"\\",'(data.value)"}\n\xa0 \xa0 }'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Log the Custom Event in Appboy\nAppboy.sharedInstance()?.logCustomEvent(customEventName, withProperties: properties )\n")),(0,o.kt)("p",null,"}"),(0,o.kt)("p",null,"func didCheckOut(","_",' exitEvent: BDZoneExitEvent) {\n// Name the custom event\nlet customEventName \\= "bluedot',"_",'exit"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Map the Zone attributes into a properties dictionary\n\nvar properties \\= \\[\n")),(0,o.kt)("p",null,'\xa0 \xa0 \xa0 \xa0 "zone',"_",'id": "',"\\",'(exitEvent.zone().id!)",\n\xa0 \xa0 \xa0 \xa0 "zone',"_",'name": "',"\\",'(exitEvent.zone().name!)",\n\xa0 \xa0 \xa0 \xa0 "timestamp": "',"\\",'(exitEvent.date)",\n\xa0 \xa0 \xa0 \xa0 "checkedInDuration": "',"\\",'(exitEvent.duration)"\n\xa0 \xa0 ',"]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Map the Custom Data attributes into properties\n")),(0,o.kt)("p",null,"\xa0 \xa0 if let customData \\= exitEvent.zone().customData, !customData.isEmpty {\n\xa0 \xa0 \xa0 \xa0 customData.forEach { data in properties","[",'"',"\\",'(data.key)"',"]",' \\= "',"\\",'(data.value)"}\n\xa0 \xa0 }'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Log the Custom Event in Appboy\nAppboy.sharedInstance()?.logCustomEvent(customEventName, withProperties: properties );\n")),(0,o.kt)("p",null,"}"))}d.isMDXComponent=!0}}]);