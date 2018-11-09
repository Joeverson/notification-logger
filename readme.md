# Install

```
npm i notification-logger
```

# Notification Logger

how instance the lib

```
const notifyLogger = new NotificationLogger({
  applicationName: 'application name' ,
  hostAPI: 'http://localhost:3000' 
})

```

# Methods

## monit
the principal method, him used by send messagens for api

```
notifyLogger.monit('you logger')

```

# structure information sent

```
POST htp://you-url<:port>/log/name-application

{
    created_at: YYYY-MM-DD HH:mm:ss,
    log: "lorem ipsu"
}
```