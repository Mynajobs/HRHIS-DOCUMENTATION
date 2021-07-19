---
id: forms
title: Forms
sidebar_label: Forms
---

### Welcome the Forms Module

## Form Sections

- Adding a form sections

** Endpoint **

```JS
/api/formSections
```

`METHOD:` _POST_

** Request Payload **

```JSON
{
    "name": "Form Section Name",
    "sort": 3,
    "form": {"id": "Q9xLAnuFkRLsF"}
}
```

** Response **

```JSON
{
  "id": "LktJNzYXMr1ag",
  "name": "Wattss Information",
  "sort": 2,
  "form": {
    "id": "Q9xLAnuFkRLsF"
  },
  "created": "2021-05-28T17:28:32.000Z",
  "lastUpdated": "2021-05-28T17:28:32.000Z"
}
```

- Updating a form section

** Endpoint **

```JS
/api/formSections/LktJNzYXMr1ag
```

`METHOD:` _PUT_

** Request Payload **

```JSON
{
    "name": "New Form Section Name"
}
```

> Where ** LktJNzYXMr1ag ** is the section id

** Response **

```JSON
{
  "message": "Item with identifier LktJNzYXMr1ag updated successfully.",
  "payload": {
    "id": "LktJNzYXMr1ag",
    "created": "2021-05-28T14:04:47.000Z",
    "lastUpdated": "2021-05-28T11:05:01.000Z",
    "name": "New Form Section Name",
    "sort": 2
  }
}
```

** Getting Sections **

** Endpoint **

```JS
/api/formSections
```
`METHOD:` _GET_

** Response **

```JSON
{
  "pager": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 1,
    "total": 1,
    "nextPage": "/api/formSections?page=2"
  },
  "formSections": [
    {
    "id": "LktJNzYXMr1ag",
    "created": "2021-05-28T14:04:47.000Z",
    "lastUpdated": "2021-05-28T11:05:01.000Z",
    "name": "New Form Section Name",
    "sort": 2
    }
  ]
}
```

** Filtering form sections **
> Form section can be filtered according to fields it posses i.e names, ids, sort etc

** Endpoint ** 

```JS
/api/formSections?filter=sort:eq:2
```

`METHOD:` _GET_

> This will return all form sections with sort number equal to 2

** Response **

```JSON
{
  "pager": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 2,
    "total": 2,
    "nextPage": "/api/formSections?page=2"
  },
  "formSections": [
    {
      "id": "NzbLeyRHqfmMk",
      "created": "2021-05-28T12:10:29.000Z",
      "lastUpdated": "2021-05-28T12:10:29.000Z",
      "name": "Water Information",
      "sort": 2
    },
    {
    "id": "LktJNzYXMr1ag",
    "created": "2021-05-28T14:04:47.000Z",
    "lastUpdated": "2021-05-28T11:05:01.000Z",
    "name": "New Form Section Name",
    "sort": 2
    }
  ]
}
```

<p> <strong>NOTE</strong>: All filtering mechanisms, can be combined to produce a lobust search strategy</p>

- Available search and filter Operators

| Operator | Types                                                                                 | Value Required | Description                             |
| -------- | ------------------------------------------------------------------------------------- | -------------- | --------------------------------------- |
| eq       | string \| boolean \| integer \| float \| enum \| collection (checks for size) \| date | true           | Equality                                |
| like     | string                                                                                | true           | Case sensitive string, match anywhere   |
| ilike    | string                                                                                | true           | Case insensitive string, match anywhere |
| in       | string \| boolean \| integer \| float \| date                                         | true           | Find objects matching 1 or more values  |


** Form sections field selctions **
> Form section fields can be selected to get only fields you need in your payload i.e names, ids, sort etc

** Endpoint ** 

```JS
/api/formSections?fields=id,sort
```

`METHOD:` _GET_

> This will return only id sort in the form sections' palyoad

 ** Response **
```JSON
{
  "pager": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 3,
    "total": 3,
    "nextPage": "/api/formSections?page=2"
  },
  "formSections": [
    {
      "id": "CKDWfWWGdoXNM",
      "sort": 2
    },
    {
      "id": "RMNu5ax36SE8V",
      "sort": 1
    },
    {
      "id": "MUAgsiEdnwiot",
      "sort": 3
    }
  ]
}
```

** Get one form section by id**

** Endpoint **

```JS
/api/formSections/LktJNzYXMr1ag
```

`METHOD:` _GET_

** Response **

```JSON
{
    "id": "LktJNzYXMr1ag",
    "created": "2021-05-28T14:04:47.000Z",
    "lastUpdated": "2021-05-28T11:05:01.000Z",
    "name": "New Form Section Name",
    "sort": 2
  }
}
```

- Deleting a Section

** Endpoint **

```JS
/api/formSections/LktJNzYXMr1ag
```

`METHOD:` _DELETE_

** Response **

```JSON
{
  "message": "Object with identifier LktJNzYXMr1ag deleted successfully",
  "payload": {
    "id": "LktJNzYXMr1ag",
    "created": "2021-05-28T14:04:47.000Z",
    "lastUpdated": "2021-05-28T11:05:01.000Z",
    "name": "New Form Section Name",
    "sort": 2
  }
}
```


## Form Section Fields

- Adding fields to form sections

** Endpoint **

```JS
/api/formSectionFieldMembers
```

`METHOD:` _POST_

** Request Payload **

```JSON
{
    "field": {"id":"zP4fW5J28iO36"},
    "formSection":{"id":"c44qXOVKGhjUW"},
    "sort":2
}
```

** Response **

```JSON
{
  "id": "xy5LOzri7afnK",
  "field": {
    "id": "zP4fW5J28iO36"
  },
  "formSection": {
    "id": "LktJNzYXMr1ag"
  },
  "sort": 2

```

- Updating a form section

** Endpoint **

```JS
/api/formSectionFieldMembers/xy5LOzri7afnK
```

`METHOD:` _PUT_

** Request Payload **

```JSON
{
    "field": {"id":"zP4fW5J28iO36"},
    "formSection":{"id":"LktJNzYXMr1ag"},
    "sort":3
}
```

> Where ** xy5LOzri7afnK ** is the section field member id

** Response **

```JSON
{
  "message": "Item with identifier xy5LOzri7afnK updated successfully.",
  "payload": {
    "id": "xy5LOzri7afnK",
    "sort": 3,
    "field": {
      "id": "zP4fW5J28iO36"
    },
    "formSection": {
      "id": "LktJNzYXMr1ag"
    }
  }
}
```

- Deleting a Section

** Endpoint **

```JS
/api/formSectionFieldMembers/LktJNzYXMr1ag
```

`METHOD:` _DELETE_

** Response **

```JSON
{
  "message": "Object with identifier xy5LOzri7afnK deleted successfully",
  "payload": {
    "id": "xy5LOzri7afnK",
    "sort": 3
  }
}
```