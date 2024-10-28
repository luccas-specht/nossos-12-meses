let isScrolling = false;

document.addEventListener('wheel', (event) => {
  if (isScrolling) return;

  const sections = document.querySelectorAll('section');
  const direction = event.deltaY > 0 ? 1 : -1;
  const currentScrollPosition = window.scrollY;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    if (
      currentScrollPosition >= sectionTop &&
      currentScrollPosition < sectionTop + section.offsetHeight
    ) {
      const nextIndex = index + direction;
      if (nextIndex >= 0 && nextIndex < sections.length) {
        isScrolling = true;
        sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => (isScrolling = false), 300);
      }
    }
  });
});
