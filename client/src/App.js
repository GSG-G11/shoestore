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

import React, { Component } from 'react';

import LoginForm from './components/Login/LoginForm';
import './components/Login/LoginForm.css'


import './App.css';

class App extends Component {

  state = {
    isLogin: false


  }



  handleLogin = () => {
    this.setState((previousState) => ({
      isLogin: !previousState.isLogin,
    }));
  };



  render() {
    const { isLogin } = this.state;
    return (
      <div>

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
          <div className="footer">
          <FooterLeft/>
          <FooterRight/>

          </div>
        </div>


        {/* <LoginForm  /> */}
      </div>

    )

  }
}



// <Router>
//   <Switch>
//     <Route exact path='/'>
//       <Home />
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

export default App;
