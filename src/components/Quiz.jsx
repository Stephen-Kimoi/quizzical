import React, { useEffect, useState } from 'react';

const Quiz = ({questions, answers}) => {
  const [choosenAnswers, setChoosenAnswers] = useState([]); 
  const [correctAnswerSum, setCorrectAnswerSum] = useState(0); 

  function chooseAnswers(value) {
    setChoosenAnswers( prevAnswers => {
      return [
        ...prevAnswers, 
        value
      ]
    })
    console.log(choosenAnswers)
  }

  function submitAnswers() {
    // for(let answer in choosenAnswers) {
    //   console.log("Answer in submit answers funct: ",answer)
    // }
    let correctAnswerSum = 0; 

    choosenAnswers.forEach( selectedAanswer => {
      answers.forEach( answer => {
        if (answer === selectedAanswer){
          correctAnswerSum++;  
        }
      })
    }) 

    console.log(correctAnswerSum);
    setCorrectAnswerSum(correctAnswerSum);  
  } 
  
  const questionsDiv = questions.map( question => {
    return (
        <div className='question'>
            <p className='question-title'>{ question.qn }</p> 
            <ul className='question-answers'> 
                <li className='question-answer' onClick={ () => chooseAnswers(question.a)}>{ question.a }</li>
                <li className='question-answer' onClick={ () => chooseAnswers(question.b)}>{ question.b }</li>
                <li className='question-answer' onClick={ () => chooseAnswers(question.c)}>{ question.c }</li>
                <li className='question-answer' onClick={ () => chooseAnswers(question.d)}>{ question.d }</li>
            </ul>
        </div>
    )
  })
  return (
    <div className='quiz'> 
      <div className='quiz-container'> 
        {
         questionsDiv
        }
      <button className='check-answers' onClick={submitAnswers}>Check answers</button>  
      {/* <p>You've gotten {correctAnswerSum} out of 5</p> */}
      </div>
    </div>
  )
}

export default Quiz