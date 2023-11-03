//this function calls function from CryptExam.sol and outputs them to teachers view(Table.js)
import {React,useState} from 'react'
import {CryptExam_ABI, CryptExam_ADDRESS} from '../contracts/config'
import Web3 from 'web3'
import {Button, Stack, Typography} from '@mui/material';
import {AES} from 'crypto-js'; //encrypt when sending to blockchain, info on Advanced Encryption Standard(AES) https://cybernews.com/resources/what-is-aes-encryption/

function Postquestion() {
  const [content, setContent] = useState(''); //question
  const [options, setOptions] = useState(['', '', '']); //options
  const [correctOption, setCorrectOption] = useState(0); //these are required for the user to set the content, options in the website(in our website we only consider multiple choice questions)
  const [transactioncomplete, settransactioncomplete] = useState(false); //state to check and inform user if their question was uploaded successfully
  const [Key, setKey] = useState(''); // Add state for decryption key
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null); //initialise web3 and contract

  const secretKey = 'your-secret-key'; // secret key goes here

  const delay = miliseconds => new Promise(
    resolve => setTimeout(resolve, miliseconds)
  ); //https://bobbyhadz.com/blog/react-delay-function

  const postQuestion = async () => {

      // Check if the decryption key is correct
      if (Key !== secretKey) {
        alert('Incorrect decryption key');
        return;
      }
      else {
        //connecting to Metamask & configuring for smart contract function (adapted from Metamask.js)
        const newWeb3 = new Web3(window.ethereum);
        setWeb3(newWeb3);
        const newContract = new newWeb3.eth.Contract(CryptExam_ABI, CryptExam_ADDRESS);
        setContract(newContract);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        newWeb3.eth.defaultAccount = accounts[0]; //why this is needed? https://ethereum.stackexchange.com/questions/31686/web3js-web3-eth-defaultaccount-method
        
        // Encrypt the questions and options before sending to smart contract
        const encryptedContent = AES.encrypt(content, secretKey).toString(); //question
        const encryptedOptions = options.map((option) => AES.encrypt(option, secretKey).toString()); //options
        //const encryptedcorrectOption = AES.encrypt(correctOption, secretKey).toString(); //correct option, by right it's better to encyrpt this but due to the formatting of the code, not possible to do(returns error in website)
        console.log(encryptedContent) //use console.log for checking
        console.log(encryptedOptions)
        //console.log(encryptedcorrectOption)
        
        // Call the postQuestion function 
        const question = await newContract.methods
        .postQuestion(encryptedContent, encryptedOptions, correctOption) //string memory content, string[] memory options, uint correctOption 
        .send({ from: newWeb3.eth.defaultAccount }); //required to ensure identity 
        settransactioncomplete(true); // Set the state to true
        
        // Clear the form after transaction completes by resetting the state to their initial values, more info https://stackoverflow.com/questions/43922508/clear-and-reset-form-input-fields
        setContent('');
        setOptions(['', '', '']);
        setCorrectOption(0);
        setKey('');
        
        await delay(3000); //delay in miliseconds, required so website can go back to original message
        
        settransactioncomplete(false); // Set the state to true
      };
    }

  return  (
    <div>
      <Typography variant='h4'>Method 2: Upload a Question</Typography>
      <label>Question:</label>
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />{/*https://stackoverflow.com/questions/45624780/e-target-value-on-an-input-field-reactjs-how-does-it-work*/}

      {options.map((option, index) => (
        <div key={index}>
          <label>Option {index+1}:</label> {/*displaying as 1,2,3 rather than 0,1,2*/}
          <input type="text" value={option}
            onChange={(e) => {
              const updatedOptions = [...options]; /*here a new array is created which is a copy of options array and ensures the original options array is not edited*/
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
        ))} {/*iterating through options array so as to output all choices for the user*/}
      </select>

      <Stack paddingTop='20px' spacing={2} direction="column" justifyContent="center" alignItems="center"> {/*iterating through options array so as to output all choices for the user*/}
        <Typography variant='h5'>Key</Typography>
        <Typography variant='h6' >Please sign with your key. The key is your-secret-key</Typography>
        <input type="text" value={Key} onChange={(e) => setKey(e.target.value)}/>{/*secret key display*/}
        
        <Button variant="contained" onClick={postQuestion}>Upload</Button>
        {/*conditional rendering*/}
        {transactioncomplete === false && <Typography variant='h5' paddingTop='20px' paddingBottom='20px'>For method 2, your question will be uploaded on the blockchain when the question upload form clears</Typography>}
        {transactioncomplete === true && <Typography variant='h5' paddingTop='20px' paddingBottom='20px'>Upload Complete!</Typography>}
      </Stack>
    </div>
  );
}

export default Postquestion 