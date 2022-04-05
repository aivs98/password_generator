// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/login'





function App() {
  return (
    
    
   
  <Router>
      <Navbar />

        <Routes>  
         <Route path='/login' element={<Login/>} />
         {/* <Route path='/pg_manage' element={<PageManage/>} /> */}
         
      </Routes>

      


        
  </Router>
  
  );
}

export default App;
