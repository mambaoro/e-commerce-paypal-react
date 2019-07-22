/* eslint-disable prettier/prettier */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */

import { Container } from 'unstated';
import { storeProducts, detailProduct } from '../../data';

export default class ProductProvider extends Container {
  state = {
    products: [...storeProducts],
    detailProduct: { ...detailProduct },
    cart: [],
    modalOpen: false,
    modalProduct: { ...detailProduct },
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  handleDetail = id => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const newCurrentDetail = this.state.products[id > 0 && id - 1];
    this.setState({
      detailProduct: newCurrentDetail,
      modalProduct: newCurrentDetail,
    });
  };

  addToCart = id => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const newState = this.state.products;
    newState[id > 0 && id - 1].inCart = true;
    newState[id > 0 && id - 1].total = newState[id > 0 && id - 1].price;
    newState[id > 0 && id - 1].count = 1;
    this.setState({
      products: newState,
    });
    this.setState(
      () => {
        const newCart = [];
        // eslint-disable-next-line array-callback-return
        newState.map(item => {
          item.inCart && newCart.push(item);
        });
        return { cart: newCart };
      },
      () => {
        this.addTotal();
      },
    );
  };

  openModal = id => {
    const product = (id > 0 && id - 1) || 0;
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen,
      modalProduct: prevState.products[product],
    }));
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
    });
  };

  incrementQuantity = id => {
    const tempProducts = [...this.state.products];
    const Id = id > 0 && id - 1 || 0;
    tempProducts[Id].count += 1;
    this.setState(() => ({
      products: tempProducts, 
    }));
    this.addTotal();
  };

  decrementQuantity = id => {
    const tempProducts = [...this.state.products];
    const Id = id > 0 && id - 1 || 0;
    if (tempProducts[Id].count > 0) {
      tempProducts[Id].count -= 1;
      if (tempProducts[Id].count === 0) this.removeItem(id);
    }
    this.setState(() => ({
      products: tempProducts,
    }));
    this.addTotal();
  };

  removeItem = id => {
    const Id = id > 0 && id -1 || 0;
    const tempProducts = [...this.state.products];
    const newCart = this.state.cart.filter(item => item.id !== id);
    tempProducts[Id].inCart = false;
    tempProducts[Id].count = 0;
    tempProducts[Id].total = 0;
    this.setState(() => ({
      cart: newCart,
      products: tempProducts,
    }));
    this.addTotal();
  };

  clearCart = () => {
    const newStore = this.state.products.map(item => {
      const inCart = false;
      return { ...item, inCart };
    });
    this.setState(() => ({
      cart: [],
      products: newStore,
    }))
  };

  addTotal = () => {
    let subTotal = 0;
    this.state.cart.map(item => {
      subTotal += item.total * item.count;
    });
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => ({
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total,
    }));
  };
}
