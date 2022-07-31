import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Search from './Search';
import Categories from '../components/Categories';

class Home extends Component {
  render() {
    const { numOfCartItems, sendToCart } = this.props;
    return (
      <main>
        <div className="top-bar">
          
          <div className="search-container">
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <Search sendToCart={ sendToCart } />
          </div>
          <Link to="/cart" data-testid="shopping-cart-button">
            <button
              className='cart-button'
              type="button"
              value="Carrinho"
            >
              Seu carrinho
              {' '}
              <i className="fa fa-shopping-cart" />
              <span data-testid="shopping-cart-size">
                {numOfCartItems}
              </span>
            </button>
          </Link>
        </div>
        <div className="content">
          <Categories sendToCart={ sendToCart } />
        </div>
      </main>
    );
  }
}

Home.propTypes = {
  numOfCartItems: PropTypes.number,
  sendToCart: PropTypes.func,
}.isRequired;

export default Home;
