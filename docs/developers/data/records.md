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
    "pageSize": 100,
    "pageCount": 00,
    "total": 1295,
    "nextPage": "/api/records/duplicates/52893cd128bd2?page=2"
  },
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

## Record values

<!--HRHIS-SECTION-ID:webapi_data_values-->

This section is about sending and reading record values.

    /api/records

### Sending record values

<!--HRHIS-SECTION-ID:webapi_sending_data_values-->

A common use-case for system integration is the need to send a set of
record values from a third-party system into HRHIS. In this example, we will
use the HRHIS demo on `http://dev.hrhis.HRHIS2udsm.org/demo` as basis. We have now aggregated our data from source system and want to send that data to the HRHIS instance. The
base URL to the demo API is `http://dev.hrhis.HRHIS2udsm.org/demo/api`. The following
links are relative to the base URL.

The resource which is most appropriate for our purpose of sending data
values is the `/api/records` resource. A record values set represents a
set of record values which have a relationship, usually from being
captured off the same data entry form. The format looks like
this:

JSON is supported in this format:

```json
{
  "form": { "id": "formID" },
  "organisationUnit": { "id": "orgUnitID" }, 
  // or we can use code in the format, organisationUnit: { "code": "orgUnitCODE" }
  "recordValues": [
    {
      "value": "Bennett",
      "field": { "id": "fieldID" },
      "startdate": "startDate",
      "startdate": "startDate"
    },
    {
      "value": "Vincent",
      "field": { "id": "fieldID" }
    },
    {
      "value": "On Duty",
      "field": { "id": "fieldID" }
    }
  ]
}
```

> **Note**
>
> The period identifiers(`startDate` and `endDate`) are for history records and hence not compulsory, required in certain values
>
> Please refer to the form and organisationUnit section above for time formats.

From the example, we can see that we need to identify the period, the
data set, the org unit (facility) and the data elements for which to
report.

To obtain the identifier for the data set we make a request to the
`/api/forms` resource. From there we find and follow the link to
the _Mortality < 5 years_ data set which leads us to `/api/forms/pBOMPrpg1QX`.
The resource representation for the _Mortality < 5 years_ data set conveniently
advertises links to the data elements which are members of it. From here
we can follow these links and obtain the identifiers of the data
elements. For brevity we will only report on three data elements:
_Measles_ with id `f7n9E0hX8qk`, _Dysentery_ with id `Ix2HsbDMLea` and
_Cholera_ with id `eY5ehpbEsB7`.

What remains is to get hold of the identifier of the organisation
unit. The _dataSet_ representation conveniently provides a link to organisation
units which report on it so we search for _Ngelehun CHC_ and follow the
link to the HTML representation at `/api/organisationUnits/DiszpKrYNg8`, which
tells us that the identifier of this org unit is `DiszpKrYNg8`.

From our case-based data, we assume that we have 12 cases of measles, 14
cases of dysentery and 16 cases of cholera. We have now gathered enough
information to be able to put together the XML record values set
message:

```xml
<recordValueset xmlns="http://HRHIS.org/schema/dxf/2.0" dataSet="pBOMPrpg1QX"
  completeDate="2014-02-03" period="201401" orgUnit="DiszpKrYNg8">
  <dataValue dataElement="f7n9E0hX8qk" value="12"/>
  <dataValue dataElement="Ix2HsbDMLea" value="14"/>
  <dataValue dataElement="eY5ehpbEsB7" value="16"/>
</recordValueset>
```

In JSON format:

```json
{
  "dataSet": "pBOMPrpg1QX",
  "completeDate": "2014-02-03",
  "period": "201401",
  "orgUnit": "DiszpKrYNg8",
  "recordValues": [
    {
      "dataElement": "f7n9E0hX8qk",
      "value": "1"
    },
    {
      "dataElement": "Ix2HsbDMLea",
      "value": "2"
    },
    {
      "dataElement": "eY5ehpbEsB7",
      "value": "3"
    }
  ]
}
```

To perform functional testing we will use the _curl_ tool which provides
an easy way of transferring data using HTTP. First, we save the data
value set XML content in a file called `recordValueset.xml`. From the
directory where this file resides we invoke the following from the
command line:

```bash
curl -d @recordValueset.xml "https://dev.hrhis.HRHIS2udsm.org/demo/api/records"
  -H "Content-Type:application/xml" -u admin:district
```

For sending JSON content you must set the content-type header
accordingly:

```bash
curl -d @recordValueset.json "https://dev.hrhis.HRHIS2udsm.org/demo/api/records"
  -H "Content-Type:application/json" -u admin:district
```

