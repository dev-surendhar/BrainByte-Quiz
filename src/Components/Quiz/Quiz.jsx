import React, {useState, useRef} from 'react'
import './Quiz.css'
import {data} from '../../assets/data.js'

const Quiz = () => {

    let [index, setIndex] = useState(0);
    let [questions, setQuestions] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let optionArr = [Option1, Option2, Option3, Option4];


    const checkAnswer = (e, ans) => {
        if (!lock) {
            if (questions.ans === ans) {
                e.target.classList.add('correct');
                setScore(score + 1);
            }    
            else {
                e.target.classList.add('wrong');
                optionArr[questions.ans - 1].current.classList.add('correct');

            }    
            setLock(true);
        }    
        
    }       


    const nextQuestion = () => {
        if (lock===true) {
            if (index === data.length-1){
                setResult(true);
                return; 
            }
            setIndex(index + 1);
            setQuestions(data[index + 1]);
            setLock(false);
            optionArr.map((option) => {
                option.current.classList.remove('correct', 'wrong');
            })
        }
    }

    const resetQuiz = () => {
        setIndex(0);
        setQuestions(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
        optionArr.map((option) => {
            option.current.classList.remove('correct', 'wrong');
        })
    }


  return (
    <div className='quiz-container'>
        {result ? (
            <div className='scorecard'>
                <h1>🎉 QUIZ COMPLETED!</h1>
                <hr />
                <div className='score-details'>
                    <h2>Your Final Score</h2>
                    <div className='score-display'>
                        <span className='score-number'>{score}</span>
                        <span className='score-total'>/ {data.length}</span>
                    </div>
                    <div className='percentage'>
                        {Math.round((score / data.length) * 100)}%
                    </div>
                    <div className='performance'>
                        {score === data.length ? "Perfect! 🏆" : 
                         score >= data.length * 0.8 ? "Excellent! 🌟" :
                         score >= data.length * 0.6 ? "Good Job! 👏" :
                         score >= data.length * 0.4 ? "Not Bad! 👍" : "Keep Practicing! 💪"}
                    </div>
                </div>
                <button onClick={resetQuiz} className='reset-btn'>PLAY AGAIN</button>
            </div>
        ) : (
            <>
                <h1>QUIZ APP</h1>
                <hr />
                <h2>{index+1}. {questions.question}</h2>
                <ul>
                    <li ref={Option1}  onClick={ (e) => { checkAnswer(e,1) } }>{questions.option1}</li>
                    <li ref={Option2} onClick={ (e) => { checkAnswer(e,2) } }>{questions.option2}</li>
                    <li ref={Option3} onClick={ (e) => { checkAnswer(e,3) } }>{questions.option3}</li>
                    <li ref={Option4} onClick={ (e) => { checkAnswer(e,4) } }>{questions.option4}</li>
                </ul>
                <button onClick={nextQuestion}>NEXT</button>
                <div className="index">{index + 1} of {data.length}</div>
            </>
        )}
    </div>
  )
}

export default Quiz