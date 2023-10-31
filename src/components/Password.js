//password function which may be replaced by smart contract in final build
import React, { useState } from 'react';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

function Password() {
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate(); 

  function handleInputChange(event) {
    setInputText(event.target.value);
  } //required to allow user input

  const handleClick = () => {
    navigate('/teachers'); // go to teachers if button is clicked
  };

  return (
      <Paper style={{ background: '#ff7f50', minHeight: '100vh'}}>
        <Box paddingTop='100px' paddingRight='20px' paddingLeft='20px'>
        <Typography variant='h2' paddingBottom='10px'>Password</Typography>
        <Typography variant='h5' paddingBottom='10px'>The password here is 'Message'. In a real application, password is not given.</Typography>
        <TextField id="standard-basic" label="Password" variant="outlined" value={inputText} onChange={handleInputChange} /> {/*password field*/}
        {inputText === 'Message' && ( 
        <div><p>Input matches password.</p>
        <Button variant="contained" onClick={handleClick}>Go to Teachers View</Button>
        </div>
        )} 
        {inputText !== 'Message' && ( 
        <div><p>Input DOES NOT match password.</p>
        </div>
        )} {/*conditional rendering based on input*/}
        </Box>
      </Paper>

  );
}

export default Password;