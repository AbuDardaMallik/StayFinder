const express = require("express");
const router = express.Router(); // jodi parent route theke params access korte hoy tahole { mergeParams: true } use korte hoy.akhane eta use kora hoy nai karon ekhane amra parent route theke kono param access kortesi na.
const wrapAsync = require("../utils/wrapAsync"); // Import the wrapAsync utility function
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

// index route to display all listings
router.get("/", wrapAsync(listingController.index));

// new route to display form for creating a new listing
router.get("/new", isLoggedIn, listingController.renderNewForm);

// create route to handle form submission for creating a new listing
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(listingController.createListing),
);

// edit route to display form for editing an existing listing
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm),
);

// update route to handle form submission for updating an existing listing
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(listingController.updateListing),
);

// Delete Route to handle deleting a listing.
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.destroyListing),
);

// show route to display a single listing
// ai j id variable ta a6e eta k /listings/anything er pore use korbo, nahole error dibe
router.get("/:id", wrapAsync(listingController.showListing));

module.exports = router;
