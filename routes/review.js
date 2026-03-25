const express = require("express");
const router = express.Router({ mergeParams: true }); // to access params from parent router,
// upore { mergeParams: true } eta use kora hoy jate amra parent route theke params access korte pari and child route e use korte pari.jodi eta na use kori tahole child route e parent route er params access kora jabe na.ex. /listings/:id/reviews er khetre amra reviews router e listing er id access korte parbo na jodi mergeParams: true na use kori.and eta must jodi amra nested routes use kori.
const wrapAsync = require("../utils/wrapAsync"); // Import the wrapAsync utility function

const {
  isLoggedIn,
  isOwnerReview,
  validateReview,
} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

// Review related routes can be added here
// Create Review Route
router.get("/new", isLoggedIn, wrapAsync(reviewController.renderNewReviewForm));

// Post Review Route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createNewReview),
);

// Update and Delete Review Routes
router
  .route("/:reviewId")
  .put(
    isLoggedIn,
    isOwnerReview,
    validateReview,
    wrapAsync(reviewController.updateReview),
  )
  .delete(isLoggedIn, isOwnerReview, wrapAsync(reviewController.destroyReview));

// Edit Review Route
router.get(
  "/:reviewId/edit",
  isLoggedIn,
  isOwnerReview,
  wrapAsync(reviewController.renderEditReviewForm),
);

// // Update Review Route
// router.put(
//   "/:reviewId",
//   isLoggedIn,
//   isOwnerReview,
//   validateReview,
//   wrapAsync(reviewController.updateReview),
// );

// // Delete Review Route
// // Ai delete route er boutton ta amra review edit page e dibo
// router.delete(
//   "/:reviewId",
//   isLoggedIn,
//   isOwnerReview,
//   wrapAsync(reviewController.destroyReview),
// );

module.exports = router;
