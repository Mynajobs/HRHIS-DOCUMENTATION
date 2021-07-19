---
id: users
title: Users
sidebar_label: Users
---

### User query

<!--HRHIS4-SECTION-ID:webapi_users_query-->

The *users* resource offers additional query parameters beyond the
standard parameters (e.g. paging). To query for users at the users
resource you can use the following parameters.

A query for max 10 users with "konan" as first name or surname (case
in-sensitive) who have a subset of authorities compared to the current
user:

    /api/users?query=konan&authSubset=true&pageSize=10

### User credentials query

<!--HRHIS4-SECTION-ID:webapi_users_credentials_query-->

An alternative to the previous user query, is to directly query the user
credentials (the part where username, etc., resides) using
*/api/userCredentials* endpoint, it supports all regular field and
object filters as the other endpoints.

Get user credentials where username is admin:

    /api/userCredentials?filter=username:eq:admin

Get username and code from all user credentials where username starts
with
    *adm*:

    /api/userCredentials?fields=username,code&filter=username:^like:adm

### User account create and update

<!--HRHIS4-SECTION-ID:webapi_users_create_update-->

Both creating and updating a user is supported through the API. The
payload itself is similar to other payloads in the API, so they
support collection references etc. A simple example payload to create
would be, the password should be sent in plain text (remember to only
use this on a SSL enabled server) and will be encrypted on the backend:

```json
{
  "id": "Mj8balLULKp",
  "firstName": "John",
  "surname": "Doe",
  "email": "johndoe@mail.com",
  "userCredentials": {
    "id": "lWCkJ4etppc",
    "userInfo": {
    "id": "Mj8balLULKp"
  },
  "username": "johndoe123",
  "password": "Your-password-123",
  "skype": "john.doe",
  "telegram": "joh.doe",
  "whatsApp": "+1-541-754-3010",
  "facebookMessenger": "john.doe",
  "avatar": {
    "id": "<fileResource id>"
  },
  "userRoles": [
    {
      "id": "Ufph3mGRmMo"
    }
  ]
  },
  "organisationUnits": [
    {
      "id": "Rp268JB6Ne4"
    }
  ],
  "userGroups": [
    {
      "id": "wl5cDMuUhmF"
    }
  ]
}
```

```bash
curl -X POST -d @u.json "http://server/api/users" -u user:pass 
  -H "Content-Type: application/json" 
```    
    
In the user creation payload, user groups are only supported when importing 
or *POSTing* a single user at a time. If you attempt to create more than one 
user while specifiying user groups, you will not recieve an error and the 
users will be created but no user groups will be assigned. This is by design 
and is limited because of the many-to-many relationship between Users and 
User Groups whereby User Groups is the owner of the relationship. To update 
or create mulitple users and their user groups, consider a program to *POST* 
one at a time, or *POST* / import all users followed by another action to 
update their user groups while specifiying the new user's identifiers.

After the user is created, a *Location* header is sent back with the
newly generated ID (you can also provide your own using /api/system/id
endpoint). The same payload can then be used to do updates, but remember
to then use *PUT* instead of *POST* and the endpoint is now
*/api/users/ID*.

```bash
curl -X PUT -d @u.json "http://server/api/users/ID" -u user:pass 
  -H "Content-Type: application/json" 
```

For more info about the full payload available, please see `/api/schemas/user`.

For more info about uploading and retrieving user avatars, please see the
`/fileResources` endpoint.

### User account invitations

<!--HRHIS4-SECTION-ID:webapi_user_invitations-->

The Web API supports inviting people to create user accounts through the
`invite` resource. To create an invitation you should POST a user in XML
or JSON format to the invite resource. A specific username can be forced
by defining the username in the posted entity. By omitting the username,
the person will be able to specify it herself. The system will send out
an invitation through email. This requires that email settings have been
properly configured. The invite resource is useful in order to securely
allow people to create accounts without anyone else knowing the password
or by transferring the password in plain text. The payload to use for
the invite is the same as for creating users. An example payload in JSON
looks like this:

```json
{
  "firstName": "John",
  "surname": "Doe",
  "email": "johndoe@mail.com",
  "userCredentials": {
    "username": "johndoe",
    "userRoles": [{
      "id": "Euq3XfEIEbx"
    }]
  },
  "organisationUnits": [ {
    "id": "ImspTQPwCqd"
  } ],
  "userGroups": [ {
    "id": "vAvEltyXGbD"
  }]
}
```

