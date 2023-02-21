import React, {useState} from "react";
import "./quizStyle.css";
import questionList from "./questionList";

import {
    Button,
    Card,
    CardActions,
    CardContent,
    Box,
    Badge,
    Chip,
    Grid
} from '@mui/material';

function QuizLogic() {

  let [currentQues, setcurrentQues] = useState(0)
  let [correctAnswers, setcorrectAnswers] = useState(0)
  let [trueFalse, settrueFalse] = useState(true)

  // find the correct anwers
  const anwers = questionList[currentQues].answerOptions.filter((correct) => correct.rightChoice === true)
  const handleCorrect = (correct) => { // turn to congratulate page when you finish
      if (currentQues === questionList.length - 1) {
          setcurrentQues(questionList.length - 1)

          // next question when you know the correct answer
      } else if (correct === "recorrect") {
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

  return (
    <div className="quiz-body"> {/* conditional rendering for finish all question */}
      {currentQues !== questionList.length-1 ?
        // rendering remaining questions if unanswered.
        <Card elevation={12} sx={{ px: 'calc(2px + 1.5vw)', py: 'calc(2px + 1.5vw)' }} style={{display: 'inline-block' }}>
          {/* Question Title */}
          <CardContent className="question-text">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                  <Grid item xs={9}>
                    <Box sx={{ textAlign: 'left', m: '1vw' }}>Question {currentQues+1} / {questionList.length}</Box>
                  </Grid>
                  <Grid item xs={3}>
                    {/* How many correct answer */}
                    <Badge badgeContent={correctAnswers} color="success" showZero>
                      <Chip label="Correct answer(s)" variant="outlined"/>
                    </Badge>
                  </Grid>
              </Grid>
            </Box>
            <Box sx={{ textAlign: 'justify', m: '1vw', fontSize: '1.6rem'}}>
              {questionList[currentQues].questionText}  
            </Box>
          </CardContent>
          {/* conditional rendering for true or false answers */}
          { trueFalse ? 
            <div className="options-section">
              {/* render each Answer Option when you true */}
              {questionList[currentQues].answerOptions.map((answerOptions) => (
                                        
              // it will passing the true / false argument when you click the button
              <Button variant="outlined" key={answerOptions.answerText} onClick={()=> handleCorrect(answerOptions.rightChoice)} sx={{ border: 0 }}>
                {answerOptions.answerText}
              </Button>
              ))}
            </div>
          : //Else it will render the correct answer for you when it's false
            <div className="displaytheanswer">
              <Box sx={{ textAlign: 'center', m: '1vw', fontSize: '1.6rem'}}>
                The correct answer is {anwers[0].answerText} 
              </Box>
              <Button variant="outlined" onClick={()=> handleCorrect("recorrect") }>
                Ok!
              </Button>
            </div>
          }
        </Card>
      :
        // rendering quiz results upon completion of all questions.
        <Card elevation={12} sx={{ px: 'calc(2px + 1.5vw)', py: 'calc(2px + 1.5vw)' }} style={{display: 'inline-block'}}>
          <CardContent>
            <Box sx={{ textAlign: 'center', fontSize: '1.6rem', padding: '0.8rem'}}>
              CONGRATULATIONS!
            </Box>
            <Box>
              Well done! You've completed the quiz game.
              <br/><br/>
              You have got {correctAnswers} correct answers.
            </Box>
          </CardContent>
          <CardActions style={{justifyContent: 'center'}}>
            <Button variant="outlined" onClick={localStorage.setItem("renderQuiz", false)}>
                Try another quiz!
            </Button>
          </CardActions>
        </Card>
      }
    </div>
  );
}

export default QuizLogic;

