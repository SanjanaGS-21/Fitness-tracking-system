import React from 'react';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px 20px',
    backgroundColor: '#e6f7ff',
    minHeight: '100vh',
    fontFamily: 'Segoe UI, sans-serif',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '10px',
  };

  const subHeadingStyle = {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '30px',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '600px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  };

  const captionStyle = {
    marginTop: '20px',
    color: '#333',
    fontSize: '16px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to FitnessFreak</h1>
      <p style={subHeadingStyle}>Your personalized fitness tracker dashboard!</p>
      <img
        style={imageStyle}
        src="C:\fitness-tracker\th.jpeg"
        alt="Fitness Illustration"
      />
      <p style={captionStyle}>
        Track your workouts, monitor your progress, and stay motivated on your journey to better health.
      </p>
    </div>
  );
};

export default Home;
