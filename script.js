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

// scrollend does not work for IOS: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollend_event
let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    const button = document.getElementById('float');
    button.classList.remove('show-float');
  }, 1500);
});

const scrollToSectionWithDelay = (currentSection, delay = 1000) => {
  const targetSection = document.querySelector(`#section-${currentSection}`);

  if (!targetSection) return;
  targetSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  if (currentSection > 1) {
    setTimeout(() => {
      scrollToSectionWithDelay(currentSection - 1, delay);
    }, delay);
  }
};

const backToBeginningLink = document.querySelector('.back-to-beginning');
backToBeginningLink.addEventListener('click', (event) => {
  event.preventDefault();

  const currentSection = 12; // start from 12th section = section-12
  scrollToSectionWithDelay(currentSection);
});
