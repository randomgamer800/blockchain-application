//this file is for the exam page, mostly deals with the text-based output only
import React from 'react'
import Box from '@mui/material/Box';
import {Paper, Typography} from '@mui/material';
import Metamask from './Metamask';

const Exam = () => {
  return (
    <div>
      <Paper style={{ background: '#ff7f50', minHeight: '100vh'}}> {/*paper element is used to colour the background*/}
      <Box textAlign= 'center' paddingTop='120px' paddingLeft='10px' paddingRight='10px'> {/*BOX element is used to contain the text*/}
        <Typography variant="h1">
          EE Exam
        </Typography> {/*title of exam*/}

        <Typography variant="h4" paddingTop='80px'>
          Date: 1st November 2023, Time: 1:00pm
        </Typography> {/*important details like start date and time, also font is bigger than body text to emphasise its importance*/}

        <Typography variant="h6" paddingTop='100px' paddingBottom='50px' paddingLeft='50px' paddingRight='50px'>
          Please read all the instructions carefully. 
          Do not start the exam until you are told to do so. This exam contains 3 questions. 
          If you have any queries at any point of the examination, please alert the examiners. 
          This is a 30 seconds paper.
        </Typography> {/*instructions*/}
      </Box>
    
      <Metamask/> {/*refer to Metamask.js for more info*/}

      </Paper>
    </div>
  )
}

export default Exam