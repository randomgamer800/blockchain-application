import Web3 from "web3";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Contact from "./Contact"
import Exam from "./Exam";
import DenseTable from "./components/Table";

function App() {
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

export default App;
