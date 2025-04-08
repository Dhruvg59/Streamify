import React from "react";
import Styles from './show.module.css'

const Show = (props) => {
  return <>
     <div className={Styles.show}>
                
                <img src={props.movie.imageUrl} alt="" />
            <div className={Styles.movieTitle}>
              {props.movie.name}
            </div>
            </div>
  </>
};

export default Show;
