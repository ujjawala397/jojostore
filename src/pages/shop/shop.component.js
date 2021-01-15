import React from 'react';
import Header from '../../components/Header/header.component';
import CollectionsOverview from '../../components/collectionOverview/collectionsOverview.component';
import CollectionPage from '../../pages/collection/collection.component';
import {Route} from 'react-router-dom';

const ShopPage =({match})=>{
    return(
        <div>
            <Header/>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:category`} component={CollectionPage} />

        </div>
    )
}

export default ShopPage;