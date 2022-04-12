import React from "react";
import "./upperHeader.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default class CartIcon extends React.Component {
  render() {
    return (
      <div className="shopping__cart__wrapper">
      <FontAwesomeIcon
        className="shopping__cart__icon"
        icon={faShoppingCart}
        onClick={() => {}}
        
      />
      {/* <div className="cart__counter">{JSON.parse(localStorage.getItem('products')).length}</div> */}
      </div>
    );
  }
}
