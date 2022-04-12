import React, { Component } from 'react';
import Ad from '../../components/Ad/Ad';
import TopFilter from './Top/TopFilter';
import HomeLanding from '../../components/Home/home';
import Products from './displayProducts/Products';

export default class Home extends Component {
  state = {};
  render() {
    const { changeCart } = this.props;
    return (
      <div>
        <HomeLanding />
        <TopFilter />
        <Products changeCart={changeCart} />
        <Ad />
      </div>
    );
  }
}
