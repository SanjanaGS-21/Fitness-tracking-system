import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        const res = await axios.get('/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        navigate('/login');
      }
    };
    fetchProfile();
  }, [navigate]);

  if (!user) return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</p>;

  const containerStyle = {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '12px',
    background: '#f9f9f9',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  };

  const infoRow = {
    marginBottom: '12px',
    fontSize: '16px',
    color: '#444',
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginRight: '8px',
    color: '#222',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>User Profile</h2>
      <p style={infoRow}><span style={labelStyle}>Name:</span> {user.name}</p>
      <p style={infoRow}><span style={labelStyle}>Email:</span> {user.email}</p>
      <p style={infoRow}><span style={labelStyle}>Age:</span> {user.age}</p>
      <p style={infoRow}><span style={labelStyle}>Gender:</span> {user.gender}</p>
      <p style={infoRow}><span style={labelStyle}>Height:</span> {user.height} cm</p>
      <p style={infoRow}><span style={labelStyle}>Weight:</span> {user.weight} kg</p>
      <p style={infoRow}><span style={labelStyle}>Goal:</span> {user.goal}</p>
    </div>
  );
};

export default Profile;
