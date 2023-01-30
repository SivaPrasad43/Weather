import React from 'react'
import "./Card.css"
import CountUp from 'react-countup'

function Card(props) {
  return (
    <>
      <div className='card-container'>
        <div className="card-icon">
          <i className="fa-solid fa-wind fa-4x"></i>
        </div>
        <div style={{padding:"20px"}}>
          <h2>Wind Speed</h2>
          <h1><CountUp end={props.wind_speed}/> km/hr</h1>
        </div>
      </div>
      <div className='card-container'>
        <div className="card-icon">
        <i className="fa-solid fa-cloud fa-4x"></i>
        </div>
        <div style={{padding:"20px"}}>
          <h2>Cloudiness</h2>
          <h1><CountUp end={props.clouds}/>%</h1>
        </div>
      </div>
      <div className='card-container'>
        <div className="card-icon">
        <i className="fa-solid fa-droplet fa-4x"></i>
        </div>
        <div style={{padding:"20px"}}>
          <h2>Humidity</h2>
          <h1><CountUp end={props.humidity}/> km/hr</h1>
        </div>
      </div>
    </>
  )
}

export default Card
