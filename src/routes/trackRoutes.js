const express = require('express');
const router = express.Router();
const trackController = require('../controllers/trackController');

// Routes for tracks

router.get('/', trackController.getAllTracks);
router.get('/:id', trackController.getTrackById);
router.post('/', trackController.createTrack);
router.put('/:id', trackController.updateTrack);
router.delete('/:id', trackController.deleteTrack);

module.exports = router;
