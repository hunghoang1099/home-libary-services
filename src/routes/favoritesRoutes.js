const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favoritesController');

// Routes for favorites

router.get('/', favoritesController.getAllFavorites);
router.post('/track/:id', favoritesController.addTrackToFavorites);
router.delete('/track/:id', favoritesController.removeTrackFromFavorites);
router.post('/album/:id', favoritesController.addAlbumToFavorites);
router.delete('/album/:id', favoritesController.removeAlbumFromFavorites);
router.post('/artist/:id', favoritesController.addArtistToFavorites);
router.delete('/artist/:id', favoritesController.removeArtistFromFavorites);

module.exports = router;
