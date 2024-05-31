"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[9190],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||n;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var u=2;u<n;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},187:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=r(7462),o=(r(7294),r(3905));const n={},s="Custom Order States",l={unversionedId:"Hello Screens/Custom Order States",id:"Hello Screens/Custom Order States",title:"Custom Order States",description:"The Custom Order States feature in Hello Screens allows brands to add order states that align more accurately with their store operations flow. This ensures that the order tracking process is more tailored to each brand\u2019s specific needs, leading to more efficient operations and enhanced customer satisfaction.",source:"@site/docs/Hello Screens/Custom Order States.md",sourceDirName:"Hello Screens",slug:"/Hello Screens/Custom Order States",permalink:"/Hello Screens/Custom Order States",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Order Grouping",permalink:"/Hello Screens/Grouping Orders"},next:{title:"Hello Templates",permalink:"/Hello Screens/Custom configuration per store"}},i={},u=[{value:"Default Order States",id:"default-order-states",level:3},{value:"Example of Custom Order States for a Restaurant",id:"example-of-custom-order-states-for-a-restaurant",level:3},{value:"Enabling Custom Order States",id:"enabling-custom-order-states",level:3},{value:"Integration with Wave API",id:"integration-with-wave-api",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-order-states"},"Custom Order States"),(0,o.kt)("p",null,"The Custom Order States feature in Hello Screens allows brands to add order states that align more accurately with their store operations flow. This ensures that the order tracking process is more tailored to each brand\u2019s specific needs, leading to more efficient operations and enhanced customer satisfaction."),(0,o.kt)("h3",{id:"default-order-states"},"Default Order States"),(0,o.kt)("p",null,"By default, Hello Screens includes the following order states:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"On The Way:")," The customer is en route to collect their order. This state also provides the estimated time of arrival (ETA) when tracked with ",(0,o.kt)("a",{parentName:"li",href:"/Tempo/Overview"},"Tempo"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Arrived:")," The customer has arrived at the store detected by our ",(0,o.kt)("a",{parentName:"li",href:"/Point%20SDK/Overview"},"Point SDK"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Complete:")," The order has been successfully handed over to the customer and marked complete.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(2933).Z,width:"3072",height:"1821"})),(0,o.kt)("h3",{id:"example-of-custom-order-states-for-a-restaurant"},"Example of Custom Order States for a Restaurant"),(0,o.kt)("p",null,"To illustrate how custom order states can be used, consider the following example of a restaurant's order flow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ready to Prepare:")," The order has been received and is ready to be prepared."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"On The Way:")," The customer is on their way to collect their order."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Arrived:")," The customer has arrived at the store."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"At Pickup Window:")," The customer is at the designated pickup window."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Complete:")," The order has been successfully handed over to the customer and marked complete.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(9176).Z,width:"3072",height:"2721"})),(0,o.kt)("h3",{id:"enabling-custom-order-states"},"Enabling Custom Order States"),(0,o.kt)("p",null,"To enable the Custom Order States feature, please contact your Bluedot Customer Experience representative. They will assist you in configuring the order states to match your specific operational requirements."),(0,o.kt)("h3",{id:"integration-with-wave-api"},"Integration with Wave API"),(0,o.kt)("p",null,"You can integrate the Custom Order States with your systems using our Wave API. This allows you to programmatically move orders through the custom states, ensuring seamless integration with your existing workflows. For more details on using the Wave API, please refer to our ",(0,o.kt)("a",{parentName:"p",href:"/APIs/Wave%20API/Overview"},"Wave API documentation"),"."),(0,o.kt)("p",null,"For further assistance, feel free to reach out to our support team at ",(0,o.kt)("a",{parentName:"p",href:"mailto:help@bluedot.io"},"help@bluedot.io"),"."))}p.isMDXComponent=!0},2933:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Hello Screens - Default Order States-2286c83f28bf1e52608bb50c403d3b41.png"},9176:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Hello Screens - With Custom Order States-497f63f4729427b5792c96d0369fc3e3.png"}}]);