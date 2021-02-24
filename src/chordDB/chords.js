// # (sharp) is represented with 's'

export const chordsDB = {
  // 2 Octaves available [C3 - B4]
  smallKeyboard: {
    major: {
      standard: {
        name: 'standard',
        root: {
          C: {
            root: ['C3', 'E3', 'G3'],
            first: ['E3', 'G3', 'C4'],
            second: ['G3', 'C4', 'E4'],
          },

          Cs: ['Cs3', 'Fs3', 'Gs3'],
          Db: ['Db3', 'F3', 'Ab3'],
          D: ['D3', 'Fs3', 'A3'],
          Ds: ['Ds3', 'G3', 'As3'],
          Eb: ['Eb3', 'G3', 'Bb3'],
          E: ['E3', 'Gs3', 'B3'],
          F: ['F3', 'A3', 'C4'],
          Fs: ['Fs3', 'As3', 'Cs4'],
          Gb: ['Gb3', 'Bb3', 'Db4'],
          G: ['G3', 'B3', 'D4'],
          Gs: ['Gs3', 'Bs3', 'Ds4'],
          Ab: ['Ab3', 'C4', 'Eb4'],
          A: ['A3', 'Cs4', 'E4'],
          As: ['As3', 'D4', 'Es4'],
          Bb: ['Bb3', 'D4', 'F4'],
          B: ['B3', 'Ds4', 'Fs4'],
        },
      },
      open: {
        name: 'Open',
        root: {
          C: ['C3', 'G3', 'E4'],
          Cs: ['Cs3', 'Gs3', 'Es4'],
          Db: ['Db3', 'F3', 'Ab3'],
          D: ['D3', 'Fs3', 'A3'],
          Ds: ['Ds3', 'G3', 'As3'],
          Eb: ['Eb3', 'G3', 'Bb3'],
          E: ['E3', 'Gs3', 'B3'],
          F: ['F3', 'Ab3', 'C4'],
          Fs: ['Fs3', 'As3', 'Cs4'],
          Gb: ['Gb3', 'Bb3', 'Db4'],
          G: ['G3', 'B3', 'D4'],
          Gs: ['Gs3', 'Bs3', 'Ds4'],
          Ab: ['Ab3', 'C4', 'Eb4'],
          A: ['A3', 'Cs4', 'E4'],
          As: ['As3', 'D4', 'Es4'],
          Bb: ['Bb3', 'D4', 'F4'],
          B: ['B3', 'Ds4', 'Fs4'],
        },
      },
    },
    minor: {
      standard: {
        name: 'standard',
        root: {
          C: ['C3', 'Eb3', 'G3'],
          Cs: ['Cs3', 'Fs3', 'Gs3'],
          Db: ['Db3', 'F3', 'Ab3'],
          D: ['D3', 'Fs3', 'A3'],
          Ds: ['Ds3', 'G3', 'As3'],
          Eb: ['Eb3', 'G3', 'Bb3'],
          E: ['E3', 'Gs3', 'B3'],
          F: ['F3', 'Ab3', 'C4'],
          Fs: ['Fs3', 'As3', 'Cs4'],
          Gb: ['Gb3', 'Bb3', 'Db4'],
          G: ['G3', 'B3', 'D4'],
          Gs: ['Gs3', 'Bs3', 'Ds4'],
          Ab: ['Ab3', 'C4', 'Eb4'],
          A: ['A3', 'Cs4', 'E4'],
          As: ['As3', 'D4', 'Es4'],
          Bb: ['Bb3', 'D4', 'F4'],
          B: ['B3', 'Ds4', 'Fs4'],
        },
      },
    },
    diminished: {
      standard: {
        name: 'standard',
        root: {
          C: ['C3', 'Eb3', 'Gb3', 'A3'],
          Cs: ['Cs3', 'Fs3', 'Gs3'],
          Db: ['Db3', 'F3', 'Ab3'],
          D: ['D3', 'Fs3', 'A3'],
          Ds: ['Ds3', 'G3', 'As3'],
          Eb: ['Eb3', 'G3', 'Bb3'],
          E: ['E3', 'Gs3', 'B3'],
          F: ['F3', 'Ab3', 'Cb4', 'D4'],
          Fs: ['Fs3', 'As3', 'Cs4'],
          Gb: ['Gb3', 'Bb3', 'Db4'],
          G: ['G3', 'B3', 'D4'],
          Gs: ['Gs3', 'Bs3', 'Ds4'],
          Ab: ['Ab3', 'C4', 'Eb4'],
          A: ['A3', 'Cs4', 'E4'],
          As: ['As3', 'D4', 'Es4'],
          Bb: ['Bb3', 'D4', 'F4'],
          B: ['B3', 'Ds4', 'Fs4'],
        },
      },
    },
  },
  
  mediumKeyboard: {
    // Chords for medium chord
  },
  largeKeyboard: {
    // Chords or full keyboard
  },
};