The command will dispatch a request to the demo Web API, set
`application/xml` as the content-type and authenticate using
`admin`/`district` as username/password. If all goes well this will return a
`200 OK` HTTP status code. You can verify that the data has been
received by opening the data entry module in HRHIS and select the org
unit, data set and period used in this example.

The API follows normal semantics for error handling and HTTP status
codes. If you supply an invalid username or password, `401 Unauthorized`
is returned. If you supply a content-type other than `application/xml`,
`415 Unsupported Media Type` is returned. If the XML content is invalid
according to the DXF namespace, `400 Bad Request` is returned. If you
provide an invalid identifier in the XML content, `409 Conflict` is
returned together with a descriptive message.

### Sending bulks of record values

<!--HRHIS-SECTION-ID:webapi_sending_bulks_data_values-->

The previous example showed us how to send a set of related record values
sharing the same period and organisation unit. This example will show us
how to send large bulks of record values which don't necessarily are
logically related.

Again we will interact with the `/api/records` resource. This time we
will not specify the `dataSet` and `completeDate` attributes. Also, we will
specify the `period` and `orgUnit` attributes on the individual record values
elements instead of on the outer record values set element. This will
enable us to send record values for various periods and organisation units:

```xml
<recordValueset xmlns="http://HRHIS.org/schema/dxf/2.0">
  <dataValue dataElement="f7n9E0hX8qk"
    period="201401" orgUnit="DiszpKrYNg8" value="12"/>
  <dataValue dataElement="f7n9E0hX8qk"
    period="201401" orgUnit="FNnj3jKGS7i" value="14"/>
  <dataValue dataElement="f7n9E0hX8qk"
    period="201402" orgUnit="DiszpKrYNg8" value="16"/>
  <dataValue dataElement="f7n9E0hX8qk"
    period="201402" orgUnit="Jkhdsf8sdf4" value="18"/>
</recordValueset>
```

In JSON format:

```json
{
  "recordValues": [
    {
      "dataElement": "f7n9E0hX8qk",
      "period": "201401",
      "orgUnit": "DiszpKrYNg8",
      "value": "12"
    },
    {
      "dataElement": "f7n9E0hX8qk",
      "period": "201401",
      "orgUnit": "FNnj3jKGS7i",
      "value": "14"
    },
    {
      "dataElement": "f7n9E0hX8qk",
      "period": "201402",
      "orgUnit": "DiszpKrYNg8",
      "value": "16"
    },
    {
      "dataElement": "f7n9E0hX8qk",
      "period": "201402",
      "orgUnit": "Jkhdsf8sdf4",
      "value": "18"
    }
  ]
}
```

In CSV format:

```csv
"dataelement","period","orgunit","categoryoptioncombo","attributeoptioncombo","value"
"f7n9E0hX8qk","201401","DiszpKrYNg8","bRowv6yZOF2","bRowv6yZOF2","1"
"Ix2HsbDMLea","201401","DiszpKrYNg8","bRowv6yZOF2","bRowv6yZOF2","2"
"eY5ehpbEsB7","201401","DiszpKrYNg8","bRowv6yZOF2","bRowv6yZOF2","3"
```

We test by using curl to send the record values in XML format:

```bash
curl -d @recordValueset.xml "https://dev.hrhis.HRHIS2udsm.org/demo/api/records"
  -H "Content-Type:application/xml" -u admin:district
```

Note that when using CSV format you must use the binary data option to
preserve the line-breaks in the CSV file:

```bash
curl --data-binary @recordValueset.csv "https://dev.hrhis.HRHIS2udsm.org/demo/24/api/records"
  -H "Content-Type:application/csv" -u admin:district
```

The record values set resource provides an XML response which is useful
when you want to verify the impact your request had. The first time we
send the record values set request above the server will respond with the
following import summary:

```xml
<importSummary>
  <dataValueCount imported="2" updated="1" ignored="1"/>
  <dataSetComplete>false</dataSetComplete>
</importSummary>
```

This message tells us that 3 record values were imported, 1 record values was
updated while zero record values were ignored. The single update comes as
a result of us sending that record values in the previous example. A data
value will be ignored if it references a non-existing data element,
period, org unit or data set. In our case, this single ignored value was
caused by the last record values having an invalid reference to org unit.
The data set complete element will display the date of which the data
value set was completed, or false if no data element attribute was
supplied.

### Import parameters

<!--HRHIS-SECTION-ID:webapi_data_values_import_parameters-->

The import process can be customized using a set of import parameters:

