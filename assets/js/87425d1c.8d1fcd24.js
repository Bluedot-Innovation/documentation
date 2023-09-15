"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[7567],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,m=d["".concat(u,".").concat(k)]||d[k]||s[k]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},l="Quick Start",o={unversionedId:"Point SDK/React Native/Quick Start",id:"Point SDK/React Native/Quick Start",title:"Quick Start",description:"To get the SDK loaded and running, you\u2019ll need to:",source:"@site/docs/Point SDK/React Native/Quick Start.md",sourceDirName:"Point SDK/React Native",slug:"/Point SDK/React Native/Quick Start",permalink:"/documentation/Point SDK/React Native/Quick Start",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/documentation/Point SDK/React Native/Overview"},next:{title:"Geo-triggering",permalink:"/documentation/Point SDK/React Native/Geo-triggering"}},u={},p=[{value:"1. Install the Bluedot React Native package",id:"1-install-the-bluedot-react-native-package",level:2},{value:"3. Android: Update the build.gradle file",id:"3-android-update-the-buildgradle-file",level:2},{value:"4. Initialize the SDK",id:"4-initialize-the-sdk",level:2},{value:"Initialize Status",id:"initialize-status",level:2}],c={toc:p},d="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"To get the SDK loaded and running, you\u2019ll need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Bluedot React Native npm package"),(0,r.kt)("li",{parentName:"ol"},"iOS: Install the Bluedot Point SDK Pod"),(0,r.kt)("li",{parentName:"ol"},"Set up the ",(0,r.kt)("inlineCode",{parentName:"li"},"build.gradle")," file for Android"),(0,r.kt)("li",{parentName:"ol"},"Initialize the SDK")),(0,r.kt)("h2",{id:"1-install-the-bluedot-react-native-package"},"1","."," Install the Bluedot React Native package"),(0,r.kt)("p",null,"In the root directory of your project run "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install bluedot-react-native --save\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"iOS: Install the Bluedot Point SDK Pod")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"To install the Bluedot Point SDK pod run the following commands in the terminal from the root directory of your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd ios\n$ pod install\n")),(0,r.kt)("p",null,"Make sure to update the ",(0,r.kt)("inlineCode",{parentName:"p"},"info.plist")," file within the ios folder. For further information please refer to the section ",(0,r.kt)("strong",{parentName:"p"},"Update your ",(0,r.kt)("inlineCode",{parentName:"strong"},"info.plist")," file")," in the ",(0,r.kt)("a",{parentName:"p",href:"/documentation/Point%20SDK/iOS/Quick%20Start"},"iOS Quick Start Guide")),(0,r.kt)("h2",{id:"3-android-update-the-buildgradle-file"},"3","."," Android: Update the build.gradle file"),(0,r.kt)("p",null,"Include ",(0,r.kt)("strong",{parentName:"p"},"Jitpack")," in your Maven dependencies in the ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},'allprojects {\n\xa0 repositories {\n\xa0 \xa0 ...\n\xa0 \xa0 // ADD IT HERE\n\xa0 \xa0 maven {\xa0\n\xa0 \xa0 \xa0 url "https://jitpack.io"\xa0\n\xa0 \xa0 }\n\xa0}\n}\n')),(0,r.kt)("p",null,"Make sure ",(0,r.kt)("strong",{parentName:"p"},"Jetify")," is available in your development environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npx jetify\n")),(0,r.kt)("h2",{id:"4-initialize-the-sdk"},"4","."," Initialize the SDK"),(0,r.kt)("p",null,"Now that the project has been set up, you can import and initialize the Bluedot React Native package from your App:"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"initialize")," method expects 3 parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"projectId")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The project Id you\u2019re going to use. This can be found in the Canvas.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onSuccess")," callback"),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback that will be executed when the SDK is successfully initialized")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onError")," callback"),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback will be executed when the SDK did not initialize")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React from \'react\'\nimport BluedotPointSdk from \'bluedot-react-native\';\n\nexport default function App() {\n\xa0 React.useEffect(() => {\n\xa0 \xa0 BluedotPointSdk.initialize(\n\xa0 \xa0 \xa0 "Your_bluedot_project_id",\n\xa0 \xa0 \xa0 () => console.log("On Success Callback"),\n\xa0 \xa0 \xa0 (error) => console.error("On Error Callback", error)\n\xa0 \xa0 )\n\xa0 }, [])\n\n\xa0 return (...)\n}\n')),(0,r.kt)("h2",{id:"initialize-status"},"Initialize Status"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"isInitialized")," method to check the status of the SDK. It will return a boolean value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'BluedotPointSdk.isInitialized()\n\xa0 .then(status => console.log("Is Bluedot SDk initialized?", status))\n\xa0 .catch(error => console.error("Error", error))\n')),(0,r.kt)("p",null,"At this point, you\u2019ve got the basics together, but to start receiving location events from the SDK, your need to use our Geo-triggering and/or Tempo features."))}s.isMDXComponent=!0}}]);