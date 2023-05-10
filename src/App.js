import React from 'react'
import Quiz from './components/Quiz'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Data } from './Data/Data';
import "./App.css"
import Dashboard from './components/Dashboard'
function App() {
  
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