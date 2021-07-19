---
id: reports
title: Reports
sidebar_label: Reports
---

## SQL views

<!--HRHIS4-SECTION-ID:webapi_sql_views-->

The SQL views resource allows you to create and retrieve the result set
of SQL views. The SQL views can be executed directly against the
database and render the result set through the Web API resource.

    /api/sqlViews

SQL views are useful for creating data views which may be more easily
constructed with SQL compared combining the multiple objects of the Web
API. As an example, lets assume we have been asked to provide a view of
all organization units with their names, parent names, organization unit
level and name, and the coordinates listed in the database. The view
might look something like this:

```sql
SELECT ou.name as orgunit, par.name as parent, ou.coordinates, ous.level, oul.name from organisationunit ou
INNER JOIN _orgunitstructure ous ON ou.organisationunitid = ous.organisationunitid
INNER JOIN organisationunit par ON ou.parentid = par.organisationunitid
INNER JOIN orgunitlevel oul ON ous.level = oul.level
WHERE ou.coordinates is not null
ORDER BY oul.level, par.name, ou.name
```

We will use *curl* to first execute the view on the HRHIS4 server. This
is essentially a materialization process, and ensures that we have the
most recent data available through the SQL view when it is retrieved
from the server. You can first look up the SQL view from the
api/sqlViews resource, then POST using the following command:

```bash
curl "https://dev.hrhis.dhis2udsm.org/demo/api/sqlViews/dI68mLkP1wN/execute" -X POST -u admin:district
```

The next step in the process is the retrieval of the data.The basic
structure of the URL is as follows

    http://{server}/api/sqlViews/{id}/data(.csv)

The `{server}` parameter should be replaced with your own server. The
next part of the URL `/api/sqlViews/` should be appended with the
specific SQL view identifier. Append either `data` for XML data or
`data.csv` for comma delimited values. Support response formats are
json, xml, csv, xls, html and html+css. As an example, the following
command would retrieve XML data for the SQL view defined above.

```bash
curl "https://dev.hrhis.dhis2udsm.org/demo/api/sqlViews/dI68mLkP1wN/data.csv" -u admin:district
```

There are three types of SQL views:

  - *SQL view:* Standard SQL views.

  - *Materialized SQL view:* SQL views which are materialized, meaning
    written to disk. Needs to be updated to reflect changes in
    underlying tables. Supports criteria to filter result set.

  - *SQL queries:* Plain SQL queries. Support inline variables for
    customized queries.

### Criteria

<!--HRHIS4-SECTION-ID:webapi_sql_view_criteria-->

You can do simple filtering on the columns in the result set by
appending *criteria* query parameters to the URL, using the column names
and filter values separated by columns as parameter values, on the
following format:

    /api/sqlViews/{id}/data?criteria=col1:value1&criteria=col2:value2

As an example, to filter the SQL view result set above to only return
organisation units at level 4 you can use the following
    URL:

    https://dev.hrhis.dhis2udsm.org/demo/api/sqlViews/dI68mLkP1wN/data.csv?criteria=level:4

### Variables

<!--HRHIS4-SECTION-ID:webapi_sql_view_variables-->

SQL views support variable substitution. Variable substitution is only
available for SQL view of type *query*, meaning SQL views which are not
created in the database but simply executed as regular SQL queries.
Variables can be inserted directly into the SQL query and must be on
this format:

    ${variable-key}

As an example, an SQL query that retrieves all data elements of a given
value type where the value type is defined through a variable can look
like this:

    select * from dataelement where valuetype = '${valueType}';

These variables can then be supplied as part of the URL when requested
through the *sqlViews* Web API resource. Variables can be supplied on
the following format:

    /api/sqlViews/{id}/data?var=key1:value1&var=key2:value2

An example query corresponding to the example above can look like this:

    /api/sqlViews/dI68mLkP1wN/data.json?var=valueType:int

The *valueType* variable will be substituted with the *int* value, and
the query will return data elements with int value type.

The variable parameter must contain alphanumeric characters only. The
variables must contain alphanumeric, dash, underscore and whitespace
characters only.

