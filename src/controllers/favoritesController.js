const favoritesService = require('../services/favoritesService');

// Controller functions

async function getAllFavorites(req, res) {
  try {
    const favorites = await favoritesService.getAllFavorites();
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function addTrackToFavorites(req, res) {
  const trackId = req.params.id;
  try {
    await favoritesService.addTrackToFavorites(trackId);
    res.status(201).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function removeTrackFromFavorites(req, res) {
  const trackId = req.params.id;
  try {
    await favoritesService.removeTrackFromFavorites(trackId);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function addAlbumToFavorites(req, res) {
  const albumId = req.params.id;
  try {
    await favoritesService.addAlbumToFavorites(albumId);
    res.status(201).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function removeAlbumFromFavorites(req, res) {
  const albumId = req.params.id;
  try {
    await favoritesService.removeAlbumFromFavorites(albumId);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function addArtistToFavorites(req, res) {
  const artistId = req.params.id;
  try {
    await favoritesService.addArtistToFavorites(artistId);
    res.status(201).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function removeArtistFromFavorites(req, res) {
  const artistId = req.params.id;
  try {
    await favoritesService.removeArtistFromFavorites(artistId);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  getAllFavorites,
  addTrackToFavorites,
  removeTrackFromFavorites,
  addAlbumToFavorites,
  removeAlbumFromFavorites,
  addArtistToFavorites,
  removeArtistFromFavorites
};
