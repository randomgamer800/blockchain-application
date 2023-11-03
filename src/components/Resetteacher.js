//this function calls function of the same name from CryptExam.sol and outputs them to teachers view(Table.js), acts as a placeholder to show multiple teachers can upload questions and identify them
import React, {useState} from 'react';
import Web3 from 'web3';
import {CryptExam_ADDRESS, CryptExam_ABI} from '../contracts/config';
import {Button, Stack, Typography} from '@mui/material';

function Resetteacher() {
  const [newTeacherAddress, setNewTeacherAddress] = useState(''); //hold address
  const [addressChanged, setaddressChanged] = useState(false); // conditionally render success message
  //const [web3, setWeb3] = useState(null);
  //const [contract, setContract] = useState(null); //should not initialise web3 and contract in this case to prevent running into error on first button click

  const delay = miliseconds => new Promise(
    resolve => setTimeout(resolve, miliseconds)
  ); //https://bobbyhadz.com/blog/react-delay-function

  const configureaddress = async () => {
    if (window.ethereum) { 
      try {
        //from Metamask.js
        const newWeb3 = new Web3(window.ethereum);
        //setWeb3(newWeb3);
  
        const newContract = new newWeb3.eth.Contract(CryptExam_ABI, CryptExam_ADDRESS);
        //setContract(newContract);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const sender = accounts[0];
        
        // Call the resetTeacher function, specifying the new teacher's address
        const address = await newContract.methods.resetTeacher(newTeacherAddress).send({ from: sender });
  
        // handle success and failure in console log
        setaddressChanged(true);
        console.log('Transaction succeeded. New address:', newTeacherAddress); //used for checking
      } catch (error) {
        console.error('Error connecting MetaMask or transaction failed:', error);
      }
    } else {
      console.error('MetaMask not found. Please install MetaMask.');
    }
    
    await delay(3000); //delay in miliseconds, required so website can go back to original message
    
    // Clear the form after transaction completes by resetting the state to their initial values
    setNewTeacherAddress('');
    setaddressChanged(false);
  };

  return (
    <div>
      <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={1} paddingBottom='35px'>
        <Typography variant='h3'>Reset teacher's address</Typography>
        <Typography variant='h5'>New teacher's address:</Typography>
        <input type="text" value={newTeacherAddress} onChange={(e) => setNewTeacherAddress(e.target.value)}/> {/*input field for address*/}
        {/*conditional rendering*/}
        {!addressChanged && <Typography variant='h5'>Do note that if a invalid address is entered, the button will not work.</Typography>}
        {addressChanged  && <Typography variant='h5'>Address reset!</Typography>}
        <Button variant="contained" onClick={configureaddress}>Reset Address</Button>
      </Stack>
    </div>
  );
}

export default Resetteacher;