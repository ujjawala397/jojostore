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
        fetch('https://run.mocky.io/v3/e4c05932-a30a-4a78-b333-4e6aed1c314b')
        .then(response=>response.json())
        .then(category=>this.setState({products:category}));
      }
    render() {
        const {products,searchField}=this.state;
    const filteredMosters=products.filter(product=>
      product.name.toLowerCase().includes(searchField.toLowerCase())
      );
        return (
            <div>
                <Header/>
                <Slider/>
                <h2 className="homepage_product_heading">Beverages</h2>
                <CardList products={filteredMosters}/>
                <h2 className="homepage_product_heading">Beverages</h2>
                <CardList products={filteredMosters}/>
            </div>
        );
   }
}

export default Homepage;