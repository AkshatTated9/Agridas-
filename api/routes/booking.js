const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares/user');

const {
  createBookings,
  getBookings,
  approveBooking,
  getReceivedRequests,
  disapproveBooking,
  getUserRequestedBookings // <- newly added
} = require('../controllers/bookingController');

// Routes
router.route('/').get(isLoggedIn, getBookings).post(isLoggedIn, createBookings);
router.put('/approve/:bookingId', approveBooking);
router.get('/received-requests', isLoggedIn, getReceivedRequests);
router.get('/requested', isLoggedIn, getUserRequestedBookings); // <-- added this line
router.delete('/disapprove/:bookingId', isLoggedIn, disapproveBooking);

module.exports = router;
