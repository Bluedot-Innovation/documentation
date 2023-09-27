"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[1658],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},763:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={pagination_next:"Tempo/Integrate the Point SDK in your app",pagination_prev:null},i="Overview",s={unversionedId:"Tempo/Overview",id:"Tempo/Overview",title:"Overview",description:"With Tempo, you can understand customers\u2019 estimated time of arrival (ETA) via the app. This allows more efficient use of your resources to fire off tickets at the right time \u2013 ensuring food freshness. Say goodbye to soggy fries, melted ice drinks, and luke-warm burgers.",source:"@site/docs/Tempo/Overview.md",sourceDirName:"Tempo",slug:"/Tempo/Overview",permalink:"/Tempo/Overview",draft:!1,tags:[],version:"current",frontMatter:{pagination_next:"Tempo/Integrate the Point SDK in your app",pagination_prev:null},sidebar:"defaultSidebar",next:{title:"Integrate the Point SDK & configure Tempo in your app",permalink:"/Tempo/Integrate the Point SDK in your app"}},p={},l=[{value:"Getting started with Tempo in 4 steps",id:"getting-started-with-tempo-in-4-steps",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"With Tempo, you can understand customers\u2019 estimated time of arrival (ETA) via the app. This allows more efficient use of your resources to fire off tickets at the right time \u2013 ensuring food freshness. Say goodbye to soggy fries, melted ice drinks, and luke-warm burgers."),(0,n.kt)("h2",{id:"getting-started-with-tempo-in-4-steps"},"Getting started with Tempo in 4 steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/Tempo/Integrate%20the%20Point%20SDK%20in%20your%20app"},"Integrate the Point SDK & configure Tempo in your app"),(0,n.kt)("br",{parentName:"li"}),"You\u2019ll call",(0,n.kt)("a",{parentName:"li",href:"https://android-docs.bluedot.io/-bluedot-s-d-k/au.com.bluedot.point.net.engine/-tempo-service/-tempo-builder/start.html"},(0,n.kt)("inlineCode",{parentName:"a"},"start")),"\xa0method from ",(0,n.kt)("a",{parentName:"li",href:"https://android-docs.bluedot.io/-bluedot-s-d-k/au.com.bluedot.point.net.engine/-tempo-service/-tempo-builder/index.html"},"TempoBuilder"),"\xa0 once you\u2019re customer submits their app order, define the ",(0,n.kt)("a",{parentName:"li",href:"https://android-docs.bluedot.io/-bluedot-s-d-k/au.com.bluedot.point.net.engine/-tempo-service/-tempo-builder/destination-id.html"},(0,n.kt)("inlineCode",{parentName:"a"},"DestinationId"))," & attach any ",(0,n.kt)("a",{parentName:"li",href:"/Custom%20Event%20Metadata"},"customEventMetadata")," (Eg. the Order ID and the customer\u2019s name)"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/Tempo/Isochrone%20time%20brackets"},"Configure Tempo isochrone time brackets"),(0,n.kt)("br",{parentName:"li"}),"Every Destination has its corresponding isochrones created for it to track and report the customer\u2019s ETA. You can configure the isochrone time brackets as per your use case for each Project by contacting the Bluedot team."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/Tempo/Create%20your%20destinations"},"Create your Destination(s)"),(0,n.kt)("br",{parentName:"li"}),"The Destination is the store or restaurant where your customer is collecting their mobile order from. Every Destination has a set of lat/long coordinates & a unique ",(0,n.kt)("inlineCode",{parentName:"li"},"DestinationId")," (which you choose). You can create a Destination in the Canvas dashboard or using the Config API."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/Tempo/Configure%20a%20Tempo%20webhook"},"Configure a Tempo webhook"),(0,n.kt)("br",{parentName:"li"}),"Tempo will accurately calculate your customer\u2019s ETA as they get closer to their Destination, and will notify you with instant, real-time notifications through a webhook. This webhook includes their location, their ETA (in seconds), and any ",(0,n.kt)("a",{parentName:"li",href:"/Custom%20Event%20Metadata"},"customEventMetadata")," you set.")),(0,n.kt)("p",null,"Once these 4 simple steps have been completed you\u2019re all ready to go."))}m.isMDXComponent=!0}}]);