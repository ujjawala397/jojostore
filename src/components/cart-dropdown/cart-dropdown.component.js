import React from 'react';
import './cart-dropdown.styles.css';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import {withRouter} from 'react-router-dom';
const CartDropdown = ({cartItems,history}) => (
    <div className='cart-dropdown'>
    <button onClick={()=>history.push('/checkout')} to='/checkout'>
       
          CHECKOUT
    </button>
      <div className='cart-items' />
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
  
  const mapStateToProps=({cart:{cartItems}})=>({
    cartItems
  })
  export default withRouter(connect(mapStateToProps)(CartDropdown));