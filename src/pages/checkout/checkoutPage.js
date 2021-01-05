import React, { Component } from 'react';
import Header from '../../components/Header/header.component';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems, selectCartItemsCount} from '../../redux/cart/cart.selectors'; 


class checkoutPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                CheckOut Page
            </div>
        );
    }
}
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})

export default connect(mapStateToProps)(checkoutPage);