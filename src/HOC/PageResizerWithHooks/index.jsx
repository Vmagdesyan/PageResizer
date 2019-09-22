import React from 'react';

import { PageResizerWithHooks } from '../../components/PageResizerWithHooks';

export function withPageResizerWithHooks(ChildrenComponent) {
  return class extends React.Component {
    onChildrenRender = (height, width) => (
      <ChildrenComponent
        height={height}
        width={width}
      />
    )

    render() {
      return (
        <PageResizerWithHooks
          childrenRender={this.onChildrenRender}
        />
      );
    }
  }
}