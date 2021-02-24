import React, { useState } from 'react';

const NoteNamesSelector = ({ handleChange }) => {
  const [checked, setChecked] = useState(true);

  const handleCheck = () => {
    setChecked(!checked);
    handleChange(!checked);
  };

  return (
    <div>
      <label for="noteNameSelector">Show note names</label>
      <input
        name="noteNameSelector"
        type="checkbox"
        checked={checked}
        onClick={handleCheck}
      />
    </div>
  );
};

export default NoteNamesSelector;
