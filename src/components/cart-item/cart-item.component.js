import React from 'react';
import './cart-item.styles.css';
const CartItem=({item:{img,price,quantity,name}})=>(
    <div className='cart-item'>
    <div className="item-details">
        <img className="cartImg" src={img} alt="item" />
        
        <span className="price"> {quantity} <span className="name">{name}</span>*{price}=Rs {quantity*price}</span>
    </div>
    </div>
)

export default CartItem;