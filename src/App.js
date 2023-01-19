import { useEffect, useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import Trivia from './components/Trivia';

function App() {
  const [triviaData, setTriviaData] = useState([])
  const [startScreen, setStartScreen] = useState(true)
  // const [gameData, setGameData] = useState({
  //   startScreen: true,
  //   triviaData: [],
  //   correctAnswers: ""
  // })



  function clickAnswer() {
    console.log("guess clicked")
  }

  const triviaComponents = triviaData.map(triviaObj => {
    return <Trivia
      triviaData={triviaObj}
      key={triviaObj.question}
      clickAnswer={clickAnswer} />
  })



  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=4&category=22&difficulty=hard&type=multiple")
      .then(res => res.json())
      .then(data => setTriviaData(data.results))
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
