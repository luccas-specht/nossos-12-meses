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
      currentScrollPosition >= sectionTop &&
      currentScrollPosition < sectionBottom
    ) {
      const nextIndex = index + direction;

      if (nextIndex >= 0 && nextIndex < sections.length) {
        isScrolling = true;
        sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => (isScrolling = false), 300); // Evita múltiplos scrolls
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
