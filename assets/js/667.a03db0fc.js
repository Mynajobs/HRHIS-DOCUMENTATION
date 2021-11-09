/*! For license information please see 667.a03db0fc.js.LICENSE.txt */
"use strict";(self.webpackChunkhris_api_docs=self.webpackChunkhris_api_docs||[]).push([[667],{9960:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(3366),o=t(7294),i=t(3727),u=t(2263),a=t(3919),c=t(412),s=(0,o.createContext)({collectLink:function(){}}),l=t(4996),f=t(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var n,t,v=e.isNavLink,p=e.to,g=e.href,h=e.activeClassName,m=e.isActive,y=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,w=void 0===b||b,E=(0,r.Z)(e,d),_=(0,u.Z)().siteConfig,P=_.trailingSlash,S=_.baseUrl,L=(0,l.C)().withBaseUrl,O=(0,o.useContext)(s),C=p||g,x=(0,a.Z)(C),k=null==C?void 0:C.replace("pathname://",""),A=void 0!==k?(t=k,w&&function(e){return e.startsWith("/")}(t)?L(t):t):void 0;A&&x&&(A=(0,f.applyTrailingSlash)(A,{trailingSlash:P,baseUrl:S}));var j=(0,o.useRef)(!1),R=v?i.OL:i.rU,D=c.Z.canUseIntersectionObserver,T=(0,o.useRef)();(0,o.useEffect)((function(){return!D&&x&&null!=A&&window.docusaurus.prefetch(A),function(){D&&T.current&&T.current.disconnect()}}),[T,A,D,x]);var I=null!==(n=null==A?void 0:A.startsWith("#"))&&void 0!==n&&n,M=!A||!x||I;return A&&x&&!I&&!y&&O.collectLink(A),M?o.createElement("a",Object.assign({href:A},C&&!x&&{target:"_blank",rel:"noopener noreferrer"},E)):o.createElement(R,Object.assign({},E,{onMouseEnter:function(){j.current||null==A||(window.docusaurus.preload(A),j.current=!0)},innerRef:function(e){var n,t;D&&e&&x&&(n=e,t=function(){null!=A&&window.docusaurus.prefetch(A)},T.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.current.unobserve(n),T.current.disconnect(),t())}))})),T.current.observe(n))},to:A||""},v&&{isActive:m,activeClassName:h}))}},5999:function(e,n,t){t.d(n,{Z:function(){return l},I:function(){return s}});var r=t(7294),o=/{\w+}/g,i="{}";function u(e,n){var t=[],u=e.replace(o,(function(e){var o=e.substr(1,e.length-2),u=null==n?void 0:n[o];if(void 0!==u){var a=r.isValidElement(u)?u:String(u);return t.push(a),i}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?u.split(i).reduce((function(e,n,r){var o;return e.concat(n).concat(null!==(o=t[r])&&void 0!==o?o:"")}),""):u.split(i).reduce((function(e,n,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},n,t[o])])}),[])}var a=t(7529);function c(e){var n,t,r=e.id,o=e.message;if(void 0===r&&void 0===o)throw new Error("Docusaurus translation declarations must have at least a translation id or a default translation message");return null!==(t=null!==(n=a[null!=r?r:o])&&void 0!==n?n:o)&&void 0!==t?t:r}function s(e,n){return u(c({message:e.message,id:e.id}),n)}function l(e){var n=e.children,t=e.id,r=e.values;if(n&&"string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");return u(c({message:n,id:t}),r)}},9935:function(e,n,t){t.d(n,{m:function(){return r}});var r="default"},3919:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return o}})},8143:function(e,n,t){t.r(n),t.d(n,{BrowserRouter:function(){return r.VK},HashRouter:function(){return r.UT},Link:function(){return r.rU},MemoryRouter:function(){return r.VA},NavLink:function(){return r.OL},Prompt:function(){return r.NL},Redirect:function(){return r.l_},Route:function(){return r.AW},Router:function(){return r.F0},StaticRouter:function(){return r.gx},Switch:function(){return r.rs},generatePath:function(){return r.Gn},matchPath:function(){return r.LX},useHistory:function(){return r.k6},useLocation:function(){return r.TH},useParams:function(){return r.UO},useRouteMatch:function(){return r.$B},withRouter:function(){return r.EN}});var r=t(3727)},4996:function(e,n,t){t.d(n,{C:function(){return i},Z:function(){return u}});var r=t(2263),o=t(3919);function i(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,u=i.forcePrependBaseUrl,a=void 0!==u&&u,c=i.absolute,s=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(a)return n+t;var l=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+l:l}(i,t,e,n)}}}function u(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},8084:function(e,n,t){t.r(n),t.d(n,{default:function(){return i},useAllPluginInstancesData:function(){return u},usePluginData:function(){return a}});var r=t(2263),o=t(9935);function i(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function u(e){var n=i()[e];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return n}function a(e,n){void 0===n&&(n=o.m);var t=u(e)[n];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+n+'".');return t}},2389:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(7294),o=t(9913);function i(){return(0,r.useContext)(o._)}},8408:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.getDocVersionSuggestions=n.getActiveDocContext=n.getActiveVersion=n.getLatestVersion=n.getActivePlugin=void 0;var r=t(8143);n.getActivePlugin=function(e,n,t){void 0===t&&(t={});var o=Object.entries(e).find((function(e){e[0];var t=e[1];return!!(0,r.matchPath)(n,{path:t.path,exact:!1,strict:!1})})),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&t.failfast)throw new Error("Can't find active docs plugin for \""+n+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return i};n.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};n.getActiveVersion=function(e,t){var o=(0,n.getLatestVersion)(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!1,strict:!1})}))};n.getActiveDocContext=function(e,t){var o,i,u=(0,n.getActiveVersion)(e,t),a=null==u?void 0:u.docs.find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:u,activeDoc:a,alternateDocVersions:a?(o=a.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(n){n.id===o&&(i[e.name]=n)}))})),i):{}}};n.getDocVersionSuggestions=function(e,t){var r=(0,n.getLatestVersion)(e),o=(0,n.getActiveDocContext)(e,t);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},6730:function(e,n,t){n.Jo=n.Iw=n.zu=n.yW=n.gB=n.gA=n.zh=n._r=void 0;var r=t(655),o=t(8143),i=(0,r.__importStar)(t(8084)),u=t(8408),a={};n._r=function(){var e;return null!==(e=(0,i.default)()["docusaurus-plugin-content-docs"])&&void 0!==e?e:a};n.zh=function(e){return(0,i.usePluginData)("docusaurus-plugin-content-docs",e)};n.gA=function(e){void 0===e&&(e={});var t=(0,n._r)(),r=(0,o.useLocation)().pathname;return(0,u.getActivePlugin)(t,r,e)};n.gB=function(e){return(0,n.zh)(e).versions};n.yW=function(e){var t=(0,n.zh)(e);return(0,u.getLatestVersion)(t)};n.zu=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,u.getActiveVersion)(t,r)};n.Iw=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,u.getActiveDocContext)(t,r)};n.Jo=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,u.getDocVersionSuggestions)(t,r)}},1217:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(7294),o=t(2859),i=t(2822),u=t(4996);function a(e){var n=e.title,t=e.description,a=e.keywords,c=e.image,s=e.children,l=(0,i.pe)(n),f=(0,u.C)().withBaseUrl,d=c?f(c,{absolute:!0}):void 0;return r.createElement(o.Z,null,n&&r.createElement("title",null,l),n&&r.createElement("meta",{property:"og:title",content:l}),t&&r.createElement("meta",{name:"description",content:t}),t&&r.createElement("meta",{property:"og:description",content:t}),a&&r.createElement("meta",{name:"keywords",content:Array.isArray(a)?a.join(","):a}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),s)}},907:function(e,n,t){t.d(n,{Iw:function(){return r.Iw},gA:function(){return r.gA},zu:function(){return r.zu},_r:function(){return r._r},Jo:function(){return r.Jo},zh:function(){return r.zh},yW:function(){return r.yW},gB:function(){return r.gB}});var r=t(6730)},3783:function(e,n,t){var r=t(7294),o=t(412),i="desktop",u="mobile",a="ssr";function c(){return o.Z.canUseDOM?window.innerWidth>996?i:u:a}n.Z=function(){var e=(0,r.useState)((function(){return c()})),n=e[0],t=e[1];return(0,r.useEffect)((function(){function e(){t(c())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),n}},2822:function(e,n,t){t.d(n,{pl:function(){return ge},zF:function(){return N},HX:function(){return g},PO:function(){return G},L5:function(){return ie},Cn:function(){return K},OC:function(){return Oe},kM:function(){return se},WA:function(){return s},os:function(){return h},Fx:function(){return Ae},Mg:function(){return b},_f:function(){return l},bc:function(){return p},l5:function(){return d},nT:function(){return he},uR:function(){return R},J:function(){return ce},Rb:function(){return ye},be:function(){return me},SL:function(){return C},g8:function(){return $},D9:function(){return O},RF:function(){return ke},DA:function(){return Se},Si:function(){return _e},LU:function(){return o},pe:function(){return w}});var r=t(2263);function o(){return(0,r.Z)().siteConfig.themeConfig}var i="localStorage";function u(e){if(void 0===e&&(e=i),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(t){return n=t,a||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",n),a=!0),null}var n}var a=!1;var c={get:function(){return null},set:function(){},del:function(){}};var s=function(e,n){if("undefined"==typeof window)return function(e){function n(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:n,set:n,del:n}}(e);var t=u(null==n?void 0:n.persistence);return null===t?c:{get:function(){return t.getItem(e)},set:function(n){return t.setItem(e,n)},del:function(){return t.removeItem(e)}}};function l(e){void 0===e&&(e=i);var n=u(e);if(!n)return[];for(var t=[],r=0;r<n.length;r+=1){var o=n.key(r);null!==o&&t.push(o)}return t}var f=t(6775);function d(){var e=(0,r.Z)(),n=e.siteConfig,t=n.baseUrl,o=n.url,i=e.i18n,u=i.defaultLocale,a=i.currentLocale,c=(0,f.TH)().pathname,s=a===u?t:t.replace("/"+a+"/","/"),l=c.replace(t,"");return{createUrl:function(e){var n=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===u?""+s:""+s+e+"/"}(n)+l}}}var v=/title=(["'])(.*?)\1/;function p(e){var n,t;return null!==(t=null===(n=null==e?void 0:e.match(v))||void 0===n?void 0:n[2])&&void 0!==t?t:""}var g="default";function h(e,n){return"docs-"+e+"-"+n}var m=t(907),y=!!m._r,b=function(e,n){var t=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return t(e)===t(n)},w=function(e){var n=(0,r.Z)().siteConfig,t=n.title,o=n.titleDelimiter;return e&&e.trim().length?e.trim()+" "+o+" "+t:t},E=t(7294),_=["zero","one","two","few","many","other"];function P(e){return _.filter((function(n){return e.includes(n)}))}P(["one","other"]);var S="undefined"!=typeof window?E.useLayoutEffect:E.useEffect;function L(e){var n=(0,E.useRef)(e);return S((function(){n.current=e}),[e]),(0,E.useCallback)((function(){return n.current.apply(n,arguments)}),[])}function O(e){var n=(0,E.useRef)();return S((function(){n.current=e})),n.current}function C(e){var n=(0,f.TH)(),t=O(n),r=L(e);(0,E.useEffect)((function(){r({location:n,previousLocation:t})}),[r,n,t])}var x=t(3366),k=t(412),A=["collapsed"],j=["lazy"];function R(e){var n=e.initialState,t=(0,E.useState)(null!=n&&n),r=t[0],o=t[1],i=(0,E.useCallback)((function(){o((function(e){return!e}))}),[]);return{collapsed:r,setCollapsed:o,toggleCollapsed:i}}var D={display:"none",overflow:"hidden",height:"0px"},T={display:"block",overflow:"visible",height:"auto"};function I(e,n){var t=n?D:T;e.style.display=t.display,e.style.overflow=t.overflow,e.style.height=t.height}function M(e){var n=e.collapsibleRef,t=e.collapsed,r=e.animation,o=(0,E.useRef)(!1);(0,E.useEffect)((function(){var e,i=n.current;function u(){var e,n,t=i.scrollHeight,o=null!==(e=null==r?void 0:r.duration)&&void 0!==e?e:function(e){var n=e/36;return Math.round(10*(4+15*Math.pow(n,.25)+n/5))}(t);return{transition:"height "+o+"ms "+(null!==(n=null==r?void 0:r.easing)&&void 0!==n?n:"ease-in-out"),height:t+"px"}}function a(){var e=u();i.style.transition=e.transition,i.style.height=e.height}if(!o.current)return I(i,t),void(o.current=!0);return i.style.willChange="height",e=requestAnimationFrame((function(){t?(a(),requestAnimationFrame((function(){i.style.height=D.height,i.style.overflow=D.overflow}))):(i.style.display="block",requestAnimationFrame((function(){a()})))})),function(){return cancelAnimationFrame(e)}}),[n,t,r])}function V(e){if(!k.Z.canUseDOM)return e?D:T}function Z(e){var n=e.as,t=void 0===n?"div":n,r=e.collapsed,o=e.children,i=e.animation,u=e.onCollapseTransitionEnd,a=e.className,c=e.disableSSRStyle,s=(0,E.useRef)(null);return M({collapsibleRef:s,collapsed:r,animation:i}),E.createElement(t,{ref:s,style:c?void 0:V(r),onTransitionEnd:function(e){"height"===e.propertyName&&(I(s.current,r),null==u||u(r))},className:a},o)}function B(e){var n=e.collapsed,t=(0,x.Z)(e,A),r=(0,E.useState)(!n),o=r[0],i=r[1];(0,E.useLayoutEffect)((function(){n||i(!0)}),[n]);var u=(0,E.useState)(n),a=u[0],c=u[1];return(0,E.useLayoutEffect)((function(){o&&c(n)}),[o,n]),o?E.createElement(Z,Object.assign({},t,{collapsed:a})):null}function N(e){var n=e.lazy,t=(0,x.Z)(e,j),r=n?B:Z;return E.createElement(r,Object.assign({},t))}var U=t(2389),H=t(6010),z="details_Q743",W="isBrowser_rWTL",F="collapsibleContent_K5uX",q=["summary","children"];function J(e){return!!e&&("SUMMARY"===e.tagName||J(e.parentElement))}function X(e,n){return!!e&&(e===n||X(e.parentElement,n))}var G=function(e){var n,t=e.summary,r=e.children,o=(0,x.Z)(e,q),i=(0,U.Z)(),u=(0,E.useRef)(null),a=R({initialState:!o.open}),c=a.collapsed,s=a.setCollapsed,l=(0,E.useState)(o.open),f=l[0],d=l[1];return E.createElement("details",Object.assign({},o,{ref:u,open:f,"data-collapsed":c,className:(0,H.Z)(z,(n={},n[W]=i,n),o.className),onMouseDown:function(e){J(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;J(n)&&X(n,u.current)&&(e.preventDefault(),c?(s(!1),d(!0)):s(!0))}}),t,E.createElement(N,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){s(e),d(!e)}},E.createElement("div",{className:F},r)))};var Y=(0,E.createContext)(null);function K(e){var n=e.children;return E.createElement(Y.Provider,{value:(0,E.useState)(null)},n)}function Q(){var e=(0,E.useContext)(Y);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function $(){var e=Q()[0];if(e){var n=e.component;return function(t){return E.createElement(n,Object.assign({},e.props,t))}}return function(){}}var ee=function(e){return"docs-preferred-version-"+e},ne={save:function(e,n,t){s(ee(e),{persistence:n}).set(t)},read:function(e,n){return s(ee(e),{persistence:n}).get()},clear:function(e,n){s(ee(e),{persistence:n}).del()}};function te(e){var n=e.pluginIds,t=e.versionPersistence,r=e.allDocsData;var o={};return n.forEach((function(e){o[e]=function(e){var n=ne.read(e,t);return r[e].versions.some((function(e){return e.name===n}))?{preferredVersionName:n}:(ne.clear(e,t),{preferredVersionName:null})}(e)})),o}function re(){var e=(0,m._r)(),n=o().docs.versionPersistence,t=(0,E.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,E.useState)((function(){return function(e){var n={};return e.forEach((function(e){n[e]={preferredVersionName:null}})),n}(t)})),i=r[0],u=r[1];return(0,E.useEffect)((function(){u(te({allDocsData:e,versionPersistence:n,pluginIds:t}))}),[e,n,t]),[i,(0,E.useMemo)((function(){return{savePreferredVersion:function(e,t){ne.save(e,n,t),u((function(n){var r;return Object.assign({},n,((r={})[e]={preferredVersionName:t},r))}))}}}),[n])]}var oe=(0,E.createContext)(null);function ie(e){var n=e.children;return y?E.createElement(ue,null,n):E.createElement(E.Fragment,null,n)}function ue(e){var n=e.children,t=re();return E.createElement(oe.Provider,{value:t},n)}var ae=t(9935);function ce(e){void 0===e&&(e=ae.m);var n=(0,m.zh)(e),t=function(){var e=(0,E.useContext)(oe);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}(),r=t[0],o=t[1],i=r[e].preferredVersionName;return{preferredVersion:i?n.versions.find((function(e){return e.name===i})):null,savePreferredVersionName:(0,E.useCallback)((function(n){o.savePreferredVersion(e,n)}),[o,e])}}var se={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:function(e){return"theme-doc-sidebar-item-category-level-"+e},docSidebarItemLinkLevel:function(e){return"theme-doc-sidebar-item-link-level-"+e}},blog:{}},le=s("docusaurus.announcement.dismiss"),fe=s("docusaurus.announcement.id"),de=function(){return"true"===le.get()},ve=function(e){return le.set(String(e))},pe=(0,E.createContext)(null),ge=function(e){var n=e.children,t=function(){var e=o().announcementBar,n=(0,U.Z)(),t=(0,E.useState)((function(){return!!n&&de()})),r=t[0],i=t[1];(0,E.useEffect)((function(){i(de())}),[]);var u=(0,E.useCallback)((function(){ve(!0),i(!0)}),[]);return(0,E.useEffect)((function(){if(e){var n=e.id,t=fe.get();"annoucement-bar"===t&&(t="announcement-bar");var r=n!==t;fe.set(n),r&&ve(!1),!r&&de()||i(!1)}}),[e]),(0,E.useMemo)((function(){return{isActive:!!e&&!r,close:u}}),[e,r,u])}();return E.createElement(pe.Provider,{value:t},n)},he=function(){var e=(0,E.useContext)(pe);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function me(){var e=(0,r.Z)().siteConfig.baseUrl;return(0,f.TH)().pathname.replace(e,"/")}t(5999);function ye(e){!function(e){var n=(0,f.k6)().block,t=(0,E.useRef)(e);(0,E.useEffect)((function(){t.current=e}),[e]),(0,E.useEffect)((function(){return n((function(e,n){return t.current(e,n)}))}),[n,t])}((function(n,t){if("POP"===t)return e(n,t)}))}function be(e){var n=e.getBoundingClientRect();return n.top===n.bottom?be(e.parentNode):n}function we(e,n){var t,r=n.anchorTopOffset,o=e.find((function(e){return be(e).top>=r}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(be(o))?o:null!==(t=e[e.indexOf(o)-1])&&void 0!==t?t:null:e[e.length-1]}function Ee(){var e=(0,E.useRef)(0),n=o().navbar.hideOnScroll;return(0,E.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}var _e=function(e){var n=(0,E.useRef)(void 0),t=Ee();(0,E.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,o=e.linkActiveClassName,i=e.minHeadingLevel,u=e.maxHeadingLevel;function a(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),a=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],o=n;o<=t;o+=1)r.push("h"+o+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:u}),c=we(a,{anchorTopOffset:t.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){var r;t?(n.current&&n.current!==e&&(null===(r=n.current)||void 0===r||r.classList.remove(o)),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===s)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])};function Pe(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=Pe({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}function Se(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,E.useMemo)((function(){return Pe({toc:n,minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}var Le=(0,E.createContext)(void 0);function Oe(e){var n,t=e.children;return E.createElement(Le.Provider,{value:(n=(0,E.useRef)(!0),(0,E.useMemo)((function(){return{scrollEventsEnabledRef:n,enableScrollEvents:function(){n.current=!0},disableScrollEvents:function(){n.current=!1}}}),[]))},t)}function Ce(){var e=(0,E.useContext)(Le);if(null==e)throw new Error('"useScrollController" is used but no context provider was found in the React tree.');return e}var xe=function(){return k.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};function ke(e,n){void 0===n&&(n=[]);var t=Ce().scrollEventsEnabledRef,r=(0,E.useRef)(xe()),o=L(e);(0,E.useEffect)((function(){var e=function(){if(t.current){var e=xe();o&&o(e,r.current),r.current=e}},n={passive:!0};return e(),window.addEventListener("scroll",e,n),function(){return window.removeEventListener("scroll",e,n)}}),[o,t].concat(n))}function Ae(e,n){return void 0!==e&&void 0!==n&&new RegExp(e,"gi").test(n)}},8802:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var o,i=e.split(/[#?]/)[0],u="/"===i||i===r?i:(o=i,t?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(i,u)}},8780:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var o=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var i=t(9964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(i).default}})},9964:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},6010:function(e,n,t){function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})},655:function(e,n,t){t.r(n),t.d(n,{__extends:function(){return o},__assign:function(){return i},__rest:function(){return u},__decorate:function(){return a},__param:function(){return c},__metadata:function(){return s},__awaiter:function(){return l},__generator:function(){return f},__createBinding:function(){return d},__exportStar:function(){return v},__values:function(){return p},__read:function(){return g},__spread:function(){return h},__spreadArrays:function(){return m},__spreadArray:function(){return y},__await:function(){return b},__asyncGenerator:function(){return w},__asyncDelegator:function(){return E},__asyncValues:function(){return _},__makeTemplateObject:function(){return P},__importStar:function(){return L},__importDefault:function(){return O},__classPrivateFieldGet:function(){return C},__classPrivateFieldSet:function(){return x}});var r=function(e,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},r(e,n)};function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)};function u(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}function a(e,n,t,r){var o,i=arguments.length,u=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,n,t,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(u=(i<3?o(u):i>3?o(n,t,u):o(n,t))||u);return i>3&&u&&Object.defineProperty(n,t,u),u}function c(e,n){return function(t,r){n(t,r,e)}}function s(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)}function l(e,n,t,r){return new(t||(t=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(n){i(n)}}function a(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,a)}c((r=r.apply(e,n||[])).next())}))}function f(e,n){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(e,u)}catch(a){i=[6,a],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var d=Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]};function v(e,n){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(n,t)||d(n,e,t)}function p(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),u=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return u}function h(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(g(arguments[n]));return e}function m(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var i=arguments[n],u=0,a=i.length;u<a;u++,o++)r[o]=i[u];return r}function y(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=t.apply(e,n||[]),i=[];return r={},u("next"),u("throw"),u("return"),r[Symbol.asyncIterator]=function(){return this},r;function u(e){o[e]&&(r[e]=function(n){return new Promise((function(t,r){i.push([e,n,t,r])>1||a(e,n)}))})}function a(e,n){try{(t=o[e](n)).value instanceof b?Promise.resolve(t.value.v).then(c,s):l(i[0][2],t)}catch(r){l(i[0][3],r)}var t}function c(e){a("next",e)}function s(e){a("throw",e)}function l(e,n){e(n),i.shift(),i.length&&a(i[0][0],i[0][1])}}function E(e){var n,t;return n={},r("next"),r("throw",(function(e){throw e})),r("return"),n[Symbol.iterator]=function(){return this},n;function r(r,o){n[r]=e[r]?function(n){return(t=!t)?{value:b(e[r](n)),done:"return"===r}:o?o(n):n}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,t=e[Symbol.asyncIterator];return t?t.call(e):(e=p(e),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(t){n[t]=e[t]&&function(n){return new Promise((function(r,o){(function(e,n,t,r){Promise.resolve(r).then((function(n){e({value:n,done:t})}),n)})(r,o,(n=e[t](n)).done,n.value)}))}}}function P(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var S=Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n};function L(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&d(n,e,t);return S(n,e),n}function O(e){return e&&e.__esModule?e:{default:e}}function C(e,n,t,r){if("a"===t&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof n?e!==n||!r:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===t?r:"a"===t?r.call(e):r?r.value:n.get(e)}function x(e,n,t,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof n?e!==n||!o:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,t):o?o.value=t:n.set(e,t),t}}}]);