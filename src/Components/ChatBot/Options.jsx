import React, { useState, useEffect } from 'react';
import { shuffleArray } from './utils'; 

const Options = ({ actions }) => {
  const [currentOptions, setCurrentOptions] = useState([]);

  const allOptions = [
    'services', 'pricing', 'contact', 'mission', 
    'location', 'experience', 'startups', 'featured',
    'benefits', 'resources', 'collaboration', 'contact',
    'SuccessStories', 'investors'
  ];

  useEffect(() => {
    
    const shuffledOptions = shuffleArray(allOptions);
    setCurrentOptions(shuffledOptions.slice(0, 4)); 
  }, []);

  const handleOptionClick = (option) => {
    actions[option]();
    
    const shuffledOptions = shuffleArray(allOptions);
    setCurrentOptions(shuffledOptions.slice(0, 4)); 
  };

  return (
    <div style={styles.optionsContainer}>
      {currentOptions.map((option, index) => (
        <div
          key={index}
          onClick={() => handleOptionClick(option)}
          style={styles.option}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </div>
      ))}
    </div>
  );
};

const styles = {
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', 
    padding: '10px',
  },
  option: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '8px 16px', 
    margin: '5px',
    borderRadius: '16px', 
    cursor: 'pointer',
    textAlign: 'center',
    width: '100%',
    maxWidth: '180px', 
    fontSize: '14px', 
  },
};

export default Options;
