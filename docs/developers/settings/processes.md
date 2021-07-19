---
id: processes
title: Processes
sidebar_label: Processes
---

## System resource

<!--HRHIS4-SECTION-ID:webapi_system_resource-->

The system resource provides you with convenient information and
functions. The system resource can be found at */api/system*.

### Generate identifiers

<!--HRHIS4-SECTION-ID:webapi_system_resource_generate_identifiers-->

To generate valid, random HRHIS4 identifiers you can do a GET request to
this resource:

    /api/system/id?limit=3

The *limit* query parameter is optional and indicates how many
identifiers you want to be returned with the response. The default is to
return one identifier. The response will contain a JSON object with an
array named codes, similar to this:

```json
{
  "codes": [
    "Y0moqFplrX4",
    "WI0VHXuWQuV",
    "BRJNBBpu4ki"
  ]
}
```

The HRHIS4 UID format has these requirements:

  - 11 characters long.

  - Alphanumeric characters only, ie. alphabetic or numeric characters
    (A-Za-z0-9).

  - Start with an alphabetic character (A-Za-z).

### View system information

<!--HRHIS4-SECTION-ID:webapi_system_resource_view_system_information-->

To get information about the current system you can do a GET request to
this URL:

    /api/system/info

JSON and JSONP response formats are supported. The system info response
currently includes the below properties.

```json
{
  contextPath: "http://yourdomain.com",
  userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/29.0.1547.62",
  version: "2.13-SNAPSHOT",
  revision: "11852",
  buildTime: "2013-09-01T21:36:21.000+0000",
  serverDate: "2013-09-02T12:35:54.311+0000",
  environmentVariable: "HRHIS4_HOME",
  javaVersion: "1.7.0_06",
  javaVendor: "Oracle Corporation",
  javaIoTmpDir: "/tmp",
  javaOpts: "-Xms600m -Xmx1500m -XX:PermSize=400m -XX:MaxPermSize=500m",
  osName: "Linux",
  osArchitecture: "amd64",
  osVersion: "3.2.0-52-generic",
  externalDirectory: "/home/dhis/config/HRHIS4",
  databaseInfo: {
    type: "PostgreSQL",
    name: "HRHIS4",
    user: "dhis",
    spatialSupport: false
  },
  memoryInfo: "Mem Total in JVM: 848 Free in JVM: 581 Max Limit: 1333",
  cpuCores: 8
}
```

> **Note**
>
> If the user who is requesting this resource does not have full authority in the system then only the first seven properties will be included, as this information is security sensitive.

To get information about the system context only, i.e. `contextPath` and
`userAgent`, you can make a GET request to the below URL. JSON and
JSONP response formats are supported:

    /api/system/context

### Check if username and password combination is correct

<!--HRHIS4-SECTION-ID:webapi_system_resource_check_username_password-->

To check if some user credentials (a username and password combination)
is correct you can make a *GET* request to the following resource using
*basic authentication*:

    /api/system/ping

You can detect the outcome of the authentication by inspecting the *HTTP
status code* of the response header. The meanings of the possible status
codes are listed below. Note that this applies to Web API requests in
general.

### View asynchronous task status

<!--HRHIS4-SECTION-ID:webapi_system_resource_view_async_task_status-->

Tasks which often take a long time to complete can be performed
asynchronously. After initiating an async task you can poll the status
through the `system/tasks` resource by supplying the task category and
the task identifier of interest.

When polling for the task status you need to authenticate as the same
user which initiated the task. The following task categories are
supported:

Each asynchronous task is automatically assigned an identifier which can
be used to monitor the status of the task. This task identifier is
returned by the API when you initiate an async task through the various
async-enabled endpoints.

#### Monitoring a task

You can poll the task status through a GET request to the system tasks
resource like this:

    /api/system/tasks/{task-category-id}/{task-id}

An example request may look like this:

    /api/system/tasks/DATAVALUE_IMPORT/j8Ki6TgreFw

The response will provide information about the status, such as the
notification level, category, time and status. The *completed* property
indicates whether the process is considered to be complete.

```json
[{
  "uid": "hpiaeMy7wFX",
  "level": "INFO",
  "category": "DATAVALUE_IMPORT",
  "time": "2015-09-02T07:43:14.595+0000",
  "message": "Import done",
  "completed": true
}]
```

