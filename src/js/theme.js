import { docReady } from './utils';
import detectorInit from './detector';
import dropdownOnHover from './dropdown-on-hover';
import dropdownMenuInit from './dropdown-menu';
import scrollInit from './scroll';
import initMap from './googleMap';
import parallaxInit from './parallax';
import swiperInit from './swiper';
import lightboxInit from './lightbox';
import bgPlayerInit from './bg-player';
import hamburgerInit from './hamburger';
import formInit from './form-processor';
import zanimationInit from './zanimation';
import preloaderInit from './preloader';
import inertiaInit from './inertia';

/* -------------------------------------------------------------------------- */
/*                            Theme Initialization                            */
/* -------------------------------------------------------------------------- */
docReady(detectorInit);
docReady(dropdownOnHover);
docReady(dropdownMenuInit);
docReady(scrollInit);
docReady(initMap);
docReady(parallaxInit);
docReady(swiperInit);
docReady(lightboxInit);
docReady(bgPlayerInit);
docReady(zanimationInit);
docReady(hamburgerInit);
docReady(formInit);
docReady(preloaderInit);
docReady(inertiaInit);
