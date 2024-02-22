const Track = require('../models/track');

// In-memory storage for tracks
let tracks = [];

// Service functions

function getAllTracks() {
  return Promise.resolve(tracks);
}

function getTrackById(trackId) {
  const track = tracks.find(track => track.id === trackId);
  return Promise.resolve(track);
}

function createTrack(name, artistId, albumId, duration) {
  const newTrack = new Track(uuid(), name, artistId, albumId, duration);
  tracks.push(newTrack);
  return Promise.resolve(newTrack);
}

function updateTrackInfo(trackId, newName, newDuration) {
  const trackIndex = tracks.findIndex(track => track.id === trackId);
  if (trackIndex === -1) {
    throw new Error('Track not found');
  }
  const track = tracks[trackIndex];
  track.name = newName;
  track.duration = newDuration;
  return Promise.resolve(track);
}

function deleteTrack(trackId) {
  tracks = tracks.filter(track => track.id !== trackId);
  return Promise.resolve();
}

module.exports = {
  getAllTracks,
  getTrackById,
  createTrack,
  updateTrackInfo,
  deleteTrack
};
