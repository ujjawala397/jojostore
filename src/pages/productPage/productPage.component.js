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
        fetch('https://run.mocky.io/v3/d6486fc3-dcb3-474e-8fd7-6eaf49e6e432')
        .then(response=>response.json())
        .then(category=>this.setState({products:category}));
      }
    render() {
        const {products,searchField}=this.state;
        const filteredProducts=products.filter(product=>
          product.name.toLowerCase().includes(searchField.toLowerCase())
          );
        return (
            <div>                
                <Header/>
                <CardProductList products={filteredProducts}/>
            </div>
        );
    }
}

export default ProductPage;