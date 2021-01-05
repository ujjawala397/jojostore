import React from 'react';
import './cart-dropdown.styles.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
    <Link to='/checkout'><button  className="checkout-btn">
       
          EDIT & CHECKOUT</button>
      </Link>
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
  export default connect(mapStateToProps)(CartDropdown);