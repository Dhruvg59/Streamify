import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Tag from "../components/tags/Tag";
import Channels from "../components/channels/Channel";
import Carasouel from "../components/carasouel/Carasouel";
import Featured from "../components/featured/Featured";
import Shows from "../components/shows/Shows";

const Home = () => {


  let [movies,setMovies]=useState([]);
  let [featuredMovies,setFeaturedMovies]=useState([]);
  let [dramaMovies,setDramaMovies]=useState([]);
  let [hindiMovies,setHindiMovies]=useState([]);
  let [topMovies,setTopMovies]=useState([]);
  let [tvShows,setTvShows]=useState([]);




    useEffect(async()=>{
      try{
        let movieResponse= await fetch("http://localhost:3000/movies")
        // console.log(movieResponse);
        let moviesData= await movieResponse.json()
        // console.log(movies);
        setMovies(moviesData)

        //adding filters  for featured movies

        let featMovies =  moviesData.filter((movie)=>{return movie.featured===true})
        console.log(featMovies);
        setFeaturedMovies(featMovies.slice(0,4))

        //for action movies 
        let draMovies =  moviesData.filter((movie)=>{return movie.genre.includes("Drama")})
        console.log(draMovies);
        setDramaMovies(draMovies.slice(4,10))

        //filter for hindi movies
        let hinMovies =  moviesData.filter((movie)=>{return movie.genre.includes("Drama")})
        console.log(hinMovies);
        setHindiMovies(hinMovies.slice(0,3))

        //filter for top rated movies 

        let tpMovies =  moviesData.filter((movie)=>{return movie.imdb>=8.5})
        console.log(tpMovies);
        setTopMovies(tpMovies.slice(0,6))
        //filter for the tvshows data 
        let tvShow =  moviesData.filter((movie)=>{return movie.type==="tv-show"})
        console.log(tvShow);
        setTvShows(tvShow.slice(0,10))

      }
      catch(err){
        console.log(err);
        
      }
        
      
    },[])



  return <div>
    <Header movies={movies}/>
    <Tag/>
    <Carasouel movies={tvShows}/>
    <Channels/>
    <Featured movies={featuredMovies} />
    <Shows title="Drama Movies" movies={dramaMovies}/>
    <Shows title ='Recomended Movies'movies={hindiMovies }/>
    <Shows title='Highly Rated  Movies' movies={topMovies}/>
    
  </div>;
};

export default Home;
