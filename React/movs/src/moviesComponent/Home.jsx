import React from 'react'
import "./Header.css";
import "./Banner.css";
import "./MovieList.css";
import "./Pagination.css";
function Home() {
    const [pageNo, setpageNumber] = React.useState(1);
    function incPageNumber() {
        setpageNumber(function (pageNo) {
            return pageNo + 1;
        });

      }
      function descPageNum() {
        if (pageNo == 1) {
            return;

        }

        setpageNumber(function (pageNo) {
            return pageNo - 1;
        });

      }


    return (
      <>
       <Header></Header>
       <Banner></Banner>
       <MovieList pageNo={pageNo}></MovieList>

       <div className="pagination">
      <div className="pagination_btn"
      onClick={descPageNum}
      >Previous</div>
      <div className="page_no">{pageNo}</div>
      <div className="pagination_btn"
      onClick={incPageNumber}
      >Next</div>
        </div>
    
       
        </>
    )
  }
  
  export default Home;
  
  //header
  function Header() {
    return ( 
        
                <div className="flex">
                <img src
                    ="https://img.icons8.com/external-bearicons-blue-bearicons/50/000000/external-movie-call-to-action-bearicons-blue-bearicons.png">
                </img>
                    <h2>Movies</h2>
                    <h2>Favorites</h2>
                
            </div>
   
    )
  }
      
  
  
  
   //banner
  
    
      // banner
      function Banner() {
          let [firstMovie, setFirstMovie] = React.useState("");
          React.useEffect(function(){
              async function fetchData() {
                  // it is used to make request
                  let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=16e7df484a81f634d85b2f25f938585d");
                  // response -> you will get in buffer -> convert it into json
                  let data = await response.json();
                  console.log("data", data);
                  let movies = data.results;
                  // console.log("movies", movies)
                  setFirstMovie(movies[0]);
              }
              fetchData();
          }, []);
          return (
              <>
                  {firstMovie == "" ?
                      <h2>Movies are yet to come</h2 > : <>
                          <h2>{firstMovie.original_title}</h2>
                          <img src={"https://image.tmdb.org/t/p/original" + firstMovie.backdrop_path} className="banner_img"></img>
                      </>
      
                  }
              </>
          )
      }
    
   //movie list
  function MovieList(props){
    console.log(props.pageNo);
    let [movies, setMovie] = React.useState("");
    let [value, setValue] = React.useState("");
    function setText(e) {
        let newValue = e.target.value;
        setValue(newValue);
    }
  React.useEffect(function fn() {
    async function fetchData() {
        // it is used to make request
        let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=16e7df484a81f634d85b2f25f938585d&page="+props.pageNo);
        // response -> you will get in buffer -> convert it into json
        let data = await response.json();
        console.log("data", data);
        let movies = data.results;
        // console.log("movies", movies)
        setMovie(movies);
    }
    fetchData();
  }, [props.pageNo]);

  function filterLogic(searchText, movieArray) {
    

    let filteredMovieArray = [];
    for (let i = 0; i < movieArray.length; i++) {
        let upperSearchText = searchText.toUpperCase();
        let movieName = movieArray[i].original_title;
        
        let upperText = movieName.toUpperCase();
        console.log(upperText);
        let ans = upperText.includes(upperSearchText);
        if (ans == true) {
            filteredMovieArray.push(movieArray[i]);
        }
    }
    return filteredMovieArray;
}
    
  let searchedMovies = filterLogic(value,movies);
  
        return (

            <>
            <h2> Trending Movies</h2>
            <input on onChange={setText} value={value}></input>
            {movies == "" ? <h2>Loading Movies</h2> :
             <div className="trnding_box">
                    {searchedMovies.map((movieObj, idx) => {
                        return (
                            <div key={idx}>
                                <h2>{movieObj.original_title}</h2>
                                <img src={"https://image.tmdb.org/t/p/w500/" + movieObj.poster_path} className="poster_img"></img>
                            </div>
                        )
                    })}
                    </div>
           }
           </>  
        )  
  }