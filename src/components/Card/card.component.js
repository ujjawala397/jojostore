import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './card.styles.css';


class Card extends Component{
 render()
    {
      return(
    <div>
    {
      this.props.products.map(product=>(
        <Link to={product.linkUrl}>
        <div className='card-container'>
            <img alt="product" src={product.img} className="category_img" />
            <h4>{product.name}</h4>
        </div>
        </Link>
      ))
    }
    </div>
    )}
};

export default Card;