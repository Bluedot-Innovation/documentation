"use strict";(self.webpackChunkbluedot_docs=self.webpackChunkbluedot_docs||[]).push([[5344],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=t.createContext({}),s=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(d.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(d,".").concat(f)]||p[f]||c[f]||o;return n?t.createElement(m,l(l({ref:r},u),{},{components:n})):t.createElement(m,l({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5691:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=n(7462),a=(n(7294),n(3905));const o={},l="Gradle 8",i={unversionedId:"versions/Point SDK 15/Android/Gradle 8",id:"versions/Point SDK 15/Android/Gradle 8",title:"Gradle 8",description:"What has changed in Gradle 8.0",source:"@site/docs/versions/Point SDK 15/Android/Gradle 8.md",sourceDirName:"versions/Point SDK 15/Android",slug:"/versions/Point SDK 15/Android/Gradle 8",permalink:"/versions/Point SDK 15/Android/Gradle 8",draft:!1,tags:[],version:"current",frontMatter:{}},d={},s=[{value:"What has changed in <strong>Gradle 8.0</strong>",id:"what-has-changed-in-gradle-80",level:2},{value:"Building Bluedot Point SDK with Gradle 8",id:"building-bluedot-point-sdk-with-gradle-8",level:2}],u={toc:s},p="wrapper";function c(e){let{components:r,...n}=e;return(0,a.kt)(p,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gradle-8"},"Gradle 8"),(0,a.kt)("h2",{id:"what-has-changed-in-gradle-80"},"What has changed in ",(0,a.kt)("a",{parentName:"h2",href:"https://developer.android.com/build/releases/gradle-plugin#8-0-0"},(0,a.kt)("strong",{parentName:"a"},"Gradle 8.0"))),(0,a.kt)("p",null,"There are several new features and improvements added in Gradle version (AGP 8.0.0). Some of the major ones are:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1","."," Namespace mandatory in module-level build script")),(0,a.kt)("p",null,"The namespace declaration has been removed from AndroidManifest.xml and can now only be declared from the build.gradle."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2","."," Build option default values modified")),(0,a.kt)("p",null,"These changes have been made to improve build performance."),(0,a.kt)("p",null,"Here are a few examples of the new build option default values in Gradle version 8.0.0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gradle"},"android.defaults.buildfeatures.buildconfig (false)\nandroid.defaults.buildfeatures.aidl (false)\nandroid.defaults.buildfeatures.renderscript (false)\nandroid.nonFinalResIds (true)\nandroid.nonTransitiveRClass (true)\nandroid.enableR8.fullMode (true)\n")),(0,a.kt)("p",null,"For more details about them, please visit: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/build/releases/gradle-plugin#default-changes"},"Android Gradle plugin release notes"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3","."," Enforced build option values")),(0,a.kt)("p",null,"One of the changes in Gradle version 8.0.0 is that many build option default values have been modified to improve build performance, and some of them cannot be modified anymore."),(0,a.kt)("p",null,"Here are a few examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gradle"},"android.r8.failOnMissingClasses (true)\nandroid.enableNewResourceShrinker (true)\nandroid.enableSourceSetPathsMap (true)\n.....\n")),(0,a.kt)("p",null,"For more details about them, please visit: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/build/releases/gradle-plugin#enforced-changes"},"Android Gradle plugin release notes")),(0,a.kt)("h2",{id:"building-bluedot-point-sdk-with-gradle-8"},"Building Bluedot Point SDK with Gradle 8"),(0,a.kt)("p",null,"When building a project incorporating the Bluedot Point SDK with Gradle 8, Please add the following ProGuard rules to your proguard-rules.pro file for a smooth build and to ensure the Bluedot SDK runs correctly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gradle"},"-dontwarn kotlinx.parcelize.Parcelize\n#R8 full mode strips generic signatures from return types if not kept.\n-if interface * { @retrofit2.http.* public *** *(...); }\n-keep,allowoptimization,allowshrinking,allowobfuscation class <3>\n#R8 full mode strips generic signatures from return types if not kept.\n-keep,allowobfuscation,allowshrinking class retrofit2.Response\n-keepattributes Signature\n-keep class kotlin.coroutines.Continuation\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"These rules are already included as consumer ProGuard rules in the upcoming Bluedot SDK 16.x release. Therefore, if you update to SDK v16.x in the future, these changes do not need to be made explicitly from the app side.")))}c.isMDXComponent=!0}}]);