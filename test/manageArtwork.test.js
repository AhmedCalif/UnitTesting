const { addArtwork, getArtwork, deleteArtwork } = require('../src/galleryManager');

describe('Gallery Manager', () => {
  test('should add a new artwork', () => {
    const artwork = { id: 1, title: 'Mona Lisa', artist: 'Leonardo da Vinci' };
    const result = addArtwork(artwork);
    expect(result).toEqual({ success: true, message: 'Artwork added', artwork: artwork });
  });

  test('should retrieve an artwork by id', () => {
    const result = getArtwork(1);
    expect(result).toHaveProperty('artwork');
    expect(result.artwork.id).toEqual(1);
    expect(result.artwork.title).toEqual('Mona Lisa');
  });

  test('should delete an artwork by id', () => {
    const result = deleteArtwork(1);
    expect(result).toEqual({ success: true, message: 'Artwork deleted' });
  });
});
