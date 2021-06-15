import React,{useState,useEffect} from 'react';
import './Banner.css';
import  {instance} from '../../DataFetch/axiosLib';
import requests from '../../DataFetch/requests';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';


const Banner = () => {
    const [movie, setMovie] = useState({});
    const [trailer, setTrailer] = useState('');

    const handlePlay = () => {


    if (trailer) {
        setTrailer('')
      } else {
        movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
          .then(url => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailer(urlParams.get('v'));
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
  
    
    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
        }
        fetchData();
    },[])
    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0,n-1) + '...' : string;
    }
    return (
        <header className = "banner" style = {{
            backgroundSize : 'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition : 'center center'
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.original_name || movie?.name || movie?.title}</h1>
                <div className="banner__buttons">
                    <button className = "banner__button" onClick = {handlePlay}>{trailer ? 'Stop' : 'Play'}</button>
                    <button className = "banner__button">My List</button>
                </div>
                <h1 className = "banner__description">{truncate(movie?.overview,150)}</h1>
                
            </div>
      
            <div className="banner--fadeBottom"></div>
            {trailer &&  <YouTube videoId = {trailer} opts = {opts} />}
        </header>
    )
}

export default Banner
