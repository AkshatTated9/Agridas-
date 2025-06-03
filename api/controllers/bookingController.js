
// const Booking = require('../models/Booking');
// const Place = require('../models/Place'); // Assuming you have a Place model that includes phone number
// const twilio = require('twilio');
// const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
// require('dotenv').config();


// // Configure your Twilio client using environment variables
// const twilioClient = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// exports.createBookings = async (req, res) => {
//   try {
//     const userData = req.user;
//     const { place, checkIn, checkOut, name, phone, address, price } = req.body;

    
//     const conflictingBooking = await Booking.findOne({
//       place,
//       $or: [
//         { checkIn: { $lte: checkOut }, checkOut: { $gte: checkIn } }, // Overlap condition
//       ],
//     });
    
//     if (conflictingBooking) {
//       return res.status(409).json({
//         success: false,
//         message: 'The selected dates are unavailable for this service.',
//         conflict: {
//           checkIn: conflictingBooking.checkIn,
//           checkOut: conflictingBooking.checkOut,
//         },
//       });
//     }
    

//     // Create booking
//     const booking = await Booking.create({
//       user: userData.id,
//       place,
//       checkIn,
//       checkOut,
//       name,
//       phone,
//       address,
//       price,
//     });

// // Fetch the place details to get the owner's phone number and the place title
// const placeDetails = await Place.findById(place);

// // Ensure the place has a phone number and title
// if (!placeDetails || !placeDetails.phone || !placeDetails.title) {
//   return res.status(400).json({
//     success: false,
//     message: 'Place owner phone number or title not found!',
//   });
// }

// const ownerPhone = placeDetails.phone;
// const placeTitle = placeDetails.title; // Get the title of the place

// // Format the checkIn and checkOut dates to only show the date (no time)
// // const formattedCheckIn = new Date(checkIn).toLocaleDateString('en-GB'); // 'DD/MM/YYYY' format
// // const formattedCheckOut = new Date(checkOut).toLocaleDateString('en-GB'); // 'DD/MM/YYYY' format

// // // Prepare SMS body
// const smsBody = `
// 📅 NEW BOOKING RECEIVED 📅

// Dear Service/Machine Owner,

// You have received a new booking on AGRICONNECT.

// 📌 BOOKING DETAILS:

// - Machine Name: ${placeTitle} 
// - CUSTOMER NAME: ${name}
// - PHONE NUMBER: ${phone}
// - START DATE: ${checkIn}
// - END DATE: ${checkOut}
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
// - प्रारंभ तारीख: ${checkIn}
// - समाप्त तारीख: ${checkOut}
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

// res.status(201).json({
//   booking,
//   success: true,
//   message: 'Booking created successfully!',
// });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       success: false,
//       message: 'Internal server error',
//       error: err.message,
//     });
//   }
// };


// // Returns user-specific bookings
// exports.getBookings = async (req, res) => {
//   try {
//     const userData = req.user;
//     if (!userData) {
//       return res
//         .status(401)
//         .json({ error: 'You are not authorized to access this page!' });
//     }

//     const booking = await Booking.find({ user: userData.id }).populate('place');

//     res.status(200).json({
//       booking,
//       success: true,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       message: 'Internal server error',
//       error: err,
//     });
//   }
// };






















