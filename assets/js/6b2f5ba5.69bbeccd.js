"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[5470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||i;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={},r="Salesforce iOS Integration",l={unversionedId:"integrations/Salesforce/Mobile SDK Integration/iOS",id:"integrations/Salesforce/Mobile SDK Integration/iOS",title:"Salesforce iOS Integration",description:"Overview",source:"@site/docs/integrations/Salesforce/Mobile SDK Integration/iOS.md",sourceDirName:"integrations/Salesforce/Mobile SDK Integration",slug:"/integrations/Salesforce/Mobile SDK Integration/iOS",permalink:"/documentation/integrations/Salesforce/Mobile SDK Integration/iOS",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Salesforce Android Integration",permalink:"/documentation/integrations/Salesforce/Mobile SDK Integration/Android"},next:{title:"Bluedot Data Extension Fields",permalink:"/documentation/integrations/Salesforce/Bluedot data extension fields"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"BluedotPointSDK-Salesforce integration",id:"bluedotpointsdk-salesforce-integration",level:2},{value:"Salesforce iOS MarketingCloudSDK\xa0Integration",id:"salesforce-ios-marketingcloudsdkintegration",level:2},{value:"Bluedot Point iOS SDK Integration",id:"bluedot-point-ios-sdk-integration",level:2},{value:"Bluedot/Salesforce Marketing Cloud integration",id:"bluedotsalesforce-marketing-cloud-integration",level:2},{value:"<strong>GitHub Sample Project</strong>",id:"github-sample-project",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"salesforce-ios-integration"},"Salesforce iOS Integration"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This documentation describes the steps required to integrate the ",(0,a.kt)("strong",{parentName:"p"},"Bluedot Point iOS SDK")," and ",(0,a.kt)("strong",{parentName:"p"},"MarketingCloudSDK")," in an iOS App."),(0,a.kt)("h2",{id:"bluedotpointsdk-salesforce-integration"},"BluedotPointSDK-Salesforce integration"),(0,a.kt)("p",null,"This integration depends on both ",(0,a.kt)("strong",{parentName:"p"},"Salesforce\xa0MarketingCloudSDK")," and\xa0",(0,a.kt)("strong",{parentName:"p"},"Point iOS SDK"),". These dependencies are managed by a cocoapod and will be installed after executing\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"pod install"),"\xa0command. ",(0,a.kt)("strong",{parentName:"p"},"Salesforce\xa0MarketingCloudSDK")," v5.2.1 can be downloaded from\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/salesforce-marketingcloud/MarketingCloudSDK-iOS/releases/tag/v5.2.1"},"https://github.com/salesforce-marketingcloud/MarketingCloudSDK-iOS/releases/tag/v5.2.1"),"."),(0,a.kt)("h2",{id:"salesforce-ios-marketingcloudsdkintegration"},"Salesforce iOS MarketingCloudSDK\xa0Integration"),(0,a.kt)("p",null,"To integrate ",(0,a.kt)("strong",{parentName:"p"},"MarketingCloudSDK")," you need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"MarketingCloudSDKConfiguration.json"),"\xa0file to your project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[{\n\xa0 \xa0 "name": "production",\n\xa0 \xa0 "appid": "__your app id__",\n\xa0 \xa0 "accesstoken": "__your access token__",\n\xa0 \xa0 "marketing_cloud_server_url": "__your app endpoint__",\n\xa0 \xa0 "mid": "__your account mid__",\n\xa0 \xa0 "etanalytics": false,\n\xa0 \xa0 "pianalytics": false,\n\xa0 \xa0 "location": false,\n\xa0 \xa0 "inbox": false,\n\xa0 \xa0 "uselegacypiidentifier": true\n}]\n')),(0,a.kt)("p",null,"And then add MarketingCloudSDKConfiguration.json to Copy Bundle Resources in your target\u2019s Build Phases settings."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4158).Z,width:"584",height:"167"})),(0,a.kt)("p",null,"You can find more information ",(0,a.kt)("a",{parentName:"p",href:"https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/get-started/apple.html"},"here"),"."),(0,a.kt)("h2",{id:"bluedot-point-ios-sdk-integration"},"Bluedot Point iOS SDK Integration"),(0,a.kt)("p",null,"Requirements"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Device and Operating System: all Apple devices running iOS 10.0+ and GPS capability"),(0,a.kt)("li",{parentName:"ol"},"Operating Environment: Data connection (only authentication and rule download) and location services."),(0,a.kt)("li",{parentName:"ol"},"Permissions:\xa0Background processing for location services, local notification.")),(0,a.kt)("p",null,"To integrate PointSDK, please refer to the integration steps\xa0",(0,a.kt)("a",{parentName:"p",href:"/documentation/Point%20SDK/iOS/Quick%20Start"},"here.")),(0,a.kt)("h2",{id:"bluedotsalesforce-marketing-cloud-integration"},"Bluedot/Salesforce Marketing Cloud integration"),(0,a.kt)("p",null,"To trigger Bluedot events in Salesforce Marketing Cloud, please ensure that the Contact Key is passed into Bluedot via the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"CustomKey"),"\xa0field with ",(0,a.kt)("inlineCode",{parentName:"p"},"[BDLocationManager.instance setCustomEventMetaData]"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},'@implementation ViewController\n\n- (void)viewDidLoad {\n    [super viewDidLoad];\n \n    ...\n    successful = [[MarketingCloudSDK sharedInstance] sfmc_configure:&error];\n \n    [[MarketingCloudSDK sharedInstance] sfmc_setContactKey:@"__your_contactKey__"];\n \n    [BDLocationManager.instance setCustomEventMetaData:@{@"ContactKey": [[MarketingCloudSDK sharedInstance] sfmc_contactKey]}];\n    BDLocationManager.instance.sessionDelegate = self;\n    BDLocationManager.instance.locationDelegate = self;\n \n    [BDLocationManager.instance authenticateWithApiKey:@"__your_ApiKey__" requestAuthorization:authorizedAlways];\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The custom event metadata is not persisted across SDK sessions. If the SDK is logged out the custom event metadata is cleared by the SDK. We suggest setting the custom data every time the SDK is authenticated in the app."),(0,a.kt)("p",{parentName:"admonition"},"More information on best practices of setting and using custom event metadata can be found ",(0,a.kt)("a",{parentName:"p",href:"/documentation/Custom%20Event%20Metadata"},"here"),".")),(0,a.kt)("h2",{id:"github-sample-project"},(0,a.kt)("strong",{parentName:"h2"},"GitHub Sample Project")),(0,a.kt)("p",null,"A sample project which demonstrates the integration of JB4A iOS SDK and Bluedot Point iOS SDK\xa0 is available on\xa0",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/Bluedot-Innovation/Salesforce-Simple-Integration-Demo-iOS"},"GitHub")),"."))}p.isMDXComponent=!0},4158:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/SDKConfigure6-9353f4681297b8b92f2750554dfff16e.png"}}]);