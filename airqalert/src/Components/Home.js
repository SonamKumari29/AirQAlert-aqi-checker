import React from 'react'
import './HomePage.css';
import myImage from './Images/Home.jpg'
function Home() {
  return (
    <div className="fullscreen-image-container">
      <div className="fullscreen-image">
        <img src={myImage} alt="Description of the image" />
      </div>
    </div>
  )
}

export default Home