The user invite entity can be posted like this:

```bash
curl -d @invite.json "localhost/api/users/invite" -u admin:district
  -H "Content-Type:application/json" 
```

To send out invites for multiple users at the same time you must use a
slightly different format. For JSON:

```json
{
  "users": [ {
    "firstName": "John",
    "surname": "Doe",
    "email": "johndoe@mail.com",
    "userCredentials": {
      "username": "johndoe",
      "userRoles": [ {
        "id": "Euq3XfEIEbx"
      } ]
    },
    "organisationUnits": [ {
      "id": "ImspTQPwCqd"
      } ]
    }, {
    "firstName": "Tom",
    "surname": "Johnson",
    "email": "tomj@mail.com",
    "userCredentials": {
      "userRoles": [ {
        "id": "Euq3XfEIEbx"
      } ]
    },
    "organisationUnits": [ {
      "id": "ImspTQPwCqd"
      } ]
    }
  ]
}
```

To create multiple invites you can post the payload to the
api/users/invites resource like this:

```bash
curl -d @invites.json "localhost/api/users/invites" -u admin:district
  -H "Content-Type:application/json"
```

There are certain requirements for user account invitations to be sent
out:

  - Email SMTP server must be configured properly on the server.

  - The user to be invited must have specified a valid email.

  - The user to be invited must not be granted user roles with critical
    authorities (see below).

  - If username is specified it must not be already taken by another
    existing user.

If any of these requirements are not met the invite resource will return
with a *409 Conflict* status code together with a descriptive message.

The critical authorities which cannot be granted with invites include:

  - ALL

  - Scheduling administration

  - Set system settings

  - Add, update, delete and list user roles

  - Add, update, delete and view SQL views

### User replication

<!--HRHIS4-SECTION-ID:webapi_user_replication-->

To replicate a user you can use the *replica* resource. Replicating a
user can be useful when debugging or reproducing issues reported by a
particular user. You need to provide a new username and password for the
replicated user which you will use to authenticate later. Note that you
need the ALL authority to perform this action. To replicate a user you
can post a JSON payload looking like below:

```json
{
  "username": "replica",
  "password": "Replica.1234"
}
```

This payload can be posted to the replica resource, where you provide
the identifier of the user to replicate in the URL:

    /api/users/<uid>/replica

An example of replicating a user using curl looks like this:

```bash
curl -d @replica.json "localhost/api/users/N3PZBUlN8vq/replica"
  -H "Content-Type:application/json" -u admin:district
```

## Current user information and associations

<!--HRHIS4-SECTION-ID:webapi_current_user_information-->

In order to get information about the currently authenticated user and
its associations to other resources you can work with the *me* resource
(you can also refer to it by its old name *currentUser*). The current
user related resources gives your information which is useful when
building clients for instance for data entry and user management. The
following describes these resources and their purpose.

Provides basic information about the user that you are currently logged
in as, including username, user credentials, assigned organisation
units:

    /api/me

Gives information about currently unread messages and interpretations:

    /api/me/dashboard

Lists all messages and interpretations in the inbox (including replies):

    /api/me/inbox

In order to change password, this end point can be used to validate
newly entered password. Password validation will be done based on
PasswordValidationRules configured in the system. This end point support
POST and password string should be sent in POST body.

    /api/me/validatePassword

While changing password, this end point (support POST) can be used to
verify old password. Password string should be sent in POST body.

    /api/me/verifyPassword

Gives the full profile information for current user. This endpoint
support both *GET* to retrieve profile and *POST* to update profile (the
exact same format is used):

    /api/me/user-account

Returns the set of authorities granted to the current user:

    /api/me/authorization

Returns true or false, indicating whether the current user has been
granted the given `<auth>` authorization:

    /api/me/authorization/<auth>

Lists all organisation units directly assigned to the user:

    /api/me/organisationUnits

Gives all the datasets assigned to the users organisation units, and
their direct children. This endpoint contains all required information
to build a form based on one of our datasets. If you want all
descendants of your assigned organisation units, you can use the query
parameter *includeDescendants=true* :

    /api/me/dataSets

Gives all the programs assigned to the users organisation units, and
their direct children. This endpoint contains all required information
to build a form based on one of our datasets. If you want all
descendants of your assigned organisation units, you can use the query
parameter *includeDescendants=true* :

    /api/me/programs

Gives the data approval levels which are relevant to the current user:

    /api/me/dataApprovalLevels
