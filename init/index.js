const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// Connect to MongoDB
main()
  .then(() => console.log("MongoDB connection established"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/StayFinder");
  console.log("Connected to MongoDB");
}

const initDB = async () => {
  try {
    // Clear existing listings
    await Listing.deleteMany({});
    console.log("Existing listings cleared.");
    //
    initData.data = initData.data.map((obj) => ({
      ...obj,
      owner: "698f09f7d04bcfe04424d56d",
    }));

    // Insert new listings from data.js
    await Listing.insertMany(initData.data);
    console.log("Database initialized with sample listings.");
  } catch (err) {
    console.error("Error initializing database:", err);
  }
};

// Initialize both listings and reviews
initDB().then(() => {
  mongoose.connection.close();
});
