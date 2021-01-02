import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {SearchBox} from '../searchBox/searchBox.component';
import './header.styles.css';
class Header extends Component {
    render() {
        return (
            <div className="header_main">
                <h1 className="header_h1"> Jojo Store</h1>
                <SearchBox 
                    placeholder="Search Categories Only" 
                    handleChange={this.props.handleChange}
                />
                <span className="header_nav_icon">&#9776; open</span>
                <ul className="header_ul">
                    <li className="header_li">Cart</li>
                    <Link to='/contact'><li className="header_li">Contact</li></Link>
                    <li className="header_li">About</li>
                    <li className="header_li">Home</li>
                </ul>
            </div>
        );
    }
}

export default Header;

