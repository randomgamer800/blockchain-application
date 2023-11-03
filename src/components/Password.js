//password function for further protection of features if required
import React, {useState} from 'react';
import {Box, Button, Paper, TextField, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom'; 

function Password() {
  const [inputText, setInputText] = useState(''); //handles the user input in the text box
  const navigate = useNavigate(); //https://reactrouter.com/en/main/hooks/use-navigate

  function handleInputChange(event) {
    setInputText(event.target.value);
  } //required to allow user input into text box

  const handleClick = () => {
    navigate('/teachers'); // go to teachers if button is clicked and password is correct
  };

  return (
      <Paper style={{ background: '#ff7f50', minHeight: '100vh'}}>
        <Box paddingTop='100px' paddingRight='20px' paddingLeft='20px'>
          <Typography variant='h2' paddingBottom='10px'>Password</Typography>
          <Typography variant='h5' paddingBottom='10px'>The password here is 'Message'. In a real application, password is not given.</Typography>
          <TextField id="standard-basic" label="Password" variant="outlined" value={inputText} onChange={handleInputChange} /> {/*password field*/}
          {/*conditional rendering based on input*/}
          {inputText === 'Message' && (<div><Typography paddingTop='10px'>Input matches password.</Typography><Button variant="contained" onClick={handleClick}>Go to Teachers View</Button></div>)} 
          {inputText !== 'Message' && (<Typography paddingTop='10px'>Input DOES NOT match password.</Typography>)}
        </Box>
      </Paper>

  );
}

export default Password;