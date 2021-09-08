const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
const passport = require("passport");
const cors = require("cors");
const { deserializeUser } = require("passport");

const app = express();

mongoose.connect("mongodb://localhost:27017/products", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());

const db = mongoose.connection;
db.on("error", console.error.bind(console, "conection error:"));
db.once("open", () => {
  console.log("database connected");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//session config
const sessionConfig = {
  secret: "superSecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

app.use(session(sessionConfig));

//Passport configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

//Routes
app.use("/user", require("./routes/usersRoutes"));
app.use("/products", require("./routes/productsRoutes"));

app.listen("3000", () => {
  console.log("SERVER IS LISTENING ON PORT 3000");
});
