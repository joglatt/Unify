const path = require("path");
const router = require("express").Router();
const db = require("../models");

const userFunctions = {
    findAll: function (req, res) {
        db.User.find(req.query)
            .sort({date: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        db.User.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    update: function (req, res) {
        db.User.findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    remove: function (req, res) {
        db.User.findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    find: function(req, res) {
        console.log(req.query)
        db.User.find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};

router.delete("/api/users/:id", userFunctions.remove);

router.get("/api/users/:id", userFunctions.findById);

router.get("/api/allusers/", userFunctions.findAll);

router.patch("/api/users/:id", userFunctions.update);

router.get("/api/users", userFunctions.find);

module.exports = router;