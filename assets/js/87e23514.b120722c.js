"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[4811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},a="Tempo",s={unversionedId:"versions/Point SDK 15/Android/Tempo",id:"versions/Point SDK 15/Android/Tempo",title:"Tempo",description:"Tempo allows active tracking of a user\u2019s location, as well as live ETA estimation.",source:"@site/docs/versions/Point SDK 15/Android/Tempo.md",sourceDirName:"versions/Point SDK 15/Android",slug:"/versions/Point SDK 15/Android/Tempo",permalink:"/versions/Point SDK 15/Android/Tempo",draft:!1,tags:[],version:"current",frontMatter:{}},l={},p=[{value:"Start Tempo",id:"start-tempo",level:2},{value:"Receiving Tempo events",id:"receiving-tempo-events",level:2},{value:"Stop Tempo",id:"stop-tempo",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tempo"},"Tempo"),(0,o.kt)("p",null,"Tempo allows active tracking of a user\u2019s location, as well as live ETA estimation."),(0,o.kt)("h2",{id:"start-tempo"},"Start Tempo"),(0,o.kt)("p",null,"For this capability, the SDK needs to be initialized and the app must have location permission. You also need Tempo to be enabled for your Bluedot Account and can see the Tempo section in the Projects List page of your Canvas account. If that is not visible and you want to use this capability, please contact your Bluedot CX representative. A foreground service notification is also required."),(0,o.kt)("p",null,"Tempo also requires Destination IDs to be defined, which ",(0,o.kt)("a",{parentName:"p",href:"/Tempo/Create%20your%20destinations"},"you can learn about here"),"."),(0,o.kt)("p",null,"To start Tempo, you should"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'if (ServiceManager.getInstance(context).isBluedotServiceInitialized()) {\n    // The Bluedot SDK is initialized, you can start Tempo.\n    \n    TempoService.builder()\n        .notificationId(myNotificationId)\n        .notification(notificationReference)\n        .destinationId("myDestinationId")\n        .start(myApplicationContext, // This context should be the Application context\n            (error) -> {\n                if (error != null) {\n                    // An error has occurred while starting Tempo.\n                } else {\n                    // Tempo has started successfully.\n                }\n            })\n} else {\n    // The Bluedot SDK is not initialized. Initialize before starting Tempo\n}\n')),(0,o.kt)("h2",{id:"receiving-tempo-events"},"Receiving Tempo events"),(0,o.kt)("p",null,"The Tempo service does not issue events under normal operation. Instead, it only issues events if there is an error with the operation. Tracking events are instead delivered via webhook, as configured in the Canvas UI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class ExampleTempoReceiver : TempoTrackingReceiver() {\n\xa0 \xa0 // Called when there is an error that has caused Tempo to stop\n\xa0 \xa0 override fun tempoStoppedWithError(error: BDError, context: Context) {\n\xa0 \xa0 \xa0 \xa0 //error during Tempo \xa0 \xa0 }\n }\n")),(0,o.kt)("p",null,"The receiver must be registered in the app's manifest:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="AndroidManifest"',title:'"AndroidManifest"'},'<application android:label="@string/app_name" \\>\n\xa0 \xa0 <receiver\n \xa0 \xa0\xa0 \xa0 android:name="my.package.ExampleTempoReceiver"\n \xa0 \xa0\xa0 \xa0 android:enabled="true"\n \xa0 \xa0\xa0 \xa0 android:exported="false"\n \xa0 \xa0 >\n \xa0 \xa0\xa0 \xa0 <intent-filter>\n \xa0 \xa0\xa0 \xa0\xa0 \xa0 <action android:name="io.bluedot.point.TEMPO" />\n \xa0 \xa0\xa0 \xa0 </intent-filter>\n \xa0 \xa0 </receiver>\n </application>\n')),(0,o.kt)("h2",{id:"stop-tempo"},"Stop Tempo"),(0,o.kt)("p",null,"Once the Tempo service is no longer needed, you can stop the service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val tempoStopError: BDError? = TempoService.stop(myContext)\nif (tempoStopError != null) {\n    // An error occurred, the SDK or Tempo may not have been initialized correctly.\n}\n")))}u.isMDXComponent=!0}}]);