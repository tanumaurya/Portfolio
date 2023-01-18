import React from 'react'; 
import Header from './Header';
import { useEffect, useState} from 'react';

function Favourites() {
   let [favourites, setFavourites] = useState([]);
   let [ratingOrder, setRatingOrder] = useState(null);
   let [popularityOrder, setPopularity] = useState(null);
   let [searchText, setValue]=useState("");
   let [noOfElems, setElems]=useState(5);
   let [currPage, setPage ]= useState(1);
   const [genres, setGenres] = useState([]);

   let genreids = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family',
    14: 'Fantasy', 36: 'History',
    27: 'Horror', 10402: 'Music',
    9648: 'Mystery', 10749: 'Romance', 878: 'Sci -Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western'
   }

useEffect(function () {
    let favStrArr =localStorage.getItem("favourites") || "[]";
    let favArr = JSON.parse(favStrArr);
    setFavourites(favArr);

}, [])
useEffect(function () {
    // favoruites update -> new genre 
    let temp = favourites.map((movie) => genreids[movie.genre_ids[0]])
    // unique value hold
    temp = new Set(temp);
    setGenres(["All Genres", ...temp]);
 
}, [favourites])


   function setRatingHandler(order){
       setRatingOrder(order);
       setPopularity(null);
   }
   function setpopularityhandler(order){
    setRatingOrder(null);
    setPopularity(order);
   }
   function setTextHandler(e){
    let newValue = e.target.value;
    setValue(newValue);
    setPage(1);
   }
   function setnoElemsHandler(e){
    let newValue = e.target.value;
    setElems(newValue);
   }
   function incPageNumber(){
    setPage(function (currPage){
        return currPage +1;
    });
  }
  function descPageNumber(){
    if(currPage == 1){
      return;
    }
    setPage(function (currPage){
        return currPage -1;
    });
  }
  let searchedMovies = searchText=="" ? favourites : filterLogic(searchText, favourites);
  let ratedMovies = ratingOrder==null ? searchedMovies : sortFavourites(ratingOrder,searchedMovies);
  let sortedByratedPop =popularityOrder==null ? ratedMovies : sortByPopularity(popularityOrder,ratedMovies);
  let sidx = (currPage -1 )* noOfElems;
  let eidx = sidx + noOfElems;
  let paginatedResult=  sortedByratedPop.slice(sidx, eidx);   
  return(
     <>
        <Header></Header>
        <GenreBox genres={genres}></GenreBox>
        < div className ="search_pagination flex border-bottom">
              <input type ="text" placeholder = "search" onChange={setTextHandler} value={searchText}></input>
              <input type ="number" min="1" value = {noOfElems} onChange={setnoElemsHandler}></input>
        </div> 
        <table>
            <thead>
                <tr>
                    <th >Name</th >
                    <th> <i class="fa-solid fa-angles-up" onClick={() => { setRatingHandler(true) }}></i>
                        Rating
                        <i class="fa-solid fa-angles-down" onClick={() => { setRatingHandler(false) }}></i>
                    </th>
                    <th>
                        <i class="fa-solid fa-angles-up" onClick={() => { setpopularityhandler(true) }}></i>
                        Popularity
                        <i class="fa-solid fa-angles-down" onClick={() => { setpopularityhandler(false) }}></i>
                    </th>
                   
                </tr>

            </thead>
            <tbody>
                {paginatedResult.map((movieObj) =>{
                    return (
                      <tr>
                           <td>
                               <img src= {"https://image.tmdb.org/t/p/w500/" + movieObj.poster_path} 
                               style = {{height:"15rem"}} ></img> 
                               <h4>{movieObj.original_title}</h4>                   
                           </td>
                           <td>{movieObj.vote_average}</td>
                           <td>{movieObj.popularity}</td>
                        
                      </tr>
                    )
                })
              }            
            </tbody> 
        </table>
        < div className="pagination">
             <div className = "pagination_btn"
                   onClick = {descPageNumber}
             >Previous</div>
             <div className="page_no">{currPage }</div>
             <div className = "pagination_btn"
                   onClick = {incPageNumber}
             >Next</div>
        </div>
     </>    
  )
}

function sortFavourites(ratingOrder, favourites) {
  if (ratingOrder === null) {
      return favourites;
  }
  function helper(a, b) {
      if (ratingOrder) {
          if (a.vote_average > b.vote_average) {
              return +1
          } else if (a.vote_average == b.vote_average) {
              return 0;
          } else if (a.vote_average < b.vote_average) {
              return -1
          } 
      } else {
          if (a.vote_average > b.vote_average) {
              return -1;
          } else if (a.vote_average == b.vote_average) {
              return 0
          } else if (a.vote_average < b.vote_average) {
              return +1
          }
      }
  }
  let ratedFavourites = favourites.sort(helper);
  return ratedFavourites;
}
function sortByPopularity(popularityOrder,ratedMovies) {
    if (popularityOrder === null) {
        return ratedMovies;
    }
    function helper(a, b) {
        if (popularityOrder) {
            if (a.popularity > b.popularity) {
                return +1
            } else if (a.popularity == b.popularity) {
                return 0;
            } else if (a.popularity < b.popularity) {
                return -1
            } 
        } else {
            if (a.popularity > b.popularity) {
                return -1;
            } else if (a.popularity == b.popularity) {
                return 0
            } else if (a.popularity < b.popularity) {
                return +1
            }
        }
    }
    let ratedandpopFavourites = ratedMovies.sort(helper);
    return ratedandpopFavourites;
}
function filterLogic(searchText, movieArray){
  
    let filteredMovieArray = [];
    for(let i= 0; i< movieArray.length; i++ ) {
      let upperSearchText = searchText.toUpperCase();
      let movieName = movieArray[i].original_title;
      let upperText = movieName.toUpperCase();
      console.log(upperText);
      let ans = upperText.includes(upperSearchText);
      if(ans == true){
            filteredMovieArray.push(movieArray[i]);
      } 
    }
    return filteredMovieArray;   
}
function GenreBox(props) {
    return (
        < div className="flex border-bottom" >
            {props.genres.map((genre, idx) => {
                return (
                    <h4 key={idx}>{genre}</h4>
                )
            })}
        </div >)
}
export default Favourites;