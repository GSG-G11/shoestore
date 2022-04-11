import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/home";
import Seller from './pages/seller';

import Header from "./components/header";
const App = () => {
  return (
    <>
      <Header />
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/seller'>
          <Seller />
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
};

export default App;
