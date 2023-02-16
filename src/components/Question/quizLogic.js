import React, {useState} from "react";
import "./Quiz.css";
import questionList from "./questionList";
// import { Link } from 'react-router-dom'

function QuizLogic() {

  let [currentQues, setcurrentQues] = useState(0)
  let [correctAnswers, setcorrectAnswers] = useState(0)
  let [trueFalse, settrueFalse] = useState(true)

  // find the correct anwers
  const anwers = questionList[currentQues].answerOptions.filter((correct) => correct.rightChoice === true)
  const handleCorrect = (correct) => {

    // turn to congratulate page when you finish
    if (currentQues === questionList.length-1){
      setcurrentQues(questionList.length-1)

    // next question when you know the correct answer
    } else if ( correct === "recorrect") {
      setcurrentQues(count => count + 1)
      settrueFalse(true)

    // next question when you correct
    } else if (correct) {
      setcorrectAnswers(count => count + 1)
      setcurrentQues(count => count + 1)
      settrueFalse(true)
    // show the answer for you when you false
    } else {
      settrueFalse(false)
    }
}

  return(
    <div className="quiz-body">

       {/* conditional rendering for finish all question */}
       { currentQues !== questionList.length-1 ?

      // rendering remaining questions if unanswered.
        <div className="question-container">

            {/* Question Title */}
            <div className="question-text">
                <h4>Question {currentQues+1} / {questionList.length}</h4>
                <h3>{questionList[currentQues].questionText}</h3>
            </div>

            {/* How many correct answer */}
            <div className="correct-Answers">
                <h5>Correct : {correctAnswers}</h5>
            </div>

            {/* conditional rendering for true or false answers */}
            { trueFalse ? 
            <div className="options-section">

            {/* render each Answer Option when you true */}
            {questionList[currentQues].answerOptions.map((answerOptions) => (
              
            // it will passing the true / false argument when you click the button
            <button className="optionBtn" key={answerOptions.answerText} onClick={()=> handleCorrect(answerOptions.rightChoice) }>
            {answerOptions.answerText}
            </button>
            ))}
            </div>
            :
            // render the correct answer for you when you false
            <div className="displaytheanswer">
            <h2>The correct answer is {anwers[0].answerText} </h2>
            <button className="optionBtn" onClick={()=> handleCorrect("recorrect") }>
            Ok!
            </button>
            </div>
            }

        </div>
        :
        // rendering quiz results upon completion of all questions.
        <div className="quizEnd-container">
          <h1>Congratulation</h1>
          <span>Well done! You've completed the quiz game.</span>
          <br/>
          <span>Nailed it ! {correctAnswers} Correct.</span>
          {/* <Link to="/">Try anthoer quiz</Link> */}
        </div>
}


    </div>
  );
}

export default QuizLogic;