// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, {Component} from 'react';

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
    const {isLogin} = this.state;
    return(
      <div>
      <LoginForm  />
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
