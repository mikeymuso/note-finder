import React from 'react';

const KeyboardSmall = ({ chord, showNoteNumbering, showNoteNames }) => {
  const height = 436 / 2;
  const width = 849 / 2;

  const style = {
    fontFamily: 'HelveticaNeue, Helvetica Neue',
    fontSize: '20',
    blackKeyTextColor: 'white',
    whiteKeyColor: 'black',
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 849 436"
      >
        <g id="kbd-sm" transform="translate(0 -1097)">
          <g id="keys">
            <g id="white_keys">
              <g
                id="C3"
                transform="translate(0 1097)"
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
                transform="translate(61 1097)"
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
                id="E3"
                transform="translate(122 1097)"
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
                id="F3"
                transform="translate(182 1097)"
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
                transform="translate(243 1097)"
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
                transform="translate(303 1097)"
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
                transform="translate(364 1097)"
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
                id="C4"
                transform="translate(425 1097)"
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
                transform="translate(485 1097)"
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
                transform="translate(546 1097)"
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
                id="F4"
                transform="translate(607 1097)"
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
                id="G4"
                transform="translate(667 1097)"
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
                transform="translate(728 1097)"
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
                transform="translate(788 1097)"
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
            <g id="black_keys">
              <rect
                id="Db3"
                width="35"
                height="266"
                transform="translate(37 1097)"
              />
              <rect
                id="Eb3"
                width="35"
                height="266"
                transform="translate(109 1097)"
              />
              <rect
                id="Gb3"
                width="36"
                height="266"
                transform="translate(220 1097)"
              />
              <rect
                id="Ab3"
                width="35"
                height="266"
                transform="translate(289 1097)"
              />
              <rect
                id="Bb3"
                width="35"
                height="266"
                transform="translate(353 1097)"
              />
              <rect
                id="Db4"
                width="35"
                height="266"
                transform="translate(461 1097)"
              />
              <rect
                id="Eb4"
                width="35"
                height="266"
                transform="translate(533 1097)"
              />
              <rect
                id="Gb4"
                width="35"
                height="266"
                transform="translate(645 1097)"
              />
              <rect
                id="Ab4"
                width="35"
                height="266"
                transform="translate(714 1097)"
              />
              <rect
                id="Bb4"
                width="35"
                height="266"
                transform="translate(777 1097)"
              />
            </g>
          </g>
          <g id="dots">
            <g id="white_dots">
              <g
                id="dot_C3"
                transform="translate(11 1403)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.C3 ? 1 : 0}
              >
                <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                <circle cx="19.5" cy="19.5" r="19" fill="none" />
              </g>
              <g
                id="dot_D3"
                transform="translate(72 1403)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.D3 ? 1 : 0}
              >
                <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
              </g>
              <g
                id="dot_E3"
                transform="translate(133 1403)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.E3 || chord.Fb3 ? 1 : 0}
              >
                <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
              </g>
              <g
                id="dot_F3"
                transform="translate(193 1403)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.F3 || chord.Es3 ? 1 : 0}
              >
                <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                <circle cx="19.5" cy="19.5" r="19" fill="none" />
              </g>
              <g
                id="dot_G3"
                transform="translate(254 1403)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.G3 ? 1 : 0}
              >
                <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
              </g>
              <g
                id="dot_A3"
                transform="translate(315 1403)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.A3 ? 1 : 0}
              >
                <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
              </g>
              <g
                id="dot_B3"
                transform="translate(375 1403)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.B3 || chord.Cb4 ? 1 : 0}
              >
                <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                <circle cx="19.5" cy="19.5" r="19" fill="none" />
              </g>
              <g
                id="dot_C4"
                transform="translate(436 1403)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.C4 || chord.Bs3 ? 1 : 0}
              >
                <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
              </g>
              <g
                id="dot_D4"
                transform="translate(496 1403)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.D4 ? 1 : 0}
              >
                <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                <circle cx="19.5" cy="19.5" r="19" fill="none" />
              </g>
              <g
                id="dot_E4"
                transform="translate(557 1403)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.E4 || chord.Fb4 ? 1 : 0}
              >
                <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
              </g>
              <g
                id="dot_F4"
                transform="translate(618 1403)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.F4 || chord.Es4 ? 1 : 0}
              >
                <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
              </g>
              <g
                id="dot_G4"
                transform="translate(678 1403)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.G4 ? 1 : 0}
              >
                <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                <circle cx="19.5" cy="19.5" r="19" fill="none" />
              </g>
              <g
                id="dot_A4"
                transform="translate(739 1403)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.A4 ? 1 : 0}
              >
                <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
              </g>
              <g
                id="dot_B4"
                transform="translate(800 1403)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.B4 ? 1 : 0}
              >
                <ellipse cx="19" cy="19.5" rx="19" ry="19.5" stroke="none" />
                <ellipse cx="19" cy="19.5" rx="18.5" ry="19" fill="none" />
              </g>
            </g>
            <g id="black_dots">
              <g
                id="dot_Db3"
                transform="translate(40 1295)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.Db3 || chord.Cs3 ? 1 : 0}
              >
                <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                <circle cx="14.5" cy="14.5" r="14" fill="none" />
              </g>
              <g
                id="dot_Eb3"
                transform="translate(112 1295)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.Eb3 || chord.Ds3 ? 1 : 0}
              >
                <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                <circle cx="14.5" cy="14.5" r="14" fill="none" />
              </g>
              <g
                id="dot_Gb3"
                transform="translate(224 1295)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.Gb3 || chord.Fs3 ? 1 : 0}
              >
                <ellipse cx="14" cy="14.5" rx="14" ry="14.5" stroke="none" />
                <ellipse cx="14" cy="14.5" rx="13.5" ry="14" fill="none" />
              </g>
              <g
                id="dot_Ab3"
                transform="translate(292 1295)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.Ab3 || chord.Gs3 ? 1 : 0}
              >
                <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                <circle cx="14.5" cy="14.5" r="14" fill="none" />
              </g>
              <g
                id="dot_Bb3"
                transform="translate(356 1295)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.Bb3 || chord.As3 ? 1 : 0}
              >
                <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                <circle cx="14.5" cy="14.5" r="14" fill="none" />
              </g>
              <g
                id="dot_Db4"
                transform="translate(465 1295)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.Db4 || chord.Cs4 ? 1 : 0}
              >
                <ellipse cx="14" cy="14.5" rx="14" ry="14.5" stroke="none" />
                <ellipse cx="14" cy="14.5" rx="13.5" ry="14" fill="none" />
              </g>
              <g
                id="dot_Eb4"
                transform="translate(536 1295)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.Eb4 || chord.Ds4 ? 1 : 0}
              >
                <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                <circle cx="14.5" cy="14.5" r="14" fill="none" />
              </g>
              <g
                id="dot_Gb4"
                transform="translate(648 1295)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.Gb4 || chord.Fs4 ? 1 : 0}
              >
                <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                <circle cx="14.5" cy="14.5" r="14" fill="none" />
              </g>
              <g
                id="dot_Ab4"
                transform="translate(717 1295)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.Ab4 || chord.Gs4 ? 1 : 0}
              >
                <ellipse cx="14" cy="14.5" rx="14" ry="14.5" stroke="none" />
                <ellipse cx="14" cy="14.5" rx="13.5" ry="14" fill="none" />
              </g>
              <g
                id="dot_Bb4"
                transform="translate(781 1295)"
                fill="#ff0f0f"
                stroke="#620000"
                strokeWidth="1"
                opacity={chord.Bb4 || chord.As4 ? 1 : 0}
              >
                <ellipse cx="14" cy="14.5" rx="14" ry="14.5" stroke="none" />
                <ellipse cx="14" cy="14.5" rx="13.5" ry="14" fill="none" />
              </g>
            </g>
          </g>
          <g id="text">
            <g id="white_key_text">
              <text
                id="text_C3"
                transform="translate(18 1510)"
                fill={style.whiteKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.C3 && showNoteNames ? 1 : 0}
              >
                {showNoteNumbering ? (
                  <tspan x="0" y="0">
                    C3
                  </tspan>
                ) : (
                  <tspan x="5" y="0">
                    C
                  </tspan>
                )}
              </text>
              <text
                id="text_D3"
                transform="translate(79 1510)"
                fill={style.whiteKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.D3 && showNoteNames ? 1 : 0}
              >
                {showNoteNumbering ? (
                  <tspan x="0" y="0">
                    D3
                  </tspan>
                ) : (
                  <tspan x="5" y="0">
                    D
                  </tspan>
                )}
              </text>
              <text
                id="text_E3"
                transform="translate(140 1510)"
                fill={style.whiteKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.E3 && showNoteNames ? 1 : 0}
              >
                {showNoteNumbering ? (
                  <tspan x="0" y="0">
                    E3
                  </tspan>
                ) : (
                  <tspan x="5" y="0">
                    E
                  </tspan>
                )}
              </text>
              <text
                id="text_Es3"
                transform="translate(201 1510)"
                fill={style.whiteKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Es3 && showNoteNames ? 1 : 0}
              >
                {showNoteNumbering ? (
                  <tspan x="0" y="0">
                    E#3
                  </tspan>
                ) : (
                  <tspan x="5" y="0">
                    E#
                  </tspan>
                )}
              </text>
              <text
                id="text_Fb3"
                transform="translate(140 1510)"
                fill={style.whiteKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Fb3 && showNoteNames ? 1 : 0}
              >
                {showNoteNumbering ? (
                  <tspan x="0" y="0">
                    Fb3
                  </tspan>
                ) : (
                  <tspan x="5" y="0">
                    Fb
                  </tspan>
                )}
              </text>
              <text
                id="text_F3"
                transform="translate(201 1510)"
                fill={style.whiteKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.F3 && showNoteNames ? 1 : 0}
              >
                {showNoteNumbering ? (
                  <tspan x="0" y="0">
                    F3
                  </tspan>
                ) : (
                  <tspan x="5" y="0">
                    F
                  </tspan>
                )}
              </text>
              <text
                id="text_G3"
                transform="translate(261 1510)"
                fill={style.whiteKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.G3 && showNoteNames ? 1 : 0}
              >
                {showNoteNumbering ? (
                  <tspan x="0" y="0">
                    G3
                  </tspan>
                ) : (
                  <tspan x="5" y="0">
                    G
                  </tspan>
                )}
              </text>
              <text
                id="text_A3"
                transform="translate(322 1510)"
                fill={style.whiteKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.A3 && showNoteNames ? 1 : 0}
              >
                {showNoteNumbering ? (
                  <tspan x="0" y="0">
                    A3
                  </tspan>
                ) : (
                  <tspan x="5" y="0">
                    A
                  </tspan>
                )}
              </text>
              <text
                id="text_B3"
                transform="translate(382 1510)"
                fill={style.whiteKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.B3 && showNoteNames ? 1 : 0}
              >
                {showNoteNumbering ? (
                  <tspan x="0" y="0">
                    B3
                  </tspan>
                ) : (
                  <tspan x="5" y="0">
                    B
                  </tspan>
                )}
              </text>
              <text
                id="text_Bs3"
                transform="translate(438 1510)"
                fill={style.whiteKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Bs3 && showNoteNames ? 1 : 0}
              >
                {showNoteNumbering ? (
                  <tspan x="0" y="0">
                    B#3
                  </tspan>
                ) : (
                  <tspan x="5" y="0">
                    B#
                  </tspan>
                )}
              </text>
              <text
                id="text_Cb4"
                transform="translate(376 1510)"
                fill={style.whiteKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Cb4 && showNoteNames ? 1 : 0}
              >
                {showNoteNumbering ? (
                  <tspan x="0" y="0">
                    Cb4
                  </tspan>
                ) : (
                  <tspan x="5" y="0">
                    Cb
                  </tspan>
                )}
              </text>
              <text
                id="text_C4"
                transform="translate(442 1510)"
                fill={style.whiteKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.C4 && showNoteNames ? 1 : 0}
              >
                {showNoteNumbering ? (
                  <tspan x="0" y="0">
                    C4
                  </tspan>
                ) : (
                  <tspan x="5" y="0">
                    C
                  </tspan>
                )}
              </text>
              <text
                id="text_D4"
                transform="translate(503 1510)"
                fill={style.whiteKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.D4 && showNoteNames ? 1 : 0}
              >
                {showNoteNumbering ? (
                  <tspan x="0" y="0">
                    D4
                  </tspan>
                ) : (
                  <tspan x="5" y="0">
                    D
                  </tspan>
                )}
              </text>
              <text
                id="text_E4"
                transform="translate(564 1510)"
                fill={style.whiteKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.E4 && showNoteNames ? 1 : 0}
              >
                {showNoteNumbering ? (
                  <tspan x="0" y="0">
                    E4
                  </tspan>
                ) : (
                  <tspan x="5" y="0">
                    E
                  </tspan>
                )}
              </text>
              <text
                id="text_Es4"
                transform="translate(620 1510)"
                fill={style.whiteKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Es4 && showNoteNames ? 1 : 0}
              >
                {showNoteNumbering ? (
                  <tspan x="0" y="0">
                    E#4
                  </tspan>
                ) : (
                  <tspan x="5" y="0">
                    E#
                  </tspan>
                )}
              </text>
              <text
                id="text_Fb4"
                transform="translate(559 1510)"
                fill={style.whiteKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Fb4 && showNoteNames ? 1 : 0}
              >
                {showNoteNumbering ? (
                  <tspan x="0" y="0">
                    Fb4
                  </tspan>
                ) : (
                  <tspan x="5" y="0">
                    Fb
                  </tspan>
                )}
              </text>

              <text
                id="text_F4"
                transform="translate(625 1510)"
                fill={style.whiteKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.F4 && showNoteNames ? 1 : 0}
              >
                {showNoteNumbering ? (
                  <tspan x="0" y="0">
                    F4
                  </tspan>
                ) : (
                  <tspan x="5" y="0">
                    F
                  </tspan>
                )}
              </text>
              <text
                id="text_G4"
                transform="translate(684 1510)"
                fill={style.whiteKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.G4 && showNoteNames ? 1 : 0}
              >
                {showNoteNumbering ? (
                  <tspan x="0" y="0">
                    G4
                  </tspan>
                ) : (
                  <tspan x="5" y="0">
                    G
                  </tspan>
                )}
              </text>
              <text
                id="text_A4"
                transform="translate(745 1510)"
                fill={style.whiteKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.A4 && showNoteNames ? 1 : 0}
              >
                {showNoteNumbering ? (
                  <tspan x="0" y="0">
                    A4
                  </tspan>
                ) : (
                  <tspan x="5" y="0">
                    A
                  </tspan>
                )}
              </text>
              <text
                id="text_B4"
                transform="translate(806 1510)"
                fill={style.whiteKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.B4 && showNoteNames ? 1 : 0}
              >
                {showNoteNumbering ? (
                  <tspan x="0" y="0">
                    B4
                  </tspan>
                ) : (
                  <tspan x="5" y="0">
                    B
                  </tspan>
                )}
              </text>
            </g>
            <g id="black_key_text">
              <text
                id="text_Cs3"
                transform="translate(42 1275)"
                fill={style.blackKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Cs3 && showNoteNames ? 1 : 0}
              >
                <tspan x="0" y="0">
                  C#
                </tspan>
              </text>
              <text
                id="text_Ds3"
                transform="translate(114 1274)"
                fill={style.blackKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Ds3 && showNoteNames ? 1 : 0}
              >
                <tspan x="0" y="0">
                  D#
                </tspan>
              </text>
              <text
                id="text_Fs3"
                transform="translate(225 1274)"
                fill={style.blackKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Fs3 && showNoteNames ? 1 : 0}
              >
                <tspan x="0" y="0">
                  F#
                </tspan>
              </text>
              <text
                id="text_Gs3"
                transform="translate(295 1274)"
                fill={style.blackKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Gs3 && showNoteNames ? 1 : 0}
              >
                <tspan x="0" y="0">
                  G#
                </tspan>
              </text>
              <text
                id="text_As3"
                transform="translate(357 1274)"
                fill={style.blackKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.As3 && showNoteNames ? 1 : 0}
              >
                <tspan x="0" y="0">
                  A#
                </tspan>
              </text>
              <text
                id="text_Cs4"
                transform="translate(467 1274)"
                fill={style.blackKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Cs4 && showNoteNames ? 1 : 0}
              >
                <tspan x="0" y="0">
                  C#
                </tspan>
              </text>
              <text
                id="text_Ds4"
                transform="translate(539 1274)"
                fill={style.blackKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Ds4 && showNoteNames ? 1 : 0}
              >
                <tspan x="0" y="0">
                  D#
                </tspan>
              </text>
              <text
                id="text_Fs4"
                transform="translate(650 1274)"
                fill={style.blackKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Fs4 && showNoteNames ? 1 : 0}
              >
                <tspan x="0" y="0">
                  F#
                </tspan>
              </text>
              <text
                id="text_Gs4"
                transform="translate(719 1274)"
                fill={style.blackKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Gs4 && showNoteNames ? 1 : 0}
              >
                <tspan x="0" y="0">
                  G#
                </tspan>
              </text>
              <text
                id="text_As4"
                transform="translate(783 1274)"
                fill={style.blackKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.As4 && showNoteNames ? 1 : 0}
              >
                <tspan x="0" y="0">
                  A#
                </tspan>
              </text>
              <text
                id="text_Db3"
                transform="translate(42 1274)"
                fill={style.blackKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Db3 && showNoteNames ? 1 : 0}
              >
                <tspan x="0" y="0">
                  Db
                </tspan>
              </text>
              <text
                id="text_Eb3"
                transform="translate(114 1274)"
                fill={style.blackKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Eb3 && showNoteNames ? 1 : 0}
              >
                <tspan x="0" y="0">
                  Eb
                </tspan>
              </text>
              <text
                id="text_Gb3"
                transform="translate(225 1274)"
                fill={style.blackKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Gb3 && showNoteNames ? 1 : 0}
              >
                <tspan x="0" y="0">
                  Gb
                </tspan>
              </text>
              <text
                id="text_Ab3"
                transform="translate(295 1274)"
                fill={style.blackKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Ab3 && showNoteNames ? 1 : 0}
              >
                <tspan x="0" y="0">
                  Ab
                </tspan>
              </text>
              <text
                id="text_Bb3"
                transform="translate(357 1274)"
                fill={style.blackKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Bb3 && showNoteNames ? 1 : 0}
              >
                <tspan x="0" y="0">
                  Bb
                </tspan>
              </text>
              <text
                id="text_Db4"
                transform="translate(467 1274)"
                fill={style.blackKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Db4 && showNoteNames ? 1 : 0}
              >
                <tspan x="0" y="0">
                  Db
                </tspan>
              </text>
              <text
                id="text_Eb4"
                transform="translate(539 1274)"
                fill={style.blackKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Eb4 && showNoteNames ? 1 : 0}
              >
                <tspan x="0" y="0">
                  Eb
                </tspan>
              </text>
              <text
                id="text_Gb4"
                transform="translate(650 1274)"
                fill={style.blackKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Gb4 && showNoteNames ? 1 : 0}
              >
                <tspan x="0" y="0">
                  Gb
                </tspan>
              </text>
              <text
                id="text_Ab4"
                transform="translate(719 1274)"
                fill={style.blackKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Ab4 && showNoteNames ? 1 : 0}
              >
                <tspan x="0" y="0">
                  Ab
                </tspan>
              </text>
              <text
                id="text_Bb4"
                transform="translate(783 1274)"
                fill={style.blackKeyTextColor}
                fontSize={style.fontSize}
                fontFamily={style.fontFamily}
                opacity={chord.Bb4 && showNoteNames ? 1 : 0}
              >
                <tspan x="0" y="0">
                  Bb
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default KeyboardSmall;
