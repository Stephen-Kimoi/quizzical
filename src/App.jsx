import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Blob5 from './assets/blob5.svg' 
import Blob1 from './assets/blobs.svg'
import Quiz from './components/Quiz'
import Data from './Data'
import './App.css'


function App() { 
  
  console.log("Component rendered!")
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
  const [hold, setHold] = useState(false);  

  const styles = {
    backgroundColor: hold ? "#b7c0ec" : "",  
  }

  const randomNumber = () => {
    return Math.floor(Math.random() * 5)
  }

  console.log("Random number: ", randomNumber())


  const slicedNumber = () => {
    return (randomNumber() + 5) + 1; 
  }

  console.log("Sliced number: ", slicedNumber())

  function chooseAnswers(answer) {
    setHold(current => !current); 
    setChoosenAnswers(prevAnswers => [...prevAnswers, answer])
    
    // setQuestions( prevQuestion => prevQuestion.forEach( question => {
    //   return question.id === questionId ? {
    //     ...question, 
    //     choosen: !question.choosen
    //   } : 
    //   question
    // }))
    console.log(hold)

  }

  function settingQuestions() {
    setQuestionsDiv(); 
    setAnswers([]);

    let selectedQuestions = questions.slice(randomNumber(), slicedNumber()); 
    setAnswers( 
      selectedQuestions.forEach( (question) => {
        answers.push(question.answer)
      })
    )
    
    setQuestionsDiv(
      selectedQuestions.map( question => {
        return (
           <div className='question' key={question.id}>
              <p className='question-title'>{ question.qn }</p> 
              <ul className='question-answers'> 
                 <li className='question-answer' onClick={ () => { chooseAnswers(question.a); }} style={styles}>{ question.a }</li>
                 <li className='question-answer' onClick={ () => { chooseAnswers(question.b); }} style={styles}>{ question.b }</li>
                 <li className='question-answer' onClick={ () => { chooseAnswers(question.c); }} style={styles}>{ question.c }</li>
                 <li className='question-answer' onClick={ () => { chooseAnswers(question.d); }} style={styles}>{ question.d }</li>
             </ul>
         </div>
        )
      })
    )

    console.log("Selected questions: ", selectedQuestions)
  }

  useEffect( () => {
    settingQuestions(); 
  }, [])

  function settingAnswers() {
    selectedQuestions.forEach( question => {
      setAnswers( prevAnswers => [...prevAnswers, question.answer])
    })
    console.log("(Setting answers function) Correct answers are: ", answers); 
  } 

  useEffect( () => {
    settingAnswers()
  }, [questions]); 

  function submitAnswers() {
    let correctAnswerSum = 0; 

    choosenAnswers.forEach( selectedAnswer => {
      console.log("The choosen answer is: ", selectedAnswer); 
      console.log("Correct answers are: ", answers); 
      
      // answers.forEach( answer => {
      //   if (answer === selectedAnswer){
      //     correctAnswerSum++
      //   }
      // }) 
    }) 
  
  }

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
