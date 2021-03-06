---
id: ou
title: OrganisationUnits Module
sidebar_label: OrganisationUnits
slug: /
---

#### Organisationunit object includes the following keys.

Key | Description | Required      | Type
------- | ---------------- | ---------- | -----
id  | Unique identifier(Autogenerated) | Autogenerated | Number
uid  | 13 varying characters <br /> used for CRUD operations        | NO       | String(UID)
code   | Unique value that can also <br /> be used for CRUD operations | YES      | String
name | Defines the name of a particular entity | YES | String
shortName | OrganisationUnits short name | YES | String
description | Overview of the entity <br /> and all related details | NO | Text
active | Organisationunit's current <br /> operation status | NO | Boolean
parent | Organisationunit's parent of any | NO | String
created | Organisationunit's date of creation | NO | Date
lastupdated | Organisationunit's date for when it was last updated | NO | Date
publicAccess | If the Organisationunit has public access <br /> within the system | NO | Boolean
externalAccess | If the Organisationunit has external access <br /> outside the system | NO | Boolean
closingDate | The closing date of the Organisationunit if it was closed | NO | Date
openingDate | opening date of the Organisationunit| NO | Date
geoCode | Geo location code of the Organisationunit | NO | GeoJson
coordinates | Organisationunit coordinates | NO | Array
featureType | The type of the Organisationunit's feature coordinate | NO | String
address | Organisationunit's address | NO | String
contactPerson |Organisationunit's contact person if any. | NO | String
phoneNumber | Contact person's phone number| NO | Number
email | Contact person's address | NO | String

<br />

## Adding OrganisationUnits
<br />

> New Organisationunits in the system can be added to the list of organisationunits. `NOTE:` All Organisationunits containt a unique `code`

`Endpoint`
```JS
/api/organisationUnits
```
`Payload`

```JSON
 {
  "name": "Ministry Of Health",
  "description": "Ministry of Health and Social welfare",
  "shortName": "MOHCDGEC",
  "code": "MOHCDGEC",
  "active": true
}
```
`Response On Success`
```JSON
{
  "id": "A4f2Ty8QDVkQY",
  "name": "Ministry Of Health",
  "description": "Ministry of Health and Social welfare",
  "shortName": "MOHCDGEC",
  "code": "MOHCDGEC",
  "active": true,
  "created": "2020-12-23T07:23:01.000Z",
  "lastUpdated": "2020-12-23T07:23:01.000Z"
}
```
* A unique identifiable can be explicitly defined as `id` if there is a need of keeping memory of it otherwise the system will create one automatically. Unique identifiers are varying characters with strictly 13 characters of length.

* IDs can be generated from the system as follows

`Endpoint`

```JS
/api/system/id
```
* This generates one ID
<br />

```JS
/api/system/id?limit=4 
```
* This generates a list of 4 IDs. 
<br />
> Limit can be defined for a desired number of IDS

`Response`
```JSON
{
  "codes": [
    "R1LrM6EgpZFO4",
    "zlubCRjvcGJ1b",
    "DDAVHQaLekWBt",
    "Xm7iba5dFpuZF"
  ]
}
```
### Adding organisationUnit with specified ID
`Payload`

```JSON
  {
  "id": "R1LrM6EgpZFO4",
  "name": "Ministry Of Health",
  "description": "Ministry of Health and Social welfare",
  "shortName": "MOHCDGEC",
  "code": "MOHCDGEC",
  "active": true
}
```

`Response`
```JSON
{
  "id": "R1LrM6EgpZFO4",
  "name": "Ministry Of Health",
  "description": "Ministry of Health and Social welfare",
  "shortName": "MOHCDGEC",
  "code": "MOHCDGEC",
  "active": true,
  "created": "2020-12-23T07:23:54.000Z",
  "lastUpdated": "2020-12-23T07:23:54.000Z"
}
```

### Adding child OrganisationUnits
> A child organisationUnit can be added to a list contain a parent to that child. 
* These can be added by including the `parent ID` or `parent code`

 #### Adding with parent ID

`Endpoint`
```JS
/api/organisationUnits
```

`Payload`
```JSON
{
    "code": "REGION",
    "name": "The Region",
    "description": "The Region Details",
    "shortName": "Region",
    "active": true,
    "parent": {
        "id":"R1LrM6EgpZFO4"
    }
}
```

`Reponse`
```JSON
{
  "id": "Kehdpt5FnIb2N",
  "created": "2020-12-23T09:06:21.000Z",
  "lastUpdated": "2020-12-23T09:06:21.000Z",
  "code": "REGION",
  "name": "The Region",
  "description": "The Region Details",
  "shortName": "Region",
  "active": true,
  "parent": {
    "id": "R1LrM6EgpZFO4",
    "created": "2020-12-23T07:23:54.000Z",
    "lastUpdated": "2020-12-23T07:23:54.000Z",
    "code": "MOHCDGEC0",
    "name": "Ministry Of Health",
    "description": "Ministry of Health and Social welfare",
    "shortName": "MOHCDGEC",
    "active": true
  }
}
```
 #### Adding with parent CODE
