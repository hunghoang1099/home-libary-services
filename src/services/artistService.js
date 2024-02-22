const Artist = require('../models/artist');

// In-memory storage for artists
let artists = [];

function getAllArtists() {
  return Promise.resolve(artists);
}

function getArtistById(artistId) {
  const artist = artists.find(artist => artist.id === artistId);
  return Promise.resolve(artist);
}

function createArtist(name, grammy) {
  const newArtist = new Artist(uuid(), name, grammy);
  artists.push(newArtist);
  return Promise.resolve(newArtist);
}

function updateArtistInfo(artistId, newName, newGrammy) {
  const artistIndex = artists.findIndex(artist => artist.id === artistId);
  if (artistIndex === -1) {
    throw new Error('Artist not found');
  }
  const artist = artists[artistIndex];
  artist.name = newName;
  artist.grammy = newGrammy;
  return Promise.resolve(artist);
}

function deleteArtist(artistId) {
  artists = artists.filter(artist => artist.id !== artistId);
  return Promise.resolve();
}

module.exports = {
  getAllArtists,
  getArtistById,
  createArtist,
  updateArtistInfo,
  deleteArtist
};
