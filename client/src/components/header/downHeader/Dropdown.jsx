import React from "react";
import "./downHeader.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class Dropdwon extends React.Component {
  render() {
    const { options, handleChangePrice, handleChangeCategory } = this.props;
    console.log(handleChangePrice, handleChangeCategory);
    let usedOne = handleChangeCategory || handleChangePrice;
    return (
      <div className="select__wrapper">
        <FontAwesomeIcon className="burger__menu" icon={faBars} />
        <select className="select_categories"  onChange={(e) => usedOne(e)} >
          {options.map((option, index) => {
            return (
              <option className="category__options" key={index} value={option}>
                {option}
              </option>
            );
          })}
        
        </select>
        {/* <FontAwesomeIcon className="arrow__down" icon={faSortDesc} /> */}
      </div>
    );
  }
}
