import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage';
import Createdb from './pages/Createdb';

function App() {

  return (

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/create" element={<Createdb />} />

    </Routes>

  )
}

export default App
