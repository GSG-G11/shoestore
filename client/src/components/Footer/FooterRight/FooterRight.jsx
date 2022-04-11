import React from "react";
import "./FooterRight.css";
import Ul from "../../UlCompnents/Ul";

export default class FooterRight extends React.Component {
  render() {
    return (
      <div className="footer__right">
        <Ul
          header="Products"
          li1="Trending"
          li2="My Account"
          li3="vendors"
          li4="brands"
          li5="StoreFront"
        />
        <Ul
          header="Legals"
          li1="License"
          li2="Refund Policy"
          li3="About Us"
          li4="Constacts"
          li5="More Info"
        />
        <Ul />
        <Ul
          header="Contacts"
          li1="Feel free get in touch with us via phone"
          li2="+1 234 567 89 10"
          li3="Support_dont@gmail.com"
        />
        <Ul />
      </div>
    );
  }
}
