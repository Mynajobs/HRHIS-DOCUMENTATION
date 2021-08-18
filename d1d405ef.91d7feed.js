(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),s=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),d=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||r;return n?s.a.createElement(m,o(o({ref:t},l),{},{components:n})):s.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<r;l++)i[l]=n[l];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),s=n(7),r=(n(0),n(106)),i={id:"notifications",title:"Notification",sidebar_label:"Notification"},o={unversionedId:"developers/settings/notifications",id:"developers/settings/notifications",isDocsHomePage:!1,title:"Notification",description:"Short Message Service (SMS)",source:"@site/docs/developers/settings/notifications.md",slug:"/developers/settings/notifications",permalink:"/hris-api-docs/docs/developers/settings/notifications",editUrl:"https://github.com/udsm-dhis2-project/hris-api-docs/blob/main/docs/developers/settings/notifications.md",version:"current",sidebar_label:"Notification",sidebar:"docs",previous:{title:"Settings",permalink:"/hris-api-docs/docs/developers/settings/settings"},next:{title:"Processes",permalink:"/hris-api-docs/docs/developers/settings/processes"}},c=[{value:"Short Message Service (SMS)",id:"short-message-service-sms",children:[{value:"Outbound SMS service",id:"outbound-sms-service",children:[]},{value:"Inbound SMS service",id:"inbound-sms-service",children:[]},{value:"Gateway service administration",id:"gateway-service-administration",children:[]},{value:"Gateway configuration",id:"gateway-configuration",children:[]}]},{value:"Email",id:"email",children:[{value:"System notification",id:"system-notification",children:[]},{value:"Outbound emails",id:"outbound-emails",children:[]},{value:"Test message",id:"test-message",children:[]}]},{value:"Message conversations",id:"message-conversations",children:[{value:"Writing and reading messages",id:"writing-and-reading-messages",children:[]},{value:"Managing messages",id:"managing-messages",children:[]},{value:"Message Attachments",id:"message-attachments",children:[]},{value:"Tickets and Validation Result Notifications",id:"tickets-and-validation-result-notifications",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"short-message-service-sms"},"Short Message Service (SMS)"),Object(r.b)("p",null,"This section covers the SMS Web API for sending and receiving short text\nmessages."),Object(r.b)("h3",{id:"outbound-sms-service"},"Outbound SMS service"),Object(r.b)("p",null,"The Web API supports sending outgoing SMS using the POST method. SMS can\nbe sent to single or multiple destinations. One or more gateways need\nto be configured before using the service. An SMS will not be sent if\nthere is no gateway configured. It needs a set of recipients and\nmessage text in JSON format as shown below."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"/api/sms/outbound\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "message":"Sms Text",\n  "recipients": [\n    "004712341234",\n    "004712341235"\n  ]\n}\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note")),Object(r.b)("p",{parentName:"blockquote"},"Recipients list will be partitioned if the size exceeds ",Object(r.b)("inlineCode",{parentName:"p"},"MAX_ALLOWED_RECIPIENTS")," limit of 200.")),Object(r.b)("p",null,"The Web API also supports a query parameter version, but the\nparameterized API can only be used for sending SMS to a single\ndestination."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"/api/sms/outbound?message=text&recipient=004712341234\n")),Object(r.b)("h4",{id:"gateway-response-codes"},"Gateway response codes"),Object(r.b)("p",null,"Gateway may response with following response codes."),Object(r.b)("h3",{id:"inbound-sms-service"},"Inbound SMS service"),Object(r.b)("p",null,"The Web API supports collecting incoming SMS messages using the POST\nmethod. Incoming messages routed towards the HRHIS4 Web API can be\nreceived using this API. The API collects inbound SMS messages and\nprovides it to listeners for parsing, based on the SMS content (SMS\nCommand). An example payload in JSON format is given below. Text,\noriginator, received date and sent date are mandatory parameters. The\nrest are optional but the system will use the default value for these\nparameters."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"/api/sms/inbound\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "text": "sample text",\n  "originator": "004712341234",\n  "gatewayid": "unknown",\n  "receiveddate": "2016-05-01",\n  "sentdate":"2016-05-01",\n  "smsencoding": "1",\n  "smsstatus":"1"\n}\n')),Object(r.b)("p",null,"The Web API also supports a query parameter-based version."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"/api/sms/inbound?message=text&originator=47XXXXXX&gateway=clickatel\n")),Object(r.b)("h3",{id:"gateway-service-administration"},"Gateway service administration"),Object(r.b)("p",null,"The Web API exposes resources which provide a way to configure and\nupdate SMS gateway configurations."),Object(r.b)("p",null,"The list of different gateways configured can be retrieved using a GET\nmethod."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"GET /api/gateways\n")),Object(r.b)("p",null,"Configurations can also be retrieved for a specific gateway type using\nGET method."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"GET /api/gateways/{uid}\n")),Object(r.b)("p",null,"New gateway configuraitons can be added using POST. POST api requires type request parameter and currently its value can have either one ",Object(r.b)("em",{parentName:"p"},"http,bulksms,clickatell"),". First added gateway will be set to default. Only one gateway is allowed to be default at one time. Default gateway can only be changed through its api. If default gateway is removed then the next one the list will automatically becomes default."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"POST /api/gateways\n")),Object(r.b)("p",null,"Configuration can be updated with by providing uid and gateway configurations as mentioned below"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"PUT /api/gateways/{uids}\n")),Object(r.b)("p",null,"Configurations can be removed for specific gateway type using DELETE\nmethod."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"DELETE /api/gateways/{uid}\n")),Object(r.b)("p",null,"Default gateway can be retrieved and updated."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"GET /api/gateways/default\n")),Object(r.b)("p",null,"Default gateway can be set using the PUT method."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"PUT /api/gateways/default/{uid}\n")),Object(r.b)("h3",{id:"gateway-configuration"},"Gateway configuration"),Object(r.b)("p",null,"The Web API lets you create and update gateway configurations. For each\ntype of gateway there are different parameters in the JSON payload.\nSample JSON payloads for each gateway are given below. POST is used to\ncreate and PUT to update configurations. Header parameter can be used in\ncase of GenericHttpGateway to send one or more parameter as http header."),Object(r.b)("h4",{id:"clickatell"},"Clickatell"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "clickatell",\n  "name" : "clickatell",\n  "username": "clickatelluser",\n  "authtoken": "XXXXXXXXXXXXXXXXXXXX",\n  "urlTemplate": "https://platform.clickatell.com/messages"\n}\n')),Object(r.b)("h4",{id:"bulksms"},"Bulksms"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "bulksms",\n  "name": "bulkSMS",\n  "username": "bulkuser",\n  "password": "abc123"\n}\n')),Object(r.b)("h4",{id:"smpp-gateway"},"SMPP Gateway"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "smpp",\n  "name": "smpp gateway2",\n  "systemId": "smppclient1",\n  "host": "localhost",\n  "systemType": "cp",\n  "numberPlanIndicator": "UNKNOWN",\n  "typeOfNumber": "UNKNOWN",\n  "bindType": "BIND_TX",\n  "port": 2775,\n  "password":"password",\n  "compressed": false\n}\n')),Object(r.b)("h4",{id:"generic-http"},"Generic HTTP"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "http",\n  "name": "Generic",\n  "configurationTemplate": "{\\"to\\": \\"${recipients}\\",\\"body\\": \\"${text}\\", \\"deliveryReport\\":\\"${deliveryReport}\\"}",\n  "useGet": false,\n  "contentType": "APPLICATION_JSON",\n  "urlTemplate":"https://samplegateway.com/messages",\n  "parameters": [\n    {\n      "header": true,\n      "encode": false,\n      "key": "username",\n      "value": "user_uio",\n      "confidential": true\n    },\n    {\n      "header": true,\n      "encode": false,\n      "key": "password",\n      "value": "123abcxyz",\n      "confidential": true\n    },\n    {\n      "header": false,\n      "encode": false,\n      "key": "deliveryReport",\n      "value": "yes",\n      "confidential": false\n    }\n  ],\n  "isDefault": false\n}\n')),Object(r.b)("p",null,"In generic http gateway any number of parameters can be added. "),Object(r.b)("p",null,"HTTP.OK will be returned if configurations are saved successfully otherwise ",Object(r.b)("em",{parentName:"p"},"Error")),Object(r.b)("h2",{id:"email"},"Email"),Object(r.b)("p",null,"The Web API features a resource for sending emails. For emails to be\nsent it is required that the SMTP configuration has been properly set up\nand that a system notification email address for the HRHIS4 instance has\nbeen defined. You can set SMTP settings from the email settings screen\nand system notification email address from the general settings screen\nin HRHIS4."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"/api/email\n")),Object(r.b)("h3",{id:"system-notification"},"System notification"),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"notification")," resource lets you send system email notifications\nwith a given subject and text in JSON or XML. The email will be sent to\nthe notification email address as defined in the HRHIS4 general system\nsettings:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "subject": "Integrity check summary",\n  "text": "All checks ran successfully"\n}\n')),Object(r.b)("p",null,"You can send a system email notification by posting to the notification\nresource like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'curl -d @email.json "localhost/api/email/notification" -X POST \n  -H "Content-Type:application/json" -u admin:district\n')),Object(r.b)("h3",{id:"outbound-emails"},"Outbound emails"),Object(r.b)("p",null,"You can also send a general email notification by posting to the\nnotification resource as mentioned below. ",Object(r.b)("inlineCode",{parentName:"p"},"F_SEND_EMAIL")," or ",Object(r.b)("inlineCode",{parentName:"p"},"ALL"),'\nauthority has to be in the system to make use of this api. Subject\nparameter is optional. "DHIS 2" string will be sent as default subject\nif it is not provided in url. Url should be encoded in order to use this\nAPI.'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'curl "localhost/api/email/notification?recipients=xyz%40abc.com&message=sample%20email&subject=Test%20Email" \n  -X POST -u admin:district\n')),Object(r.b)("h3",{id:"test-message"},"Test message"),Object(r.b)("p",null,"To test whether the SMTP setup is correct by sending a test email to\nyourself you can interact with the ",Object(r.b)("em",{parentName:"p"},"test")," resource. To send test emails\nit is required that your HRHIS4 user account has a valid email address\nassociated with it. You can send a test email like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'curl "localhost/api/email/test" -X POST -H "Content-Type:application/json" -u admin:district\n')),Object(r.b)("h2",{id:"message-conversations"},"Message conversations"),Object(r.b)("p",null,"HRHIS4 features a mechanism for sending messages for purposes such as\nuser feedback, notifications, and general information to users. Messages\nare grouped into conversations. To interact with message conversations\nyou can send POST and GET request to the ",Object(r.b)("em",{parentName:"p"},"messageConversations"),"\nresource."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"/api/messageConversations\n")),Object(r.b)("p",null,"Messages are delivered to the HRHIS4 message inbox but can also be sent\nto the user's email addresses and mobile phones as SMS. In this example,\nwe will see how we can utilize the Web API to send, read and manage\nmessages. We will pretend to be the ",Object(r.b)("em",{parentName:"p"},"HRHIS4 Administrator")," user and send\na message to the ",Object(r.b)("em",{parentName:"p"},"Mobile")," user. We will then pretend to be the mobile\nuser and read our new message. Following this, we will manage the admin\nuser inbox by marking and removing messages."),Object(r.b)("h3",{id:"writing-and-reading-messages"},"Writing and reading messages"),Object(r.b)("p",null,"The resource we need to interact with when sending and reading messages\nis the ",Object(r.b)("em",{parentName:"p"},"messageConversations")," resource. We start by visiting the Web API\nentry point at ",Object(r.b)("a",{parentName:"p",href:"http://dev.hrhis.dhis2udsm.org/demo/api"},"http://dev.hrhis.dhis2udsm.org/demo/api")," where we find and follow\nthe link to the ",Object(r.b)("em",{parentName:"p"},"messageConversations")," resource at\n",Object(r.b)("a",{parentName:"p",href:"http://dev.hrhis.dhis2udsm.org/demo/api/messageConversations"},"http://dev.hrhis.dhis2udsm.org/demo/api/messageConversations"),". The description\ntells us that we can use a POST request to create a new message using\nthe following XML format for sending to multiple users:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<message xmlns="http://HRHIS4.org/schema/dxf/2.0">\n  <subject>This is the subject</subject>\n  <text>This is the text</text>\n  <users>\n    <user id="user1ID" />\n    <user id="user2ID" />\n    <user id="user3ID" />\n  </users>\n</message>\n')),Object(r.b)("p",null,"For sending to all users contained in one or more user groups, we can\nuse:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<message xmlns="http://HRHIS4.org/schema/dxf/2.0">\n  <subject>This is the subject</subject>\n  <text>This is the text</text>\n  <userGroups>\n    <userGroup id="userGroup1ID" />\n    <userGroup id="userGroup2ID" />\n    <userGroup id="userGroup3ID" />\n  </userGroups>\n</message>\n')),Object(r.b)("p",null,"For sending to all users connected to one or more organisation units, we\ncan use:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<message xmlns="http://HRHIS4.org/schema/dxf/2.0">\n  <subject>This is the subject</subject>\n  <text>This is the text</text>\n  <organisationUnits>\n    <organisationUnit id="ou1ID" />\n    <organisationUnit id="ou2ID" />\n    <organisationUnit id="ou3ID" />\n  </organisationUnits>\n</message>\n')),Object(r.b)("p",null,"Since we want to send a message to our friend the mobile user we need to\nlook up her identifier. We do so by going to the Web API entry point and\nfollow the link to the ",Object(r.b)("em",{parentName:"p"},"users")," resource at ",Object(r.b)("inlineCode",{parentName:"p"},"/api/users"),". We continue by\nfollowing link to the mobile user at ",Object(r.b)("inlineCode",{parentName:"p"},"/api/users/PhzytPW3g2J")," where we learn\nthat her identifier is ",Object(r.b)("em",{parentName:"p"},"PhzytPW3g2J"),". We are now ready to put our XML\nmessage together to form a message where we want to ask the mobile user\nwhether she has reported data for January 2014:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<message xmlns="http://HRHIS4.org/schema/dxf/2.0">\n  <subject>Mortality data reporting</subject>\n  <text>Have you reported data for the Mortality data set for January 2014?</text>\n  <users>\n    <user id="PhzytPW3g2J" />\n  </users>\n</message>\n')),Object(r.b)("p",null,"To test this we save the XML content into a file called ",Object(r.b)("em",{parentName:"p"},"message.xml"),".\nWe use cURL to dispatch the message the HRHIS4 demo instance where we\nindicate that the content-type is XML and authenticate as the ",Object(r.b)("em",{parentName:"p"},"admin"),"\nuser:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'curl -d @message.xml "https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations"\n  -H "Content-Type:application/xml" -u admin:district -X POST\n')),Object(r.b)("p",null,"A corresponding payload in JSON and POST command looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "subject": "Hey",\n  "text": "How are you?",\n  "users": [\n    {\n      "id": "OYLGMiazHtW"\n    },\n    {\n      "id": "N3PZBUlN8vq"\n    }\n  ],\n  "userGroups": [\n    {\n      "id": "ZoHNWQajIoe"\n    }\n  ],\n  "organisationUnits": [\n    {\n      "id": "DiszpKrYNg8"\n    }\n  ]\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'curl -d @message.json "https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations"\n  -H "Content-Type:application/json" -u admin:district -X POST\n')),Object(r.b)("p",null,"If all is well we receive a ",Object(r.b)("em",{parentName:"p"},"201 Created")," HTTP status code. Also, note\nthat we receive a ",Object(r.b)("em",{parentName:"p"},"Location")," HTTP header which value informs us of the\nURL of the newly created message conversation resource - this can be\nused by a consumer to perform further action."),Object(r.b)("p",null,"We will now pretend to be the mobile user and read the message which was\njust sent by dispatching a GET request to the ",Object(r.b)("em",{parentName:"p"},"messageConversations"),"\nresource. We supply an ",Object(r.b)("em",{parentName:"p"},"Accept")," header with ",Object(r.b)("em",{parentName:"p"},"application/xml")," as the\nvalue to indicate that we are interested in the XML resource\nrepresentation and we authenticate as the ",Object(r.b)("em",{parentName:"p"},"mobile")," user:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'curl "https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations"\n  -H "Accept:application/xml" -u mobile:district\n')),Object(r.b)("p",null,"In response we get the following XML:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<messageConversations xmlns="http://HRHIS4.org/schema/dxf/2.0"\n  link="https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations">\n  <messageConversation name="Mortality data reporting" id="ZjHHSjyyeJ2"\n    link="https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations/ZjHHSjyyeJ2"/>\n  <messageConversation name="HRHIS4 version 2.7 is deployed" id="GDBqVfkmnp2"\n    link="https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations/GDBqVfkmnp2"/>\n</messageConversations>\n')),Object(r.b)("p",null,"From the response, we are able to read the identifier of the newly sent\nmessage which is ",Object(r.b)("em",{parentName:"p"},"ZjHHSjyyeJ2"),". Note that the link to the specific\nresource is embedded and can be followed in order to read the full\nmessage. We can reply directly to an existing message conversation once we know\nthe URL by including the message text as the request payload. We\nare now able to construct a URL for sending our reply:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'curl -d "Yes the Mortality data set has been reported"\n  "https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations/ZjHHSjyyeJ2"\n  -H "Content-Type:text/plain" -u mobile:district -X POST\n')),Object(r.b)("p",null,"If all went according to plan you will receive a ",Object(r.b)("em",{parentName:"p"},"200 OK")," status code."),Object(r.b)("p",null,"In 2.30 we added an URL search parameter:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"queryString=?&queryOperator=?\n")),Object(r.b)("p",null,"The filter searches for matches in subject, text, and senders for message\nconversations. The default query operator is ",Object(r.b)("em",{parentName:"p"},"token"),", however other operators\ncan be defined in the query."),Object(r.b)("h3",{id:"managing-messages"},"Managing messages"),Object(r.b)("p",null,'As users receive and send messages, conversations will start to pile up\nin their inboxes, eventually becoming laborious to track. We will now\nhave a look at managing a user\'s messages inbox by removing and marking\nconversations through the Web-API. We will do so by performing some\nmaintenance in the inbox of the "DHIS Administrator" user.'),Object(r.b)("p",null,"First, let's have a look at removing a few messages from the inbox. Be\nsure to note that all removal operations described here only remove the\nrelation between a user and a message conversation. In practical terms\nthis means that we are not deleting the messages themselves (or any\ncontent for that matter) but are simply removing the message thread from\nthe user such that it is no longer listed in the\n",Object(r.b)("inlineCode",{parentName:"p"},"/api/messageConversations")," resource."),Object(r.b)("p",null,"To remove a message conversation from a users inbox we need to issue a\n",Object(r.b)("em",{parentName:"p"},"DELETE")," request to the resource identified by the id of the message\nconversation and the participating user. For example, to remove the user\nwith id ",Object(r.b)("inlineCode",{parentName:"p"},"xE7jOejl9FI")," from the conversation with id ",Object(r.b)("inlineCode",{parentName:"p"},"jMe43trzrdi"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'curl "https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations/jMe43trzrdi\n')),Object(r.b)("p",null,"If the request was successful the server will reply with a ",Object(r.b)("em",{parentName:"p"},"200 OK"),". The\nresponse body contains an XML or JSON object (according to the accept\nheader of the request) containing the id of the removed user."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "removed" : ["xE7jOejl9FI"]\n}\n')),Object(r.b)("p",null,"On failure the returned object will contain a message payload which\ndescribes the error."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "message" : "No user with uid: dMV6G0tPAEa"\n}\n')),Object(r.b)("p",null,"The observant reader will already have noticed that the object returned\non success in our example is actually a list of ids (containing a single\nentry). This is due to the endpoint also supporting batch removals. The\nrequest is made to the same ",Object(r.b)("em",{parentName:"p"},"messageConversations")," resource but follows\nslightly different semantics. For batch operations, the conversation ids\nare given as query string parameters. The following example removes two\nseparate message conversations for the current user:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'curl "https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations?mc=WzMRrCosqc0&mc=lxCjiigqrJm"\n  -X DELETE -u admin:district\n')),Object(r.b)("p",null,"If you have sufficient permissions, conversations can be removed on\nbehalf of another user by giving an optional user id parameter."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'curl "https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations?mc=WzMRrCosqc0&mc=lxCjiigqrJm&user=PhzytPW3g2J"\n  -X DELETE -u admin:district\n')),Object(r.b)("p",null,"As indicated, batch removals will return the same message format as for\nsingle operations. The list of removed objects will reflect successful\nremovals performed. Partially erroneous requests (i.e. non-existing id)\nwill therefore not cancel the entire batch operation."),Object(r.b)("p",null,"Messages carry a boolean ",Object(r.b)("em",{parentName:"p"},"read")," property. This allows tracking whether a\nuser has seen (opened) a message or not. In a typical application\nscenario (e.g. the HRHIS4 web portal) a message will be marked read as\nsoon as the user opens it for the first time. However, users might want\nto manage the read or unread status of their messages in order to keep\ntrack of certain conversations."),Object(r.b)("p",null,"Marking messages read or unread follows similar semantics as batch\nremovals, and also supports batch operations. To mark messages as read\nwe issue a ",Object(r.b)("em",{parentName:"p"},"POST")," to the ",Object(r.b)("inlineCode",{parentName:"p"},"messageConversations/read")," resource with a\nrequest body containing one or more message ids. To mark messages as\nunread we issue an identical request to the ",Object(r.b)("inlineCode",{parentName:"p"},"messageConversations/unread"),"\nresource. As is the case for removals, an optional ",Object(r.b)("em",{parentName:"p"},"user")," request parameter\ncan be given."),Object(r.b)("p",null,"Let's mark a couple of messages as read by the current user:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'curl "https://dev.hrhis.dhis2udsm.org/api/messageConversations/read"\n  -d \'["ZrKML5WiyFm","Gc03smoTm6q"]\' -X POST\n  -H "Content-Type: application/json" -u admin:district\n')),Object(r.b)("p",null,"The response is a ",Object(r.b)("em",{parentName:"p"},"200 OK")," with the following JSON body:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "markedRead": ["ZrKML5WiyFm", "Gc03smoTm6q"]\n}\n')),Object(r.b)("p",null,"You can add recipients to an existing message conversation. The resource is located at:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"/api/messageConversations/id/recipients\n")),Object(r.b)("p",null,"The options for this resource is a list of users, user groups and\norganisation units. The request should look like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "users": [\n    {\n      "id": "OYLGMiazHtW"\n    },\n    {\n      "id": "N3PZBUlN8vq"\n    }\n  ],\n  "userGroups": [\n    {\n      "id": "DiszpKrYNg8"\n    }\n  ],\n  "organisationUnits": [\n    {\n      "id": "DiszpKrYNg8"\n    }\n  ]\n}\n\n')),Object(r.b)("h3",{id:"message-attachments"},"Message Attachments"),Object(r.b)("p",null,"Creating messages with attachments is done in two steps: uploading the\nfile to the ",Object(r.b)("em",{parentName:"p"},"attachments")," resource, and then including one or several of\nthe attachment IDs when creating a new message."),Object(r.b)("p",null,"A POST request to the ",Object(r.b)("em",{parentName:"p"},"attachments")," resource will upload the file to the\nserver."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'curl -F file=@attachment.png "https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations/attachments"\n  -u admin:district \n')),Object(r.b)("p",null,"The request returns an object that represents the attachment. The id of\nthis object must be used when creating a message in order to link the\nattachment with the message."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "created": "2018-07-20T16:54:18.210",\n  "lastUpdated": "2018-07-20T16:54:18.212",\n  "externalAccess": false,\n  "publicAccess": "--------",\n  "user": {\n    "name": "John Traore",\n    "created": "2013-04-18T17:15:08.407",\n    "lastUpdated": "2018-03-09T23:06:54.512",\n    "externalAccess": false,\n    "displayName": "John Traore",\n    "favorite": false,\n    "id": "xE7jOejl9FI"\n  },\n  "lastUpdatedBy": {\n    "id": "xE7jOejl9FI",\n    "name": "John Traore"\n  },\n  "favorite": false,\n  "id": "fTpI4GOmujz"\n}\n')),Object(r.b)("p",null,"When creating a new message, the ids can be passed in the request body\nto link the uploaded files to the message being created."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "subject": "Hey",\n  "text": "How are you?",\n  "users": [\n    {\n      "id": "OYLGMiazHtW"\n    },\n    {\n      "id": "N3PZBUlN8vq"\n    }\n  ],\n  "userGroups": [\n    {\n      "id": "ZoHNWQajIoe"\n    }\n  ],\n  "organisationUnits": [\n    {\n      "id": "DiszpKrYNg8"\n    }\n  ],\n  "attachments": [\n    "fTpI4GOmujz",\n    "h2ZsOxMFMfq"\n  ]\n}\n')),Object(r.b)("p",null,"When replying to a message, the ids can be passed as a request\nparameter."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'curl -d "Yes the Mortality data set has been reported"\n  "https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations/ZjHHSjyyeJ2?attachments=fTpI4GOmujz,h2ZsOxMFMfq"\n  -H "Content-Type:text/plain" -u mobile:district -X POST\n')),Object(r.b)("h3",{id:"tickets-and-validation-result-notifications"},"Tickets and Validation Result Notifications"),Object(r.b)("p",null,'You can use the "write feedback" tool to create tickets and messages.\nThe only difference between a ticket and a message is that you can give\na status and a priority to a ticket. To set the status:'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"POST /api/messageConversations/<uid>/status\n")),Object(r.b)("p",null,"To set the priority:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"POST /api/messageConversations/<uid>/priority\n")),Object(r.b)("p",null,"In 2.29, messages generated by validation analysis now also be used in\nthe status and priority properties. By default, messages generated by\nvalidation analysis will inherit the priority of the validation rule in\nquestion, or the highest importance if the message contains multiple\nrules."),Object(r.b)("p",null,"In 2.30, validation rules can be assigned to any user while tickets\nstill need to be assigned to a user in the system's feedback recipient\ngroup."),Object(r.b)("p",null,'You can also add an internal message to a ticket, which can only be seen\nby users who have "Manage tickets" permissions. To create an internal\nreply, include the "internal" parameter, and set it to'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'curl -d "This is an internal message"\n  "https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations/ZjHHSjyyeJ2?internal=true"\n  -H "Content-Type:text/plain" -u admin:district -X POST\n')))}d.isMDXComponent=!0}}]);