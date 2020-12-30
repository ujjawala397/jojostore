import React, { Component } from 'react';
import './homepage.styles.css';
import Header from '../../components/Header/header.component';
import Slider from '../../components/Slider/slider.component';
import {CardList} from '../../components/CardList/cardList.component';
class Homepage extends Component {
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
                <Slider/>
                <h2 className="homepage_product_heading">Beverages</h2>
                <CardList products={filteredProducts}/>
                <h2 className="homepage_product_heading">Home Grocery</h2>
                <CardList products={filteredProducts}/>
            </div>
        );
   }
}

export default Homepage;