const PendingBookings = require('../models/PendingBooking');
const Booking = require('../models/Booking');
const Place = require('../models/Place');
const twilio = require('twilio');
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
require('dotenv').config();

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Create Booking (Temporary Until Owner Approves)
exports.createBookings = async (req, res) => {
  try {
    const userData = req.user;
    const { place, checkIn, checkOut, name, phone, address, price ,paymentMethod} = req.body;

    // Convert check-in and check-out to Date objects
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);


    // Function to check if a booking overlaps

    const existingBookings = await Booking.findOne({
      place,
      $or: [
        { checkIn: { $lte: checkOut }, checkOut: { $gte: checkIn } }, // Overlap condition
      ],
    });
    console.log('Existing Confirmed Bookings:', existingBookings);
 
    if (existingBookings) {
      return res.status(409).json({
        success: false,
        message: 'The selected dates are unavailable for this service.',
        conflict: {
          checkIn: existingBookings.checkIn,
          checkOut: existingBookings.checkOut,
        },
      });
    }
    

    
    // Store in pending bookings
    const pendingBooking = await PendingBookings.create({
      user: userData.id,
      place,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      name,
      phone,
      address,
      price,
      paymentMethod,
    });

    const placeDetails = await Place.findById(place);
    if (!placeDetails || !placeDetails.phone) {
      return res.status(400).json({ success: false, message: 'Place owner contact not found!' });
    }

    const smsBody = `
📅 NEW BOOKING REQUEST 📅

A new booking request has been made on AGRICONNECT.

📌 REQUEST DETAILS:
- Machine Name: ${placeDetails.title}
- Customer Name: ${name}
- Phone Number: ${phone}
- Start Date: ${checkInDate.toDateString()}
- End Date: ${checkOutDate.toDateString()}
- Total Price: ₹${price}
- Address: ${address}
- Payment Mode: ${paymentMethod}

Please approve or reject the request in your dashboard.

Thank you, Agriconnect Team
`;

    // await twilioClient.messages.create({
    //   body: smsBody,
    //   from: twilioPhoneNumber,
    //   to: placeDetails.phone,
    // });

    res.status(201).json({
      success: true,
      message: 'Booking request sent. Waiting for owner confirmation.',
      pendingBooking,
    });

  } catch (err) {
    console.error('Error in createBookings:', err);
    res.status(500).json({ success: false, message: 'Internal server error', error: err.message });
  }
};


// Approve Booking
exports.approveBooking = async (req, res) => {
  try {

    const { bookingId } = req.params;
    const pendingBooking = await PendingBookings.findById(bookingId);

    if (!pendingBooking) {
      return res.status(404).json({ success: false, message: 'Booking request not found' });
    }
    const { place, checkIn, checkOut } = pendingBooking;

    // Check if there's an existing booking that overlaps
    const existingBooking = await Booking.findOne({
      place,
      $or: [
        { checkIn: { $lte: checkOut }, checkOut: { $gte: checkIn } }, // Overlapping condition
      ],
    });

    if (existingBooking) {
      return res.status(400).json({ success: false, message: 'Cannot approve. Service is already booked on selected dates.' });
    }
    // Move to Booking table
    const { _id, ...bookingData } = pendingBooking.toObject();
    const booking = await Booking.create(bookingData);

    // Remove from pending table
    await PendingBookings.findByIdAndDelete(bookingId);

    // Notify User
    const confirmationMessage = `✅ Your booking for ${pendingBooking.place} has been confirmed!\n\nधन्यवाद! आपले बुकिंग यशस्वीरित्या मंजूर करण्यात आले आहे.`;

    // await twilioClient.messages.create({
    //   body: confirmationMessage,
    //   from: twilioPhoneNumber,
    //   to: pendingBooking.phone,
    // });

    res.status(200).json({ success: true, message: 'Booking confirmed', booking });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Internal server error', error: err.message });
  }
};

// // Returns user-specific bookings
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


exports.getReceivedRequests = async (req, res) => {
  try {
    const userId = req.user.id; // Get logged-in user ID
    // Find places owned by the user
    const ownedPlaces = await Place.find({ owner: userId });
    if (!ownedPlaces.length) {
      return res.status(404).json({ success: false, message: 'You have no listed services.' });
    }
    // Extract place IDs
    const placeIds = ownedPlaces.map(place => place._id);
    // Fetch pending bookings for the owned places
    const receivedRequests = await PendingBookings.find({ place: { $in: placeIds } })
      .populate('user', 'name phone') // Populate user details
      .populate('place', 'title price'); // Populate place details
    res.status(200).json({ success: true, receivedRequests });
  } catch (error) {
    console.error('Error in getReceivedRequests:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};



exports.disapproveBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const pendingBooking = await PendingBookings.findById(bookingId);

    if (!pendingBooking) {
      return res.status(404).json({ success: false, message: 'Booking request not found' });
    }

    // Remove booking from pending table
    await PendingBookings.findByIdAndDelete(bookingId);

    res.status(200).json({ success: true, message: 'Booking request disapproved' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Internal server error', error: err.message });
  }
};

exports.getUserRequestedBookings = async (req, res) => {
  try {
    const userId = req.user.id; // Logged-in user's ID

    // Fetch all pending bookings where the user is the one who booked
    const requestedBookings = await PendingBookings.find({ user: userId })
      .populate('place', 'title price photos') // populate place info
      .populate('user', 'name phone'); // optionally include user's own info

    res.status(200).json({ success: true, booking: requestedBookings });
  } catch (error) {
    console.error('Error in getRequestedBookings:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};