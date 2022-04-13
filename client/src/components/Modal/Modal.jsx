// import Link from 'react-dom';
import React, { Component } from "react";
import "./style.scss";
import axios from "axios";

export default class Modal extends Component {
  state = {
    products: [],
    productId: "",
    name: "",
    price: "",
    description: "",
    image: "",
    errorMsg: "",
    // UpdateOrAdd : "",
  };

  // updateOrAddForModal = () => {
  //   if(this.props.modalOpened === "Add product"){ // change between add and update handlers when you press the button in the modal
  //     this.setState({UpdateOrAdd : () => { return this.addProduct} })

  //   }else {
  //     this.setState({UpdateOrAdd : this.updteProduct()})
  //   }
  // }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  closeModal = (value) => {
    this.setState({ isOpen: false });
  };

  // displayOldData = ({id})

  addProduct = (e) => {
    const { addProductToState } = this.props;
    const { name, price, description, image } = this.state;
    if (!name || !price || !description || !image) {
      this.setState({ errorMsg: "Please fill all fields" });
    } else {
      const data = { name, price, description, image };
      axios
        .post("/api/v1/addProduct", data)
        .then((res) => {
          const { product } = res.data;
          console.log(res.data, 5555);
          addProductToState(product);
          this.setState({
            productId: "",
            name: "",
            price: "",
            description: "",
            image: "",
            isOpen: false,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  updateProduct = (id) => {
    const { name, price, description, image } = this.state;
      const data = { name, price, description, image };
      console.log(this.state);
      axios
        .post(`/api/v1/updateProduct/${id}`, data)
        .then((res) => {
          this.setState({
            name: "",
            price: "",
            description: "",
            image: "",
          });
          console.log(res, "res");
        })
        .catch((err) => console.log(err));
  };

  render() {
    const { errorMsg, name, description, price, image } = this.state;
    const {
      idUpdate,
      modalOpened,
      handleModalOpened,
      nameUpdate,
      priceUpdate,
      descriptionUpdate,
      imageUpdate,
    } = this.props;
    console.log(this.props, "props init");
    return (
      <>
        <div>
          <a className="add-btn" href="#open-modal" onClick={handleModalOpened}>
            ADD PRODUCT
          </a>
        </div>
        <div id="open-modal" className="modal-window">
          <div className="modal-content">
            <a href="#" title="Close" className="modal-close">
              Close
            </a>
            <h3>{modalOpened}</h3>

            <input
              placeholder="Product Name"
              type="text"
              name="name"
              value={name || nameUpdate}
              onChange={this.handleChange}
            />
            <input
              placeholder="Product Price (in USD)"
              type="number"
              name="price"
              value={price || priceUpdate}
              onChange={this.handleChange}
            />
            <textarea
              placeholder="Product Description"
              id=""
              cols="30"
              rows="10"
              name="description"
              value={description || descriptionUpdate}
              onChange={this.handleChange}
            ></textarea>
            <input
              placeholder="Product Image"
              type="text"
              name="image"
              value={image || imageUpdate}
              onChange={this.handleChange}
              required
            />
            {errorMsg ? <p className="error-message">{errorMsg}</p> : null}
            <button
              onClick={() => {
                this.updateProduct(idUpdate);
              }}
            >
              {modalOpened}
            </button>
          </div>
        </div>
      </>
    );
  }
}
