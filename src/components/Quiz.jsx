import React, { useEffect, useState } from 'react'
import QuizResult from './QuizResult';
function Quiz({Data}) {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    const [sec,setsec]=useState(0);
    const [min,setmin]=useState(0);
    useEffect(()=>{
        const interval = setInterval(() => {
            setsec(sec+1);
            if(sec==59) {
                setmin(min+1);
                setsec(0);
            }
          }, 1000);
          return () => clearInterval(interval);
    })

    const [sectime,setsectime]=useState(0);
    const [mintime,setmintime]=useState(0);
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< Data.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true);
            setsectime(sec);
            setmintime(min);
        }
    }
    const updateScore=()=>{
        if(clickedOption===Data[currentQuestion].answer){
            setScore(score+1);
        }
    }
    
    const resetAll=()=>{
        setsec(0);
        setmin(0);
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
  return (
    <div>
        <p className="heading-txt">Quiz APP</p>
        {!showResult && <div>Timer -- {min<10?'0'+min:min}:{sec<10?'0'+sec:sec}</div> }
        <div className="container">
            {showResult ? (
                <QuizResult score={score} totalScore={Data.length} tryAgain={resetAll} sec={sectime} min={mintime}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{Data[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {Data[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        // className="option-btn"
                        className={`option-btn ${
                            clickedOption == i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
            </>)}
        </div>
    </div>
  )
}

export default Quiz