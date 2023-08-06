import React from 'react'
import movie1 from '../images/movie1.webp';
import movie2 from '../images/movie2.jpg';
import movie3 from '../images/movie3.jpg';
import movie4 from '../images/movie4.jpg';
import movie5 from '../images/movie5.jpg';
import movie6 from '../images/movie6.jpg';
import movie7 from '../images/movie7.jpg';
import movie8 from '../images/movie8.jpg'

function Pictures() {
  return (
    
  
    <div className='pictures'>
        <div className='pict-movies'>
        <img src={movie1} alt="" className='pict-movie' />
        <img src={movie2} alt="" className='pict-movie' />
        <img src={movie3} alt="" className='pict-movie' />
        <img src={movie4} alt="" className='pict-movie' />
        <img src={movie5} alt="" className='pict-movie' />
        <img src={movie6} alt="" className='pict-movie' />
        <img src={movie7} alt="" className='pict-movie' />
        <img src={movie8} alt="" className='pict-movie' />

        </div>
      
    </div>
  )
}

export default Pictures
