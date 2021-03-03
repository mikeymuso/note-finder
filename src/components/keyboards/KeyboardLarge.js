import React from 'react';

const KeyboardLarge = ({ chord, showNoteNumbering, showNoteNames }) => {
  const height = 436 / 2.5;
  const width = 3153 / 2.5;

  console.log(chord);

  const style = {
    fontFamily: 'HelveticaNeue, Helvetica Neue',
    fontSize: '20',
    blackKeyTextColor: 'white',
    whiteKeyColor: 'black',
    dot_stroke_LH: '#0018C4',
    dot_stroke_RH: '#620000',
    dot_fill_LH: '#6268FF',
    dot_fill_RH: '#ff0f0f',
    clear_dot_color: 'rgba(0,0,0,0)',
  };

  const setFillColor = noteNames => {
    let color = style.clear_dot_color;

    noteNames.forEach(note => {
      if (chord[note]) {
        if (chord[note] === 'LH') {
          color = style.dot_fill_LH;
        } else {
          color = style.dot_fill_RH;
        }
      }
    });

    return color;
  };

  const setStrokeColor = noteNames => {
    let color = style.clear_dot_color;

    noteNames.forEach(note => {
      if (chord[note]) {
        if (chord[note] === 'LH') {
          color = style.dot_stroke_LH;
        } else {
          color = style.dot_stroke_RH;
        }
      }
    });

    return color;
  };

  // This handles black note text
  const setBlackNoteText = noteName => {
    return chord[noteName] && showNoteNames ? 1 : 0;
  };

  const setWhiteNoteText = noteName => {
    if (!showNoteNames) return;

    if (showNoteNumbering) {
      const note = noteName.charAt(0);
      const symbol = noteName
        .split('')
        .slice(1)
        .filter(char => !char.match(/[0-9]/))
        .join('');
      const octave = noteName.split('').slice(-1);

      return (
        <>
          <tspan x="0" y="0">
            {note}
          </tspan>
          <tspan y="0" fontSize="16">
            {symbol}
          </tspan>
          <tspan y="0">{octave}</tspan>
        </>
      );
    } else {
      const name = noteName
        .split('')
        .filter(char => !char.match(/[0-9]/))
        .join('');
      return (
        <tspan x="6" y="0">
          {name}
        </tspan>
      );
    }
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 3153 436"
      >
        <g
          id="kbd-lg"
          className="keyboard-large-svg"
          transform="translate(0 -91)"
        >
          <g id="keys">
            <g id="white_keys">
              <g id="wk_octave_0">
                <g
                  id="A0"
                  transform="translate(0 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="B0"
                  transform="translate(61 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H60a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H59a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
              </g>
              <g id="wk_octave_1">
                <g
                  id="C1"
                  transform="translate(121 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="D1"
                  transform="translate(182 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="E1"
                  transform="translate(243 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H60a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H59a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="F1"
                  transform="translate(303 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="G1"
                  transform="translate(364 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H60a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H59a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="A1"
                  transform="translate(424 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="B1"
                  transform="translate(485 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
              </g>
              <g id="wk_octave_2">
                <g
                  id="C2"
                  transform="translate(546 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H60a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H59a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="D2"
                  transform="translate(606 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="E2"
                  transform="translate(667 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="F2"
                  transform="translate(728 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H60a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H59a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="G2"
                  transform="translate(788 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="A2"
                  transform="translate(849 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H60a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H59a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="B2"
                  transform="translate(909 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
              </g>
              <g id="wk_octave_3">
                <g
                  id="C3"
                  transform="translate(970 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="D3"
                  transform="translate(1031 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H60a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H59a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="E3"
                  transform="translate(1091 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="F3"
                  transform="translate(1152 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="G3"
                  transform="translate(1213 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H60a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H59a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="A3"
                  transform="translate(1273 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="B3"
                  transform="translate(1334 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
              </g>
              <g id="wk_octave_4">
                <g
                  id="C4"
                  transform="translate(1395 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H60a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H59a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="D4"
                  transform="translate(1455 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="E4"
                  transform="translate(1516 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H60a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H59a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="F4"
                  transform="translate(1576 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="G4"
                  transform="translate(1637 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="A4"
                  transform="translate(1698 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H60a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H59a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="B4"
                  transform="translate(1758 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
              </g>
              <g id="wk_octave_5">
                <g
                  id="C5"
                  transform="translate(1819 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="D5"
                  transform="translate(1880 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H60a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H59a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="E5"
                  transform="translate(1940 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="F5"
                  transform="translate(2001 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="G5"
                  transform="translate(2062 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H60a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H59a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="A5"
                  transform="translate(2122 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="B5"
                  transform="translate(2183 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H60a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H59a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
              </g>
              <g id="wk_octave_6">
                <g
                  id="C6"
                  transform="translate(2243 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="D6"
                  transform="translate(2304 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="E6"
                  transform="translate(2365 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H60a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H59a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="F6"
                  transform="translate(2425 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="G6"
                  transform="translate(2486 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="A6"
                  transform="translate(2547 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H60a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H59a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="B6"
                  transform="translate(2607 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
              </g>
              <g id="wk_octave_7">
                <g
                  id="C7"
                  transform="translate(2668 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H60a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H59a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="D7"
                  transform="translate(2728 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="E7"
                  transform="translate(2789 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="F7"
                  transform="translate(2850 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H60a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H59a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="G7"
                  transform="translate(2910 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="A7"
                  transform="translate(2971 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
                <g
                  id="B7"
                  transform="translate(3032 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H60a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H59a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
              </g>
              <g id="wk_octave_8">
                <g
                  id="C8"
                  transform="translate(3092 91)"
                  fill="#fff"
                  stroke="#525252"
                  strokeWidth="1"
                >
                  <path
                    d="M0,0H61a0,0,0,0,1,0,0V433a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,.5H60a.5.5,0,0,1,.5.5V433a2.5,2.5,0,0,1-2.5,2.5H3A2.5,2.5,0,0,1,.5,433V1A.5.5,0,0,1,1,.5Z"
                    fill="none"
                  />
                </g>
              </g>
            </g>
            <g id="black_keys">
              <g id="bk_octave_0">
                <rect
                  id="Bb0"
                  width="36"
                  height="266"
                  rx="3"
                  transform="translate(49 91)"
                />
              </g>
              <g id="bk_octave_1">
                <rect
                  id="Db1"
                  width="35"
                  height="266"
                  transform="translate(158 91)"
                />
                <rect
                  id="Eb1"
                  width="35"
                  height="266"
                  transform="translate(230 91)"
                />
                <rect
                  id="Gb1"
                  width="36"
                  height="266"
                  transform="translate(341 91)"
                />
                <rect
                  id="Ab1"
                  width="35"
                  height="266"
                  transform="translate(410 91)"
                />
                <rect
                  id="Bb1"
                  width="35"
                  height="266"
                  transform="translate(474 91)"
                />
              </g>
              <g id="bk_octave_2">
                <rect
                  id="Db2"
                  width="35"
                  height="266"
                  transform="translate(582 91)"
                />
                <rect
                  id="Eb2"
                  width="35"
                  height="266"
                  transform="translate(654 91)"
                />
                <rect
                  id="Gb2"
                  width="35"
                  height="266"
                  transform="translate(766 91)"
                />
                <rect
                  id="Ab2"
                  width="35"
                  height="266"
                  transform="translate(835 91)"
                />
                <rect
                  id="Bb2"
                  width="35"
                  height="266"
                  transform="translate(898 91)"
                />
              </g>
              <g id="bk_octave_3">
                <rect
                  id="Db3"
                  width="35"
                  height="266"
                  transform="translate(1007 91)"
                />
                <rect
                  id="Eb3"
                  width="35"
                  height="266"
                  transform="translate(1079 91)"
                />
                <rect
                  id="Gb3"
                  width="35"
                  height="266"
                  transform="translate(1190 91)"
                />
                <rect
                  id="Ab3"
                  width="35"
                  height="266"
                  transform="translate(1259 91)"
                />
                <rect
                  id="Bb3"
                  width="35"
                  height="266"
                  transform="translate(1323 91)"
                />
              </g>
              <g id="bk_octave_4">
                <rect
                  id="Db4"
                  width="35"
                  height="266"
                  transform="translate(1431 91)"
                />
                <rect
                  id="Eb4"
                  width="35"
                  height="266"
                  transform="translate(1503 91)"
                />
                <rect
                  id="Gb4"
                  width="35"
                  height="266"
                  transform="translate(1615 91)"
                />
                <rect
                  id="Ab4"
                  width="35"
                  height="266"
                  transform="translate(1683 91)"
                />
                <rect
                  id="Bb4"
                  width="35"
                  height="266"
                  transform="translate(1747 91)"
                />
              </g>
              <g id="bk_octave_5">
                <rect
                  id="Db5"
                  width="35"
                  height="266"
                  transform="translate(1856 91)"
                />
                <rect
                  id="Eb5"
                  width="36"
                  height="266"
                  transform="translate(1927 91)"
                />
                <rect
                  id="Gb5"
                  width="35"
                  height="266"
                  transform="translate(2039 91)"
                />
                <rect
                  id="Ab5"
                  width="35"
                  height="266"
                  transform="translate(2108 91)"
                />
                <rect
                  id="Bb5"
                  width="35"
                  height="266"
                  transform="translate(2172 91)"
                />
              </g>
              <g id="bk_octave_6">
                <rect
                  id="Db6"
                  width="35"
                  height="266"
                  transform="translate(2280 91)"
                />
                <rect
                  id="Eb6"
                  width="35"
                  height="266"
                  transform="translate(2352 91)"
                />
                <rect
                  id="Gb6"
                  width="35"
                  height="266"
                  transform="translate(2464 91)"
                />
                <rect
                  id="Ab6"
                  width="35"
                  height="266"
                  transform="translate(2532 91)"
                />
                <rect
                  id="Bb6"
                  width="37"
                  height="266"
                  transform="translate(2596 91)"
                />
              </g>
              <g id="bk_octave_7">
                <rect
                  id="Db7"
                  width="35"
                  height="266"
                  transform="translate(2705 91)"
                />
                <rect
                  id="Eb7"
                  width="35"
                  height="266"
                  transform="translate(2776 91)"
                />
                <rect
                  id="Gb7"
                  width="35"
                  height="266"
                  transform="translate(2888 91)"
                />
                <rect
                  id="Ab7"
                  width="35"
                  height="266"
                  transform="translate(2957 91)"
                />
                <rect
                  id="Bb7"
                  width="35"
                  height="266"
                  transform="translate(3022 91)"
                />
              </g>
            </g>
          </g>
          <g id="dots">
            <g id="white_dots">
              <g id="wd_octave_0">
                <g
                  id="dot_A0"
                  transform="translate(11 397)"
                  fill={setFillColor(['A0', 'Bdf0'])}
                  stroke={setStrokeColor(['A0', 'Bdf0'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_B0"
                  transform="translate(72 397)"
                  fill={setFillColor(['B0', 'Cb1'])}
                  stroke={setStrokeColor(['B0', 'Cb1'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
              </g>
              <g id="wd_octave_1">
                <g
                  id="dot_C1"
                  transform="translate(132 397)"
                  fill={setFillColor(['C1', 'Bs0', 'Ddf1'])}
                  stroke={setStrokeColor(['C1', 'Bs0', 'Ddf1'])}
                  strokeWidth="1"
                >
                  <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                  <circle cx="19.5" cy="19.5" r="19" fill="none" />
                </g>
                <g
                  id="dot_D1"
                  transform="translate(193 397)"
                  fill={setFillColor(['D1', 'Cds1', 'Edf1'])}
                  stroke={setStrokeColor(['D1', 'Cds1', 'Edf1'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_E1"
                  transform="translate(254 397)"
                  fill={setFillColor(['E1', 'Fb1'])}
                  stroke={setStrokeColor(['E1', 'Fb1'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_F1"
                  transform="translate(314 397)"
                  fill={setFillColor(['F1', 'Es1', 'Gdf1'])}
                  stroke={setStrokeColor(['F1', 'Es1', 'Gdf1'])}
                  strokeWidth="1"
                >
                  <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                  <circle cx="19.5" cy="19.5" r="19" fill="none" />
                </g>
                <g
                  id="dot_G1"
                  transform="translate(375 397)"
                  fill={setFillColor(['G1', 'Fds1', 'Adf1'])}
                  stroke={setStrokeColor(['G1', 'Fds1', 'Adf1'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_A1"
                  transform="translate(436 397)"
                  fill={setFillColor(['A1', 'Bdf1'])}
                  stroke={setStrokeColor(['A1', 'Bdf1'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_B1"
                  transform="translate(496 397)"
                  fill={setFillColor(['B1', 'Cb2'])}
                  stroke={setStrokeColor(['B1', 'Cb2'])}
                  strokeWidth="1"
                >
                  <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                  <circle cx="19.5" cy="19.5" r="19" fill="none" />
                </g>
              </g>
              <g id="wd_octave_2">
                <g
                  id="dot_C2"
                  transform="translate(557 397)"
                  fill={setFillColor(['C2', 'Bs1', 'Ddf2'])}
                  stroke={setStrokeColor(['C2', 'Bs1', 'Ddf2'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_D2"
                  transform="translate(617 397)"
                  fill={setFillColor(['D2', 'Cds2', 'Edf2'])}
                  stroke={setStrokeColor(['D2', 'Cds2', 'Edf2'])}
                  strokeWidth="1"
                >
                  <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                  <circle cx="19.5" cy="19.5" r="19" fill="none" />
                </g>
                <g
                  id="dot_E2"
                  transform="translate(678 397)"
                  fill={setFillColor(['E2', 'Fb2'])}
                  stroke={setStrokeColor(['E2', 'Fb2'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_F2"
                  transform="translate(729 397)"
                  fill={setFillColor(['F2', 'Es2', 'Gdf2'])}
                  stroke={setStrokeColor(['F2', 'Es2', 'Gdf2'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_G2"
                  transform="translate(799 397)"
                  fill={setFillColor(['G2', 'Fds2', 'Adf2'])}
                  stroke={setStrokeColor(['G2', 'Fds2', 'Adf2'])}
                  strokeWidth="1"
                >
                  <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                  <circle cx="19.5" cy="19.5" r="19" fill="none" />
                </g>
                <g
                  id="dot_A2"
                  transform="translate(860 397)"
                  fill={setFillColor(['A2', 'Bdf2'])}
                  stroke={setStrokeColor(['A2', 'Bdf2'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_B2"
                  transform="translate(921 397)"
                  fill={setFillColor(['B2', 'Cb3'])}
                  stroke={setStrokeColor(['B2', 'Cb3'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
              </g>
              <g id="wd_octave_3">
                <g
                  id="dot_C3"
                  transform="translate(981 397)"
                  fill={setFillColor(['C3', 'Bs2', 'Ddf3'])}
                  stroke={setStrokeColor(['C3', 'Bs2', 'Ddf3'])}
                  strokeWidth="1"
                >
                  <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                  <circle cx="19.5" cy="19.5" r="19" fill="none" />
                </g>
                <g
                  id="dot_D3"
                  transform="translate(1042 397)"
                  fill={setFillColor(['D3', 'Cds3', 'Edf3'])}
                  stroke={setStrokeColor(['D3', 'Cds3', 'Edf3'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_E3"
                  transform="translate(1103 397)"
                  fill={setFillColor(['E3', 'Fb3'])}
                  stroke={setStrokeColor(['E3', 'Fb3'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_F3"
                  transform="translate(1163 397)"
                  fill={setFillColor(['F3', 'Es3', 'Gdf3'])}
                  stroke={setStrokeColor(['F3', 'Es3', 'Gdf3'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_G3"
                  transform="translate(1224 397)"
                  fill={setFillColor(['G3', 'Fds3', 'Adf3'])}
                  stroke={setStrokeColor(['G3', 'Fds3', 'Adf3'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_A3"
                  transform="translate(1284 397)"
                  fill={setFillColor(['A3', 'Bdf3'])}
                  stroke={setStrokeColor(['A3', 'Bdf3'])}
                  strokeWidth="1"
                >
                  <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                  <circle cx="19.5" cy="19.5" r="19" fill="none" />
                </g>
                <g
                  id="dot_B3"
                  transform="translate(1345 397)"
                  fill={setFillColor(['B3', 'Cb4'])}
                  stroke={setStrokeColor(['B3', 'Cb4'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
              </g>
              <g id="wd_octave_4">
                <g
                  id="dot_C4"
                  transform="translate(1406 397)"
                  fill={setFillColor(['C4', 'Bs3', 'Ddf4'])}
                  stroke={setStrokeColor(['C4', 'Bs3', 'Ddf4'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_D4"
                  transform="translate(1466 397)"
                  fill={setFillColor(['D4', 'Cds4', 'Edf4'])}
                  stroke={setStrokeColor(['D4', 'Cds4', 'Edf4'])}
                  strokeWidth="1"
                >
                  <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                  <circle cx="19.5" cy="19.5" r="19" fill="none" />
                </g>
                <g
                  id="dot_E4"
                  transform="translate(1527 397)"
                  fill={setFillColor(['E4', 'Fb4'])}
                  stroke={setStrokeColor(['E4', 'Fb4'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_F4"
                  transform="translate(1588 397)"
                  fill={setFillColor(['F4', 'Es4', 'Gdf4'])}
                  stroke={setStrokeColor(['F4', 'Es4', 'Gdf4'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_G4"
                  transform="translate(1648 397)"
                  fill={setFillColor(['G4', 'Fds4', 'Adf4'])}
                  stroke={setStrokeColor(['G4', 'Fds4', 'Adf4'])}
                  strokeWidth="1"
                >
                  <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                  <circle cx="19.5" cy="19.5" r="19" fill="none" />
                </g>
                <g
                  id="dot_A4"
                  transform="translate(1709 397)"
                  fill={setFillColor(['A4', 'Bdf4'])}
                  stroke={setStrokeColor(['A4', 'Bdf4'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_B4"
                  transform="translate(1770 397)"
                  fill={setFillColor(['B4', 'Cb5'])}
                  stroke={setStrokeColor(['B4', 'Cb5'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
              </g>
              <g id="wd_octave_5">
                <g
                  id="dot_C5"
                  transform="translate(1830 397)"
                  fill={setFillColor(['C5', 'Bs4', 'Ddf5'])}
                  stroke={setStrokeColor(['C5', 'Bs4', 'Ddf5'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_D5"
                  transform="translate(1891 397)"
                  fill={setFillColor(['D5', 'Cds5', 'Edf5'])}
                  stroke={setStrokeColor(['D5', 'Cds5', 'Edf5'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_E5"
                  transform="translate(1951 397)"
                  fill={setFillColor(['E5', 'Fb5'])}
                  stroke={setStrokeColor(['E5', 'Fb5'])}
                  strokeWidth="1"
                >
                  <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                  <circle cx="19.5" cy="19.5" r="19" fill="none" />
                </g>
                <g
                  id="dot_F5"
                  transform="translate(2012 397)"
                  fill={setFillColor(['F5', 'Es5', 'Gdf5'])}
                  stroke={setStrokeColor(['F5', 'Es5', 'Gdf5'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_G5"
                  transform="translate(2073 397)"
                  fill={setFillColor(['G5', 'Fds5', 'Adf5'])}
                  stroke={setStrokeColor(['G5', 'Fds5', 'Adf5'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_A5"
                  transform="translate(2133 397)"
                  fill={setFillColor(['A5', 'Bdf5'])}
                  stroke={setStrokeColor(['A5', 'Bdf5'])}
                  strokeWidth="1"
                >
                  <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                  <circle cx="19.5" cy="19.5" r="19" fill="none" />
                </g>
                <g
                  id="dot_B5"
                  transform="translate(2194 397)"
                  fill={setFillColor(['B5', 'Cb6'])}
                  stroke={setStrokeColor(['B5', 'Cb6'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
              </g>
              <g id="wd_octave_6">
                <g
                  id="dot_C6"
                  transform="translate(2255 397)"
                  fill={setFillColor(['C6', 'Bs5', 'Ddf6'])}
                  stroke={setStrokeColor(['C6', 'Bs5', 'Ddf6'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_D6"
                  transform="translate(2315 397)"
                  fill={setFillColor(['D6', 'Cds6', 'Edf6'])}
                  stroke={setStrokeColor(['D6', 'Cds6', 'Edf6'])}
                  strokeWidth="1"
                >
                  <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                  <circle cx="19.5" cy="19.5" r="19" fill="none" />
                </g>
                <g
                  id="dot_E6"
                  transform="translate(2376 397)"
                  fill={setFillColor(['E6', 'Fb6'])}
                  stroke={setStrokeColor(['E6', 'Fb6'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_F6"
                  transform="translate(2436 397)"
                  fill={setFillColor(['F6', 'Es6', 'Gdf6'])}
                  stroke={setStrokeColor(['F6', 'Es6', 'Gdf6'])}
                  strokeWidth="1"
                >
                  <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                  <circle cx="19.5" cy="19.5" r="19" fill="none" />
                </g>
                <g
                  id="dot_G6"
                  transform="translate(2497 397)"
                  fill={setFillColor(['G6', 'Fds6', 'Adf6'])}
                  stroke={setStrokeColor(['G6', 'Fds6', 'Adf6'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_A6"
                  transform="translate(2558 397)"
                  fill={setFillColor(['A6', 'Bdf6'])}
                  stroke={setStrokeColor(['A6', 'Bdf6'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_B6"
                  transform="translate(2618 397)"
                  fill={setFillColor(['B6', 'Cb7'])}
                  stroke={setStrokeColor(['B6', 'Cb7'])}
                  strokeWidth="1"
                >
                  <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                  <circle cx="19.5" cy="19.5" r="19" fill="none" />
                </g>
              </g>
              <g id="wd_octave_7">
                <g
                  id="dot_C7"
                  transform="translate(2679 397)"
                  fill={setFillColor(['C7', 'Bs6', 'Ddf7'])}
                  stroke={setStrokeColor(['C7', 'Bs6', 'Ddf7'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_D7"
                  transform="translate(2740 397)"
                  fill={setFillColor(['D7', 'Cds7', 'Edf7'])}
                  stroke={setStrokeColor(['D7', 'Cds7', 'Edf7'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_E7"
                  transform="translate(2800 397)"
                  fill={setFillColor(['E7', 'Fb7'])}
                  stroke={setStrokeColor(['E7', 'Fb7'])}
                  strokeWidth="1"
                >
                  <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                  <circle cx="19.5" cy="19.5" r="19" fill="none" />
                </g>
                <g
                  id="dot_F7"
                  transform="translate(2861 397)"
                  fill={setFillColor(['F7', 'Es7', 'Gdf7'])}
                  stroke={setStrokeColor(['F7', 'Es7', 'Gdf7'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_G7"
                  transform="translate(2922 397)"
                  fill={setFillColor(['G7', 'Fds7', 'Adf7'])}
                  stroke={setStrokeColor(['G7', 'Fds7', 'Adf7'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_A7"
                  transform="translate(2982 397)"
                  fill={setFillColor(['A7', 'Bdf7'])}
                  stroke={setStrokeColor(['A7', 'Bdf7'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
                <g
                  id="dot_B7"
                  transform="translate(3043 397)"
                  fill={setFillColor(['B7', 'Cb8'])}
                  stroke={setStrokeColor(['B7', 'Cb8'])}
                  strokeWidth="1"
                >
                  <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                  <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
                </g>
              </g>
              <g id="wd_octave_8">
                <g
                  id="dot_C8"
                  transform="translate(3103 397)"
                  fill={setFillColor(['C8', 'Bs7', 'Ddf8'])}
                  stroke={setStrokeColor(['C8', 'Bs7', 'Ddf8'])}
                  strokeWidth="1"
                >
                  <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                  <circle cx="19.5" cy="19.5" r="19" fill="none" />
                </g>
              </g>
            </g>
            <g id="black_dots">
              <g id="bd_octave_0">
                <g
                  id="dot_Bb0"
                  transform="translate(53 289)"
                  fill={setFillColor(['Bb0', 'As0'])}
                  stroke={setStrokeColor(['Bb0', 'As0'])}
                  strokeWidth="1"
                >
                  <ellipse cx="14" cy="14.5" rx="14" ry="14.5" stroke="none" />
                  <ellipse cx="14" cy="14.5" rx="13.5" ry="14" fill="none" />
                </g>
              </g>
              <g id="bd_octave_1">
                <g
                  id="dot_Db1"
                  transform="translate(161 289)"
                  fill={setFillColor(['Db1', 'Cs1'])}
                  stroke={setStrokeColor(['Db1', 'Cs1'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
                <g
                  id="dot_Eb1"
                  transform="translate(233 289)"
                  fill={setFillColor(['Eb1', 'Ds1'])}
                  stroke={setStrokeColor(['Eb1', 'Ds1'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
                <g
                  id="dot_Gb1"
                  transform="translate(345 289)"
                  fill={setFillColor(['Gb1', 'Fs1'])}
                  stroke={setStrokeColor(['Gb1', 'Fs1'])}
                  strokeWidth="1"
                >
                  <ellipse cx="14" cy="14.5" rx="14" ry="14.5" stroke="none" />
                  <ellipse cx="14" cy="14.5" rx="13.5" ry="14" fill="none" />
                </g>
                <g
                  id="dot_Ab1"
                  transform="translate(413 289)"
                  fill={setFillColor(['Ab1', 'Gs1'])}
                  stroke={setStrokeColor(['Ab1', 'Gs1'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
                <g
                  id="dot_Bb1"
                  transform="translate(477 289)"
                  fill={setFillColor(['Bb1', 'As1'])}
                  stroke={setStrokeColor(['Bb1', 'As1'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
              </g>
              <g id="bd_octave_2">
                <g
                  id="dot_Db2"
                  transform="translate(586 289)"
                  fill={setFillColor(['Db2', 'Cs2'])}
                  stroke={setStrokeColor(['Db2', 'Cs2'])}
                  strokeWidth="1"
                >
                  <ellipse cx="14" cy="14.5" rx="14" ry="14.5" stroke="none" />
                  <ellipse cx="14" cy="14.5" rx="13.5" ry="14" fill="none" />
                </g>
                <g
                  id="dot_Eb2"
                  transform="translate(657 289)"
                  fill={setFillColor(['Eb2', 'Ds2'])}
                  stroke={setStrokeColor(['Eb2', 'Ds2'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
                <g
                  id="dot_Gb2"
                  transform="translate(769 289)"
                  fill={setFillColor(['Gb2', 'Fs2'])}
                  stroke={setStrokeColor(['Gb2', 'Fs2'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
                <g
                  id="dot_Ab2"
                  transform="translate(838 289)"
                  fill={setFillColor(['Ab2', 'Gs2'])}
                  stroke={setStrokeColor(['Ab2', 'Gs2'])}
                  strokeWidth="1"
                >
                  <ellipse cx="14" cy="14.5" rx="14" ry="14.5" stroke="none" />
                  <ellipse cx="14" cy="14.5" rx="13.5" ry="14" fill="none" />
                </g>
                <g
                  id="dot_Bb2"
                  transform="translate(902 289)"
                  fill={setFillColor(['Bb2', 'As2'])}
                  stroke={setStrokeColor(['Bb2', 'As2'])}
                  strokeWidth="1"
                >
                  <ellipse cx="14" cy="14.5" rx="14" ry="14.5" stroke="none" />
                  <ellipse cx="14" cy="14.5" rx="13.5" ry="14" fill="none" />
                </g>
              </g>
              <g id="bd_octave_3">
                <g
                  id="dot_Db3"
                  transform="translate(1010 289)"
                  fill={setFillColor(['Db3', 'Cs3'])}
                  stroke={setStrokeColor(['Db3', 'Cs3'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
                <g
                  id="dot_Eb3"
                  transform="translate(1082 289)"
                  fill={setFillColor(['Eb3', 'Ds3'])}
                  stroke={setStrokeColor(['Eb3', 'Ds3'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
                <g
                  id="dot_Gb3"
                  transform="translate(1194 289)"
                  fill={setFillColor(['Gb3', 'Fs3'])}
                  stroke={setStrokeColor(['Gb3', 'Fs3'])}
                  strokeWidth="1"
                >
                  <ellipse cx="14" cy="14.5" rx="14" ry="14.5" stroke="none" />
                  <ellipse cx="14" cy="14.5" rx="13.5" ry="14" fill="none" />
                </g>
                <g
                  id="dot_Ab3"
                  transform="translate(1262 289)"
                  fill={setFillColor(['Ab3', 'Gs3'])}
                  stroke={setStrokeColor(['Ab3', 'Gs3'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
                <g
                  id="dot_Bb3"
                  transform="translate(1326 289)"
                  fill={setFillColor(['Bb3', 'As3'])}
                  stroke={setStrokeColor(['Bb3', 'As3'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
              </g>
              <g id="bd_octave_4">
                <g
                  id="dot_Db4"
                  transform="translate(1434 289)"
                  fill={setFillColor(['Db4', 'Cs4'])}
                  stroke={setStrokeColor(['Db4', 'Cs4'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
                <g
                  id="dot_Eb4"
                  transform="translate(1506 289)"
                  fill={setFillColor(['Eb4', 'Ds4'])}
                  stroke={setStrokeColor(['Eb4', 'Ds4'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
                <g
                  id="dot_Gb4"
                  transform="translate(1618 289)"
                  fill={setFillColor(['Gb4', 'Fs4'])}
                  stroke={setStrokeColor(['Gb4', 'Fs4'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
                <g
                  id="dot_Ab4"
                  transform="translate(1687 289)"
                  fill={setFillColor(['Ab4', 'Gs4'])}
                  stroke={setStrokeColor(['Ab4', 'Gs4'])}
                  strokeWidth="1"
                >
                  <ellipse cx="14" cy="14.5" rx="14" ry="14.5" stroke="none" />
                  <ellipse cx="14" cy="14.5" rx="13.5" ry="14" fill="none" />
                </g>
                <g
                  id="dot_Bb4"
                  transform="translate(1750 289)"
                  fill={setFillColor(['Bb4', 'As4'])}
                  stroke={setStrokeColor(['Bb4', 'As4'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
              </g>
              <g id="bd_octave_5">
                <g
                  id="dot_Db5"
                  transform="translate(1859 289)"
                  fill={setFillColor(['Db5', 'Cs5'])}
                  stroke={setStrokeColor(['Db5', 'Cs5'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
                <g
                  id="dot_Eb5"
                  transform="translate(1931 289)"
                  fill={setFillColor(['Eb5', 'Ds5'])}
                  stroke={setStrokeColor(['Eb5', 'Ds5'])}
                  strokeWidth="1"
                >
                  <ellipse cx="14" cy="14.5" rx="14" ry="14.5" stroke="none" />
                  <ellipse cx="14" cy="14.5" rx="13.5" ry="14" fill="none" />
                </g>
                <g
                  id="dot_Gb5"
                  transform="translate(2042 289)"
                  fill={setFillColor(['Gb5', 'Fs5'])}
                  stroke={setStrokeColor(['Gb5', 'Fs5'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
                <g
                  id="dot_Ab5"
                  transform="translate(2111 289)"
                  fill={setFillColor(['Ab5', 'Gs5'])}
                  stroke={setStrokeColor(['Ab5', 'Gs5'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
                <g
                  id="dot_Bb5"
                  transform="translate(2175 289)"
                  fill={setFillColor(['Bb5', 'As5'])}
                  stroke={setStrokeColor(['Bb5', 'As5'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
              </g>
              <g id="bd_octave_6">
                <g
                  id="dot_Db6"
                  transform="translate(2283 289)"
                  fill={setFillColor(['Db6', 'Cs6'])}
                  stroke={setStrokeColor(['Db6', 'Cs6'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
                <g
                  id="dot_Eb6"
                  transform="translate(2355 289)"
                  fill={setFillColor(['Eb6', 'Ds6'])}
                  stroke={setStrokeColor(['Eb6', 'Ds6'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
                <g
                  id="dot_Gb6"
                  transform="translate(2467 289)"
                  fill={setFillColor(['Gb6', 'Fs6'])}
                  stroke={setStrokeColor(['Gb6', 'Fs6'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
                <g
                  id="dot_Ab6"
                  transform="translate(2535 289)"
                  fill={setFillColor(['Ab6', 'Gs6'])}
                  stroke={setStrokeColor(['Ab6', 'Gs6'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
                <g
                  id="dot_Bb6"
                  transform="translate(2601 289)"
                  fill={setFillColor(['Bb6', 'As6'])}
                  stroke={setStrokeColor(['Bb6', 'As6'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
              </g>
              <g id="bd_octave_7">
                <g
                  id="dot_Db7"
                  transform="translate(2708 289)"
                  fill={setFillColor(['Db7', 'Cs7'])}
                  stroke={setStrokeColor(['Db7', 'Cs7'])}
                  strokeWidth="1"
                >
                  <ellipse cx="14" cy="14.5" rx="14" ry="14.5" stroke="none" />
                  <ellipse cx="14" cy="14.5" rx="13.5" ry="14" fill="none" />
                </g>
                <g
                  id="dot_Eb7"
                  transform="translate(2780 289)"
                  fill={setFillColor(['Eb7', 'Ds7'])}
                  stroke={setStrokeColor(['Eb7', 'Ds7'])}
                  strokeWidth="1"
                >
                  <ellipse cx="14" cy="14.5" rx="14" ry="14.5" stroke="none" />
                  <ellipse cx="14" cy="14.5" rx="13.5" ry="14" fill="none" />
                </g>
                <g
                  id="dot_Gb7"
                  transform="translate(2891 289)"
                  fill={setFillColor(['Gb7', 'Fs7'])}
                  stroke={setStrokeColor(['Gb7', 'Fs7'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
                <g
                  id="dot_Ab7"
                  transform="translate(2960 289)"
                  fill={setFillColor(['Ab7', 'Gs7'])}
                  stroke={setStrokeColor(['Ab7', 'Gs7'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
                <g
                  id="dot_Bb7"
                  transform="translate(3025 289)"
                  fill={setFillColor(['Bb7', 'As7'])}
                  stroke={setStrokeColor(['Bb7', 'As7'])}
                  strokeWidth="1"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="14" fill="none" />
                </g>
              </g>
            </g>
          </g>
          <g id="text">
            <g id="black_key_text">
              <g id="bkt_octave_0">
                <text
                  id="text_As0"
                  transform="translate(53 263)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('As0')}
                >
                  <tspan x="0" y="0">
                    A#
                  </tspan>
                </text>
                <text
                  id="text_Bb0"
                  transform="translate(53 263)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bb0')}
                >
                  <tspan x="0" y="0">
                    Bb
                  </tspan>
                </text>
              </g>
              <g id="bkt_octave_1">
                <text
                  id="text_Cs1"
                  transform="translate(163 263)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cs1')}
                >
                  <tspan x="0" y="0">
                    C#
                  </tspan>
                </text>
                <text
                  id="text_Db1"
                  transform="translate(163 263)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Db1')}
                >
                  <tspan x="0" y="0">
                    Db
                  </tspan>
                </text>
                <text
                  id="text_Ds1"
                  transform="translate(235 263)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ds1')}
                >
                  <tspan x="0" y="0">
                    D#
                  </tspan>
                </text>
                <text
                  id="text_Eb1"
                  transform="translate(235 263)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Eb1')}
                >
                  <tspan x="0" y="0">
                    Eb
                  </tspan>
                </text>
                <text
                  id="text_Fs1"
                  transform="translate(346 263)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fs1')}
                >
                  <tspan x="0" y="0">
                    F#
                  </tspan>
                </text>
                <text
                  id="text_Gb1"
                  transform="translate(346 263)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gb1')}
                >
                  <tspan x="0" y="0">
                    Gb
                  </tspan>
                </text>
                <text
                  id="text_Gs1"
                  transform="translate(416 263)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gs1')}
                >
                  <tspan x="0" y="0">
                    G#
                  </tspan>
                </text>
                <text
                  id="text_Ab1"
                  transform="translate(416 263)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ab1')}
                >
                  <tspan x="0" y="0">
                    Ab
                  </tspan>
                </text>
                <text
                  id="text_As1"
                  transform="translate(478 263)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('As1')}
                >
                  <tspan x="0" y="0">
                    A#
                  </tspan>
                </text>
                <text
                  id="text_Bb1"
                  transform="translate(478 263)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bb1')}
                >
                  <tspan x="0" y="0">
                    Bb
                  </tspan>
                </text>
              </g>
              <g id="bkt_octave_2">
                <text
                  id="text_Cs2"
                  transform="translate(588 262)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cs2')}
                >
                  <tspan x="0" y="0">
                    C#
                  </tspan>
                </text>
                <text
                  id="text_Db2"
                  transform="translate(588 262)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Db2')}
                >
                  <tspan x="0" y="0">
                    Db
                  </tspan>
                </text>
                <text
                  id="text_Ds2"
                  transform="translate(660 262)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ds2')}
                >
                  <tspan x="0" y="0">
                    D#
                  </tspan>
                </text>
                <text
                  id="text_Eb2"
                  transform="translate(660 262)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Eb2')}
                >
                  <tspan x="0" y="0">
                    Eb
                  </tspan>
                </text>
                <text
                  id="text_Fs2"
                  transform="translate(771 262)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fs2')}
                >
                  <tspan x="0" y="0">
                    F#
                  </tspan>
                </text>
                <text
                  id="text_Gb2"
                  transform="translate(771 262)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gb2')}
                >
                  <tspan x="0" y="0">
                    Gb
                  </tspan>
                </text>
                <text
                  id="text_Gs2"
                  transform="translate(840 262)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gs2')}
                >
                  <tspan x="0" y="0">
                    G#
                  </tspan>
                </text>
                <text
                  id="text_Ab2"
                  transform="translate(840 262)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ab2')}
                >
                  <tspan x="0" y="0">
                    Ab
                  </tspan>
                </text>
                <text
                  id="text_As2"
                  transform="translate(904 262)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('As2')}
                >
                  <tspan x="0" y="0">
                    A#
                  </tspan>
                </text>
                <text
                  id="text_Bb2"
                  transform="translate(904 262)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bb2')}
                >
                  <tspan x="0" y="0">
                    Bb
                  </tspan>
                </text>
              </g>
              <g id="bkt_octave_3">
                <text
                  id="text_Cs3"
                  transform="translate(1012 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cs3')}
                >
                  <tspan x="0" y="0">
                    C#
                  </tspan>
                </text>
                <text
                  id="text_Db3"
                  transform="translate(1012 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Db3')}
                >
                  <tspan x="0" y="0">
                    Db
                  </tspan>
                </text>
                <text
                  id="text_Ds3"
                  transform="translate(1084 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ds3')}
                >
                  <tspan x="0" y="0">
                    D#
                  </tspan>
                </text>
                <text
                  id="text_Eb3"
                  transform="translate(1084 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Eb3')}
                >
                  <tspan x="0" y="0">
                    Eb
                  </tspan>
                </text>
                <text
                  id="text_Fs3"
                  transform="translate(1195 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fs3')}
                >
                  <tspan x="0" y="0">
                    F#
                  </tspan>
                </text>
                <text
                  id="text_Gb3"
                  transform="translate(1195 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gb3')}
                >
                  <tspan x="0" y="0">
                    Gb
                  </tspan>
                </text>
                <text
                  id="text_Gs3"
                  transform="translate(1265 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gs3')}
                >
                  <tspan x="0" y="0">
                    G#
                  </tspan>
                </text>
                <text
                  id="text_Ab3"
                  transform="translate(1265 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ab3')}
                >
                  <tspan x="0" y="0">
                    Ab
                  </tspan>
                </text>
                <text
                  id="text_As3"
                  transform="translate(1327 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('As3')}
                >
                  <tspan x="0" y="0">
                    A#
                  </tspan>
                </text>
                <text
                  id="text_Bb3"
                  transform="translate(1327 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bb3')}
                >
                  <tspan x="0" y="0">
                    Bb
                  </tspan>
                </text>
              </g>
              <g id="bkt_octave_4">
                <text
                  id="text_Cs4"
                  transform="translate(1437 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cs4')}
                >
                  <tspan x="0" y="0">
                    C#
                  </tspan>
                </text>
                <text
                  id="text_Db4"
                  transform="translate(1437 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Db4')}
                >
                  <tspan x="0" y="0">
                    Db
                  </tspan>
                </text>
                <text
                  id="text_Ds4"
                  transform="translate(1509 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ds4')}
                >
                  <tspan x="0" y="0">
                    D#
                  </tspan>
                </text>
                <text
                  id="text_Eb4"
                  transform="translate(1509 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Eb4')}
                >
                  <tspan x="0" y="0">
                    Eb
                  </tspan>
                </text>
                <text
                  id="text_Fs4"
                  transform="translate(1620 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fs4')}
                >
                  <tspan x="0" y="0">
                    F#
                  </tspan>
                </text>
                <text
                  id="text_Gb4"
                  transform="translate(1620 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gb4')}
                >
                  <tspan x="0" y="0">
                    Gb
                  </tspan>
                </text>
                <text
                  id="text_Gs4"
                  transform="translate(1688 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gs4')}
                >
                  <tspan x="0" y="0">
                    G#
                  </tspan>
                </text>
                <text
                  id="text_Ab4"
                  transform="translate(1689 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ab4')}
                >
                  <tspan x="0" y="0">
                    Ab
                  </tspan>
                </text>
                <text
                  id="text_As4"
                  transform="translate(1753 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('As4')}
                >
                  <tspan x="0" y="0">
                    A#
                  </tspan>
                </text>
                <text
                  id="text_Bb4"
                  transform="translate(1753 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bb4')}
                >
                  <tspan x="0" y="0">
                    Bb
                  </tspan>
                </text>
              </g>
              <g id="bkt_octave_5">
                <text
                  id="text_Cs5"
                  transform="translate(1861 265)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cs5')}
                >
                  <tspan x="0" y="0">
                    C#
                  </tspan>
                </text>
                <text
                  id="text_Db5"
                  transform="translate(1861 265)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Db5')}
                >
                  <tspan x="0" y="0">
                    Db
                  </tspan>
                </text>
                <text
                  id="text_Ds5"
                  transform="translate(1933 265)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ds5')}
                >
                  <tspan x="0" y="0">
                    D#
                  </tspan>
                </text>
                <text
                  id="text_Eb5"
                  transform="translate(1933 265)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Eb5')}
                >
                  <tspan x="0" y="0">
                    Eb
                  </tspan>
                </text>
                <text
                  id="text_Fs5"
                  transform="translate(2044 265)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fs5')}
                >
                  <tspan x="0" y="0">
                    F#
                  </tspan>
                </text>
                <text
                  id="text_Gb5"
                  transform="translate(2044 265)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gb5')}
                >
                  <tspan x="0" y="0">
                    Gb
                  </tspan>
                </text>
                <text
                  id="text_Gs5"
                  transform="translate(2114 265)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gs5')}
                >
                  <tspan x="0" y="0">
                    G#
                  </tspan>
                </text>
                <text
                  id="text_Ab5"
                  transform="translate(2114 265)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ab5')}
                >
                  <tspan x="0" y="0">
                    Ab
                  </tspan>
                </text>
                <text
                  id="text_As5"
                  transform="translate(2176 265)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('As5')}
                >
                  <tspan x="0" y="0">
                    A#
                  </tspan>
                </text>
                <text
                  id="text_Bb5"
                  transform="translate(2176 265)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bb5')}
                >
                  <tspan x="0" y="0">
                    Bb
                  </tspan>
                </text>
              </g>
              <g id="bkt_octave_6">
                <text
                  id="text_Cs6"
                  transform="translate(2286 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cs6')}
                >
                  <tspan x="0" y="0">
                    C#
                  </tspan>
                </text>
                <text
                  id="text_Db6"
                  transform="translate(2286 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Db6')}
                >
                  <tspan x="0" y="0">
                    Db
                  </tspan>
                </text>
                <text
                  id="text_Ds6"
                  transform="translate(2358 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ds6')}
                >
                  <tspan x="0" y="0">
                    D#
                  </tspan>
                </text>
                <text
                  id="text_Eb6"
                  transform="translate(2358 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Eb6')}
                >
                  <tspan x="0" y="0">
                    Eb
                  </tspan>
                </text>
                <text
                  id="text_Fs6"
                  transform="translate(2469 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fs6')}
                >
                  <tspan x="0" y="0">
                    F#
                  </tspan>
                </text>
                <text
                  id="text_Gb6"
                  transform="translate(2469 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gb6')}
                >
                  <tspan x="0" y="0">
                    Gb
                  </tspan>
                </text>
                <text
                  id="text_Gs6"
                  transform="translate(2538 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gs6')}
                >
                  <tspan x="0" y="0">
                    G#
                  </tspan>
                </text>
                <text
                  id="text_Ab6"
                  transform="translate(2538 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ab6')}
                >
                  <tspan x="0" y="0">
                    Ab
                  </tspan>
                </text>
                <text
                  id="text_As6"
                  transform="translate(2602 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('As6')}
                >
                  <tspan x="0" y="0">
                    A#
                  </tspan>
                </text>
                <text
                  id="text_Bb6"
                  transform="translate(2602 264)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bb6')}
                >
                  <tspan x="0" y="0">
                    Bb
                  </tspan>
                </text>
              </g>
              <g id="bkt_octave_7">
                <text
                  id="text_Cs7"
                  transform="translate(2711 266)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cs7')}
                >
                  <tspan x="0" y="0">
                    C#
                  </tspan>
                </text>
                <text
                  id="text_Db7"
                  transform="translate(2711 266)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Db7')}
                >
                  <tspan x="0" y="0">
                    Db
                  </tspan>
                </text>
                <text
                  id="text_Ds7"
                  transform="translate(2783 266)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ds7')}
                >
                  <tspan x="0" y="0">
                    D#
                  </tspan>
                </text>
                <text
                  id="text_Eb7"
                  transform="translate(2783 266)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Eb7')}
                >
                  <tspan x="0" y="0">
                    Eb
                  </tspan>
                </text>
                <text
                  id="text_Fs7"
                  transform="translate(2894 266)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fs7')}
                >
                  <tspan x="0" y="0">
                    F#
                  </tspan>
                </text>
                <text
                  id="text_Gb7"
                  transform="translate(2894 266)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gb7')}
                >
                  <tspan x="0" y="0">
                    Gb
                  </tspan>
                </text>
                <text
                  id="text_Gs7"
                  transform="translate(2964 266)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gs7')}
                >
                  <tspan x="0" y="0">
                    G#
                  </tspan>
                </text>
                <text
                  id="text_Ab7"
                  transform="translate(2964 266)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ab7')}
                >
                  <tspan x="0" y="0">
                    Ab
                  </tspan>
                </text>
                <text
                  id="text_As7"
                  transform="translate(3026 266)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('As7')}
                >
                  <tspan x="0" y="0">
                    A#
                  </tspan>
                </text>
                <text
                  id="text_Bb7"
                  transform="translate(3026 266)"
                  fill={style.blackKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bb7')}
                >
                  <tspan x="0" y="0">
                    Bb
                  </tspan>
                </text>
              </g>
            </g>
            <g id="white_key_text">
              <g id="wkt_octave_0">
                <text
                  id="text_A0"
                  transform="translate(20 494)"
                  fill={style.whiteKeyTextColor}
                  fontSize={style.fontSize}
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('A0')}
                >
                  {setWhiteNoteText('A0')}
                </text>
                <text
                  id="text_Bdf0"
                  transform="translate(10 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bdf0')}
                >
                  {setWhiteNoteText('Bbb0')}
                </text>
                <text
                  id="text_B0"
                  transform="translate(80 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('B0')}
                >
                  {setWhiteNoteText('B0')}
                </text>
                <text
                  id="text_Bs0"
                  transform="translate(136 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bs0')}
                >
                  {setWhiteNoteText('B#0')}
                </text>
              </g>
              <g id="wkt_octave_1">
                <text
                  id="text_Cb1"
                  transform="translate(74 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cb1')}
                >
                  {setWhiteNoteText('Cb1')}
                </text>
                <text
                  id="text_C1"
                  transform="translate(140 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('C1')}
                >
                  {setWhiteNoteText('C1')}
                </text>
                <text
                  id="text_Ddf1"
                  transform="translate(131 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ddf1')}
                >
                  {setWhiteNoteText('Dbb1')}
                </text>
                <text
                  id="text_Cds1"
                  transform="translate(191 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cds1')}
                >
                  {setWhiteNoteText('C##1')}
                </text>
                <text
                  id="text_D1"
                  transform="translate(201 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('D1')}
                >
                  {setWhiteNoteText('D1')}
                </text>
                <text
                  id="text_Edf1"
                  transform="translate(192 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Edf1')}
                >
                  {setWhiteNoteText('Ebb1')}
                </text>
                <text
                  id="text_E1"
                  transform="translate(262 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('E1')}
                >
                  {setWhiteNoteText('E1')}
                </text>
                <text
                  id="text_Fb1"
                  transform="translate(257 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fb1')}
                >
                  {setWhiteNoteText('Fb1')}
                </text>
                <text
                  id="text_Es1"
                  transform="translate(318 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Es1')}
                >
                  {setWhiteNoteText('E#1')}
                </text>
                <text
                  id="text_F1"
                  transform="translate(323 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('F1')}
                >
                  {setWhiteNoteText('F1')}
                </text>
                <text
                  id="text_Gdf1"
                  transform="translate(311 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gdf1')}
                >
                  {setWhiteNoteText('Gbb1')}
                </text>
                <text
                  id="text_Fds1"
                  transform="translate(374 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fds1')}
                >
                  {setWhiteNoteText('F##1')}
                </text>
                <text
                  id="text_G1"
                  transform="translate(382 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('G1')}
                >
                  {setWhiteNoteText('G1')}
                </text>
                <text
                  id="text_Bdf1"
                  transform="translate(433 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bdf1')}
                >
                  {setWhiteNoteText('Bbb1')}
                </text>
                <text
                  id="text_A1"
                  transform="translate(443 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('A1')}
                >
                  {setWhiteNoteText('A1')}
                </text>
                <text
                  id="text_B1"
                  transform="translate(503 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('B1')}
                >
                  {setWhiteNoteText('B1')}
                </text>
                <text
                  id="text_Bs1"
                  transform="translate(560 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bs1')}
                >
                  {setWhiteNoteText('B#1')}
                </text>
              </g>
              <g id="wkt_octave_2">
                <text
                  id="text_Cb2"
                  transform="translate(497 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cb2')}
                >
                  {setWhiteNoteText('Cb2')}
                </text>
                <text
                  id="text_C2"
                  transform="translate(564 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('C2')}
                >
                  {setWhiteNoteText('C2')}
                </text>
                <text
                  id="text_Ddf2"
                  transform="translate(555 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ddf2')}
                >
                  {setWhiteNoteText('Dbb2')}
                </text>
                <text
                  id="text_Cds2"
                  transform="translate(613 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cds2')}
                >
                  {setWhiteNoteText('C##2')}
                </text>
                <text
                  id="text_D2"
                  transform="translate(625 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('D2')}
                >
                  {setWhiteNoteText('D2')}
                </text>
                <text
                  id="text_Edf2"
                  transform="translate(616 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Edf2')}
                >
                  {setWhiteNoteText('Ebb2')}
                </text>
                <text
                  id="text_E2"
                  transform="translate(686 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('E2')}
                >
                  {setWhiteNoteText('E2')}
                </text>
                <text
                  id="text_Fb2"
                  transform="translate(681 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fb2')}
                >
                  {setWhiteNoteText('Fb2')}
                </text>
                <text
                  id="text_Es2"
                  transform="translate(742 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Es2')}
                >
                  {setWhiteNoteText('E#2')}
                </text>
                <text
                  id="text_F2"
                  transform="translate(747 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('F2')}
                >
                  {setWhiteNoteText('F2')}
                </text>
                <text
                  id="text_Gdf2"
                  transform="translate(735 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gdf2')}
                >
                  {setWhiteNoteText('Gbb2')}
                </text>
                <text
                  id="text_Fds2"
                  transform="translate(798 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fds2')}
                >
                  {setWhiteNoteText('F##2')}
                </text>
                <text
                  id="text_G2"
                  transform="translate(806 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('G2')}
                >
                  {setWhiteNoteText('G2')}
                </text>
                <text
                  id="text_A2"
                  transform="translate(867 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('A2')}
                >
                  {setWhiteNoteText('A2')}
                </text>
                <text
                  id="text_Bdf2"
                  transform="translate(857 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bdf2')}
                >
                  {setWhiteNoteText('Bbb2')}
                </text>
                <text
                  id="text_B2"
                  transform="translate(927 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('B2')}
                >
                  {setWhiteNoteText('B2')}
                </text>
                <text
                  id="text_Bs2"
                  transform="translate(983 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bs2')}
                >
                  {setWhiteNoteText('B#2')}
                </text>
              </g>
              <g id="wkt_octave_3">
                <text
                  id="text_Cb3"
                  transform="translate(921 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cb3')}
                >
                  {setWhiteNoteText('Cb3')}
                </text>
                <text
                  id="text_C3"
                  transform="translate(987 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('C3')}
                >
                  {setWhiteNoteText('C3')}
                </text>
                <text
                  id="text_Ddf3"
                  transform="translate(979 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ddf3')}
                >
                  {setWhiteNoteText('Dbb3')}
                </text>
                <text
                  id="text_Cds3"
                  transform="translate(1038 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cds3')}
                >
                  {setWhiteNoteText('C##3')}
                </text>
                <text
                  id="text_D3"
                  transform="translate(1049 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('D3')}
                >
                  {setWhiteNoteText('D3')}
                </text>
                <text
                  id="text_Edf3"
                  transform="translate(1040 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Edf3')}
                >
                  {setWhiteNoteText('Ebb3')}
                </text>
                <text
                  id="text_E3"
                  transform="translate(1109 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('E3')}
                >
                  {setWhiteNoteText('E3')}
                </text>
                <text
                  id="text_Fb3"
                  transform="translate(1104 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fb3')}
                >
                  {setWhiteNoteText('Fb3')}
                </text>
                <text
                  id="text_Es3"
                  transform="translate(1165 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Es3')}
                >
                  {setWhiteNoteText('E#3')}
                </text>
                <text
                  id="text_F3"
                  transform="translate(1171 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('F3')}
                >
                  {setWhiteNoteText('F3')}
                </text>
                <text
                  id="text_Gdf3"
                  transform="translate(1159 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gdf3')}
                >
                  {setWhiteNoteText('Gbb3')}
                </text>
                <text
                  id="text_Fds3"
                  transform="translate(1221 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fds3')}
                >
                  {setWhiteNoteText('F##3')}
                </text>
                <text
                  id="text_G3"
                  transform="translate(1229 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('G3')}
                >
                  {setWhiteNoteText('G3')}
                </text>
                <text
                  id="text_A3"
                  transform="translate(1290 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('A3')}
                >
                  {setWhiteNoteText('A3')}
                </text>
                <text
                  id="text_Bdf3"
                  transform="translate(1281 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bdf3')}
                >
                  {setWhiteNoteText('Bbb3')}
                </text>
                <text
                  id="text_B3"
                  transform="translate(1350 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('B3')}
                >
                  {setWhiteNoteText('B3')}
                </text>
                <text
                  id="text_Bs3"
                  transform="translate(1409 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bs3')}
                >
                  {setWhiteNoteText('B#3')}
                </text>
              </g>
              <g id="wkt_octave_4">
                <text
                  id="text_Cb4"
                  transform="translate(1344 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cb4')}
                >
                  {setWhiteNoteText('Cb4')}
                </text>
                <text
                  id="text_C4"
                  transform="translate(1412 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('C4')}
                >
                  {setWhiteNoteText('C4')}
                </text>
                <text
                  id="text_Ddf4"
                  transform="translate(1403 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ddf4')}
                >
                  {setWhiteNoteText('Dbb4')}
                </text>
                <text
                  id="text_Cds4"
                  transform="translate(1461 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cds4')}
                >
                  {setWhiteNoteText('C##4')}
                </text>
                <text
                  id="text_D4"
                  transform="translate(1473 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('D4')}
                >
                  {setWhiteNoteText('D4')}
                </text>
                <text
                  id="text_Edf4"
                  transform="translate(1464 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Edf4')}
                >
                  {setWhiteNoteText('Ebb4')}
                </text>
                <text
                  id="text_E4"
                  transform="translate(1534 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('E4')}
                >
                  {setWhiteNoteText('E4')}
                </text>
                <text
                  id="text_Fb4"
                  transform="translate(1529 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fb4')}
                >
                  {setWhiteNoteText('Fb4')}
                </text>
                <text
                  id="text_Es4"
                  transform="translate(1590 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Es4')}
                >
                  {setWhiteNoteText('E#4')}
                </text>
                <text
                  id="text_F4"
                  transform="translate(1595 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('F4')}
                >
                  {setWhiteNoteText('F4')}
                </text>
                <text
                  id="text_Gdf4"
                  transform="translate(1583 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gdf4')}
                >
                  {setWhiteNoteText('Gbb4')}
                </text>
                <text
                  id="text_Fds4"
                  transform="translate(1646 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fds4')}
                >
                  {setWhiteNoteText('F##4')}
                </text>
                <text
                  id="text_G4"
                  transform="translate(1654 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('G4')}
                >
                  {setWhiteNoteText('G4')}
                </text>
                <text
                  id="text_A4"
                  transform="translate(1715 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('A4')}
                >
                  {setWhiteNoteText('A4')}
                </text>
                <text
                  id="text_Bdf4"
                  transform="translate(1705 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bdf4')}
                >
                  {setWhiteNoteText('Bbb4')}
                </text>
                <text
                  id="text_B4"
                  transform="translate(1775 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('B4')}
                >
                  {setWhiteNoteText('B4')}
                </text>
                <text
                  id="text_Bs4"
                  transform="translate(1834 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bs4')}
                >
                  {setWhiteNoteText('B#4')}
                </text>
              </g>
              <g id="wkt_octave_5">
                <text
                  id="text_Cb5"
                  transform="translate(1769 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cb5')}
                >
                  {setWhiteNoteText('Cb5')}
                </text>
                <text
                  id="text_C5"
                  transform="translate(1837 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('C5')}
                >
                  {setWhiteNoteText('C5')}
                </text>
                <text
                  id="text_Ddf5"
                  transform="translate(1828 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ddf5')}
                >
                  {setWhiteNoteText('Dbb5')}
                </text>
                <text
                  id="text_Cds5"
                  transform="translate(1886 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cds5')}
                >
                  {setWhiteNoteText('C##5')}
                </text>
                <text
                  id="text_D5"
                  transform="translate(1898 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('D5')}
                >
                  {setWhiteNoteText('D5')}
                </text>
                <text
                  id="text_Edf5"
                  transform="translate(1889 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Edf5')}
                >
                  {setWhiteNoteText('Ebb5')}
                </text>
                <text
                  id="text_E5"
                  transform="translate(1959 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('E5')}
                >
                  {setWhiteNoteText('E5')}
                </text>
                <text
                  id="text_Fb5"
                  transform="translate(1954 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fb5')}
                >
                  {setWhiteNoteText('Fb5')}
                </text>
                <text
                  id="text_Es5"
                  transform="translate(2015 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Es5')}
                >
                  {setWhiteNoteText('E#5')}
                </text>
                <text
                  id="text_F5"
                  transform="translate(2020 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('F5')}
                >
                  {setWhiteNoteText('F5')}
                </text>
                <text
                  id="text_Gdf5"
                  transform="translate(2008 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gdf5')}
                >
                  {setWhiteNoteText('Gbb5')}
                </text>
                <text
                  id="text_Fds5"
                  transform="translate(2072 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fds5')}
                >
                  {setWhiteNoteText('F##5')}
                </text>
                <text
                  id="text_G5"
                  transform="translate(2079 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('G5')}
                >
                  {setWhiteNoteText('G5')}
                </text>
                <text
                  id="text_A5"
                  transform="translate(2140 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('A5')}
                >
                  {setWhiteNoteText('A5')}
                </text>
                <text
                  id="text_Bdf5"
                  transform="translate(2130 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bdf5')}
                >
                  {setWhiteNoteText('Bbb5')}
                </text>
                <text
                  id="text_B5"
                  transform="translate(2200 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('B5')}
                >
                  {setWhiteNoteText('B5')}
                </text>
                <text
                  id="text_Bs5"
                  transform="translate(2255 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bs5')}
                >
                  {setWhiteNoteText('B#5')}
                </text>
              </g>
              <g id="wkt_octave_6">
                <text
                  id="text_Cb6"
                  transform="translate(2194 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cb6')}
                >
                  {setWhiteNoteText('Cb6')}
                </text>
                <text
                  id="text_C6"
                  transform="translate(2261 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('C6')}
                >
                  {setWhiteNoteText('C6')}
                </text>
                <text
                  id="text_Ddf6"
                  transform="translate(2252 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ddf6')}
                >
                  {setWhiteNoteText('Dbb6')}
                </text>
                <text
                  id="text_Cds6"
                  transform="translate(2310 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cds6')}
                >
                  {setWhiteNoteText('C##6')}
                </text>
                <text
                  id="text_D6"
                  transform="translate(2322 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('D6')}
                >
                  {setWhiteNoteText('D6')}
                </text>
                <text
                  id="text_Edf6"
                  transform="translate(2313 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Edf6')}
                >
                  {setWhiteNoteText('Edf6')}
                </text>
                <text
                  id="text_E6"
                  transform="translate(2383 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('E6')}
                >
                  {setWhiteNoteText('E6')}
                </text>
                <text
                  id="text_Fb6"
                  transform="translate(2378 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fb6')}
                >
                  {setWhiteNoteText('Fb6')}
                </text>
                <text
                  id="text_Es6"
                  transform="translate(2439 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Es6')}
                >
                  {setWhiteNoteText('E#6')}
                </text>
                <text
                  id="text_F6"
                  transform="translate(2444 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('F6')}
                >
                  {setWhiteNoteText('F6')}
                </text>
                <text
                  id="text_Gdf6"
                  transform="translate(2432 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gdf6')}
                >
                  {setWhiteNoteText('Gbb6')}
                </text>
                <text
                  id="text_Fds6"
                  transform="translate(2495 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fds6')}
                >
                  {setWhiteNoteText('F##6')}
                </text>
                <text
                  id="text_G6"
                  transform="translate(2503 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('G6')}
                >
                  {setWhiteNoteText('G6')}
                </text>
                <text
                  id="text_A6"
                  transform="translate(2564 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('A6')}
                >
                  {setWhiteNoteText('A6')}
                </text>
                <text
                  id="text_Bdf6"
                  transform="translate(2554 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bdf6')}
                >
                  {setWhiteNoteText('Bbb6')}
                </text>
                <text
                  id="text_B6"
                  transform="translate(2624 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('B6')}
                >
                  {setWhiteNoteText('B6')}
                </text>
                <text
                  id="text_Bs6"
                  transform="translate(2681 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bs6')}
                >
                  {setWhiteNoteText('B#6')}
                </text>
              </g>
              <g id="wkt_octave_7">
                <text
                  id="text_Cb7"
                  transform="translate(2618 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cb7')}
                >
                  {setWhiteNoteText('Cb7')}
                </text>
                <text
                  id="text_C7"
                  transform="translate(2685 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('C7')}
                >
                  {setWhiteNoteText('C7')}
                </text>
                <text
                  id="text_Ddf7"
                  transform="translate(2677 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Ddf7')}
                >
                  {setWhiteNoteText('Dbb7')}
                </text>
                <text
                  id="text_Cds7"
                  transform="translate(2734 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cds7')}
                >
                  {setWhiteNoteText('C##7')}
                </text>
                <text
                  id="text_D7"
                  transform="translate(2747 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('D7')}
                >
                  {setWhiteNoteText('D7')}
                </text>
                <text
                  id="text_Edf7"
                  transform="translate(2738 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Edf7')}
                >
                  {setWhiteNoteText('Ebb7')}
                </text>
                <text
                  id="text_E7"
                  transform="translate(2807 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('E7')}
                >
                  {setWhiteNoteText('E7')}
                </text>
                <text
                  id="text_Fb7"
                  transform="translate(2802 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fb7')}
                >
                  {setWhiteNoteText('Fb7')}
                </text>
                <text
                  id="text_Es7"
                  transform="translate(2863 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Es7')}
                >
                  {setWhiteNoteText('E#7')}
                </text>
                <text
                  id="text_F7"
                  transform="translate(2868 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('F7')}
                >
                  {setWhiteNoteText('F7')}
                </text>
                <text
                  id="text_Gdf7"
                  transform="translate(2857 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Gdf7')}
                >
                  {setWhiteNoteText('Gbb7')}
                </text>
                <text
                  id="text_Fds7"
                  transform="translate(2919 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Fds7')}
                >
                  {setWhiteNoteText('F##7')}
                </text>
                <text
                  id="text_G7"
                  transform="translate(2927 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('G7')}
                >
                  {setWhiteNoteText('G7')}
                </text>
                <text
                  id="text_A7"
                  transform="translate(2988 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('A7')}
                >
                  {setWhiteNoteText('A7')}
                </text>
                <text
                  id="text_Bdf7"
                  transform="translate(2979 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bdf7')}
                >
                  {setWhiteNoteText('Bbb7')}
                </text>
                <text
                  id="text_B7"
                  transform="translate(3048 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('B7')}
                >
                  {setWhiteNoteText('B7')}
                </text>
                <text
                  id="text_Bs7"
                  transform="translate(3106 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Bs7')}
                >
                  {setWhiteNoteText('B#7')}
                </text>
              </g>
              <g id="wkt_octave_8">
                <text
                  id="text_Cb8"
                  transform="translate(3042 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('Cb8')}
                >
                  {setWhiteNoteText('Cb8')}
                </text>
                <text
                  id="text_C8"
                  transform="translate(3110 494)"
                  fill="#4b4b4b"
                  fontSize="20"
                  fontFamily={style.fontFamily}
                  opacity={setBlackNoteText('C8')}
                >
                  {setWhiteNoteText('C8')}
                </text>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default KeyboardLarge;
