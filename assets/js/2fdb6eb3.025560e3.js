"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[2222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},a="Overview",u={unversionedId:"Point SDK/Flutter/Overview",id:"Point SDK/Flutter/Overview",title:"Overview",description:"Flutter Bluedot Point SDK is a wrapper around the\xa0Android Point SDK\xa0and\xa0iOS Point SDK, allowing for Bluedot integration in Flutter apps. Functionality is provided through one single flutter plugin so you can use it for both platforms without downloading any extra packages.",source:"@site/docs/Point SDK/Flutter/Overview.md",sourceDirName:"Point SDK/Flutter",slug:"/Point SDK/Flutter/Overview",permalink:"/documentation/Point SDK/Flutter/Overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Version 1.1.7 Documentation",permalink:"/documentation/Point SDK/React Native/Migration Guides/Version 1.1.7 documentation"},next:{title:"Overview",permalink:"/documentation/Point SDK/Flutter/Overview"}},l={},p=[{value:"Resources",id:"resources",level:2}],c={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Flutter Bluedot Point SDK is a wrapper around the\xa0",(0,o.kt)("a",{parentName:"p",href:"/documentation/Point%20SDK/Android/Overview"},"Android Point SDK"),"\xa0and\xa0",(0,o.kt)("a",{parentName:"p",href:"/documentation/Point%20SDK/iOS/Overview"},"iOS Point SDK"),", allowing for Bluedot integration in Flutter apps. Functionality is provided through one single flutter plugin so you can use it for both platforms without downloading any extra packages."),(0,o.kt)("p",null,"The following pages provide a guide to integrating the Point SDK with your Flutter app."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/documentation/Point%20SDK/Flutter/Quick%20Start"},"Quick Start Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/documentation/Point%20SDK/Flutter/Geo-triggering"},"Geo-triggering")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/documentation/Point%20SDK/Flutter/Tempo"},"Tempo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/documentation/Point%20SDK/Flutter/Events%20List"},"Events list")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/documentation/Point%20SDK/Flutter/Features"},"SDK features"))),(0,o.kt)("p",null,"Refer to the\xa0",(0,o.kt)("a",{parentName:"p",href:"/documentation/Canvas/Overview"},"Bluedot Canvas User Guide"),"\xa0for tips to set up your Zones, Geofences, GEOLINE\u2122, Actions and Conditions."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pub.dev/packages/bluedot_point_sdk"},"Flutter Plugin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Bluedot-Innovation/PointSDK-Flutter-Plugin"},"GitHub open-source plugin code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Bluedot-Innovation/Flutter-Minimal-Integration"},"Minimal integration example"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This wrapper includes the core functionality of our SDK. We\u2019ve open-sourced the code of this wrapper in case you\u2019d like to expand it and implement your methods or logic.",(0,o.kt)("br",{parentName:"p"}),"\n","If you have any suggestions for expanding functionality or would like our team to review your implementation, please contact our engineering support team \u2013\xa0",(0,o.kt)("a",{parentName:"p",href:"mailto:help@bluedot.ok"},"help@bluedot.io"))))}d.isMDXComponent=!0}}]);