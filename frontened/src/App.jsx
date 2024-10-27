import React from 'react';
import Home from './pages/home';
import Project from './pages/project';
import About from './pages/about';
import { Router,Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/projects" element={<Project />} /> 
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
