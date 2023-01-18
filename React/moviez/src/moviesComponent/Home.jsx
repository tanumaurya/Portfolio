import React from 'react';
import "./Header.css"; 
import "./Banner.css";
import "./MovieList.css";
import "./Pagination.css";
import Header from './Header.jsx';
import Banner from './Banner.jsx';
import MovieList from './MovieList.jsx';

function Home() {
  const [pageNo, setpageNumber]=React.useState(1);
  function incPageNumber(){
    setpageNumber(function (pageNo){
        return pageNo +1;
    });
  }
  function descPageNumber(){
    if(pageNo == 1){
      return;
    }
    setpageNumber(function (pageNo){
        return pageNo -1;
    });
  }
  return (
    <>
        <Header></Header>
        <Banner></Banner>
        <MovieList pageNo = {pageNo}></MovieList>
        < div className="pagination">
             <div className = "pagination_btn"
                   onClick = {descPageNumber}
             >Previous</div>
             <div className="page_no">{pageNo}</div>
             <div className = "pagination_btn"
                   onClick = {incPageNumber}
             >Next</div>
        </div>
    </>    
  )
}
export default Home;