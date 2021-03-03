import React from 'react';

const Footer = ({ colors }) => {
  const style = {
    color: colors.color,
  };

  return (
    <footer style={style}>
      <p>This app was lovingly crafted by Mike Cotton.</p>
      <p>
        For enquiries please visit my{' '}
        <a style={style} href="http://www.mikecotton.co.uk">
          portfolio website
        </a>
      </p>
      <p> All rights reserved 2021.</p>
    </footer>
  );
};

export default Footer;
