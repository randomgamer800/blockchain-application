import React from 'react'
import Box from '@mui/material/Box';
import Password from './components/Password';
import { Paper, Typography } from '@mui/material';

const Exam = () => {
  return (
    <div>
      <Paper style={{ background: '#ff7f50', minHeight: '100vh'}}> {/*paper element is used to colour the background*/}
      <Box textAlign= 'center' paddingTop='120px'> {/*BOX element is used to contain the text*/}
        <Typography variant="h1">
        EE Exam
        </Typography> {/*title of exam*/}

        <Typography variant="h4" paddingTop='80px'>
        Date: 1st December 2023, Time: 1:00pm
        </Typography> {/*important details like date and time*/}

        <Typography variant="h6" paddingTop='100px' paddingLeft='50px' paddingRight='50px'>
        Please read all the instructions carefully. 
      Do not start the exam until you are told to do so. This exam contains 3 multiple-choice questions. 
      If you have any queries at any point of the examination, please alert the examiners. 
      This is a 30 minutes paper.
        </Typography> {/*instructions*/}
      </Box>

      <Box textAlign= 'center' paddingTop='210px'>(put a password text box and then once student enters password correctly, it will take them to exam page DO THIS IN SOLIDITY?)
      </Box>
      <Password/> {/*introducing a feature that allows students to only take exam when they should*/}
      
      </Paper>
    </div>
  )
}

export default Exam