"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[5556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={},i="Hello Reports",o={unversionedId:"Canvas/Analytics/Hello Reports",id:"Canvas/Analytics/Hello Reports",title:"Hello Reports",description:"The Hello Reports feature lets you create detailed reports directly from the Canvas platform on the Hello stack metrics. This feature allows you to schedule and distribute reports automatically, ensuring timely access to critical data.",source:"@site/docs/Canvas/Analytics/Hello Reports.md",sourceDirName:"Canvas/Analytics",slug:"/Canvas/Analytics/Hello Reports",permalink:"/Canvas/Analytics/Hello Reports",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Hello Order Logs",permalink:"/Canvas/Analytics/Hello Order Logs"},next:{title:"Mandatory Two-Factor Authentication",permalink:"/Canvas/Mandatory two-factor authentication"}},s={},d=[{value:"How to Use",id:"how-to-use",level:3},{value:"Accessing the Feature:",id:"accessing-the-feature",level:4},{value:"Setting Up the Report:",id:"setting-up-the-report",level:4},{value:"Managing Reports:",id:"managing-reports",level:4},{value:"Report Column Details",id:"report-column-details",level:3},{value:"Scheduling Frequency",id:"scheduling-frequency",level:3},{value:"Admin Access Only",id:"admin-access-only",level:3}],p={toc:d},u="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hello-reports"},"Hello Reports"),(0,r.kt)("p",null,"The Hello Reports feature lets you create detailed reports directly from the Canvas platform on the Hello stack metrics. This feature allows you to schedule and distribute reports automatically, ensuring timely access to critical data."),(0,r.kt)("p",null,"With the Hello Reports, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Generate Reports:")," Create reports with a consistent column structure tailored to your needs, ensuring uniformity and ease of analysis."),(0,r.kt)("li",{parentName:"ul"},"Schedule Report Distribution: Set up daily, weekly, or monthly schedules for automatic report generation and email distribution tailored to your time zone."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Manage Email Distribution Lists:")," Specify a list of email addresses, including internal team members and external stakeholders, to automatically receive the reports."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Admin-Only Access:")," Ensure secure and controlled access to the report generation and scheduling functionalities, limited to users with Admin permissions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CSV Format Reports:")," Receive reports in CSV format, facilitating easy data analysis and sharing.\nThis Hello Report gives you more control over your data, provides immediate access to essential information, and enhances operational efficiency.")),(0,r.kt)("h3",{id:"how-to-use"},"How to Use"),(0,r.kt)("h4",{id:"accessing-the-feature"},"Accessing the Feature:"),(0,r.kt)("p",null,'From the top navigation bar in Canvas, hover over the Analytics tab and select the "Hello Report" option.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8877).Z,width:"562",height:"259"})),(0,r.kt)("h4",{id:"setting-up-the-report"},"Setting Up the Report:"),(0,r.kt)("p",null,'Click on "Create New Report".\nConfigure the report parameters, including the frequency (Daily, Weekly, Monthly), time zone, and email distribution list.\nThe report will be sent at 3 am in the selected time zone.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4248).Z,width:"1253",height:"587"})),(0,r.kt)("h4",{id:"managing-reports"},"Managing Reports:"),(0,r.kt)("p",null,"Admins can view, edit, or delete scheduled reports at any time through the Reports section."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5854).Z,width:"1165",height:"504"})),(0,r.kt)("h3",{id:"report-column-details"},"Report Column Details"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Column Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Explanation"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"orderId")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier for each order"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Order States Timestamps"),(0,r.kt)("td",{parentName:"tr",align:null},"Progression states timestamps of the order as per Hello Order States configuration. ",(0,r.kt)("a",{parentName:"td",href:"/Hello%20Screens/Custom%20Order%20States"},"See Hello Order States")),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"destinationId")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier for the destination"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UsedWave")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if Wave was used"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TempoTracked")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if Tempo was used to tracked the order"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TempoStoppedTime")),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp when Tempo stopped tracking"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AutomatedArrival")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if arrival was automated"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"os")),(0,r.kt)("td",{parentName:"tr",align:null},"Operating system of the device"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"osVersion")),(0,r.kt)("td",{parentName:"tr",align:null},"Version of the operating system"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deviceType")),(0,r.kt)("td",{parentName:"tr",align:null},"Type of device used"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"locationPermissions")),(0,r.kt)("td",{parentName:"tr",align:null},"Status of location permissions granted to the device"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"orderWaitTime")),(0,r.kt)("td",{parentName:"tr",align:null},"Time difference between ",(0,r.kt)("inlineCode",{parentName:"td"},"arrival")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"complete")," events (seconds)"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ExitTime")),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp when the Exit event occurred"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geoDwellTime")),(0,r.kt)("td",{parentName:"tr",align:null},"Time difference between ",(0,r.kt)("inlineCode",{parentName:"td"},"Entry")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Exit")," events (seconds)"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")))),(0,r.kt)("h3",{id:"scheduling-frequency"},"Scheduling Frequency"),(0,r.kt)("p",null,"You can select the frequency of report generation and email distribution through a dropdown menu with options for Daily, Weekly, or Monthly reports. Additionally, you can select your preferred time zone to receive reports, which will be sent at 3 am in the selected time zone."),(0,r.kt)("h3",{id:"admin-access-only"},"Admin Access Only"),(0,r.kt)("p",null,'The report generation and scheduling feature is exclusive to users with "Admin" permissions. Only these users can add, edit, or delete scheduled reports, ensuring control and security over report management.'),(0,r.kt)("p",null,"For further assistance or queries,  please get in touch with our support team at ",(0,r.kt)("a",{parentName:"p",href:"mailto:help@bluedot.io"},"help@bluedot.io")))}m.isMDXComponent=!0},8877:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Hello Reports - 1-0e8bbd951c616cc718bbee7c14f06aa4.png"},4248:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Hello Reports - 2-0f54de3c1c55a2a540121d703356a344.png"},5854:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Hello Reports - 3-f3269cfd3a1fbad606b7aa4de33d70d9.png"}}]);