import React from 'react';
import Header from '../../components/Header/header.component';
import Form from '../../components/form/form.component';
import './checkout.styles.css';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartTotal} from '../../redux/cart/cart.selectors'; 

const checkoutPage=({total})=>
            <div>
                <Header/>
                <div class="checkout-heading">
                    <h2>CheckOut Page</h2>
                    <h3>Total Amount : {total}</h3></div>
                
                <Form/>
            </div>


const mapStateToProps = createStructuredSelector({
    total:selectCartTotal
})

export default connect(mapStateToProps)(checkoutPage);