import React, { Component } from 'react';
import ProductCard from '../../../components/Product/ProductCard';
import axios from 'axios';
import './style.css';

export default class Products extends Component {
  state = {
    products: [],
    filteredProducts: [],
  };
  componentDidMount() {
    axios.get('/api/v1/getProducts').then(res => this.setState({ products: res.data, filteredProducts: res.data }));
    !localStorage.getItem('products') && localStorage.setItem('products', JSON.stringify([]));
  }
  checkPrice = (priceRange, product) => {
  if(priceRange){
    if(priceRange === '100<'){
      return product.price < 100;
    }  else if(priceRange === '100 - 200'){
      return product.price >= 100 && product.price < 200;
    } else if(priceRange === '200>'){
      return product.price >= 200;
    } else {
      return true;
    }
  } 
}

checkCategory = (selectedCategory, product) => {
  if(selectedCategory === 'Filter by Category' || selectedCategory.trim() === ''){
    return true;
  } else {
  }
  return product.category === selectedCategory.toLowerCase();
    
    }

  render() {
        const { products } = this.state;
    const { changeCart, inputSearch, priceRange, selectedCategory } = this.props;
    return <div className='home-products'>
      {products.filter((product => (inputSearch ? product.name.toLowerCase().includes(inputSearch.toLowerCase()): true) && 
      (priceRange ? this.checkPrice(priceRange, product) : true  ) && (selectedCategory? this.checkCategory(selectedCategory, product) : true) ))
   .map(({id, name, price, image}) => <ProductCard changeCart={changeCart}  key={id} id={id} name= {name} price={+price} imgLink={image} buttons={'Add to cart'} />)}

    </div>;
  }
}
