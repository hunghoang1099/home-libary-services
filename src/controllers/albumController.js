const albumService = require('../services/albumService');

// Controller functions

async function getAllAlbums(req, res) {
  try {
    const albums = await albumService.getAllAlbums();
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getAlbumById(req, res) {
  const albumId = req.params.id;
  try {
    const album = await albumService.getAlbumById(albumId);
    if (album) {
      res.status(200).json(album);
    } else {
      res.status(404).json({ message: 'Album not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function createAlbum(req, res) {
  const { name, year, artistId } = req.body;
  if (!name || !year || !artistId) {
    return res.status(400).json({ message: 'Name, year, and artistId are required' });
  }
  try {
    const newAlbum = await albumService.createAlbum(name, year, artistId);
    res.status(201).json(newAlbum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateAlbum(req, res) {
  const albumId = req.params.id;
  const { name, year } = req.body;
  if (!name || !year) {
    return res.status(400).json({ message: 'Name and year are required' });
  }
  try {
    const updatedAlbum = await albumService.updateAlbumInfo(albumId, name, year);
    res.status(200).json(updatedAlbum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteAlbum(req, res) {
  const albumId = req.params.id;
  try {
    await albumService.deleteAlbum(albumId);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  getAllAlbums,
  getAlbumById,
  createAlbum,
  updateAlbum,
  deleteAlbum
};
