import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Space } from 'antd';
function QuizResult(props) {
  const navigate=useNavigate();
  const ClickHandler = ()=> {
    navigate('/');
  }
  return (
    <>
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore} <br /> <br />
        Time taken : <br /> {props.min} minutes and {props.sec} seconds!
    </div>
    <Space direction="horizontal" size={75}>
    <button id="next-button" onClick={props.tryAgain} >Try Again</button>
    <br />
    <button id="next-button" onClick={ClickHandler} >Dashboard</button>
    </Space>
    </>
  )
}

export default QuizResult