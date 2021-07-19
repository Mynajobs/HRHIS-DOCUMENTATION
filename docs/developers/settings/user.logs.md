---
id: logs
title: User Logs
sidebar_label: User Logs
---

## Introduction
- System users' logs and all interactions

### Get System logs for all users

<br />

`Request Endpoint`
```JS
/api/userLogs
```
<br />

`Sample Payload`

```JSON
{
  "pager": {
    "page": 1,
    "pageSize": 100,
    "pageCount": 100,
    "total": 342,
    "nextPage": "/api/userLogs?page=2"
  },
  "userLogs": [
    {
      "id": "Tdm8VRABBmT5Y",
      "time": "2021-03-03T11:12:53.387Z",
      "resource": "/api/users/logs",
      "method": "GET",
      "statuscode": "200",
      "statusname": "OK",
      "referer": {
        "host": "loadbalance",
        "accept": "*/*",
        "cookie": "sess=s%3AFRrjApjeZ3qLWmlFbqmbHfBYgab-Tlln",
        "connection": "close",
        "user-agent": "insomnia/2020.5.2"
      }
    }
  ]
}
```
<br />

### Get current user logs
<br />

`Request Endpoint`
```JS
/api/users/me/logs
```

`Sample Payload`

```JSON
{
  "id": "5849565a0256c",
  "lastUpdated": "2021-02-26T09:08:38.000Z",
  "firstName": "HRHIS",
  "surname": "HRHIS",
  "email": "hrhish@hrhis.hrhis",
  "lastLogin": "2021-02-26T09:08:38.000Z",
  "enabled": true,
  "logs": [
   {
      "id": "ieAQYKNheBeJT",
      "time": "2021-03-03T13:53:34.274Z",
      "resource": "/api/userRoles?paging=false",
      "method": "GET",
      "statuscode": "200",
      "statusname": "OK",
      "referer": {
        "host": "development",
        "accept": "application/json, text/plain, */*",
        "cookie": "sess=s%3A_ugR5i5TwfBYpeAnotjSM2Re7SIXAlPx",
        "x-real-ip": "41.59.81.88",
        "connection": "close",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
        "if-none-match": "W/\"3205-OpOj/RVAqjbsFiR8hILjUOmwIlY\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
        "x-forwarded-for": "41.59.81.88",
        "x-forwarded-proto": "https"
      }
    }
  ]
}
```

<br />

### Get logs for a specific/selected User

`Request Endpoint`
```JS
/api/users/5849565a0256c/logs
```
> Where `5849565a0256c` is the selected user ID

```JSON
{
  "id": "5849565a0256c",
  "lastUpdated": "2021-02-26T09:08:38.000Z",
  "firstName": "HRHIS",
  "surname": "HRHIS",
  "email": "hrhish@hrhis.hrhis",
  "lastLogin": "2021-02-26T09:08:38.000Z",
  "enabled": true,
  "logs": [
   {
      "id": "ieAQYKNheBeJT",
      "time": "2021-03-03T13:53:34.274Z",
      "resource": "/api/userRoles?paging=false",
      "method": "GET",
      "statuscode": "200",
      "statusname": "OK",
      "referer": {
        "host": "development",
        "accept": "application/json, text/plain, */*",
        "cookie": "sess=s%3A_ugR5i5TwfBYpeAnotjSM2Re7SIXAlPx",
        "x-real-ip": "41.59.81.88",
        "connection": "close",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
        "if-none-match": "W/\"3205-OpOj/RVAqjbsFiR8hILjUOmwIlY\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
        "x-forwarded-for": "41.59.81.88",
        "x-forwarded-proto": "https"
      }
    }
  ]
}
```

