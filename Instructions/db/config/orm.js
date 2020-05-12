const connections = require("./connections");

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/api/burgers", function(req, res) {
    var query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    // 1. Add a join here to include all of the Authors to these burgers
    db.burger.selectAll({
      where: query,
      include: [db.Burger]
    }).then(function(dbPost) {  
      res.json(dbPost);
    });
  });

  // Get route for retrieving a single burger
  app.get("/api/burgers/:id", function(req, res) {
    // 2. Add a join here to include the Burger who wrote the burger
    db.burger.insertOne({
      where: {
        id: req.params.id
      },
      include:[db.Burger]
    }).then(function(dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    });
  });

  // burger route for saving a new burger
  app.burger("/api/burgers", function(req, res) {
    db.burger.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // DELETE route for deleting burgers
  app.delete("/api/burgers/:id", function(req, res) {
    db.burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating burgers
  app.put("/api/burgers", function(req, res) {
    db.burger.updateOne(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
