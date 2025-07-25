import React, { useState } from 'react';
import axios from 'axios';

const RecipeBlog = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState([]);
  const [error, setError] = useState('');

  const handleGenerateRecipe = async () => {
    try {
      const res = await axios.post('/api/recipe/generate', { ingredients }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setRecipe(res.data.recipe);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Error generating recipe');
    }
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '50px auto',
      padding: '30px',
      borderRadius: '12px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '20px',
    },
    textarea: {
      width: '100%',
      height: '100px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
      marginBottom: '20px',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#1e90ff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    recipeBox: {
      marginTop: '20px',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#f4f4f4',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    error: {
      color: 'red',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>AI-Powered Recipe Generator</h2>
      <textarea
        placeholder="Enter ingredients (e.g., chicken, rice, spinach)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        style={styles.textarea}
      />
      <button
        onClick={handleGenerateRecipe}
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Generate Recipe
      </button>
      {error && <p style={styles.error}>{error}</p>}
      {recipe.length > 0 && (
        <div style={styles.recipeBox}>
          <h4>Generated Recipe:</h4>
          <ul>
            {recipe.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecipeBlog;