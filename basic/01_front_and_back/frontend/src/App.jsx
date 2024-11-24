import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [user, setUser] = useState([])

  useEffect(()=>{
    axios.get('/user')
    .then(res=>{
      setUser(res.data)
      console.log(res.data)
    })
    .catch(err=>console.log(err))
    
  })

  return (
    <>
    <div>Total user {user.length}</div>
    {user.map((item,index)=>(
      <div key={index}>
        <h1>{item.name}</h1>
        <h5>{item.email}</h5>
        <h5>{item.phone}</h5>
        <p>{item.about}</p>
      </div>
    ))}
    </>
  )
}

export default App
