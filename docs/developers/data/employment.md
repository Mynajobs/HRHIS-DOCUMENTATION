---
id: records
title: Records Module
sidebar_label: Records
---
## Record Modules

In HRHIS there are three modules that mainly hold different types of records i.e. Employment records, Council records and Education Records. 

## Introduction

What is record API?

A record API is the messenger that delivers a request to the provider from which it is being requested and then delivers the response (records) back.

What it generally offer

A record API contains HTTP status code and data returned.

## Fetching  

Aggregate records Fetching data in record modules follow similar sequence of actions as described below.

## Fetching  listing records

`Method:`

GET

A default endpoint for fetching

`api/analytics/records/KwTlfYKlSCcEd?pageSize=50&page=1&ouMode=DESCENDANTS&listing=true`

Where `KwTlfYKlSCcEd` is the form id

By default the page size is 50, but you can change the page size by setting the page size property to any number you wish.

You can also get all records for viewing without pagination by simply setting paging = 'false'.

|Parameter|Description|Type|Notes|
|----|----|----|-----|
|PageSize|Number of item per page|number|by default it is 50|
|Page|Page number (offset)|number||
|Paging|specifies whether to use paging or not||when false (all records)are returned as response|

Sample Data payload.

```JSON
{
"pager": {
"page": 1,
"pageSize": 50,
"pageCount": 50,
"total": 1998,
"nextPage": "/api/analytics/records/KwTlfYKlSCcEd?page=2"
},
"records": [
{
"id": "q8dD4haVRtX9p",
"created": "2021-09-20T06:09:18.000Z",
"lastupdated": "2021-09-20T06:09:18.000Z",
"ou": {
"id": "Va5XqGVTyyZuK",
"created": "2021-05-14T18:36:40.000Z",
"lastUpdated": "2021-07-01T07:00:59.000Z",
"code": "15005214030201",
"name": "Kilosa Clinical Officers Training Centre",
"description": "Kilosa Clinical Officers Training Centre Full Accreditation",
"shortName": "Kilosa Cli",
"address": "Kilosa District Council",
"level": 4,
"path": "/52893cd1b8359/52f0a11563b5e/cRHIYtAEi2biB/Va5XqGVTyyZuK",
"ancestors": [
{
"id": "52893cd1b8359",
"created": "2013-11-17T19:01:53.000Z",
"lastUpdated": "2017-11-07T10:01:47.000Z",
"code": "MOHCDGEC",
"name": "Ministry Of Health",
"description": "Ministry of Health and Social welfare",
"shortName": "MOHCDGEC",
"active": true,
"level": 1,
"path": "/52893cd1b8359"
},
{
"id": "Va5XqGVTyyZuK",
"created": "2021-05-14T18:36:40.000Z",
"lastUpdated": "2021-07-01T07:00:59.000Z",
"code": "15005214030201",
"name": "Kilosa Clinical Officers Training Centre",
"description": "Kilosa Clinical Officers Training Centre Full Accreditation",
"shortName": "Kilosa Cli",
"address": "Kilosa District Council",
"level": 4,
"path": "/52893cd1b8359/52f0a11563b5e/cRHIYtAEi2biB/Va5XqGVTyyZuK"
},
{
"id": "52f0a11563b5e",
"created": "2014-02-04T08:13:09.000Z",
"lastUpdated": "2014-02-04T08:13:09.000Z",
"code": "HTI",
"name": "Health Training Institutions",
"shortName": "Institutions",
"active": true,
"level": 2,
"path": "/52893cd1b8359/52f0a11563b5e"
},
{
"id": "cRHIYtAEi2biB",
"created": "2021-07-01T08:24:55.000Z",
"lastUpdated": "2021-07-01T05:24:55.000Z",
"code": "NACTE",
"name": "NACTE",
"shortName": "NACTE",
"active": true,
"level": 3,
"path": "/52893cd1b8359/52f0a11563b5e/cRHIYtAEi2biB"
}
],
"descendants": [
{
"id": "Va5XqGVTyyZuK",
"created": "2021-05-14T18:36:40.000Z",
"lastUpdated": "2021-07-01T07:00:59.000Z",
"code": "15005214030201",
"name": "Kilosa Clinical Officers Training Centre",
"description": "Kilosa Clinical Officers Training Centre Full Accreditation",
"shortName": "Kilosa Cli",
"address": "Kilosa District Council",
"level": 4,
"path": "/52893cd1b8359/52f0a11563b5e/cRHIYtAEi2biB/Va5XqGVTyyZuK"
}
]
},
"parent": "pbD8mdbEY8lLT",
"station": "Kilosa Clinical Officers Training Centre",
"kInc8cekSNpwc": "Fulltime",
"EsrSdikGMrlWv": "Ordinary Diploma in Clinical Medicine",
"WO3Rt4x054iD7": "2018/2019",
"vTa3ayf4bYraE": "NTA6",
"QRcUUrnDc7Xop": "private",
"qcK7xGSb21lCk": "Enrolled",
"rRbXqbINSF3Ho": "NACTE",
"bikuM9BsBDwJO": "NACTE",
"5289e934ab062": "Ezekiel",
"5289e934b2b33": "Bob",
"5289e934b84c3": "CMT5/KLS/16/09",
"5289e934bde20": "Male",
"5289e934c02a1": "Ezekiel",
"OeASFS19CV9tO": "NACTE"
},
{
"id": "U4GQ5MWMXkQQL",
"created": "2021-09-20T06:09:18.000Z",
"lastupdated": "2021-09-20T06:09:18.000Z",
"ou": {
"id": "Va5XqGVTyyZuK",
"created": "2021-05-14T18:36:40.000Z",
"lastUpdated": "2021-07-01T07:00:59.000Z",
"code": "15005214030201",
"name": "Kilosa Clinical Officers Training Centre",
"description": "Kilosa Clinical Officers Training Centre Full Accreditation",
"shortName": "Kilosa Cli",
"address": "Kilosa District Council",
"level": 4,
"path": "/52893cd1b8359/52f0a11563b5e/cRHIYtAEi2biB/Va5XqGVTyyZuK",
"ancestors": [
{
"id": "52893cd1b8359",
"created": "2013-11-17T19:01:53.000Z",
"lastUpdated": "2017-11-07T10:01:47.000Z",
"code": "MOHCDGEC",
"name": "Ministry Of Health",
"description": "Ministry of Health and Social welfare",
"shortName": "MOHCDGEC",
"active": true,
"level": 1,
"path": "/52893cd1b8359"
},
```

The fields in the responses are described below.

|Parameter|Type|Default|Description|
|PageSize|Number|50|Number of items per page|
|page|Number|1|Page number||
|paging|Boolean|true||Specify whether to do pagination or not



`false`:  Fetch All record

`true`: Fetch record given pagination options

Searching parameters
Dimension <fields>
Operators  <eq, !eq, in, !in>

|Operator|Description
|----|----|
|eq|Fetch records where search item has EXACT MATCH for the given dimension|
|!eq|Fetch records where search item has NO MATCH for the given dimension|
|in|Fetch records with many search items where items exist IN records for the given dimension|
|!in|Fetch records with many search items where items do not exist IN records for the given dimension
|

Fetching a single record

You can also search for a single record as described below

`Endpoint;` 

``/api/records/pbD8mdbEY8lLT?fields=id,organisationUnit[id,organisationUnitGroups],form,recordValues[field]``

Specify field to get the record