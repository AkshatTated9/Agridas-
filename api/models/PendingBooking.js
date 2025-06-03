const mongoose = require('mongoose');

const PendingBookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  place: { type: mongoose.Schema.Types.ObjectId, ref: 'Place', required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  price: { type: Number, required: true },
  paymentMethod: {
  type: String,
  required: true,
},
}, { timestamps: true });

module.exports = mongoose.model('PendingBooking', PendingBookingSchema);
