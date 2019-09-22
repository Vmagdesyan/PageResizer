import React from 'react';
import PropTypes from 'prop-types';

import { withPageResizerWithHooks } from '../../HOC/PageResizerWithHooks';

class _BlueBlock extends React.Component {
  render() {
    const { height, width } = this.props;
    const rootStyle = {
      height,
      width,
      backgroundColor: 'blue',
    };

    return (
      <div style={rootStyle}>
        Голубой блок
      </div>
    )
  }
}

_BlueBlock.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export const BlueBlock = withPageResizerWithHooks(_BlueBlock);
