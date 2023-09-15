"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[4463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={},s="User Persistence in the SDK",o={unversionedId:"Web SDK/User persistence in the SDK",id:"Web SDK/User persistence in the SDK",title:"User Persistence in the SDK",description:"In order to identify users, a field called installRef is sent with events in a browser environment. This is a UUID value that is generated to allow you to identify customers across multiple wave events and multiple interactions with a site which uses the SDK.",source:"@site/docs/Web SDK/User persistence in the SDK.md",sourceDirName:"Web SDK",slug:"/Web SDK/User persistence in the SDK",permalink:"/documentation/Web SDK/User persistence in the SDK",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"SDK Retry Behaviour",permalink:"/documentation/Web SDK/SDK retry behaviour"},next:{title:"SDK Development Tools",permalink:"/documentation/Web SDK/SDK development tools"}},l={},p=[],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"user-persistence-in-the-sdk"},"User Persistence in the SDK"),(0,i.kt)("p",null,"In order to identify users, a field called ",(0,i.kt)("inlineCode",{parentName:"p"},"installRef")," is sent with events in a browser environment. This is a UUID value that is generated to allow you to identify customers across multiple wave events and multiple interactions with a site which uses the SDK."),(0,i.kt)("p",null,"By default user persistence is disabled, meaning that each time a page is loaded or refreshed a new ",(0,i.kt)("inlineCode",{parentName:"p"},"installRef")," will be generated. Until that page is reloaded the same UUID will be sent with each triggered event, so for example if the page allows a user to send an On The Way event, and then later an Arrived event, as long as the page is not reloaded both these events will contain the same ",(0,i.kt)("inlineCode",{parentName:"p"},"installRef")," value. If the page is accessed another time in the same browser, a new ",(0,i.kt)("inlineCode",{parentName:"p"},"installRef")," will be sent with events the following time."),(0,i.kt)("p",null,"The SDK also provides the ability to store the ",(0,i.kt)("inlineCode",{parentName:"p"},"installRef")," in the browser\u2019s local storage mechanism, meaning that the generated ",(0,i.kt)("inlineCode",{parentName:"p"},"installRef")," will be saved and reused on subsequent visits to the page. This allows for more detailed analysis of events which have been sent, as repeat customers can be identified. As user tracking is something which is regulated by legislation in many countries, please ensure you have received the required permission from the user to store this kind of information before enabling this feature."),(0,i.kt)("p",null,"To enable this feature, simply call ",(0,i.kt)("inlineCode",{parentName:"p"},"setUserPersistenceEnabled(true)")," prior to sending a wave event.\xa0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { bluedot } from "@bluedot-innovation/javascript-sdk"\n\nbluedot.initialize("your project id")\nbluedot.config.setUserPersistenceEnabled(true)\nbluedot.wave.send("your destination id")\n')),(0,i.kt)("p",null,"Once the feature is enabled and an ",(0,i.kt)("inlineCode",{parentName:"p"},"installRef")," has been saved to localStorage, it will be used when sending events regardless of whether a call to ",(0,i.kt)("inlineCode",{parentName:"p"},"setUserPersistenceEnabled")," has been made in the current implementation of the SDK. If at any point you wish to delete any stored ",(0,i.kt)("inlineCode",{parentName:"p"},"installRefs")," and have them generated fresh on load as before, simply call ",(0,i.kt)("inlineCode",{parentName:"p"},"setUserPersistenceEnabled(false)"),". Please be aware that once deleted there is no way to retrieve previously stored ",(0,i.kt)("inlineCode",{parentName:"p"},"installRefs"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"As ",(0,i.kt)("inlineCode",{parentName:"p"},"localStorage")," is only available in browser environments, at this time ",(0,i.kt)("inlineCode",{parentName:"p"},"installRef")," behaviour is not supported in Node or React Native environments, and no ",(0,i.kt)("inlineCode",{parentName:"p"},"installRef")," will be sent with Wave events from these environments.")))}u.isMDXComponent=!0}}]);