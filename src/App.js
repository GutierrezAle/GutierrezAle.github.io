import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
