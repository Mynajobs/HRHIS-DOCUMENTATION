(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(3),i=t(7),l=(t(0),t(94)),r={id:"ou",title:"Organisation Units",sidebar_label:"Organisation Units"},b={unversionedId:"developers/metadata/ou",id:"developers/metadata/ou",isDocsHomePage:!1,title:"Organisation Units",description:"Organisationunit object includes the following keys.",source:"@site/docs/developers/metadata/organisationUnits.md",slug:"/developers/metadata/ou",permalink:"/hris-api-docs/docs/developers/metadata/ou",editUrl:"https://github.com/hisptz/hris-api-docs/blob/main/docs/developers/metadata/organisationUnits.md",version:"current",sidebar_label:"Organisation Units",sidebar:"menuSidebar",previous:{title:"Forms",permalink:"/hris-api-docs/docs/developers/metadata/forms"},next:{title:"Indicators",permalink:"/hris-api-docs/docs/developers/metadata/indicators"}},c=[{value:"Adding OrganisationUnits",id:"adding-organisationunits",children:[{value:"Adding organisationUnit with specified ID",id:"adding-organisationunit-with-specified-id",children:[]},{value:"Adding child OrganisationUnits",id:"adding-child-organisationunits",children:[]}]},{value:"Get a list of OrganisationUnits",id:"get-a-list-of-organisationunits",children:[{value:"Get One OrganisationUnit By ID",id:"get-one-organisationunit-by-id",children:[]},{value:"Filter OrganisationUnits",id:"filter-organisationunits",children:[]},{value:"Get only desired fields",id:"get-only-desired-fields",children:[]}]},{value:"Updating OrganisationUnits",id:"updating-organisationunits",children:[{value:"Updating with ID.",id:"updating-with-id",children:[]},{value:"Updating with code",id:"updating-with-code",children:[]}]},{value:"Deleting organisationUnit",id:"deleting-organisationunit",children:[{value:"Deleting with organisationUnit id.",id:"deleting-with-organisationunit-id",children:[]},{value:"Deleting with organisationUnit code.",id:"deleting-with-organisationunit-code",children:[]}]}],o={toc:c};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h4",{id:"organisationunit-object-includes-the-following-keys"},"Organisationunit object includes the following keys."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Key"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"id"),Object(l.b)("td",{parentName:"tr",align:null},"Unique identifier(Autogenerated)"),Object(l.b)("td",{parentName:"tr",align:null},"Autogenerated"),Object(l.b)("td",{parentName:"tr",align:null},"Number")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"uid"),Object(l.b)("td",{parentName:"tr",align:null},"13 varying characters ",Object(l.b)("br",null)," used for CRUD operations"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"String(UID)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"code"),Object(l.b)("td",{parentName:"tr",align:null},"Unique value that can also ",Object(l.b)("br",null)," be used for CRUD operations"),Object(l.b)("td",{parentName:"tr",align:null},"YES"),Object(l.b)("td",{parentName:"tr",align:null},"String")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"name"),Object(l.b)("td",{parentName:"tr",align:null},"Defines the name of a particular entity"),Object(l.b)("td",{parentName:"tr",align:null},"YES"),Object(l.b)("td",{parentName:"tr",align:null},"String")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"shortName"),Object(l.b)("td",{parentName:"tr",align:null},"OrganisationUnits short name"),Object(l.b)("td",{parentName:"tr",align:null},"YES"),Object(l.b)("td",{parentName:"tr",align:null},"String")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"description"),Object(l.b)("td",{parentName:"tr",align:null},"Overview of the entity ",Object(l.b)("br",null)," and all related details"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"Text")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"active"),Object(l.b)("td",{parentName:"tr",align:null},"Organisationunit's current ",Object(l.b)("br",null)," operation status"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"Boolean")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"parent"),Object(l.b)("td",{parentName:"tr",align:null},"Organisationunit's parent of any"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"String")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"created"),Object(l.b)("td",{parentName:"tr",align:null},"Organisationunit's date of creation"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"Date")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lastupdated"),Object(l.b)("td",{parentName:"tr",align:null},"Organisationunit's date for when it was last updated"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"Date")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"publicAccess"),Object(l.b)("td",{parentName:"tr",align:null},"If the Organisationunit has public access ",Object(l.b)("br",null)," within the system"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"Boolean")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"externalAccess"),Object(l.b)("td",{parentName:"tr",align:null},"If the Organisationunit has external access ",Object(l.b)("br",null)," outside the system"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"Boolean")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"closingDate"),Object(l.b)("td",{parentName:"tr",align:null},"The closing date of the Organisationunit if it was closed"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"Date")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"openingDate"),Object(l.b)("td",{parentName:"tr",align:null},"opening date of the Organisationunit"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"Date")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"geoCode"),Object(l.b)("td",{parentName:"tr",align:null},"Geo location code of the Organisationunit"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"GeoJson")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"coordinates"),Object(l.b)("td",{parentName:"tr",align:null},"Organisationunit coordinates"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"Array")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"featureType"),Object(l.b)("td",{parentName:"tr",align:null},"The type of the Organisationunit's feature coordinate"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"String")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"address"),Object(l.b)("td",{parentName:"tr",align:null},"Organisationunit's address"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"String")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"contactPerson"),Object(l.b)("td",{parentName:"tr",align:null},"Organisationunit's contact person if any."),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"String")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"phoneNumber"),Object(l.b)("td",{parentName:"tr",align:null},"Contact person's phone number"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"Number")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"email"),Object(l.b)("td",{parentName:"tr",align:null},"Contact person's address"),Object(l.b)("td",{parentName:"tr",align:null},"NO"),Object(l.b)("td",{parentName:"tr",align:null},"String")))),Object(l.b)("br",null),Object(l.b)("h2",{id:"adding-organisationunits"},"Adding OrganisationUnits"),Object(l.b)("br",null),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"New Organisationunits in the system can be added to the list of organisationunits. ",Object(l.b)("inlineCode",{parentName:"p"},"NOTE:")," All Organisationunits containt a unique ",Object(l.b)("inlineCode",{parentName:"p"},"code"))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"/api/organisationUnits\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Payload")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},' {\n  "name": "Ministry Of Health",\n  "description": "Ministry of Health and Social welfare",\n  "shortName": "MOHCDGEC",\n  "code": "MOHCDGEC",\n  "active": true\n}\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response On Success")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "id": "A4f2Ty8QDVkQY",\n  "name": "Ministry Of Health",\n  "description": "Ministry of Health and Social welfare",\n  "shortName": "MOHCDGEC",\n  "code": "MOHCDGEC",\n  "active": true,\n  "created": "2020-12-23T07:23:01.000Z",\n  "lastUpdated": "2020-12-23T07:23:01.000Z"\n}\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"A unique identifiable can be explicitly defined as ",Object(l.b)("inlineCode",{parentName:"p"},"id")," if there is a need of keeping memory of it otherwise the system will create one automatically. Unique identifiers are varying characters with strictly 13 characters of length.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"IDs can be generated from the system as follows"))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"/api/system/id\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"This generates one ID",Object(l.b)("br",null))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"/api/system/id?limit=4 \n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"This generates a list of 4 IDs. ",Object(l.b)("br",null),"> Limit can be defined for a desired number of IDS")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "codes": [\n    "R1LrM6EgpZFO4",\n    "zlubCRjvcGJ1b",\n    "DDAVHQaLekWBt",\n    "Xm7iba5dFpuZF"\n  ]\n}\n')),Object(l.b)("h3",{id:"adding-organisationunit-with-specified-id"},"Adding organisationUnit with specified ID"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Payload")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'  {\n  "id": "R1LrM6EgpZFO4",\n  "name": "Ministry Of Health",\n  "description": "Ministry of Health and Social welfare",\n  "shortName": "MOHCDGEC",\n  "code": "MOHCDGEC",\n  "active": true\n}\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "id": "R1LrM6EgpZFO4",\n  "name": "Ministry Of Health",\n  "description": "Ministry of Health and Social welfare",\n  "shortName": "MOHCDGEC",\n  "code": "MOHCDGEC",\n  "active": true,\n  "created": "2020-12-23T07:23:54.000Z",\n  "lastUpdated": "2020-12-23T07:23:54.000Z"\n}\n')),Object(l.b)("h3",{id:"adding-child-organisationunits"},"Adding child OrganisationUnits"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"A child organisationUnit can be added to a list contain a parent to that child. "),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"These can be added by including the ",Object(l.b)("inlineCode",{parentName:"li"},"parent ID")," or ",Object(l.b)("inlineCode",{parentName:"li"},"parent code")))),Object(l.b)("h4",{id:"adding-with-parent-id"},"Adding with parent ID"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"/api/organisationUnits\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Payload")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n    "code": "REGION",\n    "name": "The Region",\n    "description": "The Region Details",\n    "shortName": "Region",\n    "active": true,\n    "parent": {\n        "id":"R1LrM6EgpZFO4"\n    }\n}\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Reponse")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "id": "Kehdpt5FnIb2N",\n  "created": "2020-12-23T09:06:21.000Z",\n  "lastUpdated": "2020-12-23T09:06:21.000Z",\n  "code": "REGION",\n  "name": "The Region",\n  "description": "The Region Details",\n  "shortName": "Region",\n  "active": true,\n  "parent": {\n    "id": "R1LrM6EgpZFO4",\n    "created": "2020-12-23T07:23:54.000Z",\n    "lastUpdated": "2020-12-23T07:23:54.000Z",\n    "code": "MOHCDGEC0",\n    "name": "Ministry Of Health",\n    "description": "Ministry of Health and Social welfare",\n    "shortName": "MOHCDGEC",\n    "active": true\n  }\n}\n')),Object(l.b)("h4",{id:"adding-with-parent-code"},"Adding with parent CODE"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"/api/organisationUnits\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Payload")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n    "code": "REGION",\n    "name": "The Region",\n    "description": "The Region Details",\n    "shortName": "Region",\n    "active": true,\n    "parent": {\n        "id":"MOHCDGEC0"\n    }\n}\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Reponse")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "id": "Kehdpt5FnIb2N",\n  "created": "2020-12-23T09:06:21.000Z",\n  "lastUpdated": "2020-12-23T09:06:21.000Z",\n  "code": "REGION",\n  "name": "The Region",\n  "description": "The Region Details",\n  "shortName": "Region",\n  "active": true,\n  "parent": {\n    "id": "R1LrM6EgpZFO4",\n    "created": "2020-12-23T07:23:54.000Z",\n    "lastUpdated": "2020-12-23T07:23:54.000Z",\n    "code": "MOHCDGEC0",\n    "name": "Ministry Of Health",\n    "description": "Ministry of Health and Social welfare",\n    "shortName": "MOHCDGEC",\n    "active": true\n  }\n}\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response On Failure")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"When posting fails, responses will differ depending on what caused the failure as follows:- ",Object(l.b)("br",null))),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Failure due to duplicates on unique organisationUnit properties ",Object(l.b)("br",null),Object(l.b)("inlineCode",{parentName:"li"},"Response")," ")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'        {\n          "error": "duplicate key value violates unique constraint \\"<Constraint name/identifier>\\""\n        }   \n')),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Missing Required Properties ",Object(l.b)("br",null),Object(l.b)("inlineCode",{parentName:"li"},"Response")," ")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'        {\n          "error": "null value in column \\"<Required Property>\\" violates not-null constraint"\n        }  \n')),Object(l.b)("h2",{id:"get-a-list-of-organisationunits"},"Get a list of OrganisationUnits"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A list of OrganisationUnits includes all levels of organisationunits in the system including, Regions, Districts, Facilities and all other levels.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"/api/organisationUnits\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 2,\n    "total": 10,\n    "nextPage": "/api/organisationUnits?page=2"\n  },\n  "organisationUnits": [\n   {\n      "id": "zlubCRjvcGJ1b",\n      "created": "2013-11-17T22:01:53.000Z",\n      "lastUpdated": "2017-11-07T13:01:47.000Z",\n      "code": "MOHCDGEC",\n      "name": "Ministry Of Health",\n      "description": "Ministry of Health and Social welfare",\n      "shortName": "MOHCDGEC",\n      "active": true,\n      "level": 1,\n      "path": "/zlubCRjvcGJ1b"\n    },\n    {\n      "id": "Xm7iba5dFpuZF",\n      "created": "2013-11-17T22:01:53.000Z",\n      "lastUpdated": "2013-11-17T22:01:53.000Z",\n      "code": "referralhosps",\n      "name": "Referral Hospitals",\n      "description": "Referral Hospitals",\n      "shortName": "referralhosps",\n      "active": true,\n      "level": 2,\n      "path": "/zlubCRjvcGJ1b/Xm7iba5dFpuZF",\n      "parent": {\n        "id": "zlubCRjvcGJ1b",\n        "created": "2013-11-17T22:01:53.000Z",\n        "lastUpdated": "2017-11-07T13:01:47.000Z",\n        "code": "MOHCDGEC",\n        "name": "Ministry Of Health",\n        "description": "Ministry of Health and Social welfare",\n        "shortName": "MOHCDGEC",\n        "active": true,\n        "level": 1,\n        "path": "/zlubCRjvcGJ1b"\n      }\n    }]\n}\n')),Object(l.b)("h3",{id:"get-one-organisationunit-by-id"},"Get One OrganisationUnit By ID"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Details of one OrganisationUnit can retrieved by passing the ID of that OrganisationUnit if available in the system (/api/organisationUnits/ID)")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"/api/organisationUnits/zlubCRjvcGJ1b\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "id": "zlubCRjvcGJ1b",\n  "created": "2013-11-17T22:01:53.000Z",\n  "lastUpdated": "2017-11-07T13:01:47.000Z",\n  "code": "MOHCDGEC",\n  "name": "Ministry Of Health",\n  "description": "Ministry of Health and Social welfare",\n  "shortName": "MOHCDGEC",\n  "active": true,\n  "level": 1,\n  "path": "/zlubCRjvcGJ1b"\n}\n')),Object(l.b)("h3",{id:"filter-organisationunits"},"Filter OrganisationUnits"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Filtering of OrganisationUnits is performed by passing any property of the OrganisationUnits in the structure of the endpoint below.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")," "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"/api/organisationUnits?filter=shortName:eq:MOHCDGEC\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response on Success")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 1,\n    "total": 1,\n    "nextPage": "/api/organisationUnits?page=2"\n  },\n  "organisationUnits": [\n    {\n      "id": "zlubCRjvcGJ1b",\n      "created": "2013-11-17T22:01:53.000Z",\n      "lastUpdated": "2017-11-07T13:01:47.000Z",\n      "code": "MOHCDGEC",\n      "name": "Ministry Of Health",\n      "description": "Ministry of Health and Social welfare",\n      "shortName": "MOHCDGEC",\n      "active": true,\n      "level": 1,\n      "path": "/zlubCRjvcGJ1b"\n    }\n  ]\n}\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response on No Data")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 0,\n    "total": 0,\n    "nextPage": "/api/organisationUnits?page=2"\n  },\n  "organisationUnits": []\n}\n')),Object(l.b)("h3",{id:"get-only-desired-fields"},"Get only desired fields"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Organisationunits endpoint can be filtered to only include fields you might want to use.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"/api/organisationUnits?fields=id,name,parent\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 2,\n    "total": 2,\n    "nextPage": "/api/organisationUnits?page=2"\n  },\n  "organisationUnits": [\n    {\n      "id": "zlubCRjvcGJ1b",\n      "name": "Ministry Of Health"\n    },\n    {\n      "id": "Xm7iba5dFpuZF",\n      "name": "Referral Hospitals",\n      "parent": {\n        "id": "zlubCRjvcGJ1b",\n        "created": "2013-11-17T22:01:53.000Z",\n        "lastUpdated": "2017-11-07T13:01:47.000Z",\n        "code": "MOHCDGEC",\n        "name": "Ministry Of Health",\n        "description": "Ministry of Health and Social welfare",\n        "shortName": "MOHCDGEC",\n        "active": true,\n        "level": 1,\n        "path": "/zlubCRjvcGJ1b"\n      }\n    }]\n}\n\n')),Object(l.b)("h2",{id:"updating-organisationunits"},"Updating OrganisationUnits"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Updating an organisationUnit can be performed in two ways")),Object(l.b)("h3",{id:"updating-with-id"},"Updating with ID."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")," "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"    /api/organisationUnits/Xm7iba5dFpuZF \n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Where Xm7iba5dFpuZF is the organisationUnit ID",Object(l.b)("br",null))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Sample Payload")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'    {      \n      "name": "Referral Hospitals in Tanzania"\n    }\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'        {\n      "message": "Item with id Xm7iba5dFpuZF updated successfully.",\n      "payload": {\n        "id": "Xm7iba5dFpuZF",\n        "created": "2013-11-17T22:01:53.000Z",\n        "lastUpdated": "2020-12-24T11:37:08.000Z",\n        "code": "referralhosps",\n        "name": "Referral Hospitals in Tanzania",\n        "description": "Referral Hospitals",\n        "shortName": "referralhosps",\n        "active": true,\n        "level": 2,\n        "path": "/zlubCRjvcGJ1b/Xm7iba5dFpuZF"\n      }\n    }\n')),Object(l.b)("h3",{id:"updating-with-code"},"Updating with code"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")," "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"    /api/organisationUnits/MOHCDGEC \n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Where MOHCDGEC is the organisationUnit code.",Object(l.b)("br",null),"`Sample Payload`")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'    {      \n       "name": "Ministry Of Health (MOHCDGEC)""\n    }\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'       {\n          "message": "Item with code MOHCDGEC updated successfully.",\n          "payload": {\n          "id": "zlubCRjvcGJ1b",\n          "created": "2013-11-17T22:01:53.000Z",\n          "lastUpdated": "2020-12-24T13:05:09.000Z",\n          "code": "MOHCDGEC",\n          "name": "Ministry Of Health (MOHCDGEC)",\n          "description": "Ministry of Health and Social welfare",\n          "shortName": "MOHCDGEC",\n          "active": true,\n          "level": 1,\n          "path": "/zlubCRjvcGJ1b"\n      }\n     } \n')),Object(l.b)("h2",{id:"deleting-organisationunit"},"Deleting organisationUnit"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Deleting organisationUnit can be done in two ways like updating depending on what the user has access to. ",Object(l.b)("inlineCode",{parentName:"li"},"NOTE:")," To avoid orphans in deleting organisationUnits, deleting does not cascade so if you want to delete a parent, make sure it does not have any children.")),Object(l.b)("h3",{id:"deleting-with-organisationunit-id"},"Deleting with organisationUnit id."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"    /api/organisationUnits/DDAVHQaLekWBt\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Where ",Object(l.b)("inlineCode",{parentName:"li"},"DDAVHQaLekWBt")," is the organisationUnit ID",Object(l.b)("br",null))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'          {\n          "message": "Object with id DDAVHQaLekWBt deleted successfully",\n          "payload": {\n          "id": "DDAVHQaLekWBt",\n          "created": "2014-01-05T23:20:13.000Z",\n          "lastUpdated": "2020-05-18T11:32:06.000Z",\n          "code": "19D90-10",\n          "name": "Aga Khan Health Center",\n          "shortName": "Aga Khan Health Center",\n          "active": true,\n          "openingDate": "1899-12-31",\n          "coordinates": "[36.68944,-3.37077]",\n          "level": 5,\n          "path": "/zlubCRjvcGJ1b/52893cd1ba688/52c9be76ee331/52c9be77b8514/DDAVHQaLekWBt"\n        }\n      }\n')),Object(l.b)("h3",{id:"deleting-with-organisationunit-code"},"Deleting with organisationUnit code."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Endpoint")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JS"},"     /api/organisationUnits/19D90-10\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Where 19D90-10 is the organisationUnit CODE",Object(l.b)("br",null))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JSON"},'          {\n          "message": "Object with code 19D90-10 deleted successfully",\n          "payload": {\n          "id": "DDAVHQaLekWBt",\n          "created": "2014-01-05T23:20:13.000Z",\n          "lastUpdated": "2020-05-18T11:32:06.000Z",\n          "code": "19D90-10",\n          "name": "Aga Khan Health Center",\n          "shortName": "Aga Khan Health Center",\n          "active": true,\n          "openingDate": "1899-12-31",\n          "coordinates": "[36.68944,-3.37077]",\n          "level": 5,\n          "path": "/zlubCRjvcGJ1b/52893cd1ba688/52c9be76ee331/52c9be77b8514/DDAVHQaLekWBt"\n        }\n      }\n')))}d.isMDXComponent=!0},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return O}));var a=t(0),i=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=i.a.createContext({}),d=function(e){var n=i.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},p=function(e){var n=d(e.components);return i.a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(t),u=a,O=p["".concat(r,".").concat(u)]||p[u]||s[u]||l;return t?i.a.createElement(O,b(b({ref:n},o),{},{components:t})):i.a.createElement(O,b({ref:n},o))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=u;var b={};for(var c in n)hasOwnProperty.call(n,c)&&(b[c]=n[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var o=2;o<l;o++)r[o]=t[o];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);