const User = require("../database/models/user");
const passport = require("../passport");
const NodeGeocoder = require("node-geocoder");
const options = {
  provider: "google",

  // Optional depending on the providers
  httpAdapter: "https", // Default
  apiKey: "AIzaSyBwMH7UqQ979BrIAfNk316K8c6KhaSMglE", // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};
const geocoder = NodeGeocoder(options);
module.exports = function(app) {
  app.post("/user", (req, res) => {
    console.log("user signup");
    const {
      username,
      password,
      email,
      frontEnd,
      backEnd,
      city,
      usState,
      github,
      image
    } = req.body;
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        console.log("User.js post error: ", err);
      } else if (user) {
        res.json({
          error: `Sorry, already a user with the username: ${username}`
        });
      } else {
        geocoder
          .geocode(` ${city} ${usState}`)
          .then(function(response) {
            const newUser = new User({
              username: username,
              password: password,
              email: email,
              frontEnd: frontEnd,
              backEnd: backEnd,
              city: city,
              usState: usState,
              longitude: response[0].longitude,
              latitude: response[0].latitude,
              github:github,
              image:image
            });
            newUser.save((err, savedUser) => {
              if (err) return res.json(err);
              console.log(savedUser);
              response.json(savedUser);
            });
          })
          .catch(function(err) {
            console.log(err);
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
      res.status(200).json({ location: "/user/home" });
    } else {
      res.send({ msg: "no user to log out" });
    }
  });

  app.get("/user/profile", (req, res, next) => {
    console.log("profile page");
    console.log(req.user);
    if (req.user) {
      res.json({ user: req.user });
    } else {
      res.redirect("/user/login");
    }
  });
  app.get("/user/search", (req, res, next) => {
    console.log("profile page");
    console.log(req.user);
    if (req.user) {
      res.json({ user: req.user });
    } else {
      res.redirect("/user/login");
    }
  });

  app.get("/allusers", (req, res) => {
    if (req.user) {
      req.logout();
      res.status(200).json({ location: "/allusers" });
    } else {
      res.send({ msg: "no users results" });
    }
  });
};

