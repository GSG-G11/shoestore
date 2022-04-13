import React, { Component } from 'react';
import ProductCard from '../../../components/Product/ProductCard';
import axios from 'axios';
import './style.css';

export default class Products extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios.get('/api/v1/getProducts').then(res => this.setState({ products: res.data }));
    !localStorage.getItem('products') && localStorage.setItem('products', JSON.stringify([]));

  }
  

  render() {
    const { products } = this.state;
    const { changeCart } = this.props;
    console.log(products);
    return <div className='home-products'>
      {products.map(({id, name, price, image}) => <ProductCard changeCart={changeCart}  key={id} id={id} name= {name} price={+price} imgLink={image} buttons={'Add to cart'} />)}

    </div>;
  }
}
