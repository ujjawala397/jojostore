import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './card.styles.css';


class Card extends Component{
 render()
    {
      return(
    <div>
      <Link to={this.props.product.linkUrl}>
        <div className='card-container'>
            <img alt="product" src={this.props.product.img} className="category_img" />
            <h2>{this.props.product.name}</h2>
        </div>
      </Link>
    </div>
    )}
};

export default Card;