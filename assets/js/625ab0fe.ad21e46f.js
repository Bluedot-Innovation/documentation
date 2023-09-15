"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[2521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},l="Interacting with Hello Screens",i={unversionedId:"Web SDK/Interacting with Hello Screens",id:"Web SDK/Interacting with Hello Screens",title:"Interacting with Hello Screens",description:"What\u2019s Hello Screens?",source:"@site/docs/Web SDK/Interacting with Hello Screens.md",sourceDirName:"Web SDK",slug:"/Web SDK/Interacting with Hello Screens",permalink:"/Web SDK/Interacting with Hello Screens",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Location permissions and best practices",permalink:"/Web SDK/Location permissions and best practices"},next:{title:"NodeJS environment vs browser",permalink:"/Web SDK/NodeJs environment vs browser"}},s={},c=[{value:"What\u2019s Hello Screens?",id:"whats-hello-screens",level:2},{value:"Sending Hello-ready events",id:"sending-hello-ready-events",level:2},{value:"Using the Hello Model",id:"using-the-hello-model",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interacting-with-hello-screens"},"Interacting with Hello Screens"),(0,o.kt)("h2",{id:"whats-hello-screens"},"What\u2019s Hello Screens?"),(0,o.kt)("p",null,"Hello Screens are a super fast & super simple dashboard that your team can use to see a customer\u2019s ETA and get visual and audible notifications exactly when they Arrive. It is hardware-free. With a responsive design that runs in-browser, you can use an existing device you have on-site \u2013 this may be a tablet from a 3rd party ordering app, the web browser on your POS hardware, or even the mobile device in your Floor Managers pocket. More information ",(0,o.kt)("a",{parentName:"p",href:"/Hello%20Screens/Overview"},"here"),"."),(0,o.kt)("h2",{id:"sending-hello-ready-events"},"Sending Hello-ready events"),(0,o.kt)("p",null,"For events to considered valid to update the Hello Screens UI and API, it requires the appropriate ",(0,o.kt)("inlineCode",{parentName:"p"},"destinationId"),",\xa0 \xa0",(0,o.kt)("inlineCode",{parentName:"p"},"orderId"),"\xa0as well as an ",(0,o.kt)("inlineCode",{parentName:"p"},"eventType")," field to be supplied in the custom event metadata passed in with the event. The most reliable method to interact with the Hello framework is to use a Hello Model object when preparing data for your events."),(0,o.kt)("h2",{id:"using-the-hello-model"},"Using the Hello Model"),(0,o.kt)("p",null,"The Hello Model is a convenience data object to assist in submitting valid events for the Hello product. You can use it to submit a Wave event with correctly formatted and valid Hello data fields."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import {\n bluedot,\n createHelloModel\n} from \'@bluedot-innovation/javascript-sdk\'\n\n...\nconst helloModel \\= createHelloModel()\nhelloModel.setOrderId("myOrderId") // An Order ID must be provided for Hello events.\n .setEventType("onTheWay")         // An Event Type must be provided for Hello events.\n .setMobileNumber("+1234567890")\n .setCustomerName("Jane Doe");\n\nconst destinationId \\= "myDestination"\n\nbluedot.wave.send(destinationId, helloModel);\n')),(0,o.kt)("p",null,"For further details check the Web SDK API documentation ",(0,o.kt)("a",{parentName:"p",href:"https://bluedot-javascript-sdk-docs.bluedot.io/"},"here")))}u.isMDXComponent=!0}}]);