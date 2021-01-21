import React from 'react';
//import CollectionItem from '../../components/collection-item/collection-item.component';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector';
import {useSelector} from 'react-redux';
const CollectionPage = ({collection}) =>{
   console.log(collection);
   const items=useSelector((state)=>state.item);
   console.log(items);
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