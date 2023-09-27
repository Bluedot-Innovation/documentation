"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[1103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(n),k=r,u=s["".concat(p,".").concat(k)]||s[k]||c[k]||o;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={pagination_next:null},i="Events List",l={unversionedId:"Point SDK/Cordova/Events List",id:"Point SDK/Cordova/Events List",title:"Events List",description:"Register callbacks to receive events",source:"@site/docs/Point SDK/Cordova/Events List.md",sourceDirName:"Point SDK/Cordova",slug:"/Point SDK/Cordova/Events List",permalink:"/Point SDK/Cordova/Events List",draft:!1,tags:[],version:"current",frontMatter:{pagination_next:null},sidebar:"defaultSidebar",previous:{title:"Features",permalink:"/Point SDK/Cordova/Features"}},p={},d=[{value:"GeoTriggering Events",id:"geotriggering-events",level:2},{value:"Tempo Events",id:"tempo-events",level:2},{value:"Helpers Events",id:"helpers-events",level:2}],m={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"events-list"},"Events List"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Register callbacks to receive events")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Example\nio.bluedot.cordova.plugin.tempoStoppedWithErrorCallback( tempoTrackingStoppedWithErrorCallback );\n")),(0,r.kt)("h2",{id:"geotriggering-events"},"GeoTriggering Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Event payload")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enteredZoneCallback")),(0,r.kt)("td",{parentName:"tr",align:null},"Device enters a Zone"),(0,r.kt)("td",{parentName:"tr",align:null},"Object with the following properties:  ",(0,r.kt)("em",{parentName:"td"}," ",(0,r.kt)("inlineCode",{parentName:"em"},"fenceInfo"),": Fence information   ")," ",(0,r.kt)("inlineCode",{parentName:"td"},"zoneInfo"),": Zone information   ",(0,r.kt)("em",{parentName:"td"}," ",(0,r.kt)("inlineCode",{parentName:"em"},"locationInfo"),": Location information ")," ",(0,r.kt)("inlineCode",{parentName:"td"},"isExitEnabled"),": Wether ",(0,r.kt)("inlineCode",{parentName:"td"},"exit")," is enabled or disabled. ",(0,r.kt)("inlineCode",{parentName:"td"},"<Bool>")," * ",(0,r.kt)("inlineCode",{parentName:"td"},"customData"),": Zone custom data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"exitedZoneCallback")),(0,r.kt)("td",{parentName:"tr",align:null},"Device exits a Zone"),(0,r.kt)("td",{parentName:"tr",align:null},"Object with the following properties:  ",(0,r.kt)("em",{parentName:"td"}," ",(0,r.kt)("inlineCode",{parentName:"em"},"fenceInfo"),": Fence information   ")," ",(0,r.kt)("inlineCode",{parentName:"td"},"zoneInfo"),": Zone information   ",(0,r.kt)("em",{parentName:"td"}," ",(0,r.kt)("inlineCode",{parentName:"em"},"locationInfo"),": Location information ")," ",(0,r.kt)("inlineCode",{parentName:"td"},"isExitEnabled"),": Wether ",(0,r.kt)("inlineCode",{parentName:"td"},"exit")," is enabled or disabled. ",(0,r.kt)("inlineCode",{parentName:"td"},"<Bool>")," * ",(0,r.kt)("inlineCode",{parentName:"td"},"customData"),": Zone custom data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zoneInfoUpdateCallback")),(0,r.kt)("td",{parentName:"tr",align:null},"The SDK downloads the Zones"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zoneInfos"),": List of Zones downloaded.")))),(0,r.kt)("h2",{id:"tempo-events"},"Tempo Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Event payload")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tempoTrackingExpiredCallback")),(0,r.kt)("td",{parentName:"tr",align:null},"Tempo session has expired (Default 30 minutes)."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tempoStoppedWithErrorCallback")),(0,r.kt)("td",{parentName:"tr",align:null},"Tempo has stopped due to an error. The error will be passed as a parameter in the callback."),(0,r.kt)("td",{parentName:"tr",align:null},"Object with the following properties:  * ",(0,r.kt)("inlineCode",{parentName:"td"},"error"),": Error description")))),(0,r.kt)("h2",{id:"helpers-events"},"Helpers Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Event payload")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bluedotServiceDidReceiveErrorCallback")),(0,r.kt)("td",{parentName:"tr",align:null},"Bluedot service received an error"),(0,r.kt)("td",{parentName:"tr",align:null},"Object with the following properties: * ",(0,r.kt)("inlineCode",{parentName:"td"},"error"),": Error description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lowPowerModeDidChangeCallback")),(0,r.kt)("td",{parentName:"tr",align:null},"Low power mode status changes in the device * Only for iOS"),(0,r.kt)("td",{parentName:"tr",align:null},"Object with the following properties: *",(0,r.kt)("inlineCode",{parentName:"td"},"isLowPowerMode"),": whether low power mode is enabled or disabled.  ",(0,r.kt)("inlineCode",{parentName:"td"},"<Bool>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"locationAuthorizationDidChangeCallback")),(0,r.kt)("td",{parentName:"tr",align:null},"Location authorization status changes * Only for iOS"),(0,r.kt)("td",{parentName:"tr",align:null},"Object with the following properties: ",(0,r.kt)("em",{parentName:"td"}," ",(0,r.kt)("inlineCode",{parentName:"em"},"previousAuthorizationStatus")," ")," ",(0,r.kt)("inlineCode",{parentName:"td"},"newAuthorizationStatus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"accuracyAuthorizationDidChangeCallback")),(0,r.kt)("td",{parentName:"tr",align:null},"Accuracy authorization status changes * Only for iOS"),(0,r.kt)("td",{parentName:"tr",align:null},"Object with the following properties: ",(0,r.kt)("em",{parentName:"td"}," ",(0,r.kt)("inlineCode",{parentName:"em"},"previousAccuracyAuthorization")," ")," ",(0,r.kt)("inlineCode",{parentName:"td"},"newAccuracyAuthorization"))))))}c.isMDXComponent=!0}}]);