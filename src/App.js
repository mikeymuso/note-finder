/* eslint-disable */

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
  // CHORD SETTINGS
  const [rootNote, setrootNote] = useState('C');
  const [chordShape, setChordShape] = useState(
    chordsDB.smallKeyboard.major.standard
  );
  const [chord, setChord] = useState({});
  const [mode, setMode] = useState('major');
  const [voicing, setVoicing] = useState('standard');
  const [inversion, setInversion] = useState('root');

  // ===========================
  // DISPLAY SETTINGS
  const [showNoteNames, setShowNoteNames] = useState(true);
  const [showNoteNumbering, setShowNoteNumbering] = useState(true);
  const [keyboardSize, setKeyboardSize] = useState('small');

  // ===========================
  // UPDATE CHORD NOTES
  useEffect(() => {
    const notesOfChord = {};

    chordShape.root[rootNote][inversion].forEach(note => {
      notesOfChord[note] = true;
    });

    setChord(notesOfChord);
  }, [chordShape, rootNote, inversion]);

  // ===========================
  // UPDATE CHORD SHAPE ON SELECTION CHANGES
  useEffect(() => {
    setChordShape(
      chordsDB[`${keyboardSize}Keyboard`][mode][voicing] ||
        chordsDB[`${keyboardSize}Keyboard`][mode]['standard']
    );
  }, [mode, keyboardSize, mode, voicing]);

  return (
    <div>
      {keyboardSize === 'small' && (
        <KeyboardSmall
          chord={chord}
          showNoteNumbering={showNoteNumbering}
          showNoteNames={showNoteNames}
        />
      )}
      <RootSelector onRootChange={setrootNote} />
      <Checkbox label="Show note names" onChange={setShowNoteNames} />
      <Checkbox
        label="Show note numbering"
        onChange={setShowNoteNumbering}
        isEnabled={showNoteNames}
      />
      <Dropdown
        label="Chord"
        options={Object.keys(chordsDB[`${keyboardSize}Keyboard`])}
        onChange={setMode}
      />
      <Dropdown
        label="Voicing"
        options={Object.keys(chordsDB[`${keyboardSize}Keyboard`][mode])}
        onChange={setVoicing}
      />
      <Dropdown
        label="Inversion"
        options={
          Object.entries(chord).length === 3
            ? ['root', 'first', 'second']
            : ['root', 'first', 'second', 'third']
        }
        onChange={setInversion}
      />
    </div>
  );
};

export default App;
