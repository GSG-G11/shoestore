import React, { Component } from "react";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

class ProductDet extends Component {

  state = {
    product: {}
  }


  componentDidMount(){
    const id = window.location.href.split('/')[4]  
    axios.get(`/api/v1/getProduct/${id}`).then(res => {
      const product = res.data[0];
      this.setState({product})  
    })
  }



  render() {
    const {product} = this.state; 
    console.log(product);
    return (
      <div className="maindiv__porducts" >
        <div className="leftside">
          <img
            className="productimg"
            src={product.image}
            alt="productimg"
          ></img>
        </div>

        <div className="rightside">
          <h1>{product.name} </h1>
          <div className="reviews__wrapper">
            <p className="review__5">4.6</p>
            <p className="review__stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </p>
            <p className="reviews__num"> 261 Reviews </p>
          </div>
          <p className="proDesc"> {product.description}
          </p>
          <hr className="divider" />
          <div className="bottomSec">
            <p className="productPrice"> {product.price}</p>
            <button className="addproductcart">Add to cart</button>
          </div>
        </div>
      </div>
    );
  }





}

export default ProductDet;