#### Monitoring all tasks for a category

You can poll all tasks for a specific category through a GET request to
the system tasks resource:

    /api/system/tasks/{task-category-id}

An example request to poll for the status of data value import tasks
looks like this:

    /api/system/tasks/DATAVALUE_IMPORT

#### Monitor all tasks

You can request a list of all currently running tasks in the system with
a GET request to the system tasks resource:

    /api/system/tasks

The response will look similar to this:

```json
[{
  "EVENT_IMPORT": {},
  "DATA_STATISTICS": {},
  "RESOURCE_TABLE": {},
  "FILE_RESOURCE_CLEANUP": {},
  "METADATA_IMPORT": {},
  "CREDENTIALS_EXPIRY_ALERT": {},
  "SMS_SEND": {},
  "MOCK": {},
  "ANALYTICSTABLE_UPDATE": {},
  "COMPLETE_DATA_SET_REGISTRATION_IMPORT": {},
  "DATAVALUE_IMPORT": {},
  "DATA_SET_NOTIFICATION": {},
  "DATA_INTEGRITY": {
    "OB1qGRlCzap": [{
      "uid": "LdHQK0PXZyF",
      "level": "INFO",
      "category": "DATA_INTEGRITY",
      "time": "2018-03-26T15:02:32.171",
      "message": "Data integrity checks completed in 38.31 seconds.",
      "completed": true
    }]
  },
  "PUSH_ANALYSIS": {},
  "MONITORING": {},
  "VALIDATION_RESULTS_NOTIFICATION": {},
  "REMOVE_EXPIRED_RESERVED_VALUES": {},
  "DATA_SYNC": {},
  "SEND_SCHEDULED_MESSAGE": {},
  "DATAVALUE_IMPORT_INTERNAL": {},
  "PROGRAM_NOTIFICATIONS": {},
  "META_DATA_SYNC": {},
  "ANALYTICS_TABLE": {},
  "PREDICTOR": {}
}]
```

### View asynchronous task summaries

The task summaries resource allows you to retrieve a summary of an
asynchronous task invocation. You need to specify the category and
optionally the identifier of the task. The task identifier can be
retrieved from the response of the API request which initiated the
asynchronous task.

To retrieve the summary of a specific task you can issue a request to:

    /api/system/taskSummaries/{task-category-id}/{task-id}

An example request might look like this:

    /api/system/taskSummaries/DATAVALUE_IMPORT/k72jHfF13J1

The response will look similar to this:

```json
{
  "responseType": "ImportSummary",
  "status": "SUCCESS",
  "importOptions": {
    "idSchemes": {},
    "dryRun": false,
    "async": true,
    "importStrategy": "CREATE_AND_UPDATE",
    "mergeMode": "REPLACE",
    "reportMode": "FULL",
    "skipExistingCheck": false,
    "sharing": false,
    "skipNotifications": false,
    "datasetAllowsPeriods": false,
    "strictPeriods": false,
    "strictCategoryOptionCombos": false,
    "strictAttributeOptionCombos": false,
    "strictOrganisationUnits": false,
    "requireCategoryOptionCombo": false,
    "requireAttributeOptionCombo": false,
    "skipPatternValidation": false
  },
  "description": "Import process completed successfully",
  "importCount": {
    "imported": 0,
    "updated": 431,
    "ignored": 0,
    "deleted": 0
  },
  "dataSetComplete": "false"
}
```

You might also retrieve import summaries for multiple tasks of a
specific category with a request like
this:

    /api/system/taskSummaries/{task-category-id}

### Get appearance information

<!--HRHIS4-SECTION-ID:webapi_system_resource_get_appearance_information-->

You can retrieve the available flag icons in JSON format with a GET
request:

    /api/system/flags

You can retrieve the available UI styles in JSON format with a GET
request:

    /api/system/styles

## Scheduling

<!--HRHIS4-SECTION-ID:webapi_scheduling-->

HRHIS4 allows for scheduling of jobs of various types. Each type of job has different properties for configuration, giving you finer control over how jobs are run. In addition, you can configure the same job to run with different configurations and at different intervals if required.

### Get available job types

