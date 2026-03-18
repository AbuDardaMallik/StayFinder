const Listing = require("./models/listing"); // Import the Listing model
const Review = require("./models/review"); // Import the Review model
const ExpressError = require("./utils/ExpressError"); // Import the custom ExpressError class
const { listingSchema, reviewSchema } = require("./schema.js"); // Import the listing schema for validation

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to create listing!");
    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  const { id } = req.params;

  let listing = await Listing.findById(id);
  if (!listing.owner._id.equals(res.locals.currentUser._id)) {
    req.flash("error", "You are not the owner of this listing");
    return res.redirect(`/listings/${id}`);
  }

  next();
};
module.exports.isOwnerReview = async (req, res, next) => {
  const { id, reviewId } = req.params;

  let review = await Review.findById(reviewId);

  if (!review.owner.equals(res.locals.currentUser._id)) {
    req.flash("error", "You are not the owner of this Review");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

// Middleware for validating listing data using Joi schema
module.exports.validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

// Middleware for validating review data using Joi schema
module.exports.validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};
