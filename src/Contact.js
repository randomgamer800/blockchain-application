import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardContent, Grid, TextField, Button, Paper, Typography } from '@mui/material';

const Contact = () => {
  return (
    <div>
      <Paper style={{ background: '#ff7f50', minHeight: '100vh'}}> {/*paper element is used to colour the background*/}
      <Box textAlign= 'center' paddingTop='120px'> {/*BOX element is used to contain the text*/}
        <Typography variant="h1">
        Contact
        </Typography> {/*title*/}

        <Typography variant="h4" paddingTop='100px'>
        Is the app not working? Would you like to give feedback or suggestions for features?
        </Typography> {/*explaining how it should be used*/}

        <Typography variant="h5" paddingTop='100px'>
        Then fill up the form below to let us know. We welcome any feedback!
        </Typography> 

      <Grid container spacing={1} alignItems="center" justifyContent="center" direction="row" rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding='20px'> {/*stylings for form*/}
            <Grid item xs={8}>
              <TextField label="Name" variant="standard" fullWidth="required"/>
            </Grid>
            <Grid item xs={8}>
            <TextField label="Email Address" variant="standard" fullWidth="required"/>
            </Grid>
            <Grid item xs={8}>
            <TextField label="Message" variant="standard" fullWidth="required" multiline rows={4}/> {/*allows user 4 lines of text*/}
            </Grid>
            <Grid item xs={8}>
            <Button variant="contained">Submit</Button>
            </Grid>
      </Grid>
       </Box>
      </Paper>
    </div>
  )
}

export default Contact