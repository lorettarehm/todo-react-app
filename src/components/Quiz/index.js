import React from "react";
import "./style.css";

function Questions() {

  const questions = {
    questionText: 'You are visiting Macchu Picchu?',
    answerOptions: [
      { answerText: 'Chile' , rightChoice: false } ,
      { answerText: 'Panama' , rightChoice: false } ,
      { answerText: 'Peru' , rightChoice: true } ,
      { answerText: 'Colombia' , rightChoice: false }
    ]
  }

  return(
    <div className="quiz-body">
        <div className="question-container">
            <div className="question-text">
                <h2>{questions.questionText}</h2>
            </div>
            <div className="options-section">
                <button className="optionBtn">{questions.answerOptions.answerText[0]}</button>
                <button className="optionBtn">{questions.answerOptions.answerText[1]}</button>
                <button className="optionBtn">{questions.answerOptions.answerText[2]}</button>
                <button className="optionBtn">{questions.answerOptions.answerText[3]}</button>
            </div>
        </div>
    </div>
  );
}

export default Questions;