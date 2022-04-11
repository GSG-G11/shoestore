import React, { Component } from "react";
import "./Ul.css";

class Ul extends Component {
  render(props) {
    console.log(this.props);
    const { header, li1, li2, li3, li4, li5 } = this.props;
    return (
      <ul className="Ul">
        <h2>{header}</h2>
        <li>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
        <li>{li4}</li>
        <li>{li5}</li>
      </ul>
    );
  }
}

export default Ul;
