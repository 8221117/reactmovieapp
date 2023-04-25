
import './App.css';
import { useState } from "react";
import MovieList from './components/movielist/Movielist';
import TotalColorList  from './components/movielist/colorboxgame';
import { NavLink, Routes, Route,useNavigate,useParams, Navigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Addmovieform from './components/movielist/Addmovies';
 

var obj = [{
  moviename:"Jai Bhim",
  rating:"8.8",
  summary:"When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice.",
  poster:"https://m.media-amazon.com/images/M/MV5BNzFkM2FhMzQtYjUwZi00N2Y3LWFkZWItMmZmMjQxNGQwZmNhXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_UY209_CR13,0,140,209_AL_.jpg",
  trailer:"https://www.youtube.com/embed/ElXnVVDl8cA",
},{
  moviename:"Vikram",
  rating:"8.3",
  summary:"A high-octane action film where a special investigator is assigned a case of serial Killings, he finds the case is not what it seems to be and leading down this path is only going to end in a war between everyone involved.",
  poster:"https://m.media-amazon.com/images/M/MV5BMDRiOWNjYjUtMDI0ZC00MDMyLTkwZDItNTU5NWQ1NjEyNGYxXkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_UX140_CR0,0,140,209_AL_.jpg",
  trailer:"https://www.youtube.com/embed/OKBMCL-frPU",
},{
  moviename:"Rocketry: The Nambi Effect",
rating:"8.8",
summary:"Based on the life of Indian Space Research Organization scientist Nambi Narayanan, who was framed for being a spy and arrested in 1994. Though free, he continues to fight for justice against the officials who falsely implicated him.",
poster:"https://m.media-amazon.com/images/M/MV5BNTk2MjUxMjEtZDU5OC00MzYxLTkwMWYtMGM5YWQ0MWMyN2I1XkEyXkFqcGdeQXVyMTE0MzY0NjE1._V1_UY209_CR0,0,140,209_AL_.jpg",
trailer:"https://www.youtube.com/embed/ez7D1h8OXNc",
},{
moviename:"Soorarai Pottru",
  rating:"8.7",
  summary:"Nedumaaran Rajangam Maara sets out to make the common man fly and in the process takes on the world's most capital intensive industry and several enemies who stand in his way.",
  poster:"https://m.media-amazon.com/images/M/MV5BOThkNjFiMzMtNGY5Yi00MDAxLTgxYjItMTZiN2RiMGNiOTA4XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UY209_CR13,0,140,209_AL_.jpg",
  trailer:"https://www.youtube.com/embed/fa_DIwRsa9o",
},{
  moviename:"Pithamagan",
  rating:"8.3",
  summary:"Chittan, a social outcast, has grown up in a cemetery. A drug dealer finds him a job in a cannabis farm. In prison, he meets a conman, Shakti. This friendship transforms him from his stony existence ",
  poster:"https://m.media-amazon.com/images/M/MV5BODA2YTgyMDItNzFjNi00Y2IzLTlhZTgtOGMzZjgzNDUxNzQxXkEyXkFqcGdeQXVyODE0NjUxNzY@._V1_UY209_CR5,0,140,209_AL_.jpg",
  trailer:"https://www.youtube.com/embed/9QjRafqRVjU",
}]




const Initial_color_list = ["orange","red","green"];






function App() {
 // const newList = [...obj];

  // const[data,setData] = useState(newList); //lifting the state up (lifted from child to parent)

  const[data,setData] = useState(obj);


 
  function Parent(c){

    console.log("Parent",c);
    setData(c)

  }



  return (
    <div className="App">
      
      
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add-movies">Add Movie</NavLink>
        </li>
        <li>
          <NavLink to="/Movies-list">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/color-game">Color Game</NavLink>
        </li>
       
      </ul>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<MovieList updateduser={data}></MovieList>} />
        <Route path="/Movies-list" element={<Navigate replace to="/Movies"></Navigate>} />
        <Route path="/Movies-list/:id" element={<MovieDetails movielist={data}></MovieDetails>} />
        <Route path="/color-game" element= { <TotalColorList parentfn={Parent} color={Initial_color_list}></TotalColorList>} />
        <Route path="/404" element={<NotFoundPage></NotFoundPage>}/>
        <Route path="*" element={<Navigate replace to="/404"></Navigate>} />
        <Route path="/add-movies" element={<Addmovieform parentfn={Parent} user={obj}></Addmovieform>} />
        </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1> Welcome to Movie APP😊😍</h1>
    </div>
  );
}

function NotFoundPage(){

 return (
  <div>
  
  <img width="100%" src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/media/507f015a7efd81cec270faf9c4f1aabd.gif" Alt="Page NOT Found"></img>
  
  </div>
)
}

function MovieDetails({movielist}) {


  const {id}=useParams();  //to extract id(parameter) from the url

 // const idname = useParams();

  const array= movielist[id];

  if(!array){

  <NotFoundPage></NotFoundPage>

  }
  


  //console.log("movie details component",movielist[id]);
   console.log("checking array",array);
console.log(movielist);

const navigate = useNavigate();
  return(

      <div>
        <iframe width="916" height="515" src={array.trailer} title= "YouTube video player" frameborder="0"  allowfullscreen>
        </iframe>


       <br></br>


        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/ElXnVVDl8cA" title= "YouTube video player" frameborder="0" allowfullscreen></iframe> */}

       <h1>
        Movie Details of id {id} = {array.moviename}

        {array.rating}
        {/* = {array.moviename} */}
       </h1>
       {/* <p>{array.moviename}</p> */}

       <Button onClick={()=> navigate(-1)}variant="contained"><ArrowBackIcon></ArrowBackIcon>Back</Button>
      </div>
      
  
    )


}

export default App;
