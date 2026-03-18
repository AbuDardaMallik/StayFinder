const express = require("express");
const app = express(); // Create an Express application
const port = 8080;
const mongoose = require("mongoose"); // Import mongoose
const path = require("path"); // ai path ta require korar karon holo views folder ar public folder er path set korar jonno
const methodOverride = require("method-override"); // to use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
const ejsMate = require("ejs-mate"); // to use ejs-mate for layout support. eta use kora hoy jate amra ejs template gulo te layout use korte pari, ja code reusability baray.
const ExpressError = require("./utils/ExpressError"); // Import the custom ExpressError class
const session = require("express-session"); // to use express-session for session management
const flash = require("connect-flash"); // to use connect-flash for flash messages
const passport = require("passport"); // to use passport for authentication
// const LocalStrategy = require("passport-local"); // to use passport-local for local authentication strategy
const User = require("./models/user.js"); // Import the User model

const listingsRoutes = require("./routes/listing"); // Import listing routes
const reviewsRoutes = require("./routes/review"); // Import review routes
const userRoutes = require("./routes/user"); // Import user routes

app.engine("ejs", ejsMate); // Set up EJS-Mate as the rendering engine for EJS templates
app.set("view engine", "ejs"); // ai line ta ejs ke view engine hisabe set korar jonno
app.set("views", path.join(__dirname, "views")); // ai line ta views folder er path set korar jonno
app.use(express.static(path.join(__dirname, "public"))); // ai line ta public folder ke static files er jonno use korar jonno
app.use(express.urlencoded({ extended: true })); // to parse form data
app.use(methodOverride("_method")); // to use method-override

// app.use(express.json());

// Connect to MongoDB
main()
  .then(() => console.log("MongoDB connection established"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/airbnbDatabase");
  console.log("Connected to MongoDB");
}

// Session configuration
const sessionOptions = {
  secret: "thisshouldbeabettersecret!", // a secret key for signing the session ID cookie. eta should be a long, random string in production for security purposes.
  resave: false, // forces the session to be saved back to the session store, even if it was never modified during the request. eta false rakha hoy jate unnecessary session saves na hoy.
  saveUninitialized: true, // forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified. eta true rakha hoy jate new sessions are saved to the store, even if they haven't been modified.
  cookie: {
    httpOnly: true, // ensures the cookie is only accessible via HTTP(S) requests, not client-side scripts. eta security baray.
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // sets the expiration date of the cookie to one week from now.
    maxAge: 1000 * 60 * 60 * 24 * 7, // sets the maximum age of the cookie to one week.
  },
};

app.use(session(sessionOptions)); // Use the session middleware with the defined options
app.use(flash()); // Use the flash middleware for flash messages

// Passport configuration strategy setup
app.use(passport.initialize()); // Initialize Passport
app.use(passport.session()); // Use Passport's session handling

passport.use(User.createStrategy());

// passport.use(new LocalStrategy(User.authenticate())); // Use the local strategy for authentication, with the User model's authenticate method
passport.serializeUser(User.serializeUser()); // Serialize user instances to the session
passport.deserializeUser(User.deserializeUser()); // Deserialize user instances from the session

app.use((req, res, next) => {
  res.locals.success = req.flash("success"); // Set the success flash message to res.locals.success so it can be accessed in all views
  res.locals.error = req.flash("error"); // Set the error flash message to res.locals.error so it can be accessed in all views
  res.locals.currentUser = req.user; // Set the current user to res.locals.currentUser so it can be accessed in all views
  next();
}); // Middleware to set flash messages in res.locals for access in all views

app.use("/listings", listingsRoutes); // Use listing routes
app.use("/listings/:id/reviews", reviewsRoutes); // Use reviews routes
app.use("/", userRoutes); // Use user routes

app.get("/", (req, res) => {
  res.send("Home Page");
});

// 404 handler
app.all(/.*/, (req, res, next) => {
  next(new ExpressError("Page Not Found!", 404));
});

// error middleware
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.render("error.ejs", { err });

  // Alternatively, you can send a simple response
  // res.status(status).send(message);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
