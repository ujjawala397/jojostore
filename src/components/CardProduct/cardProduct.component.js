import React,{Component} from 'react';
import './cardProduct.styles.css';


class CardProduct extends Component{
 removeFromCart()
 {
  
 }
  render()
    {
      const a=0;
      return(
    <div className='card-product-container'>

        <img alt="product" src={this.props.product.img} className="product_img"/>
        <h2>{this.props.product.name}</h2>
        <button className="cardProductButton" onClick={this.removeFromCart}>-</button>
        {a}
        <button className="cardProductButton" onClick={this.addToCart}>+</button>
        
    </div>

    )}
};

export default CardProduct;