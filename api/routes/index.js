const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const Contact = require('../models/Contact'); // Import the Contact model
const fs = require('fs'); // For handling temporary files

// Multer for file uploads
const upload = multer({ dest: '/tmp' });

// Health Check Endpoint
router.get('/', (req, res) => {
  res.status(200).json({
    greeting: 'Hello from Agriconnect Clone API',
  });
});

// Upload photo using image URL
router.post('/upload-by-link', async (req, res) => {
  try {
    const { link } = req.body;

    if (!link) {
      return res.status(400).json({ message: 'Image URL is required' });
    }

    const result = await cloudinary.uploader.upload(link, {
      folder: 'Agriconnect/Places',
    });

    res.status(200).json({ url: result.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});

// Upload images from the local device
router.post('/upload', upload.array('photos', 100), async (req, res) => {
  try {
    const imageArray = [];

    for (const file of req.files) {
      const { path } = file;
      const result = await cloudinary.uploader.upload(path, {
        folder: 'Agriconnect/Places',
      });

      imageArray.push(result.secure_url);
      fs.unlinkSync(path); // Remove temp file
    }

    res.status(200).json(imageArray);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      message: 'Internal server error',
      error,
    });
  }
});

// Contact Us Form Endpoint
router.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        message: 'All fields are required (name, email, phone, message)',
      });
    }

    // Save contact form data to the database
    const contactEntry = new Contact({
      name,
      email,
      phone,
      message,
    });

    await contactEntry.save();

    res.status(201).json({
      message: 'Your message has been received. We will get back to you soon!',
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      message: 'Failed to submit the form. Please try again later.',
      error,
    });
  }
});

// Nested Routes
router.use('/user', require('./user'));
router.use('/places', require('./place'));
router.use('/bookings', require('./booking'));
router.use('/contact', require('./contactRoutes'));

module.exports = router;
