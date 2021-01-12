import React, { Component } from 'react';
import Header from '../../components/Header/header.component';
import {CardProductList} from '../../components/CardProductList/cardProductList.component';
class ProductPage extends Component {
    constructor(props){
        super(props);
        this.state={
          products:[],
          searchField:''
        };
      }
      componentDidMount(){
        fetch('https://run.mocky.io/v3/fb287fc3-a2e5-471e-8fa9-d7c1b4d52148')
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
                {
                  filteredProducts.map(product=>(
                  <CardProductList key={product.id} item={product} />
                  ))
                }  
                
            </div>
        );
    }
}

export default ProductPage;