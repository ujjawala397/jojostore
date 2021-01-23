import React from 'react';
import './cardList.styles.css';
import Card from '../Card/card.component';

export const CardList=({name,category})=>{
    
    return(
    <div>
    <h1 className="category-heading">{name}</h1>
    <div >
    {
        category.map(({id,...otheCollectionProps})=>(
            <Card key={id} {...otheCollectionProps} />
        ))
    }    
    
    
    </div>
    </div>
)};