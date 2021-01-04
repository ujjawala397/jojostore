import React from 'react';
import './cart-item.styles.css';
const CartItem=({item:{img,price,quantity,name}})=>(
    <div className='cart-item'>
        <img src={img} alt="item" />
        <span className="name">{name}</span>
        <span className="price">{quantity}*{price}={quantity*price}</span>
    </div>
)

export default CartItem;