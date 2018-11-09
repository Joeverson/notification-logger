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

