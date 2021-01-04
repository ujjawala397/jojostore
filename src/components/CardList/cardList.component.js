import React from 'react';
import './cardList.styles.css';
import Card from '../Card/card.component';

export const CardList=(props)=>(
    <div>
    <h1 className="category-heading">{props.List.name}</h1>
    <div className='card-list'>
        <Card key={props.List.id} products={props.List.category}/>
    </div>
    </div>
);