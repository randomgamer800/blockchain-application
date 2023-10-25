import { Button, ListItemButton, Stack, Typography } from '@mui/material';
import React, { useState,useEffect } from 'react';
import { Link, Navigate, Router, useNavigate } from 'react-router-dom';
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
const test_edited_ADDRESS = '0xd9145CCE52D386f254917e481eB44e9943F39138'; // Replace with your actual contract address

function Metamask() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [metamaskconnected, setmetamaskconnected] = useState(false); // State variable for exam status
  const [examStarted, setExamStarted] = useState(false); // State variable for exam status

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

  return (
    <div>
	<Stack spacing={3} direction="column" justifyContent="center" alignItems="center">
      <Button variant="contained" onClick={connectToMetaMask}>Connect to MetaMask</Button>
      <Button variant="contained" onClick={startExam}>Connect to Exam</Button>
      {/* Conditionally render the message */}
      {metamaskconnected && <Typography paddingTop='25px'>Metamask connected!</Typography>}
	  {/* Conditionally render the message */}
	  {!metamaskconnected && <Typography paddingTop='25px'>Metamask not connected! Please ensure Metamask is installed!</Typography>}
      {/* Conditionally render the message */}
	  {/* Conditionally render the message */}
      {examStarted && <Typography paddingTop='35px'>Please click the button below only when you are ready to start!</Typography>}
      {examStarted && <Navigate to="/questions"><Button variant="contained" paddingTop='50px'>Start Exam</Button></Navigate>}
	</Stack> 
    </div>
  );
}

export default Metamask;






