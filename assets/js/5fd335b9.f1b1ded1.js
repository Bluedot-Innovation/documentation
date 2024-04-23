"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[7431],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="Tempo",p={unversionedId:"Point SDK/iOS/Tempo",id:"Point SDK/iOS/Tempo",title:"Tempo",description:"Tempo allows active tracking of a user\u2019s location, as well as live ETA estimation.",source:"@site/docs/Point SDK/iOS/Tempo.md",sourceDirName:"Point SDK/iOS",slug:"/Point SDK/iOS/Tempo",permalink:"/Point SDK/iOS/Tempo",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Geo-triggering",permalink:"/Point SDK/iOS/Geo-triggering"},next:{title:"App restart notification",permalink:"/Point SDK/iOS/Features/App restart notification"}},l={},c=[{value:"Start Tempo",id:"start-tempo",level:2},{value:"Receiving Tempo events",id:"receiving-tempo-events",level:2},{value:"Stop Tempo",id:"stop-tempo",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tempo"},"Tempo"),(0,o.kt)("p",null,"Tempo allows active tracking of a user\u2019s location, as well as live ETA estimation."),(0,o.kt)("h2",{id:"start-tempo"},"Start Tempo"),(0,o.kt)("p",null,"For this capability, the SDK needs to be initialized and the app must have location permission. You also need Tempo to be enabled for your Bluedot Account and can see the Tempo section in the Projects List page of your Canvas account. If that is not visible and you want to use this capability, please contact your Bluedot CX representative."),(0,o.kt)("p",null,"Tempo also requires Destination IDs to be defined, which you can learn about here."),(0,o.kt)("p",null,"To start Tempo, you should"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'BDLocationManager.instance()?.startTempoTracking(withDestinationId: "MyDestinationId") { error in\n\xa0 \xa0 guard error == nil else {\n \xa0 \xa0\xa0 \xa0 print("There was an error starting Tempo with the Bluedot SDK: \\(error.localizedDescription)")\n \xa0 \xa0\xa0 \xa0 return\n \xa0 \xa0 }\n }\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://ios-docs.bluedot.io/Classes/BDLocationManager.html#/c:objc(cs)BDLocationManager(im)startTempoTrackingWithDestinationId:completion:"},(0,o.kt)("inlineCode",{parentName:"a"},"startTempoTracking"))," method should be called when the app is in the foreground. Tempo tracking can only be active for one destination at a time."),(0,o.kt)("h2",{id:"receiving-tempo-events"},"Receiving Tempo events"),(0,o.kt)("p",null,"Implement ",(0,o.kt)("inlineCode",{parentName:"p"},"BDPTempoTrackingDelegate")," to receive Tempo related callbacks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {\n\xa0 \xa0 BDLocationManager.instance()?.tempoTrackingDelegate = self\n\xa0 \xa0 BDLocationManager.instance()?.initialize(withProjectId: "MyProjectId") { error in\n\xa0 \xa0\xa0 \xa0\xa0 \xa0 guard error == nil else {\n\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0 print("Initialisation with Bluedot SDK failed \\(error.localizedDescription)")\n\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0 return\n\xa0 \xa0\xa0 \xa0\xa0 \xa0 }\n\xa0 \xa0 }\n\xa0 \xa0 return true\n}\n\nextension AppDelegate: BDPTempoTrackingDelegate {\n    func tempoTrackingDidUpdate(_ tempoUpdate: TempoTrackingUpdate) {\n        print("tempoTrackingDidUpdate: \'\\(tempoUpdate.destination?.name ?? "")\' - eta:\\(tempoUpdate.eta) minutes")\n    }\n\n    func tempoTrackingDidExpire() {\n         print("Tempo Tracking has expired") \n    }\n    \n\xa0 \xa0 func didStopTrackingWithError(_ error: Error!) {\n\xa0 \xa0\xa0 \xa0 print("There was an error continuing to track with the Bluedot SDK: \\(error.localizedDescription)") \n\xa0 \xa0 }\n}\n')),(0,o.kt)("h2",{id:"stop-tempo"},"Stop Tempo"),(0,o.kt)("p",null,"If you only need tempo for a limited period, once that period is over, you can stop the tempo service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'BDLocationManager.instance()?.stopTempoTracking() { error in\n \xa0 \xa0 guard error == nil else {\n \xa0 \xa0\xa0 \xa0 print("Stop Tempo failed \\(error.localizedDescription)")\n \xa0 \xa0\xa0 \xa0 return\n \xa0 \xa0 }\n }\n')))}m.isMDXComponent=!0}}]);