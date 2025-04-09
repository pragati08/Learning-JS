const songsObj = [
  {
    id: 1,
    name: "Happy Children",
    artist: "James Bond",
    img: "./assets/happy-children.jpg",
    genre: "rock",
    source: "./assets/happy-children.mp3",
  },

  {
    id: 2,
    name: "Driving Crazy",
    artist: "Joey Tribiani",
    img: "./assets/driving-crazy.jpg",
    genre: "pop",
    source: "./assets/driving-music.mp3",
  },

  {
    id: 3,
    name: "Happy Carnival",
    artist: "Rachel Green",
    img: "./assets/happy-carnival.jpg",
    genre: "hip-hop",
    source: "./assets/happy-carnival.mp3",
  },

  {
    id: 4,
    name: "Good morning",
    artist: "Phoebe Buffay",
    img: "./assets/good-morning.jpg",
    genre: "rock",
    source: "./assets/good-morning.mp3",
  },

  {
    id: 5,
    name: "JingleBells Christmas",
    artist: "Ross Gellar",
    img: "./assets/jinglebells-christmas.jpg",
    genre: "pop",
    source: "./assets/jinglebells-christmas.mp3",
  },

  {
    id: 6,
    name: "Upbeat happy",
    artist: "Monica Gellar",
    img: "./assets/upbeat-happy.jpg",
    genre: "hip-hop",
    source: "./assets/upbeat-happy.mp3",
  },

  {
    id: 7,
    name: "Whip Afro",
    artist: "Chandler Bing",
    img: "./assets/whip-afro.jpg",
    genre: "pop",
    source: "./assets/whip-afro.mp3",
  },
];

const displaySong = document.querySelector(".display");
const songControlBtns = document.querySelector(".song-control-btns");
const songEl = document.querySelector(".song-assets");
currentSongId = 1;

function renderSong(song) {
  currentSongId = song.id;

  songImg = document.createElement("img");
  songImg.classList.add("song-img");
  songImg.src = song.img;

  songTitle = document.createElement("p");
  songTitle.classList.add("song-title");
  songTitle.innerHTML = song.name;

  songArtist = document.createElement("p");
  songArtist.classList.add("song-artist");
  songArtist.innerHTML = song.artist;

  songTrack = document.createElement("audio");
  songTrack.classList.add("show-audio");
  songTrack.src = song.source;
  songTrack.controls = true;

  songEl.appendChild(songImg);
  songEl.appendChild(songTitle);
  songEl.appendChild(songArtist);
  songEl.appendChild(songTrack);
}

renderSong(songsObj[0]);

/** Toggle Theme */

function toggleTheme() {
  const bodyBg = document.querySelector(".wrappper");
  bodyBg.classList.toggle("change-theme");

  if (bodyBg.classList.contains("change-theme")) {
    themeBtn.innerHTML = "Enable LIGHT theme";
  } else {
    themeBtn.innerHTML = "Enable DARK theme";
  }
}

const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", toggleTheme);

/** Next and previous button */

const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");

nextBtn.addEventListener("click", () => {
  if (currentSongId == songsObj.length) {
    currentSongId = 0;
    songEl.replaceChildren();
    renderSong(songsObj[currentSongId]);
    return;
  }

  songEl.replaceChildren();
  renderSong(songsObj[currentSongId]);
});

previousBtn.addEventListener("click", () => {
  if (currentSongId == 1) {
    songEl.replaceChildren();
    renderSong(songsObj[songsObj.length - 1]);
  } else {
    songEl.replaceChildren();
    renderSong(songsObj[currentSongId - 2]);
  }
});

/** Add to playlist */
let tempPlayList;

function addSongToPlaylist() {
  tempPlayList = document.querySelector(".playlist-songs");
  let flag = true;

  tempPlaylistArr.map((item) => {
    if (item === songsObj[currentSongId - 1].name) {
      flag = false;
    }
  });
  if (tempPlaylistArr.length == 0 || flag) {
    const songEl = document.createElement("li");
    songEl.innerHTML = songsObj[currentSongId - 1].name;
    songEl.classList.add("newsong");
    tempPlayList.appendChild(songEl);
    tempPlaylistArr.push(songsObj[currentSongId - 1].name);
  }
}

const addToPlaylistBtn = document.querySelector(".add-to-playlist");
addToPlaylistBtn.addEventListener("click", addSongToPlaylist);
let tempPlaylistArr = [];

/** Create Playlist */

const createPlaylistBtn = document.querySelector(".create-playlist");
const playlistNameEl = document.querySelector(".playlist-name");
const myPlaylist = document.querySelector(".my-playlist");

let playlistNameVal;

playlistNameEl.addEventListener("input", (event) => {
  playlistNameVal = event.target.value;
});

function createPlaylist(newPlayListName) {
  const newPlaylist = document.createElement("li");
  newPlaylist.innerHTML = newPlayListName;
  myPlaylist.appendChild(newPlaylist);
  newPlayListName = [];
  newPlayListName = tempPlaylistArr;
  tempPlaylistArr = [];
  let newtempList = document.querySelectorAll(".newsong");
  console.log(newtempList);
  window.remove(newtempList);
  playlistNameEl.value = "";
}

createPlaylistBtn.addEventListener("click", () => {
  if (playlistNameVal) {
    createPlaylist(playlistNameVal);
  }
});

/* First Section - all songs listed below the All songs header */
const leftSongsList = document.querySelector(".songs-list");

function showAllSongs() {
  songsObj.map((song) => {
    const allSongList = document.createElement("li");
    allSongList.innerHTML = song.name;
    leftSongsList.appendChild(allSongList);
  });
}

showAllSongs();

/* First Section - Filter songs based on genre */

const rockSongs = songsObj.filter((song) => song.genre === "rock");

const popSongs = songsObj.filter((song) => song.genre === "pop");

const hipHopSongs = songsObj.filter((song) => song.genre === "hip-hop");

var selectBox = document.querySelector(".form-select");
selectBox.addEventListener("change", (event) => {
  let temp = leftSongsList.querySelectorAll("li");
  temp.forEach((item) => {
    item.remove();
  });

  if (event.target.value === "rock") {
    rockSongs.map((song) => {
      const rockSongList = document.createElement("li");
      rockSongList.innerHTML = song.name;
      leftSongsList.appendChild(rockSongList);
    });
  } else if (event.target.value === "pop") {
    popSongs.map((song) => {
      const popSongList = document.createElement("li");
      popSongList.innerHTML = song.name;
      leftSongsList.appendChild(popSongList);
    });
  } else if (event.target.value === "hip-hop") {
    hipHopSongs.map((song) => {
      const hipHopSongList = document.createElement("li");
      hipHopSongList.innerHTML = song.name;
      leftSongsList.appendChild(hipHopSongList);
    });
  } else {
    showAllSongs();
  }
});
