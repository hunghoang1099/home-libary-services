const artistService = require('../services/artistService');

// Controller functions

async function getAllArtists(req, res) {
  try {
    const artists = await artistService.getAllArtists();
    res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getArtistById(req, res) {
  const artistId = req.params.id;
  try {
    const artist = await artistService.getArtistById(artistId);
    if (artist) {
      res.status(200).json(artist);
    } else {
      res.status(404).json({ message: 'Artist not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function createArtist(req, res) {
  const { name, grammy } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }
  try {
    const newArtist = await artistService.createArtist(name, grammy);
    res.status(201).json(newArtist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateArtist(req, res) {
  const artistId = req.params.id;
  const { name, grammy } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }
  try {
    const updatedArtist = await artistService.updateArtistInfo(artistId, name, grammy);
    res.status(200).json(updatedArtist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteArtist(req, res) {
  const artistId = req.params.id;
  try {
    await artistService.deleteArtist(artistId);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  getAllArtists,
  getArtistById,
  createArtist,
  updateArtist,
  deleteArtist
};
