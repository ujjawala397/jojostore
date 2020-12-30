import React,{Component} from 'react';
import './cardProduct.styles.css';


class CardProduct extends Component{
 render()
    {
      return(
    <div className='card-container'>
        <img alt="product" src={`${this.props.product.img}`}/>
        <h2>{this.props.product.name}</h2>
        <button className=" btn-primary"> Add</button>
    </div>
    
    )}
};

export default CardProduct;