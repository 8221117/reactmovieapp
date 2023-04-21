import React,{useState} from "react";

import MovieListItem from "./Movielistitem";

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


const MovieList =({user})=>{

   const newList = [...user]

  const[data,setData] = useState(newList);

  const[moviename,setName] = useState("");

   const[rating,setRating] = useState("");

   const[summary,setSummary] = useState("");

   const[poster,setPoster] = useState("");

   function addMovie(){

     console.log("adding the movie data");
     console.log(moviename);
     console.log(rating);
     console.log(summary);
     console.log(poster);

   }



   function addName(e){

    setName(e.target.value)

   }

   //console.log("test changes");

  return (
    <div>
      <form>
        MovieName:<input type="text" name="moviename" onChange={addName}></input>
        <br></br>
        Rating:<input type="number" step="any" name="rating" onChange={(e)=>{setRating(e.target.value)}}></input>
        <br></br>
        Summary:<input type="text" name="summary" onChange={(e)=>{setSummary(e.target.value)}}></input>
        <br></br>
        PosterLink:<input type="text" name="poster" onChange={(e)=>{setPoster(e.target.value)}}></input>
        <br></br>
        <button onClick={addMovie}>Sumit</button>
      </form>
     <ul>
       {data.map((eachmovie)=>(
       <MovieListItem name={eachmovie.moviename} rating={eachmovie.rating} summary={eachmovie.summary} poster={eachmovie.poster}></MovieListItem>
       
       ))}
     </ul>

   
     
    </div>
    

  )
};


export default MovieList;