All parameters are optional and can be supplied as query parameters in
the request URL like this:

    /api/records?dataElementIdScheme=code&orgUnitIdScheme=name
      &dryRun=true&importStrategy=CREATE

They can also be supplied as XML attributes on the record values set
element like below. XML attributes will override query string
parameters.

```xml
<recordValueset xmlns="http://HRHIS.org/schema/dxf/2.0" dataElementIdScheme="code"
  orgUnitIdScheme="name" dryRun="true" importStrategy="CREATE">
</recordValueset>
```

Note that the `preheatCache` parameter can have a huge impact on
performance. For small import files, leaving it to false will be fast.
For large import files which contain a large number of distinct data
elements and organisation units, setting it to true will be orders of
magnitude faster.

#### record values requirements

<!--HRHIS-SECTION-ID:webapi_data_values_import_requirement-->

record values import supports a set of value types. For each value type,
there is a special requirement. The following table lists the edge cases
for value types.

#### Identifier schemes

<!--HRHIS-SECTION-ID:webapi_data_values_identifier_schemes-->

Regarding the id schemes, by default the identifiers used in the XML
messages use the HRHIS stable object identifiers referred to as `UID`.
In certain interoperability situations we might experience that an external
system decides the identifiers of the objects. In that case we can use
the `code` property of the organisation units and other objects to set
fixed identifiers. When importing record values we hence need to reference
the code property instead of the identifier property of these metadata
objects. Identifier schemes can be specified in the XML message as well
as in the request as query parameters. To specify it in the XML payload
you can do this:

```xml
<recordValueset xmlns="http://HRHIS.org/schema/dxf/2.0"
  dataElementIdScheme="CODE" orgUnitIdScheme="UID" idScheme="CODE">
</recordValueset>
```

The parameter table above explains how the id schemes can be specified
as query parameters. The following rules apply for what takes
precedence:

- Id schemes defined in the XML or JSON payload take precedence over
  id schemes defined as URL query parameters.

- Specific id schemes including dataElementIdScheme and
  orgUnitIdScheme take precedence over the general idScheme.

- The default id scheme is UID, which will be used if no explicit id
  scheme is defined.

The following identifier schemes are available.

- uid (default)

- code

- name

- attribute (followed by UID of attribute)

The attribute option is special and refers to meta-data attributes which
have been marked as _unique_. When using this option, `attribute` must
be immediately followed by the identifier of the attribute, e.g.
"attribute:DnrLSdo4hMl".

#### Async record values import

<!--HRHIS-SECTION-ID:webapi_data_values_async_import-->

Record values can be sent and imported in an asynchronous fashion by
supplying an `async` query parameter set to _true_:

    /api/records?async=true

This will initiate an asynchronous import job for which you can monitor
the status at the task summaries API. The API response indicates the
unique identifier of the job, type of job and the URL you can use to
monitor the import job status. The response will look similar to this:

```json
{
  "httpStatus": "OK",
  "httpStatusCode": 200,
  "status": "OK",
  "message": "Initiated dataValueImport",
  "response": {
    "name": "dataValueImport",
    "id": "YR1UxOUXmzT",
    "created": "2018-08-20T14:17:28.429",
    "jobType": "DATAVALUE_IMPORT",
    "relativeNotifierEndpoint": "/api/system/tasks/DATAVALUE_IMPORT/YR1UxOUXmzT"
  }
}
```

Please read the section on _asynchronous task status_ for more
information.

### CSV record values format

<!--HRHIS-SECTION-ID:webapi_data_values_csv-->

The following section describes the CSV format used in HRHIS. The first
row is assumed to be a header row and will be ignored during import.

An example of a CSV file which can be imported into HRHIS is seen below.

```csv
"dataelement","period","orgunit","catoptcombo","attroptcombo","value","storedby","timestamp"
"DUSpd8Jq3M7","201202","gP6hn503KUX","Prlt0C1RF0s",,"7","bombali","2010-04-17"
"DUSpd8Jq3M7","201202","gP6hn503KUX","V6L425pT3A0",,"10","bombali","2010-04-17"
"DUSpd8Jq3M7","201202","OjTS752GbZE","V6L425pT3A0",,"9","bombali","2010-04-06"
```

### Generating record values set template

<!--HRHIS-SECTION-ID:webapi_data_values_template-->

To generate a record values set template for a certain data set you can use
the `/api/forms/<id>/recordValueset` resource. XML and JSON response
formats are supported. Example:

    /api/forms/BfMAe6Itzgt/recordValueset.json

