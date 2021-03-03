import React, { useRef, useEffect } from 'react';
import KeyboardLarge from './KeyboardLarge';

const KeyboardContainer = props => {
  const keyboardContainer = useRef(null);

  useEffect(() => {
    keyboardContainer.current.scrollLeft = 555;
  }, []);

  return (
    <div className="keyboard-container" ref={keyboardContainer}>
      <KeyboardLarge
        colors={props.colors}
        chord={props.chord}
        showNoteNumbering={props.showNoteNumbering}
        showNoteNames={props.showNoteNames}
      />
    </div>
  );
};

export default KeyboardContainer;
