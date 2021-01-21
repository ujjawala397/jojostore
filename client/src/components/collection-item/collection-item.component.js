import React from 'react';
import './collection-item.styles.css';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
const CollectionItem = ({item,addItem}) => {
    const {name,imageUrl,price}=item;
    return(
    <div className="collection-item">
        <img className="collection-item-img" src={imageUrl} alt="product" />
        <button onClick={()=>addItem(item)} className="collection-item-btn">Add to Cart</button>
        <div>
            <div>{name}</div>
            <div>{price}/- Rs </div>
        </div>
    </div>
    )
}

const mapDispatchToProps = dispatch =>({
    addItem:item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);