const HapiPino = require('hapi-pino')
const Mysql = require('./mysql')

const plugins = [HapiPino, Mysql]

module.exports = plugins;