"use strict";(self.webpackChunkhris_api_docs=self.webpackChunkhris_api_docs||[]).push([[646],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(n),h=p,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:p,s[1]=o;for(var i=2;i<r;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1951:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return d}});var a=n(7462),p=n(3366),r=(n(7294),n(3905)),s=["components"],o={id:"apps",title:"Apps",sidebar_label:"Apps"},l=void 0,i={unversionedId:"developers/settings/apps",id:"developers/settings/apps",isDocsHomePage:!1,title:"Apps",description:"Apps",source:"@site/docs/developers/settings/apps.md",sourceDirName:"developers/settings",slug:"/developers/settings/apps",permalink:"/hris-api-docs/docs/developers/settings/apps",editUrl:"https://github.com/udsm-dhis2-project/hris-api-docs/blob/main/docs/developers/settings/apps.md",tags:[],version:"current",frontMatter:{id:"apps",title:"Apps",sidebar_label:"Apps"},sidebar:"docs",previous:{title:"User Logs",permalink:"/hris-api-docs/docs/developers/settings/logs"},next:{title:"Introduction to HRHIS APIs",permalink:"/hris-api-docs/docs/developers/api-introduction"}},c=[{value:"Apps",id:"apps",children:[{value:"Get apps",id:"get-apps",children:[],level:3},{value:"Install an app",id:"install-an-app",children:[],level:3},{value:"Delete an app",id:"delete-an-app",children:[],level:3},{value:"Reload apps",id:"reload-apps",children:[],level:3},{value:"Share apps between instances",id:"share-apps-between-instances",children:[],level:3}],level:2},{value:"App store",id:"app-store",children:[{value:"Get apps",id:"get-apps-1",children:[],level:3},{value:"Install apps",id:"install-apps",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,p.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"apps"},"Apps"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/apps")," endpoint can be used for installing, deleting and\nlisting apps. The app key is based on the app name, but with all\nnon-alphanumerical characters removed, and spaces replaced with a dash.\n",(0,r.kt)("em",{parentName:"p"},"My app!")," will return the key ",(0,r.kt)("em",{parentName:"p"},"My-app"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("p",{parentName:"blockquote"},"Previous to 2.28, the app key was derived from the name of the ZIP\narchive, excluding the file extension. URLs using the old format\nshould still return the correct app in the api.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/api/apps\n")),(0,r.kt)("h3",{id:"get-apps"},"Get apps"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("p",{parentName:"blockquote"},"Previous to 2.28 the app property folderName referred to the actual\npath of the installed app. With the ability to store apps on cloud\nservices, folderName's purpose changed, and will now refer to the app\nkey.")),(0,r.kt)("p",null,"You can read the keys for apps by listing all apps from the apps\nresource and look for the ",(0,r.kt)("em",{parentName:"p"},"key")," property. To list all installed apps in\nJSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -u user:pass -H "Accept: application/json" "http://server.com/api/apps"\n')),(0,r.kt)("p",null,"You can also simply point your web browser to the resource URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://server.com/api/apps\n")),(0,r.kt)("p",null,"The apps list can also be filtered by app type and by name, by appending\none or more ",(0,r.kt)("em",{parentName:"p"},"filter")," parameters to the URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://server.com/api/apps?filter=appType:eq:DASHBOARD_APP&filter=name:ilike:youtube\n")),(0,r.kt)("p",null,"App names support the ",(0,r.kt)("em",{parentName:"p"},"eq")," and ",(0,r.kt)("em",{parentName:"p"},"ilike")," filter operators, while ",(0,r.kt)("em",{parentName:"p"},"appType"),"\nsupports ",(0,r.kt)("em",{parentName:"p"},"eq")," only."),(0,r.kt)("h3",{id:"install-an-app"},"Install an app"),(0,r.kt)("p",null,"To install an app, the following command can be issued:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -u user:pass -F file=@app.zip "http://server.com/api/apps"\n')),(0,r.kt)("h3",{id:"delete-an-app"},"Delete an app"),(0,r.kt)("p",null,"To delete an app, you can issue the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE -u user:pass "http://server.com/api/apps/<app-key>"\n')),(0,r.kt)("h3",{id:"reload-apps"},"Reload apps"),(0,r.kt)("p",null,"To force a reload of currently installed apps, you can issue the\nfollowing command. This is useful if you added a file manually directly\nto the file system, instead of uploading through the HRHIS4 user\ninterface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT -u user:pass "http://server.com/api/apps"\n')),(0,r.kt)("h3",{id:"share-apps-between-instances"},"Share apps between instances"),(0,r.kt)("p",null,"If the HRHIS4 instance has been configured to use cloud storage, apps\nwill now be installed and stored on the cloud service. This will enable\nmultiple instances share the same versions on installed apps, instead of\ninstalling the same apps on each individual instance."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("p",{parentName:"blockquote"},"Previous to 2.28, installed apps would only be stored on the instance's\nlocal filesystem. Apps installed before 2.28 will still be available on the\ninstance it was installed, but it will not be shared with other\ninstances, as it's still located on the instances local filesystem.")),(0,r.kt)("h2",{id:"app-store"},"App store"),(0,r.kt)("p",null,"The Web API exposes the content of the HRHIS4 App Store as a JSON\nrepresentation which can found at the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/appStore")," resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/api/appStore\n")),(0,r.kt)("h3",{id:"get-apps-1"},"Get apps"),(0,r.kt)("p",null,"You can retrieve apps with a GET request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/appStore\n")),(0,r.kt)("p",null,"A sample JSON response is described below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  [\n    {\n      "name": "Tabular Tracker Capture",\n      "description": "Tabular Tracker Capture is an app that makes you more effective.",\n      "sourceUrl": "https://github.com/HRHIS4/App-repository",\n      "appType": "DASHBOARD_WIDGET",\n      "status": "PENDING",\n      "id": "NSD06BVoV21",\n      "developer": {\n        "name": "DHIS",\n        "organisation": "Uio",\n        "address": "Oslo",\n        "email": "dhis@abc.com",\n      },\n      "versions": [\n        {\n          "id": "upAPqrVgwK6",\n          "version": "1.2",\n          "minDhisVersion": "2.17",\n          "maxDhisVersion": "2.20",\n          "downloadUrl": "https://HRHIS4.org/download/appstore/tabular-capture-12.zip",\n          "demoUrl": "http://dev.hrhis.dhis2udsm.org/demo"\n        }\n      ],\n      "images": [\n        {\n          "id": "upAPqrVgwK6",\n          "logo": "true",\n          "imageUrl": "https://HRHIS4.org/download/appstore/tabular-capture-12.png",\n          "description": "added feature snapshot",\n          "caption": "dialog",\n        }\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"install-apps"},"Install apps"),(0,r.kt)("p",null,"You can install apps on your instance of HRHIS4 assuming you have the\nappropriate permissions. An app is referred to using the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," property\nof the relevant version of the app. An app is installed with a POST\nrequest with the version id to the following resource:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /api/appStore/{app-version-id}\n")))}d.isMDXComponent=!0}}]);