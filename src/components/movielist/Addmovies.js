import React,{useState,useNavigate, navigate } from "react";

// import MovieListItem from "./Movielistitem";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';




const Addmovieform =({user,parentfn})=>{

   const newList = [...user]

  const[data,setData] = useState(newList);

  const[moviename,setName] = useState("");

   const[rating,setRating] = useState("");

   const[summary,setSummary] = useState("");

   const[poster,setPoster] = useState("");

   const[trailer,setTrailer] = useState("");

   function addMovie(e){


    e.preventDefault();
    //  console.log("adding the movie data");
    //  console.log(moviename);
    //  console.log(rating);
    //  console.log(summary);
    //  console.log(poster);
    const newObj={
      moviename:moviename,
      rating:rating,
      summary:summary,
      poster:poster,
      trailer:trailer
    
    }
   
    var temparr=[...data,newObj]
    parentfn(temparr)
    setData(temparr);


    setName(" ");
    setRating(" ");
    setSummary("");
    setPoster("")
    setTrailer("")

   }



   function addName(e){

    
    setName(e.target.value)

   }

   //console.log("test changes");

  //  useNavigate("/Movies");
   

  return (
    <div>
      <form>
        <TextField id="standard-basic" label="MovieName" variant="standard" type="text" name="moviename" value={moviename} onChange={addName} />
        {/* MovieName:<input type="text" name="moviename" value={moviename} onChange={addName}></input> */}
        <br></br>
        <TextField id="standard-basic" label="Rating" variant="standard" type="number" step="any" name="rating" value={rating} onChange={(e)=>{setRating(e.target.value)}} />
        {/* Rating:<input type="number" step="any" name="rating" value={rating} onChange={(e)=>{setRating(e.target.value)}}></input> */}
        <br></br>
        <TextField id="standard-basic" label="Summary" variant="standard" type="text" name="summary" value={summary} onChange={(e)=>{setSummary(e.target.value)}} />
        {/* Summary:<input type="text" name="summary" value={summary} onChange={(e)=>{setSummary(e.target.value)}}></input> */}
        <br></br>
        <TextField id="standard-basic" label="PosterLink" variant="standard" type="text" name="poster" value={poster} onChange={(e)=>{setPoster(e.target.value)}}/>
        {/* PosterLink:<input type="text" name="poster" value={poster} onChange={(e)=>{setPoster(e.target.value)}}></input> */}
        <br></br>
        <TextField id="standard-basic" label="TrailerLink" variant="standard" type="text" name="trailer" value={trailer} onChange={(e)=>{setTrailer(e.target.value)}}/>
        <br></br>
        {/* <button onClick={addMovie}>Submit</button> */}
        <br></br>
        
        <Button onClick={addMovie}  variant="contained">Submit</Button>
      </form>

    </div>
    

  )
};


export default Addmovieform;