const artists = [
  {
    id: "jeff-buckley",
    name: "Jeff Buckley",
    photo: "images/artists/jeff-buckley.webp",
    songs: [
      {
        songName: "Lover, You Should've Come Over",
        file: "jeff-buckley-lover-you-should-have-come-over",
        liked: false,
      },
    ],
  },
  {
    id: "mac-demarco",
    name: "Mac DeMarco",
    photo: "images/artists/mac-demarco.webp",
    songs: [
      {
        songName: "My Kind of Woman",
        file: "mac-demarco-my-kind-of-woman",
        liked: false,
      },
    ],
  },
  {
    id: "tyler-the-creator",
    name: "Tyler, The Creator",
    photo: "images/artists/tyler-the-creator.webp",
    songs: [
      {
        songName: "EARFQUAKE",
        file: "tyler-the-creator-earfquake",
        liked: false,
      },
    ],
  },
  {
    id: "the-cure",
    name: "The Cure",
    photo: "images/artists/the-cure.webp",
    songs: [
      {
        songName: "Just Like Heaven",
        file: "the-cure-just-like-heaven",
        liked: false,
      },
    ],
  },
  {
    id: "kendrick-lamar",
    name: "Kendrick Lamar",
    photo: "images/artists/kendrick-lamar.webp",
    songs: [
      { songName: "HUMBLE.", file: "kendrick-lamar-humble", liked: false },
    ],
  },
  {
    id: "red-hot-chili-peppers",
    name: "Red Hot Chili Peppers",
    photo: "images/artists/red-hot-chili-peppers.webp",
    songs: [
      {
        songName: "Californication",
        file: "red-hot-chili-peppers-californication",
        liked: false,
      },
    ],
  },
  {
    id: "big-boom",
    name: "Big Boom",
    photo: "images/artists/big-boom.webp",
    songs: [
      { songName: "In The Room", file: "big-boom-in-the-room", liked: false },
    ],
  },
];

function loadLikes() {
  return JSON.parse(localStorage.getItem("livefy-likes") ?? "{}");
}

function saveLike(file, liked) {
  const likes = loadLikes();
  likes[file] = liked;
  localStorage.setItem("livefy-likes", JSON.stringify(likes));
}

function applyLikes(songs) {
  const likes = loadLikes();
  return songs.map((song) => ({
    ...song,
    liked: likes[song.file] ?? song.liked,
  }));
}

function getAllSongsFlat() {
  return applyLikes(
    artists.flatMap((artist) =>
      artist.songs.map((song) => ({ ...song, artist: artist.name })),
    ),
  );
}

function getArtistQueue(artistIndex) {
  const artist = artists[artistIndex];
  return applyLikes(
    artist.songs.map((song) => ({ ...song, artist: artist.name })),
  );
}

window.LivefyData = { artists, getAllSongsFlat, getArtistQueue, saveLike };
