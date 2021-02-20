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
      "field": "5289e93499515",
      "name": "Check Number",
      "duplicates": [
        {
          "id": "558a700e04a56",
          "recordValues": [
             {
              "field": "5289e93496216",
              "value": "form four"
            },
            {
              "field": "5289e9349dde1",
              "value": "jdjjd"
            },
          ]
        },
        {
          "id": "5c9415cce9fcd",
          "recordValues": [
           {
              "field": "5289e9349dde1",
              "value": "jdjjd"
            },
            {
              "field": "5289e9349f037",
              "value": "ndnndf"
            },
            {
              "field": "5289e934a027b",
              "value": "nam"
            }
          ]
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
  "recordValues": [
      {"id": "jJBwwcYa1kBzQ"}, 
      {"id": "jJBwwcYa1kBzQ"}, 
      {"id": "jJBwwcYa1kBzQ"}
      ],
  "remove":["yxd7nZx3dExX9","ephzmm10i8Olc"]
}
```
> Where `recordValues` represents an array of all recordvalue ids for all fields to create a new record and `remove` represents an array of record ids to delete
