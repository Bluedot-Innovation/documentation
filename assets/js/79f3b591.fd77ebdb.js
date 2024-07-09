"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[7636],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,v=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={pagination_next:"Canvas/Creating a new project",pagination_prev:null},i="Overview",s={unversionedId:"Canvas/Overview",id:"Canvas/Overview",title:"Overview",description:"*",source:"@site/docs/Canvas/Overview.md",sourceDirName:"Canvas",slug:"/Canvas/Overview",permalink:"/Canvas/Overview",draft:!1,tags:[],version:"current",frontMatter:{pagination_next:"Canvas/Creating a new project",pagination_prev:null},sidebar:"defaultSidebar",next:{title:"Creating a new Project",permalink:"/Canvas/Creating a new project"}},l={},c=[{value:"Zone Dashboard",id:"zone-dashboard",level:2},{value:"Team member access",id:"team-member-access",level:2},{value:"Regions",id:"regions",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Learn about using")," ",(0,r.kt)("a",{parentName:"p",href:"https://select-region.bluedot.io/"},(0,r.kt)("em",{parentName:"a"},"Canvas"))," ",(0,r.kt)("em",{parentName:"p"},"to operate your Bluedot account.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Bluedot Canvas is a feature-rich user interface for you to operate and configure your Bluedot account. You can use Canvas to build Projects, create Zones, draw Geofences, manage your account and more."),(0,r.kt)("p",null,"Once you\u2019ve integrated the SDK in your mobile app, you can use Canvas (or our Config. API) to design valuable, real-world experiences for your app users."),(0,r.kt)("p",null,"We\u2019re always happy to help with integration, Zone setup or other questions you might have \u2013 just contact our Support Team at ",(0,r.kt)("a",{parentName:"p",href:"mailto:help@bluedot.io"},"help@bluedot.io"),"."),(0,r.kt)("h2",{id:"zone-dashboard"},"Zone Dashboard"),(0,r.kt)("p",null,"The Zone dashboard provides a simple, single map view for all your Zones and Geofences. From the dashboard, you can navigate between Projects, create new Zones, manage existing Zones, and generally navigate account."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(87449).Z,width:"1024",height:"518"})),(0,r.kt)("h2",{id:"team-member-access"},"Team member access"),(0,r.kt)("p",null,"You can invite team members to access Canvas and help manage your Bluedot Account. Each team member can have different privileges that restrict the access they have or actions they can take. For instance, you can allow members from your QA team to access only specific Projects and Zones for the purpose of user-acceptance-testing. Learn more."),(0,r.kt)("h2",{id:"regions"},"Regions"),(0,r.kt)("p",null,"Canvas is hosted\xa0in multiple regions worldwide to ensure better performance of our services. To go to your Account\u2019s region use the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://select-region.bluedot.io/"},"Select Region"),"\xa0page. To learn more refer to the ",(0,r.kt)("a",{parentName:"p",href:"/Regions%20URLs"},"Bluedot Regions documentation"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("br",{parentName:"strong"}),"Browser compatibility"),(0,r.kt)("br",{parentName:"p"}),"\n","Canvas officially supports the following web browsers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chrome versions greater than 49"),(0,r.kt)("li",{parentName:"ul"},"The last two versions of Firefox, Safari, and Edge")),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Read on to learn more about Canvas and Bluedot:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Canvas/Creating%20a%20new%20project"},"Creating a new Project")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Canvas/Add%20a%20new%20zone"},"Creating a new Zone"))))}m.isMDXComponent=!0},87449:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Canvas-e886bbe55a212bb06ada79ea7a1c9c5c.jpeg"}}]);