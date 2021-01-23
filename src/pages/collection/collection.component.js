import React from 'react';
//import CollectionItem from '../../components/collection-item/collection-item.component';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector';
import {Grid,CircularProgress} from '@material-ui/core';

import axios from 'axios';

const url="http://localhost:5000";


class CollectionPage extends React.Component {
    state={
        items:[]
    };
    componentDidMount=()=>{
        this.getItems();
    }
    getItems=()=>{
        axios.get(url)
            .then((response)=>{
                const data=response.data;
                this.setState({items:data})
            })
    }
    render(){
    console.log(this.collection);
    
    console.log(this.state.items); 
    return(
    
        !this.state.items.length ? <CircularProgress /> : (
            <Grid  container alignItems="stretch" spacing={3}>
                {this.state.items.map((item) => (
                    <Grid key={item._id} item xs={12} sm={6}>
                        <h1>Post</h1>
                    </Grid>
                ))}
            </Grid>
        )
        )
   }
    
}
const mapStateToProps= (state, ownProps)=>({
    collection:selectCollection(ownProps.match.params.category)(state)
})
export default connect(mapStateToProps)(CollectionPage);