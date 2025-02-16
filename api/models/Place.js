const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  photos: [{ type: String }],
  description: {
    type: String,
  },
  perks: [{ type: String }],
  extraInfo: {
    type: String,
  },
  price: {
    type: Number,
  },
  email: {
    type: String,
    required: true, // Assuming email is required for each place
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Basic email validation regex
  },
  maxLimit:{
    type:Number,
    required:true
  },
  phone: {
    type: String,
    required: true, // Assuming phone is required for each place
    match: /^[0-9]{10}$/, // Basic phone number validation (10 digits)
  },
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
