/**
 *
 * Asynchronously loads the component for Product
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
