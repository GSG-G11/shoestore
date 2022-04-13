import React, { Component } from "react";
import "./style.css";

export default class ProductCard extends Component {
  state = {
    addedToCart: false,
  }
  addToCart = () => {
    const { name, price, imgLink, id, changeCart} = this.props;
    const { addedToCart } = this.state;
    if(!addedToCart) {
    const products = JSON.parse(localStorage.getItem('products'));
    products.push({ id, name, price, imgLink });
    localStorage.setItem('products', JSON.stringify(products));
    this.setState({ addedToCart: true });
    changeCart(products.length)

    } else {
      const products = JSON.parse(localStorage.getItem('products'));
      const newProducts = products.filter(item => item.id !== id);
      localStorage.setItem('products', JSON.stringify(newProducts));
      this.setState({ addedToCart: false });
      changeCart(newProducts.length)

    }
  };

  componentDidMount() {
    const { id, buttons , changeCart} = this.props;
    if(typeof buttons === 'string'){
    const products = JSON.parse(localStorage.getItem('products'));
    const addedToCart = products.some(item => item.id === id);
    this.setState({ addedToCart });
    changeCart(products.length)

  }
  }
  render() {

    const { name, price, imgLink, buttons, handleDelete, handleGetDataForUpdate,id } = this.props;
    const { addedToCart } = this.state;

    return (
      <div className="p-card ">
        <img className="product-img" src={imgLink} alt="product" />
        <div className="product-btn">

        { typeof buttons === 'string' ? <button onClick={this.addToCart}>{addedToCart? 'Delete from cart' : buttons}</button> : <><button onClick={() => handleDelete(this.props.id)}>Delete </button><a href="#open-modal">
            <button onClick={() => handleGetDataForUpdate(this.props.id)}>Edit </button>
          </a></>}
          
        </div>
        <div className="container">
<<<<<<< HEAD
          <h3 className="product-name" onClick={(e) => { e.preventDefault();
          window.location.href=`/product/${id}`;}}>{name}</h3>
          <p className="product-price">${price}</p>
=======
          <h3 className="product-name">{name}</h3>
          <p className="product-price">${(+price).toFixed(0)}</p>
>>>>>>> main

        </div>
      </div>
    );
  }
}
