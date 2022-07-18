import React, { useState, useEffect} from 'react'
import { getMoveis } from '../api';
import styles from '../styles/Row.module.css'
const imageHost = "https://image.tmdb.org/t/p/original/";
export default function Row({title, path, isLarge}) {
const [movies, setMovies] = useState([]);

const fetchMovies =async (path) => {
    try {
        const data = await getMoveis(path);
        setMovies (data?.results);
    } catch (error) {
        console.log("fetchMovies error", error);
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
                className={`${styles.movieCard}  ${(isLarge && styles.movieCardLarge)}`}
                 key = {movie.id}
                 src={`${imageHost}${
                  isLarge ? movie.backdrop_path : movie.poster_path
                }`} 
                 alt=""  />)
            })}
        </div>
    </div>
  )
}
