import React from 'react';

const KeyboardKey = ({ colors }) => {
  const style = {
    dot_stroke_LH: '#0018C4',
    dot_stroke_RH: '#620000',
    dot_fill_LH: '#6268FF',
    dot_fill_RH: '#ff0f0f',
  };

  return (
    <div className="keyboard-key">
      <div className="key-LH">
        <span style={{ color: colors.color }}>Left hand</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 346 346"
        >
          <g
            id="Ellipse_103"
            data-name="Ellipse 103"
            fill="#ff0f0f"
            stroke="#620000"
            stroke-width="10"
          >
            <circle cx="173" cy="173" r="173" stroke={style.dot_stroke_LH} />
            <circle cx="173" cy="173" r="168" fill={style.dot_fill_LH} />
          </g>
        </svg>
      </div>
      <div className="key-RH">
        <span style={{ color: colors.color }}>Right hand</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 346 346"
        >
          <g
            id="Ellipse_103"
            data-name="Ellipse 103"
            fill="#ff0f0f"
            stroke="#620000"
            stroke-width="10"
          >
            <circle cx="173" cy="173" r="173" stroke={style.dot_stroke_RH} />
            <circle cx="173" cy="173" r="168" fill={style.dot_fill_RH} />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default KeyboardKey;
