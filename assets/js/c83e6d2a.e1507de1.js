"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[4566],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,d=p["".concat(l,".").concat(m)]||p[m]||b[m]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8468:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={},a="SDK Retry Behaviour",s={unversionedId:"Web SDK/SDK retry behaviour",id:"Web SDK/SDK retry behaviour",title:"SDK Retry Behaviour",description:"A key target environment is mobile browsers, which can have intermittent network connections due to poor coverage or transitioning between different network sources such as Wi-Fi and Cellular.",source:"@site/docs/Web SDK/SDK retry behaviour.md",sourceDirName:"Web SDK",slug:"/Web SDK/SDK retry behaviour",permalink:"/Web SDK/SDK retry behaviour",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"NodeJS environment vs browser",permalink:"/Web SDK/NodeJs environment vs browser"},next:{title:"User Persistence in the SDK",permalink:"/Web SDK/User persistence in the SDK"}},l={},c=[],u={toc:c},p="wrapper";function b(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sdk-retry-behaviour"},"SDK Retry Behaviour"),(0,o.kt)("p",null,"A key target environment is mobile browsers, which can have intermittent network connections due to poor coverage or transitioning between different network sources such as Wi-Fi and Cellular."),(0,o.kt)("p",null,"To ensure that events are sent with as high reliability as possible, the SDK will automatically attempt to resend each event in the event of a network failure or unexpected server response."),(0,o.kt)("p",null,"With debugging, mode enabled every time a failed network connection is retried it will log the current retry count to the console. The maximum amount of retries is currently set to ",(0,o.kt)("strong",{parentName:"p"},"15"),", with the delay between attempts increasing each time. The total amount of time the SDK will continue to attempt to send an event is just ",(0,o.kt)("strong",{parentName:"p"},"under 2 minutes"),", at which point if the event still has not been able to be sent an error will be thrown."),(0,o.kt)("p",null,"Below are some example logs where a network request initially failed due to an unavailable network connection but then manages to be sent after several attempts."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"WebSdk Retry",src:r(7282).Z,width:"1024",height:"527"})))}b.isMDXComponent=!0},7282:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/web-sdk-retry-1024x527-dd972c3b68394d928c87cdcf5b6fc53b.png"}}]);