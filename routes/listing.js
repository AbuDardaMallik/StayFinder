const express = require("express");
const router = express.Router(); // jodi parent route theke params access korte hoy tahole { mergeParams: true } use korte hoy.akhane eta use kora hoy nai karon ekhane amra parent route theke kono param access kortesi na.
const wrapAsync = require("../utils/wrapAsync"); // Import the wrapAsync utility function
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js"); // Import the Cloudinary storage configuration
const upload = multer({ storage }); // Create a Multer instance with the Cloudinary storage configuration

// // index route to display all listings and create route to handle form submission for creating a new listing
// router
//   .route("/")
//   .get(wrapAsync(listingController.index))
//   .post(
//     isLoggedIn,
//     validateListing,
//     wrapAsync(listingController.createListing),
//   );
// index route to display all listings and create route to handle form submission for creating a new listing
router.route("/").get(wrapAsync(listingController.index)).post(
  isLoggedIn,
  upload.single("image"), // Use Multer middleware to handle single file upload with the field name "image"
  validateListing,
  wrapAsync(listingController.createListing),
);

// new route to display form for creating a new listing
router.get("/new", isLoggedIn, listingController.renderNewForm);
// search route to handle search queries for listings based on location and price range
router.get("/search", wrapAsync(listingController.searchListings));

// edit route to display form for editing an existing listing, update route to handle form submission for updating an existing listing, Delete Route to handle deleting a listing and show route to display a single listing
router
  .route("/:id")
  .put(
    isLoggedIn,
    upload.single("image"), // Use Multer middleware to handle single file upload with the field name "image"
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing),
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing))
  .get(wrapAsync(listingController.showListing));
// // edit route to display form for editing an existing listing, update route to handle form submission for updating an existing listing, Delete Route to handle deleting a listing and show route to display a single listing
// router
//   .route("/:id")
//   .put(
//     isLoggedIn,
//     isOwner,
//     validateListing,
//     wrapAsync(listingController.updateListing),
//   )
//   .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing))
//   .get(wrapAsync(listingController.showListing));
// // index route to display all listings
// router.get("/", wrapAsync(listingController.index));

// // create route to handle form submission for creating a new listing
// router.post(
//   "/",
//   isLoggedIn,
//   validateListing,
//   wrapAsync(listingController.createListing),
// );

// edit route to display form for editing an existing listing
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm),
);

// // update route to handle form submission for updating an existing listing
// router.put(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   validateListing,
//   wrapAsync(listingController.updateListing),
// );

// // Delete Route to handle deleting a listing.
// router.delete(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   wrapAsync(listingController.destroyListing),
// );

// // show route to display a single listing
// // ai j id variable ta a6e eta k /listings/anything er pore use korbo, nahole error dibe
// router.get("/:id", wrapAsync(listingController.showListing));

// search route to handle search queries for listings based on location and price range

module.exports = router;
