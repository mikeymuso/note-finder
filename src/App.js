import React, { useState, useEffect } from 'react';
import KeyboardSmall from './components/keyboards/KeyboardSmall';
import RootSelector from './components/chordSelection/RootSelector';
import { chordsDB } from './chordDB/chords';
import { scales, fullScale } from './chordDB/scales';
import Checkbox from './components/Checkbox';
import Dropdown from './components/Dropdown';

const App = () => {
  // ===========================
  // CHORD SETTINGS
  const [rootNote, setrootNote] = useState('B');
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
    const scale = scales[rootNote];

    if (keyboardSize === 'small') {
      let octave = 3;
      let prevNoteIndex = 0;

      chordShape.forEach(note => {
        const diminished = note.split('').indexOf('b') !== -1;
        const augmented = note.split('').indexOf('#') !== -1;
        const strippedNote = note.split('').slice(-1).join('');

        let noteName = scale[strippedNote - 1];
        const noteIndex = fullScale.indexOf(noteName);
        const isSharp = noteName.match(/[A-Z]s/);
        const isFlat = noteName.includes('b');
        const isDoubleSharp = noteName.includes('ds');

        if (diminished) {
          if (isDoubleSharp) {
            noteName = noteName.split('d').join('');
          } else if (isSharp) {
            noteName = noteName
              .split('')
              .filter(ele => ele !== 's')
              .join('');
          } else if (isFlat) {
            noteName = fullScale[fullScale.indexOf(noteName) - 2];
          } else {
            noteName = `${noteName}b`;
          }
        }

        if (noteIndex < prevNoteIndex) {
          octave += 1;
        }

        prevNoteIndex = noteIndex;

        notesOfChord[`${noteName}${octave}`] = true;
      });
    }

    setChord(notesOfChord);
  }, [chordShape, rootNote, inversion, keyboardSize]);

  // ===========================
  // UPDATE CHORD SHAPE ON SELECTION CHANGES
  useEffect(() => {
    setChordShape(
      chordsDB[`${keyboardSize}Keyboard`][mode][voicing] ||
        chordsDB[`${keyboardSize}Keyboard`][mode]['standard']
    );
  }, [mode, keyboardSize, voicing]);

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