`Endpoint`
```JS
/api/organisationUnits
```

`Payload`
```JSON
{
    "code": "REGION",
    "name": "The Region",
    "description": "The Region Details",
    "shortName": "Region",
    "active": true,
    "parent": {
        "id":"MOHCDGEC0"
    }
}
```
`Reponse`
```JSON
{
  "id": "Kehdpt5FnIb2N",
  "created": "2020-12-23T09:06:21.000Z",
  "lastUpdated": "2020-12-23T09:06:21.000Z",
  "code": "REGION",
  "name": "The Region",
  "description": "The Region Details",
  "shortName": "Region",
  "active": true,
  "parent": {
    "id": "R1LrM6EgpZFO4",
    "created": "2020-12-23T07:23:54.000Z",
    "lastUpdated": "2020-12-23T07:23:54.000Z",
    "code": "MOHCDGEC0",
    "name": "Ministry Of Health",
    "description": "Ministry of Health and Social welfare",
    "shortName": "MOHCDGEC",
    "active": true
  }
}
```

`Response On Failure`
* When posting fails, responses will differ depending on what caused the failure as follows:- <br />
1. Failure due to duplicates on unique organisationUnit properties <br />
`Response` 
```JSON
        {
          "error": "duplicate key value violates unique constraint \"<Constraint name/identifier>\""
        }   
```
2. Missing Required Properties <br />
`Response` 
```JSON
        {
          "error": "null value in column \"<Required Property>\" violates not-null constraint"
        }  
```

## Get a list of OrganisationUnits

* A list of OrganisationUnits includes all levels of organisationunits in the system including, Regions, Districts, Facilities and all other levels.

`Endpoint`

```JS
/api/organisationUnits
```

`Response`

```JSON
{
  "pager": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 2,
    "total": 10,
    "nextPage": "/api/organisationUnits?page=2"
  },
  "organisationUnits": [
   {
      "id": "zlubCRjvcGJ1b",
      "created": "2013-11-17T22:01:53.000Z",
      "lastUpdated": "2017-11-07T13:01:47.000Z",
      "code": "MOHCDGEC",
      "name": "Ministry Of Health",
      "description": "Ministry of Health and Social welfare",
      "shortName": "MOHCDGEC",
      "active": true,
      "level": 1,
      "path": "/zlubCRjvcGJ1b"
    },
    {
      "id": "Xm7iba5dFpuZF",
      "created": "2013-11-17T22:01:53.000Z",
      "lastUpdated": "2013-11-17T22:01:53.000Z",
      "code": "referralhosps",
      "name": "Referral Hospitals",
      "description": "Referral Hospitals",
      "shortName": "referralhosps",
      "active": true,
      "level": 2,
      "path": "/zlubCRjvcGJ1b/Xm7iba5dFpuZF",
      "parent": {
        "id": "zlubCRjvcGJ1b",
        "created": "2013-11-17T22:01:53.000Z",
        "lastUpdated": "2017-11-07T13:01:47.000Z",
        "code": "MOHCDGEC",
        "name": "Ministry Of Health",
        "description": "Ministry of Health and Social welfare",
        "shortName": "MOHCDGEC",
        "active": true,
        "level": 1,
        "path": "/zlubCRjvcGJ1b"
      }
    }]
}
```

### Get One OrganisationUnit By ID

* Details of one OrganisationUnit can retrieved by passing the ID of that OrganisationUnit if available in the system (/api/organisationUnits/ID)

`Endpoint`

```JS
/api/organisationUnits/zlubCRjvcGJ1b
```

`Response`

```JSON
{
  "id": "zlubCRjvcGJ1b",
  "created": "2013-11-17T22:01:53.000Z",
  "lastUpdated": "2017-11-07T13:01:47.000Z",
  "code": "MOHCDGEC",
  "name": "Ministry Of Health",
  "description": "Ministry of Health and Social welfare",
  "shortName": "MOHCDGEC",
  "active": true,
  "level": 1,
  "path": "/zlubCRjvcGJ1b"
}
```

### Filter OrganisationUnits

* Filtering of OrganisationUnits is performed by passing any property of the OrganisationUnits in the structure of the endpoint below.

`Endpoint` 

```JS
/api/organisationUnits?filter=shortName:eq:MOHCDGEC
```

`Response on Success`

```JSON
{
  "pager": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "total": 1,
    "nextPage": "/api/organisationUnits?page=2"
  },
  "organisationUnits": [
    {
      "id": "zlubCRjvcGJ1b",
      "created": "2013-11-17T22:01:53.000Z",
      "lastUpdated": "2017-11-07T13:01:47.000Z",
      "code": "MOHCDGEC",
      "name": "Ministry Of Health",
      "description": "Ministry of Health and Social welfare",
      "shortName": "MOHCDGEC",
      "active": true,
      "level": 1,
      "path": "/zlubCRjvcGJ1b"
    }
  ]
}
```
`Response on No Data`
```JSON
{
  "pager": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 0,
    "total": 0,
    "nextPage": "/api/organisationUnits?page=2"
  },
  "organisationUnits": []
}
```

