import React, { useEffect, useState } from 'react';


const Quiz = ({questionsDiv, settingQuestions, submitAnswers, }) => {
  
  // const styles = {
  //   backgroundColor: 
  // }

  return (
    <div className='quiz'> 
      <div className='quiz-container'> 
        {
         questionsDiv
        }
      <div className='buttons'>
        <button className='check-answers' onClick={submitAnswers}>Submit answers</button>  
        <button className='check-answers' onClick={settingQuestions}>New Questions</button>  
      </div>
      {/* <p>You've gotten {correctAnswerSum} out of 5</p> */}
      </div>
    </div>
  )
}

export default Quiz