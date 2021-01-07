import React from 'react';
import './cart-item.styles.css';
import {connect} from 'react-redux';
import {removeItem} from '../../redux/cart/cart.actions'
const CartItem=({item,removeItem})=>{
    const {img,price,quantity,name}=item;
    return(
    <div className='cart-item'>
    <div className="item-details">
        <img className="cartImg" src={img} alt="item" />
        
        <span className="price"> {quantity} <span className="name">{name}</span>*{price}=Rs {quantity*price}</span>
        <button onClick={()=>removeItem(item)}>Remove</button>
        
    </div>
    </div>
    )
}

const mapDispatchToProps = dispatch =>({
    removeItem : item=>dispatch(removeItem(item))
  })
export default connect(null,mapDispatchToProps)(CartItem);