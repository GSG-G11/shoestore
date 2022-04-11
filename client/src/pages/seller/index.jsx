import React, { Component } from "react";
import CombinedFooter from "../../components/Footer/CombinedFooter";
import ProductCard from "../../components/Product/ProductCard";
import Modal from "../../components/Modal/Modal";
import axios from 'axios';

import "./seller.css";
export default class Seller extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios
      .get("/api/v1/getProducts")
      .then((res) =>{
        const products = res.data;
        console.log(res.data);
       this.setState({products })
      });
  }
  render() {
    const { products } = this.state;

    return (
      <>
        <div className="SellerHeader">
          <h1>PRODUCTS</h1>
          <Modal />
        </div>
        
        <div className="SellerProducts">
          { products.map((product) => (
          <ProductCard
            name= {product.name}
            price={product.price}
            imgLink={product.image}
            buttons={["Edit", " Delete"]}
          />
           ))} 


          
        </div>

        <CombinedFooter />
      </>
    );
  }
}
