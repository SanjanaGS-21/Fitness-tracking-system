import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '12px',
    backgroundColor: '#f0f4f8',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Segoe UI, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    marginBottom: '16px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>About FitnessFreak</h2>
      <p style={paragraphStyle}>
        FitnessFreak is a comprehensive fitness tracking system designed to help users take control of their health and wellness. It offers an easy-to-use platform for monitoring daily activities such as workouts, nutrition, hydration, and sleep, allowing users to set personalized goals and track their progress over time.
      </p>
      <p style={paragraphStyle}>
        By integrating wearable devices and mobile app support, FitnessFreak provides real-time data insights and personalized recommendations. The system is built to motivate users through intuitive visual dashboards, weekly reports, and reminders, making fitness both engaging and sustainable.
      </p>
      <p style={paragraphStyle}>
        Whether you're aiming to lose weight, build muscle, stay active, or maintain a healthy lifestyle, FitnessFreak empowers you with the tools, data, and support you need on your fitness journey.
      </p>
    </div>
  );
};

export default About;
