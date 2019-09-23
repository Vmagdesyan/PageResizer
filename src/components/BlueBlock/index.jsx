import React from 'react';
import PropTypes from 'prop-types';

import { Block } from '../Block';

import { withPageResizerWithHooks } from '../../HOC/PageResizerWithHooks';

class _BlueBlock extends React.Component {
  render() {
    const { height, width } = this.props;

    return (
      <Block
        height={height}
        width={width}
        color="blue"
      />
    )
  }
}

_BlueBlock.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export const BlueBlock = withPageResizerWithHooks(_BlueBlock);