The parameters you can use to further adjust the output are described
below:

### Reading record values

<!--HRHIS-SECTION-ID:webapi_reading_data_values-->

This section explains how to retrieve record values from the Web API by
interacting with the _recordValues_ resource. Record values can be
retrieved in _XML_, _JSON_ and _CSV_ format. Since we want to read data
we will use the _GET_ HTTP verb. We will also specify that we are
interested in the XML resource representation by including an `Accept`
HTTP header with our request. The following query parameters are
required:

The following response formats are supported:

- xml (application/xml)

- json (application/json)

- csv (application/csv)

- adx (application/adx+xml)

Assuming that we have posted record values to HRHIS according to the
previous section called _Sending record values_ we can now put together
our request for a single record values set and request it using cURL:

```bash
curl "https://dev.hrhis.HRHIS2udsm.org/demo/api/records?dataSet=pBOMPrpg1QX&period=201401&orgUnit=DiszpKrYNg8"
  -H "Accept:application/xml" -u admin:district
```

We can also use the start and end dates query parameters to request a
larger bulk of record values. I.e. you can also request record values for
multiple data sets and org units and a time span in order to export
larger chunks of data. Note that the period query parameter takes
precedence over the start and end date parameters. An example looks like
this:

```bash
curl "https://dev.hrhis.HRHIS2udsm.org/demo/api/records?dataSet=pBOMPrpg1QX&dataSet=BfMAe6Itzgt
  &startDate=2013-01-01&endDate=2013-01-31&orgUnit=YuQRtpLP10I&orgUnit=vWbkYPRmKyS&children=true"
  -H "Accept:application/xml" -u admin:district
```

To retrieve record values which have been created or updated within the
last 10 days you can make a request like this:

    /api/records?dataSet=pBOMPrpg1QX&orgUnit=DiszpKrYNg8&lastUpdatedDuration=10d

The response will look like this:

```xml
<?xml version='1.0' encoding='UTF-8'?>
<recordValueset xmlns="http://HRHIS.org/schema/dxf/2.0" dataSet="pBOMPrpg1QX"
  completeDate="2014-01-02" period="201401" orgUnit="DiszpKrYNg8">
<dataValue dataElement="eY5ehpbEsB7" period="201401" orgUnit="DiszpKrYNg8"
  categoryOptionCombo="bRowv6yZOF2" value="10003"/>
<dataValue dataElement="Ix2HsbDMLea" period="201401" orgUnit="DiszpKrYNg8"
  categoryOptionCombo="bRowv6yZOF2" value="10002"/>
<dataValue dataElement="f7n9E0hX8qk" period="201401" orgUnit="DiszpKrYNg8"
  categoryOptionCombo="bRowv6yZOF2" value="10001"/>
</recordValueset>
```

You can request the data in JSON format like this:

    /api/records.json?dataSet=pBOMPrpg1QX&period=201401&orgUnit=DiszpKrYNg8

The response will look something like this:

```json
{
  "dataSet": "pBOMPrpg1QX",
  "completeDate": "2014-02-03",
  "period": "201401",
  "orgUnit": "DiszpKrYNg8",
  "recordValues": [
    {
      "dataElement": "eY5ehpbEsB7",
      "categoryOptionCombo": "bRowv6yZOF2",
      "period": "201401",
      "orgUnit": "DiszpKrYNg8",
      "value": "10003"
    },
    {
      "dataElement": "Ix2HsbDMLea",
      "categoryOptionCombo": "bRowv6yZOF2",
      "period": "201401",
      "orgUnit": "DiszpKrYNg8",
      "value": "10002"
    },
    {
      "dataElement": "f7n9E0hX8qk",
      "categoryOptionCombo": "bRowv6yZOF2",
      "period": "201401",
      "orgUnit": "DiszpKrYNg8",
      "value": "10001"
    }
  ]
}
```

Note that record values are softly deleted, i.e. a deleted value has the
`deleted` property set to true instead of being permanently deleted.
This is useful when integrating multiple systems in order to communicate
deletions. You can include deleted values in the response like this:

    /api/records.json?dataSet=pBOMPrpg1QX&period=201401
      &orgUnit=DiszpKrYNg8&includeDeleted=true

You can also request data in CSV format like this:

    /api/records.csv?dataSet=pBOMPrpg1QX&period=201401
      &orgUnit=DiszpKrYNg8

The response will look like this:

