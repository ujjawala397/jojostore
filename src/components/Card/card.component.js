import React from 'react';
import './card.styles.css';
export const Card=(props)=>(
  
    <div className='card-container'>
    <div className='image'
    style={{
      backgroundImage: `url(${props.product.img})`
    }}
    />
    
        <h2>{props.product.name}</h2>
        <h1>{props.product.img}</h1>
    </div>
);