---
id: councils
title: Council registration Module
sidebar_label: Council Records
---

## Council Records Module.

This module allows viewing and analyzing of information from health practitioners registration councils. These are records from health professional registration councils including professionals who were expected to register but are not registered.

### Viewing registered proffessionals

To view registered health professionals first the registration form is accessed then all data in other forms that are mapped to the record are fetched and displayed. Here is the sample response for viewing reistered health professionals.

`Path`
```JS
/api/forms/fbzalEYFM9a7O
```
where `fbzalEYFM9a7O` is the form id.

`Method:` GET

`Payload`

```JSON
{
"id": "fbzalEYFM9a7O",
"name": "Registration",
"title": "Registration",
"formSections": [],
"formFieldMembers": [
{
"id": "vRLD9O4I91T6R",
"created": "2021-09-06T22:46:35.215Z",
"lastUpdated": "2021-09-06T22:46:35.215Z",
"fieldid": "140",
"formid": "40",
"sort": 1,
"isPinned": false,
"showInList": true,
"compulsory": false,
"searchable": true,
"field": {
"id": "5289e934ab062",
"created": "2013-11-18T07:17:24.000Z",
"lastUpdated": "2013-11-18T07:17:24.000Z",
"name": "firstname",
"description": "Compulsory, Employee`s Firstname.",
"caption": "First Name",
"compulsory": true,
"isUnique": false,
"isCalculated": false,
"hasHistory": false,
"datatype": "String",
"fieldOptions": []
}
}
```
### Payload description

The fields in the responses are described below.

|Element|Description|Type|Notes|
|----|----|----|-----|
|Form|Record registry|metadata|Here is where all records are created and stored|
|&nbsp;&nbsp;&nbsp;&nbsp;id|identifier for the referenced form|integer||
|&nbsp;&nbsp;&nbsp;&nbsp;name|name of the form|string||
|&nbsp;&nbsp;&nbsp;&nbsp;title|title of the form|string||
|&nbsp;&nbsp;&nbsp;&nbsp;form sections|sections available in the form if any||
|&nbsp;&nbsp;&nbsp;&nbsp;form field members|data fields assigned to the form||
|Data||||
|&nbsp;&nbsp;&nbsp;&nbsp;id|record identifier|integer||
|&nbsp;&nbsp;&nbsp;&nbsp;created|creation date|date||
|&nbsp;&nbsp;&nbsp;&nbsp;lastupdated|Updation date|date||
|&nbsp;&nbsp;&nbsp;&nbsp;fieldid|identifier for a data field|integer||
|&nbsp;&nbsp;&nbsp;&nbsp;formid|identifier of the form holding data||
|&nbsp;&nbsp;&nbsp;&nbsp;sort|
|&nbsp;&nbsp;&nbsp;&nbsp;isPinned|specifies if the data field is pinned to the form for handling field display||
|&nbsp;&nbsp;&nbsp;&nbsp;showInList|specifies if a field has to be shown in the record list|boolean||
|&nbsp;&nbsp;&nbsp;&nbsp;compulsory|specifies whether a field is mandatory or not|boolean||
|&nbsp;&nbsp;&nbsp;&nbsp;isUnique|specifies whether a field is unique or not|boolean||
|&nbsp;&nbsp;&nbsp;&nbsp;isCalculated|specifies whether a field is calculated or not|boolean||
|&nbsp;&nbsp;&nbsp;&nbsp;hasHistory|specifies whether a field is historcica change or not|boolean||
|&nbsp;&nbsp;&nbsp;&nbsp;datatype|Specifies a fields data type||
|&nbsp;&nbsp;&nbsp;&nbsp;fieldOptions|specifies if data field has fixed options of values||

### Viewing Inactive proffessionals

To get a list of professionals who were expected to be registered in councils but whose data are not found, involve tracing the students data to find all students who graduated from different institutions then tracing through all other child forms and the registration form so as to get records that have been mapped to student information but are not mapped to council or employement information.

`Path`
```JS
api/forms
```
where `fbzalEYFM9a7O` is the form id

`Request Method: GET`

`Response`
```JSON
{
"id": "fbzalEYFM9a7O",
"name": "Registration",
"title": "Registration",
"formSections": [],
"formFieldMembers": [
{
"id": "vRLD9O4I91T6R",
"created": "2021-09-06T22:46:35.215Z",
"lastUpdated": "2021-09-06T22:46:35.215Z",
"fieldid": "140",
"formid": "40",
"sort": 1,
"isPinned": false,
"showInList": true,
"compulsory": false,
"searchable": true,
"field": {
"id": "5289e934ab062",
"created": "2013-11-18T07:17:24.000Z",
"lastUpdated": "2013-11-18T07:17:24.000Z",
"name": "firstname",
"description": "Compulsory, Employee`s Firstname.",
"caption": "First Name",
"compulsory": true,
"isUnique": false,
"isCalculated": false,
"hasHistory": false,
"datatype": "String",
"fieldOptions": []
}
}
``` 
