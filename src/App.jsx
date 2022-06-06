import "./App.css";
import React from "react";
import {Routes,Route}from "react-router-dom";
import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";




function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
       <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
       
     </Routes>
    </div>
  );
}

export default App;
