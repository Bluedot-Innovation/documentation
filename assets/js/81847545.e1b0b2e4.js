"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[6043],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>v});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,v=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?o.createElement(v,i(i({ref:n},l),{},{components:t})):o.createElement(v,i({ref:n},l))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=t(7462),r=(t(7294),t(3905));const a={},i="Setting Up Multiple Environments Guide",s={unversionedId:"Canvas/Setting up multiple environments",id:"Canvas/Setting up multiple environments",title:"Setting Up Multiple Environments Guide",description:"Development, staging, and production environments are easy to set up in Canvas. Simply create a new Project for each environment to guarantee isolation between them. You can create as many as you need. You can easily switch between Projects from the top-left dropdown on the navigation bar. You can also configure different access permissions for each.",source:"@site/docs/Canvas/Setting up multiple environments.md",sourceDirName:"Canvas",slug:"/Canvas/Setting up multiple environments",permalink:"/Canvas/Setting up multiple environments",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Single Sign-On support",permalink:"/Canvas/Single Sign-On support"},next:{title:"Event Simulator Guide",permalink:"/Canvas/Event simulator guide"}},c={},p=[{value:"Name the environment",id:"name-the-environment",level:2},{value:"User access to environments",id:"user-access-to-environments",level:2},{value:"Connecting to the different environments",id:"connecting-to-the-different-environments",level:2},{value:"Copy Stores and Zones between Environments",id:"copy-stores-and-zones-between-environments",level:2}],l={toc:p},m="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(m,(0,o.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-multiple-environments-guide"},"Setting Up Multiple Environments Guide"),(0,r.kt)("p",null,"Development, staging, and production environments are easy to set up in Canvas. Simply create a new Project for each environment to guarantee isolation between them. You can create as many as you need. You can easily switch between Projects from the top-left dropdown on the navigation bar. You can also configure different access permissions for each."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"environments-projects-dropdown",src:t(3922).Z,width:"1024",height:"191"})),(0,r.kt)("h2",{id:"name-the-environment"},"Name the environment"),(0,r.kt)("p",null,"You can name your environments any way you prefer. For each new Project created, we recommend to specify its environment by including a tag in its name. (i.e. <",(0,r.kt)("em",{parentName:"p"},"Project Name"),">"," Development, <",(0,r.kt)("em",{parentName:"p"},"Project Name"),">"," Production\u2026 etc)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"environments-list-page",src:t(5393).Z,width:"1024",height:"452"})),(0,r.kt)("h2",{id:"user-access-to-environments"},"User access to environments"),(0,r.kt)("p",null,"You can control user access to Projects from the ",(0,r.kt)("em",{parentName:"p"},"Users")," section in Canvas. \xa0A user with ",(0,r.kt)("em",{parentName:"p"},"Administrator")," permissions has access to all environments within a space and can ",(0,r.kt)("em",{parentName:"p"},"create"),", ",(0,r.kt)("em",{parentName:"p"},"read"),", ",(0,r.kt)("em",{parentName:"p"},"update"),", and ",(0,r.kt)("em",{parentName:"p"},"delete")," any environments. You can enable a custom role to access specific environments of your choice.\xa0"),(0,r.kt)("p",null,"In the following example the user:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Is not able to access to the Production environment."),(0,r.kt)("li",{parentName:"ul"},"Is able to access to the QA environment."),(0,r.kt)("li",{parentName:"ul"},"Has read and write permissions to the Development environment.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"user-permissions-example",src:t(5375).Z,width:"1024",height:"966"})),(0,r.kt)("h2",{id:"connecting-to-the-different-environments"},"Connecting to the different environments"),(0,r.kt)("p",null,"Each environment will have its own Zones and configuration that are completely independent to the other environments. The way to connect to the different environments is by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"projectId")," of the environment you\u2019d like to connect to the initiating method of Point SDK, Web SDK or in the headers of a Wave API request (",(0,r.kt)("inlineCode",{parentName:"p"},"x-bluedot-api-key"),")."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(9539).Z,width:"1024",height:"392"})),(0,r.kt)("h2",{id:"copy-stores-and-zones-between-environments"},"Copy Stores and Zones between Environments"),(0,r.kt)("p",null,"Occasionally, you may want to copy a Store or a Zone with its configuration from one environment to another; for example, Stores from ",(0,r.kt)("em",{parentName:"p"},"Development")," environment to the ",(0,r.kt)("em",{parentName:"p"},"Staging")," environment, or from ",(0,r.kt)("em",{parentName:"p"},"Production")," to Staging. From Canvas you can use the Copy Stores / Copy Zones tool that allows you to copy Stores or Zones from one environment to another, either all at once, or individually."),(0,r.kt)("p",null,"To Copy Stores between environments go to the ",(0,r.kt)("em",{parentName:"p"},"Account > Tools > Copy Stores")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(7619).Z,width:"1024",height:"595"})),(0,r.kt)("p",null,"To Copy Zones between environments go to the ",(0,r.kt)("em",{parentName:"p"},"Account > Tools > Copy Zones")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(8501).Z,width:"1024",height:"595"})))}u.isMDXComponent=!0},7619:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/copy-stores-3db64a3fc3e638d38f28669c5121f536.png"},8501:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/copy-zones-53ca91776dfd58c21b1a138ba395e932.png"},9539:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/environments-list-ids-highlighted-72f0e233ad7a573434a7a540fc2140e1.png"},5393:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/environments-list-page-f211ecbf385db31a7a622f97711c258b.png"},3922:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/environments-projects-dropdown-f430df13486133a6d940f5f510522180.png"},5375:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/user-permissions-example-759ad5d17543283235c32c243a901c64.png"}}]);