import { useState, useEffect } from 'react'
import Blob5 from './assets/blob5.svg' 
import Blob1 from './assets/blobs.svg'
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
      <img className="blob-five" src={Blob5} alt='blob 5' /> 
      <Quiz questions={questions} answers={answers}/> 
      <img className="blob-one" src={Blob1} alt='blob 1' /> 
    </div>
  )
}

export default App
