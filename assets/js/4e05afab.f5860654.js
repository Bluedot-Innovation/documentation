"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[3596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,d=p["".concat(l,".").concat(f)]||p[f]||h[f]||r;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={pagination_next:null},i="How to authenticate with Config API",s={unversionedId:"Canvas/How to authenticate with Config API",id:"Canvas/How to authenticate with Config API",title:"How to authenticate with Config API",description:"The Config API uses Bearer authentication (also called token authentication) following the OAuth 2.0 standards.",source:"@site/docs/Canvas/How to authenticate with Config API.md",sourceDirName:"Canvas",slug:"/Canvas/How to authenticate with Config API",permalink:"/Canvas/How to authenticate with Config API",draft:!1,tags:[],version:"current",frontMatter:{pagination_next:null},sidebar:"defaultSidebar",previous:{title:"Event Simulator Guide",permalink:"/Canvas/Event simulator guide"}},l={},c=[{value:"How to get an authentication token",id:"how-to-get-an-authentication-token",level:3},{value:"Expiry time of the Tokens",id:"expiry-time-of-the-tokens",level:2},{value:"Best Practises on using the Session API",id:"best-practises-on-using-the-session-api",level:2},{value:"Explore Config API",id:"explore-config-api",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-authenticate-with-config-api"},"How to authenticate with Config API"),(0,o.kt)("p",null,"The Config API uses ",(0,o.kt)("strong",{parentName:"p"},"Bearer authentication")," (also called ",(0,o.kt)("strong",{parentName:"p"},"token authentication)")," following the ",(0,o.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/access-tokens/access-token-response/"},"OAuth 2.0 standards"),".",(0,o.kt)("br",{parentName:"p"}),"\n","All API requests must be made over HTTPS and requests without a valid Bearer token will fail."),(0,o.kt)("h3",{id:"how-to-get-an-authentication-token"},"How to get an authentication token"),(0,o.kt)("p",null,"To get your authentication token you\u2019ll need to initiate a session. It will generate an accessToken that can be used for any subsequent requests to Config API."),(0,o.kt)("p",null,"The following steps will guide you to authenticate to our Config API"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/sessions")," with your credentials"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "email": "user@email.com",\n  "password": "Secret_Password_123"\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The response will return an object with the following structure"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "statusCode": 201,\n  "idToken": "string",\n  "accessToken": "string",\n  "refreshToken": "string"\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Subsequent requests to the API can be made by passing in ",(0,o.kt)("inlineCode",{parentName:"p"},"Bearer <accessToken>")," into the request Authorization header. This is an example of how you would get the list of Projects"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// NODE.JS\nconst https \\= require('https');\n\nconst options \\= {\n  host: 'config.bluedot.io',\n  path: '/prod1/projects',\n  headers: { 'Authorization': 'Bearer <accessToken>' }\n};\n\nconst data \\= \\[\\]\n\nhttps.get(options, (res) \\=>; {\n  res.setEncoding('utf8');\n\n  res.on('data', chunk \\=> {\n    data.push(chunk)\n  });\n\n  res.on('error', error \\=> {\n    console.error(error)\n  })\n \n  res.on('end', () \\=> {\n    console.log(data);\n  })\n});\n")))),(0,o.kt)("h2",{id:"expiry-time-of-the-tokens"},"Expiry time of the Tokens"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"accessToken"),": An Access Token is a credential that can be used by an application to access the Configuration API. It is active for 1 hour."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"refreshToken"),": The Refresh Token is a special token that can be used to obtain a renewed ",(0,o.kt)("inlineCode",{parentName:"p"},"accessToken"),". It is active for 60 days."),(0,o.kt)("h2",{id:"best-practises-on-using-the-session-api"},"Best Practises on using the Session API"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Have a fail/retry strategy for using the access token \u2013 if it expires, catch the failure, reauthenticate to get a new access token and try again."),(0,o.kt)("li",{parentName:"ol"},"The refresh token can be used, but for an m2m integration, it\u2019s less important (the email/password can be used instead). The refresh token is typically used by less secure clients such as browsers.")),(0,o.kt)("h2",{id:"explore-config-api"},"Explore Config API"),(0,o.kt)("p",null,"Config API has a number of endpoints that can help you manage your Bluedot account, including creating new Zones or updating the configuration of a Projects. For further information please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://config-docs.bluedot.io/"},"Config API Reference")))}h.isMDXComponent=!0}}]);