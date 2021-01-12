import React from 'react';
import './cardSubList.styles.css';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
const CardSubList =({item,addItem})=>{
const {imageUrl,name,price}=item;
  return(
    <div className='cardSubList'>
        <div>
            <img src={imageUrl} alt='item' className="cardSubList-img"/>
            <br/>
            {name}
            <br/>
            {price}
            <div>
                <button onClick={()=>addItem(item)} className="cardProductButton">Add to Cart</button>
            </div>
        </div>
        <br/>
    </div>
)}
const mapDispatchToProps = dispatch =>({
    addItem : item=>dispatch(addItem(item))
  })

export default connect(null,mapDispatchToProps)(CardSubList);