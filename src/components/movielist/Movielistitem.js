import React from 'react';

const MovieListItem = ({name,rating,summary,poster})=>{


return(

  <div>
    <li style={{background:"yellow", margin:10}}>
      <p>{name}</p>
    <p>{rating}</p>
    <p>{summary}</p>
   
    <img src={poster} alt={name + "image"} ></img>
     </li>
  </div>




)



}


export default MovieListItem;