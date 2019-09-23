import React from 'react';
import PropTypes from 'prop-types';

import { Block } from '../Block';

import { withPageResizer } from '../../HOC/PageResizer';

class _RedBlock extends React.Component {
  render() {
    const { height, width } = this.props;

    return (
      <Block
        height={height}
        width={width}
        color="red"
      />
    )
  }
}

_RedBlock.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export const RedBlock = withPageResizer(_RedBlock);