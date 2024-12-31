const Booking = require('../models/Booking');

// Books a place
exports.createBookings = async (req, res) => {
  try {
    const userData = req.user;
    const { place, checkIn, checkOut,  name, phone, price } =
      req.body;
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
    const booking = await Booking.create({
      user: userData.id,
      place,
      checkIn,
      checkOut,
      // numOfGuests,
      name,
      phone,
      price,
    });


    res.status(200).json({
      booking,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
      error: err,
    });
  }
};

// Returns user specific bookings
exports.getBookings = async (req, res) => {
  try {
    const userData = req.user;
    if (!userData) {
      return res
        .status(401)
        .json({ error: 'You are not authorized to access this page!' });
    }

    const booking = await Booking.find({ user: userData.id }).populate('place')

    res
      .status(200).json({ booking, success: true })


  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Internal server error',
      error: err,
    });
  }
};
