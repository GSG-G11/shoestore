
import './Cart.css'
import React, { Component } from 'react';

class Cart extends Component {
  state ={
    products: []
  }
  

  componentDidMount() {
    this.setState({products: JSON.parse(localStorage.getItem('products')) })
  }

  deleteFromCart = (id) =>{
    const { products } = this.state
    const filtered = products.filter(ele => ele.id !== id )
    this.setState({products: filtered })
    localStorage.setItem('products', JSON.stringify(filtered))
  }

  removeallCart = () =>{
    this.setState({products: []})
    localStorage.setItem('products', JSON.stringify([]))
  }
render(){
  // const products = JSON.parse(localStorage.getItem('products')) || [];
  const { products } = this.state
  const result = products.map((product) => (
    <div >
      <div className="content__order">
        <div > <img className="img__product" src={product.imgLink} alt="product" /></div>

        <div className="tools">

          <div className="product__name__description">

            <p> {product.name} </p>
            <p className="product__description"> {product.description} </p>

          </div>
          <div className="tools2">
          <div className="btnnnn">
          <div className="minus__sign"><i class="fa-solid fa-minus"></i></div>
            <p > 1 </p>
            <div className="plus__sign"> <i class="fa-solid fa-plus"></i></div>
            
          </div>
            <div className="price__product">${product.price}</div>
            <div className="remove__icon"> <i onClick={()=>{this.deleteFromCart(product.id)}} class="fa-solid fa-trash-can"></i></div>
          </div>
        </div>
      </div>
      <hr className="hrr" />
    </div>
  ))

  const prices = products.map(product => {
    return +product.price;
  });

  const totalPrice = prices.reduce((acc, curr) => acc + curr, 0);



  return (


    <div>


      <div className="order_summary">
        <p  className="summary">Order summary</p>
        <p onClick={this.removeallCart} className="remove_all">Remove All</p>
      </div>

      {result.length ?  result : <li className="no__product"> no product in your cart </li> }

      <div className="total_price__cont">
        <div className="text__total">Total (including tax)</div>
        <div className="total_price">${totalPrice}</div>
      </div>

    </div>
  )
}}

export default Cart;