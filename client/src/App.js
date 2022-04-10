import "./App.css";
import Logo from "./compnents/header/upperHeader/Logo";
import SearchBar from "./compnents/header/upperHeader/SearchBar";
import CartIcon from "./compnents/header/upperHeader/CartIcon";
import LoginButton from "./compnents/header/upperHeader/LoginButton";
import "./compnents/header/upperHeader/upperHeader.css";
import Dropdwon from "./compnents/header/downHeader/Dropdown";
import NavigationMenu from "./compnents/header/downHeader/NavigationMenu";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
