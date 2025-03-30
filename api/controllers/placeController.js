const Place = require('../models/Place');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
// Adds a place in the DB
exports.addPlace = async (req, res) => {
  try {
    const userData = req.user;
    const {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      maxLimit,
      price,
      email,
      phone
    } = req.body;
    const place = await Place.create({
      owner: userData.id,
      title,
      address,
      photos: addedPhotos,
      description,
      perks,
      extraInfo,
      maxLimit,
      price,
      email,
      phone
    });
    res.status(200).json({
      place,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
      error: err,
    });
  }
};

// Returns user specific places
exports.userPlaces = async (req, res) => {
  try {
    const userData = req.user;
    const id = userData.id;
    res.status(200).json(await Place.find({ owner: id }));
  } catch (err) {
    res.status(500).json({
      message: 'Internal serever error',
    });
  }
};

// Updates a place
exports.updatePlace = async (req, res) => {
  try {
    const userData = req.user;
    const userId = userData.id;
    const {
      id,
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      maxLimit,
      price,
      email,
      phone
    } = req.body;

    const place = await Place.findById(id);
    if (userId === place.owner.toString()) {
      place.set({
        title,
        address,
        photos: addedPhotos,
        description,
        perks,
        extraInfo,
        maxLimit,
        price,
        email,
        phone
      });
      await place.save();
      res.status(200).json({
        message: 'Service updated!',
      });
    }
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
      error: err,
    });
  }
};

// Returns all the places in DB

exports.getPlaces = async (req, res) => {
  try {
    let places;
    let user = null;

    // Manually extract token (since middleware is not enforced)
    const token = req.headers.authorization?.split(' ')[1];

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        user = await User.findById(decoded.id).select('-password');
      } catch (error) {
        console.log('Invalid or expired token');
      }
    }

    if (user) {
      // User is logged in, exclude their own services
      places = await Place.find({ owner: { $ne: user.id } });
    } else {
      // User is not logged in, show all places
      places = await Place.find();
    }

    res.status(200).json({ places });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Returns single place, based on passed place id
exports.singlePlace = async (req, res) => {
  try {
    const { id } = req.params;
    const place = await Place.findById(id);
    if (!place) {
      return res.status(400).json({
        message: 'Service not found',
      });
    }
    res.status(200).json({
      place,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Internal serever error',
    });
  }
};

// Search Places in the DB
exports.searchPlaces = async (req, res) => {
  try {
    const searchword = req.params.key;

    if (searchword === '') return res.status(200).json(await Place.find())

    const searchMatches = await Place.find({ address: { $regex: searchword, $options: "i" } })

    res.status(200).json(searchMatches);
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Internal serever error 1',
    });
  }
}

// Deletes a place
exports.deletePlace = async (req, res) => {
  try {
    const { id } = req.params; // Extract place ID from route parameters
    const userData = req.user; // Get user data from request (ensure authentication middleware is applied)
    const userId = userData.id;

    // Find the place by ID
    const place = await Place.findById(id);

    if (!place) {
      return res.status(404).json({
        message: 'Service not found',
      });
    }

    // Check if the requesting user is the owner of the place
    if (place.owner.toString() !== userId) {
      return res.status(403).json({
        message: 'You are not authorized to delete this place',
      });
    }

    // Delete the place from the database
    await Place.findByIdAndDelete(id);

    res.status(200).json({
      message: 'Service deleted successfully',
    });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
      error: err.message,
    });
  }
};
