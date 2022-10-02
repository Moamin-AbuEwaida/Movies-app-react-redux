import React, { useEffect } from 'react'
import './Home.scss';
import MovieListing from '../MovieListing/MovieListing';
import movieApi  from '../../common/apis/MovieApi';
import {APIKey} from '../../common/apis/MovieApiKey';
import {useDispatch} from 'react-redux';
import {addMovies} from '../../features/movies/movieSlice';

const Home = () => {
const movieText = 'Harry';
const dispatch = useDispatch();
useEffect(() => {
  const fetchMovies = async () => {
    const res = await movieApi
    .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    .catch((err)=>{
      console.log('Err :', err);
    });
    // console.log('API response ',res);
    dispatch(addMovies(res.data));
  };
  fetchMovies();
},[]);
  return (
    <div>
      <div className='banner-img'></div>
        <MovieListing />    
    </div>
  )
}

export default Home