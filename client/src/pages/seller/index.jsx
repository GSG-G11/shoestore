import React, { Component } from "react";
import ProductCard from "../../components/Product/ProductCard";
import Modal from "../../components/Modal/Modal";
import axios from "axios";

import "./seller.css";
export default class Seller extends Component {
  state = {
    products: [],
    idUpdate:0,
    newleyAdded: {},
    nameUpdate: "",
    priceUpdate: "",
    descriptionUpdate: "",
    imageUpdate: "",
    errorMsgUpdate: "",
    modalOpened: "Add Product",
  };
  addProductToState = (newProduct) => {
    this.setState({
      products: [...this.state.products, newProduct],
    });
  };
  deleteProductFromState = (id) => {
    const newProducts = this.state.products.filter(
      (product) => product._id !== id
    );
    this.setState({ products: newProducts });
  };

  componentDidMount() {
    axios.get("/api/v1/getProducts").then((res) => {
      const products = res.data;

      this.setState({ products });
    });
  }
  handleModalOpened = () => {
    this.setState({ modalOpened: "Add Product" });
  };

  handleDelete = (id) => {
    axios.delete(`/api/v1/deleteProduct/${id}`).then((res) => {
      const products = this.state.products.filter(
        (product) => product._id !== id
      );
      this.setState({ products });
    });
  };

  handleGetDataForUpdate = (id) => {
    axios.get(`/api/v1/getProduct/${id}`).then((res) => {
      const product = res.data[0];
      console.log(product);
      this.setState({
        idUpdate: product.id,
        nameUpdate: product.name,
        priceUpdate: product.price,
        descriptionUpdate: product.description,
        imageUpdate: product.image,
        modalOpened: "Update Product",
      });
    });
  };

  render() {
    const { products } = this.state;

    return (
      <>
        <div className="SellerHeader">
          <h1>PRODUCTS</h1>
          <Modal
          idUpdate = {this.state.idUpdate}
            nameUpdate={this.state.nameUpdate}
            priceUpdate={this.state.priceUpdate}
            descriptionUpdate={this.state.descriptionUpdate}
            imageUpdate={this.state.imageUpdate}
            addProductToState={this.addProductToState}
            deleteProductFromState={this.deleteProductFromState}
            modalOpened={this.state.modalOpened}
            handleModalOpened={this.handleModalOpened}
          />
        </div>

        {this.state.products && (
          <div className="SellerProducts">
            {products.map((product) => {
              // console.log(product);
              return (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  imgLink={product.image}
                  handleDelete={() => this.handleDelete(product.id)}
                  handleGetDataForUpdate={() =>
                    this.handleGetDataForUpdate(product.id)
                  }
                  modalOpened={this.state.modalOpened}
                />
              );
            })}
          </div>
        )}

      </>
    );
  }
}
