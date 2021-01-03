import React from 'react';
import './cardList.styles.css';
import Card from '../Card/card.component';

export const CardList=(props)=>(
    <div className='card-list'>
        <h1>{props.List.name}</h1>
        <Card products={props.List.category}/>
    </div>
);

