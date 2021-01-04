import React from 'react';
import './cardProductList.styles.css';
import CardProduct from '../CardProduct/cardProduct.component';

export const CardProductList=(props)=>{
    return(
        <div className='cardProductList'>
        {
            props.products.map(product=>(
            <CardProduct key={product.id} item={product} />
            ))
        }     
    </div>
    )
};