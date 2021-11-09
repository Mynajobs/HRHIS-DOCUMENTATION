"use strict";(self.webpackChunkhris_api_docs=self.webpackChunkhris_api_docs||[]).push([[4],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,y=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(y,s(s({ref:t},p),{},{components:n})):a.createElement(y,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7863:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={id:"settings",title:"Settings",sidebar_label:"Settings"},l=void 0,u={unversionedId:"developers/settings/settings",id:"developers/settings/settings",isDocsHomePage:!1,title:"Settings",description:"System settings",source:"@site/docs/developers/settings/settings.md",sourceDirName:"developers/settings",slug:"/developers/settings/settings",permalink:"/hris-api-docs/docs/developers/settings/settings",editUrl:"https://github.com/udsm-dhis2-project/hris-api-docs/blob/main/docs/developers/settings/settings.md",tags:[],version:"current",frontMatter:{id:"settings",title:"Settings",sidebar_label:"Settings"},sidebar:"docs",previous:{title:"Users",permalink:"/hris-api-docs/docs/developers/settings/users"},next:{title:"Notification",permalink:"/hris-api-docs/docs/developers/settings/notifications"}},p=[{value:"System settings",id:"system-settings",children:[],level:2},{value:"User settings",id:"user-settings",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Read-Only configuration service",id:"read-only-configuration-service",children:[],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"system-settings"},"System settings"),(0,i.kt)("p",null,"You can manipulate system settings by interacting with the\n",(0,i.kt)("em",{parentName:"p"},"systemSettings")," resource. A system setting is a simple key-value pair,\nwhere both the key and the value are plain text strings. To save or\nupdate a system setting you can make a ",(0,i.kt)("em",{parentName:"p"},"POST")," request to the following URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/systemSettings/my-key?value=my-val\n")),(0,i.kt)("p",null,'Alternatively, you can submit the setting value as the request body,\nwhere content type is set to "text/plain". As an example, you can use\ncurl like this:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "dev.hrhis.dhis2udsm.org/demo/api/systemSettings/my-key" -d "My long value"\n  -H "Content-Type: text/plain" -u admin:district\n')),(0,i.kt)("p",null,"To set system settings in bulk you can send a JSON object with a\nproperty and value for each system setting key-value pair using a POST request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "keyApplicationNotification": "Welcome",\n  "keyApplicationIntro": "HRHIS4",\n  "keyApplicationFooter": "Read more at HRHIS4.org"\n}\n')),(0,i.kt)("p",null,"Translations for translatable Setting keys can be set by specifying locale as\na query parameter and translated value which can be specified\neither as a query param or withing the body payload. See an example URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/systemSettings/<my-key>?locale=<my-locale>&value=<my-translated-value> \n")),(0,i.kt)("p",null,"You should replace my-key with your real key and my-val with your real\nvalue. To retrieve the value for a given key (in JSON or plain text)\nyou can make a ",(0,i.kt)("em",{parentName:"p"},"GET")," request to the following URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/systemSettings/my-key\n")),(0,i.kt)("p",null,"Alternatively, you can specify the key as a query parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/systemSettings?key=my-key\n")),(0,i.kt)("p",null,"You can retrieve specific system settings as JSON by repeating the key\nquery parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "dev.hrhis.dhis2udsm.org/demo/api/systemSettings?key=keyApplicationNotification&key=keyApplicationIntro"\n  -u admin:district\n')),(0,i.kt)("p",null,"You can retrieve all system settings with a GET request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/systemSettings\n")),(0,i.kt)("p",null,"To retrieve a specific translation for a given translatable key you can specify\na locale as query param:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/systemSettings/<my-key>?locale=<my-locale>\n")),(0,i.kt)("p",null,"If present, the translation for the given locale is returned. Otherwise, a default\nvalue is returned. If no locale is specified for the translatable key, the user default\nUI locale is used to fetch the correct translation. If the given translation is not\npresent, again, the default value is returned."),(0,i.kt)("p",null,"The priority for translatable keys is the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"specified locale > user's default UI locale > defaut value\n")),(0,i.kt)("p",null,"To delete a system setting, you can make a ",(0,i.kt)("em",{parentName:"p"},"DELETE")," request to the URL\nsimilar to the one used above for retrieval. If a translatable key is\nused, all present translations will be deleted as well."),(0,i.kt)("p",null,"To delete only a specific translation of translatable key, the same URL\nas for adding a translation should be used and the empty value should be\nprovided:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/systemSettings/<my-key>?locale=<my-locale>&value=\n")),(0,i.kt)("p",null,"The available system settings are listed below."),(0,i.kt)("h2",{id:"user-settings"},"User settings"),(0,i.kt)("p",null,"You can manipulate user settings by interacting with the ",(0,i.kt)("em",{parentName:"p"},"userSettings"),"\nresource. A user setting is a simple key-value pair, where both the key\nand the value are plain text strings. The user setting will be linked to\nthe user who is authenticated for the Web API request. To return a list\nof all user settings, you can send a ",(0,i.kt)("em",{parentName:"p"},"GET")," request to the following URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/userSettings\n")),(0,i.kt)("p",null,"User settings not set by the user, will fall back to the equivalent\nsystem setting. To only return the values set explicitly by the user,\nyou can append ?useFallback=false to the above URL, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/userSettings?useFallback=false\n")),(0,i.kt)("p",null,"To save or update a setting for the currently authenticated user you can\nmake a ",(0,i.kt)("em",{parentName:"p"},"POST")," request to the following URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/userSettings/my-key?value=my-val\n")),(0,i.kt)("p",null,"You can specify the user for which to save the setting explicitly with\nthis syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/userSettings/my-key?user=username&value=my-val\n")),(0,i.kt)("p",null,'Alternatively, you can submit the setting value as the request body,\nwhere content type is set to "text/plain". As an example, you can use\ncurl like this:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://dev.hrhis.dhis2udsm.org/demo/api/userSettings/my-key" -d "My long value"\n  -H "Content-Type: text/plain" -u admin:district\n')),(0,i.kt)("p",null,"As an example, to set the UI locale of the current user to French you\ncan use the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://dev.hrhis.dhis2udsm.org/demo/api/userSettings/keyUiLocale?value=fr" \n  -X POST -u admin:district\n')),(0,i.kt)("p",null,"You should replace my-key with your real key and my-val with your real\nvalue. To retrieve the value for a given key in plain text you can make\na ",(0,i.kt)("em",{parentName:"p"},"GET")," request to the following URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/userSettings/my-key\n")),(0,i.kt)("p",null,"To delete a user setting, you can make a ",(0,i.kt)("em",{parentName:"p"},"DELETE")," request to the URL\nsimilar to the one used above for retrieval."),(0,i.kt)("p",null,"The available system settings are listed below."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"To access configuration you can interact with the ",(0,i.kt)("em",{parentName:"p"},"configuration"),"\nresource. You can get XML and JSON responses through the ",(0,i.kt)("em",{parentName:"p"},"Accept")," header\nor by using the .json or .xml extensions. You can ",(0,i.kt)("em",{parentName:"p"},"GET")," all properties\nof the configuration from:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/configuration\n")),(0,i.kt)("p",null,"You can send ",(0,i.kt)("em",{parentName:"p"},"GET")," and ",(0,i.kt)("em",{parentName:"p"},"POST")," requests to the following specific\nresources:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET /api/configuration/systemId\n\nGET POST DELETE /api/configuration/feedbackRecipients\n\nGET POST DELETE /api/configuration/offlineOrganisationUnitLevel\n\nGET POST /api/configuration/infrastructuralDataElements\n\nGET POST /api/configuration/infrastructuralIndicators\n\nGET POST /api/configuration/infrastructuralPeriodType\n\nGET POST DELETE /api/configuration/selfRegistrationRole\n\nGET POST DELETE /api/configuration/selfRegistrationOrgUnit\n")),(0,i.kt)("p",null,'For the CORS whitelist configuration you can make a POST request with an\narray of URLs to whitelist as payload using "application/json" as\ncontent-type, for instance:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'["www.google.com", "www.HRHIS4.org", "www.who.int"]\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET POST /api/configuration/corsWhitelist\n")),(0,i.kt)("p",null,"For POST requests, the configuration value should be sent as the request\npayload as text. The following table shows appropriate configuration\nvalues for each property."),(0,i.kt)("p",null,"As an example, to set the feedback recipients user group you can invoke\nthe following curl command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "localhost/api/configuration/feedbackRecipients" -d "wl5cDMuUhmF"\n  -H "Content-Type:text/plain"-u admin:district\n')),(0,i.kt)("h2",{id:"read-only-configuration-service"},"Read-Only configuration service"),(0,i.kt)("p",null,"To access configuration you can now use read-only service. This service\nwill provide read-only access to ",(0,i.kt)("em",{parentName:"p"},"UserSettings, SystemSettings and HRHIS4\nserver configurations")," You can get XML and JSON responses through the\n",(0,i.kt)("em",{parentName:"p"},"Accept")," header. You can ",(0,i.kt)("em",{parentName:"p"},"GET")," all settings from:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/api/configuration/settings\n")),(0,i.kt)("p",null,"You can get filtered settings based on setting type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET /api/configuration/settings/filter?type=USER_SETTING\n\nGET /api/configuration/settings/filter?type=CONFIGURATION\n")),(0,i.kt)("p",null,"More than one type can be\nprovided"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET /api/configuration/settings/filter?type=USER_SETTING&type=SYSTEM_SETTING\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note")),(0,i.kt)("p",{parentName:"blockquote"},"Fields which are confidential will be provided in the output but without values.")))}m.isMDXComponent=!0}}]);