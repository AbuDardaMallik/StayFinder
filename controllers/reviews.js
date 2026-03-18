const Review = require("../models/review"); // Import the Review model
const Listing = require("../models/listing"); // Import the Listing model

module.exports.renderNewReviewForm = async (req, res, next) => {
  const { id } = req.params;
  const foundListing = await Listing.findById(id);
  res.render("reviews/new.ejs", { listing: foundListing });
};

module.exports.createNewReview = async (req, res, next) => {
  const { id } = req.params;
  const foundListing = await Listing.findById(id);
  const newReview = new Review(req.body);
  newReview.owner = req.user._id;
  foundListing.reviews.push(newReview);
  await newReview.save();
  await foundListing.save();
  req.flash("success", "New Review Created!");
  res.redirect(`/listings/${id}`);
};

module.exports.renderEditReviewForm = async (req, res, next) => {
  const { id, reviewId } = req.params;

  const foundListing = await Listing.findById(id);
  const foundReview = await Review.findById(reviewId);

  if (!foundListing) {
    req.flash("error", "listing you requested does not exist!");
    return res.redirect("/listings");
  }

  res.render("reviews/edit.ejs", {
    listing: foundListing,
    review: foundReview,
  });
};

module.exports.updateReview = async (req, res, next) => {
  const { id, reviewId } = req.params;
  await Review.findByIdAndUpdate(reviewId, req.body, {
    runValidators: true,
  });
  req.flash("success", "Review Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyReview = async (req, res, next) => {
  const { id, reviewId } = req.params;

  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Review Deleted!");
  res.redirect(`/listings/${id}`);
};
