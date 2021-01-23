import React from 'react';
import Header from '../../components/Header/header.component';
import Form from '../../components/form/form-checkout.component';
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
                           
                            
                            {
                                total>=500?
                                <div className="checkout-msgs">
                                    
                                    <h2>Eligible for free delivery  : 
                                    Total  Amount : {total}   </h2>
                                </div>
                                
                                :
                                
                                <div className="checkout-msgs">
                                    <h4>Shop Rs{500-total} More to get free delivery : {total+40}</h4>
                                </div>
                            } 
                             <Form/>
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