SQL Views of type *query* also support two system-defined variables that allow the query to access information about the user executing the view:

 | variable | means |
 | -------- | ----- |
 | ${_current_user_id} | the user's database id |
 | ${_current_username} | the user's username |

Values for these variables cannot be supplied as part of the URL. They are always filled with information about the user.

For example, the following SQL view of type *query* shows all the organisation units that are assigned to the user:

```sql
    select ou.path, ou.name
    from organisationunit ou_user
    join organisationunit ou on ou.path like ou_user.path || '%'
    join usermembership um on um.organisationunitid = ou_user.organisationunitid
    where um.userinfoid = ${_current_user_id}
    order by ou.path
```

### Filtering

<!--HRHIS4-SECTION-ID:webapi_sql_view_filtering-->

The SQL view api supports data filtering, equal to the [metadata object
filter](#webapi_metadata_object_filter). For a complete list of filter
operators you can look at the documentation for [metadata object
filter](#webapi_metadata_object_filter).

To use filters, simply add them as parameters at the end of the request
url for your SQL view like
    this:

    /api/sqlViews/w3UxFykyHFy/data.json?filter=orgunit_level:eq:2&filter=orgunit_name:ilike:bo

This request will return a result including org units with "bo" in the
name and which has org unit level 2.

The following example will return all org units with `orgunit_level` 2 or
4:

    /api/sqlViews/w3UxFykyHFy/data.json?filter=orgunit_level:in:[2,4]

And last, an example to return all org units that does not start with
"Bo"

    /api/sqlViews/w3UxFykyHFy/data.json?filter=orgunit_name:!like:Bo

## Dashboard

<!--HRHIS4-SECTION-ID:webapi_dashboard-->

The dashboard is designed to give you an overview of multiple analytical
items like maps, charts, pivot tables and reports which together can
provide a comprehensive overview of your data. Dashboards are available
in the Web API through the *dashboards* resource. A dashboard contains a
list of dashboard *items*. An item can represent a single resource, like
a chart, map or report table, or represent a list of links to analytical
resources, like reports, resources, tabular reports and users. A
dashboard item can contain up to eight links. Typically, a dashboard
client could choose to visualize the single-object items directly in a
user interface, while rendering the multi-object items as clickable
links.

    /api/dashboards

### Browsing dashboards

<!--HRHIS4-SECTION-ID:webapi_browsing_dashboards-->

To get a list of your dashboards with basic information including
identifier, name and link in JSON format you can make a *GET* request to
the following URL:

    /api/dashboards.json

The dashboards resource will provide a list of dashboards. Remember that
the dashboard object is shared so the list will be affected by the
currently authenticated user. You can retrieve more information about a
specific dashboard by following its link, similar to this:

    /api/dashboards/vQFhmLJU5sK.json

A dashboard contains information like name and creation date and an
array of dashboard items. The response in JSON format will look similar
to this response (certain information has been removed for the sake of
brevity).

```json
{
  "lastUpdated" : "2013-10-15T18:17:34.084+0000",
  "id": "vQFhmLJU5sK",
  "created": "2013-09-08T20:55:58.060+0000",
  "name": "Mother and Child Health",
  "href": "https://dev.hrhis.dhis2udsm.org/demo/api/dashboards/vQFhmLJU5sK",
  "publicAccess": "--------",
  "externalAccess": false,
  "itemCount": 17,
  "displayName": "Mother and Child Health",
  "access": {
    "update": true,
    "externalize": true,
    "delete": true,
    "write": true,
    "read": true,
    "manage": true
  },
  "user": {
    "id": "xE7jOejl9FI",
    "name": "John Traore",
    "created": "2013-04-18T15:15:08.407+0000",
    "lastUpdated": "2014-12-05T03:50:04.148+0000",
    "href": "https://dev.hrhis.dhis2udsm.org/demo/api/users/xE7jOejl9FI"
  },
  "dashboardItems": [{
    "id": "bu1IAnPFa9H",
    "created": "2013-09-09T12:12:58.095+0000",
    "lastUpdated": "2013-09-09T12:12:58.095+0000"
    }, {
    "id": "ppFEJmWWDa1",
    "created": "2013-09-10T13:57:02.480+0000",
    "lastUpdated": "2013-09-10T13:57:02.480+0000"
  }],
  "userGroupAccesses": []
}
```

A more tailored response can be obtained by specifying specific fields
in the request. An example is provided below, which would return more
detailed information about each object on a users dashboard.

    /api/dashboards/vQFhmLJU5sK/?fields=:all,dashboardItems[:all]

### Searching dashboards

<!--HRHIS4-SECTION-ID:webapi_searching_dasboards-->

When a user is building a dashboard it is convenient
to be able to search for various analytical resources using the
*/dashboards/q* resource. This resource lets you search for matches on
the name property of the following objects: charts, maps, report tables,
users, reports and resources. You can do a search by making a *GET*
request on the following resource URL pattern, where my-query should be
replaced by the preferred search query:

    /api/dashboards/q/my-query.json

For example, this query:

    /api/dashboards/q/ma?count=6&maxCount=20&max=CHART&max=MAP

Will search for the following:

* Analytical object name contains the string "ma"
* Return up to 6 of each type
* For CHART and MAP types, return up to 20 items

JSON and XML response formats are supported. The response in JSON format
will contain references to matching resources and counts of how many
matches were found in total and for each type of resource. It will look
similar to this:

```json
{
  "charts": [{
    "name": "ANC: 1-3 dropout rate Yearly",
    "id": "LW0O27b7TdD"
  }, {
    "name": "ANC: 1 and 3 coverage Yearly",
    "id": "UlfTKWZWV4u"
  }, {
    "name": "ANC: 1st and 3rd trends Monthly",
    "id": "gnROK20DfAA"
  }],
  "visualizations": [{
    "name": "ANC: ANC 3 Visits Cumulative Numbers",
    "id": "arf9OiyV7df",
    "type": "LINE"
  }, {
    "name": "ANC: 1st and 2rd trends Monthly",
    "id": "jkf6OiyV7el",
    "type": "PIVOT_TABLE"
  }],
  "maps": [{
    "name": "ANC: 1st visit at facility (fixed) 2013",
    "id": "YOEGBvxjAY0"
  }, {
    "name": "ANC: 3rd visit coverage 2014 by district",
    "id": "ytkZY3ChM6J"
  }],
  "reportTables": [{
    "name": "ANC: ANC 1 Visits Cumulative Numbers",
    "id": "tWg9OiyV7mu"
  }],
  "reports": [{
    "name": "ANC: 1st Visit Cumulative Chart",
    "id": "Kvg1AhYHM8Q"
  }, {
    "name": "ANC: Coverages This Year",
    "id": "qYVNH1wkZR0"
  }],
  "searchCount": 8,
  "chartCount": 3,
  "mapCount": 2,
  "reportTableCount": 1,
  "reportCount": 2,
  "userCount": 0,
  "patientTabularReportCount": 0,
  "resourceCount": 0
}
```

### Creating, updating and removing dashboards

<!--HRHIS4-SECTION-ID:webapi_creating_updating_removing_dashboards-->

Creating, updating and deleting dashboards follow standard REST
semantics. In order to create a new dashboard you can make a *POST*
request to the `/api/dashboards` resource. From a consumer perspective
it might be convenient to first create a dashboard and later add items
to it. JSON and XML formats are supported for the request payload. To
create a dashboard with the name "My dashboard" you can use a payload in
JSON like this:

    {
      "name": "My dashboard"
    }

To update, e.g. rename, a dashboard, you can make a *PUT* request with a
similar request payload the same api/dashboards resource.

To remove a dashboard, you can make a *DELETE* request to the specific
dashboard resource similar to this:

    /api/dashboards/vQFhmLJU5sK

### Adding, moving and removing dashboard items and content

<!--HRHIS4-SECTION-ID:webapi_adding_moving_removing_dashboard_items-->

In order to add dashboard items a consumer can use the
`/api/dashboards/<dashboard-id>/items/content` resource, where
\<dashboard-id\> should be replaced by the relevant dashboard
identifier. The request must use the *POST* method. The URL syntax and
parameters are described in detail in the following table.

A *POST* request URL for adding a chart to a specific dashboard could
look like this, where the last id query parameter value is the chart
resource
    identifier:

    /api/dashboards/vQFhmLJU5sK/items/content?type=chart&id=LW0O27b7TdD

When adding resource of type map, chart, report table and app, the API
will create and add a new item to the dashboard. When adding a resource
of type users, reports, report tables and resources, the API will try to
add the resource to an existing dashboard item of the same type. If no
item of same type or no item of same type with less than eight resources
associated with it exists, the API will create a new dashboard item and
add the resource to it.

In order to move a dashboard item to a new position within the list of
items in a dashboard, a consumer can make a *POST* request to the
following resource URL, where `<dashboard-id>` should be replaced by the
identifier of the dashboard, `<item-id>` should be replaced by the
identifier of the dashboard item and `<index>` should be replaced by the
new position of the item in the dashboard, where the index is
zero-based:

    /api/dashboards/<dashboard-id>/items/<item-id>/position/<index>

To remove a dashboard item completely from a specific dashboard a
consumer can make a *DELETE* request to the below resource URL, where
`<dashboard-id>` should be replaced by the identifier of the dashboard
and `<item-id>` should be replaced by the identifier of the dashboard
item. The dashboard item identifiers can be retrieved through a GET
request to the dashboard resource URL.

    /api/dashboards/<dashboard-id>/items/<item-id>

To remove a specific content resource within a dashboard item a consumer
can make a *DELETE* request to the below resource URL, where
`<content-resource-id>` should be replaced by the identifier of a
resource associated with the dashboard item; e.g. the identifier of a
report or a user. For instance, this can be used to remove a single
report from a dashboard item of type reports, as opposed to removing the
dashboard item completely:

    /api/dashboards/<dashboard-id>/items/<item-id>/content/<content-resource-id>

## Visualization

<!--HRHIS4-SECTION-ID:webapi_visualization-->

The Visualization API is designed to help clients to interact with charts and pivot/report tables. The endpoints of this API are used by the Data Visualization application which allows the creation, configuration and management of charts and pivot tables based on the client's definitions. The main idea is to enable clients and users to have a unique and centralized API providing all types of charts and pivot tables as well as specific parameters and configuration for each type of visualization.

This API was introduced with the expectation to unify both `charts` and `reportTables` APIs and entirely replace them in favour of the `visualizations` API (which means that the usage of `charts` and `reportTables` APIs should be avoided). In summary, the following resources/APIs:

    /api/charts, /api/reportTables

*are being replaced by*

    /api/visualizations

> **Note**
>
> New applications and clients should avoid using the `charts` and `reportTables` APIs because they are deprecated. Use the `visualizations` API instead.

A Visualization object is composed of many attributes (some of them related to charts and others related to pivot tables), but the most important ones responsible to reflect the core information of the object are: *"id", "name", "type", "dataDimensionItems", "columns", "rows" and "filters".*

The root endpoint of the API is `/api/visualizations`, and the list of current attributes and elements are described in the table below.

### Retrieving visualizations

<!--HRHIS4-SECTION-ID:webapi_visualization_retrieving_visualizations-->

To retrieve a list of all existing visualizations, in JSON format, with some basic information (including identifier, name and pagination) you can make a `GET` request to the URL below. You should see a list of all public/shared visualizations plus your private ones.

    GET /api/visualizations.json

If you want to retrieve the JSON definition of a specific Visualization you can add its respective identifier to the URL:

    GET /api/visualizations/hQxZGXqnLS9.json

The following representation is an example of a response in JSON format (for brevity, certain information has been removed). For the complete schema, please use `GET /api/schemas/visualization`.

```json
{
  "lastUpdated": "2020-02-06T11:57:09.678",
  "href": "http://my-domain/dhis/api/visualizations/hQxZGXqnLS9",
  "id": "hQxZGXqnLS9",
  "created": "2017-05-19T17:22:00.785",
  "name": "ANC: ANC 1st visits last 12 months cumulative values",
  "publicAccess": "rw------",
  "userOrganisationUnitChildren": false,
  "type": "LINE",
  "access": {},
  "reportingParams": {
    "parentOrganisationUnit": false,
    "reportingPeriod": false,
    "organisationUnit": false,
    "grandParentOrganisationUnit": false
  },
  "dataElementGroupSetDimensions": [],
  "attributeDimensions": [],
  "yearlySeries": [],
  "filterDimensions": [
    "dx"
  ],
  "columns": [
    {
      "id": "ou"
    }
  ],
  "dataElementDimensions": [],
  "categoryDimensions": [],
  "rowDimensions": [
    "pe"
  ],
  "columnDimensions": [
    "ou"
  ],
  "dataDimensionItems": [
    {
      "dataDimensionItemType": "DATA_ELEMENT",
      "dataElement": {
        "id": "fbfJHSPpUQD"
      }
    }
  ],
  "filters": [
    {
      "id": "dx"
    }
  ],
  "rows": [
    {
      "id": "pe"
    }
  ]
}
```
A more tailored response can be obtained by specifying, in the URL, the fields you want to extract. Ie.:

    GET /api/visualizations/hQxZGXqnLS9.json?fields=interpretations

will return

```json
{
  "interpretations": [
    {
      "id": "Lfr8I2RPU0C"
    },
    {
      "id": "JuwgdJlJPGb"
    },
    {
      "id": "WAoU2rSpyZp"
    }
  ]
}
```

As seen, the `GET` above will return only the interpretations related to the given identifier (in this case `hQxZGXqnLS9`).

### Creating, updating and removing visualizations

<!--HRHIS4-SECTION-ID:webapi_visualization_add_update_remove_visualizations-->

These operations follow the standard *REST* semantics. A new Visualization can be created through a `POST` request to the `/api/visualizations` resource with a valid JSON payload. An example of payload could be:

```json
{
  "columns": [
    {
      "dimension": "J5jldMd8OHv",
      "items": [
        {
          "name": "CHP",
          "id": "uYxK4wmcPqA",
          "displayName": "CHP",
          "displayShortName": "CHP",
          "dimensionItemType": "ORGANISATION_UNIT_GROUP"
        },
        {
          "name": "Hospital",
          "id": "tDZVQ1WtwpA",
          "displayName": "Hospital",
          "displayShortName": "Hospital",
          "dimensionItemType": "ORGANISATION_UNIT_GROUP"
        }
      ]
    }
  ],
  "rows": [
    {
      "dimension": "SooXFOUnciJ",
      "items": [
        {
          "name": "DOD",
          "id": "B0bjKC0szQX",
          "displayName": "DOD",
          "displayShortName": "DOD",
          "dimensionItemType": "CATEGORY_OPTION_GROUP"
        },
        {
          "name": "CDC",
          "id": "OK2Nr4wdfrZ",
          "displayName": "CDC",
          "displayShortName": "CDC",
          "dimensionItemType": "CATEGORY_OPTION_GROUP"
        }
      ]
    }
  ],
  "filters": [
    {
      "dimension": "ou",
      "items": [
        {
          "name": "Sierra Leone",
          "id": "ImspTQPwCqd",
          "displayName": "Sierra Leone",
          "displayShortName": "Sierra Leone",
          "dimensionItemType": "ORGANISATION_UNIT"
        },
        {
          "name": "LEVEL-1",
          "id": "LEVEL-H1KlN4QIauv",
          "displayName": "LEVEL-1"
        }
      ]
    }
  ],
  "name": "HIV Cases Monthly",
  "description": "Cases of HIV across the months",
  "category": "XY1vwCQskjX",
  "showDimensionLabels": true,
  "hideEmptyRows": true,
  "hideEmptyColumns": true,
  "skipRounding": true,
  "aggregationType": "SUM",
  "regressionType": "LINEAR",
  "type": "PIVOT_TABLE",
  "numberType": "VALUE",
  "measureCriteria": "Some criteria",
  "showHierarchy": true,
  "completedOnly": true,
  "displayDensity": "NORMAL",
  "fontSize": "NORMAL",
  "digitGroupSeparator": "SPACE",
  "legendDisplayStyle": "FILL",
  "legendDisplayStrategy": "FIXED",
  "hideEmptyRowItems": "BEFORE_FIRST_AFTER_LAST",
  "regression": false,
  "cumulative": true,
  "sortOrder": 1,
  "topLimit": 2,
  "rowTotals": true,
  "colTotals": true,
  "hideTitle": true,
  "hideSubtitle": true,
  "hideLegend": true,
  "showData": true,
  "baseLineLabel": "A base label",
  "targetLineLabel": "A target label",
  "targetLineValue": 45.5,
  "baseLineValue": 19.99,
  "percentStackedValues": true,
  "noSpaceBetweenColumns": true,
  "rowSubTotals": true,
  "colSubTotals": true,
  "domainAxisLabel": "A domain axis label",
  "rangeAxisLabel": "A range axis label",
  "rangeAxisMaxValue": 123.65,
  "rangeAxisMinValue": 33.89,
  "rangeAxisSteps": 5,
  "rangeAxisDecimals": 10,
  "userOrgUnitType": "TEI_SEARCH",
  "externalAccess": false,
  "publicAccess": "--------",
  "reportingParams": {
    "reportingPeriod": true,
    "organisationUnit": true,
    "parentOrganisationUnit": true,
    "grandParentOrganisationUnit": true
  },
  "parentGraphMap": {
    "ImspTQPwCqd": ""
  },
  "access": {
    "read": true,
    "update": true,
    "externalize": true,
    "delete": false,
    "write": true,
    "manage": false
  },
  "optionalAxes": [
    {
      "dimensionalItem": "fbfJHSPpUQD",
      "axis": 1
    },
    {
      "dimensionalItem": "cYeuwXTCPkU",
      "axis": 2
    }
  ],
  "relativePeriods": {
    "thisYear": false,
    "quartersLastYear": true,
    "last52Weeks": false,
    "thisWeek": false,
    "lastMonth": false,
    "last14Days": false,
    "biMonthsThisYear": false,
    "monthsThisYear": false,
    "last2SixMonths": false,
    "yesterday": false,
    "thisQuarter": false,
    "last12Months": false,
    "last5FinancialYears": false,
    "thisSixMonth": false,
    "lastQuarter": false,
    "thisFinancialYear": false,
    "last4Weeks": false,
    "last3Months": false,
    "thisDay": false,
    "thisMonth": false,
    "last5Years": false,
    "last6BiMonths": false,
    "last4BiWeeks": false,
    "lastFinancialYear": false,
    "lastBiWeek": false,
    "weeksThisYear": false,
    "last6Months": false,
    "last3Days": false,
    "quartersThisYear": false,
    "monthsLastYear": false,
    "lastWeek": false,
    "last7Days": false,
    "thisBimonth": false,
    "lastBimonth": false,
    "lastSixMonth": false,
    "thisBiWeek": false,
    "lastYear": false,
    "last12Weeks": false,
    "last4Quarters": false
  },
  "user": {},
  "yearlySeries": [
    "THIS_YEAR"
  ],
  "userGroupAccesses": [
    {
      "access": "rwx-----",
      "userGroupUid": "ZoHNWQajIoe",
      "displayName": "Bo District M&E officers",
      "id": "ZoHNWQajIoe"
    }
  ],
  "userAccesses": [
    {
      "access": "--------",
      "displayName": "John Barnes",
      "id": "DXyJmlo9rge",
      "userUid": "DXyJmlo9rge"
    }
  ],
  "legendSet": {
    "name": "Death rate up",
    "id": "ham2eIDJ9k6",
    "legends": [
      {
        "startValue": 1,
        "endValue": 2,
        "color": "red",
        "image": "some-image"
      },
      {
        "startValue": 2,
        "endValue": 3,
        "color": "blue",
        "image": "other-image"
      }
    ]
  }
}
```

To update a specific Visualization, you can send a `PUT` request to the same `/api/visualizations` resource with a similar payload `PLUS` the respective Visualization's identifier, ie.:

    PUT /api/visualizations/hQxZGXqnLS9

Finally, to delete an existing Visualization, you can make a `DELETE` request specifying the identifier of the Visualization to be removed, as shown:

    DELETE /api/visualizations/hQxZGXqnLS9
