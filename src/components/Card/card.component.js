import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './card.styles.css';

class Card extends Component{
 render()
    {
      return(
    <div>
    {
      <div className="card-item">
        <Link key={this.props.id} to={this.props.linkUrl}>
        <img alt="product" src={this.props.img} className="card_img" />
        <div  className='card-details'>
            <h4>{this.props.name}</h4>
        </div>
        </Link>
      </div>
        
      
    }
    </div>
    )}
};

export default Card;