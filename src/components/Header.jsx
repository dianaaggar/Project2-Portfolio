import React from 'react'

function Header() {
  return (
    <div className='header'>
        <div className='left-side'> 
        <div className='left-side-wrapper'>
            <h2 className='hello'>Hello, My name is</h2>
            <h1 className='name'>Diana Aggar </h1>
            <h3>software engineer</h3>
            <h4>Skills : </h4>
            <div className="title">
                
                <div className="title-wrapper">
                    {/* <div className="title-items">Skills</div> */}
                    <div className="title-items">full stack engineer</div>
                    <div className="title-items">Front-End: React | HTML | CSS</div>
                    <div className="title-items">Backend: Node.js | Git | Rest API</div>
                    <div className="title-items">Languages:JavaScript</div>
                    <div className="title-items">Databases: MongoDB | SQL</div>

                    

                </div>
            </div>
        </div>
        </div>
        <div className='right-side'> right </div>
    
    
    </div>
  )
}

export default Header
