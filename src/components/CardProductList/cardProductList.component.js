import React from 'react';
import './cardProductList.styles.css';
import CollectionsOverview from '../collectionOverview/collectionsOverview.component';

import {Route} from 'react-router-dom';
export const CardProductList=(props)=>{
    console.log(props);
    return(
        <div className="cardProductList">
        
        <h1 className="cardProductListHeading">{props.item.name}</h1>
        <Route
            exact path={props.match}
            render={() => (
                <CollectionsOverview key={props.item.id} item={props.item.category}/>
            )}
        />
        
    </div>
    )
};