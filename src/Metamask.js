import { Button, Stack, Typography } from '@mui/material';
import React, {useEffect,useState} from 'react';
import {Navigate} from 'react-router-dom';
import Web3 from 'web3';

const test_edited_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "examStarted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startExam",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stopExam",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const test_edited_ADDRESS = '0xd9145CCE52D386f254917e481eB44e9943F39138'; // contract address

function Metamask() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [metamaskconnected, setmetamaskconnected] = useState(false); // State variable for exam status
  const [examStarted, setExamStarted] = useState(false); // State variable for exam status
  const [DateandTime, setDateandTime] = useState(new Date().toLocaleString());  // used to show real time 
  const epochTime = new Date().getTime() / 1000; // use this to configure when buttons are viewable(time is based on Epoch / Unix timestamp)


  const connectToMetaMask = async () => {
    if (window.ethereum) {
      const newWeb3 = new Web3(window.ethereum);
      setWeb3(newWeb3);

      const newContract = new newWeb3.eth.Contract(test_edited_ABI, test_edited_ADDRESS);
      setContract(newContract);

      // Request MetaMask account access adapted from https://www.youtube.com/watch?v=0nNJzq8k0h8
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        newWeb3.eth.defaultAccount = accounts[0]; //why this is needed? https://ethereum.stackexchange.com/questions/31686/web3js-web3-eth-defaultaccount-method
        setmetamaskconnected(true); // Update the state variable
      } catch (error) {
        console.error('Error connecting Metamask account:', error);
      }
    } else {
      console.error('MetaMask not found. Please install MetaMask.');
    }
  };

  const startExam = async () => {
    try {
      await contract.methods.startExam(3600).send({ from: web3.eth.defaultAccount });
      console.log('Exam started!');
      setExamStarted(true); // Update the state variable
    }

     catch (error) {
      console.error('Error starting the exam:', error);
    }
  };
  
      // Update the real time by 1 every second
	  useEffect(() => {
		const realtime = setInterval(() => {
			setDateandTime(new Date().toLocaleString());//javascript function to output date and time as string https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date https://www.w3schools.com/jsref/jsref_tolocalestring.asp
		}, 1000); //setInterval requires this 1000 as it will allow this function to be exectued every 1000ms(1second) https://developer.mozilla.org/en-US/docs/Web/API/setInterval
		return () => clearTimeout(realtime); //need clear timeout as without it, timer will break/not function properly
	  }, []);

  return (
    <div>
	<Stack spacing={3} direction="column" justifyContent="center" alignItems="center">
	  {<Typography paddingTop='25px'>{DateandTime}</Typography>} 
	  {epochTime > 1698564000 &&<Button variant="contained" onClick={connectToMetaMask}>Connect to MetaMask</Button>} {/* Can use website to find time in epoch and replace numbers*/}
      {epochTime > 1698564000 &&  <Button variant="contained" onClick={startExam}>Connect to Exam</Button>}
      {/* Conditionally render the message */}
      {epochTime > 1698564000 && metamaskconnected && <Typography paddingTop='10px' paddingBottom='20px'>Metamask connected!</Typography>}
	  {/* Conditionally render the message */}
	  {epochTime > 1698564000 && !metamaskconnected && <Typography paddingTop='10px' paddingBottom='20px'>Metamask not connected! Please ensure Metamask is installed!</Typography>}
      {examStarted && <Typography paddingTop='35px'>Please click the button below only when you are ready to start!</Typography>}
      {examStarted && <Navigate to="/questions"><Button variant="contained" paddingTop='50px'>Start Exam</Button></Navigate>}
	</Stack> 
    </div>
  );
}

export default Metamask;






