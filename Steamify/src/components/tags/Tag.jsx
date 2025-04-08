import React, { useState } from "react";
import Styles from './Tag.module.css'

const Tag = () => {

    let [tags,setTags]=useState([
        "Breaking Bad",      // TV Show
        "Inception",         // Movie
        "Stranger Things",   // TV Show
        "Action",            // Genre
        "The Godfather",     // Movie
        "Comedy",            // Genre
        "Game of Thrones",   // TV Show
        "The Dark Knight",   // Movie
        "Sci-Fi",            // Genre
        "Romance"    ,        // Genre
        
         "Titanic",            // Movie
        "Horror",             // Genre
       "Peaky Blinders",     // TV Show
        "Fight Club",         // Movie
        "Thriller",           // Genre
        "Friends",            // TV Show
        
      ])
  return <>
  <div className={Styles.tag}>

      {
        tags.map((tag)=>{
          return <p className={Styles.tag1}>{tag}</p>
        })
      }

  </div>
  </>;
};

export default Tag;