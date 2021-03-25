(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),s=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,b=u["".concat(i,".").concat(d)]||u[d]||h[d]||o;return r?n.a.createElement(b,l(l({ref:t},c),{},{components:r})):n.a.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),o=(r(0),r(106)),i={id:"healthworker",title:"Health Worker Data",sidebar_label:"Health Worker Data"},l={unversionedId:"users/health-worker/healthworker",id:"users/health-worker/healthworker",isDocsHomePage:!1,title:"Health Worker Data",description:"Health Worker Data Module",source:"@site/docs/users/health-worker/health-worker.md",slug:"/users/health-worker/healthworker",permalink:"/hris-api-docs/docs/users/health-worker/healthworker",editUrl:"https://github.com/hisptz/hris-api-docs/blob/main/docs/users/health-worker/health-worker.md",version:"current",sidebar_label:"Health Worker Data",sidebar:"docs",previous:{title:"Users",permalink:"/hris-api-docs/docs/users/user/user"},next:{title:"Import and Export Module",permalink:"/hris-api-docs/docs/users/import-export/import-export"}},p=[],c={toc:p};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"health-worker-data-module"},"Health Worker Data Module"),Object(o.b)("p",null," This module is used for managing all health worker data. Data entry, updating and viewing is performed in this application. This app is available in the Apps menu. To use Health worker data app follow the steps below:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Select the Health Worker Data application from the apps menu. This can be done by either searching the apps menu using the search bar available in apps menu or by scrolling down the Apps menu to find data entry app and select it.")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"After selecting the data entry app, an interface will appear as shown in the figure below.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"From the interface, select the organization unit and the specify the type of data entry form for which data has to be entered.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Form will be displayed with appropriate data based on the specified organization unit."))))}s.isMDXComponent=!0}}]);