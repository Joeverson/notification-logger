# Install

```
npm i notification-logger
```

# Notification Logger

how instance the lib

```
const notifyLogger = new NotificationLogger({
  applicationName: 'application name' ,
  version: '<version-app>'
  hostAPI: 'http://localhost:3002' 
})

```

# Methods

## monit
the principal method, him used by send messagens for api

```
notifyLogger.monit(<'you logger'> or <{message: '', data: {}}>)

```

# structure information sent

```
POST htp://you-url<:port>/log/name-application

{
    created_at: YYYY-MM-DD HH:mm:ss,
    data: "lorem ipsu"
}
```