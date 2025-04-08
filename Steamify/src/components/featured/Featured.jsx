import React from "react";
import Style from './featured.module.css'
import Featuredshow from "../featured-show/Featuredshow";
const Featured = (props) => {
  return <>
  <section className={Style.featured}>
       <h3 className={Style.sectiontitle}>Hot Right Now 🔥</h3>
       <div className={Style.shows}>

        {
          props.movies.map((movie)=>{
            return <Featuredshow movie={movie}/>
          })
        }
        {/* <Featuredshow/>
        <Featuredshow/>
        <Featuredshow/>
        <Featuredshow/> */}
        </div>
  </section>
  
  </>;
};

export default Featured;
