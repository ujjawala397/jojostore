import React from 'react';
import './collection-item.styles.css';

const CollectionItem = ({id,name,imageUrl,price}) => (
    <div className="collection-item">
        <img className="collection-item-img" src={imageUrl} alt="product" />
        <div>{price}{id}{name}</div>
    </div>
)

export default CollectionItem;