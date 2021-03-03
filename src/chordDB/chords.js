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
  },
  dominant7: {
    standard: {
      root: {
        LH: ['1', 'b7'],
        RH: ['1', '3', '5', 'b7'],
        LHstart: 3,
        RHstart: 4,
      },
      first: {
        LH: ['3', '1'],
        RH: ['3', 'b7', '1'],
        LHstart: 3,
        RHstart: 4,
      },
      second: {
        LH: ['5', '5'],
        RH: ['5', 'b7', '1', '3'],
        LHstart: 2,
        RHstart: 4,
      },
      third: {
        LH: ['b7'],
        RH: ['b7', '1', '3', '5'],
        LHstart: 2,
        RHstart: 3,
      },
    },
  },
  major7: {
    standard: {
      root: {
        LH: ['1', '7'],
        RH: ['1', '3', '5', '7'],
        LHstart: 3,
        RHstart: 4,
      },
      first: {
        LH: ['3', '1'],
        RH: ['3', '7', '1'],
        LHstart: 3,
        RHstart: 4,
      },
      second: {
        LH: ['5', '5'],
        RH: ['5', '7', '1', '3'],
        LHstart: 2,
        RHstart: 4,
      },
      third: {
        LH: ['7'],
        RH: ['7', '1', '3', '5'],
        LHstart: 2,
        RHstart: 3,
      },
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
      root: {
        LH: ['1', 'b7'],
        RH: ['1', 'b3', 'b5', '6'],
        LHstart: 3,
        RHstart: 4,
      },
      first: {
        LH: ['b3', '1'],
        RH: ['b3', 'b5', '6', '1'],
        LHstart: 3,
        RHstart: 4,
      },
    },
  },
};
