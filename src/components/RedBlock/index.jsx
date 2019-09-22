import React from 'react';

import PropTypes from 'prop-types';

import { withPageResizer } from '../../HOC/PageResizer';

class _RedBlock extends React.Component {
  render() {
    const { height, width } = this.props;
    const rootStyle = {
      height,
      width,
      backgroundColor: 'red',
    };

    return (
      <div style={rootStyle}>
        Красный блок
      </div>
    )
  }
}

_RedBlock.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export const RedBlock = withPageResizer(_RedBlock);