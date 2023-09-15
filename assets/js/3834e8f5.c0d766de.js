"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var g={};for(var l in t)hasOwnProperty.call(t,l)&&(g[l]=t[l]);g.originalType=e,g[p]="string"==typeof e?e:i,a[1]=g;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>g,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={},a="Geo-triggering",g={unversionedId:"Point SDK/iOS/Geo-triggering",id:"Point SDK/iOS/Geo-triggering",title:"Geo-triggering",description:"Start Geo-triggering",source:"@site/docs/Point SDK/iOS/Geo-triggering.md",sourceDirName:"Point SDK/iOS",slug:"/Point SDK/iOS/Geo-triggering",permalink:"/documentation/Point SDK/iOS/Geo-triggering",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Quick Start",permalink:"/documentation/Point SDK/iOS/Quick Start"},next:{title:"Tempo",permalink:"/documentation/Point SDK/iOS/Tempo"}},l={},c=[{value:"Start Geo-triggering",id:"start-geo-triggering",level:2},{value:"Receiving Geo-trigger events",id:"receiving-geo-trigger-events",level:2},{value:"Stop Geo-triggering",id:"stop-geo-triggering",level:2}],s={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"geo-triggering"},"Geo-triggering"),(0,i.kt)("h2",{id:"start-geo-triggering"},"Start Geo-triggering"),(0,i.kt)("p",null,"Geo-triggering allows the automatic detection of location context change events (such as entering or exiting a geofence, or crossing a Geoline\u2122). For this capability, the SDK needs to be initialized and the app must have location permission."),(0,i.kt)("p",null,"To start geo-triggering, you should"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'BDLocationManager.instance()?.startGeoTriggering(){ error in\n\xa0 \xa0 guard error == nil else {\n\xa0 \xa0 \xa0 \xa0 print("There was an error starting geo-triggering with the Bluedot SDK: \\(error.localizedDescription)")\n\xa0 \xa0 \xa0 \xa0 return\n\xa0 \xa0 }\n }\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"startGeoTriggering")," method should be called when the app is in the foreground. For more information refer to Location modules should be started from the foreground"),(0,i.kt)("h2",{id:"receiving-geo-trigger-events"},"Receiving Geo-trigger events"),(0,i.kt)("p",null,"Implement ",(0,i.kt)("a",{parentName:"p",href:"https://ios-docs.bluedot.io/Protocols/BDPGeoTriggeringEventDelegate.html"},(0,i.kt)("inlineCode",{parentName:"a"},"BDPGeoTriggeringEventDelegate"))," and register it with ",(0,i.kt)("a",{parentName:"p",href:"https://ios-docs.bluedot.io/Classes/BDLocationManager.html"},(0,i.kt)("inlineCode",{parentName:"a"},"BDLocationManager"))," to receive Geo-triggering related callbacks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {\n\xa0 \xa0 BDLocationManager.instance()?.geoTriggeringEventDelegate = self\n\xa0 \xa0 BDLocationManager.instance()?.initialize(\n\xa0 \xa0 \xa0 \xa0 withProjectId: "MyProjectId"){ error in\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 guard error == nil else {\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 print("Initialisation with Bluedot SDK failed \\(error.localizedDescription)")\n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 return\n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 }\n\xa0 \xa0 }\n\xa0 \xa0 return true\n }\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'extension AppDelegate: BDPGeoTriggeringEventDelegate {\n\xa0 \xa0 func onZoneInfoUpdate(_ zoneInfos: Set<BDZoneInfo>) {\n\xa0 \xa0 \xa0 \xa0 print("My local cache of the zones has updated!")\n\xa0 \xa0 }\n\xa0 \xa0 func didEnterZone(_ enterEvent: BDZoneEntryEvent){ \n\xa0 \xa0 \xa0 \xa0 print("I have entered a zone.")\n\xa0 \xa0 }\n\xa0 \xa0 func didExitZone(_ exitEvent: BDZoneExitEvent) {\n\xa0 \xa0 \xa0 \xa0 print("I have exited a zone")\n\xa0 \xa0 }\n }\n')),(0,i.kt)("h2",{id:"stop-geo-triggering"},"Stop Geo-triggering"),(0,i.kt)("p",null,"If you only need geo-triggering for a limited period, once that period is over, you can stop the geo-trigger service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'BDLocationManager.instance()?.stopGeoTriggering(){ error in\n\xa0 \xa0 guard error == nil else {\n\xa0 \xa0 \xa0 \xa0 print("There was an error stopping geo-triggering with the Bluedot SDK: \\(error.localizedDescription)")\n\xa0 \xa0 \xa0 \xa0 return\n\xa0 \xa0 }\n}\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To start Geo-triggering with app restart notification, notification permission must be granted.")))}u.isMDXComponent=!0}}]);