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
        onClick={(e) => {
          e.preventDefault();
          window.location.href='/cart';
          }}
        
      />
      <div className="cart__counter">{this.props.itemsOfCart}</div>
      </div>
    );
  }
}
