import React, { useState, useEffect } from 'react';
import RootSelector from './components/chordSelection/RootSelector';
import { chordsDB } from './chordDB/chords';
import { scales, fullScale, whiteNotes } from './chordDB/scales';
import Checkbox from './components/Checkbox';
import Dropdown from './components/Dropdown';
import KeyboardContainer from './components/keyboards/KeyboardContainer';
import Header from './components/Header';
import './css/main.css';

const App = () => {
  // ===========================
  // CHORD SETTINGS
  const [rootNote, setrootNote] = useState('C');
  const [chordShape, setChordShape] = useState(chordsDB.major.standard.root);

  const [chord, setChord] = useState({});
  const [mode, setMode] = useState('major');
  const [voicing, setVoicing] = useState('standard');
  const [inversion, setInversion] = useState('root');

  // ===========================
  // DISPLAY SETTINGS
  const [showNoteNames, setShowNoteNames] = useState(true);
  const [showNoteNumbering, setShowNoteNumbering] = useState(true);
  const [showLeftHand, setShowLeftHand] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const colors = {
    darkMode: {
      headerBackground: '#171717',
      borderLight: '#D3D3D3',
      borderContrast: '#A30000',
      backgroundColor: '#171717',
      innerToggle: '#2C2C2C',
      rootSelector: {
        background: '#171717',
        border: '#333333',
        font: '#D3D3D3',
        active: '#A30000',
      },
    },
    lightMode: {
      headerBackground: '#373A40',
      borderLight: '#FFFFFF',
      borderContrast: '#19D3DA',
      backgroundColor: '#EEEEEE',
      innerToggle: '#EEEEEE',
      rootSelector: {
        background: '#171717',
        border: '#D3D3D3',
        font: '#D3D3D3',
      },
    },
  };

  // ===========================
  // UPDATE CHORD NOTES
  useEffect(() => {
    const notesOfChord = {};
    const scale = scales[rootNote];

    const calculateChordValues = (hand, startOctave, label) => {
      let startOct = startOctave;
      let prevNoteIndex = 0;
      let prevIntervalNumber = 0;

      hand.forEach(note => {
        // Convert flat/sharp symbols to variables
        const diminished = note.split('').indexOf('b') !== -1;
        const augmented = note.split('').indexOf('#') !== -1;

        // Strip out all characters - leave only the interval number
        const strippedNote = note.replace(/\D/g, '');

        // Accounting for intervals larger than 7 notes (i.e. 9ths, 10ths, etc)
        if (strippedNote - prevIntervalNumber >= 7) {
          startOct += 1;
        }

        // Store previous interval value
        prevIntervalNumber = strippedNote;

        // Calculate from array of one octave with MATH and stuff
        const calculatedNoteIndex = () => {
          if (strippedNote > 7) {
            const octaveDifference = Math.floor(strippedNote / 7) * 7;
            return strippedNote - octaveDifference;
          } else {
            return strippedNote;
          }
        };

        // Get the note name from the scale and index number
        let noteName = scale[calculatedNoteIndex() - 1];
        const noteIndex = fullScale.indexOf(noteName);

        const isSharp = noteName.match(/[A-Z]s/);
        const isFlat = noteName.includes('b');
        const isDoubleSharp = noteName.includes('ds');

        // console.log({ diminished, augmented, strippedNote });
        // console.log({ noteName, noteIndex, isSharp, isFlat, isDoubleSharp });

        if (diminished) {
          if (isDoubleSharp) {
            noteName = noteName.split('d').join('');
          } else if (isSharp) {
            noteName = noteName
              .split('')
              .filter(ele => ele !== 's')
              .join('');
          } else if (isFlat) {
            noteName = `${noteName.charAt(0)}df`;
          } else {
            noteName = `${noteName}b`;
          }
        }

        if (augmented) {
          if (isDoubleSharp) {
            // get index of naturalised note and get next white note - then sharpen it
            noteName = `${
              whiteNotes[whiteNotes.indexOf(noteName.charAt(0)) + 1]
            }s`;
          } else if (isSharp) {
            // Handle to edge cases of B# & C# (they shouldn't become double sharps)
            if (noteName === 'Bs') {
              noteName = 'Cs';
            } else if (noteName === 'Es') {
              noteName = 'Fs';
            } else {
              noteName = `${noteName.charAt(0)}ds`;
            }
          } else if (isFlat) {
            noteName = noteName
              .split('')
              .filter(ele => ele !== 'b')
              .join('');
          } else {
            noteName = `${noteName}s`;
          }
        }

        if (noteIndex <= prevNoteIndex) {
          startOct += 1;
        }

        prevNoteIndex = noteIndex;

        notesOfChord[`${noteName}${startOct}`] = label;
      });
    };

    const LH = chordShape.LH;
    const RH = chordShape.RH;
    const LHstart = chordShape.LHstart;
    const RHstart = chordShape.RHstart;

    showLeftHand && calculateChordValues(LH, LHstart, 'LH');
    calculateChordValues(RH, RHstart, 'RH');

    console.log(notesOfChord);

    setChord(notesOfChord);
  }, [chordShape, rootNote, inversion, showLeftHand]);

  // ===========================
  // UPDATE CHORD SHAPE ON SELECTION CHANGES
  useEffect(() => {
    setChordShape(
      chordsDB[mode][voicing][inversion] || chordsDB[mode]['standard']['root']
    );
  }, [mode, voicing, inversion]);

  return (
    <div>
      <Header colors={darkMode ? colors.darkMode : colors.lightMode} />
      <KeyboardContainer
        chord={chord}
        showNoteNumbering={showNoteNumbering}
        showNoteNames={showNoteNames}
      />
      <RootSelector
        onRootChange={setrootNote}
        colors={darkMode ? colors.darkMode : colors.lightMode}
        activeNote={rootNote}
      />
      <Checkbox label="Show note names" onChange={setShowNoteNames} />
      <Checkbox label="Show Left Hand" onChange={setShowLeftHand} />
      <Checkbox label="Dark mode" onChange={setDarkMode} />
      <Checkbox
        label="Show note numbering"
        onChange={setShowNoteNumbering}
        isEnabled={showNoteNames}
      />
      <Dropdown
        label="Chord"
        options={Object.keys(chordsDB)}
        onChange={setMode}
      />
      <Dropdown
        label="Voicing"
        options={Object.keys(chordsDB[mode])}
        onChange={setVoicing}
      />
      <Dropdown
        label="Inversion"
        options={Object.keys(chordsDB[mode][voicing])}
        onChange={setInversion}
      />
    </div>
  );
};

export default App;
