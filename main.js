const Botloader = require('./classes/BotLoader');

const client = new Botloader();
client.start('ODQ5NjQxMTI5Mzk2Nzk3NTAy.YLeH9g.amm-qx79Q6x2gJnHpwMOy6L_0lU');

process.on('unhandledRejection', err => console.error(err));