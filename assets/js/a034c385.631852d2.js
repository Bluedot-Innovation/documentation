"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[2790],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),b=n,f=p["".concat(l,".").concat(b)]||p[b]||d[b]||a;return o?r.createElement(f,i(i({ref:t},u),{},{components:o})):r.createElement(f,i({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}b.displayName="MDXCreateElement"},7627:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={},i="Bbot Integration",s={unversionedId:"integrations/Bbot",id:"integrations/Bbot",title:"Bbot Integration",description:"With Bluedot\u2019s first-class arrival toolkit and Bbot, you can offer your customers a great curbside or pickup experience. You can track customers\u2019 arrival at your restaurant with Hello Screens, informing your staff when a customer is on the way or has arrived to pick up their order.",source:"@site/docs/integrations/Bbot.md",sourceDirName:"integrations",slug:"/integrations/Bbot",permalink:"/documentation/integrations/Bbot",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Attentive location-based messages",permalink:"/documentation/integrations/Attentive/Location-based messages"},next:{title:"Braze Integration",permalink:"/documentation/integrations/Braze/Overview"}},l={},c=[{value:"Find Bluedot Webhook URL",id:"find-bluedot-webhook-url",level:2},{value:"Importing your Stores from Bbot",id:"importing-your-stores-from-bbot",level:2},{value:"Create a Webhook in Bbot",id:"create-a-webhook-in-bbot",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bbot-integration"},"Bbot Integration"),(0,n.kt)("p",null,"With Bluedot\u2019s first-class arrival toolkit and Bbot, you can offer your customers a great curbside or pickup experience. You can track customers\u2019 arrival at your restaurant with Hello Screens, informing your staff when a customer is on the way or has arrived to pick up their order."),(0,n.kt)("h2",{id:"find-bluedot-webhook-url"},"Find Bluedot Webhook URL"),(0,n.kt)("p",null,"The first step is to get Bluedot\u2019s webhook URL; we will use it later when creating the Webhook in Bbot."),(0,n.kt)("p",null,"From Canvas, go to the integrations section and select Bbot."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(5743).Z,width:"1024",height:"543"})),(0,n.kt)("h2",{id:"importing-your-stores-from-bbot"},"Importing your Stores from Bbot"),(0,n.kt)("p",null,"To import stores from Bbot, you will need to provide your Bbot API credentials in Canvas, when setting up the integration. The feature will check for any new stores or updates to store information every 24 hours."),(0,n.kt)("p",null,"To get started, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Obtain your Bbot API credentials from the Manage Partners section on Bbot\u2019s dashboard."),(0,n.kt)("li",{parentName:"ol"},"In Canvas, input your Bbot API credentials."),(0,n.kt)("li",{parentName:"ol"},"The feature will automatically check for any new stores or updates to store information every 24 hours.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(6052).Z,width:"1024",height:"763"})),(0,n.kt)("h2",{id:"create-a-webhook-in-bbot"},"Create a Webhook in Bbot"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Copy the Bluedot Webhook URL from the Your webhook URL section"),(0,n.kt)("li",{parentName:"ol"},"From Bbot\u2019s Admin Portal, add a new webhook from the ",(0,n.kt)("em",{parentName:"li"},"Admin > Manage API Access")," and paste the Bluedot Webhook URL in the ",(0,n.kt)("strong",{parentName:"li"},"Checkout Complete Webhook URL")," field and click on ",(0,n.kt)("em",{parentName:"li"},"Save"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(4366).Z,width:"1024",height:"303"})),(0,n.kt)("p",null,"Once you\u2019ve added the Bbot\u2019s API credentials and created the Checkout Complete Webhook, you can adjust your stores in Canvas."),(0,n.kt)("p",null,"If you have any questions, contact us at\xa0",(0,n.kt)("a",{parentName:"p",href:"mailto:help@bluedot.io"},"help@bluedot.io")))}d.isMDXComponent=!0},6052:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Screen-Shot-2023-01-09-at-12.54.52-pm-1024x763-0b333f367548ab54c9dcf1f8a855d3f8.png"},5743:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Select-Bbot-from-integrations-page-1024x543-c0f2256df493c99c5c2ccea854969a8b.png"},4366:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/bbot-portal-webhook-url-1024x303-206da817fbb87c1c9a39c61f7ff67c6e.png"}}]);