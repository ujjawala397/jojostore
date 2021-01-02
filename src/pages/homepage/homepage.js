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
        fetch('https://run.mocky.io/v3/521f093e-35ca-47dd-81ce-9d3966a6eb13')
        .then(response=>response.json())
        .then(category=>this.setState({products:category}))
      }
    render() {
      const {products,searchField}=this.state;
      const filteredProducts=products.filter(product=>
      product.name.toLowerCase().includes(searchField.toLowerCase())
      );
        return (
            <div>
                <Header 
                  className="header_input" 
                  placeholder="search Categories" 
                  handleChange={e => this.setState({searchField:e.target.value})} />
                <input
                  className="header_input" 
                  placeholder="search Categories" 
                  onChange={e => this.setState({searchField:e.target.value})} 
                />
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
