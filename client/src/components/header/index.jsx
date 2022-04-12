import React from 'react'
import Logo from "./upperHeader/Logo";
import SearchBar from "./upperHeader/SearchBar";
import CartIcon from "./upperHeader/CartIcon";
import LoginButton from "./upperHeader/LoginButton";
import Dropdwon from "./downHeader/Dropdown";
import NavigationMenu from "./downHeader/NavigationMenu";
import "./upperHeader/upperHeader.css";

 const Header = ({handleSearch, itemsOfCart}) => {
  return (
    <div className="Header">
    <div className="upper__header">
      <Logo />
      <SearchBar handleSearch = {handleSearch}/>
      <CartIcon itemsOfCart={itemsOfCart} />
      <LoginButton />
    </div>
    <div className="down__header">
      <Dropdwon options={['Select a category', 'Small', 'Medium', 'Large']} />
      <NavigationMenu />
    </div>
  </div> 
   )
}
export default Header;
