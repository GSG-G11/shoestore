import React, { Component } from "react";
import "./style.css";

export default class ProductCard extends Component {
  render() {
    const { handleDelete, handleGetDataForUpdate, name, price, imgLink } = this.props;
    return (
      <div className="p-card ">
        <img className="product-img" src={imgLink} alt="product" />
        <div className="product-btn">
        { typeof buttons === 'string' ? <button onClick={this.addToCart}>{addedToCart? 'Delete from cart' : buttons}</button> : <><button onClick={() => handleDelete(this.props.id)}>Delete </button><a href="#open-modal">
            <button onClick={() => handleGetDataForUpdate(this.props.id)}>Edit </button>
          </a></>}
          
        </div>
        <div className="container">
          <h3 className="product-name">{name}</h3>
          <p className="product-price">${price}</p>
        </div>
      </div>
    );
  }
}
