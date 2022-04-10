import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

 const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/login'>
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
        </Route>

      </Switch>
      <Footer />
    </Router>
  );
}


export default App;
