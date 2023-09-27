"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[3844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=m(n),d=o,h=s["".concat(l,".").concat(d)]||s[d]||u[d]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:o,a[1]=p;for(var m=2;m<i;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var r=n(7462),o=(n(7294),n(3905));const i={},a="Integrate the Point SDK & configure Tempo in your app",p={unversionedId:"Tempo/Integrate the Point SDK in your app",id:"Tempo/Integrate the Point SDK in your app",title:"Integrate the Point SDK & configure Tempo in your app",description:"To get started with Tempo, you\u2019ll first need to integrate the Point SDK in your mobile app. You can find step-by-step integration guides here:",source:"@site/docs/Tempo/Integrate the Point SDK in your app.md",sourceDirName:"Tempo",slug:"/Tempo/Integrate the Point SDK in your app",permalink:"/Tempo/Integrate the Point SDK in your app",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/Tempo/Overview"},next:{title:"Configure Tempo isochrone time brackets",permalink:"/Tempo/Isochrone time brackets"}},l={},m=[{value:"Android \u2013 Tempo implementation",id:"android--tempo-implementation",level:2},{value:"iOS \u2013 Tempo implementation",id:"ios--tempo-implementation",level:2},{value:"Important Note",id:"important-note",level:3}],c={toc:m},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrate-the-point-sdk--configure-tempo-in-your-app"},"Integrate the Point SDK & configure Tempo in your app"),(0,o.kt)("p",null,"To get started with Tempo, you\u2019ll first need to integrate the Point SDK in your mobile app. You can find step-by-step integration guides here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Point%20SDK/Android/Quick%20Start"},"Android integration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Point%20SDK/iOS/Quick%20Start"},"iOS integration"))),(0,o.kt)("p",null,"During SDK integration, there are 4 important stages that align with your customer\u2019s experience."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set the Custom Event Metadata to be attached with each Tempo Event \u2013 this is usually at least the customer\u2019s name and orderID, but you can add up to 20. (",(0,o.kt)("a",{parentName:"li",href:"/Custom%20Event%20Metadata"},"Learn more here."),")"),(0,o.kt)("li",{parentName:"ol"},"Define the DestinationId\xa0\u2013 this is where the customer is collecting their order. You can use anything, but we recommend using the normal Store Number or Restaurant ID."),(0,o.kt)("li",{parentName:"ol"},"Start location tracking & the Tempo service when your customer submits their order."),(0,o.kt)("li",{parentName:"ol"},"Stop location tracking & the Tempo service once your customer arrives at their Destination.")),(0,o.kt)("h2",{id:"android--tempo-implementation"},"Android \u2013 Tempo implementation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"/**\n * Start Tempo Tracking.\n * @param destinationId - destinationId of the Zone for tracking.\n * @param statusListener - implementation of Tempo status callbacks to receive Tempo lifecycle events and errors.\n*/\npublic void startTempoTracking(@NonNull String destinationId,\n @NonNull TempoStatusListener statusListener)\n\n/**\n * Stop Tempo Tracking\n * TempoStatusListener#tempoStopped() will be called once tracking has ceased.\n*/\npublic void stopTempoTracking()\n")),(0,o.kt)("p",null,"You\u2019ll find comprehensive ",(0,o.kt)("a",{parentName:"p",href:"/Point%20SDK/Android/Tempo"},"Android implementation detail here"),"."),(0,o.kt)("h2",{id:"ios--tempo-implementation"},"iOS \u2013 Tempo implementation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},"/**\n * Start Tempo Tracking for destination id provided\n *\n * @note An error will be returned if your App does not have **Always** location permission.\n * @param destinationId The destinationId to be tracked\n * @param completion A mandatory completion handler called once Start Tempo processing completed. If the Tempo is started successful, error will be returned as nil. However, if the Start Tempo fails, an error will be provided.\n*/\n- (void)startTempoTrackingWithDestinationId: (NSString * _Nonnull)destinationId  completion: (void (^ _Nonnull)(NSError *  _Nullable error)) completion;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},"/**\n * Stop Tempo Tracking\n *\n * @param completion A mandatory completion handler called once Stop Tempo processing completed. If the Tempo is stopped successful, error will be returned as nil. However, if the Start Tempo fails, an error will be provided.\n*/\n- (void)stopTempoTrackingWithCompletion: (void (^ _Nonnull)(NSError *  _Nullable error)) completion;\n")),(0,o.kt)("p",null,"You\u2019ll find comprehensive ",(0,o.kt)("a",{parentName:"p",href:"/Point%20SDK/iOS/Tempo"},"iOS implementation detail here"),"."),(0,o.kt)("h3",{id:"important-note"},"Important Note"),(0,o.kt)("p",null,"In iOS, to receive Tempo related callbacks, implement the ",(0,o.kt)("a",{parentName:"p",href:"https://ios-docs.bluedot.io/Protocols/BDPTempoTrackingDelegate.html"},"BDPTempoTrackingDelegate"),"\xa0protocol"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Tempo will ",(0,o.kt)("strong",{parentName:"p"},"timeout after 30 minutes")," if the device hasn\u2019t arrived at the destination. This expiring time is customizable; check with your CX representative if you\u2019d like to update it.")))}u.isMDXComponent=!0}}]);