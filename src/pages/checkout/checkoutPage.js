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
                    <h2>Checkout </h2>
                    
                    </div>
                    {
                        total?
                        <div>
                            <Form/>
                            <h3>Total Amount : {total}</h3>
                        </div>
                        :
                        
                        <div className="checkout-msg">
                            <h1>Cart is Empty</h1>
                            
                        </div>
                    } 
            </div>


const mapStateToProps = createStructuredSelector({
    total:selectCartTotal
})

export default connect(mapStateToProps)(checkoutPage);