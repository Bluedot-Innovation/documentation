"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[7232],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>h});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(i),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return i?n.createElement(h,o(o({ref:t},l),{},{components:i})):n.createElement(h,o({ref:t},l))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},4660:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=i(7462),r=(i(7294),i(3905));const a={},o="Guide to submitting apps with location services",s={unversionedId:"Implementation and Best Practices Guides/Submitting apps with location services guide",id:"Implementation and Best Practices Guides/Submitting apps with location services guide",title:"Guide to submitting apps with location services",description:"If you\u2019re building an app with Bluedot SDK that uses location services, you\u2019ll want to make sure you follow the best practices when submitting it to the App marketplaces (Apple App Store and Google Play Store). This guide will cover important aspects like justifying location services, asking users for permission, providing the right App metadata, and being prepared for the App review process.",source:"@site/docs/Implementation and Best Practices Guides/Submitting apps with location services guide.md",sourceDirName:"Implementation and Best Practices Guides",slug:"/Implementation and Best Practices Guides/Submitting apps with location services guide",permalink:"/documentation/Implementation and Best Practices Guides/Submitting apps with location services guide",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Marketing / Gamification Implementation Guide",permalink:"/documentation/Implementation and Best Practices Guides/Marketing & Gamification implementation guide"},next:{title:"Region URLs",permalink:"/documentation/Regions URLs"}},p={},c=[],l={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"guide-to-submitting-apps-with-location-services"},"Guide to submitting apps with location services"),(0,r.kt)("p",null,"If you\u2019re building an app with Bluedot SDK that uses location services, you\u2019ll want to make sure you follow the best practices when submitting it to the App marketplaces (Apple App Store and Google Play Store). This guide will cover important aspects like justifying location services, asking users for permission, providing the right App metadata, and being prepared for the App review process."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Explain your value proposition:"),"\xa0Clearly explain the purpose of using location services in your app and how they benefit the user. Ensure you communicate why location tracking is integral to the app\u2019s functionality. This will speed up the app review process and as well will highly increase the likelihood a customer will grant the location permissions. If your App requires \u201cAlways\u201d permissions, clarify to your customer why and how their location will be used.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(1008).Z,width:"390",height:"844"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Request user permission:"),"\xa0When requesting location permissions, craft a friendly and engaging purpose message that tells users why your app needs their location. Make it easy for them to see the value in granting permission.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(9420).Z,width:"390",height:"844"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Background location access best practices:")," If your app requires background location access, clearly explain the necessity and how it improves the user experience in the app description."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Provide accurate metadata:"),"\xa0In your App submission, provide accurate and relevant information, such as app description, keywords, and screenshots. Mention the use of location services and their benefits for the user in the app description."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Offer testing instructions for the location-based features:")," Include clear steps to test your app\u2019s location-based features for the review team. This will speed up the reviewing process and increase the chances of quick approval."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Be prepared for App review:"),"\xa0The App marketplace review team might have some questions about your app\u2019s use of location services. Be ready to provide clear documentation, privacy policy details, or examples of how location data is used in the app. Being prepared will help speed up the review process and increase your chances of getting approved.")),(0,r.kt)("p",null,"By following the best practices in this friendly guide, you can create an enjoyable user experience, protect user privacy, and boost your chances of a quick and successful submission. Remember to keep things clear and focused on the benefits of location services for your users."),(0,r.kt)("p",null,"If you have any questions, don\u2019t hesitate to contact us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:help@bluedot.io"},"help@bluedot.io"),"."))}d.isMDXComponent=!0},9420:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/location-services-guide-2-d1af362009905412048068ad465d54f5.jpg"},1008:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/location-services-guide-e902a19521b986cca9c11c918be108d8.jpg"}}]);