import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from '../src/components/elements/navBar';
import Users from './components/views/users';
import View from './components/views/view'


function App() {


  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<div>hola mundo</div>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/view" element= {<View/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;