import React from "react";
import Styles from './Shows.module.css'
import Show from "../show/Show";
const Shows = (props) => {
  return <>
  <section className={Styles.shows}>
    <h1 className={Styles.Hindi} >{props.title}</h1>
    <div className={Styles.showsparent}>

      {
        props.movies.map((movie)=>{
          return <Show movie={movie}/>
        })
      }

           {/* <Show/>
           <Show/>
           <Show/>
           <Show/>
           <Show/>
           <Show/> */}

    </div>
  </section>
  
  </>;
};

export default Shows;
