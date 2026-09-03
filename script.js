/* ==========================================================================
   DRESSD - INTERACTIVITY & NAVIGATION SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Mobile Navigation Drawer Toggle (if applicable)
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'rgba(255, 255, 255, 0.95)';
        navMenu.style.padding = '1.5rem';
        navMenu.style.backdropFilter = 'blur(16px)';
        navMenu.style.borderBottom = '1px solid #e5e3dd';
      }
    });
  }

  // Interactive Hover Effects on Floating Cutouts
  const cutoutItems = document.querySelectorAll('.cutout-item');
  cutoutItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.zIndex = '10';
    });
    item.addEventListener('mouseleave', () => {
      item.style.zIndex = '1';
    });
  });

});
