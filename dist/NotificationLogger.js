const axios = require('axios');
const moment = require('moment');

export default class NotificationLogger {
  constructor({ ...options }) {   
    Object.assign(this, options)

    this.http = axios.create({
      baseURL: options.hostAPI,
      params: {
        version: this.version
      }
    })
  }

  /**
   * Insert the log for send to API
   * 
   * @param {String} log 
   */
  monit(data) {
    this.send({
      created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
      data
    });
  }

  send(data) {
    axios.post(`/log/${this.applicationName}`, data).catch(err => console.log(err.message));
  }
}