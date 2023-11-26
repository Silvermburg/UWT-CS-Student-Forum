// ----------------------------------------------
// TCSS 460: Autumn 2023
// Backend REST Service Module
// ----------------------------------------------
// Express is a Node.js web application framework
// that provides a wide range of APIs and methods
// Express API Reference:
// https://expressjs.com/en/resources/middleware/cors.html

// ----------------------------------------------
// retrieve necessary files (express and cors)
const express = require("express");
const cors = require("cors");
// retrieve the MySQL DB Configuration Module
const dbConnection = require("./config");
// use this library for parsing HTTP body requests
var bodyParser = require("body-parser");

// ----------------------------------------------
// (A)  Create an express application instance
//      and parses incoming requests with JSON
//      payloads
// ----------------------------------------------
var app = express(express.json);

// ----------------------------------------------
// (B)  Use the epxress cors middleware
//      Cross-origin resource sharing (CORS)
//      is a technique that restricts specified
//      resources within web page to be accessed
//      from other domains on which the origin
//      resource was initiated the HTTP request
//      Also use the bodyParser to parse in
//      format the body of HTTP Requests
// ----------------------------------------------
app.use(cors());
app.use(bodyParser.json());

// ----------------------------------------------
//EXAMPLE!!!!!!!!
// (1) Retrieve all records in population table
// root URI: http://localhost:port/
// app.get("/", (request, response) => {
//   const sqlQuery = "SELECT * FROM population;";
//   dbConnection.query(sqlQuery, (err, result) => {
//     if (err) {
//       return response
//         .status(400)
//         .json({ Error: "Error in the SQL statement. Please check." });
//     }
//     response.setHeader("SQLQuery", sqlQuery); // send a custom header attribute
//     return response.status(200).json(result);
//   });
// });

//WEBSERVICE #1: User Management Service
// Methods:
// POST: Create a new user
// GET: Retrieve user information
// PUT: Update user details
// DELETE: Delete a user account


// (1) retrieve info on a specific user
// root URI: http://localhost:port/users/:user
//
app.get("/", (request, response) => {
  const sqlQuery = "SELECT * FROM users;";
  dbConnection.query(sqlQuery, (err, result) => {
    if (err) {
      return response
        .status(400)
        .json({ Error: "Error in the SQL statement. Please check." });
    }
    response.setHeader("SQLQuery", sqlQuery); // send a custom header attribute
    return response.status(200).json(result);
  });
});

// ----------------------------------------------
// Ref: https://expressjs.com/en/4x/api.html#app
// (C)  Create a server such that it binds and
//      listens on a specified host and port.
//      We will use default host and port 3000.
app.listen(3000, () => {
  console.log("Express server is running and listening");
});
