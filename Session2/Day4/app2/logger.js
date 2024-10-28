const eventEmitter = require('events');

const app_url = "http://localhost:8080/logger";

class Logger extends eventEmitter {
    log(message){
        console.log('The message is: '+ message);
        this.emit('message logged',{id: 1, url:"http://localhost"})
    }
}

// module.exports.log = log;
// module.exports.endpoint = app_url;
module.exports = Logger;