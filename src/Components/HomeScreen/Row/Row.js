import {instance} from '../../DataFetch/axiosLib';
import React,{useEffect, useState} from 'react';
import './Row.css';
import movieTrailer from 'movie-trailer';
import {v4 as uuidv4} from 'uuid';
import YouTube from 'react-youtube';

const Row = ({title, fetchUrl, isLargeRow = false}) => {
    const [trailerUrl, setTrailerUrl] = useState('');
    
  const handleClick = (movie) => {
   
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error) => console.log(error));
    }
  }
    const opts = {
        width : '100%',
        height: '390',
        playerVars : {
            autoplay : 0,
        },
    };

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
                (  <img onClick ={() => handleClick(movie)} className =  {`row__poster ${isLargeRow && 'row__posterLarge'}`}  key = {uuidv4()} src = {`${base__url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt = "Image Not Found" />

              )
              
            })
        }

            </div>
           {trailerUrl &&  <YouTube videoId = {trailerUrl} opts = {opts} />}
        </div>
    )
}

export default Row
