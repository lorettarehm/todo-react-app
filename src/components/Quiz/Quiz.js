import React, {useState} from "react";
import "./Quiz.css";
import questionList from "./questionList";

function Questions() {

  let [currentQues, setcurrentQues] = useState(0)

  const handleCorrect = (correct) => {

    // Popup the notice when you finish all the question
    if (currentQues === questionList.length-1){
      alert("The End of the Quiz")

    // next question when you correct
    } else if (correct) {
      let ques = currentQues + 1
      setcurrentQues(ques)
}
}

  return(
    <div className="quiz-body">
        <div className="question-container">

          {/* Question Title */}
            <div className="question-text">
                <h2>Question {currentQues+1} / {questionList.length}</h2>
                <span>{questionList[currentQues].questionText}</span>
            </div>

            <div className="options-section">

           {/* render each Answer Option */}
            {questionList[currentQues].answerOptions.map((answerOptions) => (

            // it will passing the true / false argument when you click the button
            <button className="optionBtn" key={answerOptions.answerText} onClick={()=> handleCorrect(answerOptions.rightChoice) }>
              {answerOptions.answerText}
            </button>
            ))}
            </div>

        </div>
    </div>
  );
}

export default Questions;