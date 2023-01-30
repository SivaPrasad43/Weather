import React, { useState } from 'react'
import "./Navbar.css"

function Navbar({setLoc}) {
  const [val,setVal] = useState('');
  return (
    <div className='navbar'>
      <div className="search-container">
        <input 
          type="text" 
          placeholder='Search Your Location' 
          value={val} 
          onChange={(e)=>setVal(e.target.value)} 
          onKeyDown={(e)=>{if(e.key==="Enter") setLoc(val)}}
        />
        <button onClick={()=>setLoc(val)}>Search</button>
      </div>
    </div>
  )
}

export default Navbar
