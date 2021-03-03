import React, { useState, useEffect } from 'react';

// ===========================
// Data
import { chordsDB } from './chordDB/chords';
import { scales, fullScale, whiteNotes } from './chordDB/scales';

// ===========================
// CSS/Colors
import './css/main.css';
import { appColors } from './components/Colors';

// ===========================
// Components
import RootSelector from './components/chordSelection/RootSelector';
import KeyboardKey from './components/KeyboardKey';
import Footer from './components/Footer';
import Checkbox from './components/Checkbox';
import Dropdown from './components/Dropdown';
import KeyboardContainer from './components/keyboards/KeyboardContainer';
import Header from './components/Header';

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
  const [darkMode, setDarkMode] = useState(false);
  const [colors, setColors] = useState(appColors.darkMode);

  // Set colors for dark/light mode
  useEffect(() => {
    setColors(darkMode ? appColors.darkMode : appColors.lightMode);
  }, [darkMode]);

  // Update notes of chord to pass to Keyboard SVG
  useEffect(() => {
    const notesOfChord = {};
    const scale = scales[rootNote];

    const calculateChordValues = (hand, startOctave, label) => {
      let startOct = startOctave;
      let prevNoteIndex = 0;
      let prevIntervalNumber = 0;

      // Calculate note value & octave for each interval in the array
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

        // Store previous interval value to check intervals larger than 1 octave
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
    <main style={{ backgroundColor: colors.backgroundColor }}>
      <Header colors={colors} />
      <KeyboardContainer
        colors={colors}
        chord={chord}
        showNoteNumbering={showNoteNumbering}
        showNoteNames={showNoteNames}
      />
      <KeyboardKey colors={colors} />
      <RootSelector
        onRootChange={setrootNote}
        colors={colors}
        activeNote={rootNote}
      />

      <Dropdown
        colors={colors}
        label="Select Chord"
        options={Object.keys(chordsDB)}
        onChange={setMode}
      />
      <Dropdown
        colors={colors}
        label="Select Voicing"
        options={Object.keys(chordsDB[mode])}
        onChange={setVoicing}
      />
      <Dropdown
        colors={colors}
        label="Inversion"
        options={Object.keys(chordsDB[mode][voicing])}
        onChange={setInversion}
      />
      <div className="checkbox-container">
        <Checkbox
          label="Show note names"
          onChange={setShowNoteNames}
          colors={colors}
        />
        <Checkbox
          label="Show note numbering"
          onChange={setShowNoteNumbering}
          isEnabled={showNoteNames}
          colors={colors}
        />
        <Checkbox
          label="Show Left Hand"
          onChange={setShowLeftHand}
          colors={colors}
        />
        <Checkbox label="Dark mode" onChange={setDarkMode} colors={colors} />
        <Footer colors={colors} />
      </div>
    </main>
  );
};

export default App;
