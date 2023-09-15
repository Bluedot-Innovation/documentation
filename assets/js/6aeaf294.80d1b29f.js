"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[9022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Analytics API User Guide",l={unversionedId:"APIs/Analytics API/Overview",id:"APIs/Analytics API/Overview",title:"Analytics API User Guide",description:"Analytics API offers a wide range of functions to programmatically create reports on different data points generated by Bluedot products.",source:"@site/docs/APIs/Analytics API/Overview.md",sourceDirName:"APIs/Analytics API",slug:"/APIs/Analytics API/Overview",permalink:"/APIs/Analytics API/Overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"How to authenticate with Config API",permalink:"/APIs/Config API/How to authenticate with Config API"},next:{title:"Analytics API User Guide",permalink:"/APIs/Analytics API/Overview"}},s={},p=[{value:"Regions",id:"regions",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Geo-triggering Events",id:"geo-triggering-events",level:2},{value:"Tempo Events",id:"tempo-events",level:2},{value:"Wave API events",id:"wave-api-events",level:2},{value:"Hello Screens events",id:"hello-screens-events",level:2},{value:"API reference",id:"api-reference",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"analytics-api-user-guide"},"Analytics API User Guide"),(0,a.kt)("p",null,"Analytics API offers a wide range of functions to programmatically create reports on different data points generated by Bluedot products."),(0,a.kt)("p",null,"You can use the Analytics API to query:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Point SDK entry and exit events"),(0,a.kt)("li",{parentName:"ul"},"ETA updates generated by Tempo"),(0,a.kt)("li",{parentName:"ul"},"Wave API events"),(0,a.kt)("li",{parentName:"ul"},"Order updates on Hello Screens")),(0,a.kt)("p",null,"You can request the data in JSON or CSV formats."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Historical events are available for up to 12 months.")),(0,a.kt)("h2",{id:"regions"},"Regions"),(0,a.kt)("p",null,"Analytics API is hosted in multiple regions worldwide to ensure better performance of our services. Make sure to use the endpoint for the region where your account is hosted. To learn more, refer to the\xa0",(0,a.kt)("a",{parentName:"p",href:"/Regions%20URLs"},"Bluedot Regions documentation"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Region")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Analytics API URL")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"APAC"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://analytics.bluedot.io/prod1/"},"https://analytics.bluedot.io/prod1/"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EUROPE"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://eu1-analytics.bluedot.io/prod1/"},"https://eu1-analytics.bluedot.io/prod1/"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NORTH AMERICA"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://us1-analytics.bluedot.io/prod1/"},"https://us1-analytics.bluedot.io/prod1/"))))),(0,a.kt)("p",null,"If you\u2019re unsure which region your account is in, don\u2019t hesitate to contact us at\xa0",(0,a.kt)("a",{parentName:"p",href:"mailto:help@bluedot.io"},"help@bluedot.io"),"."),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"Analytics API uses the same authentication method as Config API. You\u2019ll need to pass an Access Token in the header of the request that you can get from the Config API ",(0,a.kt)("inlineCode",{parentName:"p"},"/sessions")," endpoint. Check the\xa0",(0,a.kt)("a",{parentName:"p",href:"/APIs/Config%20API/How%20to%20authenticate%20with%20Config%20API"},"\u201cHow to authenticate with Config API\u201d"),"\xa0guide for more details."),(0,a.kt)("h2",{id:"geo-triggering-events"},"Geo-triggering Events"),(0,a.kt)("p",null,"You can query Entry and Exit events generated by the Point SDK using the ",(0,a.kt)("inlineCode",{parentName:"p"},"/entry")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/exit")," endpoints. You can create reports for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Date and periods (days, months or year)"),(0,a.kt)("li",{parentName:"ul"},"Devices operating system (Android or iOS)"),(0,a.kt)("li",{parentName:"ul"},"Application state at the moment of the event (background or foreground)"),(0,a.kt)("li",{parentName:"ul"},"The location permissions granted at the moment of the event.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"/checkins")," endpoint is deprecated. We highly recommend using the ",(0,a.kt)("inlineCode",{parentName:"p"},"/entry")," endpoint to query Geo-triggering entry events.")),(0,a.kt)("h2",{id:"tempo-events"},"Tempo Events"),(0,a.kt)("p",null,"To create reports on the customer\u2019s ETA to the destination, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"/tempo")," endpoint to query Point SDK Tempo events based on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A given date or time frame (days, months or year)"),(0,a.kt)("li",{parentName:"ul"},"Device operating system (Android or iOS)"),(0,a.kt)("li",{parentName:"ul"},"Application state at the moment of the event (background or foreground)"),(0,a.kt)("li",{parentName:"ul"},"The location permissions granted at the moment of the event.")),(0,a.kt)("h2",{id:"wave-api-events"},"Wave API events"),(0,a.kt)("p",null,"To create reports for a curbside/pickup web-based solution using Wave API, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"/wave")," endpoint. You can query data based on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A given date or time frame (days, months or year)"),(0,a.kt)("li",{parentName:"ul"},"Order\u2019s state (based on the event type)"),(0,a.kt)("li",{parentName:"ul"},"By store (Also known as destination)")),(0,a.kt)("h2",{id:"hello-screens-events"},"Hello Screens events"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"/hello")," endpoint allows you to create reports about the progress and different states of the orders on Hello Screens. You can query this data based on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A given date or time frame (days, months or year)"),(0,a.kt)("li",{parentName:"ul"},"Order status (I.E. on the way, arrived, staff acknowledge the order)"),(0,a.kt)("li",{parentName:"ul"},"Order IDs"),(0,a.kt)("li",{parentName:"ul"},"By store (Also known as destination)"),(0,a.kt)("li",{parentName:"ul"},"Source of the event (For example, from web or mobile app)")),(0,a.kt)("h2",{id:"api-reference"},"API reference"),(0,a.kt)("p",null,"The API specification for the Analytics API can be found\xa0",(0,a.kt)("a",{parentName:"p",href:"https://analytics-docs.bluedot.io/"},"here"),"."))}c.isMDXComponent=!0}}]);