import React from 'react';
import './cart-item.styles.css';
import {connect} from 'react-redux';
import {removeItem,decreaseItem,addItem} from '../../redux/cart/cart.actions'
const CartItem=({item,removeItem,addItem,decreaseItem})=>{
    const {imageUrl,price,quantity,name}=item;
    return(
    <div className='cart-item'>
    <div className="item-details">
        <img className="cartImg" src={imageUrl} alt="item" />        
        <span className="price"> 
        <button className="cart-drop-btns" onClick={()=>decreaseItem(item)}>-</button>
        {quantity} 
        <button className="cart-drop-btns" onClick={()=>addItem(item)}>+</button>
        </span>
        
        
        <span className="name">{name}</span>*{price}=Rs {quantity*price}
        
        <button className="cart-drop-btn" onClick={()=>removeItem(item)}>Remove</button>
        
    </div>
    </div>
    )
}

const mapDispatchToProps = dispatch =>({
    removeItem  :   item => dispatch(removeItem(item)),
    addItem     :   item => dispatch(addItem(item)),
    decreaseItem:   item => dispatch(decreaseItem(item))

  })
export default connect(null,mapDispatchToProps)(CartItem);