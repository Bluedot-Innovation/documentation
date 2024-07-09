"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[9886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=i,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={pagination_next:"Point SDK/Xamarin/Android",pagination_prev:null},a="Overview",l={unversionedId:"versions/Point SDK 15/Xamarin/Overview",id:"versions/Point SDK 15/Xamarin/Overview",title:"Overview",description:"You can also integrate the Bluedot Point SDK with your Xamarin applications. It can be easily integrated into your Android or iOS projects.",source:"@site/docs/versions/Point SDK 15/Xamarin/Overview.md",sourceDirName:"versions/Point SDK 15/Xamarin",slug:"/versions/Point SDK 15/Xamarin/Overview",permalink:"/versions/Point SDK 15/Xamarin/Overview",draft:!1,tags:[],version:"current",frontMatter:{pagination_next:"Point SDK/Xamarin/Android",pagination_prev:null},next:{title:"Android -  Quick start",permalink:"/Point SDK/Xamarin/Android"}},p={},u=[{value:"Resources",id:"resources",level:2}],c={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"You can also integrate the Bluedot Point SDK with your Xamarin applications. It can be easily integrated into your Android or iOS projects."),(0,i.kt)("p",null,"Find the integration steps in the following documents:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/versions/Point%20SDK%2015/Xamarin/Android"},"Android: Quickstart")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/versions/Point%20SDK%2015/Xamarin/iOS"},"iOS: Quickstart"))),(0,i.kt)("p",null,"All Projects, Zones and Geofences configurations can be done through our ",(0,i.kt)("a",{parentName:"p",href:"/Canvas/Overview"},"Canvas"),"."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Bluedot-Innovation/PointSDK-Xamarin-Android"},"Xamarin binder for the Bluedot PointSDK Android")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Bluedot-Innovation/Bluedot-PointSDK-Xamarin-iOS"},"Xamarin binder for the Bluedot PointSDK iOS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Bluedot-Innovation/PointSDK-Xamarin-minimal-app-Android"},"Xamarin Android integration example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Bluedot-Innovation/PointSDK-Xamarin-minimal-app-iOS"},"Xamarin iOS integration example"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This wrapper includes the basic functionality of our SDK. We\u2019ve open-sourced the code of this wrapper in case you\u2019d like to expand it and implement your methods or logic.",(0,i.kt)("br",{parentName:"p"}),"\n","If you have any suggestions for expanding functionality or would like our team to review your implementation, please contact our engineering support team \u2013\xa0",(0,i.kt)("a",{parentName:"p",href:"mailto:help@bluedot.ok"},"help@bluedot.io"))))}m.isMDXComponent=!0}}]);