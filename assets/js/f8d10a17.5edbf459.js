"use strict";(self.webpackChunkhris_api_docs=self.webpackChunkhris_api_docs||[]).push([[175],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var s=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=c(n),p=i,g=m["".concat(l,".").concat(p)]||m[p]||u[p]||a;return n?s.createElement(g,o(o({ref:t},d),{},{components:n})):s.createElement(g,o({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var c=2;c<a;c++)o[c]=n[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6011:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var s=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],r={id:"message",title:"Messaging",sidebar_label:"Messaging"},l=void 0,c={unversionedId:"users/messaging/message",id:"users/messaging/message",isDocsHomePage:!1,title:"Messaging",description:"The messaging module facilitates communication between system users and system administrators. It enhances better user support. To use the meassaging application, click on the message icon at the top right hand side of the tool bar as indicated below.",source:"@site/docs/users/messaging/message.md",sourceDirName:"users/messaging",slug:"/users/messaging/message",permalink:"/hris-api-docs/docs/users/messaging/message",editUrl:"https://github.com/udsm-dhis2-project/hris-api-docs/blob/main/docs/users/messaging/message.md",tags:[],version:"current",frontMatter:{id:"message",title:"Messaging",sidebar_label:"Messaging"},sidebar:"docs",previous:{title:"Scheduler",permalink:"/hris-api-docs/docs/users/scheduler/scheduler"},next:{title:"Introduction",permalink:"/hris-api-docs/docs/developers/basics"}},d=[{value:"Composing a new message",id:"composing-a-new-message",children:[],level:3},{value:"User notification",id:"user-notification",children:[],level:3},{value:"Record notification",id:"record-notification",children:[],level:3},{value:"Inbox",id:"inbox",children:[],level:3},{value:"Sent box",id:"sent-box",children:[],level:3}],u={toc:d};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,s.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The messaging module facilitates communication between system users and system administrators. It enhances better user support. To use the meassaging application, click on the message icon at the top right hand side of the tool bar as indicated below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:n(9574).Z})),(0,a.kt)("h3",{id:"composing-a-new-message"},"Composing a new message"),(0,a.kt)("p",null," To compose a new message click on the Compose button at the top of the messaging app interface."),(0,a.kt)("p",null," ",(0,a.kt)("img",{alt:"img alt",src:n(171).Z})),(0,a.kt)("p",null," Two options will be displayed in a dropdown from which you will be required to select the type of message you are intending to send."),(0,a.kt)("p",null," i. User notification"),(0,a.kt)("p",null," ii. Record notification"),(0,a.kt)("p",null," ",(0,a.kt)("img",{alt:"img alt",src:n(3348).Z})),(0,a.kt)("p",null,"The process to complete and send a message differs a little bit depending on the selected message type. The steps and actions to be followed in accomplishing each process are explained below."),(0,a.kt)("h3",{id:"user-notification"},"User notification"),(0,a.kt)("p",null,"Upon selection of this option a new user notification form will appear with entry fields divided into five sections. Users, Modes, Message details and message. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In users section, You are required to select the users to whom the message is intended."),(0,a.kt)("li",{parentName:"ul"},"In Modes section, You are required to select the message delivery mode i.e. the message can be delivered as a notification, feedback, SMS or via Email."),(0,a.kt)("li",{parentName:"ul"},"In message details, you are required to type a title/subject for the message. "),(0,a.kt)("li",{parentName:"ul"},"In message section, you are required to type the message that you intend to send to other users to read.")),(0,a.kt)("p",null,"After filling all fields in new notification message form accodingly and click the button captioned 'Send' located at the bottom right hand siode of the form as indicated below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:n(1692).Z})),(0,a.kt)("p",null,"After clicking the send button, your message will be delivered to the selected users as required."),(0,a.kt)("h3",{id:"record-notification"},"Record notification"),(0,a.kt)("p",null,"Upon selection of this option, New Record notification form will be opened with an organization unit tree."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:n(1223).Z})),(0,a.kt)("p",null," To create a record notification message, follow the steps below."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select an organization unit from the organization unit tree."),(0,a.kt)("li",{parentName:"ol"},"Select a form from the list of forms available."),(0,a.kt)("li",{parentName:"ol"},"Select message mode"),(0,a.kt)("li",{parentName:"ol"},"Fill message details"),(0,a.kt)("li",{parentName:"ol"},"Write message."),(0,a.kt)("li",{parentName:"ol"},"Click the 'Send' button.")),(0,a.kt)("h3",{id:"inbox"},"Inbox"),(0,a.kt)("p",null,"Here you can see all messages sent to a user from other users or from the system administrator. All messages received in the respective user's account will be displayed in a list. To view details of the message simply click on it from the list and more details about the message will be displayed."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:n(46).Z})),(0,a.kt)("h3",{id:"sent-box"},"Sent box"),(0,a.kt)("p",null,"Messages sent from a respective user's account are displayed here. To view more details on a message simply click on the message from the list and more details about it will be displayed."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:n(3211).Z})))}m.isMDXComponent=!0},171:function(e,t,n){t.Z=n.p+"assets/images/ComposingNewMessage-1edaad39f1c7bfa905995b40285e7267.png"},46:function(e,t,n){t.Z=n.p+"assets/images/InboxMessages-63ef4c429c102c03614c0e9d688a97ea.png"},3348:function(e,t,n){t.Z=n.p+"assets/images/MessageOptions-1fa3a26280b3499373b709e6d0c5ed16.png"},9574:function(e,t,n){t.Z=n.p+"assets/images/MessagingApp-657e7a4acf6cbac8d1ee57302f93f98e.png"},1223:function(e,t,n){t.Z=n.p+"assets/images/NewRecordNotification-75199db51d23febb8245e78b0a3e5bc4.png"},1692:function(e,t,n){t.Z=n.p+"assets/images/SendingMessageType1-4cfe5c051efe5454666b7a2fbb26f385.png"},3211:function(e,t,n){t.Z=n.p+"assets/images/SentBoxMessages-35ee97001674eac3c6fd6b64e0f5341d.png"}}]);