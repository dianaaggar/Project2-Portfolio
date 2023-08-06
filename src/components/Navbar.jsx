import React, { useState } from 'react';
import axios from 'axios';

const Navbar = () => {
    const [movie, setMovie] = useState({})
    const [search, setSearch] = useState('')
    


    const searchMovie = async () =>{
        const response= await axios.get(`https://www.omdbapi.com/?apikey=78a2602d&t=${search}`)
        console.log(response.data);
        setMovie(response.data)
    }
    
    const handleSubmit =(e)=>{
    e.preventDefault()
    searchMovie()
    }

  return (
    <>
    <div className='navb'>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <input  className="MovieSearchInput" type="text" placeholder='Search movie...' value={search} onChange={(e)=> setSearch(e.target.value)}/>

        <input className="MovieSearchSubmitButton" type="Submit"/>
      </form>

      <div className='details'>
      <div className='detail-l'>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} />
      </div>
      <div className='detail-r'>
      <h5>  {movie.Plot}</h5>
      <h5>  {movie.Actors}</h5>
      <h5>  {movie.Genre}</h5>
      <h5>  {movie.Year}</h5>
      <h5>  {movie.Country}</h5>
      <h5>  {movie.Director}</h5>
      </div>
      </div>
      

    </div>
    </>
  )
}

export default Navbar

