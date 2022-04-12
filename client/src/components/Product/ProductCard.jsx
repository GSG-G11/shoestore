import React, { Component } from 'react';
import './style.css';

export default class ProductCard extends Component {
  state = {
    addedToCart: false,
  }
  addToCart = () => {
    const { name, price, imgLink, id } = this.props;
    const { addedToCart } = this.state;
    if(!addedToCart) {
    const products = JSON.parse(localStorage.getItem('products'));
    products.push({ id, name, price, imgLink });
    localStorage.setItem('products', JSON.stringify(products));
    this.setState({ addedToCart: true });
    } else {
      const products = JSON.parse(localStorage.getItem('products'));
      const newProducts = products.filter(item => item.id !== id);
      localStorage.setItem('products', JSON.stringify(newProducts));
      this.setState({ addedToCart: false });
    }
  };

  componentDidMount() {
    const { id, buttons } = this.props;
    if(typeof buttons === 'string'){
    const products = JSON.parse(localStorage.getItem('products'));
    const addedToCart = products.some(item => item.id === id);
    this.setState({ addedToCart });
  }
  }
  render() {
    const { name, price, imgLink, buttons } = this.props;
    const { addedToCart } = this.state;
    return (
      <div className='p-card '>
        <img className='product-img' src={imgLink} alt='product' />
        <div className="product-btn">
           { typeof buttons === 'string' ? <button onClick={this.addToCart}>{addedToCart? 'Delete from cart' : buttons}</button> : buttons.map(button => <button>{button}</button>)}
            </div>
        <div className='container'>
          <h3 className='product-name'>{name}</h3>
          <p className='product-price'>${price.toFixed(0)}</p>
        </div>
      </div>
    );
  }
}
