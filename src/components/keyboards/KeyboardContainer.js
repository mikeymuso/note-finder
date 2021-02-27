import React from 'react';
import KeyboardLarge from './KeyboardLarge';

const KeyboardContainer = props => {
  const style = {
    width: '90vw',
    overflow: 'scroll',
    border: '2px solid black',
    margin: '20px auto',
  };

  return (
    <div style={style}>
      <KeyboardLarge
        chord={props.chord}
        showNoteNumbering={props.showNoteNumbering}
        showNoteNames={props.showNoteNames}
      />
    </div>
  );
};

export default KeyboardContainer;
