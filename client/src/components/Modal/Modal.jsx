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

  updteProduct = (id) => {
    const { updateProductState } = this.props;
    const { name, price, description, image } = this.state;
    // let allProducts = [...this.state.products];
    // const upadtedNote = allProducts.filter(({ id }) => productId === id);
    if (!name || !price || !description || !image) {
      this.setState({ errorMsg: "Please fill all fields" });
    } else {
      const data = { name, price, description, image };
      axios
        .post(`/api/v1/updateProduct/${id}`, data)
        .then((res) => {
          const { product } = res.data;
          updateProductState(product);
          this.setState({
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

  render() {
    const { errorMsg, name, description, price, image } = this.state;
    const { modalOpened, handleModalOpened } = this.props;
    console.log(this.props, "props init")
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
            {errorMsg ? <p className="error-message">{errorMsg}</p> : null}

            <button onClick={this.addProduct}>{modalOpened}</button>
          </div>
        </div>
      </>
    );
  }
}
