"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[5655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,m=p["".concat(c,".").concat(d)]||p[d]||g[d]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={},a="Best Practices & Recommendations",s={unversionedId:"Point SDK/Android/Best Practices & Recommendations",id:"Point SDK/Android/Best Practices & Recommendations",title:"Best Practices & Recommendations",description:"When initializing the Bluedot SDK at app startup, there are some edge cases where the app doesn\u2019t have network access when the user hasn\u2019t used it in a while. To ensure the Bluedot SDK starts the Geo-triggering and Tempo services correctly, please follow these recommendations:",source:"@site/docs/Point SDK/Android/Best Practices & Recommendations.md",sourceDirName:"Point SDK/Android",slug:"/Point SDK/Android/Best Practices & Recommendations",permalink:"/Point SDK/Android/Best Practices & Recommendations",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Location Permission & Notifications Best Practices",permalink:"/Point SDK/Android/Location Permission & Notifications Best Practices"},next:{title:"Caveats",permalink:"/Point SDK/Android/Caveats"}},c={},l=[{value:"Steps to use Geo-Trigger/Tempo",id:"steps-to-use-geo-triggertempo",level:2}],u={toc:l},p="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"best-practices--recommendations"},"Best Practices & Recommendations"),(0,i.kt)("p",null,"When initializing the Bluedot SDK at app startup, there are some edge cases where the app doesn\u2019t have network access when the user hasn\u2019t used it in a while. To ensure the Bluedot SDK starts the Geo-triggering and Tempo services correctly, please follow these recommendations:"),(0,i.kt)("p",null,"Whenever the SDK is interacted with (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"startGeoTrigger"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"startTempo"),"), Bluedot recommends that the initialization status is checked and initialized if that has not happened yet."),(0,i.kt)("h2",{id:"steps-to-use-geo-triggertempo"},"Steps to use Geo-Trigger/Tempo"),(0,i.kt)("p",null,"1","."," Get ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceManager")," instance."),(0,i.kt)("p",null,"2","."," Check for ",(0,i.kt)("inlineCode",{parentName:"p"},"isBluedotServiceInitialized"),", if not initialized call ",(0,i.kt)("inlineCode",{parentName:"p"},"serviceManager.initialize(..)")," and start Geo-trigger inside Initialize success callback."),(0,i.kt)("p",null,"3","."," Inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"InitializationResultListener"),", On success reported back from Bluedot, prepare to start Geo-Trigger/Tempo."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val serviceManager = ServiceManager.getInstance(context)\nif (!serviceManager.isBluedotServiceInitialized) {\n  val resultListener = InitializationResultListener { initializationError ->\n    if (initializationError != null) {\n      Log.i("TAG", "Initialization Error: " + initializationError.reason)\n      return@InitializationResultListener\n    }\n    Log.i("TAG", "Bluedot Initialization Success")\n\n    //Check for GeoTrigger already running\n    if (!GeoTriggeringService.isRunning()) {\n      //Start Geo-Trigger\n      startGeoTriggering(context)\n    }\n\n    //Check for Tempo already running\n    if (!TempoService.isRunning(context)) {\n      //or startTempo here\n      startTempo(context)\n    }\n }\n serviceManager.initialize("<YOUR-PROJECT-ID>", resultListener)\n} else {\n    //SDK is already initialized, Now if required start Geo-trigger/Tempo\n\n    //Check for GeoTrigger already running\n    if (!GeoTriggeringService.isRunning()) {\n      //Start Geo-Trigger\n      startGeoTriggering(context)\n    }\n\n    //Check for Tempo already running\n    if (!TempoService.isRunning(context)) {\n      //or startTempo here\n      startTempo(context)\n    }\n}\n')),(0,i.kt)("p",null,"4.\xa0Function with an example to start FG mode Geo-trigger"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun startGeoTriggering(context: Context) {\n  val geoTriggeringStatusListener = GeoTriggeringStatusListener { geoTriggerError: BDError? ->\n    if (geoTriggerError != null) {\n      Log.i("TAG", "Bluedot GeoTriggering start error: $geoTriggerError")\n      return@GeoTriggeringStatusListener\n    }\n    Log.i("TAG", "Bluedot GeoTriggering start success")\n  }\n\n  val notification = createNotification(\n    "foreground_notification_title",\n    "foreground_notification_text", true, context\n  )\n\n  GeoTriggeringService.builder()\n    .notification(notification)\n    .start(context, geoTriggeringStatusListener)\n}\n')),(0,i.kt)("p",null,"5.\xa0Function with an example to start Tempo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun startTempo(context: Context) {\n  val tempoServiceStatusListener = TempoServiceStatusListener { tempoError: BDError? ->\n    if (tempoError != null) {\n      Log.i("TAG", "Bluedot Tempo start error: $tempoError")\n      return@TempoServiceStatusListener\n    }\n    Log.i("TAG", "Bluedot Tempo start success")\n  }\n  val notification = createNotification(\n    "foreground_notification_title", "foreground_notification_text",\n    true, context\n  )\n\n  TempoService.builder().notification(notification)\n    .destinationId("<YOUR-PROJECT-DESTINATION-ID>")\n    .start(context, tempoServiceStatusListener)\n}\n')))}g.isMDXComponent=!0}}]);