"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[5985],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),g=i,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6929:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={},a="Integrate the Point SDK",l={unversionedId:"Integrations/Salesforce/Mobile SDK Integration/Overview",id:"Integrations/Salesforce/Mobile SDK Integration/Overview",title:"Integrate the Point SDK",description:"Integration Prerequisite",source:"@site/docs/Integrations/Salesforce/Mobile SDK Integration/Overview.md",sourceDirName:"Integrations/Salesforce/Mobile SDK Integration",slug:"/Integrations/Salesforce/Mobile SDK Integration/Overview",permalink:"/Integrations/Salesforce/Mobile SDK Integration/Overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Journey Setup",permalink:"/Integrations/Salesforce/Journey setup"},next:{title:"Integrate the Point SDK",permalink:"/Integrations/Salesforce/Mobile SDK Integration/Overview"}},s={},p=[{value:"Integration Prerequisite",id:"integration-prerequisite",level:3},{value:"Integrating SDK to Android App",id:"integrating-sdk-to-android-app",level:2},{value:"Integrating SDK to iOS App",id:"integrating-sdk-to-ios-app",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integrate-the-point-sdk"},"Integrate the Point SDK"),(0,i.kt)("h3",{id:"integration-prerequisite"},"Integration Prerequisite"),(0,i.kt)("p",null,"You\u2019ll first need to integrate the Point SDK into your mobile app. You can find step-by-step integration guides here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Point%20SDK/Android/Overview"},"Android integration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Point%20SDK/iOS/Overview"},"iOS integration"))),(0,i.kt)("p",null,"For most use cases, it\u2019s also important to integrate the Journey Builder SDK. Detailed documentation is available here for ",(0,i.kt)("a",{parentName:"p",href:"http://salesforce-marketingcloud.github.io/JB4A-SDK-Android/"},"Android")," and ",(0,i.kt)("a",{parentName:"p",href:"http://salesforce-marketingcloud.github.io/JB4A-SDK-iOS/"},"iOS"),"."),(0,i.kt)("p",null,"To allow push capabilities to be available from Salesforce Marketing Cloud, add FCM ID obtained from your Firebase account to Salesforce Mobile Push Administration Page for the App."),(0,i.kt)("p",null,"Please refer to below screenshot for reference:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(2242).Z,width:"784",height:"397"})),(0,i.kt)("h2",{id:"integrating-sdk-to-android-app"},"Integrating SDK to Android App"),(0,i.kt)("p",null,"The SDK comes with the minimum requirements, which are needed to be satisfied for the SDK to start working, this means updating the AndroidManifest.xml file, which is the main configuration file of every Android project. Once this is done, the Salesforce Marketing Cloud Contact Key will need to be passed into the SDK to allow Bluedot triggers to be associated with the correct user profile \u2013 a detailed step by step guideline is available ",(0,i.kt)("a",{parentName:"p",href:"/Integrations/Salesforce/Mobile%20SDK%20Integration/Android"},"here"),"."),(0,i.kt)("h2",{id:"integrating-sdk-to-ios-app"},"Integrating SDK to iOS App"),(0,i.kt)("p",null,"Once the SDK is integrated, the Salesforce Marketing Cloud Contact Key will need to be passed into the SDK to allow Bluedot triggers to be associated with the correct user profile \u2013 a detailed step by step guideline is available ",(0,i.kt)("a",{parentName:"p",href:"/Integrations/Salesforce/Mobile%20SDK%20Integration/Android"},"here"),"."))}u.isMDXComponent=!0},2242:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Screen-Shot-2019-05-16-at-3.25.20-pm-e1557984665466-27bc5804b7ef873895443758c6d3e4b8.png"}}]);