import React, { Component } from 'react';
import './header.styles.css';
class Header extends Component {
   
    render() {
        return (
            <div className="header_main">
                <h1 className="header_h1"> Jojo Store</h1>
                <input className="header_input"/>
                <span className="header_nav_icon">&#9776; open</span>
                <ul className="header_ul">
                    <li className="header_li">Contact</li>
                    <li className="header_li">Cart</li>
                    <li className="header_li">About</li>
                    <li className="header_li">Home</li>
                </ul>
            </div>
        );
    }
}

export default Header;

