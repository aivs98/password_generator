// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Login from "./pages/login";
import store from "./pages/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Routes>
          
          <Route path="/login" element={<Login />} />
         
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
