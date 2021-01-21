import React from 'react';
import './cart-dropdown.styles.css';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems ,selectCartItemsCount, selectCartTotal} from '../../redux/cart/cart.selectors'; 

import {withRouter} from 'react-router-dom';
const CartDropdown = ({cartItems,total,history}) => (
    <div className='cart-dropdown'>
    <button className="checkout-btn" onClick={()=>history.push('/checkout')} to='/checkout'>
       
          CHECKOUT
    </button>
    {
      cartItems.length?
      <span className="cartMsg">Total = {total}</span>
     :null     
    }
      <div className='cart-items' />
      {
        (total>=500 && cartItems.length) ?
        <div className="cartMsgAdd">
            
            <span>Eligible for free delivery</span>
        </div>
        :
        <div className="cartMsgAdd">
            <span>Shop Rs{500-total} More to get free delivery </span>
        </div>
       } 
       {
         cartItems.length?
         cartItems.map(cartItem=>(
          <CartItem key={cartItem.id} item={cartItem} />
        ))
        :
        <span className="cartMsg">Cart is Empty</span>
       } 
    </div>
  );
  const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    cartItemsCount:selectCartItemsCount,
    total:selectCartTotal
})

export default withRouter(connect(mapStateToProps)(CartDropdown));