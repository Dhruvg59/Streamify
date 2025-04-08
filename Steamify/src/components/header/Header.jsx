    import React, { useEffect, useState } from "react";
    import styles from './Header.module.css'
    import Preview from '../../assets/Preview.png'
    import Search from '../../assets/icon.svg'
    import Voicesearch from '../../assets/voice-search.svg'
    import User from '../../assets/user1.svg'
    import Show from "../show/Show";



    const Header = (props) => {

        let navlinks=['Home','Sports','Movies','TV shows','More' ]
        let [searchTitle,setSearchTitle] =useState("");
        let [filteredMovies,setFilteredMovies]=useState([])
        
    useEffect(()=>{

        if(searchTitle!==""){

            let filterMovies=  props.movies.filter((movie)=>
                {return movie.name.toUpperCase().includes(searchTitle.toUpperCase())
            });
        
             setFilteredMovies(filterMovies)

        }else{
            setFilteredMovies([])
        }

    
        
    },[searchTitle])

    return<>
    <header className={styles.header}>
        
        <nav className={styles.navigation}>

            <div className={styles.logomain}>
            <img src={Preview} alt="Logo" className={styles.logo} />
            <div className={styles.premium }> Go Premium</div>
        
            {/* <ul className={styles.navlinks}>
                <li>Home</li>
                <li>Sports</li>
                <li>Movies</li>
                <li>TV shows</li>
                <li>More</li>
                
            </ul> */}
            <ul className={styles.navlinks}>
                {
                    navlinks.map((link)=>{
                        return <li className={styles.navlink}>{link}</li>
                    })
                }
            </ul>
            </div>
            </nav>

            <div className={styles.search}>

                <div className={styles.searchbox}>
                    <div className={styles.headerIcon}>
                    <img src={Search} alt="searchicon"  />
                    </div>
                
                    <input type="text" 
                    onChange={(event)=>{
                        setSearchTitle(event.target.value)

                    }}  className={styles.searchInput} placeholder="Movies Shows And More"/>
                    <div className={styles.headerIcon}>
                    <img src={Voicesearch} alt="voicesearchicon"  />
                    </div>
                </div>
                <img src={User} alt="" className={styles.user}/>
            </div>
    </header>

    {
        filteredMovies.length!==0?(
            <div className={styles.searchResults}>
        {
            filteredMovies.map((movie)=>{
                return <Show movie={movie} key={movie.id}/>
            })
        }
    </div>
        ):null
    }

    
    </>
    
    };

    export default Header;
