import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

export const PageResizerWithHooks = (props) => {
  const { childrenRender } = props;
  const [height, changeHeight] = useState(window.innerHeight);
  const [width, changeWidth] = useState(window.innerWidth);
  const onResize = () => {
    changeHeight(window.innerHeight);
    changeWidth(window.innerWidth);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    }
  })

  return (
    <div>
      <div>
        <div>
          Width
            <label>{width}</label>
        </div>
        <div>
          Height
            <label>{height}</label>
        </div>
      </div>
      {childrenRender(height / 2, width / 2)}
    </div>
  );
}

PageResizerWithHooks.propTypes = {
  childrenRender: PropTypes.func.isRequired,
}
