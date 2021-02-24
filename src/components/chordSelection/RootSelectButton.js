import React from 'react';

const RootSelectButton = ({ noteName, handleClick }) => {
  const style = {
    backgroundColor: 'yellow',
    width: '35px',
    height: '35px',
    display: 'grid',
    placeContent: 'center',
    border: '1px solid red',
    textAlign: 'center',
    fontSize: '20px',
    fontFamily: 'HelveticaNeue, Helvetica Neue',
    cursor: 'pointer',
  };

  const noteDataName =
    noteName[noteName.length - 1] === '#'
      ? noteName
          .split('')
          .map(letter => (letter === '#' ? 's' : letter))
          .join('')
      : noteName;

  return (
    <div style={style} onClick={() => handleClick(noteDataName)}>
      {noteName}
    </div>
  );
};

export default RootSelectButton;
