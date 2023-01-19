export default function Trivia(props) {
    const question = props.triviaData['question']

    const correctAnswer = props.triviaData['correct_answer']
    const incorrectAnswers = props.triviaData['incorrect_answers']

    const allAnswers = incorrectAnswers.concat(correctAnswer)

    
    const answerItems = allAnswers.map(each => {
        return (
            <div
                className="trivia-answer"
                onClick={props.clickAnswer}><span>{each}</span></div>)
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