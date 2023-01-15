import React from 'react';
import { Redirect } from 'react-router-dom';
import Favourites from './Favourites.jsx';
import Home from './Home';
import PageNotFound from './PageNotFound';
import {Route, Switch} from "react-router-dom";
function Movies() {
  return (
    <>  
        <Switch>
           <Route path ="/home">
               <Home></Home>
           </Route>
           <Route path ="/favourites">
               <Favourites></Favourites>
           </Route>
           <Redirect from ="/" to="/home" exact></Redirect>
           <Route >
               <PageNotFound></PageNotFound>
           </Route>          
        </Switch>             
    </>
  )
}
export default Movies;

