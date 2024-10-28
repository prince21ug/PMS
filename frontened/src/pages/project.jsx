import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Cards from '../components/cards';

const Project = () => {
  return (
    <div className="project-page">
      <Navbar />
      
      <div
        style={{
          margin: '2rem',
          gap: '1.5rem',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          position: 'relative'
        }}
      >
        <Cards />
        <Cards />
      </div>
      
      <div
        style={{
          margin: '2rem',
          gap: '1.5rem',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start'
        }}
      >
        <Cards />
        <Cards />
      </div>
      
      <Footer />
    </div>
  );
};

export default Project;
