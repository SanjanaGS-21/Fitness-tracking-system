import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell,
} from 'recharts';

const Dashboard = () => {
  const [data, setData] = useState([
    { day: 'Mon', water: 0, steps: 0, calories: 0, sleep: 0, activity: 'None' },
    { day: 'Tue', water: 0, steps: 0, calories: 0, sleep: 0, activity: 'None' },
    { day: 'Wed', water: 0, steps: 0, calories: 0, sleep: 0, activity: 'None' },
    { day: 'Thu', water: 0, steps: 0, calories: 0, sleep: 0, activity: 'None' },
    { day: 'Fri', water: 0, steps: 0, calories: 0, sleep: 0, activity: 'None' },
    { day: 'Sat', water: 0, steps: 0, calories: 0, sleep: 0, activity: 'None' },
    { day: 'Sun', water: 0, steps: 0, calories: 0, sleep: 0, activity: 'None' },
  ]);

  const [form, setForm] = useState({
    day: 'Mon',
    water: '',
    steps: '',
    calories: '',
    sleep: '',
    activity: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = data.map((entry) =>
      entry.day === form.day
        ? {
            ...entry,
            water: parseInt(form.water) || 0,
            steps: parseInt(form.steps) || 0,
            calories: parseInt(form.calories) || 0,
            sleep: parseFloat(form.sleep) || 0,
            activity: form.activity || 'None',
          }
        : entry
    );
    setData(updatedData);
    setForm({ day: 'Mon', water: '', steps: '', calories: '', sleep: '', activity: '' });
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384', '#36A2EB', '#9966FF'];

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#1e90ff' }}>Your Weekly Fitness Dashboard</h2>

      {/* Input Form */}
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
          {['day', 'water', 'steps', 'calories', 'sleep', 'activity'].map((field) => (
            <div key={field} style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
              {field === 'day' ? (
                <select name="day" value={form.day} onChange={handleChange} style={{ width: '200px', padding: '8px' }}>
                  {data.map((entry) => (
                    <option key={entry.day} value={entry.day}>{entry.day}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field === 'activity' ? 'text' : 'number'}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  style={{ width: '200px', padding: '8px' }}
                />
              )}
            </div>
          ))}
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#1e90ff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Submit
          </button>
        </form>
      </div>

      {/* Fitness Summary Table */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ textAlign: 'center', color: '#333' }}>Weekly Fitness Summary</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
          <thead style={{ backgroundColor: '#f0f0f0' }}>
            <tr>
              <th>Day</th><th>Water (ml)</th><th>Steps</th><th>Calories</th><th>Sleep (hrs)</th><th>Activity</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry) => (
              <tr key={entry.day}>
                <td>{entry.day}</td>
                <td>{entry.water}</td>
                <td>{entry.steps}</td>
                <td>{entry.calories}</td>
                <td>{entry.sleep}</td>
                <td>{entry.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Charts */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          <h4 style={{ textAlign: 'center' }}>Water Intake & Steps</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="water" stroke="#8884d8" />
              <Line type="monotone" dataKey="steps" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h4 style={{ textAlign: 'center' }}>Calories Burned</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="calories" fill="#FF8042" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h4 style={{ textAlign: 'center' }}>Sleep Hours Distribution</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sleep" stroke="#36A2EB" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h4 style={{ textAlign: 'center' }}>Activity Types</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={Object.entries(
                  data.reduce((acc, curr) => {
                    acc[curr.activity] = (acc[curr.activity] || 0) + 1;
                    return acc;
                  }, {})
                ).map(([name, value]) => ({ name, value }))}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;