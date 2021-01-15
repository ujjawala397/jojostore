import React from 'react';
import './collectionsOverview.styles.css';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import {connect} from 'react-redux';

import {selectCollections} from '../../redux/shop/shop.selector';

const CollectionsOverview =({collections})=>{
   console.log(collections);
    return(
    <div>
        {
            collections.map(({id,...otheCollectionProps})=>(
                <CollectionPreview key={id} {...otheCollectionProps}/>
            ))
        }
    </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})
export default connect(mapStateToProps)(CollectionsOverview);