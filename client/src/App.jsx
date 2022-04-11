import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Seller from "./pages/seller";

import Header from "./components/header";
const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/seller">
            <Seller />
          </Route>

          {/* <Route path='/login'>
          <Login />
        </Route>

        <Route exact path='/cart'>
          <Cart />
        </Route>
        
        <Route path='/notfound'>
          <NotFound />
        </Route>

          <Route exact path={'/product/:id'}>
          <ProductInfo />
        </Route>

        <Route exact path='/product'>
          <Product />
        </Route>

       */}
          <Route  path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      {/* <Footer /> */}
    </>
  );
};

export default App;
