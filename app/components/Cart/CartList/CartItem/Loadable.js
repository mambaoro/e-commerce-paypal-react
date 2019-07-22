/**
 *
 * Asynchronously loads the component for CartItem
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
