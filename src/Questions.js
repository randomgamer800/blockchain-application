import { Button, Paper, Typography } from '@mui/material'
import {React, useState } from 'react';
import Timer from './components/Timer';

function Questions() {

  const examquestions= [
    {
      question: 'What is the square root of 16?',
      choices: [
        {id:0, answer: "2", Correct:false},
        {id:0, answer: "3", Correct:false},
        {id:0, answer: "4", Correct:true}
      ],
    },
    {
      question: '100 - 50 = ?',
      choices: [
        {id:0, answer: "50", Correct:true},
        {id:0, answer: "75", Correct:false},
        {id:0, answer: "100", Correct:false}
      ],
    },
    {
      question: 'x + 4 = 11. What is x?',
      choices: [
        {id:0, answer: "5", Correct:false},
        {id:0, answer: "6", Correct:false},
        {id:0, answer: "7", Correct:true}
      ],
    },
  ]
  const [marks, setMarks] = useState(0);
  const [questionnumber, setQuestionnumber] = useState(0);

  const handleAnswerClick = (choice) => {
    // Check if the selected choice is correct and update marks accordingly.
    if (choice.Correct === true && marks < 3) {
      setMarks(marks + 1);
    }
    
    // Move to the next question if there are more questions.
    if (questionnumber < examquestions.length - 1) {
      setQuestionnumber(questionnumber + 1);
    }
  };
  

  return (
    <div>
      <Paper style={{ background: '#ff7f50', minHeight: '100vh'}}> {/*paper element is used to colour the background*/}
      <Timer/>
      <div>
        <Typography variant="h4" paddingTop='50px'>{examquestions[questionnumber].question}</Typography>
        {examquestions[questionnumber].choices.map((choice) => (
          <Button key={choice.id} variant="contained" onClick={() => handleAnswerClick(choice)}>{choice.answer}</Button>
        ))}
      </div>
      <Typography paddingTop="20px">
        Correct Answers: {marks} / 3 {/*can be configured to show or not depending on examiner*/}
        </Typography>

        <Typography variant="h2">
        IMPROVE LOGIC
        </Typography>
      </Paper>
    </div>
  )
}

export default Questions