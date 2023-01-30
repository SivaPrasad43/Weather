import React from 'react'
import "./Display.css"
import CountUp from 'react-countup'
import Card from '../Card/Card'
import { useState,useEffect } from 'react'

const weatherBackground = {
  "night" : "https://img.freepik.com/free-photo/3d-render-tree-landscape-against-night-sky_1048-5698.jpg?w=1380&t=st=1675099147~exp=1675099747~hmac=f233849826d0016c2f7733358f22907089af5a9accc987329865c9034e3b9c3b",
  "day": "https://img.freepik.com/free-photo/pretty-cloudscape_1112-457.jpg?w=1380&t=st=1675102568~exp=1675103168~hmac=5e4099ad6655c65a3c07a8b530cf6fe91038fda8b13fa80709e776386c8322a6"
}

function Display(props) {
  const [daypic,setDaypic] = useState("")
  const hours = new Date().getHours()
  
  useEffect(()=>{
    console.log(hours)
    if(hours>6 && hours<20){
      setDaypic(weatherBackground.day)
    }
    else{
      setDaypic(weatherBackground.night)
    }
  },[])
  console.log(daypic);
  return (
    <div 
      className='display-container'
      style={{backgroundImage:'url('+daypic+')'}}>
      <div className="temp-display">
        <h1>
            <CountUp end={props.temp}/>°C</h1>
        <h2>{props.city}</h2>
      </div>
      <div className="other-details">
        <div className='other-container'>
          <Card {...props}/>
        </div>
      </div>
    </div>
  )
}

export default Display
