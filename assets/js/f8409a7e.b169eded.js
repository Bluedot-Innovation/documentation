"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[3206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},976:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),o=n(4996);const i={linkWrapper:"linkWrapper_WZ0e",cardWrapper:"cardWrapper_bEe4",icon:"icon_VP0I",content:"content_MjqX",title:"title_aezp",description:"description_jBtF"};function a(e){let{icon:t,description:n,title:a,link:c}=e;return r.createElement("a",{className:i.linkWrapper,href:(0,o.Z)(c)},r.createElement("div",{className:i.cardWrapper},r.createElement("div",{className:i.icon},r.createElement("img",{src:(0,o.Z)(t),alt:a,className:i.icon})),r.createElement("div",{className:i.content},r.createElement("h3",{className:i.title},a),r.createElement("p",{className:i.description},n))))}},9568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905)),i=(n(4996),n(976));const a={slug:"/",pagination_next:null,pagination_prev:null},c="Bluedot Documentation",s={unversionedId:"intro",id:"intro",title:"Bluedot Documentation",description:"Bluedot Documentation",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/",permalink:"/documentation/",draft:!1,tags:[],version:"current",frontMatter:{slug:"/",pagination_next:null,pagination_prev:null},sidebar:"defaultSidebar"},l={},p=[],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bluedot-documentation"},"Bluedot Documentation"),(0,o.kt)("p",null,"Welcome to the comprehensive guide for Bluedot, your go-to platform for high-precision location services.\nHere, we'll unlock the full potential of geofencing to create personalized mobile experiences."),(0,o.kt)("div",{className:"card-stack-two-column"},(0,o.kt)(i.Z,{title:"Canvas",description:"Your command center for managing geofences and configuring account settings.",link:"/Canvas/Overview",icon:"/img/icons/Canvas.png",mdxType:"Card"}),(0,o.kt)(i.Z,{title:"Hello Screens",description:"A rapid, user-friendly dashboard for alerting in-store teams of approaching and arriving customers.",link:"/Hello%20Screens/Overview",icon:"/img/icons/Hello-Screens.png",mdxType:"Card"}),(0,o.kt)(i.Z,{title:"Now Ready",description:"Pre-built screens that enables customers to notify staff of their arrival with just one tap",link:"/Now%20Ready/Overview",icon:"img/icons/Now-Ready.png",mdxType:"Card"}),(0,o.kt)(i.Z,{title:"Point SDK",description:"Our Geofencing SDK, equipped with customer ETA prediction to their destination.",link:"/Point%20SDK/Overview",icon:"img/icons/PointSDK.png",mdxType:"Card"}),(0,o.kt)(i.Z,{title:"Tempo",description:"Keep track of your customer's journey with Tempo, our dedicated tool for precise ETA predictions.",link:"/Tempo/Overview",icon:"img/icons/Tempo.png",mdxType:"Card"}),(0,o.kt)(i.Z,{title:"APIs",description:"Automate geofence creation, generate reports, and more with our versatile APIs.",link:"/APIs/Config%20API/Overview",icon:"img/icons/APIs.png",mdxType:"Card"}),(0,o.kt)(i.Z,{title:"Web SDK",description:"Javascript SDK that brings location awareness capabilities to your webapp or webpage.",link:"/Web%20SDK/Overview",icon:"img/icons/WebSDK.png",mdxType:"Card"}),(0,o.kt)(i.Z,{title:"Webhooks",description:"Seamlessly connect and communicate with other applications in real-time.",link:"/WebhooksK/Overview",icon:"img/icons/Webhooks.png",mdxType:"Card"}),(0,o.kt)(i.Z,{title:"Integrations",description:"Streamline your workflows with our seamless integrations.",link:"/Integrations/Overview",icon:"img/icons/Integrations.png",mdxType:"Card"})))}m.isMDXComponent=!0}}]);