import React from 'react';
import './cart-item.styles.css';
const CartItem=({item:{img,price,quantity,name}})=>(
    <div className='cart-item'>
    <div className="item-details">
        <img className="cartImg" src={img} alt="item" />
        <span className="name">{name}</span>
        <span className="price"> {quantity} pc*{2}=Rs {quantity*2}</span>
    </div>
    </div>
)

export default CartItem;