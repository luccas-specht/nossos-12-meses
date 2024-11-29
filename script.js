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

let isPlaying = false;

const music = document.getElementById('background-music');

const handleIcon = () => {
  const img = document.getElementById('sound-icon');
  if (!isPlaying) {
    img.setAttribute('src', './assets/play.svg');
    music.play();
    isPlaying = true;
  } else {
    img.setAttribute('src', './assets/pause.svg');
    music.pause();
    isPlaying = false;
  }
};

window.addEventListener('scroll', () => {
  const button = document.getElementById('float');
  button.classList.add('show-float');
});

window.addEventListener('scrollend', () => {
  setTimeout(() => {
    const button = document.getElementById('float');
    button.classList.remove('show-float');
  }, 1500);
});
