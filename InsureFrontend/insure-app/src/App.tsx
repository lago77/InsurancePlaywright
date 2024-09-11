import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Policies from './components/Policies';

function App() {
  return (
    <div className="App">
      <Router>
      
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/policies" element={<Policies />} />
      </Routes>

      </Router>
    </div>
  );
}

export default App;
