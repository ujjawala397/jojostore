import React, { Component } from 'react';
import './homepage.styles.css';
import Header from '../../components/Header/header.component';
import Slider from '../../components/Slider/slider.component';
import {CardList} from '../../components/CardList/cardList.component';
class Homepage extends Component {
    constructor(){
        super();
        this.state={
          monsters:[],
          searchField:''
        };
      }
    
      componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({monsters:users}));
      }
    render() {
        const {monsters,searchField}=this.state;
    const filteredMosters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
        return (
            <div>
                <Header/>
                <Slider/>
                <h2 className="homepage_product_heading">Beverages</h2>
                <CardList monsters={filteredMosters}/>
                <h2 className="homepage_product_heading">Beverages</h2>
                <CardList monsters={filteredMosters}/>
            </div>
        );
   }
}

export default Homepage;