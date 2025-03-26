"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[1360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||v[d]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={pagination_next:"Canvas/Analytics/Hello Order Logs"},l="Historical Event Tracking",o={unversionedId:"Canvas/Analytics/Historical Event Tracking",id:"Canvas/Analytics/Historical Event Tracking",title:"Historical Event Tracking",description:"Overview",source:"@site/docs/Canvas/Analytics/Historical Event Tracking.md",sourceDirName:"Canvas/Analytics",slug:"/Canvas/Analytics/Historical Event Tracking",permalink:"/Canvas/Analytics/Historical Event Tracking",draft:!1,tags:[],version:"current",frontMatter:{pagination_next:"Canvas/Analytics/Hello Order Logs"},sidebar:"defaultSidebar",previous:{title:"Store custom data",permalink:"/Canvas/Stores/Store custom data"},next:{title:"Hello Order Logs",permalink:"/Canvas/Analytics/Hello Order Logs"}},s={},c=[{value:"Overview",id:"overview",level:3},{value:"Accessing Historical Analytics",id:"accessing-historical-analytics",level:3},{value:"Selecting Event Types for Visualisation",id:"selecting-event-types-for-visualisation",level:3},{value:"Filters",id:"filters",level:3}],p={toc:c},u="wrapper";function v(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"historical-event-tracking"},"Historical Event Tracking"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,'Our analytics platform\'s "Historical" feature enables users to track and visualise the number of events generated by Bluedot products over time. This tool lets you segment the visualised data by specific event types, such as Geo-triggering, Tempo, Wave API and Hello.'),(0,a.kt)("h3",{id:"accessing-historical-analytics"},"Accessing Historical Analytics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1:"),'\xa0Select the "Analytics" tab from the Navigation bar.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2:"),'\xa0Click on "Historical" from the dropdown menu.')),(0,a.kt)("h3",{id:"selecting-event-types-for-visualisation"},"Selecting Event Types for Visualisation"),(0,a.kt)("p",null,"Within the Historical feature, users can filter the data to visualise the following event types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Geo-triggering:"),'\xa0Tracks daily "Entry" events generated by the Mobile SDK.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tempo:"),"\xa0Displays daily updates generated by our Mobile SDK, reflecting users' location updates."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Wave API:"),"\xa0Shows the daily count of Wave API events, indicating API usage levels."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hello Screens:"),"\xa0Provides data on the daily events generated by the Hello Screens.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The displayed data only covers the past 12 months.")),(0,a.kt)("h3",{id:"filters"},"Filters"),(0,a.kt)("p",null,"The line chart visualisation is designed for simplicity with the following filters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Date Range Selection:"),"\xa0You specify the date range for the events they wish to view, allowing for flexible historical analysis."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Project Filter:"),"\xa0The visualisation supports filtering by Project."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Interactivity:"),"\xa0Hovering over any point on the line chart will reveal detailed information about the number of events for the selected date.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(87722).Z,width:"2972",height:"1410"})))}v.isMDXComponent=!0},87722:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/canvas-analytics-historical-ebc5aba959224b8a004a8e641b1be501.png"}}]);