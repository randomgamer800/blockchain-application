//contains all pages of the website
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Contact from "./Contact"
import Exam from "./Exam";
import DenseTable from "./components/Table";
import Metamask from './Metamask'; //FOR TESTING ONLY, NOT TO BE DEPLOYED
import Questions from './Questions';

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
          <Route path="/metamask" element={<Metamask/>}/>
          <Route path="/questions" element={<Questions/>}/>
        </Routes>
      </Router>
    </div>
  );
}

