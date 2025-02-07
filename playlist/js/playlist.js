/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }


/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }


const playlist = () => {
  /**
   * Array of playlists in the catalog.
   * @type {Playlist[]}
   */
  let playlists = [];

  /**
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName) => {
    const playlist = {
      name: playlistName,
      songs: [{ title: '', artist: '', genre: '', duration: 0, favorite: false }]
    };
    playlists.push(playlist);
  };

  /**
   * Gets all playlists in the catalog.
   * @returns {Playlist[]} The list of all playlists.
   */
  const getAllPlaylists = () => {
    return playlists;
  };

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
    const removePlaylist = (playlistName) => {
      playlists = playlists.filter(playlist => playlist.name !== playlistName);
    };

  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */
  const addSongToPlaylist = (playlistName, song) => {
    //1.Buscamos que exista la playlist que hemos pasado como parámetro
    const playlist = playlists.find(playlist => playlist.name === playlistName);
    // const playlist = playlists.find(({ name }) => name === playlistName); // así es desestructurado

    //2. Si es que no existe, lanzamos un error
    if (!playlist) {
      throw new Error('The playlist is not found');
    };

    //3.Si existe creamos la variable newSong (la que estamos agregando a la lista) 
    // y la guardamos
    const newSong = { ...song, favorite: false }
    playlist.songs.push(newSong);

  };

  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
   */
  const removeSongFromPlaylist = (playlistName, title) => {
    //1. Buscamos la playlist "playlistName" (igual que como hicimos con el método addSong)
    const playlist = playlists.find(playlist => playlist.name === playlistName);

    //2. Nos aseguramos de que exista, sino, lanzamos error
    if (!playlist || !title) {
      throw new Error('Playlist or song is not found');
    };
    //3. Filtramos las canciones de la playlist que no sean la que queremos remover
    playlist.songs = playlist.songs.filter(song => song.title !== title);
  };


  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   */
  const favoriteSong = (playlistName, title) => {
    //1. Buscamos la playlist donde quieren marcar la canción favorita
    const playlist = playlists.find(playlist => playlist.name === playlistName);

    //2. Si es que no se encuentra la playlist lanzamos error
    if (!playlist) {
      throw new Error('Playlist not found')
    };

    //3. Ahora buscamos que la canción esté en esa playlist
    const song = playlist.songs.find(song => song.title === title);

    //4. Si no la encontramos, lanzamos error
    if (!song) {
      throw new Error('Song not found')
    }

    //5. Crear una nueva lista con la canción actualizada en estado favorito true
    const listUpdatedWithSong = playlist.songs.map(song => 
      song.title === title ? { ...song, favorite: true} : song);

    //6. Debemos actualizar la playlist ahora con la canción actualizada
    const playlistUpdated = { ...playlist, songs: listUpdatedWithSong};

    return playlistUpdated;
  };

  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {Song[]} The list of sorted songs.
   * @throws {Error} If the playlist is not found or the criterion is invalid.
   */
  const sortSongs = (playlistName, criterion) => {};

  return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
};


export default playlist;