const Album = require('../models/album');

// In-memory storage for albums
let albums = [];

// Service functions

function getAllAlbums() {
  return Promise.resolve(albums);
}

function getAlbumById(albumId) {
  const album = albums.find(album => album.id === albumId);
  return Promise.resolve(album);
}

function createAlbum(name, year, artistId) {
  const newAlbum = new Album(uuid(), name, year, artistId);
  albums.push(newAlbum);
  return Promise.resolve(newAlbum);
}

function updateAlbumInfo(albumId, newName, newYear) {
  const albumIndex = albums.findIndex(album => album.id === albumId);
  if (albumIndex === -1) {
    throw new Error('Album not found');
  }
  const album = albums[albumIndex];
  album.name = newName;
  album.year = newYear;
  return Promise.resolve(album);
}

function deleteAlbum(albumId) {
  albums = albums.filter(album => album.id !== albumId);
  return Promise.resolve();
}

module.exports = {
  getAllAlbums,
  getAlbumById,
  createAlbum,
  updateAlbumInfo,
  deleteAlbum
};
