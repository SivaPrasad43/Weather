import React from 'react'
import "./Display.css"
import CountUp from 'react-countup'
import Card from '../Card/Card'
import { useState,useEffect } from 'react'

const weatherBackground = {
  "night" : "https://img.freepik.com/free-photo/3d-render-tree-landscape-against-night-sky_1048-5698.jpg?w=1380&t=st=1675099147~exp=1675099747~hmac=f233849826d0016c2f7733358f22907089af5a9accc987329865c9034e3b9c3b",
  "day": "https://img.freepik.com/free-photo/nature-colorful-landscape-dusk-cloud_1203-5705.jpg?w=1060&t=st=1675097371~exp=1675097971~hmac=45e8d3ef405beaa938bd354dbc4d87ef80a0fdb4daa2b83be19df82ae91e1092"
}

function Display(props) {
  const [daypic,setDaypic] = useState("")
  
  useEffect(()=>{
    setDaypic(weatherBackground.night)
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
