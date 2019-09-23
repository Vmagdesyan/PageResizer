import React from 'react';
import PropTypes from 'prop-types';

export const Block = (props) => {
  const { height, width, color = 'blue' } = props;
  const rootStyle = {
    height,
    width,
    backgroundColor: color,
  };

  return (
    <div style={rootStyle}>
      {color} block
      </div>
  );
}

Block.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
