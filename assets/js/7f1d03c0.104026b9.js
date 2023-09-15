"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[6307],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(a),c=r,k=s["".concat(d,".").concat(c)]||s[c]||m[c]||o;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3029:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={},i="Tealium Integration",l={unversionedId:"Integrations/Tealium",id:"Integrations/Tealium",title:"Tealium Integration",description:"Tealium is a customer data platform formed of EventStream, AudienceStream, and iQ Tag Management to integrate mobile, online, and alternative data from third-party sources. Combine the power of Tealium with the precision and scalability of Bluedot\u2019s location services to accelerate growth, drive loyalty engagement and revenue in your app and beyond.",source:"@site/docs/Integrations/Tealium.md",sourceDirName:"Integrations",slug:"/Integrations/Tealium",permalink:"/Integrations/Tealium",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Segment integration",permalink:"/Integrations/Segment"},next:{title:"Custom Event Metadata",permalink:"/Custom Event Metadata"}},d={},u=[{value:"Bluedot setup",id:"bluedot-setup",level:2},{value:"Creating a new Project",id:"creating-a-new-project",level:3},{value:"Adding a Zone",id:"adding-a-zone",level:3},{value:"Tealium setup",id:"tealium-setup",level:2},{value:"Add HTTP API Data Source",id:"add-http-api-data-source",level:3},{value:"Data Source values",id:"data-source-values",level:3},{value:"Adding custom data through the SDK\u2019s Custom Event Meta Data",id:"adding-custom-data-through-the-sdks-custom-event-meta-data",level:2},{value:"Reserved fields",id:"reserved-fields",level:2}],p={toc:u},s="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(s,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tealium-integration"},"Tealium Integration"),(0,r.kt)("p",null,"Tealium is a customer data platform formed of EventStream, AudienceStream, and iQ Tag Management to integrate mobile, online, and alternative data from third-party sources. Combine the power of Tealium with the precision and scalability of Bluedot\u2019s location services to accelerate growth, drive loyalty engagement and revenue in your app and beyond."),(0,r.kt)("h2",{id:"bluedot-setup"},"Bluedot setup"),(0,r.kt)("h3",{id:"creating-a-new-project"},"Creating a new Project"),(0,r.kt)("p",null,"Creating a Project is your first step. All your Zones exist within a Project. More information on adding and managing Bluedot Canvas project can be found ",(0,r.kt)("a",{parentName:"p",href:"/Canvas/Creating%20a%20new%20project"},"here"),"."),(0,r.kt)("h3",{id:"adding-a-zone"},"Adding a Zone"),(0,r.kt)("p",null,"You\u2019ll need to create a ",(0,r.kt)("strong",{parentName:"p"},"Zone")," before you can start adding in specific ",(0,r.kt)("strong",{parentName:"p"},"Geofeatures"),". Each Zone can have one or many ",(0,r.kt)("strong",{parentName:"p"},"Geofeatures")," \u2013 that\u2019s up to you and your use-case. More information on adding and managing Zones can be found ",(0,r.kt)("a",{parentName:"p",href:"/Canvas/Add%20a%20new%20zone"},"here"),"."),(0,r.kt)("h2",{id:"tealium-setup"},"Tealium setup"),(0,r.kt)("p",null,"From Tealium\u2019s server-side dashboard, add a new Data Source."),(0,r.kt)("h3",{id:"add-http-api-data-source"},"Add HTTP API Data Source"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select the HTTP API data source, give it a name and press continue"),(0,r.kt)("li",{parentName:"ul"},"The Event Specifications are optional, you can skip this step for now")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2395).Z,width:"1024",height:"818"})),(0,r.kt)("h3",{id:"data-source-values"},"Data Source values"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From the ",(0,r.kt)("em",{parentName:"li"},"Get Code")," tab we\u2019ll use the following parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Your assigned endpoint, in this example, is: ",(0,r.kt)("a",{parentName:"li",href:"https://collect.tealiumiq.com/event"},"https://collect.tealiumiq.com/event")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"tealium_account")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"tealium_profile")),(0,r.kt)("li",{parentName:"ul"},"The other fields are optional"))),(0,r.kt)("li",{parentName:"ul"},"You can also get these values later from the Data Source details")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5837).Z,width:"839",height:"196"})),(0,r.kt)("p",null,"Click on the \u201cSave and Continue\u201d button."),(0,r.kt)("p",null,"We\u2019ll use the previous parameters to start sending Bluedot events to Tealium. From Canvas, go to the Integrations section, select the Project you\u2019d like to connect to Tealium and follow these steps:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description")),(0,r.kt)("p",null,"1","."," Select event type"),(0,r.kt)("p",null,"There are three types of events: Geo-triggering, Tempo and Wave. To learn more about the event types go to the ",(0,r.kt)("a",{parentName:"p",href:"/Webhooks/Overview"},"Webhooks documentation")),(0,r.kt)("p",null,"2","."," Fill required fields"),(0,r.kt)("p",null,"\xa0The following fields are required, you can get both of them from the Tealium\u2019s Data Source details:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Tealium account"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Tealium profile")))),(0,r.kt)("p",null,"3","."," Tealium\u2019s HTTP API URL"),(0,r.kt)("p",null,"This is the URL that was assigned for the HTTP API data source, in this example the URL is ",(0,r.kt)("a",{parentName:"p",href:"https://collect.tealiumiq.com/event"},"https://collect.tealiumiq.com/event")),(0,r.kt)("p",null,"Add optional fields"),(0,r.kt)("p",null,"You can also add more fields that you\u2019d like to include in the payload we\u2019re sending to your Tealium account, an example of that is the ",(0,r.kt)("inlineCode",{parentName:"p"},"tealium_datasource")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4528).Z,width:"1024",height:"765"})),(0,r.kt)("h2",{id:"adding-custom-data-through-the-sdks-custom-event-meta-data"},"Adding custom data through the SDK\u2019s Custom Event Meta Data"),(0,r.kt)("p",null,"The Custom Event Meta Data allows you to set additional event-specific data for the Bluedot SDK\u2019s events. This is the method used to include additional information about the end-user, for example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"tealium_visitor_id"),"."),(0,r.kt)("p",null,"For more information about the Custom Event Meta Data check this ",(0,r.kt)("a",{parentName:"p",href:"/Custom%20Event%20Metadata/"},"documentation"),"."),(0,r.kt)("h2",{id:"reserved-fields"},"Reserved fields"),(0,r.kt)("p",null,"The following list of fields are reserved for the Bluedot events. ",(0,r.kt)("strong",{parentName:"p"},"If you include one of these fields either in the Custom Event Meta Data, Zone Custom Data or the Webhook\u2019s body fields they will be ignored.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"EVENT NAME")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"appBuildVersion"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"checkInId"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"checkInTime"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deviceType"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deviceSpeed"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fenceId"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fenceName"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"installRef"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"latitude"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"longitude"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"os"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"osVersion"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"receivedAt"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sdkVersion"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zoneId"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zoneName"))))),(0,r.kt)("p",null,"If one of your fields clashes with the reserved keywords we recommend adding it a prefix to differentiate it from the Bluedot fields. For example ",(0,r.kt)("inlineCode",{parentName:"p"},"prefix_type"),"."))}m.isMDXComponent=!0},4528:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tealium_configuration_form-1024x765-a252adb6e3aa14729d1f71ffb324fb71.jpg"},5837:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tealium_data_source_params-cdb684920b869c18274258b9c6da957b.jpg"},2395:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tealium_select_data_source-1024x818-9496fc9df4b7a7d2de74f904ed86ea91.jpg"}}]);