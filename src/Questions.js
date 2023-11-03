import { Button, Paper, Stack, Typography } from '@mui/material'
import {React, useState,useEffect } from 'react';
import Timer from './components/Timer';
import Web3 from 'web3';
import {CryptExam_ABI, CryptExam_ADDRESS} from './contracts/config';

function Questions() {
  //for initialising & uploading of answers to blockchain
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  useEffect(() => {
    connectToMetaMask();
  }, []); //required to connect to Metamask in this instance, without it the connect to metamask function is not used, for reference https://docs.metamask.io/wallet/tutorials/react-dapp-local-state/

  const connectToMetaMask = async () => {
    if (window.ethereum) {
        const newWeb3 = new Web3(window.ethereum); //https://stackoverflow.com/questions/73847311/window-web3-eth-contract-no-longer-works-how-do-i-now-connect-to-a-contract
        setWeb3(newWeb3);
  
        const newContract = new newWeb3.eth.Contract(CryptExam_ABI, CryptExam_ADDRESS);
        setContract(newContract); //initialise web3 and contract
  
        // Request MetaMask account access adapted from https://www.youtube.com/watch?v=0nNJzq8k0h8
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          newWeb3.eth.defaultAccount = accounts[0]; //why this is needed? https://ethereum.stackexchange.com/questions/31686/web3js-web3-eth-defaultaccount-method
        } catch (error) {
          console.error('Error connecting Metamask account:', error);
        }
      } else {
        console.error('MetaMask not found. Please install MetaMask.');
      }
    };
    
    //function that deals with uploading to blockchain
    const submitToContract = async (answer) => {
      if (!web3 || !contract) {
        console.error('Web3 or contract not initialized');
        return;
      }
      
      try {
      // Use the contract to call the submitAnswer function
      const result = await contract.methods.submitAnswer(answer).send({ from: web3.eth.defaultAccount });
      
      // Check if string is uploaded
      console.log('Answer submitted:', result);
      console.log(selectedOptionsString);
      setUploaded(true);
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  const examquestions= [
    {
      question: 'What is the square root of 16?',
      choices: [
        {id:0, answer: "2", Correct:false}, //id used to upload to blockchain, correct state used to give marks for correct answer
        {id:1, answer: "3", Correct:false},
        {id:2, answer: "4", Correct:true}
      ],
    },
    {
      question: '100 - 50 = ?',
      choices: [
        {id:0, answer: "50", Correct:true},
        {id:1, answer: "75", Correct:false},
        {id:2, answer: "100", Correct:false}
      ],
    },
    {
      question: 'x + 4 = 11. What is x?',
      choices: [
        {id:0, answer: "5", Correct:false},
        {id:1, answer: "6", Correct:false},
        {id:2, answer: "7", Correct:true}
      ],
    },
    {
      question: 'You have completed the exam', //used for end screen
      choices: [
        {id:0, answer: "no", Correct:false},
        {id:1, answer: "yes", Correct:true}
      ],
    },
  ]
  const [marks, setMarks] = useState(0);
  const [questionnumber, setQuestionnumber] = useState(0);
  const [selectedOptionsString, setSelectedOptionsString] = useState(''); // String to store user's selected options

  //this function deals with marks, moving to next question and producing a string to upload to blockchain
  const handleAnswerClick = (choice) => {
    // Check if the selected choice is correct and update marks accordingly.
    if (choice.Correct === true && marks < 3) {
      setMarks(marks + 1);
    }

    // Add the option ID to the selectedOptions string
     setSelectedOptionsString((prevSelectedOptionsString) => prevSelectedOptionsString + choice.id);
    
    // Move to the next question if there are more questions.
    if (questionnumber < examquestions.length - 1) {
      setQuestionnumber(questionnumber + 1);
    }
  };
  

  return (
    <div>
      <Paper style={{ background: '#ff7f50', minHeight: '100vh'}}> {/*paper element is used to colour the background*/}
      <Timer/> {/*refer to Timer.js for more details*/}

      <div>
        {questionnumber < 4 && <Typography variant="h4" paddingTop='50px'>{examquestions[questionnumber].question}</Typography>} {/*looping through all questions*/}
        
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={3}>
          {questionnumber < 3 && examquestions[questionnumber].choices.map((choice) => (
          <Button key={choice.id} variant="contained" onClick={() => handleAnswerClick(choice)}>{choice.answer}</Button>
          ))} {/*looping through all choices for the questions*/}
        </Stack>   
      </div>

      {/*configured to show before the upload process is complete*/}
      {!uploaded && <Typography paddingTop="40px">Do not click the 'Upload to Blockchain' button until you are ready to submit.</Typography>}
      {!uploaded &&<Typography paddingTop="20px"><Button variant='contained' onClick={() => submitToContract(selectedOptionsString)}>Upload to Blockchain</Button></Typography>}

      {/*configured to show only after uploading*/}
      { uploaded && <Typography paddingTop="20px"> The examiner has made the exam score visible. Correct Answers: {marks} / 3 </Typography>}
      { uploaded && <Typography paddingTop="20px">You may close this page</Typography> }

      </Paper>
    </div>
  )
}

export default Questions