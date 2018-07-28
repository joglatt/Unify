const User = require("../database/models/user");
const passport = require("../passport");
// const controller =require( "../database/controllers/controller.js");



module.exports = function(app){

  app.post("/user", (req, res) => {
    console.log("user signup");

    const { username, password, email, frontEnd, backEnd, location } = req.body;
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        console.log("User.js post error: ", err);
      } else if (user) {
        res.json({
          error: `Sorry, already a user with the username: ${username}`
        });
      } else {
        const newUser = new User({
          username: username,
          password: password,
          email: email,
          frontEnd: frontEnd,
          backEnd: backEnd,
          location: location
        });
        newUser.save((err, savedUser) => {
          if (err) return res.json(err);
          res.json(savedUser);
        });
      }
    });
  });

  app.post(
    "/user/login",
    function(req, res, next) {
      console.log("routes/user.js, login, req.body: ");
      console.log(req.body);
      next();
    },
    passport.authenticate("local"),
    (req, res) => {
      console.log("logged in", req.user);
      var userInfo = {
        username: req.user.username
      };
      res.send(userInfo);
    }
  );

  app.get("/user/", (req, res, next) => {
    console.log("===== user!!======");
    console.log(req.user);
    if (req.user) {
      res.json({ user: req.user });
    } else {
      res.json({ user: null });
    }
  });

  app.get("/user/logout", (req, res) => {
    if (req.user) {
      req.logout();
      // res.send({ msg: "logging out" });
      res.status(200).json({location:'/user/home'})
    } else {
      res.send({ msg: "no user to log out" });
    }
  });

  app.get("/user/profile", (req, res, next) => {
    console.log("profile page")
    console.log(req.user);
    if (req.user) {
      res.json({ user: req.user });
    } else {
      res.redirect("/user/login")
    }
  });

  app.get("/allusers", (req, res) => {
    if (req.user) {
      req.logout();
      res.status(200).json({location:'/allusers'})
    } else {
      res.send({ msg: "no users results" });
    }
  });

}
