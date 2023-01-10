// header 
import React from 'react'

import  {Link} from "react-router-dom";
function Header(){
    return(
        <div className = "flex">
            <img src = 
            "https://img.icons8.com/external-bearicons-blue-bearicons/50/000000/external-movie-call-to-action-bearicons-blue-bearicons.png">
            </img>
            <link to = "/home">
                <h2> Movies</h2>
            </link>
            <Link to = "/favourites">
                <h2> Favourites </h2>
            </Link>
        </div>
    )
}