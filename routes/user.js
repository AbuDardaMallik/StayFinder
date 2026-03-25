const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync"); // Import the wrapAsync utility function
const passport = require("passport"); // to use passport for authentication
const { saveRedirectUrl } = require("../middleware");

const userController = require("../controllers/users");

router
  .route("/signup")
  .get(userController.renderSignUpForm)
  .post(wrapAsync(userController.signup));

router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
    }),
    userController.login,
  );

// router.get("/signup", userController.renderSignUpForm);

// router.post("/signup", wrapAsync(userController.signup));

// router.get("/login", userController.renderLoginForm);

// router.post(
//   "/login",
//   saveRedirectUrl,
//   passport.authenticate("local", {
//     failureFlash: true,
//     failureRedirect: "/login",
//   }),
//   userController.login,
// );

// logout
router.get("/logout", userController.logout);

module.exports = router;
