import { useEffect, useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import Trivia from './components/Trivia';
import { nanoid } from 'nanoid';

function App() {
  const [triviaData, setTriviaData] = useState([])
  const [startScreen, setStartScreen] = useState(true)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [answerStatement, setAnswerStatement] = useState('')


  function handleSelect(quizId, selectedAnswer, answerKey) {
    setTriviaData(prevData => prevData.map(each => {
      return each.id === quizId ? { ...each, selected: selectedAnswer } : each
    }))
  }
    


  function checkAnswers() {
    setQuizCompleted(true)
    setAnswerStatement(() => {
      let correctAnswers = 0;
      let totalAnswers = triviaData.length
      triviaData.forEach(each => {
        if (each.selected === each.correctAnswer) {correctAnswers += 1}
      })
      
      return(`${correctAnswers}/${totalAnswers} correct`)
    } )
  }
  

  const triviaComponents = triviaData.map(triviaObj => {
    return <Trivia
      triviaData={triviaObj}
      key={nanoid()}
      id={triviaObj.id}
      handleSelect={handleSelect} />
  })


  function shuffleAnswers(array) {
    for (let i = 0; i < array.length; i++) {
      let randomIndex = Math.floor(Math.random() * (i + 1))
      let temp = array[i]
      array[i] = array[randomIndex]
      array[randomIndex] = temp
    }
      return array
  }


  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=4&category=22&difficulty=hard&type=multiple")
      .then(res => res.json())
      .then(data => setTriviaData(data.results.map(each => {
        return (
        {
            id: nanoid(),
            question: each.question,
            correctAnswer: each.correct_answer,
            selected: '',
            allAnswers:
                shuffleAnswers([each.correct_answer, ...each.incorrect_answers])
        })

      })))
  }, [])



  function startGame() {
    setStartScreen(false)
  }


  return (
    <div className="App">
      {startScreen && <StartScreen startGame={startGame} />}
      {triviaComponents}
      <button className='check-answer-button' onClick={checkAnswers}>Check Answers</button>
      {quizCompleted && <div className="quiz-results">{answerStatement}</div>}
    </div>
    
  );
}

export default App;
