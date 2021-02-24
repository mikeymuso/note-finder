import React, { useState } from 'react';

const Checkbox = ({
  label,
  handleChange,
  initialValue = true,
  isEnabled = true,
}) => {
  const [checked, setChecked] = useState(initialValue);

  const handleCheck = () => {
    setChecked(!checked);
    handleChange(!checked);
  };

  return (
    <div>
      <label htmlFor="noteNameSelector">{label}</label>
      <input
        name="noteNameSelector"
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
        disabled={!isEnabled}
      />
    </div>
  );
};

export default Checkbox;
