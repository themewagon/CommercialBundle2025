import utils from './utils';

/* -------------------------------------------------------------------------- */
/*                                  Inertia                                   */
/* -------------------------------------------------------------------------- */

const inertiaInit = () => {
  const inertia = (element, controller) => {
    const offset = element.getBoundingClientRect().top + window.scrollY;
    const winHeight = window.innerHeight;
    let currentPosition = window.scrollY;
    let previousPosition = 0;
    let y = 0;

    if (!controller) {
      controller = {};
    }
    if (!controller.weight) {
      controller.weight = 2;
    }
    if (!controller.duration) {
      controller.duration = 0.7;
    }
    if (!controller.ease) {
      controller.ease = 'Power3.easeOut';
    }

    // eslint-disable-next-line no-mixed-operators
    element.style.transform = `translateY(${(offset - window.screenY) * 100 / winHeight}px)`;

    function onScrollOrResize() {
      currentPosition = window.scrollY;
      // eslint-disable-next-line no-mixed-operators
      y = controller.weight * (offset - currentPosition) * 100 / winHeight;

      if (currentPosition !== previousPosition) {
        window.TweenMax.to(element, controller.duration, { y, ease: controller.ease });
      }

      previousPosition = currentPosition;
    }

    window.addEventListener('resize', onScrollOrResize);
    window.addEventListener('scroll', onScrollOrResize);
  };

  const inertiaElement = document.querySelectorAll('[data-inertia]');

  inertiaElement.forEach(elem => {
    const options = utils.getData(elem, 'inertia');
    inertia(elem, options || undefined);
  });
};

export default inertiaInit;
