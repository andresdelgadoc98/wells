import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from '../src/components/elements/navBar';
import Users from './components/views/Users';



function App() {


  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<div>hola mundo</div>} />
        <Route path="/users" element={<Users/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;