import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/home";
import Header from "./components/header";

class App extends Component {

  state = {
    inputSearch: ''
  }

  handleSearch = (e) => {
    this.setState({inputSearch: e.target.value})
  }



  render() {
    console.log(this.state);
    return (
      <>
        <Header handleSearch = {this.handleSearch}/>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            {/* <Route path='/login'>
          <Login />
        </Route>

        <Route exact path='/cart'>
          <Cart />
        </Route>

        <Route exact path='/product'>
          <Product />
        </Route>

        <Route exact path={'/product/:id'}>
          <ProductInfo />
        </Route> */}

          </Switch>
        </Router>
        {/* <Footer /> */}
      </>
    );
  }
}


export default App;

