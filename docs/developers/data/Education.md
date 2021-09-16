---
id: education-records
title: Education Records Module
sidebar_label: Education Records
---
## Education Records Module.

This module allows viewing and analyzing of information from health practitioners registration councils. These are records from health professional registration councils including professionals expected to register but are not registered.

### Viewing current students records

To show students who are currently enrolled in health training institutions. Student records in student's form are traced to identify students who have not graduated and then the identified records are mapped to their respective unique  record in the registration form so as to display all data linked to each student in profiles.

`Path`
```JS
/api/apps/student-data
```
`Method:` GET

`Payload`

```JSON
{
"pager": {
"page": 1,
"pageSize": 50,
"pageCount": 0,
"total": 0,
"nextPage": "/api/records?page=2"
},
"records": []
}
```
|Element|Description|Type|Notes|
|----|----|----|-----|

### Viewing graduated students records

To show students who are currently enrolled in health training institutions. Student records in student's form are traced to identify students who have graduated and then the identified records are mapped to their respective unique  record in the registration form so as to display all data linked to each student in profiles.

`Path`
```JS
/api/apps/student-data
```
`Method:` GET

`Payload`

```JSON

```