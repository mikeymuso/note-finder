import React from 'react';
import KeyboardSmall from './KeyboardSmall';

const KeyboardContainer = props => {
  console.log(props.chord);

  return (
    <div>
      {props.size === 'small' ? (
        <KeyboardSmall
          chord={props.currentChord}
          showNoteNumbering={props.showNoteNumbering}
          showNoteNames={props.showNoteNames}
        />
      ) : props.size === 'medium' ? (
        'MEDIUM'
      ) : (
        'LARGE'
      )}
    </div>
  );
};

export default KeyboardContainer;
