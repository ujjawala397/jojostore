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
        fetch('https://run.mocky.io/v3/521f093e-35ca-47dd-81ce-9d3966a6eb13')
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