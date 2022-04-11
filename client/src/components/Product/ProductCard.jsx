import React, { Component } from 'react';
import './style.css';

export default class ProductCard extends Component {
  render() {
    const { name, price, imgLink, buttons } = this.props;
    return (
      <div className='p-card '>
        <img className='product-img' src={imgLink} alt='product' />
        <div className="product-btn">
           { typeof buttons === 'string' ? <button>{buttons}</button> : buttons.map(button => <button>{button}</button>)}
            </div>
        <div className='container'>
          <h3 className='product-name'>{name}</h3>
          <p className='product-price'>${price.toFixed(0)}</p>
        </div>
      </div>
    );
  }
}
