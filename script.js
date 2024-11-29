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
let hasUserInteractedWith = false;
const music = document.getElementById('background-music');

window.addEventListener('click', () => {
  hasUserInteractedWith = true;
});

window.addEventListener('scroll', () => {
  if (hasUserInteractedWith && !isPlaying) {
    music.play();
    isPlaying = true;
    console.log('Música tocando');
  }
});
