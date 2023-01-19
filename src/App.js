import { useEffect, useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import Trivia from './components/Trivia';
import { nanoid } from 'nanoid';

function App() {
  const [triviaData, setTriviaData] = useState([])
  const [startScreen, setStartScreen] = useState(true)



  function clickAnswer(correctAnswer) {
    console.log(correctAnswer)
  }


  function handleSelect(quizId, selectedAnswer) {
    setTriviaData(prevData => prevData.map(each => (
      each.id === quizId ? {...each, selected: selectedAnswer} : each 
    )))
    console.log(selectedAnswer)

    // USE ID TO FIND QUIZ RELATED TO ANSWER AND THEN ACCESS THE CORRECT ANSWER
    let quiz = triviaData.find(quizObj => quizObj.id === quizId)
    console.log(quiz.correctAnswer)
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


  function checkAnswers() {
    console.log("checked")
  }

  return (
    <div className="App">
      {startScreen && <StartScreen startGame={startGame} />}
      {triviaComponents}
      <button className='check-answer-button' onClick={checkAnswers}>Check Answers</button>
    </div>
    
  );
}

export default App;
