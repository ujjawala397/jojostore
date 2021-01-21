import React, {useEffect} from 'react';
import Home from './pages/homepage/homepage';
import ProductPage from './pages/productPage/productPage.component';
import ShopPage from './pages/shop/shop.component';
import Contact from './pages/contact/contact.component';
import CheckoutPage from './pages/checkout/checkoutPage';
import AdminPage from './pages/admin/adminPage';
import {Route,Switch} from 'react-router-dom';


import {useDispatch} from 'react-redux';
import {getItems} from './redux/item/item.actions';


const App=()=>{
  
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(getItems);
  },[dispatch]);

  return (
    <div className="App">
      <div className="content">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/admin' component={AdminPage}/>
          <Route path='/product' component={ProductPage}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
