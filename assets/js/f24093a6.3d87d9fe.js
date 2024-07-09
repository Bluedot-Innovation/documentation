"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[6692],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),v=n,f=d["".concat(l,".").concat(v)]||d[v]||p[v]||o;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}v.displayName="MDXCreateElement"},29813:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i="Send your first Wave",s={unversionedId:"Web SDK/Send your first Wave",id:"Web SDK/Send your first Wave",title:"Send your first Wave",description:"What\u2019s a Wave?",source:"@site/docs/Web SDK/Send your first Wave.md",sourceDirName:"Web SDK",slug:"/Web SDK/Send your first Wave",permalink:"/Web SDK/Send your first Wave",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Quick Start",permalink:"/Web SDK/Quick Start"},next:{title:"Location permissions and best practices",permalink:"/Web SDK/Location permissions and best practices"}},l={},c=[{value:"What\u2019s a Wave?",id:"whats-a-wave",level:2},{value:"Sending Wave with custom data",id:"sending-wave-with-custom-data",level:2},{value:"Sending a Wave with template data",id:"sending-a-wave-with-template-data",level:2},{value:"Receiving a Wave",id:"receiving-a-wave",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"send-your-first-wave"},"Send your first Wave"),(0,n.kt)("h2",{id:"whats-a-wave"},"What\u2019s a Wave?"),(0,n.kt)("p",null,"Wave events provide customer order updates that can be used on any platform. This data then propagates through the Bluedot Arrival platform, updating user status appropriately and firing any webhooks attached. More details ",(0,n.kt)("a",{parentName:"p",href:"/APIs/Wave%20API/Integrate%20Wave%20API"},"here"),"."),(0,n.kt)("h2",{id:"sending-wave-with-custom-data"},"Sending Wave with custom data"),(0,n.kt)("p",null,"First, ensure that your Bluedot JS SDK is initialized, as documented ",(0,n.kt)("a",{parentName:"p",href:"/Web%20SDK/Quick%20Start"},"here"),"."),(0,n.kt)("p",null,"Next, send a Wave with any additional data you might need:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'bluedot.wave.send("<myDestinationId>", {"myCustomDataKey1": "myCustomDataValue1"})\n')),(0,n.kt)("h2",{id:"sending-a-wave-with-template-data"},"Sending a Wave with template data"),(0,n.kt)("p",null,"For templated data such as Hello, use the helper tool as described ",(0,n.kt)("a",{parentName:"p",href:"/Web%20SDK/Interacting%20with%20Hello%20Screens"},"here"),"."),(0,n.kt)("h2",{id:"receiving-a-wave"},"Receiving a Wave"),(0,n.kt)("p",null,"A notification for a customer\u2019s arrival to the store for collecting an order when Wave is used in your app or web page can be received via Webhooks or seen on Hello screens. More details ",(0,n.kt)("a",{parentName:"p",href:"/APIs/Wave%20API/Receiving%20Wave%20API%20events"},"here"),"."))}p.isMDXComponent=!0}}]);