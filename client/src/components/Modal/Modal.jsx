// import Link from 'react-dom';
import React, { Component } from "react";
import "./style.scss";
import axios from "axios";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      status: "",
      id: "",
      edit: false,
      inputsValues: { name: '', description: '', price: 0.0, image: '' },

    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  addProduct = (e) => {
    e.preventDefault();
    const { name, description, price, image } = this.state.inputsValues;

    axios
      .post("/api/v1/addProduct", {
        name: name,
        description: description,
        price: price,
        image: image,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  render() {
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
              name="sname"
              onChange={this.handleChange}
            />
            <input
              placeholder="Product Price (in USD)"
              type="number"
              onChange={this.handleChange}
            />
            <textarea
              placeholder="Product Description"
              id=""
              cols="30"
              rows="10"
              onChange={this.handleChange}
            ></textarea>
            <input
              placeholder="Product Image"
              type="text"
              onChange={this.handleChange}
            />
            <button onClick={this.addProduct}> submit</button>
          </div>
        </div>
      </>
    );
  }
}
