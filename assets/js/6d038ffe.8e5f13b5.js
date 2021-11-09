"use strict";(self.webpackChunkhris_api_docs=self.webpackChunkhris_api_docs||[]).push([[620],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=s,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3757:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(7462),s=n(3366),r=(n(7294),n(3905)),o=["components"],i={id:"processes",title:"Processes",sidebar_label:"Processes"},l=void 0,p={unversionedId:"developers/settings/processes",id:"developers/settings/processes",isDocsHomePage:!1,title:"Processes",description:"System resource",source:"@site/docs/developers/settings/processes.md",sourceDirName:"developers/settings",slug:"/developers/settings/processes",permalink:"/hris-api-docs/docs/developers/settings/processes",editUrl:"https://github.com/udsm-dhis2-project/hris-api-docs/blob/main/docs/developers/settings/processes.md",tags:[],version:"current",frontMatter:{id:"processes",title:"Processes",sidebar_label:"Processes"},sidebar:"docs",previous:{title:"Notification",permalink:"/hris-api-docs/docs/developers/settings/notifications"},next:{title:"User Logs",permalink:"/hris-api-docs/docs/developers/settings/logs"}},u=[{value:"System resource",id:"system-resource",children:[{value:"Generate identifiers",id:"generate-identifiers",children:[],level:3},{value:"View system information",id:"view-system-information",children:[],level:3},{value:"Check if username and password combination is correct",id:"check-if-username-and-password-combination-is-correct",children:[],level:3},{value:"View asynchronous task status",id:"view-asynchronous-task-status",children:[{value:"Monitoring a task",id:"monitoring-a-task",children:[],level:4},{value:"Monitoring all tasks for a category",id:"monitoring-all-tasks-for-a-category",children:[],level:4},{value:"Monitor all tasks",id:"monitor-all-tasks",children:[],level:4}],level:3},{value:"View asynchronous task summaries",id:"view-asynchronous-task-summaries",children:[],level:3},{value:"Get appearance information",id:"get-appearance-information",children:[],level:3}],level:2},{value:"Scheduling",id:"scheduling",children:[{value:"Get available job types",id:"get-available-job-types",children:[],level:3},{value:"Create job",id:"create-job",children:[],level:3},{value:"Get jobs",id:"get-jobs",children:[],level:3},{value:"Update job",id:"update-job",children:[],level:3},{value:"Delete job",id:"delete-job",children:[],level:3}],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"system-resource"},"System resource"),(0,r.kt)("p",null,"The system resource provides you with convenient information and\nfunctions. The system resource can be found at ",(0,r.kt)("em",{parentName:"p"},"/api/system"),"."),(0,r.kt)("h3",{id:"generate-identifiers"},"Generate identifiers"),(0,r.kt)("p",null,"To generate valid, random HRHIS4 identifiers you can do a GET request to\nthis resource:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/api/system/id?limit=3\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"limit")," query parameter is optional and indicates how many\nidentifiers you want to be returned with the response. The default is to\nreturn one identifier. The response will contain a JSON object with an\narray named codes, similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "codes": [\n    "Y0moqFplrX4",\n    "WI0VHXuWQuV",\n    "BRJNBBpu4ki"\n  ]\n}\n')),(0,r.kt)("p",null,"The HRHIS4 UID format has these requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"11 characters long.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Alphanumeric characters only, ie. alphabetic or numeric characters\n(A-Za-z0-9).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start with an alphabetic character (A-Za-z)."))),(0,r.kt)("h3",{id:"view-system-information"},"View system information"),(0,r.kt)("p",null,"To get information about the current system you can do a GET request to\nthis URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/api/system/info\n")),(0,r.kt)("p",null,"JSON and JSONP response formats are supported. The system info response\ncurrently includes the below properties."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  contextPath: "http://yourdomain.com",\n  userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/29.0.1547.62",\n  version: "2.13-SNAPSHOT",\n  revision: "11852",\n  buildTime: "2013-09-01T21:36:21.000+0000",\n  serverDate: "2013-09-02T12:35:54.311+0000",\n  environmentVariable: "HRHIS4_HOME",\n  javaVersion: "1.7.0_06",\n  javaVendor: "Oracle Corporation",\n  javaIoTmpDir: "/tmp",\n  javaOpts: "-Xms600m -Xmx1500m -XX:PermSize=400m -XX:MaxPermSize=500m",\n  osName: "Linux",\n  osArchitecture: "amd64",\n  osVersion: "3.2.0-52-generic",\n  externalDirectory: "/home/dhis/config/HRHIS4",\n  databaseInfo: {\n    type: "PostgreSQL",\n    name: "HRHIS4",\n    user: "dhis",\n    spatialSupport: false\n  },\n  memoryInfo: "Mem Total in JVM: 848 Free in JVM: 581 Max Limit: 1333",\n  cpuCores: 8\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("p",{parentName:"blockquote"},"If the user who is requesting this resource does not have full authority in the system then only the first seven properties will be included, as this information is security sensitive.")),(0,r.kt)("p",null,"To get information about the system context only, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"contextPath")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"userAgent"),", you can make a GET request to the below URL. JSON and\nJSONP response formats are supported:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/api/system/context\n")),(0,r.kt)("h3",{id:"check-if-username-and-password-combination-is-correct"},"Check if username and password combination is correct"),(0,r.kt)("p",null,"To check if some user credentials (a username and password combination)\nis correct you can make a ",(0,r.kt)("em",{parentName:"p"},"GET")," request to the following resource using\n",(0,r.kt)("em",{parentName:"p"},"basic authentication"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/api/system/ping\n")),(0,r.kt)("p",null,"You can detect the outcome of the authentication by inspecting the ",(0,r.kt)("em",{parentName:"p"},"HTTP\nstatus code")," of the response header. The meanings of the possible status\ncodes are listed below. Note that this applies to Web API requests in\ngeneral."),(0,r.kt)("h3",{id:"view-asynchronous-task-status"},"View asynchronous task status"),(0,r.kt)("p",null,"Tasks which often take a long time to complete can be performed\nasynchronously. After initiating an async task you can poll the status\nthrough the ",(0,r.kt)("inlineCode",{parentName:"p"},"system/tasks")," resource by supplying the task category and\nthe task identifier of interest."),(0,r.kt)("p",null,"When polling for the task status you need to authenticate as the same\nuser which initiated the task. The following task categories are\nsupported:"),(0,r.kt)("p",null,"Each asynchronous task is automatically assigned an identifier which can\nbe used to monitor the status of the task. This task identifier is\nreturned by the API when you initiate an async task through the various\nasync-enabled endpoints."),(0,r.kt)("h4",{id:"monitoring-a-task"},"Monitoring a task"),(0,r.kt)("p",null,"You can poll the task status through a GET request to the system tasks\nresource like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/api/system/tasks/{task-category-id}/{task-id}\n")),(0,r.kt)("p",null,"An example request may look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/api/system/tasks/DATAVALUE_IMPORT/j8Ki6TgreFw\n")),(0,r.kt)("p",null,"The response will provide information about the status, such as the\nnotification level, category, time and status. The ",(0,r.kt)("em",{parentName:"p"},"completed")," property\nindicates whether the process is considered to be complete."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[{\n  "uid": "hpiaeMy7wFX",\n  "level": "INFO",\n  "category": "DATAVALUE_IMPORT",\n  "time": "2015-09-02T07:43:14.595+0000",\n  "message": "Import done",\n  "completed": true\n}]\n')),(0,r.kt)("h4",{id:"monitoring-all-tasks-for-a-category"},"Monitoring all tasks for a category"),(0,r.kt)("p",null,"You can poll all tasks for a specific category through a GET request to\nthe system tasks resource:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/api/system/tasks/{task-category-id}\n")),(0,r.kt)("p",null,"An example request to poll for the status of data value import tasks\nlooks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/api/system/tasks/DATAVALUE_IMPORT\n")),(0,r.kt)("h4",{id:"monitor-all-tasks"},"Monitor all tasks"),(0,r.kt)("p",null,"You can request a list of all currently running tasks in the system with\na GET request to the system tasks resource:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/api/system/tasks\n")),(0,r.kt)("p",null,"The response will look similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[{\n  "EVENT_IMPORT": {},\n  "DATA_STATISTICS": {},\n  "RESOURCE_TABLE": {},\n  "FILE_RESOURCE_CLEANUP": {},\n  "METADATA_IMPORT": {},\n  "CREDENTIALS_EXPIRY_ALERT": {},\n  "SMS_SEND": {},\n  "MOCK": {},\n  "ANALYTICSTABLE_UPDATE": {},\n  "COMPLETE_DATA_SET_REGISTRATION_IMPORT": {},\n  "DATAVALUE_IMPORT": {},\n  "DATA_SET_NOTIFICATION": {},\n  "DATA_INTEGRITY": {\n    "OB1qGRlCzap": [{\n      "uid": "LdHQK0PXZyF",\n      "level": "INFO",\n      "category": "DATA_INTEGRITY",\n      "time": "2018-03-26T15:02:32.171",\n      "message": "Data integrity checks completed in 38.31 seconds.",\n      "completed": true\n    }]\n  },\n  "PUSH_ANALYSIS": {},\n  "MONITORING": {},\n  "VALIDATION_RESULTS_NOTIFICATION": {},\n  "REMOVE_EXPIRED_RESERVED_VALUES": {},\n  "DATA_SYNC": {},\n  "SEND_SCHEDULED_MESSAGE": {},\n  "DATAVALUE_IMPORT_INTERNAL": {},\n  "PROGRAM_NOTIFICATIONS": {},\n  "META_DATA_SYNC": {},\n  "ANALYTICS_TABLE": {},\n  "PREDICTOR": {}\n}]\n')),(0,r.kt)("h3",{id:"view-asynchronous-task-summaries"},"View asynchronous task summaries"),(0,r.kt)("p",null,"The task summaries resource allows you to retrieve a summary of an\nasynchronous task invocation. You need to specify the category and\noptionally the identifier of the task. The task identifier can be\nretrieved from the response of the API request which initiated the\nasynchronous task."),(0,r.kt)("p",null,"To retrieve the summary of a specific task you can issue a request to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/api/system/taskSummaries/{task-category-id}/{task-id}\n")),(0,r.kt)("p",null,"An example request might look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/api/system/taskSummaries/DATAVALUE_IMPORT/k72jHfF13J1\n")),(0,r.kt)("p",null,"The response will look similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "responseType": "ImportSummary",\n  "status": "SUCCESS",\n  "importOptions": {\n    "idSchemes": {},\n    "dryRun": false,\n    "async": true,\n    "importStrategy": "CREATE_AND_UPDATE",\n    "mergeMode": "REPLACE",\n    "reportMode": "FULL",\n    "skipExistingCheck": false,\n    "sharing": false,\n    "skipNotifications": false,\n    "datasetAllowsPeriods": false,\n    "strictPeriods": false,\n    "strictCategoryOptionCombos": false,\n    "strictAttributeOptionCombos": false,\n    "strictOrganisationUnits": false,\n    "requireCategoryOptionCombo": false,\n    "requireAttributeOptionCombo": false,\n    "skipPatternValidation": false\n  },\n  "description": "Import process completed successfully",\n  "importCount": {\n    "imported": 0,\n    "updated": 431,\n    "ignored": 0,\n    "deleted": 0\n  },\n  "dataSetComplete": "false"\n}\n')),(0,r.kt)("p",null,"You might also retrieve import summaries for multiple tasks of a\nspecific category with a request like\nthis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/api/system/taskSummaries/{task-category-id}\n")),(0,r.kt)("h3",{id:"get-appearance-information"},"Get appearance information"),(0,r.kt)("p",null,"You can retrieve the available flag icons in JSON format with a GET\nrequest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/api/system/flags\n")),(0,r.kt)("p",null,"You can retrieve the available UI styles in JSON format with a GET\nrequest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/api/system/styles\n")),(0,r.kt)("h2",{id:"scheduling"},"Scheduling"),(0,r.kt)("p",null,"HRHIS4 allows for scheduling of jobs of various types. Each type of job has different properties for configuration, giving you finer control over how jobs are run. In addition, you can configure the same job to run with different configurations and at different intervals if required."),(0,r.kt)("h3",{id:"get-available-job-types"},"Get available job types"),(0,r.kt)("p",null,"To get a list of all available job types you can use the following endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/jobConfigurations/jobTypes\n")),(0,r.kt)("p",null,"The response contains information about each job type including name, job type, key, scheduling type and available parameters. The scheduling type can either be ",(0,r.kt)("inlineCode",{parentName:"p"},"CRON"),", meaning jobs can be scheduled using a cron expression with the ",(0,r.kt)("inlineCode",{parentName:"p"},"cronExpression")," field, or ",(0,r.kt)("inlineCode",{parentName:"p"},"FIXED_DELAY"),", meaning jobs can be scheduled to run with a fixed delay in between with the ",(0,r.kt)("inlineCode",{parentName:"p"},"delay")," field. The field delay is given in seconds. "),(0,r.kt)("p",null,"A response will look similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jobTypes": [\n    {\n      "name": "Data integrity",\n      "jobType": "DATA_INTEGRITY",\n      "key": "dataIntegrityJob",\n      "schedulingType": "CRON"\n    }, {\n      "name": "Resource table",\n      "jobType": "RESOURCE_TABLE",\n      "key": "resourceTableJob",\n      "schedulingType": "CRON"\n    }, {\n      "name": "Continuous analytics table",\n      "jobType": "CONTINUOUS_ANALYTICS_TABLE",\n      "key": "continuousAnalyticsTableJob",\n      "schedulingType": "FIXED_DELAY"\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"create-job"},"Create job"),(0,r.kt)("p",null,"To configure jobs you can do a POST request to the following resource:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/api/jobConfigurations\n")),(0,r.kt)("p",null,"A job without parameters in JSON format looks like this :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "",\n  "jobType": "JOBTYPE",\n  "cronExpression": "0 * * ? * *",\n}\n')),(0,r.kt)("p",null,"An example of an analytics table job with parameters in JSON format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Analytics tables last two years",\n  "jobType": "ANALYTICS_TABLE",\n  "cronExpression": "0 * * ? * *",\n  "jobParameters": {\n    "lastYears": "2",\n    "skipTableTypes": [],\n    "skipResourceTables": false\n  }\n}\n')),(0,r.kt)("p",null,"As example of a push analysis job with parameters in JSON format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "Push anlysis charts",\n   "jobType": "PUSH_ANALYSIS",\n   "cronExpression": "0 * * ? * *",\n   "jobParameters": {\n     "pushAnalysis": [\n       "jtcMAKhWwnc"\n     ]\n    }\n }\n')),(0,r.kt)("p",null,"An example of a job with scheduling type ",(0,r.kt)("inlineCode",{parentName:"p"},"FIXED_DELAY")," and 120 seconds delay:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Continuous analytics table",\n  "jobType": "CONTINUOUS_ANALYTICS_TABLE",\n  "delay": "120",\n  "jobParameters": {\n    "fullUpdateHourOfDay": 4\n  }\n}\n')),(0,r.kt)("h3",{id:"get-jobs"},"Get jobs"),(0,r.kt)("p",null,"List all job configurations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/jobConfigurations\n")),(0,r.kt)("p",null,"Retrieve a job:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/jobConfigurations/{id}\n")),(0,r.kt)("p",null,"The response payload looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "lastUpdated": "2018-02-22T15:15:34.067",\n  "id": "KBcP6Qw37gT",\n  "href": "http://localhost:8080/api/jobConfigurations/KBcP6Qw37gT",\n  "created": "2018-02-22T15:15:34.067",\n  "name": "analytics last two years",\n  "jobStatus": "SCHEDULED",\n  "displayName": "analytics last two years",\n  "enabled": true,\n  "externalAccess": false,\n  "jobType": "ANALYTICS_TABLE",\n  "nextExecutionTime": "2018-02-26T03:00:00.000",\n  "cronExpression": "0 0 3 ? * MON",\n  "jobParameters": {\n    "lastYears": 2,\n    "skipTableTypes": [],\n    "skipResourceTables": false\n  },\n  "favorite": false,\n  "configurable": true,\n  "access": {\n    "read": true,\n    "update": true,\n    "externalize": true,\n    "delete": true,\n    "write": true,\n    "manage": true\n  },\n  "lastUpdatedBy": {\n    "id": "GOLswS44mh8"\n  },\n  "favorites": [],\n  "translations": [],\n  "userGroupAccesses": [],\n  "attributeValues": [],\n  "userAccesses": []\n}\n')),(0,r.kt)("h3",{id:"update-job"},"Update job"),(0,r.kt)("p",null,"Update a job with parameters using the following endpoint and JSON payload format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PUT /api/jobConfiguration/{id}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "analytics last two years",\n  "enabled": true,\n  "cronExpression": "0 0 3 ? * MON",\n  "jobType": "ANALYTICS_TABLE",\n  "jobParameters": {\n    "lastYears": "3",\n    "skipTableTypes": [],\n    "skipResourceTables": false\n  }\n}\n')),(0,r.kt)("h3",{id:"delete-job"},"Delete job"),(0,r.kt)("p",null,"Delete a job using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DELETE /api/jobConfiguration/{id}\n")),(0,r.kt)("p",null,"Note that some jobs with custom configuration parameters may not be added if the\nrequired system settings are not configured. An example of this is data\nsynchronization, which requires remote server configuration."))}m.isMDXComponent=!0}}]);