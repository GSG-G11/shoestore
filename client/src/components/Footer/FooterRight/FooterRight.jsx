import React from "react";
import './FooterRight.css';

export default class FooterRight extends React.Component {
    render(){
        return(
            <div className="footer__right">

                <div className="footer__1">
                    <h3>products</h3>
                    <p>Trending</p>
                    <p>My account</p>
                    <p>Vendors</p>
                    <p>Brands</p>
                    <p>Storefront</p>
                </div>
                
                <div className="footer__2">
                <h3>Legals</h3>
                    <p>License</p>
                    <p>Refund Policy</p>
                    <p>About Us</p>
                    <p>Contacts</p>
                </div>


                <div className="footer__3">
                    <h3>Contacts</h3>
                    <p>Fell free get in touch with us via phone or send us a message</p>
                    <p>+1 234 567 89 10</p>
                    <p>support@khoomi.com</p>
                </div>

            </div>
        )
    }
}