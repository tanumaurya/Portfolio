import React from 'react';
import Home from './Home';
import Favourates from './Favourates';
import PageNotFound from './PageNotFound';

function movies() {
  return (
    <>
       <Home></Home>
       <Favourates></Favourates>
       <PageNotFound></PageNotFound>
    </>
    
  )
}

export default movies;