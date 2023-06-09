import React,{useState} from "react";

import MovieListItem from "./Movielistitem";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Deletebutton from "./Deletebutton";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
// import AddMoviePage from "./Addmovies";

// var obj = [{
//   moviename:"Jai Bhim",
//   rating:"8.8",
//   summary:"When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice.",
//   poster:"https://m.media-amazon.com/images/M/MV5BNzFkM2FhMzQtYjUwZi00N2Y3LWFkZWItMmZmMjQxNGQwZmNhXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_UY209_CR13,0,140,209_AL_.jpg"
// },{
//   moviename:"Vikram",
//   rating:"8.3",
//   summary:"A high-octane action film where a special investigator is assigned a case of serial Killings, he finds the case is not what it seems to be and leading down this path is only going to end in a war between everyone involved.",
//   poster:"https://m.media-amazon.com/images/M/MV5BMDRiOWNjYjUtMDI0ZC00MDMyLTkwZDItNTU5NWQ1NjEyNGYxXkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_UX140_CR0,0,140,209_AL_.jpg"
// },{
//   moviename:"Rocketry: The Nambi Effect",
// rating:"8.8",
// summary:"Based on the life of Indian Space Research Organization scientist Nambi Narayanan, who was framed for being a spy and arrested in 1994. Though free, he continues to fight for justice against the officials who falsely implicated him.",
// poster:"https://m.media-amazon.com/images/M/MV5BNTk2MjUxMjEtZDU5OC00MzYxLTkwMWYtMGM5YWQ0MWMyN2I1XkEyXkFqcGdeQXVyMTE0MzY0NjE1._V1_UY209_CR0,0,140,209_AL_.jpg"
// },{
// moviename:"Soorarai Pottru",
//   rating:"8.7",
//   summary:"Nedumaaran Rajangam Maara sets out to make the common man fly and in the process takes on the world's most capital intensive industry and several enemies who stand in his way.",
//   poster:"https://m.media-amazon.com/images/M/MV5BOThkNjFiMzMtNGY5Yi00MDAxLTgxYjItMTZiN2RiMGNiOTA4XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UY209_CR13,0,140,209_AL_.jpg"
// },{
//   moviename:"Pithamagan",
//   rating:"8.3",
//   summary:"Chittan, a social outcast, has grown up in a cemetery. A drug dealer finds him a job in a cannabis farm. In prison, he meets a conman, Shakti. This friendship transforms him from his stony existence ",
//   poster:"https://m.media-amazon.com/images/M/MV5BODA2YTgyMDItNzFjNi00Y2IzLTlhZTgtOGMzZjgzNDUxNzQxXkEyXkFqcGdeQXVyODE0NjUxNzY@._V1_UY209_CR5,0,140,209_AL_.jpg"
// }]


const MovieList =({updateduser,setData})=>{

  //  const newList = [...user]

  // const[data,setData] = useState(newList);

  // const[moviename,setName] = useState("");

  //  const[rating,setRating] = useState("");

  //  const[summary,setSummary] = useState("");

  //  const[poster,setPoster] = useState("");

  //  const[trailer,setTrailer] = useState("");

  //  function addMovie(e){


  //   e.preventDefault();
  //   //  console.log("adding the movie data");
  //   //  console.log(moviename);
  //   //  console.log(rating);
  //   //  console.log(summary);
  //   //  console.log(poster);
  //   const newObj={
  //     moviename:moviename,
  //     rating:rating,
  //     summary:summary,
  //     poster:poster,
  //     trailer:trailer
    
  //   }
   
    // var temparr=[...data,newObj]
    // parentfn(temparr)
    // setData(temparr);


    // setName(" ");
    // setRating(" ");
    // setSummary("");
    // setPoster("")
    // setTrailer("")

  //  }



  //  function addName(e){

    
  //   setName(e.target.value)

  //  }

   //console.log("test changes");

  return (
    // <div>
    //   <form>
    //     <TextField id="standard-basic" label="MovieName" variant="standard" type="text" name="moviename" value={moviename} onChange={addName} />
    //     {/* MovieName:<input type="text" name="moviename" value={moviename} onChange={addName}></input> */}
    //     <br></br>
    //     <TextField id="standard-basic" label="Rating" variant="standard" type="number" step="any" name="rating" value={rating} onChange={(e)=>{setRating(e.target.value)}} />
    //     {/* Rating:<input type="number" step="any" name="rating" value={rating} onChange={(e)=>{setRating(e.target.value)}}></input> */}
    //     <br></br>
    //     <TextField id="standard-basic" label="Summary" variant="standard" type="text" name="summary" value={summary} onChange={(e)=>{setSummary(e.target.value)}} />
    //     {/* Summary:<input type="text" name="summary" value={summary} onChange={(e)=>{setSummary(e.target.value)}}></input> */}
    //     <br></br>
    //     <TextField id="standard-basic" label="PosterLink" variant="standard" type="text" name="poster" value={poster} onChange={(e)=>{setPoster(e.target.value)}}/>
    //     {/* PosterLink:<input type="text" name="poster" value={poster} onChange={(e)=>{setPoster(e.target.value)}}></input> */}
    //     <br></br>
    //     <TextField id="standard-basic" label="TrailerLink" variant="standard" type="text" name="trailer" value={trailer} onChange={(e)=>{setTrailer(e.target.value)}}/>
    //     <br></br>
    //     {/* <button onClick={addMovie}>Submit</button> */}
    //     <br></br>
    //     <Button onClick={addMovie} variant="contained">Submit</Button>
    //   </form>
    //   {/* <AddMoviePage></AddMoviePage> */}
    //  <br></br>
     <ul className="movie-list" >
       {updateduser.map((eachmovie,index)=>(
       <MovieListItem key={index} name={eachmovie.moviename} rating={eachmovie.rating} summary={eachmovie.summary} poster={eachmovie.poster} trailer={eachmovie.trailer} id={index} deleteButton={<IconButton aria-label="delete" size="small" onClick={()=>{console.log("deleteing movie",index)
       let copyupdateduser = [...updateduser]
         copyupdateduser.splice(index,1);
         setData(copyupdateduser)
       }}>
        <DeleteIcon fontSize="inherit" color="error"/></IconButton> }></MovieListItem>))}
     </ul>


   
     
    // </div>
    

)
};


export default MovieList;