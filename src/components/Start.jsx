import React from 'react'
import Blob5 from '../assets/blob5.svg' 
import Blob1 from '../assets/blobs.svg'
import { useNavigate } from 'react-router-dom'

const Start = () => { 
  const navigate = useNavigate()
  return (
    <div className='start'>
      <img className="blob-five" src={Blob5} alt='blob 5' /> 
        <div className='start-container'>
          <h1>Quizzical</h1> 
          <p>This game contains quiz questions. Answer them to see how bright you are!</p>
          <button onClick={ () => navigate("/game")}>Start quiz</button>
        </div>
      <img className="blob-one" src={Blob1} alt='blob 1' />   
    </div>
  )
}

export default Start