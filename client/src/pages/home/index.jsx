import React, { Component } from 'react';
import Ad from '../../components/Ad/Ad';
import TopFilter from './Top/TopFilter';
import HomeLanding from '../../components/Home/home';
import Products from './displayProducts/Products';

export default class Home extends Component {
  state = {
    selectedCategory: 0,
    priceRange: 0,
  };

  handleChangePrice =(e) => {
    this.setState({ priceRange: e.target.value });
  }
  handleChangeCategory =(e) => {
    this.setState({ selectedCategory: e.target.value });
  }


  render() {
    const { changeCart, inputSearch } = this.props;
    const { selectedCategory, priceRange } = this.state;
    return (
      <div>
        <HomeLanding />
        <TopFilter handleChangePrice={this.handleChangePrice} handleChangeCategory={this.handleChangeCategory} />
        <Products selectedCategory={selectedCategory} priceRange={priceRange} inputSearch={inputSearch} changeCart={changeCart} />
        <Ad />
      </div>
    );
  }
}
