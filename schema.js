const joi = require("joi");

// Define the Listing schema using Joi for validation
const listingSchema = joi
  .object({
    title: joi.string().required().messages({
      "string.empty": "Title is required",
      "any.required": "Title is required",
    }),
    description: joi.string().required().messages({
      "string.empty": "Description is required",
      "any.required": "Description is required",
    }),
    price: joi.number().required().min(0).messages({
      "number.empty": "Price is required",
      "any.required": "Price is required",
    }),
    country: joi.string().required().messages({
      "string.empty": "Country is required",
      "any.required": "Country is required",
    }),
    location: joi.string().required().messages({
      "string.empty": "Location is required",
      "any.required": "Location is required",
    }),
  })
  .unknown(true); // Allow unknown keys (like image)

// Define the Review schema using Joi for validation

const reviewSchema = joi
  .object({
    comment: joi.string().required().messages({
      "string.empty": "Comment is required",
      "any.required": "Comment is required",
    }),
    rating: joi.number().required().min(0).max(5).messages({
      "number.empty": "Rating is required",
      "any.required": "Rating is required",
    }),
  })
  .unknown(true); // Allow unknown keys

module.exports = { listingSchema, reviewSchema };
