import React, { useState, useEffect } from 'react';
import KeyboardSmall from './components/keyboards/KeyboardSmall';
import RootSelector from './components/chordSelection/RootSelector';
import { chordsDB } from './chordDB/chords';
import NoteNamesSelector from './components/displaySelection/NoteNamesSelector';
import Checkbox from './components/Checkbox';
import Dropdown from './components/Dropdown';
import KeyboardContainer from './components/keyboards/KeyboardContainer';

const App = () => {
  // ===========================
  // CHORD STATE
  const [currentRoot, setCurrentRoot] = useState('C');
  const [chordShape, setChordShape] = useState(
    chordsDB.smallKeyboard.major.triad
  );
  const [currentChord, setCurrentChord] = useState({});

  // ===========================
  // DISPLAY STATE
  const [showNoteNames, setShowNoteNames] = useState(true);
  const [showNoteNumbering, setShowNoteNumbering] = useState(true);
  const [keyboardSize, setKeyboardSize] = useState('small');

  useEffect(() => {
    const notesOfChord = {};

    chordShape.root[currentRoot].forEach(note => {
      notesOfChord[note] = true;
    });

    setCurrentChord(notesOfChord);
  }, [chordShape, currentRoot]);

  return (
    <div>
      {keyboardSize === 'small' && (
        <KeyboardSmall
          chord={currentChord}
          showNoteNumbering={showNoteNumbering}
          showNoteNames={showNoteNames}
        />
      )}

      <RootSelector onRootChange={setCurrentRoot} />
      <Checkbox label="Show note names" handleChange={setShowNoteNames} />
      <Checkbox
        label="Show note numbering"
        handleChange={setShowNoteNumbering}
        isEnabled={showNoteNames}
      />

      <Dropdown
        label="Mode"
        options={Object.keys(chordsDB[`${keyboardSize}Keyboard`])}
      />
    </div>
  );
};

export default App;
