import React from 'react';
import {Link} from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {SearchBox} from '../searchBox/searchBox.component';
import {connect} from 'react-redux';
import './header.styles.css';
const Header =({hidden}) => (
        <div>
            <div className="header_main">
                <h1 className="header_h1"> <Link to="/">JoJo Store</Link></h1>
                <SearchBox 
                    placeholder="Search Categories Only" 
                />
                <span className="header_nav_icon">&#9776; open</span>
                <ul className="header_ul">
                    
                    <Link to='/admin'><li className="header_li">Admin</li></Link>
                    <li className="header_li"><CartIcon/></li>
                    <Link to='/contact'><li className="header_li">Contact</li></Link>

                    <Link to='/shop'><li className="header_li">Shop</li></Link>
                    <Link to='/'><li className="header_li">Home</li></Link>
                </ul>
                
                {hidden?null:<CartDropDown/>}
                
            </div>
        </div>
        );
    

const mapStateToProps = ({cart:{hidden}})=>({
    hidden
})
export default connect(mapStateToProps,null)(Header);