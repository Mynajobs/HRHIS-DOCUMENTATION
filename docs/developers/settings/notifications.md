---
id: notifications
title: Notification
sidebar_label: Notification
---

## Short Message Service (SMS)

<!--HRHIS4-SECTION-ID:webapi_sms-->

This section covers the SMS Web API for sending and receiving short text
messages.

### Outbound SMS service

The Web API supports sending outgoing SMS using the POST method. SMS can
be sent to single or multiple destinations. One or more gateways need
to be configured before using the service. An SMS will not be sent if
there is no gateway configured. It needs a set of recipients and
message text in JSON format as shown below.

    /api/sms/outbound

```json
{
  "message":"Sms Text",
  "recipients": [
    "004712341234",
    "004712341235"
  ]
}
```

> **Note**
>
> Recipients list will be partitioned if the size exceeds `MAX_ALLOWED_RECIPIENTS` limit of 200.

The Web API also supports a query parameter version, but the
parameterized API can only be used for sending SMS to a single
destination.

    /api/sms/outbound?message=text&recipient=004712341234

#### Gateway response codes

Gateway may response with following response codes.

### Inbound SMS service

The Web API supports collecting incoming SMS messages using the POST
method. Incoming messages routed towards the HRHIS4 Web API can be
received using this API. The API collects inbound SMS messages and
provides it to listeners for parsing, based on the SMS content (SMS
Command). An example payload in JSON format is given below. Text,
originator, received date and sent date are mandatory parameters. The
rest are optional but the system will use the default value for these
parameters.

    /api/sms/inbound

```json
{
  "text": "sample text",
  "originator": "004712341234",
  "gatewayid": "unknown",
  "receiveddate": "2016-05-01",
  "sentdate":"2016-05-01",
  "smsencoding": "1",
  "smsstatus":"1"
}
```

The Web API also supports a query parameter-based version.

    /api/sms/inbound?message=text&originator=47XXXXXX&gateway=clickatel

### Gateway service administration

The Web API exposes resources which provide a way to configure and
update SMS gateway configurations.

The list of different gateways configured can be retrieved using a GET
method.

    GET /api/gateways

Configurations can also be retrieved for a specific gateway type using
GET method.

    GET /api/gateways/{uid}

New gateway configuraitons can be added using POST. POST api requires type request parameter and currently its value can have either one *http,bulksms,clickatell*. First added gateway will be set to default. Only one gateway is allowed to be default at one time. Default gateway can only be changed through its api. If default gateway is removed then the next one the list will automatically becomes default.

    POST /api/gateways

Configuration can be updated with by providing uid and gateway configurations as mentioned below

    PUT /api/gateways/{uids}

Configurations can be removed for specific gateway type using DELETE
method.

    DELETE /api/gateways/{uid}

Default gateway can be retrieved and updated.

    GET /api/gateways/default

Default gateway can be set using the PUT method.

    PUT /api/gateways/default/{uid}

### Gateway configuration

The Web API lets you create and update gateway configurations. For each
type of gateway there are different parameters in the JSON payload.
Sample JSON payloads for each gateway are given below. POST is used to
create and PUT to update configurations. Header parameter can be used in
case of GenericHttpGateway to send one or more parameter as http header.

#### Clickatell

```json
{
  "type" : "clickatell",
  "name" : "clickatell",
  "username": "clickatelluser",
  "authtoken": "XXXXXXXXXXXXXXXXXXXX",
  "urlTemplate": "https://platform.clickatell.com/messages"
}
```

#### Bulksms

```json
{
  "type": "bulksms",
  "name": "bulkSMS",
  "username": "bulkuser",
  "password": "abc123"
}
```
    
#### SMPP Gateway

```json
{
  "type": "smpp",
  "name": "smpp gateway2",
  "systemId": "smppclient1",
  "host": "localhost",
  "systemType": "cp",
  "numberPlanIndicator": "UNKNOWN",
  "typeOfNumber": "UNKNOWN",
  "bindType": "BIND_TX",
  "port": 2775,
  "password":"password",
  "compressed": false
}
```

