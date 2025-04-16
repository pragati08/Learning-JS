/** All the Songs Object */
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
const leftSongsList = document.querySelector(".songs-list");
const rockSongs = songsObj.filter((song) => song.genre === "rock");
const popSongs = songsObj.filter((song) => song.genre === "pop");
const hipHopSongs = songsObj.filter((song) => song.genre === "hip-hop");
const themeBtn = document.querySelector(".theme-btn");
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");
const addToPlaylistBtn = document.querySelector(".add-to-playlist");
const createPlaylistBtn = document.querySelector(".create-playlist");
const playlistNameEl = document.querySelector(".playlist-name");
const myPlaylist = document.querySelector(".my-playlist");
const playlistSec = myPlaylist.getElementsByTagName("li");

let result;
let playlistNameVal;
let currentSongId = 1;
let tempPlayList;
let flag;
let allPlaylists = {};
let tempPlaylistArr = [];
let playListArr = [];
let resultObj;
let playlistArray = [];

/** Display the songInfo(img, title, artist, track) of the current song in the middle section of the page */
function renderCurrentSong(song) {
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

renderCurrentSong(songsObj[0]);

/** Left section - When the user clicks on any song from the list the song should be played. */
function playSongOnClick() {
  const songList = document.querySelectorAll(".songs-list li");

  songList.forEach((song) => {
    song.addEventListener("click", () => {
      songsObj.forEach((item, i) => {
        if (item.name === song.innerHTML) {
          songEl.replaceChildren();
          renderCurrentSong(songsObj[i]);
          const audio = songEl.querySelector(".show-audio");
          audio.play();
        }
      });
    });
  });
}

/** The songs list will be created once the page is completely loaded, else the list will be empty */
document.addEventListener("DOMContentLoaded", () => {
  showSongs(songsObj);
  playSongOnClick();
});

/* First Section - all songs listed below the All songs header */
function showSongs(songArray) {
  songArray.map((song) => {
    const allSongList = document.createElement("li");
    allSongList.innerHTML = song.name;
    leftSongsList.appendChild(allSongList);
  });
}

/* First Section - Filter songs based on genre */
var selectBox = document.querySelector(".form-select");
selectBox.addEventListener("change", (event) => {
  let temp = leftSongsList.querySelectorAll("li");
  temp.forEach((item) => {
    item.remove();
  });

  if (event.target.value === "rock") {
    showSongs(rockSongs);
    playSongOnClick();
  } else if (event.target.value === "pop") {
    showSongs(popSongs);
    playSongOnClick();
  } else if (event.target.value === "hip-hop") {
    showSongs(hipHopSongs);
    playSongOnClick();
  } else {
    showSongs(songsObj);
    playSongOnClick();
  }
});

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

themeBtn.addEventListener("click", toggleTheme);

/** Next and previous button */
nextBtn.addEventListener("click", () => {
  if (currentSongId == songsObj.length) {
    currentSongId = 0;
    songEl.replaceChildren();
    renderCurrentSong(songsObj[currentSongId]);
    const audio = songEl.querySelector(".show-audio");
    audio.play();
    return;
  }
  songEl.replaceChildren();
  renderCurrentSong(songsObj[currentSongId]);
  const audio = songEl.querySelector(".show-audio");
  audio.play();
});

previousBtn.addEventListener("click", () => {
  if (currentSongId == 1) {
    songEl.replaceChildren();
    renderCurrentSong(songsObj[songsObj.length - 1]);
    const audio = songEl.querySelector(".show-audio");
    audio.play();
  } else {
    songEl.replaceChildren();
    renderCurrentSong(songsObj[currentSongId - 2]);
    const audio = songEl.querySelector(".show-audio");
    audio.play();
  }
});

/** Add to playlist */
function addtoPlaylist() {
  tempPlayList = document.querySelector(".playlist-songs");
  flag = true;

  tempPlaylistArr.map((item) => {
    if (item === songsObj[currentSongId - 1].name) {
      flag = false;
    }
  });
  if (flag) {
    const songEl = document.createElement("li");
    songEl.innerHTML = songsObj[currentSongId - 1].name;
    songEl.classList.add("selected");
    tempPlayList.appendChild(songEl);
    tempPlaylistArr.push(songsObj[currentSongId - 1].name);
  }
}

addToPlaylistBtn.addEventListener("click", addtoPlaylist);

/** Create Playlist */
playlistNameEl.addEventListener("input", (event) => {
  playlistNameVal = event.target.value;
});

/** Takes the name of the playlist as input and adds it to the All Playlist section */
function createPlaylist(newPlayListName) {
  if (newPlayListName !== "") {
    const newPlaylist = document.createElement("li");
    newPlaylist.innerHTML = newPlayListName;
    newPlaylist.classList.add("pl-song");
    myPlaylist.appendChild(newPlaylist);
    playListArr.push(newPlayListName);
    playlistArray.push({
      name: newPlayListName,
      songArr: tempPlaylistArr,
    });
  }
}

/** Click handler for Create Playlist btn */
createPlaylistBtn.addEventListener("click", () => {
  createPlaylist(playlistNameVal);
  tempPlaylistArr = [];
  playlistNameEl.value = "";
  tempPlayList.querySelectorAll("li").forEach((item) => {
    item.remove();
  });
});

/** On click of playlist name form the All Playlist list, show the songs in the Current Playlist section */
function renderPlaylistSong(arr) {
  tempPlayList.querySelectorAll("li").forEach((item) => {
    item.remove();
  });
  arr.map((song) => {
    const allSongList = document.createElement("li");
    allSongList.innerHTML = song;
    tempPlayList.appendChild(allSongList);
    playSongOnClick();
  });
}

/** Click handler for each playlist item */
document.addEventListener("click", () => {
  const ele = document.querySelectorAll(".pl-song");
  if (ele.length > 0) {
    ele.forEach((item) => {
      item.addEventListener("click", () => {
        const longSongs = playlistArray.filter(
          (song) => song.name === item.innerHTML
        );
        renderPlaylistSong(longSongs[0].songArr);
      });
    });
  }
});
