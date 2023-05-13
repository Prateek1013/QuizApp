import React, { useEffect, useState } from 'react'
import Quiz from './components/Quiz'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import axios from 'axios'
import "./App.css"
// import { Data } from './Data/Data';
import Dashboard from './components/Dashboard'
function App() {
  const BACKEND_URL='https://devtown-assignment-fswd-task.onrender.com';
  const [Data,setData]=useState([]);
  const [isLoading,setisloading]=useState("Please wait....Loading!!");
  useEffect(()=>{
    const func= async ()=>{
      const data=await axios.get(`${BACKEND_URL}/api/data`);
      setData(data.data);
      setisloading("Quiz App");
      console.log(data.data);
    }
    func();
  },[]);
  return (
      <Router>
    <div>
      <Routes>
        <Route path='/' element={<Dashboard Data={Data} msg={isLoading}/>}/>
        { Data &&
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