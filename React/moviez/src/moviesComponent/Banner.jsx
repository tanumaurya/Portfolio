import React from 'react';
function Banner(){    
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
export default Banner;  