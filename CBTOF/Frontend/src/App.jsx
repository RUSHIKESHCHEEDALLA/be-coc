import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes,setJokes]=useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
      .then((res)=>setJokes(res.data))
      .catch((err)=>{console.log(err)})
  },[])
  console.log(jokes);
  
  return (
   <div>
    <h1>FRONTEND PAGE</h1>
    <h2>Jokes:{jokes.length}</h2>
    {
      jokes.map((joke)=>(
        <div key={joke.id}>
          <h3>{joke.name}</h3>
        </div>
      ))
    }
  </div>
   
  )
}

export default App
