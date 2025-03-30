const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares/user');

const {
  createBookings,
  getBookings,
  approveBooking,
  getReceivedRequests,
  disapproveBooking
} = require('../controllers/bookingController');

// Protected routes (user must be logged in)
router.route('/').get(isLoggedIn, getBookings).post(isLoggedIn, createBookings);
router.put('/approve/:bookingId', approveBooking);
router.get('/received-requests', isLoggedIn, getReceivedRequests);
router.delete('/disapprove/:bookingId',isLoggedIn, disapproveBooking);
module.exports = router;
