import React from 'react';
import './collectionsOverview.styles.css';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import {connect} from 'react-redux';

import {selectCollections} from '../../redux/shop/shop.selector';

class CollectionsOverview extends React.Component{
    constructor(){
        super();
        this.state={
          searchField:'',
          arr:[]
        };
    }
    render(){
        const {collections} =this.props;
        
    return(
    <div>
        <input
            placeholder="search Categories" 
            onChange={e => this.setState({searchField:e.target.value})} 
        />
        {
            collections.map(({id,...otheCollectionProps})=>(
                <CollectionPreview key={id} {...otheCollectionProps} />
            ))
        }
    </div>
        )
    }
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})
export default connect(mapStateToProps)(CollectionsOverview);