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
  let [loopQuiz, setLoopQuiz] = useState(true)

  // find the correct anwers
  const anwers = questionList[currentQues].answerOptions.filter((correct) => correct.rightChoice === true)
  const handleCorrect = (correct) => { // turn to congratulate page when you finish
      if (currentQues === questionList.length - 1) {
          setcurrentQues(questionList.length - 1)
          setLoopQuiz(false)
          if (correct) {setcorrectAnswers(count => count + 1)}
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
      {loopQuiz ?
      // {currentQues !== questionList.length ?
        // rendering remaining questions if unanswered.
        <Card elevation={12} sx={{ px: 'calc(2px + 1.5vw)', py: 'calc(2px + 1.5vw)' }}>
          {/* Question Title */}
          <CardContent className="question-text">
            {/* <Box sx={{ flexGrow: 1 }}> */}
              <Grid container spacing={1} rowSpacing={1} direction="row" justifyContent="center" alignItems="stretch">
                <Grid item xs={1}></Grid> {/* Offset column */}
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'left'}}>Question {currentQues+1} / {questionList.length}</Box>
                </Grid>
                <Grid item xs={4} sx={{ textAlign: 'right', margin: 'calc(2vh +2vw)'}}>
                  {/* How many correct answer */}
                  <Badge badgeContent={correctAnswers} color="success" showZero>
                    <Chip label="Correct" variant="outlined"/>
                  </Badge>
                </Grid>
                <Grid item xs={1}></Grid> {/* Offset column */}
                <Grid item xs={12}>
                  <Box className="cardQuestion">
                    {questionList[currentQues].questionText}  
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  {/* conditional rendering for true or false answers */}
                  { trueFalse ? 
                    <Box className="options-section">
                      {/* render each Answer Option when you true */}
                      {questionList[currentQues].answerOptions.map((answerOptions) => (
                                                
                      // it will passing the true / false argument when you click the button
                      <Button variant="outlined" key={answerOptions.answerText} onClick={()=> handleCorrect(answerOptions.rightChoice)} sx={{ border: 0 }}>
                        {answerOptions.answerText}
                      </Button>
                      ))}
                    </Box>
                  : //Else it will render the correct answer for you when it's false
                    <Box className="displaytheanswer">
                      <Box sx={{ textAlign: 'center'}}>
                        The correct answer is {anwers[0].answerText} 
                      </Box>
                      <Button variant="outlined" onClick={()=> handleCorrect("recorrect") }>
                        Ok!
                      </Button>
                    </Box>
                  }
                </Grid>
              </Grid>
            {/* </Box> */}
          </CardContent>
        </Card>
      :
        // rendering quiz results upon completion of all questions.
        <Card elevation={12} sx={{ px: 'calc(2px + 1.5vw)', py: 'calc(2px + 1.5vw)' }}>
          <CardContent>
            <Box className="congrats" sx={{ m: 'calc(2vh + 2vw)'}}>
              CONGRATULATIONS!
            </Box>
            <Box className="congratsText" sx={{ m: 'calc(2vh + 2vw)'}}>
              Well done! You've completed the quiz game.
              <br/><br/>
              You have got {correctAnswers} correct answers.
            </Box>
            <Button variant="outlined" sx={{ m: 'calc(2vh + 2vw)'}} onClick={() => window.location.reload(false)}>
                Try another quiz!
            </Button>
          </CardContent>
        </Card>
      }
    </div>
  );
}

export default QuizLogic;

