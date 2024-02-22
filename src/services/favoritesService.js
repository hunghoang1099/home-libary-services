const Favorites = require('../models/favorites');

// In-memory storage for favorites
let favorites = [];

// Service functions

function getAllFavorites() {
  return Promise.resolve(favorites);
}

function addTrackToFavorites(trackId) {
  if (!favorites.tracks.includes(trackId)) {
    favorites.tracks.push(trackId);
  }
  return Promise.resolve();
}

function removeTrackFromFavorites(trackId) {
  favorites.tracks = favorites.tracks.filter(id => id !== trackId);
  return Promise.resolve();
}

function addAlbumToFavorites(albumId) {
  if (!favorites.albums.includes(albumId)) {
    favorites.albums.push(albumId);
  }
  return Promise.resolve();
}

function removeAlbumFromFavorites(albumId) {
  favorites.albums = favorites.albums.filter(id => id !== albumId);
  return Promise.resolve();
}

function addArtistToFavorites(artistId) {
  if (!favorites.artists.includes(artistId)) {
    favorites.artists.push(artistId);
  }
  return Promise.resolve();
}

function removeArtistFromFavorites(artistId) {
  favorites.artists = favorites.artists.filter(id => id !== artistId);
  return Promise.resolve();
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
