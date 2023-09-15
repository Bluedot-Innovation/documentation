"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[8480],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),m=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=m(n),s=r,g=u["".concat(d,".").concat(s)]||u[s]||c[s]||i;return n?a.createElement(g,o(o({ref:e},p),{},{components:n})):a.createElement(g,o({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l[u]="string"==typeof t?t:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4017:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={},o="Drive-thru Implementation Guide",l={unversionedId:"Implementation and Best Practices Guides/Drive-thru implementation guide",id:"Implementation and Best Practices Guides/Drive-thru implementation guide",title:"Drive-thru Implementation Guide",description:"This guide explains how to successfully implement a Drive-thru use case using Bluedot.",source:"@site/docs/Implementation and Best Practices Guides/Drive-thru implementation guide.md",sourceDirName:"Implementation and Best Practices Guides",slug:"/Implementation and Best Practices Guides/Drive-thru implementation guide",permalink:"/documentation/Implementation and Best Practices Guides/Drive-thru implementation guide",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Curbside Pickup Implementation Guide",permalink:"/documentation/Implementation and Best Practices Guides/Curbside & Pickup implementation guide"},next:{title:"Marketing / Gamification Implementation Guide",permalink:"/documentation/Implementation and Best Practices Guides/Marketing & Gamification implementation guide"}},d={},m=[{value:"SDK Implementation",id:"sdk-implementation",level:2}],p={toc:m},u="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"drive-thru-implementation-guide"},"Drive-thru Implementation Guide"),(0,r.kt)("p",null,"This guide explains how to successfully implement a Drive-thru use case using Bluedot."),(0,r.kt)("h2",{id:"sdk-implementation"},"SDK Implementation"),(0,r.kt)("p",null,"When implementing the SDK we want to make sure to track the location of the users during the life-cycle of an order. This means that we want to start the SDK when the user places an order, and turn it off when it leaves the store."),(0,r.kt)("p",null,"In this guide, we\u2019ll cover when to call the main SDK methods required for a Drive-thru use case. For all the technical details on all the SDK\u2019s methods and how they work please refer to our ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bluedot.io/"},"Documentation website.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.google.com/drawings/d/e/2PACX-1vS2MVYfAPOE0H-vohfxPaT42vdxC7IRIzKwmRLJOdOn06lpo8OdRtVaDdDoSHm9ubB2xoQaS3ppxGOy/pub?w=2698&h=1570",alt:null})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Step")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Functionality")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Documentation")),(0,r.kt)("th",{parentName:"tr",align:"left"}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Initialize")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/documentation/Point%20SDK/Android/Quick%20Start"},"Android")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/documentation/Point%20SDK/iOS/Quick%20Start"},"iOS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setCustomEventMetaData")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/documentation/Custom%20Event%20Metadata"},"Android")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/documentation/Custom%20Event%20Metadata"},"iOS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Start Geo-triggering"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/documentation/Point%20SDK/Android/Geo-triggering"},"Android")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/documentation/Point%20SDK/iOS/Geo-triggering"},"iOS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enterZone")," Order Taker event callback"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/documentation/Point%20SDK/Android/Geo-triggering"},"Android")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/documentation/Point%20SDK/iOS/Geo-triggering"},"iOS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enterZone")," Pickup Window event callback"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/documentation/Point%20SDK/Android/Geo-triggering"},"Android")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/documentation/Point%20SDK/iOS/Geo-triggering"},"iOS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"6"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"exitZone")," event callback"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/documentation/Point%20SDK/Android/Geo-triggering"},"Android")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/documentation/Point%20SDK/iOS/Geo-triggering"},"iOS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Stop Geo-triggering"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/documentation/Point%20SDK/Android/Geo-triggering"},"Android")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/documentation/Point%20SDK/iOS/Geo-triggering"},"iOS"))))))}c.isMDXComponent=!0}}]);