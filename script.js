let isScrolling = false;
let touchStartY = 0;
let touchEndY = 0;

function handleScroll(direction) {
  if (isScrolling) return;

  const sections = document.querySelectorAll('section');
  const currentScrollPosition = window.scrollY;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (
      currentScrollPosition >= sectionTop - 10 &&
      currentScrollPosition < sectionBottom
    ) {
      const nextIndex = index + direction;

      if (nextIndex >= 0 && nextIndex < sections.length) {
        isScrolling = true;
        sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => (isScrolling = false), 1000); // Evita múltiplos scrolls
      }
    }
  });
}

// Desktop scroll event
document.addEventListener('wheel', (event) => {
  const direction = event.deltaY > 0 ? 1 : -1;
  handleScroll(direction);
});

// Mobile touch events
document.addEventListener('touchstart', (event) => {
  touchStartY = event.touches[0].clientY;
});

document.addEventListener('touchend', (event) => {
  touchEndY = event.changedTouches[0].clientY;
  const direction = touchStartY > touchEndY ? 1 : -1; // 1 para baixo, -1 para cima
  handleScroll(direction);
});
