const User = require("../models/usermodel");
const Blog = require("../models/blogmodel");
const passport = require("passport");
const passportLocal = require("passport-local");

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
const localStrategy = passportLocal.Strategy;
passport.use(new localStrategy(User.authenticate()));

const signup = (req, res) => {
  User.register(
    new User({
      email: req.body.email,
      username: req.body.username,
    }),
    req.body.password,
    (err, user) => {
      if (err) res.send("Already exists!");
      else {
        passport.authenticate("local")(req, res, () => {
          res.send(user);
        });
      }
    }
  );
};

const login = (req, res) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No such user exists");
    else {
      req.logIn(user, (err) => {
        if (err) res.send("Wrong Input");
        res.send(user);
      });
    }
  })(req, res);
};
const logout = (req, res) => {
  req.logout();
  res.send("logged out successfully!!");
};
const update_profile = (req, res) => {
  const id = req.body.id;
  User.findByIdAndUpdate(id, { username: req.body.username }, { new: true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send("fail");
    });
  Blog.updateMany({ user_id: id }, { username: req.body.username })
    .then((result) => {})
    .catch((err) => {});
};

module.exports = { signup, login, logout, update_profile };
