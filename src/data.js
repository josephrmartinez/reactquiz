// const URL = "https://opentdb.com/api.php?amount=4&category=22&difficulty=hard&type=multiple"

export const data =

{

    "response_code": 0,
    "results": [
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "hard",
            "question": "What is the largest city and commercial capital of Sri Lanka?",
            "correct_answer": "Colombo",
            "incorrect_answers": [
                "Moratuwa",
                "Negombo",
                "Kandy"
            ]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "hard",
            "question": "What city is known as the Rose Capital of the World?",
            "correct_answer": "Tyler, Texas",
            "incorrect_answers": [
                "San Diego, California",
                "Miami, Florida",
                "Anaheim, California"
            ]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "hard",
            "question": "What is the name of rocky region that spans most of eastern Canada?",
            "correct_answer": "Canadian Shield",
            "incorrect_answers": [
                "Rocky Mountains",
                "Appalachian Mountains",
                "Himalayas"
            ]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "hard",
            "question": "The emblem on the flag of the Republic of Tajikistan features a sunrise over mountains below what symbol?",
            "correct_answer": "Crown",
            "incorrect_answers": [
                "Bird",
                "Sickle",
                "Tree"
            ]
        }
    ]

}

{
            
            question: "The emblem on the flag of the Republic of Tajikistan features a sunrise over mountains below what symbol?",
            correct_answer: "Crown",
            incorrect_answers: [
                "Bird",
                "Sickle",
                "Tree"
            ]
        }

    function generateGameDataObj() {
        return (
            {
                triviaQuestion: data.question,
                triviaAnswerOption1: {
                    answerText: "asd",
                    isCorrectAnswer: true,
                    isSelected: false,
                    isCorrectGuess: null,
                    isIncorrectGuess: null
                },
                triviaAnswerOption2: {
                    answerText: "asd",
                    isSelected: false,
                    isCorrectGuess: null,
                    isIncorrectGuess: null
                },
                triviaAnswerOption3: {
                    answerText: "asd",
                    isSelected: false,
                    isCorrectGuess: null,
                    isIncorrectGuess: null
                },
                triviaAnswerOption4: {
                    answerText: "asd",
                    isSelected: false,
                    isCorrectGuess: null,
                    isIncorrectGuess: null
                }
            }
            
        )
    }