#### Generic HTTP

```json
{
  "type": "http",
  "name": "Generic",
  "configurationTemplate": "{\"to\": \"${recipients}\",\"body\": \"${text}\", \"deliveryReport\":\"${deliveryReport}\"}",
  "useGet": false,
  "contentType": "APPLICATION_JSON",
  "urlTemplate":"https://samplegateway.com/messages",
  "parameters": [
    {
      "header": true,
      "encode": false,
      "key": "username",
      "value": "user_uio",
      "confidential": true
    },
    {
      "header": true,
      "encode": false,
      "key": "password",
      "value": "123abcxyz",
      "confidential": true
    },
    {
      "header": false,
      "encode": false,
      "key": "deliveryReport",
      "value": "yes",
      "confidential": false
    }
  ],
  "isDefault": false
}
```

In generic http gateway any number of parameters can be added. 

HTTP.OK will be returned if configurations are saved successfully otherwise *Error*



## Email

<!--HRHIS4-SECTION-ID:webapi_email-->

The Web API features a resource for sending emails. For emails to be
sent it is required that the SMTP configuration has been properly set up
and that a system notification email address for the HRHIS4 instance has
been defined. You can set SMTP settings from the email settings screen
and system notification email address from the general settings screen
in HRHIS4.

    /api/email

### System notification

<!--HRHIS4-SECTION-ID:webapi_email_system_notification-->

The *notification* resource lets you send system email notifications
with a given subject and text in JSON or XML. The email will be sent to
the notification email address as defined in the HRHIS4 general system
settings:

```json
{
  "subject": "Integrity check summary",
  "text": "All checks ran successfully"
}
```

You can send a system email notification by posting to the notification
resource like this:

```bash
curl -d @email.json "localhost/api/email/notification" -X POST 
  -H "Content-Type:application/json" -u admin:district
```

### Outbound emails

You can also send a general email notification by posting to the
notification resource as mentioned below. `F_SEND_EMAIL` or `ALL`
authority has to be in the system to make use of this api. Subject
parameter is optional. "DHIS 2" string will be sent as default subject
if it is not provided in url. Url should be encoded in order to use this
API.

```bash
curl "localhost/api/email/notification?recipients=xyz%40abc.com&message=sample%20email&subject=Test%20Email" 
  -X POST -u admin:district
```

### Test message

<!--HRHIS4-SECTION-ID:webapi_email_test_message-->

To test whether the SMTP setup is correct by sending a test email to
yourself you can interact with the *test* resource. To send test emails
it is required that your HRHIS4 user account has a valid email address
associated with it. You can send a test email like this:

```bash
curl "localhost/api/email/test" -X POST -H "Content-Type:application/json" -u admin:district
```

## Message conversations

<!--HRHIS4-SECTION-ID:webapi_message_conversations-->

HRHIS4 features a mechanism for sending messages for purposes such as
user feedback, notifications, and general information to users. Messages
are grouped into conversations. To interact with message conversations
you can send POST and GET request to the *messageConversations*
resource.

    /api/messageConversations

Messages are delivered to the HRHIS4 message inbox but can also be sent
to the user's email addresses and mobile phones as SMS. In this example,
we will see how we can utilize the Web API to send, read and manage
messages. We will pretend to be the *HRHIS4 Administrator* user and send
a message to the *Mobile* user. We will then pretend to be the mobile
user and read our new message. Following this, we will manage the admin
user inbox by marking and removing messages.

### Writing and reading messages

<!--HRHIS4-SECTION-ID:webapi_writing_messages-->

The resource we need to interact with when sending and reading messages
is the *messageConversations* resource. We start by visiting the Web API
entry point at <http://dev.hrhis.dhis2udsm.org/demo/api> where we find and follow
the link to the *messageConversations* resource at
<http://dev.hrhis.dhis2udsm.org/demo/api/messageConversations>. The description
tells us that we can use a POST request to create a new message using
the following XML format for sending to multiple users:

