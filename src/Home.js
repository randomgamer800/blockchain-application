//this file is for the home page display, only text as we want to keep it simple and not overwhelm users
import React from 'react'
import Box from '@mui/material/Box';
import {Paper, Typography} from '@mui/material';

const Home = () => {
  return (
    <div>
      <Paper style={{ background: '#ff7f50', minHeight: '100vh'}}> {/*paper element is used to colour the background*/}
      <Box textAlign= 'center' paddingTop='120px'> {/*BOX element is used to contain the text and structuring*/}
        <Typography variant="h2" paddingLeft='10px' paddingRight='10px'>
          Welcome to Examchain
        </Typography> {/*title*/}

        <Typography variant="h4" paddingTop='50px' paddingLeft='10px' paddingRight='10px'>
          The one stop app for all your exam related needs!
        </Typography> {/*one line description*/}

        <Typography variant="h5" paddingTop='50px' paddingLeft='10px' paddingRight='10px'>
          To access your exams and other features, please use the hamburger menu.
        </Typography> {/*write a line on how users can get started using the website*/}
      </Box>
      </Paper>
    </div>
  )
}

export default Home