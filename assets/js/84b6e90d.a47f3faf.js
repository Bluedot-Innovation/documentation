"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[17],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={pagination_next:"APIs/Config API/How to authenticate with Config API",pagination_prev:null},o="Overview",l={unversionedId:"APIs/Config API/Overview",id:"APIs/Config API/Overview",title:"Overview",description:"Config APIs expose the functionality of the feature-rich user interface, Canvas, as RESTful web services. A broad range of clients and integrations can be built to utilise these services.",source:"@site/docs/APIs/Config API/Overview.md",sourceDirName:"APIs/Config API",slug:"/APIs/Config API/Overview",permalink:"/APIs/Config API/Overview",draft:!1,tags:[],version:"current",frontMatter:{pagination_next:"APIs/Config API/How to authenticate with Config API",pagination_prev:null},sidebar:"defaultSidebar",next:{title:"How to authenticate with Config API",permalink:"/APIs/Config API/How to authenticate with Config API"}},u={},s=[{value:"Bluedot API model objects",id:"bluedot-api-model-objects",level:2},{value:"API reference",id:"api-reference",level:2},{value:"Regions",id:"regions",level:2},{value:"Example of authenticating the Config API",id:"example-of-authenticating-the-config-api",level:2}],c={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Config APIs expose the functionality of the feature-rich user interface, ",(0,a.kt)("a",{parentName:"p",href:"/Canvas/Overview"},"Canvas"),", as RESTful web services. A broad range of clients and integrations can be built to utilise these services."),(0,a.kt)("p",null,"Data added through the Config APIs can be reviewed and edited via the Canvas user interface and vice versa."),(0,a.kt)("h2",{id:"bluedot-api-model-objects"},"Bluedot API model objects"),(0,a.kt)("p",null,"You will largely interact with the following API model objects when using Config APIs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Projects",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Zones",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Geofeatures",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Polygon"),(0,a.kt)("li",{parentName:"ul"},"Circle"),(0,a.kt)("li",{parentName:"ul"},"Bounding box (Rectangle)"),(0,a.kt)("li",{parentName:"ul"},"Geoline\u2122"))),(0,a.kt)("li",{parentName:"ul"},"Conditions",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Time Active"),(0,a.kt)("li",{parentName:"ul"},"Date Range"),(0,a.kt)("li",{parentName:"ul"},"Travel Path"),(0,a.kt)("li",{parentName:"ul"},"Travel Direction"),(0,a.kt)("li",{parentName:"ul"},"Speed"))),(0,a.kt)("li",{parentName:"ul"},"Custom Data"))),(0,a.kt)("li",{parentName:"ul"},"Stores (Destinations)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Store Name"),(0,a.kt)("li",{parentName:"ul"},"Address"),(0,a.kt)("li",{parentName:"ul"},"Location (Coordinates)"),(0,a.kt)("li",{parentName:"ul"},"Email"),(0,a.kt)("li",{parentName:"ul"},"Destination ID"))))),(0,a.kt)("li",{parentName:"ul"},"Tags"),(0,a.kt)("li",{parentName:"ul"},"Users"),(0,a.kt)("li",{parentName:"ul"},"Sessions")),(0,a.kt)("h2",{id:"api-reference"},"API reference"),(0,a.kt)("p",null,"The API specification for the Config API can be found ",(0,a.kt)("a",{parentName:"p",href:"https://config-docs.bluedot.io/"},"here"),"."),(0,a.kt)("h2",{id:"regions"},"Regions"),(0,a.kt)("p",null,"Config API is hosted\xa0in multiple regions worldwide to ensure better performance of our services.\xa0To learn more refer to the\xa0",(0,a.kt)("a",{parentName:"p",href:"/Regions%20URLs"},"Bluedot Regions documentation"),"."),(0,a.kt)("h2",{id:"example-of-authenticating-the-config-api"},"Example of authenticating the Config API"),(0,a.kt)("p",null,"To access most of the endpoints of the Config API, you first need an Access Token. An example of how to authenticate using the access token can be found ",(0,a.kt)("a",{parentName:"p",href:"/APIs/Config%20API/How%20to%20authenticate%20with%20Config%20API"},"here"),"."))}f.isMDXComponent=!0}}]);