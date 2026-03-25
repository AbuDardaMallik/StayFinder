const Listing = require("../models/listing"); // Import the Listing model
const review = require("../models/review"); // Import the Listing model

module.exports.index = async (req, res, next) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { listings: allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

// image by link er bodole image upload er jonno multer use korar jonno code ta edit kora hoyeche
module.exports.createListing = async (req, res, next) => {
  let url = req.file ? req.file.path : ""; // Get the uploaded file path from Multer, or set it to an empty string if no file was uploaded
  let filename = req.file ? req.file.filename : ""; // Get the uploaded file name from Multer, or set it to an empty string if no file was uploaded

  const newListing = new Listing(req.body);
  newListing.image = { url, filename };
  newListing.owner = req.user._id;
  await newListing.save();
  req.flash("success", "New Listing Created!");
  console.log(req.file);
  res.redirect("/listings");
};

// image by link
// module.exports.createListing = async (req, res, next) => {
//   const newListing = new Listing(req.body);

//   // // Schema Validation er jonno akta tool use kora better hobe, jemon Joi.
//   // eta use korle code ta aro clean and maintainable hobe.
//   // if (!newListing) {
//   //   throw new ExpressError(
//   //     "Invalid Listing Data,Send Valid Data for Listing",
//   //     400,
//   //   );
//   // }
//   // if (!newListing.title) {
//   //   throw new ExpressError("Title is Missing!", 400);
//   // }
//   // if (!newListing.description) {
//   //   throw new ExpressError("Description is Missing!", 400);
//   // }
//   // if (!newListing.price) {
//   //   throw new ExpressError("Price is Missing!", 400);
//   // }
//   // if (!newListing.country) {
//   //   throw new ExpressError("Country is Missing!", 400);
//   // }
//   // if (!newListing.location) {
//   //   throw new ExpressError("Location is Missing!", 400);
//   // }
//   newListing.owner = req.user._id;
//   await newListing.save();
//   req.flash("success", "New Listing Created!");
//   res.redirect("/listings");
// };

module.exports.renderEditForm = async (req, res, next) => {
  const { id } = req.params;
  const foundListing = await Listing.findById(id);

  if (!foundListing) {
    req.flash("error", "listing you requested does not exist!");
    return res.redirect("/listings");
  }

  res.render("listings/edit.ejs", { listing: foundListing });
};

module.exports.updateListing = async (req, res, next) => {
  let url = req.file ? req.file.path : ""; // Get the uploaded file path from Multer, or set it to an empty string if no file was uploaded
  let filename = req.file ? req.file.filename : ""; // Get the uploaded file name from Multer, or set it to an empty string if no file was uploaded
  const { id } = req.params;

  const updatedListing = await Listing.findByIdAndUpdate(id, req.body, {
    runValidators: true,
  });
  if (url && filename) {
    updatedListing.image = { url, filename };
    await updatedListing.save();
  }
  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

// module.exports.updateListing = async (req, res, next) => {
//   const { id } = req.params;

//   // { runValidators: true } eta use korar karon holo jate update er somoyo o schema er validation gulo kaj kore
//   await Listing.findByIdAndUpdate(id, req.body, { runValidators: true });

//   req.flash("success", "Listing Updated!");
//   res.redirect(`/listings/${id}`);
// };

module.exports.destroyListing = async (req, res, next) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};

module.exports.showListing = async (req, res, next) => {
  const { id } = req.params;

  const foundListing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "owner",
      },
    })
    .populate("owner"); // Data base theke listings er related all reviews asbe and tar sathe sathe owner er information o asbe
  const allReviews = await review.find({});

  if (!foundListing) {
    req.flash("error", "listing you requested does not exist!");
    return res.redirect("/listings");
  }

  res.render("listings/show.ejs", {
    listing: foundListing,
    reviews: allReviews,
  });
};

// search functionality er jonno code ta edit kora hoyeche, jate user listing er title, description, location, country er basis e search korte pare
module.exports.searchListings = async (req, res, next) => {
  const { query } = req.query;
  const searchResults = await Listing.find({
    $or: [
      { title: { $regex: query, $options: "i" } },
      { description: { $regex: query, $options: "i" } },
      { location: { $regex: query, $options: "i" } },
      { country: { $regex: query, $options: "i" } },
    ],
  });
  res.render("listings/index.ejs", { listings: searchResults });
};
