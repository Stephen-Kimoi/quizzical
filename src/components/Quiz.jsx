import React, { useEffect, useState } from 'react';

const Quiz = ({questions, answers, randomNumber, slicedNumber, questionsDiv, settingQuestions, submitAnswers}) => {

  return (
    <div className='quiz'> 
      <div className='quiz-container'> 
        {
         questionsDiv
        }
      <div className='buttons'>
        <button className='check-answers' onClick={submitAnswers}>Check answers</button>  
        <button className='check-answers' onClick={settingQuestions}>New Questions</button>  
      </div>
      {/* <p>You've gotten {correctAnswerSum} out of 5</p> */}
      </div>
    </div>
  )
}

export default Quiz