### Get only desired fields
* Organisationunits endpoint can be filtered to only include fields you might want to use.

`Endpoint`
```JS
/api/organisationUnits?fields=id,name,parent
```
`Response`
```JSON
{
  "pager": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 2,
    "total": 2,
    "nextPage": "/api/organisationUnits?page=2"
  },
  "organisationUnits": [
    {
      "id": "zlubCRjvcGJ1b",
      "name": "Ministry Of Health"
    },
    {
      "id": "Xm7iba5dFpuZF",
      "name": "Referral Hospitals",
      "parent": {
        "id": "zlubCRjvcGJ1b",
        "created": "2013-11-17T22:01:53.000Z",
        "lastUpdated": "2017-11-07T13:01:47.000Z",
        "code": "MOHCDGEC",
        "name": "Ministry Of Health",
        "description": "Ministry of Health and Social welfare",
        "shortName": "MOHCDGEC",
        "active": true,
        "level": 1,
        "path": "/zlubCRjvcGJ1b"
      }
    }]
}

```

## Updating OrganisationUnits
* Updating an organisationUnit can be performed in two ways

###  Updating with ID.
`Endpoint` 
```JS
    /api/organisationUnits/Xm7iba5dFpuZF 
```
* Where Xm7iba5dFpuZF is the organisationUnit ID
<br />

`Sample Payload`
```JSON
    {      
      "name": "Referral Hospitals in Tanzania"
    }
```
`Response`
```JSON
        {
      "message": "Item with id Xm7iba5dFpuZF updated successfully.",
      "payload": {
        "id": "Xm7iba5dFpuZF",
        "created": "2013-11-17T22:01:53.000Z",
        "lastUpdated": "2020-12-24T11:37:08.000Z",
        "code": "referralhosps",
        "name": "Referral Hospitals in Tanzania",
        "description": "Referral Hospitals",
        "shortName": "referralhosps",
        "active": true,
        "level": 2,
        "path": "/zlubCRjvcGJ1b/Xm7iba5dFpuZF"
      }
    }
```
### Updating with code

`Endpoint` 
```JS
    /api/organisationUnits/MOHCDGEC 
```
* Where MOHCDGEC is the organisationUnit code.
<br />
`Sample Payload`

```JSON
    {      
       "name": "Ministry Of Health (MOHCDGEC)""
    }
```
`Response`
```JSON
       {
          "message": "Item with code MOHCDGEC updated successfully.",
          "payload": {
          "id": "zlubCRjvcGJ1b",
          "created": "2013-11-17T22:01:53.000Z",
          "lastUpdated": "2020-12-24T13:05:09.000Z",
          "code": "MOHCDGEC",
          "name": "Ministry Of Health (MOHCDGEC)",
          "description": "Ministry of Health and Social welfare",
          "shortName": "MOHCDGEC",
          "active": true,
          "level": 1,
          "path": "/zlubCRjvcGJ1b"
      }
     } 
```
## Deleting organisationUnit
* Deleting organisationUnit can be done in two ways like updating depending on what the user has access to. `NOTE:` To avoid orphans in deleting organisationUnits, deleting does not cascade so if you want to delete a parent, make sure it does not have any children.

### Deleting with organisationUnit id.

`Endpoint`
```JS
    /api/organisationUnits/DDAVHQaLekWBt
```
* Where `DDAVHQaLekWBt` is the organisationUnit ID
 <br />

`Response`
```JSON
          {
          "message": "Object with id DDAVHQaLekWBt deleted successfully",
          "payload": {
          "id": "DDAVHQaLekWBt",
          "created": "2014-01-05T23:20:13.000Z",
          "lastUpdated": "2020-05-18T11:32:06.000Z",
          "code": "OUCODE",
          "name": "Aga Khan Health Center",
          "shortName": "Aga Khan Health Center",
          "active": true,
          "openingDate": "1899-12-31",
          "coordinates": "[36.68944,-3.37077]",
          "level": 5,
          "path": "/zlubCRjvcGJ1b/52893cd1ba688/52c9be76ee331/52c9be77b8514/DDAVHQaLekWBt"
        }
      }
```

### Deleting with organisationUnit code.

`Endpoint`
```JS
     /api/organisationUnits/OUCODE
```
* Where OUCODE is the organisationUnit CODE
 <br />

`Response`
```JSON
          {
          "message": "Object with code OUCODE deleted successfully",
          "payload": {
          "id": "DDAVHQaLekWBt",
          "created": "2014-01-05T23:20:13.000Z",
          "lastUpdated": "2020-05-18T11:32:06.000Z",
          "code": "OUCODE",
          "name": "Aga Khan Health Center",
          "shortName": "Aga Khan Health Center",
          "active": true,
          "openingDate": "1899-12-31",
          "coordinates": "[36.68944,-3.37077]",
          "level": 5,
          "path": "/zlubCRjvcGJ1b/52893cd1ba688/52c9be76ee331/52c9be77b8514/DDAVHQaLekWBt"
        }
      }
```