const Botloader = require('./classes/BotLoader');

const client = new Botloader();
client.start('token');

process.on('unhandledRejection', err => console.error(err));
