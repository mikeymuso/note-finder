// # (sharp) is represented with 's'

// Structure for chords should follow this:
// MODE: {
//  VOICING: {
//    INVERSION: {
//      LH: [...]
//      RH: [...]
//      RHstart: integer
//      RHstart: integer
//    }
//  }
// }

export const chordsDB = {
  major: {
    standard: {
      root: {
        LH: ['1', 'b7'],
        RH: ['1', '3', '5', '1'],
        LHstart: 3,
        RHstart: 4,
      },
      first: {
        LH: ['3', '1'],
        RH: ['3', '5', '1'],
        LHstart: 3,
        RHstart: 4,
      },
      second: {
        LH: ['5', '5'],
        RH: ['5', '1', '3'],
        LHstart: 2,
        RHstart: 4,
      },
    },
    open: {
      LH: ['1', 'b7'],
      RH: ['1', '5', '10'],
      LHstart: 3,
      RHstart: 4,
    },
  },
  minor: {
    standard: {
      root: {
        LH: ['1', 'b7'],
        RH: ['1', 'b3', '5', '1'],
        LHstart: 3,
        RHstart: 4,
      },
      first: {
        LH: ['b3', '1'],
        RH: ['b3', '5', '1'],
        LHstart: 3,
        RHstart: 4,
      },
    },
  },
  diminished: {
    standard: {
      LH: ['1', 'b7'],
      RH: ['1', 'b3', 'b5', '6'],
      LHstart: 3,
      RHstart: 4,
    },
  },
};
