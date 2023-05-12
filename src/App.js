import React, { useEffect, useState } from 'react'
import Quiz from './components/Quiz'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import axios from 'axios'
import "./App.css"
import { Data } from './Data/Data';
import Dashboard from './components/Dashboard'
function App() {
  // const [Data,setData]=useState([]);
  // useEffect(()=>{
  //   const func= async ()=>{
  //     const data=await axios.get('http://localhost:5000/api/data');
  //     setData(data.data);
  //     console.log(data.data);
  //   }
  //   func();
  // },[]);
  return (
      <Router>
    <div>
      <Routes>
        <Route path='/' element={<Dashboard Data={Data}/>}/>
        {
          Data.map(item => (
          <Route path={`/quiz/${item.id}`} element={<Quiz Data={item.content }/>}/>
          ))
        }
      </Routes>
    </div>
      </Router>
  )
}

export default App