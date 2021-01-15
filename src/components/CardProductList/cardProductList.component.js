import React from 'react';
import './cardProductList.styles.css';
import CollectionsOverview from '../collectionOverview/collectionsOverview.component';
import {Route} from 'react-router-dom';
import CollectionPage from '../../pages/collection/collection.component';

export const CardProductList=(props)=>{
    console.log(props.match.path);
    return(
        <div className="cardProductList">
        <h1 className="cardProductListHeading">{props.item.name}</h1>  
        <Route
            exact path={`${props.match.path}`}
            render={() => (
                <CollectionsOverview key={props.item.id} item={props.item.category}/>
            )}
        />
        <Route path={`${props.match.path}/:category`} component={CollectionPage } />
    </div>
    )
};