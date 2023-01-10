import React from 'react';
import "./Header.css"; 
import movies, {results} from "../movies";
import "./Banner.css";
import "./MovieList.css";

function Home() {
  return (
    <>
        <Header></Header>
        <Banner></Banner>
        <MovieList></MovieList>
        <Pagination></Pagination>
    </>    
  )
}
export default Home;

function Header(){
  return(
     
    <div className="flex">
    <img src
        ="https://img.icons8.com/external-bearicons-blue-bearicons/50/000000/external-movie-call-to-action-bearicons-blue-bearicons.png">
    </img>
        <h2>Movies</h2>
        <h2>Favorites</h2>
    </div>
  )
}

function Banner(){
  // let [firstMovie, setMovie] = React.useState("");
  let [firstMovie, setFirstMovie] = React.useState("");
  React.useEffect(function() {
      async function fetchData(){
          let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=439f5c1b5dd6b1fcef2cd6a7b2365b0d");
          let data = await response.json();
          console.log("data", data);
          let movies = data.results;
          setFirstMovie(movies[0]);  
      }
      fetchData();
  }, []);
  return(
      <> 
           {firstMovie === "" ?
           <h2>Movies are yet to come ...</h2> :
           <>
                 <h2>{firstMovie.original_title}</h2>
                 <img src= {"https://image.tmdb.org/t/p/original" + firstMovie.backdrop_path}className= "banner_img"></img>
           </>
             
           }
      </>
  )            
}

function MovieList(){
  let [movies, setMovie] = React.useState("");
  let [value, setValue] = React.useState("");
  function setText(e){
    let newValue = e.target.value;
    setValue(newValue);
  }
  React.useEffect(async function() {
      
          let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=439f5c1b5dd6b1fcef2cd6a7b2365b0d");
          let data = await response.json();
          console.log("data", data);
          let movies = data.results;
          setMovie(movies);  
           
  }, []);
  let searchedMovies = filterLogic(value, movies);
  return(
      <>
        <h1>Trending Movies</h1>
        <input onChange={setText} value= {value}></input>
        {movies === "" ? <h2>Loading Movies...</h2> :
           <div className ="trending_box"> 
               {movies.map((movieObj, idx) => {
                    return (
                        <div key={idx} className ="poster_box">
                          <h2>{movieObj.original_title}</h2>
                          <img src= {"https://image.tmdb.org/t/p/original" + movieObj.poster_path}className= "poster_img"></img>
                        
                        </div>
                    )
                })}
            </div>  
        }
      </>
  )
}
function filterLogic(searchText, movieArray){
    let filteredMovieArray = [];
    for(let i=0; i< movieArray.length; i++){
      let upperSearchText = searchText.toUpperCase();
      let movieName = movieArray[i].original_titile;
      let upperText = movieName.toUpperCase();
      console.log(upperText);
      let ans = upperText.includes(upperSearchText);
      if(ans === true){
       filteredMovieArray.push(movieArray[i]);
      } 
    }
    return filteredMovieArray;   
}


function Pagination(){
  return(
       <h1>Pagination</h1>
  )
}