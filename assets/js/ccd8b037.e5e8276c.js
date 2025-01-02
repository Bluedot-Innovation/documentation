"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[7758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={},a="App restart notification",p={unversionedId:"Point SDK/iOS/Features/App restart notification",id:"Point SDK/iOS/Features/App restart notification",title:"App restart notification",description:"Point SDK includes a method for apps to display app restart notification to user after app termination.",source:"@site/docs/Point SDK/iOS/Features/App restart notification.md",sourceDirName:"Point SDK/iOS/Features",slug:"/Point SDK/iOS/Features/App restart notification",permalink:"/Point SDK/iOS/Features/App restart notification",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Tempo",permalink:"/Point SDK/iOS/Tempo"},next:{title:"Background location access",permalink:"/Point SDK/iOS/Features/Blue bar"}},s={},c=[],l={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"app-restart-notification"},"App restart notification"),(0,i.kt)("p",null,"Point SDK includes a method for apps to display app restart notification to user after app termination."),(0,i.kt)("p",null,"The notification provides a way for the user to re-engage with the app."),(0,i.kt)("p",null,"To start geo-triggering with app restart notification, you should"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'BDLocationManager.instance()?.startGeoTriggering(withAppRestartNotificationTitle: "Restart App?", notificationButtonText: "Tap here to re-engage with App now"){\n\xa0 \xa0 guard error == nil else {\n\xa0 \xa0 \xa0 \xa0 print("Start Geotriggering with app restart notification failed \\\\(error.localizedDescription)")\n\xa0 \xa0 \xa0 \xa0 return\n\xa0 \xa0}\n}\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The\xa0app will need notification and ",(0,i.kt)("em",{parentName:"p"},"Always")," location permissions to use this feature.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"After an app has been closed, a local notification is sent which prompts users to relaunch the app."),(0,i.kt)("p",{parentName:"admonition"},"The app restart notification will only be delivered once a device has moved significantly following the closure of the app. While this behaviour arises from a design constraint within iOS, it has the effect of only drawing attention to your app when the users changing location becomes relevant. When designing your user experience, be aware that Apple\u2019s definition of a \u201csignificant distance\u201d varies with location conditions and across iOS versions. \xa0This makes the precise measure of a \u2018significant distance\u2019 unpredictable. \xa0During our own testing, we observed that app restart notifications are typically delivered after 400m-1.5km of movement.")))}f.isMDXComponent=!0}}]);