import React from 'react'
import Quiz from './components/Quiz'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { QuizData } from './Data/QuizData';
import { Data } from './Data/Data';
import "./App.css"
import Dashboard from './components/Dashboard'
function App() {
  
  return (
      <Router>
    <div>
      <Routes>
        <Route path='/' element={<Dashboard Data={Data}/>}/>
        <Route path='/quiz/1' element={<Quiz Data={Data[0].content }/>}/>
        <Route path='/quiz/2' element={<Quiz Data={Data[1].content }/>}/>
        <Route path='/quiz/3' element={<Quiz Data={Data[2].content }/>}/>
        <Route path='/quiz/4' element={<Quiz Data={Data[3].content }/>}/>
      </Routes>
    </div>
      </Router>
  )
}

export default App