// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home/home';
import Ad from './components/Ad/Ad';

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
    <div>
      <Home />
    
      <Ad />
    </div>
  );
}


export default App;