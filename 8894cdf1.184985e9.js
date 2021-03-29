(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),c=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||i;return r?o.a.createElement(m,a(a({ref:t},u),{},{components:r})):o.a.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return c}));var n=r(3),o=r(7),i=(r(0),r(106)),s={id:"user",title:"User Module",sidebar_label:"User"},a={unversionedId:"users/user/user",id:"users/user/user",isDocsHomePage:!1,title:"User Module",description:"All user management activities in HRHIS are performed using Users app. These activities include creation, granting and revoking roles  as well as disabling user accounts. To access and use the user module the following steps have to be followed:",source:"@site/docs/users/user/user.md",slug:"/users/user/user",permalink:"/hris-api-docs/docs/users/user/user",editUrl:"https://github.com/hisptz/hris-api-docs/blob/main/docs/users/user/user.md",version:"current",sidebar_label:"User",sidebar:"docs",previous:{title:"Introduction",permalink:"/hris-api-docs/docs/users/introduction"},next:{title:"Health Worker Data Module",permalink:"/hris-api-docs/docs/users/health-worker/healthworker"}},l=[],u={toc:l};function c(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"All user management activities in HRHIS are performed using Users app. These activities include creation, granting and revoking roles  as well as disabling user accounts. To access and use the user module the following steps have to be followed:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Go to application menu and select User application")),Object(i.b)("p",null,"Selecting User app(figure)\n2. Click on Users, Users module window will open up as in Figure below. With Users and user Roles tabs."),Object(i.b)("p",null,"Users application window Figure\na. To create new user "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"click on (img)icon, a new form for adding user will open up as in figure below. "),Object(i.b)("li",{parentName:"ol"},"Fill in all the user's details and assign appropriate user roles and organisation unit "),Object(i.b)("li",{parentName:"ol"},"click the Save button to save the user account.")),Object(i.b)("p",null,"Adding user window Figure\nClick on (img)icon to view the list of system users.  Users window will display a list of user accounts and their details."),Object(i.b)("p",null,"System users Figure\nClick on (image)to view various actions that may be performed on a selected user account as in Figure below."),Object(i.b)("p",null,"User account actions Figure\nTo edit user details"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"select Edit option, User form will open up as displayed in Figure below. "),Object(i.b)("li",{parentName:"ol"},"Fill in the details "),Object(i.b)("li",{parentName:"ol"},"click the Save button to save them.")),Object(i.b)("p",null,"Edit user form Figure\nTo disable user account "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Select Disable from among options as seen in the Figure below, then select the reason for disabling the user. "),Object(i.b)("li",{parentName:"ol"},"Click the Confirm button to confirm disabling that user. The user status will change to disabled.")),Object(i.b)("p",null,"Disabling user accounts Figure\nNOTE: ",Object(i.b)("em",{parentName:"p"},"Employees with records in the system can be converted to system users through self registration. To perform self registration do the following:\nGo to the login screen and locate the self registration button.")),Object(i.b)("p",null,"HRHIS Login screen with self registration button Figure\nClick on the Self Registration button, a new self registration form will open up as observed in Figure below.\nProvide required details either Email, Check number, Registration number or NIDA number as recorded in the system."),Object(i.b)("p",null,"HRHIS Self registration form Figure\nProvide an email address in which the activation link must be sent to. "),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Note:This email must be the one associated with the record in the system")),Object(i.b)("p",null,"click the register button to register the user. "),Object(i.b)("p",null,"An email with your user name and  activation link will be sent to the specified email, the acctivation link should be used within an hour to create a password. After one hour is gone, the link expires."),Object(i.b)("p",null,"After successful creation of password you can now login to the system."),Object(i.b)("p",null,"To login to the system provide your username and password."))}c.isMDXComponent=!0}}]);