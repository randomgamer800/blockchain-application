//this function calls function from CryptExam.sol and outputs them to teachers view(Table.js)
import {React,useState} from 'react'
import {CryptExam_ABI, CryptExam_ADDRESS} from '../contracts/config'
import Web3 from 'web3'
import { Button, Stack, Typography } from '@mui/material';

function Postquestion() {
  const [content, setContent] = useState('');
  const [options, setOptions] = useState(['', '', '']);
  const [correctOption, setCorrectOption] = useState(0); //these are required for the user to set the content, options in the website(in our website we only consider multiple choice questions)
  const [transactioncomplete, settransactioncomplete] = useState(false); //state to check and inform user if their question was uploaded successfully

  const delay = miliseconds => new Promise(
    resolve => setTimeout(resolve, miliseconds)
  ); //https://bobbyhadz.com/blog/react-delay-function

  const postQuestion = async () => {
      //connecting to Metamask & configuring for smart contract function
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.requestAccounts();
      const sender = accounts[0]; 
      const postquestioncontract = new web3.eth.Contract(CryptExam_ABI, CryptExam_ADDRESS);
     
      // Call the postQuestion function 
      const question = await postquestioncontract.methods
        .postQuestion(content, options, correctOption) //string memory content, string[] memory options, uint correctOption
        .send({ from: sender }); //required to ensure identity 
        settransactioncomplete(true); // Set the state to true
        
      // Clear the form after transaction completes by resetting the state to their initial values
        setContent('');
        setOptions(['', '', '']);
        setCorrectOption(0);

      await delay(3000); //delay in miliseconds, required so website can go back to original message

      settransactioncomplete(false); // Set the state to true
  };

  return  (
    <div>
      <Typography variant='h4'>Method 2: Upload a Question</Typography>
      <label>Question:</label>
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />

      {options.map((option, index) => (
        <div key={index}>
          <label>Option {index+1}:</label>
          <input type="text" value={option}
            onChange={(e) => {
              const updatedOptions = [...options];
              updatedOptions[index] = e.target.value;
              setOptions(updatedOptions);
            }}
          />
        </div>
      ))}

      <label>Correct Option:</label>
      <select value={correctOption} onChange={(e) => setCorrectOption(e.target.value)}>
        {options.map((_, index) => (
          <option key={index} value={index}>{`Option ${index+1}`}</option>
        ))}
      </select>

      <Stack paddingTop='20px' spacing={2} direction="column" justifyContent="center" alignItems="center">
      <Button variant="contained" onClick={postQuestion}>Upload</Button>
      {transactioncomplete === false && <Typography variant='h5' paddingTop='20px' paddingBottom='20px'>For method 2, your question will be uploaded on the blockchain when the question upload form clears</Typography>}
      {transactioncomplete === true && <Typography variant='h5' paddingTop='20px' paddingBottom='20px'>Upload Complete!</Typography>}
      </Stack>
    </div>
  );
}

export default Postquestion 