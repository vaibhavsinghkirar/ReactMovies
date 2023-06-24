import { useState,useEffect } from 'react';
import axios from 'axios';
import "./App.css"
import React from 'react';
import SearchIcon from './search.svg';
import MovieCard from './components/MovieCard';
const App  = ()=>{
    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const data = await axios.get(`https://api.tvmaze.com/search/shows?q=${title}`);
        setMovies(data.data);
    }

    useEffect(()=>{
        searchMovies('Spiderman')
    },[])
    return (
    <div className='app'>
        <h1>Movies</h1>
        <div className='search'>
            <input
              placeholder='Search for movies'
              value={searchTerm}
              onChange = {(e)=>setSearchTerm(e.target.value)}
            />
            <img
            src={SearchIcon}
            alt = "search"
            onClick={()=>{searchMovies(searchTerm)}}
            />
        </div>

        {
            movies?.length>0
            ?(
                <div className='container'>
                    {movies.map((movie)=>(
                        <MovieCard movie ={movie}/>
                    ))}
                </div>
            ):(
                <div className='empty'>
                    <h2>No Movies found</h2>
                </div>
            )
        }
    </div>
    );
}
export default App;