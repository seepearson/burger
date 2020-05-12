const express = require("express");
var exphbs = require("express-handlebars");
const mysql = require("mysql");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "rootroot",
  database: "burger_db"
});

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connection.threadId);
// });

// Use Handlebars to render the main index.html page with the movies in it.
// app.get("/", function(req, res) {
//     connection.query("SELECT * FROM burger;", function(err, data) {
//       if (err) {
//         return res.status(500).end();
//       }
  
//       res.render("index", { burger: data });
//     });
//   });