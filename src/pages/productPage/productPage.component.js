import React, { Component } from 'react';
import Header from '../../components/Header/header.component';
import {CardProductList} from '../../components/CardProductList/cardProductList.component';

class ProductPage extends Component {
    constructor(){
        super();
        this.state={
          products:[],
          searchField:''
        };
      }
    
      componentDidMount(){
        fetch('https://run.mocky.io/v3/d7857bec-efcd-4914-8ac8-2b5fe471379c')
        .then(response=>response.json())
        .then(category=>this.setState({products:category}));
      }
    render() {
        const {products,searchField}=this.state;
        const filteredProducts=products.filter(product=>
          product.name.toLowerCase().includes(searchField.toLowerCase())
          );
        return(
            <div>                
                <Header/>
                <CardProductList products={filteredProducts}/>
            </div>
        );
    }
}

export default ProductPage;