import React from 'react';
import './searchBox.styles.css';
export const SearchBox=(placeholder, handleChange)=>( 
   <div> 
   {console.log({placeholder})}
   <input 
        className="search_input" 
        placeholder={placeholder} 
        onChange={handleChange} 
    />
   </div>
    
    
)
