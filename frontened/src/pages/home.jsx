import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        {/* Hero Section */}
        <section
          style={{
            backgroundColor: '#f8f9fa',
            textAlign: 'center',
            padding: '60px 20px',
          }}
        >
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
            Welcome to Project Manager
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
            Effortlessly manage and collaborate on projects with your team.
          </p>
          <button
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              color: 'white',
              backgroundColor: '#007bff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
          >
            Get Started
          </button>
        </section>

        {/* Features Section */}
        <section style={{ padding: '40px 20px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '20px' }}>
            Features
          </h2>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <div
              style={{
                flexBasis: '30%',
                textAlign: 'center',
                marginBottom: '20px',
                padding: '20px',
                backgroundColor: '#e9ecef',
                borderRadius: '8px',
              }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Task Management</h3>
              <p style={{ fontSize: '1rem' }}>
                Organize and prioritize your tasks efficiently.
              </p>
            </div>
            <div
              style={{
                flexBasis: '30%',
                textAlign: 'center',
                marginBottom: '20px',
                padding: '20px',
                backgroundColor: '#e9ecef',
                borderRadius: '8px',
              }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Team Collaboration</h3>
              <p style={{ fontSize: '1rem' }}>
                Communicate with team members in real-time.
              </p>
            </div>
            <div
              style={{
                flexBasis: '30%',
                textAlign: 'center',
                marginBottom: '20px',
                padding: '20px',
                backgroundColor: '#e9ecef',
                borderRadius: '8px',
              }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Progress Tracking</h3>
              <p style={{ fontSize: '1rem' }}>
                Keep track of project milestones and deadlines.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;