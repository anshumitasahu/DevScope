import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home.jsx';
import Analyzer from "./Components/Analyzer.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Analyzer" element={<Analyzer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
