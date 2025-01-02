"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[3991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),y=l(n),d=r,g=y["".concat(c,".").concat(d)]||y[d]||u[d]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[y]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={},o="API Keys management",s={unversionedId:"Canvas/API Keys management",id:"Canvas/API Keys management",title:"API Keys management",description:"The API Keys section is where you create, manage and revoke API Keys to securely interact with Orders API. API Keys are critical for authenticating your Orders API requests and controlling which projects those keys can access. Here\u2019s how you can use this section effectively.",source:"@site/docs/Canvas/API Keys management.md",sourceDirName:"Canvas",slug:"/Canvas/API Keys management",permalink:"/Canvas/API Keys management",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Copy Zones",permalink:"/Canvas/Tools/Copy Zones"},next:{title:"Mandatory Two-Factor Authentication",permalink:"/Canvas/Mandatory two-factor authentication"}},c={},l=[{value:"Accessing the API Keys Section",id:"accessing-the-api-keys-section",level:2},{value:"Creating a New API Key",id:"creating-a-new-api-key",level:2},{value:"Managing Existing API Keys",id:"managing-existing-api-keys",level:2},{value:"Revoking API Keys",id:"revoking-api-keys",level:3}],p={toc:l},y="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(y,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-keys-management"},"API Keys management"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"API Keys")," section is where you create, manage and revoke API Keys to securely interact with ",(0,r.kt)("strong",{parentName:"p"},"Orders API.")," API Keys are critical for authenticating your Orders API requests and controlling which projects those keys can access. Here\u2019s how you can use this section effectively."),(0,r.kt)("h2",{id:"accessing-the-api-keys-section"},"Accessing the API Keys Section"),(0,r.kt)("p",null,"To get started, navigate to the ",(0,r.kt)("strong",{parentName:"p"},"API Keys")," section from the left-hand menu of Canvas. This page give you an overview of all existing API Keys, including their name, the number of projects they\u2019re linked to, and the date they were created."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(90631).Z,width:"1802",height:"776"})),(0,r.kt)("h2",{id:"creating-a-new-api-key"},"Creating a New API Key"),(0,r.kt)("p",null,"Creating an API Key is simple and takes only a few steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the \u201cCreate New API Key\u201d button."),(0,r.kt)("li",{parentName:"ol"},"Enter a descriptive name for the API Key to help you identify its purpose (e.g. \u201cQA Key\u201d or \u201cProduction Key \u201d)."),(0,r.kt)("li",{parentName:"ol"},"Select the projects this will have access to by checking the boxes next to the relevant projects.")),(0,r.kt)("p",null,"Once you\u2019ve completed these steps, click the ",(0,r.kt)("strong",{parentName:"p"},"Generate API Key")," button. Your new API Key will appear on the screen."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(73246).Z,width:"1676",height:"880"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Important")),(0,r.kt)("p",{parentName:"admonition"},"This is the only time you\u2019ll be able to view the API Key. Make sure to copy it and store it securely. Once you leave the page, the key will no longer be accessible. ")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(41261).Z,width:"1028",height:"268"})),(0,r.kt)("h2",{id:"managing-existing-api-keys"},"Managing Existing API Keys"),(0,r.kt)("p",null,"In this section, you can view the configuration of your existing keys, including their name and the projects the have access to. However, you can\u2019t modify the permissions or details of an existing key. If you need a key with different permissions, we recommend creating a new API Key with the desired configuration. This ensures that the integrity of your existing keys remain intact. "),(0,r.kt)("p",null,"To update your Orders API implementation, we recommend revoking the old key (if it\u2019s no longer needed) after creating the new one."),(0,r.kt)("h3",{id:"revoking-api-keys"},"Revoking API Keys"),(0,r.kt)("p",null,"If an API Key is no longer required, you can delete it directly from the API Keys list. Once revoked, the key will become invalid immediately, and any applications using it will lose access to the the associated projects."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(97325).Z,width:"768",height:"616"})))}u.isMDXComponent=!0},90631:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/canvas-api-keys-1-bc479803dfb0a73cfbc4fdd43efbe2e4.png"},73246:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/canvas-api-keys-2-1fdff29bf3d6c22bfc7c0620c2f0a5b0.png"},41261:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/canvas-api-keys-3-492b997c6fb61523b2a89d7ca290e2b7.png"},97325:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/canvas-api-keys-4-f1d170da6aea6566d1290e78e79edd3a.png"}}]);