(() => {
  const links = Array.from(document.querySelectorAll('.section-nav-links a[href^="#"]'));
  const sections = links.map((link) => document.getElementById(link.hash.slice(1))).filter(Boolean);
  if (!sections.length) return;
  const index = document.querySelector('.section-nav-links');

  const update = () => {
    // Match the reading position below the sticky mobile index.
    const offset = window.matchMedia('(max-width: 880px)').matches ? 110 : 120;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= offset) current = section;
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4 &&
        sections[sections.length - 1].getBoundingClientRect().top <= window.innerHeight * 0.75) {
      current = sections[sections.length - 1];
    }
    for (const link of links) {
      if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    // Keep the active destination visible in the horizontal mobile index.
    if (window.matchMedia('(max-width: 880px)').matches) {
      const activeLink = links.find((link) => link.hash === `#${current.id}`);
      const bounds = index.getBoundingClientRect();
      const activeBounds = activeLink.getBoundingClientRect();
      if (activeBounds.left < bounds.left || activeBounds.right > bounds.right) {
        index.scrollTo({ left: index.scrollLeft + activeBounds.left - bounds.left - 12, behavior: 'auto' });
      }
    }
  };

  // This short index can update directly, including in embedded previews where
  // animation frames may be paused by the browser.
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  window.addEventListener('hashchange', update);
  window.addEventListener('site:languagechange', update);
  window.addEventListener('load', update);
  if ('ResizeObserver' in window) new ResizeObserver(update).observe(document.querySelector('main'));
  update();
})();
