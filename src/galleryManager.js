let artworks = [];

const addArtwork = (artwork) => {
  artworks.push(artwork);
  return { success: true, message: 'Artwork added', artwork: artwork };
};

const getArtwork = (id) => {
  const artwork = artworks.find(art => art.id === id);
  return artwork ? { artwork: artwork } : { success: false, message: 'Artwork not found' };
};

const deleteArtwork = (id) => {
  const index = artworks.findIndex(art => art.id === id);
  if (index !== -1) {
    artworks.splice(index, 1);
    return { success: true, message: 'Artwork deleted' };
  }
  return { success: false, message: 'Artwork not found' };
};

module.exports = { addArtwork, getArtwork, deleteArtwork };
