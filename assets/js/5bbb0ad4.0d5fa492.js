"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[32],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,y=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(y,o(o({ref:t},d),{},{components:n})):a.createElement(y,o({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={},o="Raydiant Integration",l={unversionedId:"Integrations/Raydiant",id:"Integrations/Raydiant",title:"Raydiant Integration",description:"Take your Curbside & Pickup experience to the next level by combining Bluedot\u2019s Hello Screens with Raydiant to deliver personalized digital experiences.",source:"@site/docs/Integrations/Raydiant.md",sourceDirName:"Integrations",slug:"/Integrations/Raydiant",permalink:"/Integrations/Raydiant",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Oracle Simphony POS Integration",permalink:"/Integrations/Oracle Simphony"},next:{title:"Safegraph Integration",permalink:"/Integrations/Safegraph"}},s={},c=[{value:"Setting up Hello Screens with Raydiant",id:"setting-up-hello-screens-with-raydiant",level:2},{value:"Connecting a screen to Raydiant",id:"connecting-a-screen-to-raydiant",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"raydiant-integration"},"Raydiant Integration"),(0,i.kt)("p",null,"Take your Curbside & Pickup experience to the next level by combining Bluedot\u2019s Hello Screens with ",(0,i.kt)("a",{parentName:"p",href:"https://www.raydiant.com/"},"Raydiant")," to deliver personalized digital experiences."),(0,i.kt)("p",null,"Bluedot Hello Screens visualize customer ETAs and arrivals to your store. By combining them with Raydiant\u2019s platform, you can display this vital information where you need it and deliver an unbeatable curbside customer experience and lightning-fast service."),(0,i.kt)("h2",{id:"setting-up-hello-screens-with-raydiant"},"Setting up Hello Screens with Raydiant"),(0,i.kt)("p",null,"To set up Hello Screens with Raydiant, you must first have an active account with Raydiant and Bluedot.\xa0"),(0,i.kt)("p",null,"You can find the Bluedot Raydiant App under the library tab of the Raydiant dashboard. When creating a new playlist, there will be access to all Raydiant apps, including the Bluedot Raydiant app."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8267).Z,width:"1024",height:"481"})),(0,i.kt)("p",null,"Once the Bluedot Raydiant app has been chosen, there are a few options to be selected."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name: Name of the presentation in the library"),(0,i.kt)("li",{parentName:"ul"},"Duration: The duration that Hello Screens will appear through Raydiant.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5920).Z,width:"1024",height:"481"})),(0,i.kt)("p",null,"Once saved, the playlist will appear in the library."),(0,i.kt)("h2",{id:"connecting-a-screen-to-raydiant"},"Connecting a screen to Raydiant"),(0,i.kt)("p",null,"Through the use of ",(0,i.kt)("a",{parentName:"p",href:"https://secondscreen.raydiant.com/"},"Raydiant Second Screen")," you will be able to link the Hello Screen to the Raydiant Screens Dashboard. By using the authentication code from Raydiant\u2019s Second Screen to the input on the Raydiant Screens dashboard. You can then also name this screen as desired."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3134).Z,width:"1024",height:"479"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(929).Z,width:"1024",height:"481"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4926).Z,width:"1024",height:"479"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2381).Z,width:"1024",height:"479"})),(0,i.kt)("p",null,"Once the second screen is online, you can then add a playlist from the library with all Raydiant apps desired, including Bluedots Hello Screens."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9248).Z,width:"1024",height:"479"})),(0,i.kt)("p",null,"Once linked and the updated playlist has been published to the Second Screen, the Second Screen will navigate to the Hello Screens linking page.\xa0"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8377).Z,width:"1024",height:"480"})),(0,i.kt)("p",null,"When you navigate to the Hello Screens Linkin Page, you will see a one-time code displayed on the screen. Copy this code and enter it into the linking page in Bluedot\u2019s Canvas UI under the \u201cHello Screens\u201d tab in the drop-down menu. Once completed, you will be able to use your Raydiant Screen to show your Bluedot Hello Screen.\xa0"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9946).Z,width:"1024",height:"480"})))}u.isMDXComponent=!0},8267:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Raydiant_docs-1-1024x481-028634b6e8b35fcd687b05f9055110e1.png"},5920:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Raydiant_docs-2-1024x481-019d3381b9306028e0a653132600e2fc.png"},3134:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Raydiant_docs-3-1024x479-74ea1da1620a4c5febeb1fc94ee3c084.png"},929:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Raydiant_docs-4-1024x481-f0ea365bfd17e77385220aad69af720e.png"},4926:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Raydiant_docs-5-1024x479-b22b5c365191c78d4d0a9fe8739b508a.png"},2381:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Raydiant_docs-6-1024x479-62fdba4a58714c81a5f3b686c5d4e857.png"},9248:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Raydiant_docs-7-1024x479-fc10fa3d6795387082362b8c37f6fdad.png"},8377:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Raydiant_docs-8-1024x480-149ab1006cc503e60dff6f423d4963c8.png"},9946:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Raydiant_docs-9-1024x480-af5d283603e5fc8f40739be9173f269b.png"}}]);