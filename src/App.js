import React from 'react';
import Home from './pages/homepage/homepage';
import ProductPage from './pages/productPage/productPage.component';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/shop/haldi' component={ProductPage}/>
      </Switch>
    </div>
  );
}

export default App;
