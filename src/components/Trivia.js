export default function Trivia(props) {
    
    //     key={triviaObj.id}
    //   question={triviaObj.question}
    //   correctAnswer={triviaObj.correctAnswer}
    //   selected={triviaObj.selected}
    //   allAnswers={triviaObj.allAnswers}
    //   clickAnswer={clickAnswer} />

    // CURRENT PROPS
    // triviaData={triviaObj}
    //   key={nanoid()}
    //   handleSelect={handleSelect}

// const styles = {
//         backgroundColor: props.selected ? '#D6DBF5' : 'none'
//     }

    const question = props.triviaData.question
    const allAnswers = props.triviaData.allAnswers
    const correctAnswer = props.triviaData.correctAnswer

    
    const answerItems = allAnswers.map(answer => {
        
        return (
            <div
                // style={styles}
                className="trivia-answer"
                onClick={ () => props.handleSelect(props.triviaData.id, answer)}><span>{answer}</span></div>)
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