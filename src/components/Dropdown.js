import React, { useState } from 'react';

const Dropdown = ({ label, options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = value => {
    setSelectedValue(value);
    onChange(value);
  };

  if (!options) {
    throw new Error('No array supplied for dropdown box');
  }

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select
        name={label}
        value={selectedValue}
        onChange={e => handleChange(e.target.value)}
      >
        {options.map(opt => (
          <option key={opt} value={opt}>
            {`${opt.charAt(0).toUpperCase()}${opt.slice(1)}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
