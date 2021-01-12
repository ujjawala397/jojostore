import React from 'react';
import './collectionsOverview.styles.css';

import CardProduct from '../CardProduct/cardProduct.component';


const CollectionsOverview =(props)=>{
    console.log(props);
    return(
    <div>
        {
            props.item.map(product=>(
            <CardProduct key={product.id} item={product}/>
            ))
        }
    </div>
    )
}

export default CollectionsOverview;