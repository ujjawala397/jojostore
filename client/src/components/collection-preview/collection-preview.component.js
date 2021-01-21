import React from 'react';
import './collection-preview.styles.css';
import CollectionItem from '../collection-item/collection-item.component';
const CollectionPreview = ({name,items})=> (
    <div className="collection-preview">
    <h1>{name}</h1>
        {
            items.map((item)=>(
                <CollectionItem key={item.id} item={item} />
            ))
        }
    </div>
)
export default CollectionPreview;