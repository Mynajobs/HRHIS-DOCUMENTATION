---
id: basics
title: Introduction
sidebar_label: Introduction
---

# Web API

<!--HRHIS4-SECTION-ID:webapi-->

The Web API is a component which makes it possible for external systems
to access and manipulate data stored in an instance of HRHIS4. More
precisely, it provides a programmatic interface to a wide range of
exposed data and service methods for applications such as third-party
software clients, web portals and internal HRHIS4 modules.

## Introduction

<!--HRHIS4-SECTION-ID:webapi_introduction-->

The Web API adheres to many of the principles behind the REST
architectural style. To mention some few and important ones:

1.  The fundamental building blocks are referred to as *resources*. A
    resource can be anything exposed to the Web, from a document to a
    business process - anything a client might want to interact with.
    The information aspects of a resource can be retrieved or exchanged
    through resource *representations*. A representation is a view of a
    resource's state at any given time. For instance, the *reportTable*
    resource in HRHIS4 represents a tabular report of aggregated data for
    a certain set of parameters. This resource can be retrieved in a
    variety of representation formats including HTML, PDF, and MS Excel.

2.  All resources can be uniquely identified by a *URI* (also referred
    to as *URL*). All resources have a default representation. You can
    indicate that you are interested in a specific representation by
    supplying an *Accept* HTTP header, a file extension or a *format*
    query parameter. So in order to retrieve the PDF representation of a
    report table you can supply an *Accept: application/pdf* header or
    append *.pdf* or *?format=pdf* to your request URL.

3.  Interactions with the API requires the correct use of HTTP *methods* or
    *verbs*. This implies that for a resource you must issue a *GET*
    request when you want to retrieve it, *POST* request when you want
    to create one, *PUT* when you want to update it and *DELETE* when
    you want to remove it. So if you want to retrieve the default
    representation of a report table you can send a GET request to e.g.
    */reportTable/iu8j/hYgF6t*, where the last part is the report table
    identifier.

