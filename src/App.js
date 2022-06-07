import './App.css';
import {useState} from 'react'
import Home from './home';
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./About";
import Apply from "./Apply";
import Portal from './Portal';
import Login from "./Login";
import Admission from './Admission';
import Campus from './Campus';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route path="/" exact element={<Home/>}/> 
           <Route path="/about" exact element={<About/>}/>
           <Route path="/apply" exact element={<Apply/>}/>
           <Route path="/portal" exact element={<Portal/>}/>
           <Route path="/login" exact element={<Login/>}/>
           <Route path="/admission" exact element={<Admission/>}/>
           <Route path="/campus" exact element={<Campus/>}/>
           <Route path="/contact" exact element={<Contact/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
