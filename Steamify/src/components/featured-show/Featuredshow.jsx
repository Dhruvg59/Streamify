import React from "react";
import Style from './featured-show.module.css'

const Featured= (props) => {
  return <>
   <div className={Style.featuredshow}>
            <img src={props.movie.imageUrl} alt="" />
            <div className={Style.movieTitle}>
              {props.movie.name}
              
              </div>
        </div>
        </>;
};

export default Featured;