To get a list of all available job types you can use the following endpoint:

	GET /api/jobConfigurations/jobTypes

The response contains information about each job type including name, job type, key, scheduling type and available parameters. The scheduling type can either be `CRON`, meaning jobs can be scheduled using a cron expression with the `cronExpression` field, or `FIXED_DELAY`, meaning jobs can be scheduled to run with a fixed delay in between with the `delay` field. The field delay is given in seconds. 

A response will look similar to this:

```json
{
  "jobTypes": [
    {
      "name": "Data integrity",
      "jobType": "DATA_INTEGRITY",
      "key": "dataIntegrityJob",
      "schedulingType": "CRON"
    }, {
      "name": "Resource table",
      "jobType": "RESOURCE_TABLE",
      "key": "resourceTableJob",
      "schedulingType": "CRON"
    }, {
      "name": "Continuous analytics table",
      "jobType": "CONTINUOUS_ANALYTICS_TABLE",
      "key": "continuousAnalyticsTableJob",
      "schedulingType": "FIXED_DELAY"
    }
  ]
}
```

### Create job

To configure jobs you can do a POST request to the following resource:

    /api/jobConfigurations

A job without parameters in JSON format looks like this :

```json
{
  "name": "",
  "jobType": "JOBTYPE",
  "cronExpression": "0 * * ? * *",
}
```

An example of an analytics table job with parameters in JSON format:

```json
{
  "name": "Analytics tables last two years",
  "jobType": "ANALYTICS_TABLE",
  "cronExpression": "0 * * ? * *",
  "jobParameters": {
    "lastYears": "2",
    "skipTableTypes": [],
    "skipResourceTables": false
  }
}
```

As example of a push analysis job with parameters in JSON format:

```json
{
   "name": "Push anlysis charts",
   "jobType": "PUSH_ANALYSIS",
   "cronExpression": "0 * * ? * *",
   "jobParameters": {
     "pushAnalysis": [
       "jtcMAKhWwnc"
     ]
    }
 }
```

An example of a job with scheduling type `FIXED_DELAY` and 120 seconds delay:

```json
{
  "name": "Continuous analytics table",
  "jobType": "CONTINUOUS_ANALYTICS_TABLE",
  "delay": "120",
  "jobParameters": {
    "fullUpdateHourOfDay": 4
  }
}
```

### Get jobs

List all job configurations:

    GET /api/jobConfigurations

Retrieve a job:

    GET /api/jobConfigurations/{id}

The response payload looks like this:

```json
{
  "lastUpdated": "2018-02-22T15:15:34.067",
  "id": "KBcP6Qw37gT",
  "href": "http://localhost:8080/api/jobConfigurations/KBcP6Qw37gT",
  "created": "2018-02-22T15:15:34.067",
  "name": "analytics last two years",
  "jobStatus": "SCHEDULED",
  "displayName": "analytics last two years",
  "enabled": true,
  "externalAccess": false,
  "jobType": "ANALYTICS_TABLE",
  "nextExecutionTime": "2018-02-26T03:00:00.000",
  "cronExpression": "0 0 3 ? * MON",
  "jobParameters": {
    "lastYears": 2,
    "skipTableTypes": [],
    "skipResourceTables": false
  },
  "favorite": false,
  "configurable": true,
  "access": {
    "read": true,
    "update": true,
    "externalize": true,
    "delete": true,
    "write": true,
    "manage": true
  },
  "lastUpdatedBy": {
    "id": "GOLswS44mh8"
  },
  "favorites": [],
  "translations": [],
  "userGroupAccesses": [],
  "attributeValues": [],
  "userAccesses": []
}
```

### Update job

Update a job with parameters using the following endpoint and JSON payload format:

    PUT /api/jobConfiguration/{id}

```json
{
  "name": "analytics last two years",
  "enabled": true,
  "cronExpression": "0 0 3 ? * MON",
  "jobType": "ANALYTICS_TABLE",
  "jobParameters": {
    "lastYears": "3",
    "skipTableTypes": [],
    "skipResourceTables": false
  }
}
```

### Delete job

Delete a job using:

    DELETE /api/jobConfiguration/{id}

Note that some jobs with custom configuration parameters may not be added if the
required system settings are not configured. An example of this is data
synchronization, which requires remote server configuration.