```xml
<message xmlns="http://HRHIS4.org/schema/dxf/2.0">
  <subject>This is the subject</subject>
  <text>This is the text</text>
  <users>
    <user id="user1ID" />
    <user id="user2ID" />
    <user id="user3ID" />
  </users>
</message>
```

For sending to all users contained in one or more user groups, we can
use:

```xml
<message xmlns="http://HRHIS4.org/schema/dxf/2.0">
  <subject>This is the subject</subject>
  <text>This is the text</text>
  <userGroups>
    <userGroup id="userGroup1ID" />
    <userGroup id="userGroup2ID" />
    <userGroup id="userGroup3ID" />
  </userGroups>
</message>
```

For sending to all users connected to one or more organisation units, we
can use:

```xml
<message xmlns="http://HRHIS4.org/schema/dxf/2.0">
  <subject>This is the subject</subject>
  <text>This is the text</text>
  <organisationUnits>
    <organisationUnit id="ou1ID" />
    <organisationUnit id="ou2ID" />
    <organisationUnit id="ou3ID" />
  </organisationUnits>
</message>
```

Since we want to send a message to our friend the mobile user we need to
look up her identifier. We do so by going to the Web API entry point and
follow the link to the *users* resource at `/api/users`. We continue by 
following link to the mobile user at `/api/users/PhzytPW3g2J` where we learn
that her identifier is *PhzytPW3g2J*. We are now ready to put our XML
message together to form a message where we want to ask the mobile user
whether she has reported data for January 2014:

```xml
<message xmlns="http://HRHIS4.org/schema/dxf/2.0">
  <subject>Mortality data reporting</subject>
  <text>Have you reported data for the Mortality data set for January 2014?</text>
  <users>
    <user id="PhzytPW3g2J" />
  </users>
</message>
```

To test this we save the XML content into a file called *message.xml*.
We use cURL to dispatch the message the HRHIS4 demo instance where we
indicate that the content-type is XML and authenticate as the *admin*
user:

```bash
curl -d @message.xml "https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations"
  -H "Content-Type:application/xml" -u admin:district -X POST
```

A corresponding payload in JSON and POST command looks like this:

```json
{
  "subject": "Hey",
  "text": "How are you?",
  "users": [
    {
      "id": "OYLGMiazHtW"
    },
    {
      "id": "N3PZBUlN8vq"
    }
  ],
  "userGroups": [
    {
      "id": "ZoHNWQajIoe"
    }
  ],
  "organisationUnits": [
    {
      "id": "DiszpKrYNg8"
    }
  ]
}
```

```bash
curl -d @message.json "https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations"
  -H "Content-Type:application/json" -u admin:district -X POST
```

If all is well we receive a *201 Created* HTTP status code. Also, note
that we receive a *Location* HTTP header which value informs us of the
URL of the newly created message conversation resource - this can be
used by a consumer to perform further action.

We will now pretend to be the mobile user and read the message which was
just sent by dispatching a GET request to the *messageConversations*
resource. We supply an *Accept* header with *application/xml* as the
value to indicate that we are interested in the XML resource
representation and we authenticate as the *mobile* user:

```bash
curl "https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations"
  -H "Accept:application/xml" -u mobile:district
```

In response we get the following XML:

```xml
<messageConversations xmlns="http://HRHIS4.org/schema/dxf/2.0"
  link="https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations">
  <messageConversation name="Mortality data reporting" id="ZjHHSjyyeJ2"
    link="https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations/ZjHHSjyyeJ2"/>
  <messageConversation name="HRHIS4 version 2.7 is deployed" id="GDBqVfkmnp2"
    link="https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations/GDBqVfkmnp2"/>
</messageConversations>
```

