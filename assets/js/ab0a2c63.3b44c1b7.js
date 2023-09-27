"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[4455],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=a,m=p["".concat(l,".").concat(g)]||p[g]||f[g]||n;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1034:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=r(7462),a=(r(7294),r(3905));const n={},i="Overview",s={unversionedId:"integrations/Salesforce/Overview",id:"integrations/Salesforce/Overview",title:"Overview",description:"You can use the Bluedot Location Marketing app from the Salesforce AppExchange to power personalized customer journeys at scale. With Salesforce + Bluedot together you can send Push messages when the customer arrives at your restaurant, trigger specific email campaigns based on visits to a rival\u2019s store, or create an immersive game experience, engaging your customers as they move throughout real-world locations.",source:"@site/docs/integrations/Salesforce/Overview.md",sourceDirName:"integrations/Salesforce",slug:"/integrations/Salesforce/Overview",permalink:"/integrations/Salesforce/Overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Safegraph Integration",permalink:"/integrations/Safegraph"},next:{title:"Overview",permalink:"/integrations/Salesforce/Overview"}},l={},c=[{value:"Before your start",id:"before-your-start",level:2},{value:"How to configure Salesforce Marketing Cloud &amp; Bluedot",id:"how-to-configure-salesforce-marketing-cloud--bluedot",level:2}],u={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://appexchange.salesforce.com/listingDetail?listingId=a0N3000000Dq8lCEAR"},"Bluedot Location Marketing app")," from the Salesforce AppExchange to power personalized customer journeys at scale. With Salesforce + Bluedot together you can send Push messages when the customer arrives at your restaurant, trigger specific email campaigns based on visits to a rival\u2019s store, or create an immersive game experience, engaging your customers as they move throughout real-world locations."),(0,a.kt)("h2",{id:"before-your-start"},"Before your start"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1","."," Have access to your Salesforce Marketing Cloud account"),(0,a.kt)("br",{parentName:"p"}),"\n","You must have a Salesforce Marketing Cloud account that you currently use to manage all your marketing campaigns and personalized customer journeys. If your enterprise doesn\u2019t already have a Salesforce Marketing Cloud account, you\u2019ll need to speak with your Salesforce Account Executive."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2","."," Get access to Bluedot"),(0,a.kt)("br",{parentName:"p"}),"\n","You\u2019ll need an active Bluedot account to use your Bluedot + Salesforce integration. ",(0,a.kt)("a",{parentName:"p",href:"https://bluedot.io/demo/"},"Contact our team")," here if you need to set up your account."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3","."," Integrate Bluedot into your mobile app"),(0,a.kt)("br",{parentName:"p"}),"\n","Before you can use this integration, the Bluedot Point SDK must be integrated into your iOS and/or Android app. You can learn more about SDK integration, specifically for SFMC here."),(0,a.kt)("h2",{id:"how-to-configure-salesforce-marketing-cloud--bluedot"},"How to configure Salesforce Marketing Cloud & Bluedot"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/integrations/Salesforce/Linking%20Salesforce%20Marketing%20Cloud%20to%20Canvas"},"Link Salesforce Marketing Cloud & your Canvas account")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/integrations/Salesforce/Create%20SFMC%20events"},"Create SFMC events")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/integrations/Salesforce/Set%20up%20your%20Canvas%20account"},"Create a geofence in Canvas")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/integrations/Salesforce/Journey%20setup"},"Build your first Bluedot powered Journey in SFMC")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/integrations/Salesforce/Mobile%20SDK%20Integration/Overview"},"Integrate the Point SDK"))))}f.isMDXComponent=!0}}]);