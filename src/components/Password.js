import React, { useState } from 'react';
import { Button } from '@mui/material';

function Password() {
  const [inputText, setInputText] = useState('');

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  const handleClick = () => {
    window.location.href = '/'; // Replace with the desired URL
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
      />
      {inputText === 'Message' ? (
        <div><p>Input matches the specific message.</p>
        <Button onClick={handleClick}>Go to Target Page</Button>
        </div>
      ) : (
        <p>Input does not match the specific message.</p>
      )}
    </div>
  );
}

export default Password;