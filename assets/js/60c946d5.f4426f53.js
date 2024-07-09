"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[1224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),u=d(n),p=i,m=u["".concat(l,".").concat(p)]||u[p]||c[p]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var g={};for(var l in t)hasOwnProperty.call(t,l)&&(g[l]=t[l]);g.originalType=e,g[u]="string"==typeof e?e:i,a[1]=g;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>g,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const o={},a="Geo-triggering",g={unversionedId:"Point SDK/Flutter/Geo-triggering",id:"Point SDK/Flutter/Geo-triggering",title:"Geo-triggering",description:"Geo-triggering allows the automatic detection of location context change events (such as entering or exiting a geofence, or crossing a Geoline\u2122). For this capability, the SDK needs to be initialized and the app must have location permission.",source:"@site/docs/Point SDK/Flutter/Geo-triggering.md",sourceDirName:"Point SDK/Flutter",slug:"/Point SDK/Flutter/Geo-triggering",permalink:"/Point SDK/Flutter/Geo-triggering",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Quick Start",permalink:"/Point SDK/Flutter/Quick Start"},next:{title:"Tempo",permalink:"/Point SDK/Flutter/Tempo"}},l={},d=[{value:"Start Geo-triggering",id:"start-geo-triggering",level:2},{value:"Android",id:"android",level:3},{value:"Foreground mode:",id:"foreground-mode",level:3},{value:"<em>Background mode:</em>",id:"background-mode",level:4},{value:"iOS",id:"ios",level:3},{value:"Receiving Geo-trigger events",id:"receiving-geo-trigger-events",level:2},{value:"Stop Geo-triggering",id:"stop-geo-triggering",level:2},{value:"Geo-triggering Status",id:"geo-triggering-status",level:2},{value:"Example",id:"example",level:2}],s={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"geo-triggering"},"Geo-triggering"),(0,i.kt)("p",null,"Geo-triggering allows the automatic detection of location context change events (such as entering or exiting a geofence, or crossing a Geoline\u2122). For this capability, the SDK needs to be initialized and the app must have location permission."),(0,i.kt)("h2",{id:"start-geo-triggering"},"Start Geo-triggering"),(0,i.kt)("p",null,"To start geo-triggering, you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"GeoTriggeringBuilder"),"\xa0."),(0,i.kt)("h3",{id:"android"},"Android"),(0,i.kt)("p",null,"On android, you can run geo triggering in foreground or background mode."),(0,i.kt)("h3",{id:"foreground-mode"},"Foreground mode:"),(0,i.kt)("p",null,"Starting geo-triggering on foreground mode would require notification permissions. From Android 13, you have to request user for notification permissions."),(0,i.kt)("p",null,"To run geo triggering on foreground mode, you have to set notification details as below. If any of the parameters below are null or blank (except for ",(0,i.kt)("inlineCode",{parentName:"p"},"androidNotificationId"),"), geo-triggering will start on background mode."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Parameter")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Type")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"channelId")),(0,i.kt)("td",{parentName:"tr",align:null},"String?"),(0,i.kt)("td",{parentName:"tr",align:null},"The channel id of the notification..")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"channelName")),(0,i.kt)("td",{parentName:"tr",align:null},"String?"),(0,i.kt)("td",{parentName:"tr",align:null},"The channel name of the notification.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"androidNotificationTitle")),(0,i.kt)("td",{parentName:"tr",align:null},"String?"),(0,i.kt)("td",{parentName:"tr",align:null},"The title of the notification.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"androidNotificationContent")),(0,i.kt)("td",{parentName:"tr",align:null},"String?"),(0,i.kt)("td",{parentName:"tr",align:null},"The content of the notification.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"androidNotificationId")),(0,i.kt)("td",{parentName:"tr",align:null},"Int?"),(0,i.kt)("td",{parentName:"tr",align:null},"The notification Id of the notification.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"String channelId = 'Your channel Id';\nString channelName = 'Your channel Name';\nString androidNotificationTitle = 'Your notification title';\nString androidNotificationContent = 'Your notification content';\nint androidNotificationId = 123; // Will be -1 by default if set to null. BluedotPointSdk.instance.geoTriggeringBuilder()\n   .androidNotification(channelId, channelName, androidNotificationChannel, androidNotificationContent, androidNotificationId)\n   .start().then((value) { \n   //Handle geo triggering started successfully \n   debugPrint('Geo-triggering has been started'); \n}).catchError((error) { \n  //Handle error when start geo-triggering \n  debugPrint('Failed to start geo-triggering. Error $error'); \n});\n")),(0,i.kt)("h4",{id:"background-mode"},(0,i.kt)("em",{parentName:"h4"},"Background mode:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"BluedotPointSdk.instance.geoTriggeringBuilder().start().then((value) {\n  //Handle geo triggering started successfully\n debugPrint('Geo-triggering has been started');\n}).catchError((error) {\n   //Handle error when start geo-triggering\n debugPrint('Failed to start geo-triggering. Error $error');\n});\n")),(0,i.kt)("h3",{id:"ios"},"iOS"),(0,i.kt)("p",null,"Either of the methods above would start geo-triggering in iOS."),(0,i.kt)("h2",{id:"receiving-geo-trigger-events"},"Receiving Geo-trigger events"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"As Entry events may occur immediately upon staring Geo-triggering, it is recommended ed to subscribe to the events before starting the Geo-triggering service.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"// Listen to Geo-triggering events\nfinal geoTriggeringEventChannel = MethodChannel(BluedotPointSdk.geoTriggering); \n\ngeoTriggeringEventChannel.setMethodCallHandler((MethodCall call) async {\n var args = call.arguments; \n switch (call.method) { \n case GeoTriggeringEvents.onZoneInfoUpdate: \n    debugPrint('On Zone Info Update: $args'); \n    break; \n case GeoTriggeringEvents.didEnterZone: \n    debugPrint('Did Enter Zone: $args'); \n    break; \n case GeoTriggeringEvents.didExitZone: \n    debugPrint('Did Exit Zone: $args'); \n    break; \n default: \n    break; \n }\n});\n\n// Then start geo triggering service\n...\n")),(0,i.kt)("h2",{id:"stop-geo-triggering"},"Stop Geo-triggering"),(0,i.kt)("p",null,"If you only need geo-triggering for a limited period, once that period is over, you can stop the geo-trigger service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"BluedotPointSdk.instance.stopGeoTriggering().then((value) {\n  // Successfully stop geo triggering\n  debugPrint('Geo-triggering has been stopped');\n}).catchError((error) {\n  // Failed to stop geo triggering, handle error in here\n  debugPrint('Failed to stop geo triggering. Error $error');\n});\n")),(0,i.kt)("h2",{id:"geo-triggering-status"},"Geo-triggering Status"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"isGeoTriggeringRunning")," method to check the status of the Geo-triggering service. It will return a boolean value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"BluedotPointSdk.instance.isGeoTriggeringRunning().then((value) {\n  setState(() {\n    debugPrint('Is Geo Running: $value');\n  });\n});\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:bluedot_point_sdk/bluedot_point_sdk.dart';\nimport 'package:flutter/material.dart';\nimport 'package:flutter/services.dart';\n\nclass MyApp extends StatefulWidget {\n  const MyApp({Key? key}) : super(key: key);\n\n  @override\n  State<MyApp> createState() => _MyAppState();\n}\n\nclass _MyAppState extends State<MyApp> {\n  // The SDK needs be initialized and the app must have location permissions.\n  var _isGeoTriggeringRunning = false;\n\n  @override\n  void initState() {\n    super.initState();\n    // Listen to geo triggering event from geo triggering event channel\n    final geoTriggeringEventChannel = MethodChannel(BluedotPointSdk.geoTriggering);\n    \n    geoTriggeringEventChannel.setMethodCallHandler((MethodCall call) async {\n      var args = call.arguments;\n      switch (call.method) {\n        case GeoTriggeringEvents.onZoneInfoUpdate:\n          debugPrint('On Zone Info Update: $args');\n          break;\n        case GeoTriggeringEvents.didEnterZone:\n          debugPrint('Did Enter Zone: $args');\n          break;\n        case GeoTriggeringEvents.didExitZone:\n          debugPrint('Did Exit Zone: $args');\n          break;\n        default:\n          break;\n      }\n    });\n  }\n\n void _startGeoTriggering() {\n    String channelId = 'Your channel Id'; \n    String channelName = 'Your channel Name'; \n    String androidNotificationTitle = 'Your notification title'; \n    String androidNotificationContent = 'Your notification content'; \n    int androidNotificationId = 123; // Will be -1 by default if set to null. BluedotPointSdk.instance.geoTriggeringBuilder() \n     .androidNotification(channelId, channelName, androidNotificationChannel, androidNotificationContent, androidNotificationId) \n     .start().then((value) { \n        //Handle geo triggering started successfully \n        debugPrint('Geo-triggering has been started'); \n     }).catchError((error) { \n        //Handle error when start geo-triggering \n        debugPrint('Failed to start geo-triggering. Error $error'); \n     });\n }\n\n void _stopGeoTriggering() {\n   BluedotPointSdk.instance.geoTriggeringBuilder().start().then((value) {\n     //Handle geo triggering started successfully\n     debugPrint('Geo-triggering has been started');\n   }).catchError((error) {\n     //Handle error when start geo-triggering\n     debugPrint('Failed to start geo-triggering. Error $error');\n   });\n }\n\n void _updateGeoTriggeringStatus() {\n    BluedotPointSdk.instance.isGeoTriggeringRunning().then((value) {\n      setState(() {\n        _isGeoTriggeringRunning = value;\n      });\n    });\n }\n\n  @override\n  Widget build(BuildContext context) {\n    return Column(\n        children: [\n          Text('Is Geo Triggering Running: $_isGeoTriggeringRunning'),\n          ElevatedButton(onPressed: _startGeoTriggering, child: const Text('Start Geo-triggering')),\n          ElevatedButton(onPressed: _stopGeoTriggering, child: const Text('Stop Geo-triggering')),\n          ElevatedButton(onPressed: _updateGeoTriggeringStatus, child: const Text('Update Geo-triggering status')),\n        \\],\n      );\n  }\n}\n")))}c.isMDXComponent=!0}}]);