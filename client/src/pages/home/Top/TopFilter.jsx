import React, { Component } from 'react'
import Dropdwon from "../../../components/header/downHeader/Dropdown";
import './style.scss';

export default class TopFilter extends Component {
  render() {
    return (
      <div className='trend-with-filter'>
        <Dropdwon options={['Filter by Category', 'Small', 'Medium', 'Large']} />
        <div className='pHeader'>
          <p>TOP PRODUCTS</p>
          <h1>TRENDING THIS WEEK</h1>
        </div>
        <Dropdwon options={['Filter by Price', '100<', '100 - 200',  '200>']} />

      </div>
    )
  }
}
