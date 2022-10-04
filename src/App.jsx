import { useState, useEffect } from 'react'
import Quiz from './components/Quiz'
import Data from './Data'
import './App.css'

function App() {
  const [questions, setQuestions] = useState(Data.data.questions); 
  const [answers, setAnswers] = useState([]); 

  function settingAnswers() {
    // for(let i = 0; i <= questions.length; i++){
    //   // setAnswers(Data.data.questions[i].answer); 
    //   answers.push(Data.data.questions[i].answer)
    // }
    questions.forEach( (question) => {
      answers.push(question.answer)
    })
    console.log("Answers: ", answers);
  } 

  useEffect( () => {
    settingAnswers()
  }, [questions]); 

  return (
    <div className="App">
         <Quiz questions={questions} answers={answers}/> 
         <p>
           Data loading
         </p>
    </div>
  )
}

export default App
