'use strict';
const hapiPino = require('hapi-pino');
const HapiPino = {
  name: 'hapiPinoPlugin',
  version: '1.0.0',
  register: async (server, options) => {
    await server.register({
      Plugin: hapiPino,
      options: {
        logEvents: ['onPostStart', 'onPostStop', 'request-error'],
        ...options,
      },
    });
  },
};


module.exports = HapiPino;