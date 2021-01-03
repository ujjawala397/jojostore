import React,{Component} from 'react';
import './cardProduct.styles.css';


class CardProduct extends Component{
state={
  a:0
}
 removeFromCart=()=>{
    this.setState({a:this.state.a-1})
 }

 addToCart=()=>{
  this.setState({a:this.state.a+1})
}
  render()
    {
    return(
    <div className='card-product-container'>

      <img alt="product" src={this.props.product.img} className="product_img"/>
      <h2>{this.props.product.name}</h2>
      
      <button className="cardProductButton" onClick={this.removeFromCart}>-</button>
      {this.state.a}
      <button className="cardProductButton" onClick={this.addToCart}>+</button>
        
    </div>

    )}
};

export default CardProduct;