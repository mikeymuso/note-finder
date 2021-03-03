import React, { useState } from 'react';

const Dropdown = ({ label, options, onChange, colors }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const style = {
    border: `1px solid ${colors.dropdown.border}`,
    color: 'white',
    backgroundColor: colors.dropdown.background,
  };

  const labelStyle = {
    color: colors.color,
  };

  const handleChange = value => {
    setSelectedValue(value);
    onChange(value);
  };

  if (!options) {
    throw new Error('No array supplied for dropdown box');
  }

  return (
    <div className="dropdown">
      <label className="dropdown-label" style={labelStyle} htmlFor={label}>
        {label}
      </label>
      <select
        style={style}
        className="dropdown-input"
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
