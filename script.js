const audio = document.getElementById('background-music');
const divTag = document.getElementById('container-id');

const htmlWithPlayIcon = `
  <div class="flat-music-icon" id="play-icon-id" onclick="playBackgroundMusic()">
    <img src="./assets/play.png" alt="play music" />
  </div>
`;
const htmlWithPauseIcon = `
  <div class="flat-music-icon" id="pause-icon-id" onclick="pauseBackgroundMusic()">
    <img src="./assets/pause.png" alt="pause music" />
  </div>
`;

function addPlayIconOnScreen() {
  const pauseIcon = document.getElementById('pause-icon-id');
  if (pauseIcon) {
    pauseIcon.remove();
  }
  divTag.innerHTML += htmlWithPlayIcon;
}

function addPauseIconOnScreen() {
  const playIcon = document.getElementById('play-icon-id');
  if (playIcon) {
    playIcon.remove();
  }
  divTag.innerHTML += htmlWithPauseIcon;
}

function playBackgroundMusic() {
  audio.play().catch((error) => console.log(error));
  addPauseIconOnScreen();
}

function pauseBackgroundMusic() {
  audio.pause();
  addPlayIconOnScreen();
}

function startPlayingBackgroundMusic() {
  playBackgroundMusic();
}
