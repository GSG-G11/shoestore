import Logo from "../header/upperHeader/Logo";
import SearchBar from "../header/upperHeader/SearchBar";
import CartIcon from "../header/upperHeader/CartIcon";
import LoginButton from "../header/upperHeader/LoginButton";
import "../header/upperHeader/upperHeader.css";
import Dropdwon from "../header/downHeader/Dropdown";
import NavigationMenu from "../header/downHeader/NavigationMenu";
import imgTest from './Screenshot from 2022-04-11 16-25-35.png'
import './Cart.css'





const Cart = () => {
  return (
    <div>
      <div className="Header">
        <div className="upper__header">
          <Logo />
          <SearchBar />
          <CartIcon />
          <LoginButton />
        </div>
        <div className="down__header">
          <Dropdwon />
          <NavigationMenu />
        </div>
      </div>





      <div className="order_summary">

      <p>Order summary</p>


        <p className="remove_all">remove all</p>

        </div>

      <div className="content__order">
        <div className="img__product"> <img src={imgTest} alt="product" /></div>

        <div className="tools">
          <div className="product__name"> <p> product name </p></div>

          <div className="minus__sign"><i class="fa-solid fa-minus"></i></div>
          <p > 1 </p>
          <div className="plus__sign"> <i class="fa-solid fa-plus"></i></div>
          <div className="price__product">$19.32</div>
          <div className="remove__icon"> <i class="fa-solid fa-trash-can"></i></div>

        </div>





      </div>

        <hr  className="hrr"/>

        <div className="total_price__cont">
          <div className="text__total">Total (including tax)</div>
          <div className="total_price">$19.32</div>
        </div>

    </div>
  )
}

export default Cart;