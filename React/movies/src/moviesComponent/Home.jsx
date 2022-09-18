import React from 'react';
import "./Header.css";
import { results } from "../movies";
import "./Banner.css";
import "movieList.css";
import "./Pagination.css";
// import Header from "./Header.jsx";
// import Banner from "./Banner.jsx";

function Home() {
    const[pageNo, setpageNumber]= React.useState(1);
    function incPageNumber(){
        setpageNumber(function(pageNo){
            return pageNo +1;
        })
    }
    function descPageNum(){
        if(pageNo==1){
            return;
        }
        setpageNumber(function(pageNo){
            return pageNo -1;
        })
    }
  return (
    <>
        <Header></Header>
        <Banner></Banner>
        <MovieList pageNo = {pageNo}></MovieList>
        <div className = "pagination">
            <div className ="pagination_btn"
                onClick={descPageNum}
            >Previous</div>
            <div classname = "page_no">{pageNo}</div>
            <div className ="pagination_btn"
                onClick={incPageNumber}
            >Next</div>
        </div>
    </>
    
  )
}
export default Home;

function Banner() {
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
             {firstMovie == "" ?
             <h2>Movies are yet to come :</h2> :<>
                   <h2>{firstMovie.original_title}</h2>
             <img src= {"https://image.tmdb.org/t/p/original" + firstMovie.backdrop_path}className= "banner_img"></img>
             </>
               
             }
        </>
    )            
    
}

function MovieList(props) {
    console.log(props.pageNo);
    let [movies, setMovie] = React.useState("");
    let [value, setValue] = React.useState("");
    function setText(e){
        let newValue = e.target.value;
        setValue(newValue);
    }
    React.useEffect(function fn() {
        async function fetchData(){
            let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=439f5c1b5dd6b1fcef2cd6a7b2365b0d" + props.pageNo);
            let data = await response.json();
            console.log("data", data);
            let movies = data.results;
            setMovie(movies);
        } 
        fetchData();
    }, [props.pageNo]);   
}

function filterLogic(searchText, movieArray) {
    let filteredMovieArray = [];
    for(let i=0; i< movieArray.length; i++){
        let upperSearchText = searchText.toUpperCase();
        let movieName = movieArray[i].original_title;
        let upperText = movieName.toUpperCase();
        let ans = upperText.includes(upperSearchText);
        if(ans == true){
            filteredMovieArray.push(movieArray[i]);
        }        
    }
    return filteredMovieArray;    
}
let searchedMovies= filterLogic(value, movie);
return(
    <>   
        <h2>Trending Movies</h2>
        <input onChange = {setText} value={value}></input>
         {
           movies == "" ? <h2>Loading Movies . . . </h2> :            
            <div className = "trending_box">
               {searchedMovies.map((movieObj, idx) => {
                   return (
                      <div key = {idx} className = "poster_box">
                          <h2>{movieObj.original_title}</h2>
                          <img src = {"https://image.tmdb.org/t/p/w500/" + movieObj.poster_path} className= "poster_img"></img>                        
                     </div>
                   )
               })}
            </div>
         }     
    </>
)


function Pagination() {
    return (
      <h2>Pagination</h2>


    )
}



function Header() {
    return (
        <div className="flex">
           <img src 
               ="https://img.icons8.com/external-bearicons-blue-bearicons/50/000000/external-movie-call-to-action-bearicons-blue-bearicons.png" >
           </img>
           <h2>Movies</h2>
           <h2>Favourates</h2>
        </div>

    )
}
