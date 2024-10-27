import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Cards from '../components/cards';

const Project = () => {
  return (
    <div className="project-page">
      <Navbar />
      
      <div className=" m-8  gap-6 flex justify-start items-start position-relative ">
        <Cards />
        <Cards />
      </div>
      
      <div className=" m-8 gap-6  flex justify-start items-start  ">
        <Cards />
        <Cards />
      </div>
      
      <Footer />
    </div>
  );
};

export default Project;
