const express = require("express");
const db = require("./config/db");
const router_user = require("./router/userroutes");
const bodyParser = require("body-parser");
const passport = require("passport");
const route_blog = require("./router/blogroutes");
const path = require("path");

const app = express();

app.use(
  require("express-session")({
    secret: "buohnuohnuighqwdropwnmoijqninihihjikipjnioh", //decode or encode session
    resave: false,
    saveUninitialized: false,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;
db();

app.listen(PORT);
app.use("/user", router_user);
app.use("/blog", route_blog);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

