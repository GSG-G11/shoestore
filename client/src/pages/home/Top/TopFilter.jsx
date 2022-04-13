import React, { Component } from 'react'
import Dropdwon from "../../../components/header/downHeader/Dropdown";
import './style.scss';

export default class TopFilter extends Component {
  render() {
    const { handleChangePrice, handleChangeCategory } = this.props;
    return (
      <div className='trend-with-filter'>
        <Dropdwon handleChangeCategory={handleChangeCategory} options={['Filter by Category', 'Men', 'Women', 'Kids']} />
        <div className='pHeader'>
          <p>TOP PRODUCTS</p>
          <h1>TRENDING THIS WEEK</h1>
        </div>
        <Dropdwon handleChangePrice={handleChangePrice}  options={['Filter by Price', '100<', '100 - 200',  '200>']} />

      </div>
    )
  }
}
