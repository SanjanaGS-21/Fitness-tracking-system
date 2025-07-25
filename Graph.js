import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const sampleData = [
  { day: 'Mon', water: 1200, movement: 2000 },
  { day: 'Tue', water: 1500, movement: 5000 },
  { day: 'Wed', water: 1800, movement: 7500 },
  { day: 'Thu', water: 1000, movement: 3000 },
  { day: 'Fri', water: 2000, movement: 8500 },
  { day: 'Sat', water: 2500, movement: 9500 },
  { day: 'Sun', water: 1800, movement: 7000 },
];

const Graphs = () => {
  return (
    <div style={{ marginTop: '40px' }}>
      <h3>Weekly Activity</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sampleData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="water" stroke="#8884d8" />
          <Line type="monotone" dataKey="movement" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graphs;