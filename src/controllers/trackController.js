const trackService = require('../services/trackService');

// Controller functions

async function getAllTracks(req, res) {
  try {
    const tracks = await trackService.getAllTracks();
    res.status(200).json(tracks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getTrackById(req, res) {
  const trackId = req.params.id;
  try {
    const track = await trackService.getTrackById(trackId);
    if (track) {
      res.status(200).json(track);
    } else {
      res.status(404).json({ message: 'Track not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function createTrack(req, res) {
  const { name, artistId, albumId, duration } = req.body;
  if (!name || !artistId || !albumId || !duration) {
    return res.status(400).json({ message: 'Name, artistId, albumId, and duration are required' });
  }
  try {
    const newTrack = await trackService.createTrack(name, artistId, albumId, duration);
    res.status(201).json(newTrack);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateTrack(req, res) {
  const trackId = req.params.id;
  const { name, duration } = req.body;
  if (!name || !duration) {
    return res.status(400).json({ message: 'Name and duration are required' });
  }
  try {
    const updatedTrack = await trackService.updateTrackInfo(trackId, name, duration);
    res.status(200).json(updatedTrack);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteTrack(req, res) {
  const trackId = req.params.id;
  try {
    await trackService.deleteTrack(trackId);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  getAllTracks,
  getTrackById,
  createTrack,
  updateTrack,
  deleteTrack
};
