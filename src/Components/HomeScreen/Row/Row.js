import {instance} from '../../DataFetch/axiosLib';
import React,{useEffect, useState} from 'react';
import './Row.css';
import {v4 as uuidv4} from 'uuid'

const Row = ({title, fetchUrl, isLargeRow = false}) => {
    const base__url = 'https://image.tmdb.org/t/p/original/';
    const [movies, setMovies] = useState([]);
    console.log(movies);
    useEffect(() => {
        const dataFetch = async () => {
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results)

            return request;
        }

        dataFetch();
    },[fetchUrl])
    return (
        <div className = "row">
            <h1>{title}</h1>
            <div className="row__posters">
                
            {
            movies.map(movie => {
              return ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && 
                (  <img className =  {`row__poster ${isLargeRow && 'row__posterLarge'}`}  key = {uuidv4()} src = {`${base__url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt = "Image Not Found" />

              )
              
            })
        }
            </div>
        </div>
    )
}

export default Row