4.  Resource representations are *linkable*, meaning that
    representations advertise other resources which are relevant to the
    current one by embedding links into itself (please be aware that you
    need to request *href* in your field filter to have this working.
    This feature greatly improves the usability and robustness of the
    API as we will see later. For instance, you can easily navigate to
    the indicators which are associated with a report table from the
    *reportTable* resource through the embedded links using your
    preferred representation format.

While all of this might sound complicated, the Web API is actually very
simple to use. We will proceed with a few practical examples in a
minute.

## Authentication

<!--HRHIS4-SECTION-ID:webapi_authentication-->

The HRHIS4 Web API supports two protocols for authentication, Basic
Authentication and OAuth 2. You can verify and get information about the
currently authenticated user by making a GET request to the following
URL:

    /api/me


### Basic Authentication

<!--HRHIS4-SECTION-ID:webapi_basic_authentication-->

The HRHIS4 Web API supports *Basic authentication*. Basic authentication
is a technique for clients to send login credentials over HTTP to a web
server. Technically speaking, the username is appended with a colon and
the password, Base64-encoded, prefixed Basic and supplied as the value
of the *Authorization* HTTP header. More formally that is:

    Authorization: Basic base64encode(username:password)
    
Most network-aware development environments provide support for Basic 
authentication, such as *Apache HttpClient* and *Spring RestTemplate*. 
An important note is that this authentication scheme provides no security 
since the username and password are sent in plain text and can be easily 
observed by an attacker. Using Basic is recommended only if the server is 
using SSL/TLS (HTTPS) to encrypt communication with clients. Consider this 
a hard requirement in order to provide secure interactions with the Web 
API.

### OAuth2

<!--HRHIS4-SECTION-ID:webapi_oauth2-->

HRHIS4 supports the *OAuth2* authentication protocol. OAuth2 is an open
standard for authorization which allows third-party clients to
connect on behalf of a HRHIS4 user and get a reusable *bearer token* for
subsequent requests to the Web API. HRHIS4 does not support fine-grained
OAuth2 roles but rather provides applications access based on user roles
of the HRHIS4 user.

#### Adding a client using the Web API

An OAuth2 client can be added through the Web API. As an example, we can
send a payload like this:

```json
{
  "name": "OAuth2 Demo Client",
  "cid": "demo",
  "secret": "1e6db50c-0fee-11e5-98d0-3c15c2c6caf6",
  "grantTypes": [
    "password",
    "refresh_token",
    "authorization_code"
  ],
  "redirectUris": [
    "http://www.example.org"
  ]
}
```

The payload can be sent with the following command:

```bash
SERVER="https://dev.hrhis.dhis2udsm.org"
curl -X POST -H "Content-Type: application/json" -d @client.json
  -u admin:district "$SERVER/api/oAuth2Clients"
```

We will use this client as the basis for our next grant type examples.

#### Grant type password

<!--HRHIS4-SECTION-ID:webapi_oauth2_password-->

The simplest of all grant types is the *password* grant type. This
grant type is similar to basic authentication in the sense that it
requires the client to collect the user's username and password. As an
example we can use our demo server:

```bash
SERVER="https://dev.hrhis.dhis2udsm.org"
SECRET="1e6db50c-0fee-11e5-98d0-3c15c2c6caf6"

curl -X POST -H "Accept: application/json" -u demo:$SECRET "$SERVER/uaa/oauth/token"
  -d grant_type=password -d username=admin -d password=district
```

This will give you a response similar to this:

```json
{
  "expires_in": 43175,
  "scope": "ALL",
  "access_token": "07fc551c-806c-41a4-9a8c-10658bd15435",
  "refresh_token": "a4e4de45-4743-481d-9345-2cfe34732fcc",
  "token_type": "bearer"
}
```

For now, we will concentrate on the `access_token`, which is what we
will use as our authentication (bearer) token. As an example, we will get
all data elements using our token:

```bash
SERVER="https://dev.hrhis.dhis2udsm.org"
curl -H "Authorization: Bearer 07fc551c-806c-41a4-9a8c-10658bd15435" "$SERVER/api/fields"
```

#### Grant type refresh\_token

<!--HRHIS4-SECTION-ID:webapi_refresh_token-->

In general the access tokens have limited validity. You can have a look
at the `expires_in` property of the response in the previous example
to understand when a token expires. To get a fresh `access_token` you
can make another round trip to the server and use `refresh_token`
which allows you to get an updated token without needing to ask for the
user credentials one more time.

```bash
SERVER="https://dev.hrhis.dhis2udsm.org"
SECRET="1e6db50c-0fee-11e5-98d0-3c15c2c6caf6"
REFRESH_TOKEN="a4e4de45-4743-481d-9345-2cfe34732fcc"

curl -X POST -H "Accept: application/json" -u demo:$SECRET "$SERVER/uaa/oauth/token"
  -d "grant_type=refresh_token" -d "refresh_token=$REFRESH_TOKEN"
```

The response will be exactly the same as when you get a token to start with.

#### Grant type authorization_code

<!--HRHIS4-SECTION-ID:webapi_authorization_code-->

Authorized code grant type is the recommended approach if you don't want
to store the user credentials externally. It allows HRHIS4 to collect the
username/password directly from the user instead of the client
collecting them and then authenticating on behalf of the user. Please be
aware that this approach uses the `redirectUris` part of the client
payload.

Step 1: Visit the following URL using a web browser. If you have more than one
redirect URIs, you might want to add `&redirect_uri=http://www.example.org` 
to the URL:

```bash
SERVER="https://dev.hrhis.dhis2udsm.org"
$SERVER/uaa/oauth/authorize?client_id=demo&response_type=code
```

Step 2: After the user has successfully logged in and accepted your
client access, it will redirect back to your redirect uri like this:

    http://www.example.org/?code=XYZ

Step 3: This step is similar to what we did in the password grant type,
using the given code, we will now ask for an access token:

```bash
SERVER="https://dev.hrhis.dhis2udsm.org"
SECRET="1e6db50c-0fee-11e5-98d0-3c15c2c6caf6"

curl -X POST -u demo:$SECRET -H "Accept: application/json" $SERVER/uaa/oauth/token
-d "grant_type=authorization_code" -d "code=XYZ"
```

## Error and info messages

<!--HRHIS4-SECTION-ID:webapi_error_info_messages-->

The Web API uses a consistent format for all error/warning and
informational messages:

```json
{
  "httpStatus": "Forbidden",
  "message": "You don't have the proper permissions to read objects of this type.",
  "httpStatusCode": 403,
  "status": "ERROR"
}
```

Here we can see from the message that the user tried to access a
resource I did not have access to. It uses the http status code 403, the
http status message *forbidden* and a descriptive message.

## Date and period format

<!--HRHIS4-SECTION-ID:webapi_date_perid_format-->

Throughout the Web API, we refer to dates and periods. The date format
is:

    yyyy-MM-dd

For instance, if you want to express March 20, 2014, you must use
*2014-03-20*.

The period format is described in the following table (also available on
the API endpoint `/api/periodTypes`)


### Relative Periods

<!--HRHIS4-SECTION-ID:webapi_date_relative_period_values-->


In some parts of the API, like for the analytics resource, you can
utilize relative periods in addition to fixed periods (defined above).
The relative periods are relative to the current date and allow e.g.
for creating dynamic reports. The available relative period values are:

    THIS_WEEK, LAST_WEEK, LAST_4_WEEKS, LAST_12_WEEKS, LAST_52_WEEKS,
    THIS_MONTH, LAST_MONTH, THIS_BIMONTH, LAST_BIMONTH, THIS_QUARTER, LAST_QUARTER,
    THIS_SIX_MONTH, LAST_SIX_MONTH, MONTHS_THIS_YEAR, QUARTERS_THIS_YEAR,
    THIS_YEAR, MONTHS_LAST_YEAR, QUARTERS_LAST_YEAR, LAST_YEAR, LAST_5_YEARS, LAST_12_MONTHS,
    LAST_3_MONTHS, LAST_6_BIMONTHS, LAST_4_QUARTERS, LAST_2_SIXMONTHS, THIS_FINANCIAL_YEAR,
    LAST_FINANCIAL_YEAR, LAST_5_FINANCIAL_YEARS

## Identifier schemes

<!--HRHIS4-SECTION-ID:webapi_identifier_schemes-->

This section provides an explanation of the identifier scheme concept.
Identifier schemes are used to map metadata objects to other metadata
during import, and to render metadata as part of exports. Please note
that not all schemes work for all API calls, and not all
schemes can be used for both input and output. This is outlined in the
sections explaining the various Web APIs.

The full set of identifier scheme object types available are listed
below, using the name of the property to use in queries:

  - idScheme

  - dataElementIdScheme

  - categoryOptionComboIdScheme

  - orgUnitIdScheme

  - programIdScheme

  - programStageIdScheme

  - trackedEntityIdScheme

  - trackedEntityAttributeIdScheme

The general idScheme applies to all types of objects. It can be
overridden by specific object types.

The default scheme for all parameters is UID (stable HRHIS4
identifiers). The supported identifier schemes are described in the
table below.

Note that identifier schemes is not an independent feature but needs to
be used in combination with resources such as data value import and metadata import.

As an example, to specify CODE as the general id scheme and override
with UID for organisation unit id scheme you can use these query
parameters:

    ?idScheme=CODE&orgUnitIdScheme=UID

As another example, to specify an attribute for the organisation unit id
scheme, code for the data element id scheme and use the default UID id
scheme for all other objects you can use these parameters:

    ?orgUnitIdScheme=ATTRIBUTE:j38fk2dKFsG&dataElementIdScheme=CODE

## Browsing the Web API

<!--HRHIS4-SECTION-ID:webapi_browsing_the_web_api-->

The entry point for browsing the Web API is `/api`. This resource
provides links to all available resources. Four resource representation
formats are consistently available for all resources: HTML, XML, JSON, 
and JSONP. Some resources will have other formats available, like MS
Excel, PDF, CSV, and PNG. To explore the API from a web browser, navigate
to the `/api` entry point and follow the links to your desired
resource, for instance `/api/dataElements`. For all resources which
return a list of elements certain query parameters can be used to modify
the response:

You can get specific pages and page sizes of objects like this:

    /api/fields.json?page=2&pageSize=20

You can completely disable paging like this:

    /api/fieldGroups.json?paging=false

<!-- To order the result based on a specific property:

    /api/indicators.json?order=shortName:desc -->

## Metadata object filter

<!--HRHIS4-SECTION-ID:webapi_metadata_object_filter-->

To filter the metadata there are several filter operations that can be
applied to the returned list of metadata. The format of the filter
itself is straight-forward and follows the pattern
*property:operator:value*, where *property* is the property on the
metadata you want to filter on, *operator* is the comparison operator
you want to perform and *value* is the value to check against (not all
operators require value). Please see the *schema* section to discover
which properties are available. Recursive filtering, ie. filtering on
associated objects or collection of objects, is supported as well.

Operators will be applied as logical *and* query, if you need a *or*
query, you can have a look at our *in* filter (also have a look at the
section below). The filtering mechanism allows for recursion. See below
for some examples.

Get data elements with id property ID1 or ID2:

    /api/fields?filter=id:eq:ID1&filter=id:eq:ID2

Get all data elements which have the dataSet with id ID1:

    /api/fields?filter=form.id:eq:ID1

Get all data elements with aggregation operator "sum" and value type
"int":

    /api/fields.json?filter=name:eq:first_appointment&filter=datatype:eq:Integer

You can do filtering within collections, e.g. to get data elements which
are members of the "ANC" data element group you can use the following
query using the id property of the associated data element groups:

    /api/dataElements.json?filter=dataElementGroups.id:eq:qfxEYY9xAl6

Since all operators are *and* by default, you can't find a data
element matching more than one id, for that purpose you can use the *in*
operator.

    /api/dataElements.json?filter=id:in:[fbfJHSPpUQD,cYeuwXTCPkU]

## Metadata field filter

<!--HRHIS4-SECTION-ID:webapi_metadata_field_filter-->

In many situations, the default views of the metadata can be too
verbose. A client might only need a few fields from each object and want
to remove unnecessary fields from the response. To discover which fields
are available for each object please see the *schema* section.

The format for include/exclude allows for infinite recursion. To filter 
at the "root" level you can just use the name of the field, 
i.e. `?fields=id,name` which would only display the `id` and
`name` fields for every object. For objects that are either collections or
complex objects with properties on their own, you can use the format
`?fields=id,name,forms[id,name]` which would return `id`, `name` of
the root, and the `id` and `name` of every data set on that object.
Negation can be done with the exclamation operator, and we have a set of
presets of field select. Both XML and JSON are supported.

**Example**: Get `id` and `name` on the indicators resource:

    /api/indicators?fields=id,name

**Example**: Get `id` and `name` from dataElements, and `id` and `name`
from the dataSets on dataElements:

    /api/fields?fields=id,name,forms[id,name]

To exclude a field from the output you can use the exclamation `!`
operator. This is allowed anywhere in the query and will simply not
include that property as it might have been inserted in some of the
presets.

A few presets (selected fields groups) are available and can be applied
using the `:` operator.

**Example**: Include all fields from dataSets except organisationUnits:

    /api/forms?fields=:all,!organisationUnits

**Example**: Include only id, name and the collection of organisation units from a data set, but exclude the id from organisation units:

    /api/forms/BfMAe6Itzgt?fields=id,name,organisationUnits[:all,!id]

**Example**: Include nameable properties from all indicators:

    /api/indicators.json?fields=:nameable

## Metadata create, read, update, delete, validate

<!--HRHIS4-SECTION-ID:webapi_metadata_crud-->

All metadata entities in HRHIS4 have their own API endpoint which supports
*CRUD* operations (create, read, update and delete). The endpoint URLs
follows this format:

    /api/<entityName>
    
The _entityName_ uses the camel-case notation. As an example, the endpoint
for _fields_ is:

    /api/dataEfieldslements

### Create / update parameters

<!--HRHIS4-SECTION-ID:webapi_metadata_create_update-->

The following request query parameters are available across all metadata endpoints.

### Creating and updating objects

<!--HRHIS4-SECTION-ID:webapi_creating_updating_objects-->

For creating new objects you will need to know the endpoint, the type
format, and make sure that you have the required authorities. As an
example, we will create and update a *field*.

```bash
curl -d @field.json "http://server/api/fields" -X POST
  -H "Content-Type: application/json" -u user:password
```

A specific example of posting the constant to the demo
    server:

```bash
curl -d @field.json "https://dev.hrhis.dhis2udsm.org/api/fields" -X POST
  -H "Content-Type: application/json" -u admin:district
```

If everything went well, you should see an output similar to the object of the field that was created.

```json
{
  "id":"5289e934af5c4",
  "created":"2013-11-18T10:17:24.000Z",
  "lastUpdated":"2013-11-18T10:17:24.000Z",
  "name":"hosp_Superlative_Post",
  "description":"",
  "caption":"Hospital Superlative Post",
  "compulsory":true,
  "isUnique":false,
  "isCalculated":false,
  "hasHistory":false,
  "datatype":"String",
  "fieldOptions":[]
}
```

The process will be exactly the same for updating, you make your changes
to the JSON payload, find out the *ID* of the field, and then
send a PUT request to the endpoint including ID:

```bash
curl -X PUT -d @pi.json -H "Content-Type: application/json"
  -u user:password "http://server/api/fields/ID"
```

### Deleting objects

<!--HRHIS4-SECTION-ID:webapi_deleting_objects-->

Deleting objects is very straight forward, you will need to know the
*ID* and the endpoint of the type you want to delete, let's continue our
example from the last section and use a *field*. Let's assume that
the id is *abc123*, then all you need to do is the send the DELETE
request to the endpoint + id:

```bash
curl -X DELETE -u user:password "http://server/api/fields/ID"
```

A successful delete should return HTTP status 204 (no content).

## Forms

<!--HRHIS4-SECTION-ID:webapi_forms-->

To retrieve information about a form (which corresponds to a data set
and its sections) you can interact with the `form` resource. The form
response is accessible as XML and JSON and will provide information
about each section (group) in the form as well as each field in the
sections, including labels and identifiers. By supplying period and
organisation unit identifiers the form response will be populated with
data values.

To retrieve the form for a data set you can do a GET request like this:

    /api/forms/<form-id>

When it comes to custom data entry forms, this resource also allows for
creating such forms directly for a data set. This can be done through a
POST or PUT request with content type text/html where the payload is the
custom form markup such as:

```bash
curl -d @form.html "localhost/api/forms/BfMAe6Itzgt"
  -H "Content-Type:text/html" -u admin:district -X PUT
```