From the response, we are able to read the identifier of the newly sent
message which is *ZjHHSjyyeJ2*. Note that the link to the specific
resource is embedded and can be followed in order to read the full
message. We can reply directly to an existing message conversation once we know
the URL by including the message text as the request payload. We
are now able to construct a URL for sending our reply:

```bash
curl -d "Yes the Mortality data set has been reported"
  "https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations/ZjHHSjyyeJ2"
  -H "Content-Type:text/plain" -u mobile:district -X POST
```

If all went according to plan you will receive a *200 OK* status code.

In 2.30 we added an URL search parameter:

    queryString=?&queryOperator=?

The filter searches for matches in subject, text, and senders for message 
conversations. The default query operator is *token*, however other operators 
can be defined in the query.

### Managing messages

<!--HRHIS4-SECTION-ID:webapi_managing_messages-->

As users receive and send messages, conversations will start to pile up
in their inboxes, eventually becoming laborious to track. We will now
have a look at managing a user's messages inbox by removing and marking
conversations through the Web-API. We will do so by performing some
maintenance in the inbox of the "DHIS Administrator" user.

First, let's have a look at removing a few messages from the inbox. Be
sure to note that all removal operations described here only remove the
relation between a user and a message conversation. In practical terms
this means that we are not deleting the messages themselves (or any
content for that matter) but are simply removing the message thread from
the user such that it is no longer listed in the
`/api/messageConversations` resource.

To remove a message conversation from a users inbox we need to issue a
*DELETE* request to the resource identified by the id of the message
conversation and the participating user. For example, to remove the user
with id `xE7jOejl9FI` from the conversation with id `jMe43trzrdi`:

```bash
curl "https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations/jMe43trzrdi
```

If the request was successful the server will reply with a *200 OK*. The
response body contains an XML or JSON object (according to the accept
header of the request) containing the id of the removed user.

```json
{
  "removed" : ["xE7jOejl9FI"]
}
```

On failure the returned object will contain a message payload which
describes the error.

```json
{
  "message" : "No user with uid: dMV6G0tPAEa"
}
```

The observant reader will already have noticed that the object returned
on success in our example is actually a list of ids (containing a single
entry). This is due to the endpoint also supporting batch removals. The
request is made to the same *messageConversations* resource but follows
slightly different semantics. For batch operations, the conversation ids
are given as query string parameters. The following example removes two
separate message conversations for the current user:

```bash
curl "https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations?mc=WzMRrCosqc0&mc=lxCjiigqrJm"
  -X DELETE -u admin:district
```

If you have sufficient permissions, conversations can be removed on
behalf of another user by giving an optional user id parameter.

```bash
curl "https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations?mc=WzMRrCosqc0&mc=lxCjiigqrJm&user=PhzytPW3g2J"
  -X DELETE -u admin:district
```

As indicated, batch removals will return the same message format as for
single operations. The list of removed objects will reflect successful
removals performed. Partially erroneous requests (i.e. non-existing id)
will therefore not cancel the entire batch operation.

Messages carry a boolean *read* property. This allows tracking whether a
user has seen (opened) a message or not. In a typical application
scenario (e.g. the HRHIS4 web portal) a message will be marked read as
soon as the user opens it for the first time. However, users might want
to manage the read or unread status of their messages in order to keep
track of certain conversations.

Marking messages read or unread follows similar semantics as batch
removals, and also supports batch operations. To mark messages as read
we issue a *POST* to the `messageConversations/read` resource with a
request body containing one or more message ids. To mark messages as
unread we issue an identical request to the `messageConversations/unread` 
resource. As is the case for removals, an optional *user* request parameter 
can be given.

Let's mark a couple of messages as read by the current user:

```bash
curl "https://dev.hrhis.dhis2udsm.org/api/messageConversations/read"
  -d '["ZrKML5WiyFm","Gc03smoTm6q"]' -X POST
  -H "Content-Type: application/json" -u admin:district
```

