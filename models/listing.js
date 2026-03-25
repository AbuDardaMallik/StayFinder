const mongoose = require("mongoose");
const review = require("./review");
const { types } = require("joi");
const Schema = mongoose.Schema;

// Define the Listing schema
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // image: {
  //   type: String,
  //   default:
  //     "https://imgs.search.brave.com/djq56iY4O2c6_c6JrrDP6lfLtKAf_PXiSyyYz4ttGpw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE1/Njk2NjE3Ni9waG90/by9lbnZpcm9ubWVu/dGFsLWNvbmNlcHQt/d2l0aC1oYW5kLWhv/bGRpbmctcGxhbmV0/LWVhcnRoLXNob3dp/bmctc3VzdGFpbmFi/bGUtYW5kLWVjby1m/cmllbmRseS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9c293/Z2U2TjBHY2lzZ3hQ/cS1RbUpCUzVSQlEw/Wm1FaVZRYXA1Y0l5/dFdXVT0",
  //   set: (url) =>
  //     url === ""
  //       ? "https://imgs.search.brave.com/djq56iY4O2c6_c6JrrDP6lfLtKAf_PXiSyyYz4ttGpw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE1/Njk2NjE3Ni9waG90/by9lbnZpcm9ubWVu/dGFsLWNvbmNlcHQt/d2l0aC1oYW5kLWhv/bGRpbmctcGxhbmV0/LWVhcnRoLXNob3dp/bmctc3VzdGFpbmFi/bGUtYW5kLWVjby1m/cmllbmRseS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9c293/Z2U2TjBHY2lzZ3hQ/cS1RbUpCUzVSQlEw/Wm1FaVZRYXA1Y0l5/dFdXVT0"
  //       : url,
  // },
  image: {
    url: String,
    filename: String,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await review.deleteMany({
      _id: { $in: listing.reviews },
    });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
