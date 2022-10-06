import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Blob5 from './assets/blob5.svg' 
import Blob1 from './assets/blobs.svg'
import Quiz from './components/Quiz'
import Data from './Data'
import './App.css'

function App() {
  const [questions, setQuestions] = useState(
    Data.data.questions.map( question => {
      return {
        ...question, 
        choosen: false, 
        id: nanoid()
      }
    })
  ); 
  const [answers, setAnswers] = useState([]); 
  const [questionsDiv, setQuestionsDiv] = useState(); 
  const [choosenAnswers, setChoosenAnswers] = useState([]); 
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [correctAnswerSum, setCorrectAnswerSum] = useState(0); 



  const randomNumber = () => {
    return Math.floor(Math.random() * 5)
  }

  console.log("Random number: ", randomNumber())

  const slicedNumber = () => {
    return (randomNumber() + 5); 
  }

  console.log("Sliced number: ", slicedNumber())

  function chooseAnswers(answer, questionId) {
    console.log(answer, questionId); 
    
    setChoosenAnswers(prevAnswers => [...prevAnswers, answer])
    
    // setQuestions( prevQuestion => prevQuestion.forEach( question => {
    //   return question.id === questionId ? {
    //     ...question, 
    //     choosen: !question.choosen
    //   } : 
    //   question
    // }))

  }

  function settingQuestions() {
    setQuestionsDiv(); 
    setAnswers();

    let selectedQuestions = questions.slice(randomNumber(), slicedNumber()); 
    setAnswers( 
      selectedQuestions.forEach( (question) => {
        answers.push(question.answer)
      })
    )

    console.log("Selcted answers: ", answers); 
    
    setQuestionsDiv(
      selectedQuestions.map( question => {
        return (
           <div className='question' key={question.id}>
              <p className='question-title'>{ question.qn }</p> 
              <ul className='question-answers'> 
                 <li className='question-answer' onClick={ () => chooseAnswers(question.a, question.id)}>{ question.a }</li>
                 <li className='question-answer' onClick={ () => chooseAnswers(question.b, question.id)}>{ question.b }</li>
                 <li className='question-answer' onClick={ () => chooseAnswers(question.c, question.id)}>{ question.c }</li>
                 <li className='question-answer' onClick={ () => chooseAnswers(question.d, question.id)}>{ question.d }</li>
             </ul>
         </div>
        )
      })
    )

    console.log("Selected questions: ", selectedQuestions)
  }

  function submitAnswers() {
    let correctAnswerSum = 0; 

    // choosenAnswers.forEach( selectedAnswer => {
    //   answers.forEach( answer => {
    //     if (answer === selectedAnswer){
    //       correctAnswerSum++;  
    //     }
    //   })
    // }) 

    // console.log(correctAnswerSum);
    // setCorrectAnswerSum(correctAnswerSum);  

    console.log(choosenAnswers.length); 
    console.log(choosenAnswers); 
  } 

  function settingAnswers() {
    // for(let i = 0; i <= questions.length; i++){
    //   // setAnswers(Data.data.questions[i].answer); 
    //   answers.push(Data.data.questions[i].answer)
    // }
  } 


  // useEffect( () => {
  //   settingAnswers()
  // }, [questions]); 

  return (
    <div className="App">
      <img className="blob-five" src={Blob5} alt='blob 5' /> 

      <Quiz 
        questions={questions} 
        answers={answers} 
        randomNumber={randomNumber} 
        slicedNumber={slicedNumber} 
        questionsDiv={questionsDiv}
        settingQuestions={settingQuestions} 
        submitAnswers={submitAnswers}
        />

      <img className="blob-one" src={Blob1} alt='blob 1' /> 
    </div>
  )
}

export default App
