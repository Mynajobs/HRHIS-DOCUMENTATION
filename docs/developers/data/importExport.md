---
id: Import-Export
title: Import/ExportModule
sidebar_label: Import/Export
---


## Import/Export Module.

This module allows manual data entry and retrieval in the system. Manual data entry and retrieval is done based on templates  that can be downloaded from the system. The templates are categorized based on the forms used to capture data in the system and have same data fields as those existing in the forms. 

### Data Import Process

Data importation involves a series of actions such as downloading import template, choosing data import file, importing data. The following are the requests and respons associated with each process.

#### Downloading data import template

### Data Export Process

Data exportation involves a series of actions such as selecting an organization unit, selecting a data export form and downloading exported data.The following are the requests and respons associated with each process.

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
|Element|Description|Type|Notes|
|----|----|----|-----|

#### Choosing a data import file
#### Importing data