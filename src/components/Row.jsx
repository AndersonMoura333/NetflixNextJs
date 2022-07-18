import movieTrailer from 'movie-trailer';
import React, { useState, useEffect} from 'react'
import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';
import { getMoveis } from '../api';
import styles from '../styles/Row.module.css'
const imageHost = "https://image.tmdb.org/t/p/original/";
export default function Row({title, path, isLarge}) {
const [movies, setMovies] = useState([]);
const [trailerUrl, setTrailerUrl] = useState("");





const opts = {
  maxResults: 10,
  key: 'thor 4'
};

const fetchMovies = async (path) => {
    try {
        const data = await getMoveis(path);
        setMovies (data?.results);
    } catch (error) {
        console.log("fetchMovies error", error);
    }
}

const handleOnClick = (movie) =>{

  if (trailerUrl) {
    setTrailerUrl("");
  }else{

    movieTrailer(movie.title || movie.name || movie.original_name || "")
    .then((url) =>{
      setTrailerUrl(url)
     
    }).catch(error => console.log("Error fetching movie trailer: ", error))
  
  }

}

useEffect(() => {
  fetchMovies(path)
}, [path])

  return (
    <div className={styles.rowContainer}>
        <h2 className={styles.rowHeader}>{title}</h2>
        <div className={styles.rowCards}>
            {movies?.map((movie) =>{
                return (
                <img
                onClick={() => handleOnClick(movie)}
                className={`${styles.movieCard}  ${(isLarge && styles.movieCardLarge)}`}
                 key = {movie.id}
                 src={`${imageHost}${
                  isLarge ? movie.backdrop_path : movie.poster_path
                }`} 
                 alt=""  />)
            })}
        </div>
        {/* {trailerUrl && <YouTube videoId="2g811Eo7K8U" opts={opts} />} */}
        {trailerUrl && <ReactPlayer url={trailerUrl}  playing = {true}/>}
    </div>
  )
}
