import React from 'react';
//import CollectionItem from '../../components/collection-item/collection-item.component';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector';
const CollectionPage = ({collection}) =>{
   console.log(collection);
    return(
    <div>
        <h1 style={{textAlign:"center"}}>Page Under Progress</h1>
    </div>
    )
}
const mapStateToProps= (state, ownProps)=>({
    collection:selectCollection(ownProps.match.params.category)(state)
})
export default connect(mapStateToProps)(CollectionPage);