"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[6904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,m=u["".concat(s,".").concat(c)]||u[c]||h[c]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Integrate Register endpoint",l={unversionedId:"Now Ready/Integrate register endpoint",id:"Now Ready/Integrate register endpoint",title:"Integrate Register endpoint",description:"Once an order has been created in your system, you can register this order in NowReady by using the Register API. The API will return a user_token that will be used to generate the URL that it\u2019s going to be sent to the user to open the NowReady app.",source:"@site/docs/Now Ready/Integrate register endpoint.md",sourceDirName:"Now Ready",slug:"/Now Ready/Integrate register endpoint",permalink:"/documentation/Now Ready/Integrate register endpoint",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Configure Now Ready",permalink:"/documentation/Now Ready/Configure Now Ready"},next:{title:"Overview",permalink:"/documentation/Tempo/Overview"}},s={},p=[{value:"How to register an order?",id:"how-to-register-an-order",level:2},{value:"Endpoints",id:"endpoints",level:3},{value:"API reference",id:"api-reference",level:3},{value:"Generate a NowReady URL",id:"generate-a-nowready-url",level:2},{value:"Now Ready URL by region",id:"now-ready-url-by-region",level:3}],d={toc:p},u="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrate-register-endpoint"},"Integrate Register endpoint"),(0,a.kt)("p",null,"Once an order has been created in your system, you can register this order in NowReady by using the Register API. The API will return a ",(0,a.kt)("inlineCode",{parentName:"p"},"user_token")," that will be used to generate the URL that it\u2019s going to be sent to the user to open the NowReady app."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4731).Z,width:"1024",height:"315"})),(0,a.kt)("h2",{id:"how-to-register-an-order"},"How to register an order?"),(0,a.kt)("p",null,"You can use the following sample JSON payload to register an order:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Replace the ",(0,a.kt)("inlineCode",{parentName:"li"},"DESTINATION_ID")," with the DestinationId you\u2019ve assigned to that store from Canvas. (For further details check this article). This field is required."),(0,a.kt)("li",{parentName:"ol"},"Replace ",(0,a.kt)("inlineCode",{parentName:"li"},"ORDER_ID")," with the ID you want the staff to associate the order with. This field is required."),(0,a.kt)("li",{parentName:"ol"},"The rest of the fields within the ",(0,a.kt)("inlineCode",{parentName:"li"},"customEventMetaData")," are optional and can be used to add any additional details about the order that can help you to provide a better experience to the customer."),(0,a.kt)("li",{parentName:"ol"},"Send a POST request to the Register Order endpoint (",(0,a.kt)("inlineCode",{parentName:"li"},"/hello/register"),").")),(0,a.kt)("p",null,"Register API uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"projectId")," to sign requests. You\u2019ll need to add the key ",(0,a.kt)("inlineCode",{parentName:"p"},"x-bluedot-api-key")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"projectId")," as the value in request\u2019s headers as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"x-bluedot-api-key": "<YOUR_PROJECT_ID>"\n')),(0,a.kt)("p",null,"You can find your ",(0,a.kt)("inlineCode",{parentName:"p"},"projectId")," in ",(0,a.kt)("a",{parentName:"p",href:"/documentation/Canvas/Overview"},"Canvas")," in the Account section."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n\xa0 \xa0 "destinationId": "<DESTINATION_ID>",\n\xa0 \xa0 "customEventMetaData": {\n\xa0 \xa0 \xa0 \xa0 "hs_orderId": "<ORDER_ID>",\n \xa0 \xa0 \xa0 \xa0 "hs_customerName": "John Doe",\n \xa0 \xa0 \xa0 \xa0 "hs_Mobile number": "0412356789",\n \xa0 \xa0 \xa0 \xa0 "hs_Vehicle make": "Honda",\n \xa0 \xa0 \xa0 \xa0 "hs_Vehicle model": "SDG",\n \xa0 \xa0 \xa0 \xa0 "hs_Vehicle plate": "123DFG",\n \xa0 \xa0 \xa0 \xa0 "hs_Parking bay": "213"\n\xa0 \xa0 },\n \xa0 \xa0 "eventTime": "2021-07-02T00:08:16.000Z"\n}\n')),(0,a.kt)("p",null,"5","."," The response of the request will return the ",(0,a.kt)("inlineCode",{parentName:"p"},"userToken")," that will be used to generate the URL that you\u2019ll be sending to your customer when the order is ready to be collected."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n\xa0 \xa0 "userToken": "ABc1234"\n}\n')),(0,a.kt)("p",null,"For more information about registering an order please check the ",(0,a.kt)("a",{parentName:"p",href:"https://events-docs.bluedot.io/#operation/registerOrder"},"Events API reference documentation"),"."),(0,a.kt)("h3",{id:"endpoints"},"Endpoints"),(0,a.kt)("p",null,"Register API is hosted in multiple regions worldwide to ensure the better performance of our services. Each region is completely independent and in a separated geographic area."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Region")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"URL")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"APAC"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://au1-events.bluedot.io/hello/register"},"https://au1-events.bluedot.io/hello/register"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EUROPE"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://eu1-events.bluedot.io/hello/register"},"https://eu1-events.bluedot.io/hello/register"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NORTH AMERICA"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://us1-events.bluedot.io/hello/register"},"https://us1-events.bluedot.io/hello/register"))))),(0,a.kt)("p",null,"If you\u2019re not sure which region your account is in, please contact us at ",(0,a.kt)("a",{parentName:"p",href:"mailto:help@bluedot.io"},"help@bluedot.io"),"."),(0,a.kt)("h3",{id:"api-reference"},"API reference"),(0,a.kt)("p",null,"The API specification for Wave API can be found ",(0,a.kt)("a",{parentName:"p",href:"https://events-docs.bluedot.io/#operation/postWaveEvents"},"here"),"."),(0,a.kt)("h2",{id:"generate-a-nowready-url"},"Generate a NowReady URL"),(0,a.kt)("p",null,"With the ",(0,a.kt)("inlineCode",{parentName:"p"},"userToken")," returned when registering an order, you can generate the URL that you\u2019ll be sending to your customer once the order is ready to be collected. You"),(0,a.kt)("p",null,"You just need to add the user token as the path of the Now Ready base URL."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://us.nowready.io/<USER_TOKEN>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://au.nowready.io/ABc123"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make sure to use the Now Ready URL for the region\u2019s account. If you\u2019re not sure which region your account is in, please contact us at ",(0,a.kt)("a",{parentName:"li",href:"mailto:help@bluedot.io"},"help@bluedot.io"),"."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"userToken")," it is only active for 24 hours by default. If would like to update the expiration time of the ",(0,a.kt)("inlineCode",{parentName:"li"},"userToken")," please contact us at ",(0,a.kt)("a",{parentName:"li",href:"mailto:help@bluedot.io"},"help@bluedot.io"),".")),(0,a.kt)("h3",{id:"now-ready-url-by-region"},"Now Ready URL by region"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Region")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"URL")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"APAC"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://au.nowready.io"},"https://au.nowready.io"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EUROPE"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://eu.nowready.io"},"https://eu.nowready.io"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NORTH AMERICA"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://us.nowready.io"},"https://us.nowready.io"))))))}h.isMDXComponent=!0},4731:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Now-Ready-Order-Registration-1024x315-9bd876319d784aef8089511cacb7b9ff.png"}}]);