The response is a *200 OK* with the following JSON body:

```json
{
  "markedRead": ["ZrKML5WiyFm", "Gc03smoTm6q"]
}
```

You can add recipients to an existing message conversation. The resource is located at:

    /api/messageConversations/id/recipients

The options for this resource is a list of users, user groups and
organisation units. The request should look like this:

```json
{
  "users": [
    {
      "id": "OYLGMiazHtW"
    },
    {
      "id": "N3PZBUlN8vq"
    }
  ],
  "userGroups": [
    {
      "id": "DiszpKrYNg8"
    }
  ],
  "organisationUnits": [
    {
      "id": "DiszpKrYNg8"
    }
  ]
}

```

### Message Attachments

<!--HRHIS4-SECTION-ID:webapi_message_attachments-->

Creating messages with attachments is done in two steps: uploading the
file to the *attachments* resource, and then including one or several of
the attachment IDs when creating a new message.

A POST request to the *attachments* resource will upload the file to the
server.

```
curl -F file=@attachment.png "https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations/attachments"
  -u admin:district 
```

The request returns an object that represents the attachment. The id of
this object must be used when creating a message in order to link the
attachment with the message.

```json
{
  "created": "2018-07-20T16:54:18.210",
  "lastUpdated": "2018-07-20T16:54:18.212",
  "externalAccess": false,
  "publicAccess": "--------",
  "user": {
    "name": "John Traore",
    "created": "2013-04-18T17:15:08.407",
    "lastUpdated": "2018-03-09T23:06:54.512",
    "externalAccess": false,
    "displayName": "John Traore",
    "favorite": false,
    "id": "xE7jOejl9FI"
  },
  "lastUpdatedBy": {
    "id": "xE7jOejl9FI",
    "name": "John Traore"
  },
  "favorite": false,
  "id": "fTpI4GOmujz"
}
```

When creating a new message, the ids can be passed in the request body
to link the uploaded files to the message being created.

```json
{
  "subject": "Hey",
  "text": "How are you?",
  "users": [
    {
      "id": "OYLGMiazHtW"
    },
    {
      "id": "N3PZBUlN8vq"
    }
  ],
  "userGroups": [
    {
      "id": "ZoHNWQajIoe"
    }
  ],
  "organisationUnits": [
    {
      "id": "DiszpKrYNg8"
    }
  ],
  "attachments": [
    "fTpI4GOmujz",
    "h2ZsOxMFMfq"
  ]
}
```

When replying to a message, the ids can be passed as a request
parameter.

```bash
curl -d "Yes the Mortality data set has been reported"
  "https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations/ZjHHSjyyeJ2?attachments=fTpI4GOmujz,h2ZsOxMFMfq"
  -H "Content-Type:text/plain" -u mobile:district -X POST
```

### Tickets and Validation Result Notifications

<!--HRHIS4-SECTION-ID:webapi_messaging_tickets-->

You can use the "write feedback" tool to create tickets and messages.
The only difference between a ticket and a message is that you can give
a status and a priority to a ticket. To set the status:

    POST /api/messageConversations/<uid>/status
    
To set the priority:

    POST /api/messageConversations/<uid>/priority

In 2.29, messages generated by validation analysis now also be used in
the status and priority properties. By default, messages generated by
validation analysis will inherit the priority of the validation rule in
question, or the highest importance if the message contains multiple
rules.

In 2.30, validation rules can be assigned to any user while tickets
still need to be assigned to a user in the system's feedback recipient
group.

You can also add an internal message to a ticket, which can only be seen
by users who have "Manage tickets" permissions. To create an internal
reply, include the "internal" parameter, and set it to

```bash
curl -d "This is an internal message"
  "https://dev.hrhis.dhis2udsm.org/demo/api/messageConversations/ZjHHSjyyeJ2?internal=true"
  -H "Content-Type:text/plain" -u admin:district -X POST
```
