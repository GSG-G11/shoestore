import React, { Component } from "react";
import CombinedFooter from "../../components/Footer/CombinedFooter";
import ProductCard from "../../components/Product/ProductCard";
import Modal from "../../components/Modal/Modal";
import axios from "axios";

import "./seller.css";
export default class Seller extends Component {
  state = {
    products: [],
    newleyAdded: {},
    modalOpened: "Add Product",
   
  };
  addProductToState = (newProduct) => {
    this.setState({
      products: [...this.state.products, newProduct],
    });
  };
  deleteProductFromState = (id) => {
    const newProducts = this.state.products.filter((product) => product._id !== id);
    this.setState({ products: newProducts });
  };

  updateProductState = (product) => {
    const { products } = this.state;
    const newProducts = products.map((item) => {
      if (item.id === product.id) {
        return product;
      }
      return item;
    });
    this.setState({ products: newProducts });
  };
  componentDidMount() {
    axios.get("/api/v1/getProducts").then((res) => {
      const products = res.data;

      this.setState({ products });
    });
  }

  handleDelete = (id) => {
    axios.delete(`/api/v1/deleteProduct/${id}`).then((res) => {
      const products = this.state.products.filter(
        (product) => product._id !== id
      );
      this.setState({ products });
    });
  };
  
  handleUpdate = (id) => {
    axios.get(`/api/v1/getProduct/${id}`).then((res) => {
      const  product  = res.data[0];
      console.log(product);

      this.setState({
        name : product.name,
        price: product.price,
        description: product.description,
        image: product.image,
      });
    });
    this.setState({ modalOpened: "Update Product" });
  };
  handleModalOpened = () => {
    this.setState({ modalOpened: "Add Product" });
   
  };

  render() {
    const { products } = this.state;

    return (
      <>
        <div className="SellerHeader">
          <h1>PRODUCTS</h1>
          <Modal
            addProductToState={this.addProductToState}
            updateProductState={this.updateProductState}
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
                  handleUpdate={() => this.handleUpdate(product.id)}
                  modalOpened={this.state.modalOpened}
                />
              );
            })}
          </div>
        )}

        <CombinedFooter />
      </>
    );
  }
}