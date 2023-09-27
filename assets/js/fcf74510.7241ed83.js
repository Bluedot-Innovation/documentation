"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[9203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||i;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={},a="Flipdish Integration",s={unversionedId:"integrations/Flipdish",id:"integrations/Flipdish",title:"Flipdish Integration",description:"With Bluedot\u2019s first-class arrival toolkit and Flipdish, you can offer your customers a great curbside or pickup experience. You can track customers\u2019 arrival at your restaurant with Hello Screens, informing your staff when a customer is on the way or has arrived to pick up their order.",source:"@site/docs/integrations/Flipdish.md",sourceDirName:"integrations",slug:"/integrations/Flipdish",permalink:"/integrations/Flipdish",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"iOS Integration",permalink:"/integrations/CleverTap/iOS"},next:{title:"Incentivio Integration",permalink:"/integrations/Incentivio"}},l={},p=[{value:"Create a Webhook in Flipdish",id:"create-a-webhook-in-flipdish",level:2},{value:"Find Bluedot Webhook URL",id:"find-bluedot-webhook-url",level:2},{value:"Add the <code>order.accepted</code> event on Flipdish\u2019s webhook",id:"add-the-orderaccepted-event-on-flipdishs-webhook",level:2},{value:"Additional Settings",id:"additional-settings",level:2}],d={toc:p},c="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flipdish-integration"},"Flipdish Integration"),(0,r.kt)("p",null,"With Bluedot\u2019s first-class arrival toolkit and Flipdish, you can offer your customers a great curbside or pickup experience. You can track customers\u2019 arrival at your restaurant with Hello Screens, informing your staff when a customer is on the way or has arrived to pick up their order."),(0,r.kt)("h2",{id:"create-a-webhook-in-flipdish"},"Create a Webhook in Flipdish"),(0,r.kt)("p",null,"To set up a webhook on Flipdish, head over to Flipdish\u2019s portal\xa0and click on the\xa0",(0,r.kt)("strong",{parentName:"p"},"Developer tools"),"\xa0link (under your avatar). For more information, please check Flipdish\u2019s ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://developers.flipdish.com/docs/creating-webhooks"},"Creating webhooks documentation."))," You can get all the details to fill Create Webhook form from Canvas. More details in the next step."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(117).Z,width:"1024",height:"562"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When creating the Flipdish webhook please make sure to select ",(0,r.kt)("strong",{parentName:"p"},"version 2.0"),". The Bluedot integration only supports this webhooks version.")),(0,r.kt)("h2",{id:"find-bluedot-webhook-url"},"Find Bluedot Webhook URL"),(0,r.kt)("p",null,"To fill out the ",(0,r.kt)("em",{parentName:"p"},"Create Webhook")," form, the first step is to get Bluedot\u2019s webhook URL, which you will use when creating the Webhook in Flipdish."),(0,r.kt)("p",null,"From Canvas, go to the integrations section and select Flipdish."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9393).Z,width:"1024",height:"598"})),(0,r.kt)("p",null,"Copy the Bluedot Webhook URL from the\xa0Your webhook URL\xa0section and paste it into Flipdish\u2019s Create Webhook form."),(0,r.kt)("p",null,"Also, paste the ",(0,r.kt)("strong",{parentName:"p"},"verify token")," in Canvas. This token allows us to ensure that requests sent to the callback URL are secure and coming from Flipdish."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(13).Z,width:"1024",height:"718"})),(0,r.kt)("h2",{id:"add-the-orderaccepted-event-on-flipdishs-webhook"},"Add the ",(0,r.kt)("inlineCode",{parentName:"h2"},"order.accepted")," event on Flipdish\u2019s webhook"),(0,r.kt)("p",null,"The next step is to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"order.accepted")," event. Click the\xa0",(0,r.kt)("em",{parentName:"p"},"hotdog"),"\xa0menu icon and\xa0",(0,r.kt)("strong",{parentName:"p"},"Event names.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7577).Z,width:"1024",height:"427"})),(0,r.kt)("p",null,"Select the ",(0,r.kt)("inlineCode",{parentName:"p"},"order.accepted")," event."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8403).Z,width:"1024",height:"641"})),(0,r.kt)("p",null,"Once configured the Webhook and added the ",(0,r.kt)("inlineCode",{parentName:"p"},"order.accepted")," event , you can set up your stores in Canvas. Make sure to use the Flipdish\xa0Store Id\xa0when adding the Destination ID to your stores. To learn more about creating your stores in Canvas, check\xa0",(0,r.kt)("a",{parentName:"p",href:"/Canvas/Store%20management"},"Canva\u2019s Store Management documentation"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To get your\xa0Store IDs\xa0please contact\xa0Flipdish\xa0support team at ",(0,r.kt)("a",{parentName:"p",href:"https://help.flipdish.com/"},"help.flipdish.com"))),(0,r.kt)("h2",{id:"additional-settings"},"Additional Settings"),(0,r.kt)("p",null,"From the Order settings menu, please select the Customer Name required for collection. We\u2019ll display the customer\u2019s name to the store staff on Hello Screens."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8615).Z,width:"1024",height:"238"})),(0,r.kt)("p",null,"If you have any questions, contact us at\xa0",(0,r.kt)("a",{parentName:"p",href:"mailto:help@bluedot.io"},"help@bluedot.io")))}h.isMDXComponent=!0},13:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/canvas_flipdish_page-1024x718-3cc563548fa2e389c55c0623865791ca.png"},9393:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/canvas_integrations_flipdish-1024x598-a143655cc6b8400551f477979ea51767.png"},7577:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/flipdish_add_event-1024x427-57bf52a7c2b0d5ab2f4fe50a8db4f620.png"},8615:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/flipdish_customer_name_required-1024x238-309c0f9ae4832fe3f4d0dec45055e56c.png"},8403:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/flipdish_select_event-1024x641-29a93aa7620d769ae811e3f148ea895d.png"},117:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/flipdish_webhook_form-1024x562-b3c69a17f265525acde39ebbe80f7bb4.png"}}]);