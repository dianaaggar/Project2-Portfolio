import React from 'react'
import pict1 from '../images/pict1.jpg'

function Header() {
  return (
    <div className='header'>
        <div className='left-side'> 
        <div className='left-side-wrapper'>
            <h2 className='hello'> Hello, My name is</h2>
            <h1 className='name'> Diana Aggar </h1>
            <h3> Software Engineer</h3>
            <h4> Skills : </h4>
            <div className="title">
                
                <div className="title-wrapper">
                    {/* <div className="title-items">Skills</div> */}
                    <div className="title-items">Full Stack Engineer</div>
                    <div className="title-items">Front-End: React | HTML | CSS</div>
                    <div className="title-items">Backend: Node.js | Git | Rest API</div>
                    <div className="title-items">Languages:JavaScript</div>
                    <div className="title-items">Databases: MongoDB | SQL</div>
                </div>
            </div>
            <div className="description"> I am a software engineer, a skilled professional who designs, develops, and maintains software applications. I possess in-depth knowledge of programming languages, algorithms, and data structures, enabling me to create efficient and reliable code. With a focus on innovation and problem-solving, I contribute significantly to the advancement of technology and software solutions.</div>
        </div>
        </div>
        {/* ---------------------------Right side-------------------- */}
        <div className='right-side'>
            <img src={pict1} alt="" className='r-img' />
            

        </div>
    
    
    </div>
  )
}

export default Header
