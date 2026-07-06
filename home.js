document.addEventListener("DOMContentLoaded", () => {
  const { artists, getAllSongsFlat, getArtistQueue } = window.LivefyData;
  const grid = document.getElementById("artist-grid");

  function initials(name) {
    return name
      .split(" ")
      .filter(Boolean)
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  }

  function startQueue(songs, queueName, startIndex) {
    localStorage.setItem("livefy-queue", JSON.stringify(songs));
    localStorage.setItem("livefy-queue-index", String(startIndex));
    localStorage.setItem("livefy-queue-name", queueName);
    window.location.href = "player.html";
  }

  artists.forEach((artist, artistIndex) => {
    const card = document.createElement("article");
    card.className = "artist-card";

    const photoWrap = document.createElement("div");
    photoWrap.className = "artist-photo-wrap";

    const img = document.createElement("img");
    img.className = "artist-photo";
    img.src = artist.photo;
    img.alt = `${artist.name} portrait`;
    photoWrap.appendChild(img);

    const disc = document.createElement("div");
    disc.className = "vinyl-disc";
    disc.setAttribute("aria-hidden", "true");
    const label = document.createElement("div");
    label.className = "vinyl-label";
    label.textContent = initials(artist.name);
    disc.appendChild(label);
    photoWrap.appendChild(disc);

    const name = document.createElement("h3");
    name.className = "artist-name";
    name.textContent = artist.name;

    const list = document.createElement("ul");
    list.className = "track-list";
    artist.songs.forEach((song, songIndex) => {
      const item = document.createElement("li");
      const trackButton = document.createElement("button");
      trackButton.type = "button";
      trackButton.className = "track-item";
      trackButton.innerHTML = `<i class="bi bi-play-fill"></i> ${song.songName}`;
      trackButton.addEventListener("click", () => {
        startQueue(
          getArtistQueue(artistIndex),
          `${artist.name} Radio`,
          songIndex,
        );
      });
      item.appendChild(trackButton);
      list.appendChild(item);
    });

    card.append(photoWrap, name, list);
    grid.appendChild(card);
  });

  const allSongs = getAllSongsFlat();
  document.getElementById("essentials-count").textContent =
    `${allSongs.length} song${allSongs.length === 1 ? "" : "s"}`;
  document.getElementById("play-essentials").addEventListener("click", () => {
    startQueue(allSongs, "Playlist Essentials", 0);
  });
});
