import React from 'react';

import { Block } from '../Block';
import { PageResizer } from '../PageResizer';

export class ResizeTracker extends React.Component {
  onChildrenRender = (height, width) => (
    <Block
      height={height}
      width={width}
      color="green"
    />
  )

  render() {
    return(
      <div>
        <h1>Change browser window size</h1>
        <PageResizer
          childrenRender={this.onChildrenRender}
        />
      </div>
    );
  }
}