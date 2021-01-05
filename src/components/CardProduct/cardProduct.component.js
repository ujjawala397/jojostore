import React from 'react';
import './cardProduct.styles.css';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

const CardProduct =({item,addItem})=>{
  const {img,name,price}=item;
  return(
    <div className='card-product-container'>

      <img alt="product" src={img} className="product_img"/>
      <h2>{name}  Rs:{price}</h2>
      
      <div>
        <button onClick={()=>addItem(item)} className="cardProductButton">Add to Cart</button>
      </div>
    </div>
)}

const mapDispatchToProps = dispatch =>({
  addItem : item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CardProduct);