"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[6592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(d,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},36095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},i="Scheduled Reports",o={unversionedId:"Canvas/Analytics/Scheduled Reports",id:"Canvas/Analytics/Scheduled Reports",title:"Scheduled Reports",description:"The Schedule Reports feature lets you generate, schedule, and manage detailed reports for the Hello stack (order management) and geofencing data (location-based events) directly from the Canvas.",source:"@site/docs/Canvas/Analytics/Scheduled Reports.md",sourceDirName:"Canvas/Analytics",slug:"/Canvas/Analytics/Scheduled Reports",permalink:"/Canvas/Analytics/Scheduled Reports",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Hello Order Logs",permalink:"/Canvas/Analytics/Hello Order Logs"},next:{title:"Event Simulator",permalink:"/Canvas/Tools/Event Simulator"}},d={},p=[{value:"Report Types",id:"report-types",level:3},{value:"Hello Stack Reports (Order Management)",id:"hello-stack-reports-order-management",level:4},{value:"Geofencing Data Reports (Location-Based events)",id:"geofencing-data-reports-location-based-events",level:4},{value:"How to Use",id:"how-to-use",level:3},{value:"Accessing the Feature:",id:"accessing-the-feature",level:4},{value:"Setting Up the Report:",id:"setting-up-the-report",level:4},{value:"Managing Reports:",id:"managing-reports",level:4},{value:"Report Column Details",id:"report-column-details",level:3},{value:"Hello Stack Report Structure",id:"hello-stack-report-structure",level:4},{value:"Geofencing Report Structure",id:"geofencing-report-structure",level:3},{value:"Scheduling Frequency",id:"scheduling-frequency",level:3},{value:"Admin Access Only",id:"admin-access-only",level:3}],s={toc:p},m="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scheduled-reports"},"Scheduled Reports"),(0,r.kt)("p",null,"The Schedule Reports feature lets you generate, schedule, and manage detailed reports for the Hello stack (order management) and geofencing data (location-based events) directly from the Canvas."),(0,r.kt)("h3",{id:"report-types"},"Report Types"),(0,r.kt)("h4",{id:"hello-stack-reports-order-management"},"Hello Stack Reports (Order Management)"),(0,r.kt)("p",null,"Focus on click-and-collect order management, useful for monitoring order statuses, managing pick-up times, and analyzing trends."),(0,r.kt)("h4",{id:"geofencing-data-reports-location-based-events"},"Geofencing Data Reports (Location-Based events)"),(0,r.kt)("p",null,"Utilize geofencing data to analyze customer movements, measure marketing campaign effectiveness, gamefication and optimize promotions."),(0,r.kt)("p",null,"With the Scheduled Reports, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Generate Reports:")," Create reports with a consistent column structure tailored to your needs, ensuring uniformity and ease of analysis."),(0,r.kt)("li",{parentName:"ul"},"Schedule Report Distribution: Set up daily, weekly, or monthly schedules for automatic report generation and email distribution tailored to your time zone."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Manage Email Distribution Lists:")," Specify a list of email addresses, including internal team members and external stakeholders, to automatically receive the reports."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Admin-Only Access:")," Ensure secure and controlled access to the report generation and scheduling functionalities, limited to users with Admin permissions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CSV Format Reports:")," Receive reports in CSV format, facilitating easy data analysis and sharing.\nThis Hello Report gives you more control over your data, provides immediate access to essential information, and enhances operational efficiency.")),(0,r.kt)("h3",{id:"how-to-use"},"How to Use"),(0,r.kt)("h4",{id:"accessing-the-feature"},"Accessing the Feature:"),(0,r.kt)("p",null,'From the top navigation bar in Canvas, hover over the Analytics tab and select the "Scheduled Report" option.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(48877).Z,width:"1322",height:"586"})),(0,r.kt)("h4",{id:"setting-up-the-report"},"Setting Up the Report:"),(0,r.kt)("p",null,'Click on "Create New Report".\nConfigure the report parameters, including the frequency (Daily, Weekly, Monthly), time zone, and email distribution list.\nThe report will be sent at 3 am in the selected time zone.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4248).Z,width:"1818",height:"974"})),(0,r.kt)("h4",{id:"managing-reports"},"Managing Reports:"),(0,r.kt)("p",null,"Admins can view, edit, or delete scheduled reports at any time through the Reports section."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(55854).Z,width:"2344",height:"1020"})),(0,r.kt)("h3",{id:"report-column-details"},"Report Column Details"),(0,r.kt)("h4",{id:"hello-stack-report-structure"},"Hello Stack Report Structure"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Column Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Explanation"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"orderId")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier for each order"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Order States Timestamps"),(0,r.kt)("td",{parentName:"tr",align:null},"Progression states timestamps of the order as per Hello Order States configuration. ",(0,r.kt)("a",{parentName:"td",href:"/Hello%20Screens/Custom%20Order%20States"},"See Hello Order States")),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"destinationId")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier for the destination"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UsedWave")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if Wave was used"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TempoTracked")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if Tempo was used to tracked the order"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TempoStoppedTime")),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp when Tempo stopped tracking"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AutomatedArrival")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if arrival was automated"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"os")),(0,r.kt)("td",{parentName:"tr",align:null},"Operating system of the device"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"osVersion")),(0,r.kt)("td",{parentName:"tr",align:null},"Version of the operating system"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deviceType")),(0,r.kt)("td",{parentName:"tr",align:null},"Type of device used"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"locationPermissions")),(0,r.kt)("td",{parentName:"tr",align:null},"Status of location permissions granted to the device"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"orderWaitTime")),(0,r.kt)("td",{parentName:"tr",align:null},"Time difference between ",(0,r.kt)("inlineCode",{parentName:"td"},"arrival")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"complete")," events (seconds)"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ExitTime")),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp when the Exit event occurred"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geoDwellTime")),(0,r.kt)("td",{parentName:"tr",align:null},"Time difference between ",(0,r.kt)("inlineCode",{parentName:"td"},"Entry")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Exit")," events (seconds)"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")))),(0,r.kt)("h3",{id:"geofencing-report-structure"},"Geofencing Report Structure"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Column Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Explanation"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Trigger ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier for the trigger event"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Zone ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifier for the geofenced zone"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Zone Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the geofenced zone"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fence Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the specific geofence within the zone"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Zone Custom Data"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom data associated with the zone"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Custom Data"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom data associated with the event"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Entry Event Time"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp of when the entry event occurred"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Entry Longitude"),(0,r.kt)("td",{parentName:"tr",align:null},"Longitude of the entry event"),(0,r.kt)("td",{parentName:"tr",align:null},"Number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Entry Latitude"),(0,r.kt)("td",{parentName:"tr",align:null},"Latitude of the entry event"),(0,r.kt)("td",{parentName:"tr",align:null},"Number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Exit Event Time"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp of when the exit event occurred (if available)"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Exit Longitude"),(0,r.kt)("td",{parentName:"tr",align:null},"Longitude of the exit event (if available)"),(0,r.kt)("td",{parentName:"tr",align:null},"Number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Exit Latitude"),(0,r.kt)("td",{parentName:"tr",align:null},"Latitude of the exit event (if available)"),(0,r.kt)("td",{parentName:"tr",align:null},"Number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dwell Time"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration of time spent within the geofence in seconds (if available)"),(0,r.kt)("td",{parentName:"tr",align:null},"Number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OS"),(0,r.kt)("td",{parentName:"tr",align:null},"Operating system of the device"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OS Version"),(0,r.kt)("td",{parentName:"tr",align:null},"Version of the operating system"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Device"),(0,r.kt)("td",{parentName:"tr",align:null},"Information about the device"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SDK Version"),(0,r.kt)("td",{parentName:"tr",align:null},"Version of the SDK used"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Build Version"),(0,r.kt)("td",{parentName:"tr",align:null},"Build version of the application"),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("h3",{id:"scheduling-frequency"},"Scheduling Frequency"),(0,r.kt)("p",null,"You can select the frequency of report generation and email distribution through a dropdown menu with options for Daily, Weekly, or Monthly reports. Additionally, you can select your preferred time zone to receive reports, which will be sent at 3 am in the selected time zone."),(0,r.kt)("h3",{id:"admin-access-only"},"Admin Access Only"),(0,r.kt)("p",null,'The report generation and scheduling feature is exclusive to users with "Admin" permissions. Only these users can add, edit, or delete scheduled reports, ensuring control and security over report management.'),(0,r.kt)("p",null,"For further assistance or queries,  please get in touch with our support team at ",(0,r.kt)("a",{parentName:"p",href:"mailto:help@bluedot.io"},"help@bluedot.io")))}u.isMDXComponent=!0},48877:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Hello Reports - 1-dd3baa9f9a460691120d6f4abc22ace8.png"},4248:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Hello Reports - 2-f715025a601f8e8f4a85c68928ac556c.png"},55854:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Hello Reports - 3-684d8b4927dea023e27ec045230d35b3.png"}}]);