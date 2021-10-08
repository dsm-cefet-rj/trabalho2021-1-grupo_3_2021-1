var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
var User = require('../models/users');
var passport = require('passport');
var authenticate = require('../authenticate');
const cors = require('./cors');

router.use(bodyParser.json());

router.post("/signup", cors.corsWithOptions, (req, res, next) => {
  console.log(req.body);
  User.register(
    new User({ username: req.body.userName, email: req.body.email }),
    req.body.password,
    (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({ err: err });
      } else {
        passport.authenticate("local")(req, res, () => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({ success: true, status: "Registration Successful!" });
          res.redirect("/"); //redireciona para a página principal
        });
      }
    }
  );
});
  router.route('/login').options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
  router.post('/login', cors.corsWithOptions, passport.authenticate('local'), (req, res) => {
    
    var token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({id: req.user._id, token: token});
  });
  
  router.get("/logout", (req, res, next) => {
    res.clearCookie("jwt");
    res.cookie("jwt", "", { maxAge: 1 });
    req.logout();
    res.redirect("/");
  });

  
module.exports = router;