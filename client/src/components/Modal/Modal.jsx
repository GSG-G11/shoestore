// import Link from 'react-dom';
import React, { Component } from "react";
import "./style.scss";
import axios from "axios";

export default class Modal extends Component {
  state = {
    products: [],
    name: "",
    price: "",
    description: "",
    image: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // addProduct = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("/api/v1/addProduct", this.props)
  //     .then((response) => {
  //       return response.data;
  //     })
  //     .catch((error) => console.log(error));
  // };

  addProduct = (e) => {
    e.preventDefault();
    const { addProductToState } = this.props;
    const { name, price, description, image } = this.state;
 
      const data = { name, price, description, image };
      axios
        .post("/api/v1/addProduct", data)
        .then((res) => {
          const { product } = res.data;
          addProductToState(product);
          this.setState({
            name: "",
            price: "",
            description: "",
            image: "",
          });
        })
        .catch((err) => console.log(err));
    
  };

  render() {
    const { name, description, price, image } = this.state;

    return (
      <>
        <div>
          <a className="add-btn" href="#open-modal">
            ADD PRODUCT
          </a>
        </div>
        <div id="open-modal" className="modal-window">
          <div className="modal-content">
            <a href="#" title="Close" className="modal-close">
              Close
            </a>
            <h3>ِADD PRODCUT</h3>
            <input
              placeholder="Product Name"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <input
              placeholder="Product Price (in USD)"
              type="number"
              name="price"
              value={price}
              onChange={this.handleChange}
            />
            <textarea
              placeholder="Product Description"
              id=""
              cols="30"
              rows="10"
              name="description"
              value={description}
              onChange={this.handleChange}
            ></textarea>
            <input
              placeholder="Product Image"
              type="text"
              name="image"
              value={image}
              onChange={this.handleChange}
              Required
            />
            <button type="submit" onClick={this.addProduct}>
              {" "}
              submit
            </button>
          </div>
        </div>
      </>
    );
  }
}
