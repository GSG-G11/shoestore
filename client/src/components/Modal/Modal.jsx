// import Link from 'react-dom';
import React, { Component } from 'react'
import './style.scss';
import axios from "axios";

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            name: '',
            price: '',
            description: '',
            image: '',
            status: '',
            id: '',
            edit: false,
        };
    }
addProduct = (e) => {
  e.preventDefault();

  axios
  .post("/api/v1/addProduct", {
    name: "Nike",
    price: 23,
    description: "Flintstone",
    image: "https://i.ibb.co/QcHvYvf/back-Ground-header.jpg",
  

  })
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

}
  render() {
    
    return (<>
  <div >
    <a className="add-btn" href="#open-modal">ADD PRODUCT</a>
  </div>
<div id="open-modal" className="modal-window">
  <div className='modal-content'>
    <a href="#" title="Close" className="modal-close">Close</a>
    <h3>ِADD PRODCUT</h3>
    <input placeholder='Product Name' type="text" />
    <input placeholder='Product Price (in USD)' type="number" />
    <textarea placeholder='Product Description' id="" cols="30" rows="10"></textarea>
    <input placeholder='Product Image' type="text" />
    <a href="#">  <input   type="submit" /></a> 
    <button onClick={() => addProduct()} > </button>

    
    </div>
</div>
</>
    )
  }
}

