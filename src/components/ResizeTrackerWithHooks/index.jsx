import React from 'react';

import { Block } from '../Block';
import { PageResizer } from '../PageResizer';

export const ResizeTrackerWithHooks = () => {
  const onChildrenRender = (height, width) => (
    <Block
      height={height}
      width={width}
      color="pink"
    />
  )

  return (
    <div>
      <h1>Change browser window size</h1>
      <PageResizer
        childrenRender={onChildrenRender}
      />
    </div>
  );
}