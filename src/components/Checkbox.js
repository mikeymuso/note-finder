import React, { useState } from 'react';

const Checkbox = ({
  label,
  onChange,
  initialValue = true,
  isEnabled = true,
  colors,
}) => {
  const [checked, setChecked] = useState(initialValue);

  const handleCheck = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  return (
    <div className="checkbox">
      <label
        className="checkbox-label"
        style={{ color: colors.color }}
        htmlFor="noteNameSelector"
      >
        {label}
      </label>
      <input
        className="checkbox-input"
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
