import React from "react";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Product() {
  return (
    <div className="maindiv__porducts">
      <div className="leftside">
        <img
          className="productimg"
          src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/666834ee-1d3f-46e5-91ee-7ef360a58ed5/zoomx-invincible-run-flyknit-mens-road-running-shoes-sP2zk7.png"
          alt="productimg"
        ></img>
      </div>

      <div className="rightside">
        <h1>Nike SB Zoom </h1>
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
        <p className="proDesc">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <hr className="divider" />
        <div className="bottomSec">
          <p className="productPrice"> $199.00 </p>
          <button className="addproductcart">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
