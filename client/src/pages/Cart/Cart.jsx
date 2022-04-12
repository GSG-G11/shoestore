
import './Cart.css'





const Cart = () => {

  const products = JSON.parse(localStorage.getItem('products')) || [];

  // const products = [{ name: 'amran', image: 'https://i.ibb.co/QcHvYvf/back-Ground-header.jpg', price: 2000, description: 'pla plapla' },
  // { name: 'amran', image: 'https://i.ibb.co/QcHvYvf/back-Ground-header.jpg', price: 1000, description: 'pla plapla' }];


  const result = products.map((product) => (
    <div>
      <div className="content__order">
        <div className="img__product"> <img src={product.image} alt="product" /></div>

        <div className="tools">

          <div className="product__name__description">

            <p> {product.name} </p>
            <p className="product__description"> {product.description} </p>

          </div>
          <div className="tools2">
            <div className="minus__sign"><i class="fa-solid fa-minus"></i></div>
            <p > 1 </p>
            <div className="plus__sign"> <i class="fa-solid fa-plus"></i></div>
            <div className="price__product">${product.price}</div>
            <div className="remove__icon"> <i class="fa-solid fa-trash-can"></i></div>
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
        <p>Order summary</p>
        <p className="remove_all">remove all</p>
      </div>

      {result.length ?  result : <li className="no__product"> no product in your cart </li> }

      <div className="total_price__cont">
        <div className="text__total">Total (including tax)</div>
        <div className="total_price">${totalPrice}</div>
      </div>

    </div>
  )
}

export default Cart;