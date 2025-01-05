const Booking = require('../models/Booking');

// Books a place
exports.createBookings = async (req, res) => {
  try {
    const userData = req.user;
    const { place, checkIn, checkOut, name, phone, address, price } = req.body;

    // Check for conflicting bookings
    const conflictingBooking = await Booking.findOne({
      place,
      $or: [
        { checkIn: { $lte: checkOut }, checkOut: { $gte: checkIn } }, // Overlap condition
      ],
    });

    if (conflictingBooking) {
      return res.status(400).json({
        success: false,
        message: 'The selected dates are unavailable for this place.',
      });
    }

    // Create booking
    const booking = await Booking.create({
      user: userData.id,
      place,
      checkIn,
      checkOut,
      name,
      phone,
      address, // Include the address field
      price,
    });

    res.status(200).json({
      booking,
      success: true,
      message: 'Booking created successfully!',
    });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
      error: err,
    });
  }
};

// Returns user-specific bookings
exports.getBookings = async (req, res) => {
  try {
    const userData = req.user;
    if (!userData) {
      return res
        .status(401)
        .json({ error: 'You are not authorized to access this page!' });
    }

    const booking = await Booking.find({ user: userData.id }).populate('place');

    res.status(200).json({
      booking,
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Internal server error',
      error: err,
    });
  }
};
