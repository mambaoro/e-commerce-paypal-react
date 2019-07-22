/**
 *
 * Modal
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Subscribe } from 'unstated';
import { Link } from 'react-router-dom';
import ProductProvider from '../ProductList/ProductProvider';
import Button from '../Button';

function Modal() {
  return (
    <Subscribe to={[ProductProvider]}>
      {product => {
        const isOpen = product.state.modalOpen;
        const { img, title, price } = product.state.modalProduct;
        return (
          (!isOpen && null) ||
          (isOpen && (
            <DivModal>
              <div className="container">
                <div className="row">
                  <div
                    id="modal"
                    className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                  >
                    <h5>item added to the cart</h5>
                    <img src={img} className="img-fluid" alt="product" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">price : $ {price}</h5>
                    <div className="d-flex align-items-center justify-content-center">
                      <Link to="/">
                        <Button onClick={() => product.closeModal()}>
                          store
                        </Button>
                      </Link>
                      <Link to="/cart">
                        <Button cart onClick={() => product.closeModal()}>
                          go to cart
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </DivModal>
          ))
        );
      }}
    </Subscribe>
  );
}

const DivModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;

Modal.propTypes = {};

export default memo(Modal);
