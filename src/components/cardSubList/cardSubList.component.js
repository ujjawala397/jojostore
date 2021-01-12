import React from 'react';
import './cardSubList.styles.css';
const CardSubList =(props)=>{
  
  return(
    <div className='cardSubList'>
        <div>
            <img src={props.item.imageUrl} alt='item' className="cardSubList-img"/>
            <br/>
            {props.item.name}
            <br/>
            {props.item.price}
        </div>
        <br/>
    </div>
)}


export default CardSubList;