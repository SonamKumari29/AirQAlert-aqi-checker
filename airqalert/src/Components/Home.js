import React from 'react'
import './HomePage.css';
import myImage from './Images/Home.png'
function Home() {
  return (
    <div className="fullscreen-image-container">
      <div className="fullscreen-image">
        <img src={myImage} alt="home image" />
      </div>
      <div className='block'>
        Hii this is the home 

      </div>
    </div>

  )
}

export default Home
