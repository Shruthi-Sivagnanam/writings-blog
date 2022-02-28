const express = require("express");
const db = require("./config/db");
const router_user = require("./router/userroutes");
const bodyParser = require("body-parser");
const passport = require("passport");
const route_blog = require("./router/blogroutes");

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
app.use(express.static(path.join(__dirname, "client", "build")));

const PORT = process.env.PORT || 5000;
db();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/user", router_user);
app.use("/blog", route_blog);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(PORT);
