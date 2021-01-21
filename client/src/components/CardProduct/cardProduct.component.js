import React from 'react';
import './cardProduct.styles.css';
import CardSubList from '../cardSubList/cardSubList.component';
const CardProduct = (props) => {

  console.log(props);
  return(
    <div className="cardProduct">
      <h2 className="cardProductHeading">{props.item.name}</h2>
      <div>
      {
        props.item.items.map(product=>(
        <CardSubList key={product.id} name={props.name} item={product} />
        ))
      }    
      </div>
    </div>
)}

export default CardProduct;