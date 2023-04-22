import React from 'react';

import Counter from  "./likeanddislikebutton";

const MovieListItem = ({name,rating,summary,poster})=>{


return(

  <div>
    <li style={{background:"yellow", margin:10}}>
      <p>{name}</p>
    <p>{rating}</p>
    <p>{summary}</p>
   
    <img src={poster} alt={name + "image"} ></img>
    <Counter></Counter>
     </li>
  </div>




)



}


export default MovieListItem;