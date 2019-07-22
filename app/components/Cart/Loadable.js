/**
 *
 * Asynchronously loads the component for Cart
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
