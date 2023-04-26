import React,{useState} from 'react';

import Counter from  "./likeanddislikebutton";

import IconButton from '@mui/material/IconButton';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import CardActions from '@mui/material/CardActions';

// import Deletebutton from './Deletebutton';

import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

const MovieListItem = ({name,rating,summary,poster,id,trailer,deleteButton})=>{

  const [show,setShow]= useState(false);

   //conditional styling- here we change the style alone of the paragraph
//   const paraStyles={

//     display:show? "block":"none",
// }
const styles = {
  color: rating > 8 ? "green" : "red"
};

const navigate = useNavigate();

console.log("MovieListItem",id);
return(

  <Card className='movie-container'>
    <li style={{background:"yellow", margin:10}}>
    <img src={poster} alt={name + "image"} ></img>
    <CardContent>
    <CardActions>
    <p className="movie-name">{name}</p> 
    
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
    </CardActions>
    <CardActions>
      {/* <IconButton onClick={()=>navigate("/color-game")} aria-label="i-button" color="primary">
    <InfoIcon></InfoIcon>
    </IconButton> */}
     
    <IconButton onClick={()=>navigate(`/Movies-list/${id}`)} aria-label="i-button" color="primary">
    <InfoIcon></InfoIcon>
    </IconButton>
    <p style={styles} className='movie-rating'>⭐{rating}</p>
    </CardActions>
   
    {/* <img src={poster} alt={name + "image"} ></img> */}
     
    {/* Trailer:<p>{trailer}</p>  */}
    <br></br>
    <a href={trailer} target="_blank">Click to watch the Trailer</a> 

    </CardContent>
    <CardActions>
    <Counter></Counter>
    {deleteButton}
    {/* <Deletebutton/> */}
    </CardActions>
     </li>
    
  </Card>




)



}


export default MovieListItem;