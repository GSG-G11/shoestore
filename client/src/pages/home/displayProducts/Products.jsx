import React, { Component } from 'react';
import axios from 'axios';

export default class Products extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios.get('/api/v1/getProducts').then(res => this.setState({ products: res }));
  }

  render() {
    return <div></div>;
  }
}
