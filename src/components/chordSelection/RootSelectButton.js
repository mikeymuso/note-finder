import React from 'react';

const RootSelectButton = ({ noteName, handleClick, colors, active }) => {
  const style = {
    backgroundColor: colors.rootSelector.background,
    border: `2px solid ${
      active ? colors.rootSelector.active : colors.rootSelector.border
    }`,
    color: colors.rootSelector.font,
  };

  const noteDataName =
    noteName[noteName.length - 1] === '#'
      ? noteName
          .split('')
          .map(letter => (letter === '#' ? 's' : letter))
          .join('')
      : noteName;

  return (
    <div
      className="root-select-button"
      style={style}
      onClick={() => handleClick(noteDataName)}
    >
      <p>{noteName.replace('s', '#')}</p>
    </div>
  );
};

export default RootSelectButton;
