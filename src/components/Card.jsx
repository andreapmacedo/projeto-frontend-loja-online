import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  render() {
    const { productId, thumbnail, title, price, onClick, shipping } = this.props;
    return (
      <div className="card" >
        <Link
          to={ `/product/${productId}` }
          data-testid="product-detail-link"
          className="card-link"
        >
          <img className="imgBox"
            src={ thumbnail }
            alt={ title }
          />
          <div className="info-content">
            <p>{title}</p>
            <p className="price">
              {' '}
              {`R$ ${price}`}
            </p>
            { shipping && <p className="shipping" data-testid="free-shipping"> Frete Grátis </p> }
          </div>
        </Link>
        <div className="content">
          <input
            className="btnAdd"
            data-testid="product-add-to-cart"
            type="button"
            value="ADICIONAR AO CARRINHO"
            onClick={ onClick }
          />
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  productId: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default Card;
