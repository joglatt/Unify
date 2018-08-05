const path = require("path");
const router = require("express").Router();
const db = require("../models");
const nodemailer = require("nodemailer");



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
    },

    email: function(req, res) {
        console.log(req.body);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'trashbin4268@gmail.com',
                pass: 'inamirrordarkly'
            }
        });

        var mailOptions = {
            from: 'trashbin4268@gmail.com',
            replyTo: req.body.replyTo,
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.message
        };

        // console.log(mailOptions);

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.status(200).json({});

    }
};

router.delete("/api/users/:id", userFunctions.remove);

router.get("/api/users/:id", userFunctions.findById);

router.get("/api/allusers/", userFunctions.findAll);

router.patch("/api/users/:id", userFunctions.update);

router.get("/api/users", userFunctions.find);

router.post("/api/user/messages", userFunctions.email);

module.exports = router;