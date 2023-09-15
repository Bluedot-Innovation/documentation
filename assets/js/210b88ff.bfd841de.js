"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[2356],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),b=o,m=d["".concat(s,".").concat(b)]||d[b]||u[b]||i;return t?a.createElement(m,r(r({ref:n},c),{},{components:t})):a.createElement(m,r({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},9923:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const i={},r="Enable or disable Zones",l={unversionedId:"Point SDK/Android/Features/Enable or disable zones",id:"Point SDK/Android/Features/Enable or disable zones",title:"Enable or disable Zones",description:"An app may optionally disable (and later re-enable) Zones by calling\xa0setZoneDisableByApplication\xa0on the shared\xa0ServiceManager. This will not override any Conditions set via\xa0Canvas or Config APIs.",source:"@site/docs/Point SDK/Android/Features/Enable or disable zones.md",sourceDirName:"Point SDK/Android/Features",slug:"/Point SDK/Android/Features/Enable or disable zones",permalink:"/Point SDK/Android/Features/Enable or disable zones",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Tempo",permalink:"/Point SDK/Android/Tempo"},next:{title:"Location Permission & Notifications Best Practices",permalink:"/Point SDK/Android/Location Permission & Notifications Best Practices"}},s={},p=[],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"enable-or-disable-zones"},"Enable or disable Zones"),(0,o.kt)("p",null,"An app may optionally disable (and later re-enable) Zones by calling\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"setZoneDisableByApplication"),"\xa0on the shared\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceManager"),". This will not override any Conditions set via\xa0",(0,o.kt)("a",{parentName:"p",href:"https://canvas.bluedot.io/sign-in"},"Canvas")," or Config APIs."),(0,o.kt)("p",null,"For example, if a Zone is configured in Canvas to be active between 1 pm and 3 pm, calls to\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"setZoneDisableByApplication"),"\xa0would have no effect outside of these times. During the Zone\u2019s active period (e.g. at 2.30 pm), the Zone will be active unless disabled by\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"setZoneDisableByApplication"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'String zoneIdToDisable = ""\nif (!mServiceManager.isZoneDisabledByApplication(zoneIdToDisable)) {\n    mServiceManager.setZoneDisableByApplication(zoneIdToDisable, true);\n}\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Interaction with the Exit (check-out) feature")),(0,o.kt)("p",{parentName:"admonition"},"Note that if a Zone has already entered (checked-in) and is awaiting an exit event, then disabling the Zone at this point will not prevent the exit callback from occurring."),(0,o.kt)("p",{parentName:"admonition"},"If it is important to suppress exit behaviors while a Zone is disabled by your application, we advise that you make use of the ",(0,o.kt)("a",{parentName:"p",href:"https://android-docs.bluedot.io/-bluedot-s-d-k/au.com.bluedot.point.net.engine/-service-manager/index.html#%5Bau.com.bluedot.point.net.engine%2FServiceManager%2FisZoneDisabledByApplication%2F%23java.lang.String%2FPointingToDeclaration%2F%5D%2FFunctions%2F-762893342"},(0,o.kt)("inlineCode",{parentName:"a"},"isZoneDisabledByApplication"))," method as part of your exit callback")))}u.isMDXComponent=!0}}]);