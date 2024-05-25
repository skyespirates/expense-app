"use strict";

require("dotenv").config();
const Hapi = require("@hapi/hapi");
const pool = require("./utils/db");
const studentRoutes = require('./routes/StudentRoute')

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: "localhost",
  });

  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected to database successfully");
    connection.release();
  });

  server.route(studentRoutes)

//   server.route({
//     method: "GET",
//     path: "/",
//     handler: async (request, h) => {
//       try {
//         const sql = "SELECT * FROM student WHERE id = ?";
//         const values = [1];
//         const [rows, _] = await pool.execute(sql, values);
//         return h.response(rows);
//       } catch (error) {
//         console.error("An error occurred:", error);
//         return h.response("Internal Server Error").code(500);
//       }
//     },
//   });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
