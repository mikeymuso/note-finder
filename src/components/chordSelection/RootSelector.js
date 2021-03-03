import React from 'react';
import RootSelectButton from './RootSelectButton';

const RootSelector = ({ onRootChange, activeNote, colors }) => {
  const handleClick = noteName => {
    onRootChange(noteName);
  };

  const roots = [
    'C',
    'Cs',
    'Db',
    'D',
    'Ds',
    'Eb',
    'E',
    'F',
    'Fs',
    'Gb',
    'G',
    'Gs',
    'Ab',
    'A',
    'As',
    'Bb',
    'B',
  ];

  const renderedButtons = roots.map(root => {
    return (
      <RootSelectButton
        key={root}
        noteName={root}
        handleClick={handleClick}
        colors={colors}
        active={activeNote === root}
      />
    );
  });

  return (
    <div className="root-selector-container">
      <h2 className="control-label" style={{ color: colors.color }}>
        Select root note
      </h2>
      <div className="root-selector">{renderedButtons}</div>
    </div>
  );
};

export default RootSelector;
