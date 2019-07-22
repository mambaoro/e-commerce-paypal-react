/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavBar from '../../components/NavBar/Loadable';
import ProductList from '../../components/ProductList/Loadable';
import Details from '../../components/Details/Loadable';
import Cart from '../../components/Cart/Loadable';
import Modal from '../../components/Modal/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/cart" component={Cart} />
        <Route component={NotFoundPage} />
      </Switch>
      <Modal />
      <GlobalStyle />
    </div>
  );
}
