import React from 'react';
import RootSelectButton from './RootSelectButton';

const RootSelector = ({ onRootChange }) => {
  const handleClick = noteName => {
    console.log(`${noteName} clicked`);
    onRootChange(noteName);
  };

  const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 35px)',
    gap: '2px 4px',
  };

  return (
    <div style={style}>
      <RootSelectButton noteName="C" handleClick={handleClick} />
      <RootSelectButton noteName="C#" handleClick={handleClick} />
      <RootSelectButton noteName="Db" handleClick={handleClick} />
      <RootSelectButton noteName="D" handleClick={handleClick} />
      <RootSelectButton noteName="D#" handleClick={handleClick} />
      <RootSelectButton noteName="Eb" handleClick={handleClick} />
      <RootSelectButton noteName="E" handleClick={handleClick} />
      <RootSelectButton noteName="F" handleClick={handleClick} />
      <RootSelectButton noteName="F#" handleClick={handleClick} />
      <RootSelectButton noteName="Gb" handleClick={handleClick} />
      <RootSelectButton noteName="A" handleClick={handleClick} />
      <RootSelectButton noteName="A#" handleClick={handleClick} />
      <RootSelectButton noteName="Bb" handleClick={handleClick} />
      <RootSelectButton noteName="B" handleClick={handleClick} />
    </div>
  );
};

export default RootSelector;
