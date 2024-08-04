/* -------------------------------------------------------------------------- */
/*                               Hamburger icon                               */
/* -------------------------------------------------------------------------- */

const hamburgerInit = () => {
  const hamburgerButton = document.querySelectorAll('[data-hamburger-icon]');
  if (hamburgerButton.length) {
    hamburgerButton.forEach((hamburger) => {
      const hamburgerIcon = hamburger.querySelector('.hamburger');
      hamburger.addEventListener('click', () => {
        hamburgerIcon.classList.toggle('is-active');
        if (hamburgerIcon.classList.contains('is-active')) {
          const computedStyle = window.getComputedStyle(hamburgerIcon);
          if (computedStyle.animationName !== 'none') {
            const clone = hamburger.cloneNode(true);
            hamburger.parentNode.replaceChild(clone, hamburger);
          }
        }
      });
    });
  }
};

export default hamburgerInit;
