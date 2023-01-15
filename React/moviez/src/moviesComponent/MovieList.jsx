import React from 'react';
function MovieList(props){
    let [movies, setMovie] = React.useState("");
    let [value, setValue] = React.useState("");
    let [favourites, setFavourite] = React.useState([]);
    function setText(e){
      let newValue = e.target.value;
      setValue(newValue);
    }
    function setToFavouriteHandlers(movieId) {
      console.log("add", movieId);
      for (let i = 0; i < movies.length; i++) {
          let movieObj = movies[i];
          if (movieObj.id == movieId) {              
              let newfavourites = [...favourites];
              newfavourites.push(movieObj);              
              setFavourite(newfavourites);
              break;
          }
      }
  }
  function deleteFavoriteHandlers(movieId) {
      let filteredFavorite =
          favourites.filter((movieObj) => {
              return movieObj.id != movieId;
          })      
      setFavourite(filteredFavorite);
  }
  function checkContainFavHandlers(movieId) {
      for (let i = 0; i < favourites.length; i++) {
          if (favourites[i].id == movieId) {
              return true
          }
      }
      return false;

  }
    React.useEffect(function() {
        async function fetchData(){
        
            let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=439f5c1b5dd6b1fcef2cd6a7b2365b0d&page="+props.pageNo);
            let data = await response.json();
            console.log("data", data);
            let movies = data.results;
            setMovie(movies);  
        }
        fetchData();
    }, [props.pageNo]);
    
    let searchedMovies = filterLogic(value, movies);
    //
    return(
        <>
          <h2>Trending Movies</h2>
          <input onChange={setText} value= {value}></input>
          {movies === "" ? <h2>Loading Movies...</h2> :
             <div className ="trending_box"> 
                 {searchedMovies.map(function(movieObj, idx){
                      return (
                          <div key={idx} className ="poster_box">
                            <h2>{movieObj.original_title}</h2>
                            <img src= {"https://image.tmdb.org/t/p/w500/" + movieObj.poster_path}className= "poster_img"></img>
                              {
                                    checkContainFavHandlers(movieObj.id) == true ?
                                        <i className="fa-solid fa-xmark"
                                            onClick={() => { deleteFavoriteHandlers(movieObj.id) }}
                                        ></i> :
                                        <i className="fa-solid fa-face-grin-hearts"
                                            onClick={() => { setToFavouriteHandlers(movieObj.id) }}
                                        ></i>
                              }
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
export default MovieList;