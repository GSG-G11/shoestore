import React from "react";
import "./downHeader.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class Dropdwon extends React.Component {
  render() {
    return (
      <div className="select__wrapper">
        <FontAwesomeIcon className="burger__menu" icon={faBars} />
        <select className="select_categories">
          <option className="category__options">Select Categories</option>
          <option className="category__options">Small</option>
          <option className="category__options">Medium</option>
          <option className="category__options">Large</option>
        </select>
        {/* <FontAwesomeIcon className="arrow__down" icon={faSortDesc} /> */}
      </div>
    );
  }
}