```csv
dataelement,period,orgunit,catoptcombo,attroptcombo,value,storedby,lastupdated,comment,flwup
f7n9E0hX8qk,201401,DiszpKrYNg8,bRowv6yZOF2,bRowv6yZOF2,12,system,2015-04-05T19:58:12.000,comment1,false
Ix2HsbDMLea,201401,DiszpKrYNg8,bRowv6yZOF2,bRowv6yZOF2,14,system,2015-04-05T19:58:12.000,comment2,false
eY5ehpbEsB7,201401,DiszpKrYNg8,bRowv6yZOF2,bRowv6yZOF2,16,system,2015-04-05T19:58:12.000,comment3,false
FTRrcoaog83,201401,DiszpKrYNg8,bRowv6yZOF2,bRowv6yZOF2,12,system,2014-03-02T21:45:05.519,comment4,false
```

The following constraints apply to the record values sets resource:

- At least one data set must be specified.

- Either at least one period or a start date and end date must be
  specified.

- At least one organisation unit must be specified.

- Organisation units must be within the hierarchy of the organisation
  units of the authenticated user.

- Limit cannot be less than zero.

### Sending, reading and deleting individual record values

<!--HRHIS-SECTION-ID:webapi_sending_individual_data_values-->

This example will show how to send individual record values to be saved in
a request. This can be achieved by sending a _POST_ request to the
`recordValues` resource:

    /api/recordValues

The following query parameters are supported for this resource:

If any of the identifiers given are invalid, if the record value or
comment is invalid or if the data is locked, the response will contain
the _409 Conflict_ status code and descriptive text message. If the
operation leads to a saved or updated value, _200 OK_ will be returned.
An example of a request looks like this:

```bash
curl "https://dev.hrhis.HRHIS2udsm.org/demo/api/recordValues?de=s46m5MS0hxu
  &pe=201301&ou=DiszpKrYNg8&co=Prlt0C1RF0s&value=12"
  -X POST -u admin:district
```

This resource also allows a special syntax for associating the value to
an attribute option combination. This can be done by sending the
identifier of the attribute category combination, together with the identifiers
of the attribute category options which the value represents within the
combination. The category combination is specified with the `cc` parameter, while
the category options are specified as a semi-colon separated string with the `cp`
parameter. It is necessary to ensure that the category options are all part
of the category combination. An example looks like this:

```bash
curl "https://dev.hrhis.HRHIS2udsm.org/demo/api/recordValues?de=s46m5MS0hxu&ou=DiszpKrYNg8
  &pe=201308&cc=dzjKKQq0cSO&cp=wbrDrL2aYEc;btOyqprQ9e8&value=26"
  -X POST -u admin:district
```

You can retrieve a record values with a request using the _GET_ method. The
value, comment and followUp params are not applicable in this regard:

```bash
curl "https://dev.hrhis.HRHIS2udsm.org/demo/api/recordValues?de=s46m5MS0hxu
  &pe=201301&ou=DiszpKrYNg8&co=Prlt0C1RF0s"
  -u admin:district
```

You can delete a record value with a request using the _DELETE_ method.

#### Working with file record values

<!--HRHIS-SECTION-ID:datavalue_file-->

When dealing with record values which have a data element of type _file_
there is some deviation from the method described above. These data
values are special in that the contents of the value is a UID reference
to a _FileResource_ object instead of a self-contained constant. These
record values will behave just like other record values which store text
content, but should be handled differently in order to produce
meaningful input and output.

The process of storing one of these record values roughly goes like this:

1.  Upload the file to the `/api/fileResources` endpoint as described
    in the file resource section.

2.  Retrieve the `id` property of the returned _FileResource_.

3.  Store the retrieved id _as the value_ to the record values using any
    of the methods described above.

Only one-to-one relationships between record values and file resources are
allowed. This is enforced internally so that saving a file resource id
in several record values is not allowed and will return an error. Deleting
the record values will delete the referenced file resource. Direct deletion
of file resources are not possible.

The record values can now be retrieved as any other but the returned data
will be the UID of the file resource. In order to retrieve the actual
contents (meaning the file which is stored in the file resource mapped
to the record values) a GET request must be made to `/api/recordValues/files`
mirroring the query parameters as they would be for the record values
itself. The `/api/recordValues/files` endpoint only supports GET requests.

It is worth noting that due to the underlying storage mechanism working
asynchronously the file content might not be immediately ready for
download from the `/api/recordValues/files` endpoint. This is especially true
for large files which might require time consuming uploads happening in
the background to an external file store (depending on the system
configuration). Retrieving the file resource meta-data from the
`/api/fileResources/<id>` endpoint allows checking the `storageStatus`
of the content before attempting to download it.
