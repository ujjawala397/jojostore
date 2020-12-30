import React from 'react';
import './cardList.styles.css';
import {Card} from '../Card/card.component';

export const CardList=(props)=>(
    <div className='card-list'>
        {
            props.products.map(product=>(
            <Card key={product.id} product={product} />
            ))
        }     
    </div>
);