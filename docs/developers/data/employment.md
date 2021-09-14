---
id: records
title: Records Module
sidebar_label: Records
---
### Record viewing API

## Get Employees Records.

`Endpoint`

```JS
/api/records/duplicates/hshD7171OpG
```
- Where `hshD7171OpG` is the form id.
- You can also pass the page size of data you want as:-
  ```JS
  /api/records/duplicates/hshD7171OpG?pageSize=300
  ```
  - Where `pageSize=300` is the query for a page of size 300 items.

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