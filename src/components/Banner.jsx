import React, { useEffect, useState } from 'react'
import categories, { getMoveis } from '../api';
import styles from '../styles/Banner.module.css'
function Banner() {
    const [movie, setMovie] = useState({});
    const imagePath = 'https://image.tmdb.org/t/p/original/';
    const fetchRandomovie= async(_path) =>{
        try {
            const netflixOriginalsCategory = categories.find((category) => category.name === "netflixOriginals");
            const data = await getMoveis(netflixOriginalsCategory.path);
            const randomIndex = Math.floor(Math.random()*data.results.length);
            setMovie(data?.results[randomIndex]);
        } catch (error) {
            console.log("Banner fetchRandomovie error:", error);
        }
    }

    function truncate(str, n) {
        return str?.length > n ? str.substring(0, n - 1) + "..." : str;
      }

    useEffect(()=>{
        fetchRandomovie();
    },[])
  return (
      
      <header className={styles.bannerContainer} style={
          {
              backgroundSize: "Cover",
              backgroundImage: `url("${imagePath}${movie?.backdrop_path}")`,
              roundPosition: "center-center",
          }
      }>

    <div className={styles.bannerContent}>
        <h1 className={styles.bannerTitle}>
             {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={styles.bannerButtonsContainer}>
          <button className={styles.bannerButton}>Assistir</button>
          <button className={styles.bannerButton}>Minha Lista</button>
        </div>
        <div className={styles.bannerDescription}>
          <h2>{truncate(movie?.overview, 350)}</h2>
        </div>    
    </div>
      </header>
  )
}

export default Banner