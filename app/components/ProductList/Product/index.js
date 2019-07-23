/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/**
 *
 * Product
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Subscribe } from 'unstated';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import ProductProvider from '../ProductProvider';

function Product(props) {
  const { id, title, img, price, inCart } = props.productInfos;
  return (
    <Subscribe to={[ProductProvider]}>
      {product => (
        <DivProduct className="col-9 mx-auto col-md-6 col-lg-3 my-3">
          <div className="card">
            <div
              className="img-container p-5"
              onClick={() => product.handleDetail(id)}
              role="button"
            >
              <Link to="/details">
                <img src={img} alt="product" className="card-img-top" />
              </Link>
              <button
                type="button"
                className="cart-btn"
                disabled={inCart && true}
                onClick={() => {
                  product.addToCart(id);
                  product.openModal(id);
                }}
              >
                {(inCart && (
                  <p className="text-capitalize mb-0" disabled>
                    In Cart
                  </p>
                )) || <FontAwesomeIcon icon={faCartPlus} />}
              </button>
            </div>
            {/* card footer */}
            <div className="card-footer d-flex justify-content-between">
              <p className="align-self-center mb-0">{title}</p>
              <h5 className="text-blue font-italic mb-0">
                <span className="mr-1">$</span>
                {price}
              </h5>
            </div>
          </div>
        </DivProduct>
      )}
    </Subscribe>
  );
}

const DivProduct = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.6s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.6s linear;
  }
  :hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
    .cart-btn {
      transform: translateX(0);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
    .card-img-top {
      transition: all 0.6s ease-in-out;
    }
    :hover {
      .card-img-top {
        transform: scale(1.2);
      }
    }
  }
  .cart-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transition: all 0.2s ease-in-out;
    transform: translate(100%, 100%);
    :hover {
      color: var(--mainBlue);
      cursor: pointer;
    }
  }
`;

Product.propTypes = {
  productInfos: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inCart: PropTypes.bool.isRequired,
  }).isRequired,
};

export default memo(Product);
