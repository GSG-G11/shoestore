import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Seller from "./pages/seller";
import Header from "./components/header";
import Cart from "./pages/Cart/Cart";
import ProductDet from "./pages/productDetails/ProductDet";
import CombinedFooter from './components/Footer/CombinedFooter';
import LoginForm from './components/Login/LoginForm';

class App extends Component {
  state = {
    inputSearch: "",
    itemsOfCart: 0,
  };

  handleSearch = (e) => {
    this.setState({ inputSearch: e.target.value });
  };
  changeCart = (e) => {
    this.setState({ itemsOfCart: e });
  };

  render() {
    const {changeCart, handleSearch, state:{itemsOfCart, inputSearch} } = this

    return (
      <>
      
        <Header itemsOfCart={itemsOfCart} handleSearch={handleSearch} />
        <Router>
          <Switch>
            
            <Route  path={'/product/:id'}>
          <ProductDet />
        </Route>
        
        {/* <Route path='/notfound'>
          <NotFound />
        </Route>

          <Route exact path={'/product/:id'}>
          <ProductInfo />
        </Route>

        <Route  path='/product'>
          <Product />
        </Route>
    */}
            <Route path='/login'>

          <LoginForm />
        </Route> 
            <Route exact path="/seller">

              <Seller />
            </Route>

        <Route  path='/cart'>
          <Cart />
        </Route>

        <Route exact path='/'>
              <Home changeCart={changeCart} inputSearch={inputSearch} />
            </Route>
          </Switch>
        </Router>
        <CombinedFooter />
      </>
    );
  }
}

export default App;
