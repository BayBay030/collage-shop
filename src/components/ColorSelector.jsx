import React from 'react';
import { motion } from 'framer-motion';
import './ColorSelector.css';

const ColorSelector = ({ onColorSelect, selectedColor }) => {
  const options = [
    { id: 'color1', label: '1' },
    { id: 'color2', label: '2' },
    { id: 'color3', label: '3' },
  ];

  return (
    <div className="color-selector-bottom">
      <div className="color-options-numbered">
        {options.map((option) => (
          <motion.button
            key={option.id}
            className={`number-button ${selectedColor === option.id ? 'selected' : ''}`}
            onClick={() => onColorSelect(option.id)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`選擇顏色 ${option.label}`}
          >
            {option.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
