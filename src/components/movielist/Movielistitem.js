import React,{useState} from 'react';

import Counter from  "./likeanddislikebutton";

import IconButton from '@mui/material/IconButton';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MovieListItem = ({name,rating,summary,poster})=>{

  const [show,setShow]= useState(false);

   //conditional styling- here we change the style alone of the paragraph
//   const paraStyles={

//     display:show? "block":"none",
// }
const styles = {
  color: rating > 8 ? "green" : "red"
};

return(

  <div className='movie-container'>
    <li style={{background:"yellow", margin:10}}>
    <p className="movie-name">{name}</p> 
   
    <p style={styles}>⭐{rating}</p>
    <IconButton onClick={()=>setShow(!show)} aria-label="toggle-description" color="primary">
     
    {show ? <ExpandLessIcon></ExpandLessIcon>:<ExpandMoreIcon></ExpandMoreIcon>}

    </IconButton>

    {/* or */}
    {/* <button onClick={()=>setShow(!show)}>toggle description</button> */}


    {/* <p  style={paraStyles} >{summary}</p> */}
    {/* or */}
   {/* the below method is called conditional rendering = when we do this the p tag is totally removed from the DOM*/}
    {show ? <p className="movie-summary" >{summary}</p> :""}
    <br></br>
   
    <img src={poster} alt={name + "image"} ></img>
    <Counter></Counter>
     </li>
  </div>




)



}


export default MovieListItem;