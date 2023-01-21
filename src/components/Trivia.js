import { nanoid } from 'nanoid';

export default function Trivia(props) {

//     const styles = {
//     wrongAnsColor: {background: "#F8BCBC"},
//     correctAnsColor: {background: "#94D7A2"},
//     selectColor: {background: "#D6DBF5"}
// }

    const question = props.triviaData.question
    const allAnswers = props.triviaData.allAnswers
    const correctAnswer = props.triviaData.correctAnswer

    
    const answerItems = allAnswers.map(answer => {
        let answerKey = nanoid()
        const styles = {
            backgroundColor: props.triviaData.selected === answer ? '#D6DBF5' : 'none'
         }

        return (
            <div
                key={answerKey}
                style={styles}
                className="trivia-answer"
                onClick={ () => props.handleSelect(props.triviaData.id, answer, answerKey)}><span>{answer}</span></div>)
    })

    return (
        <div className="trivia-section">
            <div className="trivia-question">{question}</div>
            <div className="trivia-answers-section">
                {answerItems}
            </div>
            <hr></hr>
        </div>
    )
}