---
id: settings
title: Settings
sidebar_label: Settings
---

## System settings

<!--HRHIS4-SECTION-ID:webapi_system_settings-->

You can manipulate system settings by interacting with the
*systemSettings* resource. A system setting is a simple key-value pair,
where both the key and the value are plain text strings. To save or
update a system setting you can make a *POST* request to the following URL:

    /api/systemSettings/my-key?value=my-val

Alternatively, you can submit the setting value as the request body,
where content type is set to "text/plain". As an example, you can use
curl like this:

```bash
curl "dev.hrhis.dhis2udsm.org/demo/api/systemSettings/my-key" -d "My long value"
  -H "Content-Type: text/plain" -u admin:district
```

To set system settings in bulk you can send a JSON object with a
property and value for each system setting key-value pair using a POST request:

```json
{
  "keyApplicationNotification": "Welcome",
  "keyApplicationIntro": "HRHIS4",
  "keyApplicationFooter": "Read more at HRHIS4.org"
}
```

Translations for translatable Setting keys can be set by specifying locale as 
a query parameter and translated value which can be specified 
either as a query param or withing the body payload. See an example URL:

    /api/systemSettings/<my-key>?locale=<my-locale>&value=<my-translated-value> 

You should replace my-key with your real key and my-val with your real
value. To retrieve the value for a given key (in JSON or plain text) 
you can make a *GET* request to the following URL:

    /api/systemSettings/my-key

Alternatively, you can specify the key as a query parameter:

    /api/systemSettings?key=my-key

You can retrieve specific system settings as JSON by repeating the key
query parameter:

```bash
curl "dev.hrhis.dhis2udsm.org/demo/api/systemSettings?key=keyApplicationNotification&key=keyApplicationIntro"
  -u admin:district
```

You can retrieve all system settings with a GET request:

    /api/systemSettings

To retrieve a specific translation for a given translatable key you can specify 
a locale as query param:

    /api/systemSettings/<my-key>?locale=<my-locale>

If present, the translation for the given locale is returned. Otherwise, a default 
value is returned. If no locale is specified for the translatable key, the user default 
UI locale is used to fetch the correct translation. If the given translation is not 
present, again, the default value is returned.

The priority for translatable keys is the following:

    specified locale > user's default UI locale > defaut value

To delete a system setting, you can make a *DELETE* request to the URL
similar to the one used above for retrieval. If a translatable key is 
used, all present translations will be deleted as well.

To delete only a specific translation of translatable key, the same URL 
as for adding a translation should be used and the empty value should be 
provided:

    /api/systemSettings/<my-key>?locale=<my-locale>&value=

The available system settings are listed below.

## User settings

<!--HRHIS4-SECTION-ID:webapi_user_settings-->

You can manipulate user settings by interacting with the *userSettings*
resource. A user setting is a simple key-value pair, where both the key
and the value are plain text strings. The user setting will be linked to
the user who is authenticated for the Web API request. To return a list
of all user settings, you can send a *GET* request to the following URL:

    /api/userSettings

User settings not set by the user, will fall back to the equivalent
system setting. To only return the values set explicitly by the user,
you can append ?useFallback=false to the above URL, like this:

    /api/userSettings?useFallback=false

To save or update a setting for the currently authenticated user you can
make a *POST* request to the following URL:

    /api/userSettings/my-key?value=my-val

You can specify the user for which to save the setting explicitly with
this syntax:

    /api/userSettings/my-key?user=username&value=my-val

Alternatively, you can submit the setting value as the request body,
where content type is set to "text/plain". As an example, you can use
curl like this:

```bash
curl "https://dev.hrhis.dhis2udsm.org/demo/api/userSettings/my-key" -d "My long value"
  -H "Content-Type: text/plain" -u admin:district
```

As an example, to set the UI locale of the current user to French you
can use the following command.

```bash
curl "https://dev.hrhis.dhis2udsm.org/demo/api/userSettings/keyUiLocale?value=fr" 
  -X POST -u admin:district
```

You should replace my-key with your real key and my-val with your real
value. To retrieve the value for a given key in plain text you can make
a *GET* request to the following URL:

    /api/userSettings/my-key

To delete a user setting, you can make a *DELETE* request to the URL
similar to the one used above for retrieval.

The available system settings are listed below.

## Configuration

<!--HRHIS4-SECTION-ID:webapi_configuration-->

To access configuration you can interact with the *configuration*
resource. You can get XML and JSON responses through the *Accept* header
or by using the .json or .xml extensions. You can *GET* all properties
of the configuration from:

    /api/configuration

You can send *GET* and *POST* requests to the following specific
resources:

    GET /api/configuration/systemId

    GET POST DELETE /api/configuration/feedbackRecipients

    GET POST DELETE /api/configuration/offlineOrganisationUnitLevel

    GET POST /api/configuration/infrastructuralDataElements

    GET POST /api/configuration/infrastructuralIndicators

    GET POST /api/configuration/infrastructuralPeriodType

    GET POST DELETE /api/configuration/selfRegistrationRole

    GET POST DELETE /api/configuration/selfRegistrationOrgUnit

For the CORS whitelist configuration you can make a POST request with an
array of URLs to whitelist as payload using "application/json" as
content-type, for instance:

```json
["www.google.com", "www.HRHIS4.org", "www.who.int"]
```

    GET POST /api/configuration/corsWhitelist

For POST requests, the configuration value should be sent as the request
payload as text. The following table shows appropriate configuration
values for each property.

As an example, to set the feedback recipients user group you can invoke
the following curl command:

```bash
curl "localhost/api/configuration/feedbackRecipients" -d "wl5cDMuUhmF"
  -H "Content-Type:text/plain"-u admin:district
```

## Read-Only configuration service

<!--HRHIS4-SECTION-ID:webapi_readonly_configuration_interface-->

To access configuration you can now use read-only service. This service
will provide read-only access to *UserSettings, SystemSettings and HRHIS4
server configurations* You can get XML and JSON responses through the
*Accept* header. You can *GET* all settings from:

    /api/configuration/settings

You can get filtered settings based on setting type:

    GET /api/configuration/settings/filter?type=USER_SETTING

    GET /api/configuration/settings/filter?type=CONFIGURATION

More than one type can be
    provided

    GET /api/configuration/settings/filter?type=USER_SETTING&type=SYSTEM_SETTING

> **Note**
>
> Fields which are confidential will be provided in the output but without values.
