import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const PageResizerWithHooks = (props) => {
  const { childrenRender } = props;
  const [ height, changeHeight ] = useState(500);
  const [ width, changeWidth ] = useState(500);
  const onChangeHeight = (event) => changeHeight(Number(event.target.value));
  const onChangeWidth = (event) => changeWidth(Number(event.target.value));

  return (
    <div>
      <div>
        <div>
          Width
            <input
            onChange={onChangeWidth}
            value={width}
          />
        </div>
        <div>
          Height
            <input
            onChange={onChangeHeight}
            value={height}
          />
        </div>
      </div>
      {childrenRender(height, width)}
    </div>
  );
}

PageResizerWithHooks.propTypes = {
  childrenRender: PropTypes.func.isRequired,
}
