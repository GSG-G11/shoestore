// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Logo from "./components/header/upperHeader/Logo";
import SearchBar from "./components/header/upperHeader/SearchBar";
import CartIcon from "./components/header/upperHeader/CartIcon";
import LoginButton from "./components/header/upperHeader/LoginButton";
import "./components/header/upperHeader/upperHeader.css";
import Dropdwon from "./components/header/downHeader/Dropdown";
import NavigationMenu from "./components/header/downHeader/NavigationMenu";
import FooterLeft from "./components/Footer/FooterLeft/FooterLeft";
import FooterRight from "./components/Footer/FooterRight/FooterRight";
import "./App.css";
import Home from "./components/Home/home";
import Ad from "./components/Ad/Ad";
import Cart from './components/Cart/Cart'

const App = () => {
  return (
    // <Router>
    //   <Header />
    //   <Switch>
    //     <Route exact path='/'>
    //       <Home />
    //       <div>
    //         Hi
    //       </div>
    //     </Route>

    //     <Route path='/login'>
    //       <Login />
    //     </Route>

    //     <Route exact path='/cart'>
    //       <Cart />
    //     </Route>

    //     <Route exact path='/product'>
    //       <Product />
    //     </Route>

    //     <Route exact path={'/product/:id'}>
    //       <ProductInfo />
    //     </Route>

    //   </Switch>
    //   <Footer />
    // </Router>



    // <div>
    //   <div className="App">
    //     <div className="Header">
    //       <div className="upper__header">
    //         <Logo />
    //         <SearchBar />
    //         <CartIcon />
    //         <LoginButton />
    //       </div>
    //       <div className="down__header">
    //         <Dropdwon />
    //         <NavigationMenu />
    //       </div>
    //     </div>
    //   </div>
    //   <Home />
    //   <Ad />
    //   <div className="footer">
    //     <FooterLeft />
    //     <FooterRight />
    //   </div>
    // </div>

    <div>

      <Cart />
      
      
    </div>
  );  
};

export default App;
