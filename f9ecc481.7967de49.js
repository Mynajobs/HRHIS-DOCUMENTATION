(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{103:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return d})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return b}));var n=t(3),r=t(7),o=(t(0),t(106)),i={id:"dashboard",title:"Dashboard Module",sidebar_label:"Dashboard"},d={unversionedId:"users/dashboard/dashboard",id:"users/dashboard/dashboard",isDocsHomePage:!1,title:"Dashboard Module",description:"Dashboard is the default landing page of the HRHIS system, it enables users to analyze data entered in the system easily and quickly. Dashboards can be inform of tables, charts, list and maps. The following are the functionalities available in the HRHIS dashboard module",source:"@site/docs/users/dashboard/dashboard.md",slug:"/users/dashboard/dashboard",permalink:"/hris-api-docs/docs/users/dashboard/dashboard",editUrl:"https://github.com/udsm-dhis2-project/hris-api-docs/blob/main/docs/users/dashboard/dashboard.md",version:"current",sidebar_label:"Dashboard",sidebar:"docs",previous:{title:"Report Module",permalink:"/hris-api-docs/docs/users/reports/report"},next:{title:"Maintenance Module",permalink:"/hris-api-docs/docs/users/maintenance/maintenance"}},s=[{value:"A. Creating a new dashboard",id:"a-creating-a-new-dashboard",children:[]},{value:"B. Viewing an existing dashboard",id:"b-viewing-an-existing-dashboard",children:[]},{value:"C. Editing a dashboard",id:"c-editing-a-dashboard",children:[]},{value:"D. Deleting a dashboard",id:"d-deleting-a-dashboard",children:[]}],l={toc:s};function b(e){var a=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,i,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Dashboard is the default landing page of the HRHIS system, it enables users to analyze data entered in the system easily and quickly. Dashboards can be inform of tables, charts, list and maps. The following are the functionalities available in the HRHIS dashboard module"),Object(o.b)("p",null,"A. Creating a new dashboard"),Object(o.b)("p",null,"B. Viewing an existing dashboard"),Object(o.b)("p",null,"C. Editing an existing dashboard"),Object(o.b)("p",null,"D. Deleting a dashboard"),Object(o.b)("h2",{id:"a-creating-a-new-dashboard"},"A. Creating a new dashboard"),Object(o.b)("p",null,"To create the dashboard follow the steps below:"),Object(o.b)("p",null,"1.Click on the + sign located at the top right side of the home page see figure below"),Object(o.b)("p",null,Object(o.b)("img",{alt:"img alt",src:t(229).default})),Object(o.b)("p",null,"dashboard form will be displayed as in Figure below to enable user to specify the name of dashboard."),Object(o.b)("p",null,Object(o.b)("img",{alt:"img alt",src:t(230).default})),Object(o.b)("p",null,"2.Click save to save the dashboard, a new dashboard will be created."),Object(o.b)("p",null,"3.Click on Add item button and select the kind of item you would like to add into the dashboard. eg Chart, table or pie chart."),Object(o.b)("p",null,Object(o.b)("img",{alt:"img alt",src:t(231).default})),Object(o.b)("p",null,"4.Name your item and select the data dimensions(data, period and organization unit) associated with your item. A new dashboard item will be created. Click on Save Changes to save the item. You can into the dashboard add as many items as possible."),Object(o.b)("h2",{id:"b-viewing-an-existing-dashboard"},"B. Viewing an existing dashboard"),Object(o.b)("p",null,"To view an existing dashboard, simply a user has to select the name of the dashboard from the list of dashboard at the top of the dashboard page and the selected dsahboard will be opened to display data."),Object(o.b)("h2",{id:"c-editing-a-dashboard"},"C. Editing a dashboard"),Object(o.b)("p",null,"To edit/delete the item click on(:image) at the top right of the item and select appropriate action."),Object(o.b)("h2",{id:"d-deleting-a-dashboard"},"D. Deleting a dashboard"),Object(o.b)("p",null,"To delete the dashboard click on icon at the top of the dashboard and select delete on the screen below."))}b.isMDXComponent=!0},106:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return p}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),b=function(e){var a=r.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},c=function(e){var a=b(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},h=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=b(t),h=n,p=c["".concat(i,".").concat(h)]||c[h]||u[h]||o;return t?r.a.createElement(p,d(d({ref:a},l),{},{components:t})):r.a.createElement(p,d({ref:a},l))}));function p(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=h;var d={};for(var s in a)hasOwnProperty.call(a,s)&&(d[s]=a[s]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},229:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/Addingdashboards-d251c7b01f2006f3087ac41be0082fbb.png"},230:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/DashboardForm-e1219177b803c5d21afbfc48a4c094fb.png"},231:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/EditingDashboardButton-c101d80c1014bcac2ea2e2257d923d3b.png"}}]);