---
id: records
title: Records Module
sidebar_label: Records
---

### Record Duplicates and Merging API

## Get Duplicate Records.

`Endpoint`

```JS
/api/records/duplicates/hshD7171OpG
```

> Where `hshD7171OpG` is the form id.

`Method:` GET

`Payload`

```JSON
 {
  "message": "Duplicate Records",
  "records": [
      {
      "field": "b2fkEQgzJdbhF",
      "name": "Check Number",
      "duplicates": [
        {
          "id": "BPlMPfo553ch5",
          "recordValues": [
             {
               "id": "nuDEzu4NBeL2Z",
              "field": "iKJDfOQmtw2qp",
              "value": "form four"
            },
            {
              "id": "eTnrhDx2E45EG",
              "field": "lJNeQk2bTNQl5",
              "value": "jdjjd"
            },
          ],
          "organisationunit": "zRgNXkU7Yef6L"
        },
        {
          "id": "SspS99jTdRbn8",
          "recordValues": [
           {
             "id":"kmfZvkYLiOWVu",
              "field": "nTw32YiWJtwhl",
              "value": "jdjjd"
            },
            {
              "id":"ezFEgOAnPWNvs",
              "field": "tRPYrDlb1n79w",
              "value": "ndnndf"
            },
            {
              "id":"E7NeVciipvtMv",
              "field": "lWDS8Rwg70G9I",
              "value": "nam"
            }
          ],
          "organisationunit": "PXXhx3rjw6ebx"
        }
      ]
    }
  ]
 }
```

`Payload Description`

- The payload contains an array of Records and inside, objects. Each object contains a random character string value with key field which indicates the unique field used to get duplicates.
- The same object contains another object with properties of id and recordValues, these indicate the record id and it's associated values respectively.

## Merging Duplicates

- Duplicates can be merged by two scenarios.

`Endpoint`

```JS
/api/records/merge
```

`Method:` POST

### Scenario One || Based on Records

`Payload`

```JSON
{
  "keep": "wuWlL5gTuzUf4",
  "remove":["yxd7nZx3dExX9","ephzmm10i8Olc"]
}
```

> Where `keep` represents the recordid to keep and `remove` represents an array of record ids to delete

### Scenario One || Based on Selected Fields

`Payload`

```JSON
{
  "organisationUnit":"XJpzOmbg7LuL6",
  "form": "iJUMeqloMjmDq",
  "recordValues": [
      {"id": "jJBwwcYa1kBzQ"},
      {"id": "fEbTGVMKVLUTU"},
      {"id": "nlG8zObKlkMcx"}
      ],
  "remove":["yxd7nZx3dExX9","ephzmm10i8Olc"]
}
```

> Where organisationUnit represents and form represents the parameters of the new record to create `recordValues` represents an array of all recordvalue ids for all fields to create a new record and `remove` represents an array of record ids to delete
