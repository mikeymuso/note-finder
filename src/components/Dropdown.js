import React, { useState } from 'react';

const Dropdown = ({ label, options }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = e => {
    console.log(e.target.value);
  };

  console.log(options);

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select name={label} onChange={e => handleChange(e)}>
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
