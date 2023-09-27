"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[4514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>v,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},v=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,v=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,d=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},v),{},{components:n})):r.createElement(d,i({ref:t},v))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={pagination_next:null},i="Receiving Wave API events",l={unversionedId:"APIs/Wave API/Receiving Wave API events",id:"APIs/Wave API/Receiving Wave API events",title:"Receiving Wave API events",description:"Wave API events are communicated to you in two ways:",source:"@site/docs/APIs/Wave API/Receiving Wave API events.md",sourceDirName:"APIs/Wave API",slug:"/APIs/Wave API/Receiving Wave API events",permalink:"/APIs/Wave API/Receiving Wave API events",draft:!1,tags:[],version:"current",frontMatter:{pagination_next:null},sidebar:"defaultSidebar",previous:{title:"Integrate Wave API",permalink:"/APIs/Wave API/Integrate Wave API"}},s={},c=[{value:"Using Wave API with Webhook",id:"using-wave-api-with-webhook",level:2},{value:"Using Wave API with Hello Screens",id:"using-wave-api-with-hello-screens",level:2}],v={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"receiving-wave-api-events"},"Receiving Wave API events"),(0,a.kt)("p",null,"Wave API events are communicated to you in two ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Via the Wave webhook"),(0,a.kt)("li",{parentName:"ol"},"Displayed on Hello screens")),(0,a.kt)("h2",{id:"using-wave-api-with-webhook"},"Using Wave API with Webhook"),(0,a.kt)("p",null,"Details on how to configure and use Wave API with a Webhook are ",(0,a.kt)("a",{parentName:"p",href:"/Webhooks/Wave"},"here"),"."),(0,a.kt)("h2",{id:"using-wave-api-with-hello-screens"},"Using Wave API with Hello Screens"),(0,a.kt)("p",null,"The Wave events can also inform Hello Screens of the arrival of a customer to a Zone."),(0,a.kt)("p",null,"1","."," You need to link a Destination to a Hello screen. More details ",(0,a.kt)("a",{parentName:"p",href:"/Hello%20Screens/Overview"},"here"),".",(0,a.kt)("br",{parentName:"p"}),"\n","2","."," You just need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"OrderId")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"customEventMetaData")," of the Wave API request. More details ",(0,a.kt)("a",{parentName:"p",href:"/APIs/Wave%20API/Integrate%20Wave%20API"},"here"),"."))}u.isMDXComponent=!0}}]);