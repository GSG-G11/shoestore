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
  };
  addProductToState = (newProduct) => {
    this.setState({
      products: [...this.state.products, newProduct],
    });
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

    // axios
    //     .post("/api/v1/updateProduct/2", {
    //       name: "Updated",
    //       price: 23,
    //       description: "Flintstone",
    //       image: "https://i.ibb.co/QcHvYvf/back-Ground-header.jpg",

    //     })
    //     .then((response) => console.log(response))
    //     .catch((error) => console.log(error));

  }

  handleDelete = (id) => {
    axios.delete(`/api/v1/deleteProduct/${id}`).then((res) => {
      const products = this.state.products.filter((product) => product._id !== id);
      this.setState({ products });
    });
  };
  
  render() {
    const { products } = this.state;

    return (
      <>
        <div className="SellerHeader">
          <h1>PRODUCTS</h1>
          <Modal addProductToState={this.addProductToState} updateProductState={this.updateProductState} />
        </div>

        {this.state.products && (
          <div className="SellerProducts">
            {products.map((product) => {
              console.log(product);

              return (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  imgLink={product.image}
                  handleDelete={() => this.handleDelete(product.id)}
                  handleUpdate = {() => this.handleUpdate(product.id)}
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
