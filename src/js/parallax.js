/* -------------------------------------------------------------------------- */
/*                               Video Modal                                  */
/* -------------------------------------------------------------------------- */

import utils from './utils';

const parallaxInit = () => {
  const parallax = document.querySelectorAll('[data-parallax]');
  if (parallax.length && window.Rellax) {
    parallax.forEach(item => {
      const options = utils.getData(item, 'rellax');
      const centered = utils.getData(item, 'center');
      // eslint-disable-next-line no-new
      new window.Rellax(item, {
        ...options,
        center: centered,
      });
    });
  }
};

export default parallaxInit;
