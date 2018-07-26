
const router = require("express").Router();
const db = require("../models");

const userFunctions = {
//   findAll: function(req, res) {
//     db.User.find(req.query)
//       .sort({ date: -1 })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//   create: function(req, res) {
//     db.User.create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
  update: function(req, res) {
    db.User.findOneAndUpdate({ username: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

// router.get("/api/books", bookFunctions.findAll);

// router.post("/api/books", bookFunctions.create);

// router.delete("/api/books/:id", bookFunctions.remove);

router.get("/api/users/", userFunctions.findById);

// router.patch("/api/books/:id", bookFunctions.update);
module.exports = router;