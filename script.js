const observerSection = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const elements = document.querySelectorAll('.hidden');
elements.forEach((element) => observerSection.observe(element));

const audio = document.getElementById('background-music');
let isPlaying = false;
function playMusic() {
  audio
    .play()
    .then(() => {
      console.log('Música tocando!');
      isPlaying = true;
    })
    .catch((error) => {
      console.error('Erro ao tocar música:', error.message);
    });
}

function stopMusic() {
  audio.pause();
  console.log('Música pausada!');
  isPlaying = false;
}
//colocar icone
document.addEventListener('scroll', () => {
  if (isPlaying) {
    stopMusic();
  } else {
    playMusic();
  }
});

document.addEventListener('click', () => {
  if (isPlaying) {
    stopMusic();
  } else {
    playMusic();
  }
});
