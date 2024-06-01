'use strict';

const pool = require('../utils/db');

const mysqlPlugin = {
    name: 'mysqlPlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.app.pool = pool;

        // Decorate the server with a method to get a connection from the pool
        server.decorate('server', 'getConnection', async () => {
            return pool.getConnection();
        });

        // Decorate the request object with a method to get a connection from the pool
        server.decorate('request', 'getConnection', async (request) => {
            return pool.getConnection();
        });

        // Optionally handle connection pool errors here
        pool.on('error', (err) => {
            server.log(['error', 'database'], `Database error: ${err.message}`);
        });
    }
};

module.exports = mysqlPlugin;
