import React,{useState,useEffect} from 'react'
import axios from'./axios';
import requests from './request';
import "./Banner.css";
function Banner() {

    //javascript code is used to select the movie
    const{movie,setmovie}=useState([]);

useEffect(()=>{
    async  function fetchData(){

        const request =await axios.get(requests.fetchNetflixOriginals);
        setmovienpm(
            request.data.results[
                Math.floor(Math.random()* request.data.results.length)
            ]
        );
        return request
    }
        fetchData();

},[]);

    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }
  return (
    <div>
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:'url("https://image.tmdb.org/t/p/originals/${movie?.backdrop_path}")',
            backgroundPosition:"center center"
        }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name|| movie?.original_name}
                </h1>

                <div className="banner_contents">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">{truncate(movie?.overview)}</h1>
            </div>

            
            
            <div className="banner--fadeBottom"/>
        </header>
    </div>
  )
}

export  default Banner;