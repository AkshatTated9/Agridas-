const Booking = require('../models/Booking');
const Place = require('../models/Place'); // Assuming you have a Place model that includes phone number
const twilio = require('twilio');
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
require('dotenv').config();

// Configure your Twilio client using environment variables
const twilioClient = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

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
      return res.status(409).json({
        success: false,
        message: 'The selected dates are unavailable for this place.',
        conflict: {
          checkIn: conflictingBooking.checkIn,
          checkOut: conflictingBooking.checkOut,
        },
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
      address,
      price,
    });

// Fetch the place details to get the owner's phone number and the place title
const placeDetails = await Place.findById(place);

// Ensure the place has a phone number and title
if (!placeDetails || !placeDetails.phone || !placeDetails.title) {
  return res.status(400).json({
    success: false,
    message: 'Place owner phone number or title not found!',
  });
}

const ownerPhone = placeDetails.phone;
const placeTitle = placeDetails.title; // Get the title of the place

// Format the checkIn and checkOut dates to only show the date (no time)
const formattedCheckIn = new Date(checkIn).toLocaleDateString('en-GB'); // 'DD/MM/YYYY' format
const formattedCheckOut = new Date(checkOut).toLocaleDateString('en-GB'); // 'DD/MM/YYYY' format

// // Prepare SMS body
// const smsBody = `
// 📅 NEW BOOKING RECEIVED 📅

// Dear Service/Machine Owner,

// You have received a new booking on AGRICONNECT.

// 📌 BOOKING DETAILS:

// - Machine Name: ${placeTitle} 
// - CUSTOMER NAME: ${name}
// - PHONE NUMBER: ${phone}
// - START DATE: ${formattedCheckIn}
// - END DATE: ${formattedCheckOut}
// - TOTAL PRICE: ₹${price}
// - ADDRESS: ${address}

// Thank you for using Agriconnect!

// Best regards,  
// Agriconnect Team

// --------------------------------------------------

// 📅 नवीन बुकिंग प्राप्त झाली आहे 📅

// प्रिय मशीन मालक,

// आपल्याला AGRICONNECT वर नवीन बुकिंग प्राप्त झाली आहे.

// 📌 बुकिंग तपशील:

// - मशीन चे नाव:: ${placeTitle}  
// - ग्राहकाचे नाव: ${name}
// - फोन नंबर: ${phone}
// - प्रारंभ तारीख: ${formattedCheckIn}
// - समाप्त तारीख: ${formattedCheckOut}
// - एकूण किंमत: ₹${price}
// - पत्ता: ${address}

// AGRICONNECT वापरण्याबद्दल धन्यवाद!

// सर्वोत्तम शुभेच्छा,  
// AGRICONNECT टीम
// `;

// // Send SMS to owner using Twilio
// twilioClient.messages
//   .create({
//     body: smsBody,
//     from: twilioPhoneNumber, // Twilio phone number
//     to: ownerPhone, // Place owner's phone number
//   })
//   .then((message) => console.log('SMS sent: ', message.sid))
//   .catch((error) => {
//     console.error('Error sending SMS: ', error);
//   });

res.status(201).json({
  booking,
  success: true,
  message: 'Booking created successfully!',
});
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err.message,
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
