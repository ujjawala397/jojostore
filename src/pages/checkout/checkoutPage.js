import React from 'react';
import Header from '../../components/Header/header.component';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartTotal} from '../../redux/cart/cart.selectors'; 

const checkoutPage=({total})=>
            <div>
                <Header/>
                CheckOut Page
                <div>Rs{total}</div>
            </div>


const mapStateToProps = createStructuredSelector({
    total:selectCartTotal
})

export default connect(mapStateToProps)(checkoutPage);