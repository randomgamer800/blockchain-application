//this file is for the home page display
import React from 'react'
import Box from '@mui/material/Box';
import { Paper, Typography,Button, Stack } from '@mui/material';

const Home = () => {

  return (
    <div>
      <Paper style={{ background: '#ff7f50', minHeight: '100vh'}}> {/*paper element is used to colour the background*/}
      <Box textAlign= 'center' paddingTop='120px'> {/*BOX element is used to contain the text*/}
        <Typography variant="h1">
        Welcome to Examchain
        </Typography> {/*title*/}

        <Typography variant="h4" paddingTop='100px'>
        The one stop app for all your exam related needs!
        </Typography> {/*caption below it*/}

        <Typography variant="h5" paddingTop='100px'>
        To access your exams and other features, please use the hamburger menu.
        </Typography> {/*caption below it*/}

      </Box>
      </Paper>
    </div>
  )
}

export default Home