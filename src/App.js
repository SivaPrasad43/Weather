import './App.css';
import Display from './Components/Display/Display';
import Navbar from './Components/Navbar/Navbar';
import { useState,useEffect } from 'react';
// import axios from 'axios';

function App() {
  // const [search,setSearch] = useState(null)
  // const [data,setData] = useState('')

  const [loc,setLoc] = useState("kozhikode")
  // useEffect(()=>{
  //   if (!didInit) {
  //     didInit = true;
  //   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=b9f9daeab49fd3912980eed124845ae8`)
  //   .then((response)=>setData(response.data))
  // }
  // },[])
  const data = useData(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=b9f9daeab49fd3912980eed124845ae8`);
  return (
    <div className="App">
      <Navbar setLoc={setLoc}/>
      {data!==null? <><Display 
                city={data.name} 
                temp={(data.main?.temp)-273}
                wind_speed={data.wind?.speed}
                clouds={data.clouds?.all}
                humidity={data.main?.humidity}/>
              </>
                 : <h1 style={{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"}}>Loading...</h1>}
    </div>
  );
}

function useData(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        if (!ignore) {
          setData(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, [url]);
  return data;
}

export default App;
