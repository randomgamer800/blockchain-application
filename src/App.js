import {useState} from 'react';
import {ethers} from 'ethers';
import Web3 from "web3";
import { project_test_ADDRESS, project_test_ABI } from "./contracts/config";
import './App.css';
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Contact from "./Contact"
import Exam from "./Exam";
import DenseTable from "./components/Table";

export default function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/exam" element={<Exam/>}/>
          <Route path="/teachers" element={<DenseTable/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

