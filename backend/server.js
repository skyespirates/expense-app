"use strict";

require("dotenv").config();
const Hapi = require("@hapi/hapi");
const plugins = require('./plugins')
const pool = require("./utils/db");

const studentRoutes = require('./routes/StudentRoute')
const expenseRoutes = require('./routes/ExpenseRoute')

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: "localhost",
  });

  await server.register(plugins)

  pool.getConnection((err, connection) => {
    if (err) throw err;
    server.logger.info("Connected to database successfully");
    connection.release();
  });

  // routes
  server.route(studentRoutes)
  server.route(expenseRoutes)

  await server.start();
  server.logger.info(`server running on port ${server.info.uri}`)
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
